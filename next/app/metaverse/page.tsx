import Link from 'next/link'
import s from './page.module.scss'
import Readme from './Readme'
import Icon from './Icon'
import GitPubIcon from './assets/gitpub.png'
import ReadMeIcon from './assets/readme.svg'
import FileIcon from './assets/file.svg'
import FolderIcon from './assets/folder.svg'
import AnnieProf from './assets/annieProf.jpg'
import HomeIcon from './assets/hedron.png'

export default function Meta() {
  return (
    <main className={s.main}>
      <div className={s.header}>
        <Icon src={GitPubIcon}>Memory Traversing Machine</Icon>
      </div>
      <div className={s.body}>
        <div className={s.left}>
          <div className={s.files}>
            <div className={s.first}>
              <Icon src={AnnieProf}>Annie He</Icon>
            </div>
            <Icon src={FolderIcon}>file</Icon>
            <Icon src={FileIcon}>demo.mp4</Icon>
            <Icon src={FileIcon}>index.html</Icon>
            <Icon src={FileIcon}>main.js</Icon>
            <Icon src={FileIcon}>README.md</Icon>
            <Icon src={FileIcon}>schematic.png</Icon>
            <Icon src={FileIcon}>styles.css</Icon>
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
            <h3>about</h3>
            <br />
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, impedit.</div>
            <hr />
          </div>
          <div>
            <h3>contributor</h3>
            <br />
            <Icon src={AnnieProf}>Annie He</Icon>
            <br />
            <Icon src={HomeIcon}>Poly Hedron</Icon>
            <br />
            <Icon src={HomeIcon}>Noam Schuck</Icon>
            <br />
            <Icon src={HomeIcon}>Alexander Faust</Icon>
            <br />
            <Icon src={HomeIcon}>Zephaniah Odidika</Icon>
            <hr />
          </div>
          <div>
            <h3>languages</h3>
            <br />
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, impedit.</div>
          </div>
        </div>
      </div>
      <div className={s.footer}>
        <Icon src={GitPubIcon}>© 2024 GitPub, Inc.</Icon>
      </div>
    </main>
  );
}
