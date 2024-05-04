'use client';

import Link from 'next/link'
import s from './page.module.scss'
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { DragControls, Sphere, Splat, OrbitControls, Gltf, Plane, Box, Text } from '@react-three/drei';
import { Bloom, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'
import { createContext, useContext, useEffect, useState, useRef, ReactElement } from 'react';
import Image from 'next/image'
import ChromeIcon from './assets/chrome.svg'
import OutlookIcon from './assets/outlook.svg'
import VSCodeIcon from './assets/vscode.svg'
import HedronIcon from '@/images/hedron.png'
import PrintIcon from './assets/print.png'
import DoorIcon from './assets/doors.png'
import ArrowIcon from './assets/arrow.png'
import UserIcon from './assets/user.png'
import HomeIcon from './assets/home.png'
import { Glitch } from '@react-three/postprocessing'
import { GlitchMode } from 'postprocessing'
import textFieldEdit, { insertTextIntoField } from 'text-field-edit';
import useWindowHeight from '../hooks/useWindowHeight';
import useInactivityRedirect from '../hooks/useInactivityRedirect';
const BP = process.env.NEXT_PUBLIC_BASE_PATH;
import { pataKeywords } from '../Keywords';
import bcrypt from 'bcryptjs'
import * as Tone from 'tone'
import Window from './Window'
import { div } from 'three/examples/jsm/nodes/Nodes.js';
import { useRouter } from 'next/navigation';


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

const Tab = ({ id, children, active, setActive, visible, setVisible }: {
  id: number, 
  children: any, 
  active: number, 
  setActive: React.Dispatch<React.SetStateAction<number>>,
  visible: number[],
  setVisible: React.Dispatch<React.SetStateAction<number[]>>,
}) => {
  if (!visible.includes(id)) return null;
  return (<button onClick={() => setActive(id)} className={active==id ? s.activeTab : ""}>
    {children}
    {id != 0 && <div 
      className={s.close}
      onClick={(e) => {
        e.stopPropagation(); 
        setActive(0); 
        if (visible.includes(id)) {
          setVisible(vis => {
            return vis.filter(tabId => tabId !== id);
          })
        }
      }}
    >×</div>}
  </button>)
}

function jaccardSimilarity(str1: string, str2: string) {
  const set1 = new Set(str1.replace(/[^a-zA-Z0-9\s]/g, '').toLowerCase().split(/\s+/));
  const set2 = new Set(str2.replace(/[^a-zA-Z0-9\s]/g, '').toLowerCase().split(/\s+/));

  const arr1 = Array.from(set1);
  const arr2 = Array.from(set2);

  const intersection = arr1.filter(x => set2.has(x));
  const union = Array.from(new Set([...arr1, ...arr2]));

  return intersection.length / union.length;
}

function shiftCharCode(char: string, shiftAmount: number) {
  let charCode = char.charCodeAt(0);
  if (char >= 'a' && char <= 'z') {
    charCode = ((charCode - 97 + shiftAmount) % 26) + 97;
  } else if (char >= 'A' && char <= 'Z') {
    charCode = ((charCode - 65 + shiftAmount) % 26) + 65;
  }
  return String.fromCharCode(charCode);
}

function processWord(word: string, shiftAmount: number) {
  return word.split('').map(char => shiftCharCode(char, shiftAmount)).join('');
}

function transformString(str: string, progress: number) {
  return str.split(' ').map(word => { return Math.random() < progress ? word : processWord(word, 3) }).join(' ');
}

const TabContent = ({ id, children, progress }: {
  id: number, 
  children: string, 
  progress: number[],
}) => {
  return (<div className={s.chromePage}>
    <h1>Sampling Voice...</h1>
    <p>Please repeat the following sentence aloud:</p>
    <p><small>{children}</small></p>
    <progress id="file" value={progress[id]} max="5"></progress>
    {progress[id] == 5 && <p><b>Sample Done!</b></p>}
  </div>)
}

const sampleText = [
  "Internet browsing is the act of traversing through data that reside on the interconnected network, typically through a browser, which renders selected data into human readable, graphical format.",
  "Asynchronous communication is the exchange of information where responses do not occur immediately, allowing participants to engage at their own pace, typically facilitated by tools such as email, messaging apps, and forums, which support interaction without the need for simultaneous presence.",
  "Interpersonal relationship is the dynamic and interactive connection between two or more individuals, often characterized by mutual engagement that can be social, emotional, or professional in nature, and is typically shaped by communication patterns and shared experiences.",
  "A large language model is an advanced artificial intelligence system trained on extensive textual data, designed to generate human-like text based on the input it receives, and is capable of performing a variety of language-based tasks including translation, summarization, and question answering.",
  "Consciousness refers to the state of being aware of and able to think about oneself, the environment, and one's own experiences, encompassing a spectrum of perceptions, cognitions, and emotions.",
  "The Turing Test is a measure of a machine's ability to exhibit intelligent behavior equivalent to, or indistinguishable from, that of a human, where a machine is deemed to have passed if it can converse with humans without them realizing it's not human.",
  "Interactive sensing involves technologies and systems designed to detect and respond to physical inputs or environmental data, providing real-time, dynamic interaction between users and devices.",
  "Personality encompasses the unique set of emotional patterns, thoughts, and behavioral traits that define an individual's distinctive character and influences their interactions and reactions.",
  "Online identity is the social identity that an internet user establishes in online communities and websites, often presenting facets of the individual's personality and can include elements like usernames, avatars, and profiles.",
  "Linguistic comprehension is the ability to understand spoken or written language, involving cognitive processes that interpret the meaning of words and sentences within context, facilitating effective communication."
]

const Chrome = ({deviceMsg}: {deviceMsg: {msg: string, bit: boolean}}) => {
  const [visible, setVisible] = useState<number[]>([0]);
  const [active, setActive] = useState<number>(0);
  const [progress, setProgress] = useState(Array(10).fill(0));
  const [msgDisplay, setMsgDisplay] = useState<string>("start speaking...");
  
  useEffect(() => {
    setMsgDisplay(transformString(deviceMsg.msg, progress.reduce((acc, cur) => acc + cur, 0)/50))
  }, [deviceMsg.bit])

  useEffect(() => {
    sampleText.forEach((item, index) => {
      if (progress[index] == 5) return;
      if (jaccardSimilarity(deviceMsg.msg, item) > 0.9) {
        setProgress(p => {
          const newProgress = [...p];
          newProgress[index] += 1;
          return newProgress;
        });
      }
    })
  }, [deviceMsg.bit])
  const tabNames = [
    <Image src={HomeIcon} width={0} height={0} alt="icon" />,
    "404",
    ...(pataKeywords.map((item) => item.word)),
    "Speech to Text"
  ]

  const tabConts = [
    <div className={s.home}>
      <h1>Oooglo</h1>
      <input 
        type="text" 
        placeholder="Search Oooglo or don't"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault(); 
            if (!visible.includes(1)) setVisible(v => [...v, 1]);
            setActive(1);
          }
        }}
      />
      <div>
        {tabNames.map((item, index) => (index != 0 && index != 1 &&
          <div key={index}>
            <div onClick={() => {
              if (!visible.includes(index)) setVisible(v => [...v, index]);
              setActive(index);
            }} title={item as string}>?</div>
            <div>{item}</div>
          </div>
        ))}
      </div>
    </div>,
    <div className={s.notfound}>
      <h1>404</h1>
      <h5>Page Not Found</h5>
    </div>,
    ...(sampleText.map((item, index) => <TabContent id={index} progress={progress}>{item}</TabContent>)),
    <div className={s.display}>{msgDisplay}</div>,
  ]

  return (
    <div className={s.chrome}>
      <div>
        {visible.map((item) => (
          <Tab id={item} 
            key={item}
            active={active} 
            setActive={setActive}
            visible={visible}
            setVisible={setVisible}
          >
            {tabNames[item]}
          </Tab>
        ))}
      </div>
      <div>{tabConts.find((item, index) => (index == active && item))}</div>
    </div>
  )
}

const playAudio = (audio: React.MutableRefObject<null>) => {
  if (audio.current) {
    (audio.current as any).play();
  }
};

const sendEmail = async ( current: Email, content: string, setEmails: React.Dispatch<React.SetStateAction<Email[]>>, audio: React.MutableRefObject<null>, username: string) => {
  if (!current.thread) {
    const response = await fetch(BP + '/api/gpt', {
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
    const response = await fetch(BP + '/api/gpt', {
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
    content: "click emails in inbox to view",
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
        <button disabled={current.sender == 'Sender' || !emailContent} onClick={sendButton}>Send</button>
      </div>
      <audio ref={swooshRef} preload="auto">
        <source src={BP + "/audio/swoosh.wav"} type="audio/wav" />
      </audio>
      <audio ref={notifyRef} preload="auto">
        <source src={BP + "/audio/notify.wav"} type="audio/wav" />
      </audio>
    </div>
  )
}

// hash to audible range. use Tone.js
const salt = bcrypt.genSaltSync();

function toSound(input: string, setDeviceMsg: React.Dispatch<React.SetStateAction<{msg: string, bit: boolean}>>) {
  const words = input.replace(/[^a-zA-Z0-9\s]/g, '').toLowerCase().split(/\s+/);
  const synth = new Tone.Synth().toDestination();
  let now = Tone.now()

  words.forEach((item) => {
    if (!item) return;
    const hash = bcrypt.hashSync(item, salt).replace(salt, "");
    let num = 0;
    for (let i = 0; i < hash.length; i++) {
      const char = hash.charCodeAt(i);
      num = ((num << 5) - num) + char;
      num = num & num;
    }
    synth.triggerAttackRelease(2 ** (Math.abs(num) % 10000 / 1000 + 3), "1024n", now);
    now += 0.1;
  });
  setTimeout(() => setDeviceMsg(cur => ({msg: input, bit: !cur.bit})), words.length * 100);  
}

async function handlePrint(
  textRef: React.RefObject<HTMLTextAreaElement>, 
  printRef: React.MutableRefObject<null>, 
  setPaper: React.Dispatch<React.SetStateAction<string>>,
  threadId: string,
  setThreadId:  React.Dispatch<React.SetStateAction<string>>,
  comprehension: number,
  setDeviceMsg: React.Dispatch<React.SetStateAction<{msg: string, bit: boolean}>>,
) {
  const req = textRef.current?.value || "";
  setPaper(req);
  playAudio(printRef);
  const response = await fetch(BP + '/api/gpt', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      sender: "Audio Device", 
      content: req,
      threadInfo: threadId,
      instruction: comprehension * 100 + "%",
    }),
  });
  const body = await response.json();
  setThreadId(body.tid);
  toSound(body.msg, setDeviceMsg);
}

const initPaper = `
Linear Algebra:
1. Check if the set of vectors (1,2,3), (4,5,6), and (7,8,9) are dependent or independent.
Determine the characteristic values and characteristic vectors for the matrix with rows [1, 2] and [3, 4].
2. Solve the linear equations: x plus 2y minus 3z equals 7, 2x minus y plus z equals minus 1, and 3x plus y minus 2z equals 2.

Differential Equations:
1. Solve the differential equation where the rate of change of y with respect to x equals y times the sine of x, with the condition y equals 1 when x equals 0.
2. Find the general solution for the second-order differential equation where the second derivative of y minus four times the first derivative of y plus four times y equals e raised to 2x.
3. Determine the stability of the zero solution for the system of differential equations given by the matrix [0, 1; -1, 0].`

const VSCode = ({setPaper, setDeviceMsg}: {setPaper: React.Dispatch<React.SetStateAction<string>>, setDeviceMsg: React.Dispatch<React.SetStateAction<{msg: string, bit: boolean}>>}) => {
  const [threadId, setThreadId] = useState("");
  const [comprehension, setComprehension] = useState(0);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const [printable, setPrintable] = useState(false);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Tab' && textRef.current) {
      event.preventDefault();
      textFieldEdit.insert(textRef.current, '  ');
    }
  };

  const printRef = useRef(null);

  return (
    <div className={s.vscode} >
      <button disabled={!printable} onClick={() => {
        handlePrint(textRef, printRef, setPaper, threadId, setThreadId, comprehension, setDeviceMsg);
        setPrintable(false);
      }}>
        <Image src={PrintIcon} width={0} height={0} alt="icon" />
      </button>
      <textarea 
        spellCheck="false" 
        ref={textRef}
        onKeyDown={handleKeyDown}
        defaultValue={initPaper}
        onChange={() => setPrintable(true)}
      ></textarea>
      <audio ref={printRef} preload="auto">
        <source src={BP + "/audio/print.wav"} type="audio/wav" />
      </audio>
    </div>
  )
}

export default function Pata() {
  useWindowHeight();
  useInactivityRedirect();
  const [wins, setWins] = useState<string[]>([]);
  const [isCoarsePointer, setIsCoarsePointer] = useState(false);
  const [userName, setUserName] = useState("");
  const [deviceMsg, setDeviceMsg] = useState({msg: "hello it's me", bit: false});
  const router = useRouter();
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

  const [paper, setPaper] = useState(initPaper);
  const userField = useRef<HTMLInputElement>(null);
  const loginButton = () => {
    if (!userField.current?.value) return;
    setUserName(userField.current.value);
    handlePointerOver();
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

        <Gltf src={BP + "/models/mat.glb"} scale={sceneScale} />
        <Gltf src={BP + "/models/table.glb"} scale={sceneScale} />
        <Gltf src={BP + "/models/printer.glb"} scale={sceneScale} />
        <Splat src={BP + "/models/scene.splat"} scale={sceneScale} position={[0,0,-0.2]}/>
        <Gltf src={BP + "/models/hedron.glb"} 
          scale={0.05} 
          position={[1.4,0.03,-1.1]} 
          rotation={[0,1.1,0]}
          onPointerEnter={() => document.body.style.cursor = "pointer"} 
          onPointerOut={() => document.body.style.cursor = "auto"}
          onClick={() => router.push('/')}
        />

        <DragControls 
          axisLock='y'
          dragLimits={[[-3.63,0.74], undefined, [-0.15,2.1]]}
        >
          <Gltf src={BP + "/models/device.glb"} scale={sceneScale} position={[1.06,0.05,0.1]}/>
          <Plane 
            args={[0.65, 1.05]} 
            rotation={[-Math.PI/2,0,0]} 
            position={[1,0.05,0.05]} 
            onPointerEnter={() => document.body.style.cursor = "grab"} 
            onPointerOut={() => document.body.style.cursor = "auto"}
          >
            <meshStandardMaterial color="black" />
          </Plane>
        </DragControls>
        <DragControls 
          axisLock='y'
          dragLimits={[[-2,3], undefined, [-2,2]]}
        >
          <Text 
            color="black" 
            anchorX="left" 
            anchorY="top"
            rotation={[-Math.PI/2,0,0]}
            position={[-2.1,0.03,0]}
            fontSize={0.05}
            maxWidth={2.2}
            clipRect={[0,-3,2.2,0]}
          >{paper}
          </Text>
          <Plane 
            args={[2.5, 3.3]} 
            rotation={[-Math.PI/2,0,0]} 
            position={[-1,0.02,1.5]} 
            onPointerEnter={() => document.body.style.cursor = "grab"} 
            onPointerOut={() => document.body.style.cursor = "auto"}
          >
            <meshStandardMaterial color="white" />
          </Plane>
          <Plane 
            args={[2.5, 3.3]} 
            rotation={[-Math.PI/2,0,0]} 
            position={[-1,-0.01,1.5]} 
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
          <Chrome deviceMsg={deviceMsg}/>
        </Window>
        <Window 
          style={{ display: wins.includes("vscode") ? "flex" : "none", zIndex: wins.indexOf("vscode")}} 
          className={s.win} 
          onPointerDown={() => toTop("vscode")}
          icon={VSCodeIcon}
          winname="vscode"
          close={toggle}
          >
          <VSCode setPaper={setPaper} setDeviceMsg={setDeviceMsg} />
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
        </div>
      </div>}
    </main>
  );
}
