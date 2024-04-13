import OpenAI from "openai";
import { MongoClient } from 'mongodb';

const client = new MongoClient(`mongodb://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@db:27017/qna?authSource=admin`);

const openai = new OpenAI({
  organization: 'org-qSd9dRllepQtd1tuPB4bJyYi',
  apiKey: process.env.OPENAI_SECRET_KEY,
});

async function retrieveAssistants(ids: string[]) {
  try {
    const retrievePromises = ids.map(id => openai.beta.assistants.retrieve(id));
    const assistants = await Promise.all(retrievePromises);
    return assistants;
  } catch (error) {
    console.error("Failed to retrieve assistants:", error);
    throw error;
  }
}

const assistantIds = [
  'asst_naw7IP375gfq3WiJCgH6CmB2', // richard
  'asst_nGnkicSRHpuRV6e4GCvv7W0t', // jeffrey
];

async function handler(req: any) {
  const body = await req.json();
  let res;
  let toInsert: any[] = [];
  const { sender, content, threadInfo } = body;

  const assistants = await retrieveAssistants(assistantIds)
  const assistant = assistants.find(p => p.name === sender);

  if (!assistant) return new Response(JSON.stringify("assistant retrieval error"), { status: 400 });

  let thread: OpenAI.Beta.Threads.Thread;
  try {
    thread = await openai.beta.threads.retrieve( threadInfo );
  } catch {
    thread = await openai.beta.threads.create();
    let msg = await openai.beta.threads.messages.create(
      thread.id,
      { role: "assistant", content: threadInfo }
    );

    toInsert.push({
      threadId: thread.id,
      msgId: msg.id,
      reqId: null,
      role: "assistant",
      assistantId: assistant.id,
      assistantName: assistant.name,
      timeStamp: new Date,
      content: threadInfo
    });
  }

  let msg = await openai.beta.threads.messages.create(
    thread.id,
    { role: "user", content: content }
  );

  toInsert.push({
    threadId: thread.id,
    msgId: msg.id,
    reqId: null,
    role: "user",
    assistantId: null,
    assistantName: null,
    timeStamp: new Date,
    content: content
  });

  let run = await openai.beta.threads.runs.createAndPoll(
    thread.id,
    { assistant_id: assistant.id }
  );

  if (run.status === 'completed') {
    const messages = await openai.beta.threads.messages.list( thread.id );
    const response = (messages.data[0].content[0] as any).text.value;
    toInsert.push({
      threadId: thread.id,
      msgId: messages.data[0].id,
      reqId: msg.id,
      role: "assistant",
      assistantId: assistant.id,
      assistantName: assistant.name,
      timeStamp: new Date,
      content: response
    }); 
    res = new Response(JSON.stringify({ msg: response, tid: thread.id }), { status: 200 });
  } else {
    res = new Response(JSON.stringify({ msg: "I am currently unavailable", stat: run.status }), { status: 400 });
  }

  try {
    await client.connect();
    console.log("Connected successfully to server");

    const db = client.db('qna');
    const collection = db.collection('msg');
    
    await collection.insertMany(toInsert);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
    console.log("MongoDB client closed.");
  }

  return res;
}

export { handler as GET, handler as POST }