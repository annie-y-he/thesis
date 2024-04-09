import Link from 'next/link'
import Cover from '../assets/c4.jpg'
import Image from 'next/image'
import s from '../page.module.scss'
import PLOSWIcon from '../assets/plos-white.svg'

export const metadata = {
  title: 'Conceptualizing Existence Through the Microscopic Lens: A Philosophical Inquiry into the Ontological Implications of Mimetic Unicellular Organisms and the Semiotics of Their Simulacra',
  date: 'March 18, 2016',
  author: 'Michel Foucault, Daniel Dennett, Patricia Churchland, Thomas Nagel, Mary Midgley, Jean Baudrillard',
  cover: Cover,
  abstract: 'The discovery of mimetic unicellular organisms challenges traditional philosophical perspectives on the nature of being and representation. In this exploratory treatise, we investigate the ontological and semiotic implications of these organisms, positioning them within a broader discourse of simulation and reality. Drawing from phenomenology and post-structuralist thought, we propose a new framework for understanding biological mimicry as a form of existential expression. Our philosophical inquiry extends into the realm of language and meaning, questioning the interpretive frameworks through which we engage with the concept of life. The paper posits that the study of mimetic unicellular organisms offers profound insights into the dialogue between existence and its representations, with far-reaching implications for our perception of self and the other.',
  path: '/universe/a4'
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