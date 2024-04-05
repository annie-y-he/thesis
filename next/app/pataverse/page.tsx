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

const CameraControls: React.FC = () => {
  const { camera, pointer } = useThree();

  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
          <div>chrome</div>
        </Window>
        <Window style={{ display: wins.includes("vscode") ? "flex" : "none", zIndex: wins.indexOf("vscode")}} className={s.win} onPointerDown={() => toTop("vscode")}>
          <div className={`handle ${s.handle}`}>
            <Image src={VSCodeIcon} width={0} height={20} alt="icon" />
          </div>
          <div>vscode</div>
        </Window>
        <Window style={{ display: wins.includes("outlook") ? "flex" : "none", zIndex: wins.indexOf("outlook")}} className={s.win} onPointerDown={() => toTop("outlook")}>
          <div className={`handle ${s.handle}`}>
            <Image src={OutlookIcon} width={0} height={20} alt="icon" />
          </div>
          <div>outlook</div>
        </Window>
        <Window style={{ display: wins.includes("teams") ? "flex" : "none", zIndex: wins.indexOf("teams")}} className={s.win} onPointerDown={() => toTop("teams")}>
          <div className={`handle ${s.handle}`}>
            <Image src={TeamsIcon} width={0} height={20} alt="icon" />
          </div>
          <div>teams</div>
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
