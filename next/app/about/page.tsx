'use client';

import { div } from 'three/examples/jsm/nodes/Nodes.js';
import s from './page.module.scss'
import { useState, useEffect, useRef } from 'react'
import textFieldEdit, { insertTextIntoField } from 'text-field-edit';
import Image from 'next/image';
import HedronIcon from '@/images/hedronWhite.png'
import Link from 'next/link';
import useWindowHeight from '../hooks/useWindowHeight';
import useInactivityRedirect from '../hooks/useInactivityRedirect';
import { SiteStruct } from './SiteStruct';
import Markdown from 'react-markdown'
const BP = process.env.NEXT_PUBLIC_BASE_PATH;

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

  const response = await fetch(BP + '/api/gpt', {
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
  useWindowHeight();
  useInactivityRedirect();
  const [textOpen, setTextOpen] = useState(false);
  const [msgHist, setMsgHist] = useState<Msg[]>([]);
  const [textContent, setTextContent] = useState("");
  const [threadId, setThreadId] = useState(SiteStruct);
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
        {msgHist.length ? msgHist.map((item, index) => (
          <div key={index}>
            {item.role == "user" ? <h3 style={{ fontWeight: "bold" }}>You</h3> : <h3 style={{ fontWeight: "bold" }}>Hedron</h3>}
            <Markdown>{item.content}</Markdown>
          </div>
        )) : <div style={{ color: "#999" }}>
          Please note that the bot assistant operates unsupervised and provides responses generated by programmed algorithms and predefined knowledge databases. The answers given by the bot assistant may not always reflect the personal opinions or intentions of the author. For more accurate or in-depth explanations, it is recommended to directly consult the author.
          </div>}
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
          <button onClick={() => {setThreadId(SiteStruct); setMsgHist([])}}>clear</button>
        </div>

      </div>)}
      <h3>INTRODUCTION</h3>
      <p>This thesis project is titled HEDRON, an acronym for "<b>Hilarious Exploratory Designs Regarding Ontological Narratives</b>". This project uses parodies and mimicries of mundane subjects to explore the nature of existence. The HEDRON project consists of a theoretical part titled "Versus vs. Verses" and an exploratory part titled "Worlds vs. Stories".</p>

      <h3>DISCLAIMER</h3>
      <p>Please note that the content of this project, including all associated data, narratives, and depictions, is <b>entirely fictional</b> and created for educational and illustrative purposes only.</p>
      <p>Any information you enter during your interaction with this site, except for conversations with digital assistants, is <b>not stored</b> or recorded in any way.</p>
      <p>Conversations with digital assistants are stored <b>anonymously</b> for the purpose of improving service quality. These conversations are detached from your personal data to ensure privacy and confidentiality.</p>

      <h3>STATEMENTS</h3>

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

      <p><b>MONAD</b></p>
      <p>Origin: Originated from the Greek word for "unit", it referred to the first number or unit that was the basis for the rest of the numbers in a sequence.</p>
      <p>Definition: Monad is an indivisible unit of existence.</p>
      <p>Explanation: The entirety of existence contains an infinite number of monads, which are infinitely small and abstract. We may not perceive individual monads or the entirety of existence.</p>

      <p><b>VERSE</b></p>
      <p>Origin: Stripped from the word universe and related words.</p>
      <p>Definition: A verse is a perspective on existence. It groups monads according to a singular rule.</p>
      <p>Explanation: Every verse contains all monads, therefore are not perceptible in its entirety. Although different verses might seem mutually exclusive, they are fundamentally identical in terms of their constituents.</p>

      <p><b>WORLD</b></p>
      <p>Origin: Historically denotes the subjective human experience regarded collectively or the human collective existence.</p>
      <p>Definition: A world is a finite collection of monads.</p>
      <p>Explanation: A world is a subset of existence. Its finity makes it possible to be observed. As opposed to verses which just are, worlds are closely related to human perception.</p>

      <h3>INSTRUCTIONS</h3>
      <p>This section includes short descriptions of the nature of each page; log line of the narrative, if any; and instructions for how to interact with the elements.</p>
      <p><b>Hedron Page:</b></p>
      <ul>
        <li>The centerpiece of the Hedron Page is an interactive 3D diagram that visually represents the theoretical framework of the project.</li>
        <li>Visitors can orbit around the scene.</li>
        <li>Clicking on the thesis title takes visitors to the About Page.</li>
        <li>Visitors can click on the words in the diagram, which will provide detailed definitions and further information.</li>
        <li>Each word that ends with 'verse' relates to a narrative. Visitors can navigate to their respective pages by interacting with those verses.</li>
        <li>Keywords are integrated as points within the diagram, which visitors can toggle on or off.</li>
      </ul>
      <p><b>About Page:</b></p>
      <ul>
        <li>The about page introduces the project in more detail.</li>
        <li>Click on the ASK button to ask any question about the project.</li>
        <li><b>Example questions:</b></li>
        <ul>
          <li>Can you explain the concept of a verse?</li>
          <li>How can I navigate between the different narrative pages?</li>
          <li>What is the difference between a world and a story?</li>
          <li>How is this project related to architecture?</li>
          <li>What is funny about the Metaverse narrative?</li>
        </ul>
      </ul>
      <p><b>Pataverse Page:</b> Interactive Audio Device</p>
      <ul>
        <li>The Pataverse page simulates an immersive operating system.</li>
        <li>A friend has given you the task to debug a mulfunctioning audio device.</li>
        <li>Visitors should enter a username with optional password.</li>
        <li>Visitors can click and drag desktop items</li>
        <li>A taskbar at the bottom of the screen allows visitors to open different applications.</li>
        <li>The visitors can intuitively interact with each application window:
        <ul>
          <li>Move, resize, close the window.</li>
          <li>Click on tabs or search in the browser.</li>
          <li>Type and print from the text editor.</li>
          <li>View, compose, and send messages in the email application.</li>
        </ul>
        </li>
      </ul>
      <p><b>Metaverse Page:</b> Memory Traversing Machine</p>
      <ul>
        <li>The Metaverse page simulates a version control platform.</li>
        <li>The project team members recount their whereabouts to deduce the reason for their circuit failure.</li>
        <li>Visitors can expand folders to see the names of files inside.</li>
        <li>Visitors can watch the film.</li>
      </ul>
      <p><b>Topoverse Page:</b> Safe Portal Technology</p>
      <ul>
        <li>The Topoverse page simulates a video sharing platform.</li>
        <li>Regulations on portal technologies are alleviating, encouraging different entities to promote the newer models.</li>
        <li>Visitors can watch the films.</li>
      </ul>
      <p><b>Universe Page:</b> Mimetic Unicellular Organisms</p>
      <ul>
        <li>The Universe page simulates a scientific journal publishing website.</li>
        <li>Scholars from diverse fields contribute their studies on the implication of a type of newfound organism.</li>
        <li>Visitors can click on different articles to read them.</li>
      </ul>

      <h3>ACKNOWLEDGEMENT</h3>
      <p>We are immensely grateful to our advisors, Brad Samuels, Austin Wade Smith, among others, for their invaluable guidance throughout the development of this project. We extend our appreciation to those who enhanced our project with their unique talents: Ru Jia, Jiayi Chen, Zephaniah Odidika, Noam Schuck, Richard Chung, Steven Xian, and Jeffrey Wong for their contributions to voice over, performance, and persona. Special mention goes to the virtual assistance of ChatGPT, which has added depth and diversity to the work.</p>

      <p>We would also like to thank the visiting critics for their insightful feedback. Lastly, our heartfelt thanks go to our audience for their patience and active participation, making this endeavor a truly collaborative experience.</p>

      <h3>CHALLENGE</h3>
      <div>on each page, find the button that takes you back to the main page</div>
      <Link href="/">
        <Image src={HedronIcon} width={0} height={50} alt="icon" />
      </Link>

      <audio ref={sendSound} preload="auto">
        <source src={BP + "/audio/swoosh.wav"} type="audio/wav" />
      </audio>
      <audio ref={recvSound} preload="auto">
        <source src={BP + "/audio/notify.wav"} type="audio/wav" />
      </audio>
    </div>
  )
}