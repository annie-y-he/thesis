import Link from 'next/link'
import Cover from '../assets/c3.png'
import Image from 'next/image'
import s from '../page.module.scss'
import PLOSWIcon from '../assets/plos-white.svg'

export const metadata = {
  title: 'Advancing Cellular Automata Complexity: Computational Modeling of Mimetic Unicellular Systems through Machine Learning and Heuristic Analysis',
  date: 'March 18, 2016',
  author: 'Alan Turing, John von Neumann, Stephen Wolfram, Conrad Waddington, Norbert Wiener, Marvin Minsky, Rosalyn Yalow, David Marr',
  cover: Cover,
  abstract: 'The advent of mimetic unicellular organisms has opened new avenues in computational biology, particularly in the simulation of cellular automata. This article discusses the development of a novel computational framework that models the dynamic and adaptable behaviors of these organisms. Through the integration of machine learning algorithms and heuristic analysis, we construct and validate a series of models that accurately simulate cellular behaviors observed in natural environments. The models demonstrate not only the utility of computational approaches in biological research but also their potential application in the development of intelligent biomimetic systems. Our simulations offer predictive insights into cellular responses to environmental stimuli, highlighting the possibilities for advanced computational interpretation of biological phenomena.',
  path: '/universe/a3'
};

export default function Page() {
  return (
    <main className={s.main}>
      <div className={s.subheader}>
        <h1><Link href="/universe">PLOS</Link></h1>
      </div>
      <div className={s.subbody}>
        <h3>{metadata.title}</h3>
        <p>{metadata.author}</p>
        <p>Published: {metadata.date}</p>
        <h3>Abstract</h3>
        <p>{metadata.abstract}</p>
        <Image src={Cover} width={0} height={0} alt="cover"></Image>
      </div>
      <div className={s.subfooter}>
        <Image src={PLOSWIcon} width={0} height={60} alt="logo"></Image>
        <div>PLOS (Parodic Library of Science) is a nonprofit 501(c)(3) corporation, #C2354500, and is based in San Francisco, California, US</div>
      </div>
    </main>
  );
}