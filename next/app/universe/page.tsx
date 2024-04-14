'use client';

import Link from 'next/link'
import s from './page.module.scss'
import Image from 'next/image'
import PLOSIcon from './assets/plos.svg'
import PLOSWIcon from './assets/plos-white.svg'
import HedronIcon from './assets/hedron.png'
import useWindowHeight from '../hooks/useWindowHeight';

import { metadata as m1 } from './a1/metadata'
import { metadata as m2 } from './a2/metadata'
import { metadata as m3 } from './a3/metadata'
import { metadata as m4 } from './a4/metadata'
import { metadata as m5 } from './a5/metadata'

export default function Uni() {
  useWindowHeight();
  const Article: React.FC<any> = ({ metadata }) => {
    return (
      <div className={s.article}>
      <div>
        <h2><Link href={metadata.path}>{metadata.title}</Link></h2>
        <br />
        <p>{metadata.date}</p>
        <p>{metadata.author}</p>
        <br />
        <p>{metadata.abstract.split(' ').slice(0, 20).join(' ') + '...'}</p>
      </div>
      <div>
        <Image src={metadata.cover} width={0} height={0} alt="cover"></Image>
      </div>
    </div>
    )
  }

  return (
    <main className={s.main}>
      <div className={s.header}>
        <div>
          <Image src={PLOSIcon} width={0} height={60} alt="logo"></Image>
          <hr />
          <div className={s.intro}>
            <h1>Mimetic Unicellular Organisms</h1>
            <br />
            <p>Published April 9, 2024 Curated Collections</p>
            <br />
            <p>This curated collection converges the forefront of multidisciplinary research and theoretical discourse surrounding the groundbreaking discovery of mimetic unicellular organisms and their colonial arrangements. It showcases a compendium of perspectives that span from the intricacies of single-cell mimicry to the complex behaviors of colonial formations. Scholars and innovators from fields as diverse as cellular biology, synthetic design, computational modeling, and architectural biomimicry contribute to a body of work that not only dissects the functional dynamics of these organisms but also extrapolates their potential to inspire revolutionary applications in technology, medicine, and sustainable design. The collection seeks to offer insights into how these biological entities, characterized by their remarkable adaptive capabilities, can reshape our understanding of natural processes and inform the next generation of cross-disciplinary innovations.</p>
          </div>
        </div>
      </div>
      <div className={s.body}>
        <Article metadata={m1} />
        <hr />
        <Article metadata={m2} />
        <hr />
        <Article metadata={m3} />
        <hr />
        <Article metadata={m4} />
        <hr />
        <Article metadata={m5} />
      </div>
      <div className={s.footer}>
        <div>
          <Image src={PLOSWIcon} width={0} height={60} alt="logo"></Image>
          <Link href='/'>
            <Image src={HedronIcon} width={0} height={60} alt="logo"></Image>
          </Link>
        </div>
        <div>PLOS (Parodic Library of Science) is a nonprofit 501(c)(3) corporation, #C2354500, and is based in San Francisco, California, US</div>
      </div>
    </main>
  );
}
