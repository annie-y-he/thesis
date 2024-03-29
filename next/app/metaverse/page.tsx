import Link from 'next/link'
import s from './page.module.scss'

export default function Meta() {
  return (
    <main className={s.main}>
      <div className={s.header}>header</div>
      <div className={s.body}>
        <div className={s.left}>
          <div className={s.files}>
            <div className={s.first}>annie he</div>
            <div>index.html</div>
            <div>styles.css</div>
            <div>main.js</div>
            <div>file5</div>
            <div>file6</div>
          </div>
          <div className={s.readme}>
            <div className={s.first}>first</div>
            <div>content</div>
          </div>
        </div>
        <div className={s.right}>
          <div>
            <div>about</div>
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, impedit.</div>
            <hr />
          </div>
          <div>
            <div>contributor</div>
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, impedit.</div>
            <hr />
          </div>
          <div>
            <div>languages</div>
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, impedit.</div>
          </div>

        </div>
      </div>
    </main>

  );
}
