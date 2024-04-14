'use client';

import * as THREE from 'three'
import * as React from 'react'
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Tetrahedron, Octahedron, Icosahedron, Text, Sphere } from '@react-three/drei';
import s from './page.module.scss';

interface TextObjProps {
  children?: string;
  position?: [number, number, number];
  size?: number;
  setOverlay?: (setOverlay: React.JSX.Element) => void;
}

interface OverlayProps {
  children?: string;
}

const Overlay: React.FC<OverlayProps> = ({ children }) => {
  switch (children) {
    case "TOPOVERSE":
      return (
        <div>
          <p><b>Origin: </b>Inspired by topology, a branch of mathematics that studies the properties of space that are preserved under continuous deformations.</p>
          <p><b>Definition: </b>Topoverse is a verse that renders monads structurally.</p>
          <p><b>Explanation: </b>From the topoverse, we see only structures or relations. Their perceptible analogies would be diagrams, graphs, etc.</p>
          <div className={s.buttons}>
            <Link href="/topoverse">
              <button title="go to project">SAFE PORTAL TECHNOLOGY</button>
            </Link>
            <button title="spread in space">∴</button>
          </div>
        </div>
      )
    case "METAVERSE":
      return (
        <div>
          <p><b>Origin: </b>The conventional use of "metaverse", to describe virtual reality spaces, inaccurately implies, through the prefix "meta-", a transcendental nature of such spaces.</p>
          <p><b>Definition: </b>Metaverse is a verse that renders monads conceptually.</p>
          <p><b>Explanation: </b>With a metaversal perspective, we see existences as ideas that do not necessarily map to human understanding.</p>
          <div className={s.buttons}>
            <Link href="/metaverse">
              <button title="go to project">MEMORY TRAVERSING MACHINE</button>
            </Link>
            <button title="spread in space">∴</button>
          </div>
        </div>
      )
    case "UNIVERSE":
      return (
        <div>
          <p><b>Origin: </b>The prefix "uni-" is purely historical. It does not convey the notion that the universe is the sole perspective on existence.</p>
          <p><b>Definition: </b>Universe is a verse that renders monads physically.</p>
          <p><b>Explanation: </b>The universe deals with particles and waves and their properties. They might macroscopically manifest as organisms, cosmological bodies, etc.</p>
          <div className={s.buttons}>
            <Link href="/universe">
              <button title="go to project">MIMETIC UNICELLULAR ORGANISMS</button>
            </Link>
            <button title="spread in space">∴</button>
          </div>
        </div>
      )
    case "PATAVERSE":
      return (
        <div>
          <p><b>Origin: </b>Inspired by Alfred Jarry's 'Pataphysics, a parody of science often described as the "science of imaginary solutions".</p>
          <p><b>Definition: </b>Pataverse is a verse that renders monads imaginarily.</p>
          <p><b>Explanation: </b>The relationship between pataverse and metaverse is analogous to that between metaverse and universe. Yet, beyond the metaversal, it wraps back to the components of the psyche.</p>
          <div className={s.buttons}>
            <Link href="/pataverse">
              <button title="go to project">INTERACTIVE AUDIO DEVICE</button>
            </Link>
            <button title="spread in space">∴</button>
          </div>
        </div>
      )
    case "Subject":
      return (
        <div>
          <p><b>Explanation: </b>Encompasses an individual's sensory and perceptual experiences.</p>
          <p><b>Example: </b>A person experiencing the warmth of the sun or the taste of their favorite food, shaping their interaction with their environment.</p>
        </div>
      )
    case "intraSubject":
      return (
        <div>
          <p><b>Explanation: </b>Refers to the internal fragments of an individual's consciousness, such as memories, dreams, and the unconscious.</p>
          <p><b>Example: </b>A piece of childhood experience or an entity that appeared in one's dream.</p>
        </div>
      )
    case "interSubject":
      return (
        <div>
          <p><b>Explanation: </b>Relates to shared, collective experiences and understandings between individuals.</p>
          <p><b>Example: </b>Cultural rituals or social norms that shape group behavior and perceptions, like the collective mourning in a community after a significant loss.</p>
        </div>
      )
    case "Object":
      return (
        <div>
          <p><b>Explanation: </b>Pertains to entities existing independently of subjective interpretation, including tangible and abstract concepts.</p>
          <p><b>Example: </b>The mathematical concept of pi or the physical reality of a stone.</p>
        </div>
      )
    case "intraObject":
      return (
        <div>
          <p><b>Explanation: </b>Focuses on the intrinsic properties of objects, detached from human perception.</p>
          <p><b>Example: </b>The molecular composition of water or the data storage capacity of a computer hard drive.</p>
        </div>
      )
    case "interObject":
      return (
        <div>
          <p><b>Explanation: </b>Describes the interactions and relationships between physical and conceptual objects in the environment.</p>
          <p><b>Example: </b>The ecological relationship between bees and flowering plants, where bees pollinate flowers while gathering nectar, benefiting both parties and the ecosystem.</p>
        </div>
      )
    case "dreamworld":
      return (
        <div>
          <p><b>Definition: </b>Dreamworld is the intersection between pataverse and metaverse, where imagination and conceptualization blend seamlessly.</p>
          <p><b>Explanation: </b>This world embodies the realm of dreams and imagination, a space where the boundaries of reality are blurred and the impossible becomes possible.</p>
        </div>
      )
    case "lifeworld":
      return (
        <div>
          <p><b>Definition: </b>Lifeworld represents the intersection between universe and pataverse, grounding the imaginary in the physical.</p>
          <p><b>Explanation: </b>It encompasses the lived experience of being in the world, where subjective perceptions and physical realities intertwine.</p>
        </div>
      )
    case "dataworld":
      return (
        <div>
          <p><b>Definition: </b>Dataworld is the convergence of universe and metaverse, where physical properties and conceptual data intersect.</p>
          <p><b>Explanation: </b>This world focuses on the collection, analysis, and interpretation of data from the physical universe, revealing patterns and insights beyond immediate perception.</p>
        </div>
      )
    case "fictiworld":
      return (
        <div>
          <p><b>Definition: </b>Fictiworld lies at the intersection between pataverse and topoverse, blending the structural with the imaginary.</p>
          <p><b>Explanation: </b>It is a realm where narratives and social constructs form the foundation of reality, allowing for the exploration of stories and histories as structuring elements of human collective experience.</p>
        </div>
      )
    case "archiworld":
      return (
        <div>
          <p><b>Definition: </b>Archiworld is where universe meets topoverse, emphasizing the physicality of structures and their relational dynamics.</p>
          <p><b>Explanation: </b>This world explores the architectural and environmental aspects of existence, focusing on how spaces and forms define and are defined by their relationships.</p>
        </div>
      )
    case "logiworld":
      return (
        <div>
          <p><b>Definition: </b>Logiworld is the intersection between metaverse and topoverse, where conceptual logic meets structural understanding.</p>
          <p><b>Explanation: </b>It represents the realm of logical deduction and mathematical structures, highlighting the patterns and systems that underlie both discrete concepts and their relationships.</p>
        </div>
      )
  }
}

const TextObj: React.FC<TextObjProps> = ({ children, position = [0, 0, 0], size = 0.1, setOverlay }) => {
  const textRef = useRef<THREE.Object3D>(null);

  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)

  const colors: {[key: string]: string} = {
    TOPOVERSE: "green",
    PATAVERSE: "yellow",
    METAVERSE: "red",
    UNIVERSE: "purple"
  };

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  },[hovered])
  
  useEffect(() => {
    if (!setOverlay) return;
    if (clicked) {
      setOverlay(
        <div className={s.definition}>
          <div className={s.overlay}>
            <Overlay>{children}</Overlay>
            <div><small>click scene to close</small></div>
          </div>
        </div>
      );
    }
  },[clicked])

  useFrame(({ camera }) => {
    textRef.current?.lookAt(camera.position);
  });

  return (
    <Text
      ref={textRef}
      position={position}
      fontSize={size}
      color={ children && hovered ? colors[children] || "salmon" : "white" }
      anchorX="center"
      anchorY="middle"
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      onPointerDown={() => click(false)}
      onClick={(event) => { event.stopPropagation(); click(true); }}
    >
      {children}
    </Text>
  );
};

export default function App() {
  const [overlayVisible, setVisible] = useState(false);
  const [overlayContent, setOverlay] = useState<React.JSX.Element>()

  useEffect(() => {
    if (overlayContent) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  },[overlayContent])

  // const { camera } = useThree();

  return (
    <main className={s.main}>
      <h1><Link href="/about">HEDRON</Link></h1>
      <Canvas 
        style={{ background: "#181818" }} 
        camera={{ fov: 18, position: [0, 0, 10] }}
        onClick={(event) => {setOverlay(undefined)}}
      >
        <ambientLight intensity={1} />
        {/* <pointLight intensity={0.5} position={[0.7, 0.7, 0.7]} />
        <pointLight intensity={0.5} position={[-0.7, -0.7, 0.7]} />
        <pointLight intensity={0.5} position={[0.7, -0.7, -0.7]} />
        <pointLight intensity={0.5} position={[-0.7, 0.7, -0.7]} /> */}

        <Sphere args={[0.6, 64, 32]}>
          <meshStandardMaterial color="#999" transparent={true} opacity={0.9}/>
        </Sphere>
        <Tetrahedron args={[1.04]} name="tetra">
          <meshBasicMaterial attach="material" color="white" wireframe={true} />
        </Tetrahedron>
        <Octahedron args={[0.85]} name="octa">
          <meshBasicMaterial attach="material" color="white" wireframe={true} />
        </Octahedron>
        {Array.from({ length: 500 }, (_, i) => (
          <Icosahedron key={i} args={[0.01]} position={(new THREE.Vector3()).setFromSphericalCoords(0.6, Math.acos(2 * Math.random() - 1), Math.random() * 2 * Math.PI)}>
            <meshBasicMaterial attach="material" color="white" />
          </Icosahedron>
        ))}
        <TextObj position={[0.7, 0.7, 0.7]} size={0.08} setOverlay={setOverlay}>TOPOVERSE</TextObj>
        <TextObj position={[-0.7, -0.7, 0.7]} size={0.08} setOverlay={setOverlay}>METAVERSE</TextObj>
        <TextObj position={[0.7, -0.7, -0.7]} size={0.08} setOverlay={setOverlay}>UNIVERSE</TextObj>
        <TextObj position={[-0.7, 0.7, -0.7]} size={0.08} setOverlay={setOverlay}>PATAVERSE</TextObj>
        <TextObj position={[0, 1, 0]} size={0.04} setOverlay={setOverlay}>interSubject</TextObj>
        <TextObj position={[0, -1, 0]} size={0.04} setOverlay={setOverlay}>intraObject</TextObj>
        <TextObj position={[1, 0, 0]} size={0.04} setOverlay={setOverlay}>interObject</TextObj>
        <TextObj position={[-1, 0, 0]} size={0.04} setOverlay={setOverlay}>intraSubject</TextObj>
        <TextObj position={[0, 0, 1]} size={0.04} setOverlay={setOverlay}>Object</TextObj>
        <TextObj position={[0, 0, -1]} size={0.04} setOverlay={setOverlay}>Subject</TextObj>
        <TextObj position={[0, 0.72, 0]} size={0.04} setOverlay={setOverlay}>fictiworld</TextObj>
        <TextObj position={[0, -0.72, 0]} size={0.04} setOverlay={setOverlay}>dataworld</TextObj>
        <TextObj position={[0.72, 0, 0]} size={0.04} setOverlay={setOverlay}>archiworld</TextObj>
        <TextObj position={[-0.72, 0, 0]} size={0.04} setOverlay={setOverlay}>dreamworld</TextObj>
        <TextObj position={[0, 0, 0.72]} size={0.04} setOverlay={setOverlay}>logiworld</TextObj>
        <TextObj position={[0, 0, -0.72]} size={0.04} setOverlay={setOverlay}>lifeworld</TextObj>
        <OrbitControls autoRotate autoRotateSpeed={0.25} enablePan={false} />
      </Canvas>
      {overlayVisible && overlayContent}
      <div>
        <small>orbit around scene</small>
        <br />
        <small>click words for details</small>
        <br />
        <small>click title for info</small>
      </div>
    </main>
  );
}
