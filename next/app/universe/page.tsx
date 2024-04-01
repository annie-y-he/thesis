import Link from 'next/link'
import s from './page.module.scss'
import Image from 'next/image'
import PLOSIcon from './assets/plos.svg'
import PLOSWIcon from './assets/plos-white.svg'
import { metadata as m1 } from './article/page'

export default function Meta() {
  return (
    <main className={s.main}>
      <div className={s.header}>
        <div>
          <Image src={PLOSIcon} width={0} height={60} alt="logo"></Image>
          <hr />
          <div className={s.intro}>
            <h1>'Omics of Cellular Signaling Pathways</h1>
            <br />
            <p>Published June 4, 2020 Curated Collections</p>
            <br />
            <p>The Signaling Pathways Project is a multi-omics knowledgebase based upon public, manually curated transcriptomic and cistromic (ChIP-Seq) datasets involving genetic and small molecule manipulations of cellular receptors, enzymes, transcription factors and co-nodes, as well as model and clinical datasets. The goal is to create a resource where scientists can routinely generate research hypotheses or validate bench relevant to cellular signaling pathways. In this collaboration, SPP biocurators identify articles from PLOS titles that contain publically archived transcriptomic and ChIP-Seq datasets, which are in turn committed to the SPP biocuration pipeline. PLOS articles are listed alongside the SPP version of the dataset, giving readers one-click access to a universe of information through a single Collection. Note: dates on SPP datasets below indicate when they were added to the Collection not Knowledgebase.</p>
          </div>
        </div>
      </div>
      <div className={s.body}>
        <div className={s.article}>
          <div>
            <h2><Link href={m1.path}>{m1.title}</Link></h2>
            <br />
            <p>{m1.date}</p>
            <p>{m1.author}</p>
          </div>
          <div>
            <Image src={m1.cover} width={0} height={0} alt="cover"></Image>
          </div>
        </div>
        <hr />
        <div className={s.article}>
          <div>
            <h2><Link href={m1.path}>{m1.title}</Link></h2>
            <br />
            <p>{m1.date}</p>
            <p>{m1.author}</p>
          </div>
          <div>
            <Image src={m1.cover} width={0} height={0} alt="cover"></Image>
          </div>
        </div>
        <hr />
        <div className={s.article}>
          <div>
            <h2><Link href={m1.path}>{m1.title}</Link></h2>
            <br />
            <p>{m1.date}</p>
            <p>{m1.author}</p>
          </div>
          <div>
            <Image src={m1.cover} width={0} height={0} alt="cover"></Image>
          </div>
        </div>
        <hr />
        <div className={s.article}>
          <div>
            <h2><Link href={m1.path}>{m1.title}</Link></h2>
            <br />
            <p>{m1.date}</p>
            <p>{m1.author}</p>
          </div>
          <div>
            <Image src={m1.cover} width={0} height={0} alt="cover"></Image>
          </div>
        </div>
      </div>
      <div className={s.footer}>
        <Image src={PLOSWIcon} width={0} height={60} alt="logo"></Image>
        <div>PLOS is a nonprofit 501(c)(3) corporation, #C2354500, and is based in San Francisco, California, US</div>
      </div>
    </main>
  );
}
