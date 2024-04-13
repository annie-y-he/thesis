'use client';

import { div } from 'three/examples/jsm/nodes/Nodes.js';
import s from './page.module.scss'
import { useState, useEffect, useRef } from 'react'
import textFieldEdit, { insertTextIntoField } from 'text-field-edit';
import Image from 'next/image';
import HedronIcon from '@/images/hedronWhite.png'
import Link from 'next/link';

interface Msg {
  role: "user" | "assistant";
  content: string;
}

const playAudio = (audio: React.MutableRefObject<null>) => {
  if (audio.current) {
    (audio.current as any).play();
  }
};

const sendMsg = async ( 
  content: string, 
  audioIn: React.MutableRefObject<null>, 
  audioOut: React.MutableRefObject<null>, 
  setMsg: React.Dispatch<React.SetStateAction<Msg[]>>, 
  setTid: React.Dispatch<React.SetStateAction<string>>, 
  setLock: React.Dispatch<React.SetStateAction<boolean>>,
  threadId: string) => {
  setLock(true);
  playAudio(audioIn);
  setMsg(curMsg => [...curMsg, { role: "user", content: content }]);

  const response = await fetch('/api/gpt', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      sender: "Hedron", 
      content: content,
      threadInfo: threadId
    }),
  });

  const body = await response.json();

  setMsg(curMsg => [...curMsg, { role: "assistant", content: body.msg }]);
  setTid(body.tid)
  playAudio(audioOut);
  setLock(false);
}

export default function Topo() {
  const [textOpen, setTextOpen] = useState(false);
  const [msgHist, setMsgHist] = useState<Msg[]>([]);
  const [textContent, setTextContent] = useState("");
  const [threadId, setThreadId] = useState("");
  const [textLock, setTextLock] = useState(false);

  const sendSound = useRef(null);
  const recvSound = useRef(null);

  const viewer = useRef<HTMLDivElement>(null);

  const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextContent(event.target.value);
  };

  useEffect(() => {
    viewer.current?.scrollTo(0, viewer.current.scrollHeight);
  }, [msgHist]);

  const sendButton = () => {
    sendMsg(textContent, sendSound, recvSound, setMsgHist, setThreadId, setTextLock, threadId);
    setTextContent('');
  }

  return (
    <div className={s.main}>
      <h1>HEDRON</h1>
      <button onClick={() => setTextOpen(!textOpen)}>ASK</button>
      {textOpen && (<div className={s.ask}>
        <div ref={viewer}>
        {msgHist.map((item, index) => (
          <div key={index}>
            {item.role == "user" ? <div style={{ fontWeight: "bold" }}>You</div> : <div style={{ fontWeight: "bold" }}>Hedron</div>}
            <div>{item.content}</div>
          </div>
        ))}
        </div>
        <div>
          <textarea
            value={textContent}
            placeholder={textLock ? "formulating resonse..." : "ask about this project"}
            readOnly={textLock}
            onChange={handleContentChange}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault(); 
                if (e.shiftKey) {
                  insertTextIntoField(e.target as HTMLTextAreaElement, "\n")
                } else {
                  sendButton(); 
                }
              }
            }}
          />
          <button onClick={sendButton}>send</button>
          <button onClick={() => {setThreadId(""); setMsgHist([])}}>clear</button>
        </div>

      </div>)}
      <h3>INTRODUCTION</h3>
      <p><b>VERSUS VS. VERSES</b>: A quaternary view on existence.</p>

      <p>It is most likely that you have used the word "versus" before. We like to compare things in pairs of two: "Subject versus Object", "Physical versus Virtual", "Analog versus Digital", etc. The binary perception of ideas protects us from the complexity of existences. One of the main goals of postmodernism is to introduce us to this complexity again. But why complexity versus contradiction, why one or the other? Have we not thus fallen into the very thing we oppose? Why do we not find a middle ground where we have, arbitrarily speaking, quaternaries?</p>
      
      <p>Instead of focusing solely on "versus", we will introduce the idea of "verses". Verses are the corners, or vertices, of existence. There are four verses: Metaverse, Pataverse, Universe, Topoverse. They are used to frame the space where we fiddle with relationships between ideas. This way, we are not overwhelmed by the n-dimensional complexity of reality, but also not retreat into the safe space of binaries.</p>

      <p>We will not oppose binaries, since they are the fundamentals of relationships, but we will not be blinded by them, since they are not the entireties of relationships.</p>

      <p><b>WORLDS VS. STORIES</b>{": A method for {building, telling} × {worlds, stories}."}</p>

      <p>Imagine being tasked to draw a circle of ten-inch radius. Unfortunately, your pen has only one inch of ink left. How would you proceed with the drawing? Would you draw a smaller circle? Would you draw an incomplete circle? Or would you frame the circle with dotted lines? It appears that the last method is the most effective as it does not sacrifice the size or the form.</p>

      <p>Imagine wanting to create a world as sophisticated as the one we live in, but you have limited time or audience attention. Instead of sacrificing the scale or comprehensiveness of your world, we could infer the boundary through fragmented details.</p>

      <p>Imagine wanting to tell a story of a certain philosophical depth, but you are hindered by the responsibility to build a world of a level of believability. Instead of leaving the story floating, or spend an eternity on God mode, we could insert the above-mentioned fragments of details that build the world for us.</p>

      <p>Worlds are existences that are perceptible by us (the average audience is probably human). Call it cognitive association or apophenia, it serves the architect well.</p>

      <h3>DEFINITIONS</h3>
      <p>HEDRON</p>
      <p>Hilarious Exploratory Designs Regarding Ontological Narratives</p>

      <p>MONAD</p>
      <p>Origin: Originated from the Greek word for "unit", it referred to the first number or unit that was the basis for the rest of the numbers in a sequence.</p>
      <p>Definition: Monad is an indivisible unit of existence.</p>
      <p>Explanation: The entirety of existence contains an infinite number of monads, which are infinitely small and abstract. We may not perceive individual monads or the entirety of existence.</p>

      <p>VERSE</p>
      <p>Origin: Stripped from the word universe and related words.</p>
      <p>Definition: A verse is a perspective on existence. It groups monads according to a singular rule.</p>
      <p>Explanation: Every verse contains all monads, therefore are not perceptible in its entirety. Although different verses might seem mutually exclusive, they are fundamentally identical in terms of their constituents.</p>

      <p>WORLD</p>
      <p>Origin: Historically denotes the subjective human experience regarded collectively or the human collective existence.</p>
      <p>Definition: A world is a finite collection of monads.</p>
      <p>Explanation: A world is a subset of existence. Its finity makes it possible to be observed. As opposed to verses which just are, worlds are closely related to human perception.</p>

      <h3>INSTRUCTIONS</h3>
      <p>MainPage:</p>
      <ul>
        <li>an interactive 3d scene</li>
        <li>orbit around</li>
        <li>click on words to see definitions</li>
        <li>go to projects from verses</li>
        <li>spread project keywords in space</li>
      </ul>
      <p>Pataverse:</p>
      <ul>
        <li>an interactive game</li>
        <li>an operating system</li>
        <li>a desktop</li>
        <li>drag stuff around</li>
        <li>open different apps</li>
        <li>print stuff</li>
        <li>message friends</li>
      </ul>
      <p>Metaverse:</p>
      <ul>
        <li>a repository</li>
        <li>read project report</li>
        <li>watch project demo</li>
      </ul>
      <p>Topoverse:</p>
      <ul>
        <li>a video website</li>
        <li>watch videos</li>
      </ul>
      <p>Universe:</p>
      <ul>
        <li>a scientific research paper website</li>
        <li>read different articles</li>
      </ul>

      <h3>CHALLENGE</h3>
      <div>on each page, find the button that takes you back to the main page</div>
      <Link href="/">
        <Image src={HedronIcon} width={0} height={50} alt="icon" />
      </Link>

      <audio ref={sendSound} preload="auto">
        <source src="/audio/swoosh.wav" type="audio/wav" />
      </audio>
      <audio ref={recvSound} preload="auto">
        <source src="/audio/notify.wav" type="audio/wav" />
      </audio>
    </div>
  )
}