import { MongoClient } from 'mongodb';

const client = new MongoClient(`mongodb://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@db:27017/qna?authSource=admin`);

async function handler(req: any) {
  const body = await req.json();
  let res;
  const { threadId } = body;

  if (process.env.USE_DATABASE != "false"){  
    try {
      await client.connect();
      console.log("Connected successfully to server");

      const db = client.db('qna');
      const collection = db.collection('msg');
      if (!threadId) {
        const pipeline = [
          { $match: { assistantName: "Hedron" } },
          { $group: { _id: "$threadId" } }
        ]
        const threads = await collection.aggregate(pipeline).toArray();
        res = new Response(JSON.stringify({ msg: threads }), { status: 200 });  
      } else {
        const pipeline = [
          { $match: { threadId: threadId } }
        ]
        const messages = await collection.aggregate(pipeline).toArray();
        res = new Response(JSON.stringify({ msg: messages }), { status: 200 }); 
      }
    } catch (e) {
      console.error(e);
      res = new Response(JSON.stringify({ msg: e }), { status: 400 }); 
    } finally {
      await client.close();
      console.log("MongoDB client closed.");
    }
  } else {
    res = new Response(JSON.stringify({ msg: ["database down", "database down", "database down", "database down", "database down", "database down", "database down", "database down", "database down", "database down", "database down", "database down", "database down", "database down" ] }), { status: 202 }); 
    // res = new Response(JSON.stringify({ msg: "database down" }), { status: 503 }); 
  }

  return res;
}

export { handler as GET, handler as POST }