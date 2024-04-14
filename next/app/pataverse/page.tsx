'use client';

import Link from 'next/link'
import s from './page.module.scss'
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { DragControls, Sphere, Splat, OrbitControls, Gltf, Plane, Box, Text } from '@react-three/drei';
import { Bloom, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image'
import ChromeIcon from './assets/chrome.svg'
import OutlookIcon from './assets/outlook.svg'
import VSCodeIcon from './assets/vscode.svg'
import HedronIcon from '@/images/hedron.png'
import PrintIcon from './assets/print.png'
import DoorIcon from './assets/doors.png'
import ArrowIcon from './assets/arrow.png'
import UserIcon from './assets/user.png'
import { Glitch } from '@react-three/postprocessing'
import { GlitchMode } from 'postprocessing'
import textFieldEdit, { insertTextIntoField } from 'text-field-edit';
import useWindowHeight from '../hooks/useWindowHeight';

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

  const initPos = new THREE.Spherical(6, 0.7, 0)

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

const playAudio = (audio: React.MutableRefObject<null>) => {
  if (audio.current) {
    (audio.current as any).play();
  }
};

const sendEmail = async ( current: Email, content: string, setEmails: React.Dispatch<React.SetStateAction<Email[]>>, audio: React.MutableRefObject<null>, username: string) => {
  if (!current.thread) {
    const response = await fetch('/api/gpt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sender: current.sender, 
        content: content,
        threadInfo: current.content,
        instruction: username
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
        threadInfo: current.thread,
        instruction: username
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

  playAudio(audio);
}

const Outlook = ({username}: {username: string}) => {
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

  const swooshRef = useRef(null);
  const notifyRef = useRef(null);

  const sendButton = () => { 
    sendEmail(current, emailContent, setEmails, notifyRef, username); setEmailContent(''); playAudio(swooshRef); 
  }

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
        <textarea 
          value={emailContent} 
          onChange={handleContentChange} 
          placeholder="Email body" 
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
        <button disabled={current.sender == 'Sender'} onClick={sendButton}>Send</button>
      </div>
      <audio ref={swooshRef} preload="auto">
        <source src="/audio/swoosh.wav" type="audio/wav" />
      </audio>
      <audio ref={notifyRef} preload="auto">
        <source src="/audio/notify.wav" type="audio/wav" />
      </audio>
    </div>
  )
}

const VSCode = ({setPaper}: {setPaper: React.Dispatch<React.SetStateAction<string>>}) => {

  const textRef = useRef<HTMLTextAreaElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Tab' && textRef.current) {
      event.preventDefault();
      textFieldEdit.insert(textRef.current, '  ');
    }
  };

  const printRef = useRef(null);

  return (
    <div className={s.vscode} >
      <button onClick={() => {
        setPaper(textRef.current?.value || "");
        playAudio(printRef);
      }}>
        <Image src={PrintIcon} width={0} height={0} alt="icon" />
      </button>
      <textarea 
        spellCheck="false" 
        ref={textRef}
        onKeyDown={handleKeyDown}
      ></textarea>
      <audio ref={printRef} preload="auto">
        <source src="/audio/print.wav" type="audio/wav" />
      </audio>
    </div>
  )
}

export default function Pata() {
  useWindowHeight();
  const [wins, setWins] = useState<string[]>([]);
  const [isCoarsePointer, setIsCoarsePointer] = useState(false);
  const [userName, setUserName] = useState("");

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

  const sceneScale = 8;

  const [active, setActive] = useState(true);
  let timeoutId: any;
  const handlePointerOver = () => {
    clearTimeout(timeoutId);
    setActive(true);
  };

  const handlePointerOut = () => {
    timeoutId = setTimeout(() => {
      setActive(false);
    }, 1000);
  };

  const [paper, setPaper] = useState("");
  const userField = useRef<HTMLInputElement>(null);
  const loginButton = () => {
    if (!userField.current?.value) return;
    setUserName(userField.current.value);
  };

  return (
    <main className={s.main}>
      {!userName && <div className={s.login}>
        <Image src={UserIcon} width={150} height={0} alt="icon" />
        <input 
          type="text" 
          placeholder='username' 
          ref={userField}  
          onPointerEnter={handlePointerOut} 
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault(); 
              loginButton(); 
            }
          }}
        />
        <div onPointerEnter={handlePointerOut}>
          <input 
            type="password" 
            placeholder='password'           
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault(); 
                loginButton(); 
              }
            }}
          />
          <Image src={ArrowIcon} width={0} height={20} alt="icon" onClick={loginButton}/>
        </div>
      </div>}
      <Canvas 
        frameloop={active ? 'always' : 'demand'}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        style={{ background: "black" }}
        camera={{ fov: 60 }}
      >
        <ambientLight intensity={2} color="#ffebc2" />
        
        <spotLight position={[0,3,0]} intensity={50} penumbra={1} angle={1.4} castShadow color="#fcb" />

        <Gltf src="/models/mat.glb" scale={sceneScale} />
        <Gltf src="/models/table.glb" scale={sceneScale} />
        <Gltf src="/models/printer.glb" scale={sceneScale} />
        <Splat src="/models/scene.splat" scale={sceneScale} />

        {/* <DragControls 
          axisLock='y'
          dragLimits={[[-2.65,1.75], undefined, [-0.2,2.1]]}
          autoTransform={grab}
        >
          <Splat 
            src="/models/device.splat" 
            alphaTest={0.1} 
            scale={sceneScale} 
            position={[0,0.05,0]} 
          />
          <Plane 
            args={[0.65, 1.05]} 
            rotation={[-Math.PI/2,0,0]} 
            position={[0,0.005,0.05]} 
            onPointerEnter={handleGrabOver} 
            onPointerOut={handleGrabOut}
          >
            <meshStandardMaterial color="black" />
          </Plane>
        </DragControls> */}
        <DragControls 
          axisLock='y'
        >
          <Text 
            color="black" 
            anchorX="left" 
            anchorY="top"
            rotation={[-Math.PI/2,0,0]}
            position={[-1.1,0.03,0]}
            fontSize={0.05}
            maxWidth={2.2}
            clipRect={[0,-3,2.2,0]}
          >{paper}
          </Text>
          <Plane 
            args={[2.5, 3.3]} 
            rotation={[-Math.PI/2,0,0]} 
            position={[0,0.02,1.5]} 
            onPointerEnter={() => document.body.style.cursor = "grab"} 
            onPointerOut={() => document.body.style.cursor = "auto"}
          >
            <meshStandardMaterial color="white" />
          </Plane>
          <Plane 
            args={[2.5, 3.3]} 
            rotation={[-Math.PI/2,0,0]} 
            position={[0,-0.01,1.5]} 
          >
            <meshStandardMaterial color="black" />
          </Plane>
        </DragControls>
        <OrbitControls enablePan={false} enableRotate={false} minDistance={1} maxDistance={6} />
        <CameraControls />
        <EffectComposer>
          <Noise opacity={0.2} />
          <Vignette eskil={false} offset={0.1} darkness={1.2} />
          <Glitch
            delay={new THREE.Vector2(5, 20)}
            duration={new THREE.Vector2(0.001, 0.001)}
            strength={new THREE.Vector2(0.1, 0.5)}
            mode={GlitchMode.SPORADIC}
            active
            ratio={0.85}
          />
        </EffectComposer>
      </Canvas>
      {userName && <div className={s.os}>
        <Window 
          style={{ display: wins.includes("chrome") ? "flex" : "none", zIndex: wins.indexOf("chrome")}} 
          className={s.win} 
          onPointerDown={() => toTop("chrome")}
          icon={ChromeIcon}
          winname="chrome"
          close={toggle}
        >
          <Chrome />
        </Window>
        <Window 
          style={{ display: wins.includes("vscode") ? "flex" : "none", zIndex: wins.indexOf("vscode")}} 
          className={s.win} 
          onPointerDown={() => toTop("vscode")}
          icon={VSCodeIcon}
          winname="vscode"
          close={toggle}
          >
          <VSCode setPaper={setPaper} />
        </Window>
        <Window 
          style={{ display: wins.includes("outlook") ? "flex" : "none", zIndex: wins.indexOf("outlook")}} 
          className={s.win} 
          onPointerDown={() => toTop("outlook")}
          icon={OutlookIcon}
          winname="outlook"
          close={toggle}
        >
          <Outlook username={userName}/>
        </Window>

        <div className={s.taskbar}>
          {!isCoarsePointer && <div title="MacroSoft Doors"><Image src={DoorIcon} width={0} height={0} alt="icon" /></div>}
          <div><Image src={ChromeIcon} width={0} height={0} alt="icon" onClick={() => toggle("chrome")} /></div>
          <div><Image src={VSCodeIcon} width={0} height={0} alt="icon" onClick={() => toggle("vscode")} /></div>
          <div><Image src={OutlookIcon} width={0} height={0} alt="icon" onClick={() => toggle("outlook")} /></div>
          <div>
            <Link href='/'>
              <Image src={HedronIcon} width={0} height={0} alt="icon" />
            </Link>
          </div>
        </div>
      </div>}
    </main>
  );
}
