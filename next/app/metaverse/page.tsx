'use client';

import Link from 'next/link'
import { useState, useEffect } from 'react'
import s from './page.module.scss'
import Readme from './Readme'
import Icon from './Icon'
import GitPubIcon from './assets/gitpub.png'
import ReadMeIcon from './assets/readme.svg'
import FileIcon from './assets/file.svg'
import FolderIcon from './assets/folder.svg'
import AnnieProf from './assets/annieProf.jpg'
import HedronIcon from '@/images/hedron.png'

export default function Meta() {
  const [dir1, setDir1] = useState(false);
  const [dir2, setDir2] = useState(false);
  const [dir3, setDir3] = useState(false);
  const [dir4, setDir4] = useState(false);
  const [dir5, setDir5] = useState(false);
  const [dir6, setDir6] = useState(false);
  const [dir7, setDir7] = useState(false);

  return (
    <main className={s.main}>
      <div className={s.header}>
        <Icon src={GitPubIcon}>Memory Traversing Machine</Icon>
      </div>
      <div className={s.body}>
        <div className={s.left}>
          <div className={s.files}>
            <div className={s.first}>
              <Link href='/'>
                <Icon src={HedronIcon}>Hedron</Icon>
              </Link>
            </div>
            <Icon src={FolderIcon} onClick={() => setDir7(!dir7)}>datasheets</Icon>
            { dir7 && <Icon src={FileIcon} className={s.indent}>mx3284a.pdf</Icon> }
            { dir7 && <Icon src={FileIcon} className={s.indent}>tq5589f.pdf</Icon> }
            { dir7 && <Icon src={FileIcon} className={s.indent}>bp7865n.pdf</Icon> }
            { dir7 && <Icon src={FileIcon} className={s.indent}>sr1428x.pdf</Icon> }
            { dir7 && <Icon src={FileIcon} className={s.indent}>lv8811m.pdf</Icon> }
            <Icon src={FolderIcon} onClick={() => setDir2(!dir2)}>firmware</Icon>
            { dir2 && <Icon src={FileIcon} className={s.indent}>main.c</Icon> }
            { dir2 && <Icon src={FileIcon} className={s.indent}>main_old.c</Icon> }
            { dir2 && <Icon src={FileIcon} className={s.indent}>Makefile</Icon> }
            { dir2 && <Icon src={FileIcon} className={s.indent}>test.c</Icon> }
            <Icon src={FolderIcon} onClick={() => setDir1(!dir1)}>hardware</Icon>
            { dir1 && <Icon src={FileIcon} className={s.indent}>circuit.circ</Icon> }
            { dir1 && <Icon src={FileIcon} className={s.indent}>design.sv</Icon> }
            { dir1 && <Icon src={FileIcon} className={s.indent}>layout.pcb</Icon> }
            { dir1 && <Icon src={FileIcon} className={s.indent}>testbench.sv</Icon> }
            <Icon src={FolderIcon} onClick={() => setDir4(!dir4)}>miscellaneous</Icon>
            { dir4 && <Icon src={FileIcon} className={s.indent}>poster.ai</Icon> }
            { dir4 && <Icon src={FileIcon} className={s.indent}>poster_print.pdf</Icon> }
            { dir4 && <Icon src={FileIcon} className={s.indent}>syllabus.pdf</Icon> }
            <Icon src={FolderIcon} onClick={() => setDir6(!dir6)}>photos</Icon>
            { dir6 && <Icon src={FileIcon} className={s.indent}>IMG_0458.HEIC</Icon> }
            { dir6 && <Icon src={FileIcon} className={s.indent}>IMG_0459.HEIC</Icon> }
            { dir6 && <Icon src={FileIcon} className={s.indent}>IMG_0462.HEIC</Icon> }
            { dir6 && <Icon src={FileIcon} className={s.indent}>IMG_0465.HEIC</Icon> }
            <Icon src={FolderIcon} onClick={() => setDir3(!dir3)}>prototypes</Icon>
            { dir3 && <Icon src={FolderIcon} className={s.indent}>Autosave</Icon> }
            { dir3 && <Icon src={FileIcon} className={s.indent}>design.3dm</Icon> }
            { dir3 && <Icon src={FileIcon} className={s.indent}>design.bak</Icon> }
            { dir3 && <Icon src={FileIcon} className={s.indent}>headset.stl</Icon> }
            { dir3 && <Icon src={FileIcon} className={s.indent}>lasercut.dxf</Icon> }
            <Icon src={FolderIcon} onClick={() => setDir5(!dir5)}>submissions</Icon>
            { dir5 && <Icon src={FileIcon} className={s.indent}>report.docx</Icon> }
            { dir5 && <Icon src={FileIcon} className={s.indent}>report_print.pdf</Icon> }
            { dir5 && <Icon src={FileIcon} className={s.indent}>report_revised.docx</Icon> }
            { dir5 && <Icon src={FileIcon} className={s.indent}>report_revised_v2.docx</Icon> }
            <Icon src={FileIcon}>demo.mp4</Icon>
            <Icon src={FileIcon}>README.md</Icon>
            <Icon src={FileIcon}>.gitignore</Icon>
          </div>
          <div className={s.readme}>
            <div className={s.first}>
              <Icon src={ReadMeIcon}>README</Icon>
            </div>
            <Readme />
          </div>
        </div>
        <div className={s.right}>
          <div>
            <h3>About</h3>
            <br />
            <div>Final project for ECE150: Digital Logic Design</div>
            <br />
            <div className={s.tags}>
              <div>digital-logic</div>
              <div>memory</div>
              <div>electronics</div>
              <div>circuit-design</div>
              <div>virtual-reality</div>
              <div>hardware-software-interface</div>
              <div>simulation</div>
              <div>neurotechnology</div>
              <div>user-experience</div>
              <div>digital-fabrication</div>
              <div>interdisciplinary-collaboration</div>
              <div>cyber-physical-system</div>
              <div>augmented-cognition</div>
              <div>debugging</div>
            </div>
            <hr />
          </div>
          <div>
            <h3>Contributors</h3>
            <br />
            <Icon src={AnnieProf}>Annie He</Icon>
            <br />
            <Icon>Noam Schuck</Icon>
            <br />
            <Icon>Zephaniah Odidika</Icon>
          </div>
        </div>
      </div>
      <div className={s.footer}>
        <Icon src={GitPubIcon}>© 2024 GitPub, Inc.</Icon>
      </div>
    </main>
  );
}
