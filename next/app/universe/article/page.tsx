import Link from 'next/link'
import Cover from '../assets/collection.jpeg'
import Image from 'next/image'
import s from '../page.module.scss'
import PLOSWIcon from '../assets/plos-white.svg'

export const metadata = {
  title: 'Insulin Receptor Substrate Adaptor Proteins Mediate Prognostic Gene Expression Profiles in Breast Cancer',
  date: 'March 18, 2016',
  author: 'Marc A. Becker, Yasir H. Ibrahim, Annabell S. Oh, Dedra H. Fagan, Sara A. Byron, Aaron L. Sarver, Adrian V. Lee, Leslie M. Shaw, Cheng Fan, Charles M. Perou, Douglas Yee',
  cover: Cover,
  path: '/universe/article'
};

export default function Page() {
  return (
    <main className={s.main}>
      <div className={s.subheader}>
        <h1><Link href="/universe">PLOS</Link></h1>
      </div>
      <div className={s.subbody}>
        <h3>{metadata.title}</h3>
        <p>Daniel P. Beiting,Shinya Hidano,Julie E. Baggs,Jeanne M. Geskes,Qun Fang,E. John Wherry,Christopher A. Hunter,David S. Roos,Sara Cherry</p>
        <p>Published: July 21, 2015 · https://doi.org/10.1371/journal.pbio.1002200</p>
        <h3>Abstract</h3>
        <p>The protozoan parasite, Toxoplasma, like many intracellular pathogens, suppresses interferon gamma (IFN-γ)-induced signal transducer and activator of transcription 1 (STAT1) activity. We exploited this well-defined host–pathogen interaction as the basis for a high-throughput screen, identifying nine transcription factors that enhance STAT1 function in the nucleus, including the orphan nuclear hormone receptor TLX. Expression profiling revealed that upon IFN-γ treatment TLX enhances the output of a subset of IFN-γ target genes, which we found is dependent on TLX binding at those loci. Moreover, infection of TLX deficient mice with the intracellular parasite Toxoplasma results in impaired production of the STAT1-dependent cytokine interleukin-12 by dendritic cells and increased parasite burden in the brain during chronic infection. These results demonstrate a previously unrecognized role for this orphan nuclear hormone receptor in regulating STAT1 signaling and host defense and reveal that STAT1 activity can be modulated in a context-specific manner by such “modifiers.”</p>
        <Image src={Cover} width={0} height={0} alt="cover"></Image>
      </div>
      <div className={s.subfooter}>
        <Image src={PLOSWIcon} width={0} height={60} alt="logo"></Image>
        <div>PLOS is a nonprofit 501(c)(3) corporation, #C2354500, and is based in San Francisco, California, US</div>
      </div>
    </main>
  );
}