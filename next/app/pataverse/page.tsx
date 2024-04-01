'use client';

import Link from 'next/link'
import s from './page.module.scss'
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { DragControls, Sphere, Splat, OrbitControls } from '@react-three/drei';
import { useEffect, useState } from 'react';
import Draggable from 'react-draggable';


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
        <Draggable
          handle=".handle"
          defaultPosition={{x: 0, y: 0}}
        >
          <div className="box" style={{ width: '200px', height: '100px', backgroundColor: 'salmon' }}>
            <div className="handle" style={{ backgroundColor: 'blue', padding: '10px' }}>
              Drag me around
            </div>
            <div style={{ padding: '10px' }}>
              I can be dragged anywhere
            </div>
          </div>
        </Draggable>
        <div className={s.taskbar}>taskbar</div>
      </div>
    </main>
  );
}
