"use client";

import Image from "next/image";
import styles from "./page.module.css";
import React, { useRef, useEffect } from 'react';

import * as THREE from 'three';
import * as ADDON from 'three/addons';

export default function Home() {
  const loader = new ADDON.FontLoader();
  const canvasRef = useRef(null);
  function sceneSetup (font: ADDON.Font) {
    if(!canvasRef.current) {
      return;
    }
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);
    const camera = new THREE.PerspectiveCamera(18, renderer.domElement.width / renderer.domElement.height, 0.1, 1000);

    camera.position.z = 10;

    const controls = new ADDON.OrbitControls( camera, renderer.domElement );

    const tetraGeometry = new THREE.TetrahedronGeometry(1.040);
    const tetraMaterial = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true});
    const tetraMesh = new THREE.Mesh(tetraGeometry, tetraMaterial);
    tetraMesh.name = 'tetrahedron';
    scene.add(tetraMesh);

    const octaGeometry = new THREE.OctahedronGeometry(0.85);
    const octaMaterial = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true});
    const octaMesh = new THREE.Mesh(octaGeometry, octaMaterial);
    octaMesh.name = 'octahedron';
    scene.add(octaMesh);

    const texts: [THREE.Mesh, THREE.Mesh][] = [];
    const textMaterial = new THREE.MeshBasicMaterial({color: 0xffffff});

    createText("TOPOVERSE", 0.7, 0.7, 0.7, 0.05);
    createText("METAVERSE", -0.7, -0.7, 0.7, 0.05);
    createText("UNIVERSE", 0.7, -0.7, -0.7, 0.05);
    createText("PATAVERSE", -0.7, 0.7, -0.7, 0.05);

    createText("interSubject", 0, 0.9, 0, 0.025);
    createText("intraObject", 0, -0.9, 0, 0.025);
    createText("interObject", 0.9, 0, 0, 0.025);
    createText("intraSubject", -0.9, 0, 0, 0.025);
    createText("Object", 0, 0, 0.9, 0.025);
    createText("Subject", 0, 0, -0.9, 0.025);

    createText("fictiworld", 0, 0.65, 0, 0.025);
    createText("dataworld", 0, -0.65, 0, 0.025);
    createText("archiworld", 0.65, 0, 0, 0.025);
    createText("dreamworld", -0.65, 0, 0, 0.025);
    createText("logiworld", 0, 0, 0.65, 0.025);
    createText("lifeworld", 0, 0, -0.65, 0.025);

    const overlay = document.querySelector('#overlay');

    overlay?.addEventListener('click', (e) => {
      overlay.classList.add('hide');
    });

    function createText(text: string, x: number, y: number, z: number, s: number) {
      const textGeometry = new ADDON.TextGeometry(text, {
        font: font,
        size: s,
        height: s / 10,
        curveSegments: 1,
      });
      textGeometry.center();
      const textMesh = new THREE.Mesh(textGeometry, textMaterial);
      textMesh.position.set(x, y, z);
      textMesh.name = text;
      scene.add(textMesh);

      textGeometry.computeBoundingBox();
      const textSize = textGeometry.boundingBox?.getSize(new THREE.Vector3()) || new THREE.Vector3(1, 1, 1);
      const padding = 0.5
      const backgroundGeometry = new THREE.PlaneGeometry(textSize.x + textSize.y * padding, textSize.y * (1 + padding));
      const backgroundMaterial = new THREE.ShaderMaterial({
        vertexShader: `
          varying vec2 vUv;

          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
          `,
        fragmentShader: `
        varying vec2 vUv;
        uniform vec3 color;
        uniform float borderRadius; // Radius in UV units, normalized [0, 1]
        uniform vec2 size;

        vec2 adjust(vec2 pos) {
          float aspectRatio = size.x / size.y;
          return vec2(pos.x * aspectRatio, pos.y);
        }

        void main() {
          vec2 adjustedUV = adjust(vUv);

          // Simple distance check to the top-left corner
          if (distance(adjustedUV, adjust(vec2(0, 1))) < borderRadius && distance(adjustedUV, adjust(vec2(0, 1)) + vec2(borderRadius, -borderRadius)) > borderRadius ||
              distance(adjustedUV, adjust(vec2(1, 1))) < borderRadius && distance(adjustedUV, adjust(vec2(1, 1)) + vec2(-borderRadius, -borderRadius)) > borderRadius ||
              distance(adjustedUV, adjust(vec2(1, 0))) < borderRadius && distance(adjustedUV, adjust(vec2(1, 0)) + vec2(-borderRadius, borderRadius)) > borderRadius ||
              distance(adjustedUV, adjust(vec2(0, 0))) < borderRadius && distance(adjustedUV, adjust(vec2(0, 0)) + vec2(borderRadius, borderRadius)) > borderRadius) {
              discard;
            } else {
            gl_FragColor = vec4(color, 0.1); // Default color
          }
        }`
        ,
        uniforms: {
          color: { value: new THREE.Color(0xffffff) },
          borderRadius: { value: 0.2 },
          size: { value: new THREE.Vector2(textSize.x + textSize.y * padding, textSize.y * (1 + padding)) }
        },
        transparent: true,
      });
      const backgroundMesh = new THREE.Mesh(backgroundGeometry, backgroundMaterial);
      backgroundMesh.position.set(x, y, z-0.001);
      backgroundMesh.name = text;

      scene.add(backgroundMesh);

      texts.push([textMesh, backgroundMesh]);
    }

    const sphereGeometry = new THREE.SphereGeometry( 0.6, 64, 32 ); 
    const sphereMaterial = new THREE.MeshStandardMaterial({
      color: 0x555555,
      transparent: true,
      opacity: 0.9
    }); 
    const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
    scene.add( sphere );

    const ambientLight = new THREE.AmbientLight(0xffffff, 5);
    scene.add(ambientLight);

    // Variables in global scope
    const mouse = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();

    // Function to be called whenever the mouse moves
    function onMouseMove(event: MouseEvent) {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
    }

    function onTouchStart(event: TouchEvent) {
      mouse.x = (event.targetTouches[0].clientX / window.innerWidth) * 2 - 1;
      mouse.y = - (event.targetTouches[0].clientY / window.innerHeight) * 2 + 1;
    }

    // The function to check for intersections
    function checkIntersections() {
      raycaster.setFromCamera(mouse, camera);
      var inter = false;
      var name: string;
      const intersects = raycaster.intersectObjects(scene.children, true);

      for (let i = 0; i < intersects.length; i++) {
        if (intersects[i].object.type === 'Mesh' && (intersects[i].object as THREE.Mesh).geometry instanceof THREE.PlaneGeometry) {
          name = intersects[i].object.name;
          inter = true;
          break;
        }
      }

      function definition() {
        if (overlay) {
          overlay.classList.remove('hide');
          const obj = document.querySelector('#' + name)?.cloneNode(true)
          if (obj instanceof HTMLElement) {
            obj.classList.remove('hide');
            overlay.children[0].remove();
            overlay.insertBefore(obj, overlay.children[0]);
          }
        }
      }

      if (inter) {
        document.body.style.cursor = 'pointer';
        document.onclick = definition;
      } else {
        document.body.style.cursor = 'default';
        document.onclick = null;
      }
    }

    window.addEventListener('mousemove', onMouseMove, false);
    window.addEventListener('touchstart', onTouchStart, false);

    animate();

    function animate() {
      texts.forEach(text => {
        text[0].lookAt(camera.position);
        text[1].lookAt(camera.position);
      });
      requestAnimationFrame(animate);
      controls.update();
      checkIntersections();
      renderer.render(scene, camera);
    }
  }
  useEffect(() => {
    loader.load("/fonts/Helvetiker.json", sceneSetup);
  }, []);

  // function handleClick(event: any) {
  //   console.log("event");
  //   event.stopPropagation();
  // }

  return (<div className={styles.full}>
    <canvas ref={canvasRef}></canvas>
    <div id="definition">
      <div id="overlay" className="hide">
        <div></div>
        <small>click margin to close</small>
      </div>
    </div>
    <div id="TOPOVERSE" className="hide">
      <p><b>Origin: </b>Inspired by topology, a branch of mathematics that studies the properties of space that are preserved under continuous deformations.</p>
      <p><b>Definition: </b>Topoverse is a verse that renders monads structurally.</p>
      <p><b>Explanation: </b>From the topoverse, we see only structures or relations. Their perceptible analogies would be diagrams, graphs, etc.</p>
      <div>
        <button onClick={console.log}>SAFE PORTAL TECHNOLOGY</button>
        <button>∴</button>
      </div>
    </div>
    <div id="METAVERSE" className="hide">
      <p><b>Origin: </b>The conventional use of "metaverse", to describe virtual reality spaces, inaccurately implies, through the prefix "meta-", a transcendental nature of such spaces.</p>
      <p><b>Definition: </b>Metaverse is a verse that renders monads conceptually.</p>
      <p><b>Explanation: </b>With a metaversal perspective, we see existences as ideas that do not necessarily map to human understanding.</p>
    </div>
    <div id="UNIVERSE" className="hide">
      <p><b>Origin: </b>The prefix "uni-" is purely historical. It does not convey the notion that the universe is the sole perspective on existence.</p>
      <p><b>Definition: </b>Universe is a verse that renders monads physically.</p>
      <p><b>Explanation: </b>The universe deals with particles and waves and their properties. They might macroscopically manifest as organisms, cosmological bodies, etc.</p>
    </div>
    <div id="PATAVERSE" className="hide">
      <p><b>Origin: </b>Inspired by Alfred Jarry's 'Pataphysics, a parody of science often described as the "science of imaginary solutions".</p>
      <p><b>Definition: </b>Pataverse is a verse that renders monads imaginarily.</p>
      <p><b>Explanation: </b>The relationship between pataverse and metaverse is analogous to that between metaverse and universe. Yet, beyond the metaversal, it wraps back to the components of the psyche.</p>
    </div>
    <div id="Subject" className="hide">
      <p><b>Explanation: </b>Encompasses an individual's sensory and perceptual experiences.</p>
      <p><b>Example: </b>A person experiencing the warmth of the sun or the taste of their favorite food, shaping their interaction with their environment.</p>
    </div>
    <div id="intraSubject" className="hide">
      <p><b>Explanation: </b>Refers to the internal fragments of an individual's consciousness, such as memories, dreams, and the unconscious.</p>
      <p><b>Example: </b>A piece of childhood experience or an entity that appeared in one's dream.</p>
    </div>
    <div id="interSubject" className="hide">
      <p><b>Explanation: </b>Relates to shared, collective experiences and understandings between individuals.</p>
      <p><b>Example: </b>Cultural rituals or social norms that shape group behavior and perceptions, like the collective mourning in a community after a significant loss.</p>
    </div>
    <div id="Object" className="hide">
      <p><b>Explanation: </b>Pertains to entities existing independently of subjective interpretation, including tangible and abstract concepts.</p>
      <p><b>Example: </b>The mathematical concept of pi or the physical reality of a stone.</p>
    </div>
    <div id="intraObject" className="hide">
      <p><b>Explanation: </b>Focuses on the intrinsic properties of objects, detached from human perception.</p>
      <p><b>Example: </b>The molecular composition of water or the data storage capacity of a computer hard drive.</p>
    </div>
    <div id="interObject" className="hide">
      <p><b>Explanation: </b>Describes the interactions and relationships between physical and conceptual objects in the environment.</p>
      <p><b>Example: </b>The ecological relationship between bees and flowering plants, where bees pollinate flowers while gathering nectar, benefiting both parties and the ecosystem.</p>
    </div>
    <div id="dreamworld" className="hide">
      <p><b>Definition: </b>Dreamworld is the intersection between pataverse and metaverse, where imagination and conceptualization blend seamlessly.</p>
      <p><b>Explanation: </b>This world embodies the realm of dreams and imagination, a space where the boundaries of reality are blurred and the impossible becomes possible.</p>
    </div>
    <div id="lifeworld" className="hide">
      <p><b>Definition: </b>Lifeworld represents the intersection between universe and pataverse, grounding the imaginary in the physical.</p>
      <p><b>Explanation: </b>It encompasses the lived experience of being in the world, where subjective perceptions and physical realities intertwine.</p>
    </div>
    <div id="dataworld" className="hide">
      <p><b>Definition: </b>Dataworld is the convergence of universe and metaverse, where physical properties and conceptual data intersect.</p>
      <p><b>Explanation: </b>This world focuses on the collection, analysis, and interpretation of data from the physical universe, revealing patterns and insights beyond immediate perception.</p>
    </div>
    <div id="fictiworld" className="hide">
      <p><b>Definition: </b>Fictiworld lies at the intersection between pataverse and topoverse, blending the structural with the imaginary.</p>
      <p><b>Explanation: </b>It is a realm where narratives and social constructs form the foundation of reality, allowing for the exploration of stories and histories as structuring elements of human collective experience.</p>
    </div>
    <div id="archiworld" className="hide">
      <p><b>Definition: </b>Archiworld is where universe meets topoverse, emphasizing the physicality of structures and their relational dynamics.</p>
      <p><b>Explanation: </b>This world explores the architectural and environmental aspects of existence, focusing on how spaces and forms define and are defined by their relationships.</p>
    </div>
    <div id="logiworld" className="hide">
      <p><b>Definition: </b>Logiworld is the intersection between metaverse and topoverse, where conceptual logic meets structural understanding.</p>
      <p><b>Explanation: </b>It represents the realm of logical deduction and mathematical structures, highlighting the patterns and systems that underlie both discrete concepts and their relationships.</p>
    </div>
  </div>);
}
