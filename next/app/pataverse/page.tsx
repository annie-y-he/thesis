'use client';

import Link from 'next/link'
import s from './page.module.scss'
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { DragControls, Sphere, Splat, OrbitControls } from '@react-three/drei';
import { useEffect, useState } from 'react';
import Image from 'next/image'
import ChromeIcon from './assets/chrome.svg'
import OutlookIcon from './assets/outlook.svg'
import TeamsIcon from './assets/teams.svg'
import VSCodeIcon from './assets/vscode.svg'

import Window from './Window'

interface Email {
  content: string;
  sender: string;
  re: string | null;
  read: boolean;
  thread: string | null;
}

const CameraControls: React.FC = () => {
  const { camera, pointer } = useThree();

  const initPos = new THREE.Spherical(5, 0.7, 0)

  useEffect(() => {
    camera.position.setFromSpherical(initPos);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  useFrame(() => {
    const limit = 0.1;
    const speed = 0.1;

    let spherical = new THREE.Spherical().setFromVector3(camera.position)
    spherical.phi -=  initPos.phi;
    spherical.phi += (pointer.y * limit - spherical.phi) * speed;
    spherical.phi +=  initPos.phi;
    spherical.theta -= (pointer.x * limit + spherical.theta) * speed;
    camera.position.setFromSpherical(spherical);
    camera.lookAt(0, 0, 0);
  });

  return null;
};

const Chrome = () => {
  return <div>chrome fc</div>
}

const sendEmail = async ( current: Email, content: string, setEmails: React.Dispatch<React.SetStateAction<Email[]>> ) => {

  if (!current.thread) {
    const response = await fetch('/api/gpt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sender: current.sender, 
        content: content,
        threadInfo: current.content
      }),
    });
    const body = await response.json();

    setEmails(currentEmails => {
      const newEmail = {
        content: body.msg,
        sender: current.sender,
        re: content,
        read: false,
        thread: body.tid,
      };

      currentEmails[currentEmails.indexOf(current)].thread = body.tid;

      return [newEmail, ...currentEmails];
    });
  } else {
    const response = await fetch('/api/gpt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sender: current.sender, 
        content: content,
        threadInfo: current.thread
      }),
    });

    const body = await response.json();

    setEmails(currentEmails => [{
      content: body.msg,
      sender: current.sender,
      re: content,
      read: false,
      thread: body.tid,
    }, ...currentEmails]);
  }

}

const Outlook = () => {
  const [emails, setEmails] = useState<Email[]>([
    {
      content: "How's it going? I went to this second-hand audio electronics store the other day. There was this device that apparently makes weird noises. I played with it for a few days without success. It is now on its way to you. Maybe you can help figure out what's wrong with it.",
      sender: "Richard Chung",
      re: null,
      read: false,
      thread: null,
    }, {
      content: "how's it going with the problems i sent you?",
      sender: "Jeffrey Wong",
      re: null,
      read: false,
      thread: null,
    },
  ]);
  const [current, setCurrent] = useState<Email>({
    content: "click to view emails",
    sender: "Sender",
    re: null,
    read: false,
    thread: null,
  });

  const [emailContent, setEmailContent] = useState('');
  
  const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEmailContent(event.target.value);
  };

  return (
    <div className={s.outlook}>
      <div>
        {emails.map((item, index) => (
          <div key={index} onClick={() => {
            setCurrent(item);
            setEmails(currentEmails => {
              currentEmails[currentEmails.indexOf(item)].read = true;
              return [...currentEmails];
            });
          }}>
            <div>{item.read ? item.sender : <b>{item.sender}</b>}</div>
            <div>{item.content}</div>
          </div>
        ))}
      </div>
      <div>
        <div>{current.content}</div>
        {current.re && <div><br />replying to:<br />{current.re}</div>}
      </div>
      <div>
        <input type="text" value={'To: ' + current.sender} readOnly />
        <textarea value={emailContent} onChange={handleContentChange} placeholder="Email body" />
        <button disabled={current.sender == 'Sender'} onClick={() => { sendEmail(current, emailContent, setEmails); setEmailContent(''); }}>Send</button>
      </div>
    </div>
  )
}

const VSCode = () => {
  return <div>vscode fc</div>
}

const Teams = () => {
  return <div>teams fc</div>
}

export default function Pata() {
  const [wins, setWins] = useState<string[]>([]);
  const [isCoarsePointer, setIsCoarsePointer] = useState(false);

  useEffect(() => {
    setIsCoarsePointer(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  const toTop = (windowName: string) => {
    setWins((currentWins) => {
      const index = currentWins.indexOf(windowName);
      if (index >= 0) {
        return [...currentWins.slice(0, index), ...currentWins.slice(index + 1), windowName];
      }
      return currentWins;
    });
  };

  const toggle = (windowName: string) => {
    setWins((currentWins) => {
      const index = currentWins.indexOf(windowName);
      if (index >= 0) {
        if (isCoarsePointer) return [];
        return [...currentWins.slice(0, index), ...currentWins.slice(index + 1)];
      } else {
        if (isCoarsePointer) return [windowName];
        return [...currentWins, windowName];
      }
    });
  };
  
  return (
    <main className={s.main}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <DragControls axisLock='y'>
          <Sphere position={[1, 0, 0]}>
            <meshStandardMaterial color="hotpink" />
          </Sphere>
        </DragControls>
        <DragControls axisLock='y'>
          <Sphere position={[-1, 0, 0]}>
            <meshStandardMaterial color="black" />
          </Sphere>
        </DragControls>
        <Splat src="/models/key.splat" scale={20}/>

        <CameraControls />
      </Canvas>
      <div className={s.os}>
        <Window style={{ display: wins.includes("chrome") ? "flex" : "none", zIndex: wins.indexOf("chrome")}} className={s.win} onPointerDown={() => toTop("chrome")}>
          <div className={`handle ${s.handle}`}>
            <Image src={ChromeIcon} width={0} height={20} alt="icon" />
          </div>
          <Chrome />
        </Window>
        <Window style={{ display: wins.includes("vscode") ? "flex" : "none", zIndex: wins.indexOf("vscode")}} className={s.win} onPointerDown={() => toTop("vscode")}>
          <div className={`handle ${s.handle}`}>
            <Image src={VSCodeIcon} width={0} height={20} alt="icon" />
          </div>
          <VSCode />
        </Window>
        <Window style={{ display: wins.includes("outlook") ? "flex" : "none", zIndex: wins.indexOf("outlook")}} className={s.win} onPointerDown={() => toTop("outlook")}>
          <div className={`handle ${s.handle}`}>
            <Image src={OutlookIcon} width={0} height={20} alt="icon" />
          </div>
          <Outlook />
        </Window>
        <Window style={{ display: wins.includes("teams") ? "flex" : "none", zIndex: wins.indexOf("teams")}} className={s.win} onPointerDown={() => toTop("teams")}>
          <div className={`handle ${s.handle}`}>
            <Image src={TeamsIcon} width={0} height={20} alt="icon" />
          </div>
          <Teams />
        </Window>
        <div className={s.taskbar}>
          <div><Image src={ChromeIcon} width={0} height={0} alt="icon" onClick={() => toggle("chrome")} /></div>
          <div><Image src={VSCodeIcon} width={0} height={0} alt="icon" onClick={() => toggle("vscode")} /></div>
          <div><Image src={OutlookIcon} width={0} height={0} alt="icon" onClick={() => toggle("outlook")} /></div>
          <div><Image src={TeamsIcon} width={0} height={0} alt="icon" onClick={() => toggle("teams")} /></div>
        </div>
      </div>
    </main>
  );
}
