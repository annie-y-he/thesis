import s from './page.module.scss'
import Debug from './assets/debug.png'
import Image from 'next/image'
const BP = process.env.NEXT_PUBLIC_BASE_PATH

export default function Readme() {
  return (
    <div className={s.md}>
      <h1>Memory Traversing Machine</h1>
      <hr />
      <p><b>Course Name</b>: ECE150: Digital Logic Design, Fall 2022</p>
      <p><b>Date</b>: December 14th 2022</p>
      <p><b>Authors</b>: Noam Schuck, Annie He, Zeph Odidika</p>
      <br />
      <h3>Table of Content</h3>
      <hr />
      <ul>
        <li><a href="#intro">Introduction</a></li>
        <li><a href="#team">Team Composition</a></li>
        <li><a href="#metho">Methodology</a></li>
        <li><a href="#imple">Implementation</a></li>
        <li><a href="#demo">Demonstration</a></li>
        <li><a href="#debug">Debugging</a></li>
        <li><a href="#conc">Conclusion</a></li>
      </ul>

      <br />
      <h3 id="intro">Introduction</h3>
      <hr />
      <p>Our semester project focused on the development of a Memory Traversing Machine, which ambitiously sought to integrate and apply the entirety of the digital logic concepts covered in our course, including the use of registers, RAM chips, and finite state machines. This initiative aimed to create a system capable of reading, storing, and replaying human memories. While we faced challenges in fully realizing every aspect of the project, we successfully implemented core functionalities such as memory capture, data manipulation, and the dynamic display of these processes on a headset. Moving forward, our team is eager to build upon the foundational work and substantial effort invested in this innovative project, particularly to expand its memory interaction capabilities and explore potential applications.</p>
      <br />
      <h3 id="team">Team Composition</h3>
      <hr />
      <p>The team consisted of Annie He, Noam Schuck, and Zephaniah Odidika, each taking on specific tasks critical to the project's progress:</p>
      <br />
      <p><b>Annie He</b> reviewed the Logisim simulations conducted by Noam and investigated the headset's input and output parameters. She also purchased necessary electronic materials including wire strippers.</p>
      <br />
      <p><b>Noam Schuck</b> was responsible for creating the Logisim simulation of our circuit and acquiring physical materials like the cardboard box used in building the prototype. He also prepared the wires needed for the circuit.</p>
      <br />
      <p><b>Zephaniah Odidika</b> focused on selecting the essential components and chips, downloading datasheets for team reference. He designed and fabricated the box that houses the device and wired the LED matrix.</p>
      <br />
      <p>All team members participated in the wiring process, contributing to the assembly of the Memory Traversing Machine.</p>
      <br />
      <h3 id="metho">Methodology</h3>
      <hr />
      <p>Our project methodology was centered on a structured approach to managing the development process, leveraging specific software tools and a clear file organization system across various development phases. The design phase utilized digital logic simulations and PCB layout designs with tools like Logisim and Autodesk Eagle, documented in our <code>hardware</code> directory. Firmware development focused on iterative coding in the <code>firmware</code> folder, supported by IDEs and compilers for code efficiency. Prototyping was conducted through 3D modeling documented within the <code>prototypes</code> folder, using CAD software, while the <code>photos</code> directory captured each iteration's progress. The project's functionality and interface evaluation were showcased in <code>demo.mp4</code>. The reporting phase consolidated all documentation and analyses in the <code>submissions</code> directory, ensuring a comprehensive and straightforward project development process without excess.</p>
      <br />
      <h3 id="imple">Implementation</h3>
      <hr />
      <p>In the implementation phase, our team translated the project's theoretical framework into a functioning prototype. We began with constructing the digital logic circuits using Logisim, based on the simulations and designs outlined in our <code>hardware</code> folder. Following successful simulation, we progressed to firmware coding, where main functionalities were developed in C, as seen in our <code>firmware</code> directory, including essential operations like memory capture and playback control. The physical assembly of the device involved meticulous wiring and soldering, guided by the datasheet for each component and the <code>layout.pcb</code> for accurate board design. The 3D-printed enclosure, detailed in the <code>prototypes</code> directory, housed the electronics, ensuring durability and ease of use. Concurrently, the LED matrix was programmed to display the system's status, providing immediate feedback on operations</p>
      <br />
      <h3 id="demo">Demonstration</h3>
      <hr />
      <video controls preload="auto">
        <source src={BP + "/videos/circuit.mp4"} type="video/mp4" />
        <track src={BP + "/captions/circuit.vtt"} kind="subtitles" srcLang="en" default />
      </video>
      <br />
      <br />
      <h3 id="debug">Debugging</h3>
      <hr />
      <Image src={Debug} width={0} height={0} alt="icon" />
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui nobis quasi illum et expedita quia autem sequi magni impedit eligendi corrupti nemo iusto culpa consequatur, nesciunt quod suscipit adipisci, quae repudiandae! Adipisci, ratione? Similique doloribus accusamus quod porro temporibus perspiciatis id velit, molestiae, sint dolore natus soluta alias labore laudantium!</p>
      <br />
      <h3 id="conc">Conclusion</h3>
      <hr />
      <p>In conclusion, our project's exploration into merging digital logic with biological processes demonstrated not only the complexities inherent in such endeavors but also the potential risks and ethical considerations. The technical challenges we faced, including managing propagation delays and other stochastic elements of real-world circuit design, reinforced the understanding that theoretical models often diverge significantly from practical application. These experiences prompted a deeper reflection on the fundamentally physical nature of what we often consider digital, blurring the lines between the tangible and the abstract. We hope our mistakes will alert others that the integration of technology and biology should be approached with caution, awareness, and a deep consideration for unforeseen consequences.</p>
    </div>
  )
}
