import Link from 'next/link'
import Cover from '../assets/c5.jpg'
import Image from 'next/image'
import s from '../page.module.scss'
import PLOSWIcon from '../assets/plos-white.svg'

export const metadata = {
  title: 'Transdisciplinary Impacts and Applications: Harnessing the Potentials of Mimetic Unicellular Organisms Across Art, Architecture, and Biomedicine',
  date: 'March 18, 2016',
  author: 'Buckminster Fuller, Jane Goodall, Benoit Mandelbrot, Rachel Carson, Santiago Ramón y Cajal, Nikola Tesla, Ada Lovelace',
  cover: Cover,
  abstract: 'Mimetic unicellular organisms have profound transdisciplinary applications, extending beyond the confines of traditional biology. This article examines the transformative potential of these organisms within art, architecture, and biomedicine. We discuss their utility in developing bio-art installations that challenge our aesthetic experiences, their influence on biomimetic architectural designs that adapt responsively to environmental stimuli, and their promise in pioneering biotechnological advancements, such as bio-interactive materials and artificial organs. Our exploration encompasses both theoretical and practical applications, showcasing projects that harness the adaptive traits of these organisms. This multidisciplinary dialogue not only underscores the versatility of mimetic unicellular organisms but also catalyzes innovation across seemingly disparate fields, suggesting a unified approach to future research and application.',
  path: '/universe/a5'
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