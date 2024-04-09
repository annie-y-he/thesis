import Link from 'next/link'
import Cover from '../assets/c2.jpg'
import Image from 'next/image'
import s from '../page.module.scss'
import PLOSWIcon from '../assets/plos-white.svg'

export const metadata = {
  title: 'Cellular Morphogenesis and Pattern Formation Among Mimetic Unicellular Species: Unveiling the Complexity of Protozoan Social Structures and Intercellular Chemical Language',
  date: 'March 18, 2016',
  author: 'Barbara McClintock, James Watson, Francis Crick, Lynn Margulis, Craig Venter, Elizabeth Blackburn, Richard Dawkins, Sydney Brenner, Rita Levi-Montalcini, Oswald Avery, David Attenborough',
  cover: Cover,
  abstract: 'The intracellular communication and colonial organization of mimetic unicellular organisms represent a fascinating frontier in cytology. This article presents a deep dive into the mechanisms and outcomes of chemical signaling within and between cellular colonies. Utilizing cutting-edge imaging and molecular tracking techniques, we reveal an intricate network of signaling pathways that govern cellular cooperation and competition. The findings suggest a sophisticated level of organization, akin to multicellular organisms, challenging traditional notions of unicellular independence. Through a multidisciplinary approach, our analysis elucidates the genetic and biochemical landscapes that facilitate complex social behaviors among protozoan species. The implications of these interactions are vast, influencing the development of targeted therapies in medicine and providing insights into the origins of multicellularity.',
  path: '/universe/a2'
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