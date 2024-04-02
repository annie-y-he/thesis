'use client';

import Link from 'next/link'
import s from './page.module.scss'
import Icon from './Icon'
import YouCubeIcon from './assets/youcube.png'
import YouIcon from './assets/you.png'
import SubIcon from './assets/sub.png'
import AnnieProf from './assets/annieProf.jpg'
import HomeIcon from './assets/home.svg'
import HedronIcon from './assets/hedron.png'
import SearchIcon from './assets/search.svg'


import Image from 'next/image'

export default function Meta() {
  return (
    <main className={s.main}>
      <div className={s.body}>
        <div className={s.right}>
          <div className={s.keywords}>
            <div>All</div>
            <div>Transportation</div>
            <div>Technology</div>
            <div>Architecture</div>
            <div>Portal regulation</div>
            <div>History</div>
          </div>
          <div className={s.vid}>
            <video controls preload="auto" playsInline>
              <source src="/videos/ad.mp4" type="video/mp4" />
              <track src="/assets/circuit.vtt" kind="subtitles" srcLang="en" default />
            </video>
            <div>
              <h3>Safe Portal Technology</h3>
              <br />
              <div><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fuga illum officiis delectus mollitia earum neque eius voluptatum sequi rerum!</small></div>
              <br />
              <div><small><b>Sponsored</b> · Safe-Portal™</small></div>
            </div>
          </div>
          <div className={s.vid}>
            <video controls preload="auto" playsInline>
              <source src="/videos/dop.mp4" type="video/mp4" />
              <track src="/assets/circuit.vtt" kind="subtitles" srcLang="en" default />
            </video>
            <div>
              <h3>Safe Portal Technology</h3>
              <div><small>24K views · 8 years ago</small></div>
              <br />
              <div>NYC Department of Portals</div>
              <br />
              <div><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fuga illum officiis delectus mollitia earum neque eius voluptatum sequi rerum!</small></div>
            </div>
          </div>
          <div className={s.vid}>
            <video controls preload="auto" playsInline>
              <source src="/videos/portable.mp4" type="video/mp4" />
              <track src="/assets/circuit.vtt" kind="subtitles" srcLang="en" default />
            </video>
            <div>
              <h3>Safe Portal Technology</h3>
              <div><small>24K views · 8 years ago</small></div>
              <br />
              <div>Annie He</div>
              <br />
              <div><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fuga illum officiis delectus mollitia earum neque eius voluptatum sequi rerum!</small></div>
            </div>
          </div>
          <div className={s.load}>
            <video autoPlay loop muted playsInline>
              <source src="/videos/loading.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className={s.left}>
        <Icon src={HomeIcon}>Home</Icon>
        <Icon src={SubIcon}>Subscriptions</Icon>
        <Icon src={YouIcon}>You</Icon>
        <Link href="/">
          <Icon src={HedronIcon}>Hexahedron</Icon>
        </Link>
      </div>
      <div className={s.header}>
        <div>
          <Image src={YouCubeIcon} width={0} height={20} alt="icon" />
        </div>
        <div className={s.search}>
          <input type="text" value="safe portal technology" readOnly />        
          <div>
            <Image src={SearchIcon} width={0} height={20} alt="icon" />
          </div>
        </div>
        <Image src={AnnieProf} width={0} height={40} alt="icon" />
      </div>
    </main>
  );
}
