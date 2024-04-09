import Link from 'next/link'
import Cover from '../assets/c1.jpeg'
import Image from 'next/image'
import s from '../page.module.scss'
import PLOSWIcon from '../assets/plos-white.svg'

export const metadata = {
  title: 'Chronicles and Classifications: Tracing the Historical Emergence and Typological Variations of Mimetic Unicellular Organisms',
  date: 'March 18, 2016',
  author: 'Carl Linnaeus, George Cuvier, Gregor Mendel, Ernst Mayr, Rosalind Franklin, E. O. Wilson, Carolus Gustavus',
  cover: Cover,
  abstract: 'This comprehensive review examines the evolutionary trajectory and taxonomic categorization of mimetic unicellular organisms. Integrating historical and contemporary research, we outline significant discoveries that have shaped our understanding of these entities. Through comparative analysis, we discern the various typologies characterized by distinct morphological and genetic criteria. Leveraging methodologies ranging from classical microscopy to advanced genomic sequencing, our synthesis clarifies the complex lineage and adaptive strategies these organisms exhibit. Results indicate a diversified evolution with implications for broader ecological and evolutionary theories. The study culminates in a refined classification system that accommodates the nuanced spectrum of mimetic capabilities, proposing a new paradigm in unicellular taxonomy. This work provides a foundational resource for further research in evolutionary biology and a robust framework for identifying emerging species.',
  path: '/universe/a1'
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