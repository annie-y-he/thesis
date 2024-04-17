'use client';

import Link from 'next/link'
import s from './page.module.scss'
import Icon from './Icon'
import YouCubeIcon from './assets/youcube.png'
import YouIcon from './assets/you.png'
import SubIcon from './assets/sub.png'
import AnnieProf from './assets/annieProf.jpg'
import HomeIcon from './assets/home.svg'
import HedronIcon from '@/images/hedron.png'
import SearchIcon from './assets/search.svg'
import SignInIcon from './assets/signin.svg'
import DOPIcon from './assets/dop.png'
import SPIcon from './assets/sp.png'

const BP = process.env.NEXT_PUBLIC_BASE_PATH;
import useWindowHeight from '../hooks/useWindowHeight';

import Image from 'next/image'

export default function Topo() {
  useWindowHeight();

  function dateDiff(date1: Date, date2: Date) {
    const milliseconds = Math.abs(date2.getTime() - date1.getTime());
    const seconds = milliseconds / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = hours / 24;
    const weeks = days / 7;
    const months = days / 30.44; // Average days per month
    const years = days / 365.25; // Account for leap years

    let result, unit;
    if (years >= 1) {
      result = Math.round(years)
      unit = "year"
    } else if (months >= 1) {
      result = Math.round(months)
      unit = "month"
    } else if (weeks >= 1) {
      result = Math.round(weeks)
      unit = "week"
    } else if (days >= 1) {
      result = Math.round(days)
      unit = "day"
    } else if (hours >= 1) {
      result = Math.round(hours)
      unit = "hour"
    } else if (minutes >= 1) {
      result = Math.round(minutes)
      unit = "minute"
    } else {
      result = Math.round(seconds)
      unit = "second"
    }

    return result + " " + (result > 1 ? unit + "s" : unit)
  }
  return (
    <main className={s.main}>
      <div className={s.body}>
        <div className={s.right}>
          <div className={s.keywords}>
            <div>All</div>
            <div>Transportation</div>
            <div>Technology</div>
            <div>Architecture</div>
            <div>Portal Regulation</div>
            <div>Government Agency</div>
            <div>Department of Portals</div>
            <div>History</div>
            <div>Social Media</div>
            <div>Commercial</div>
            <div>Spacial Topology</div>
            <div>Geographic Information</div>
          </div>
          <div className={s.vid}>
            <video controls preload="auto" playsInline>
              <source src={BP + "/videos/ad.mp4"} type="video/mp4" />
              <track src={BP + "/assets/circuit.vtt"} kind="subtitles" srcLang="en" default />
            </video>
            <div>
              <h3>Safe Portal Technology | Safe-Portals™</h3>
              <br />
              <div><small>Everyone deserves safety when traveling, no matter the destination. Travel with confidence, Safe Portals ensures that you and your loved ones are protected with the latest in portal safety technology.</small></div>
              <br />
              <small><div className={s.sponsor}>
                <div><b>Sponsored</b></div>
                <pre> · </pre>
                <Icon src={SPIcon} className={s.fr}>Safe-Portals™</Icon>
              </div></small>
            </div>
          </div>
          <div className={s.vid}>
            <video controls preload="auto" playsInline>
              <source src={BP + "/videos/dop.mp4"} type="video/mp4" />
              <track src={BP + "/assets/circuit.vtt"} kind="subtitles" srcLang="en" default />
            </video>
            <div>
              <h3>DOP OWN for prospective Portal Owners webinar</h3>
              <br />
              <div><small>3.59K views · {dateDiff(new Date("2023-10-23"), new Date())} ago</small></div>
              <br />
              <Icon src={DOPIcon} className={s.fr}>NYC Department of Portals</Icon>
              <br />
              <div><small>Presented on October 23, 2023 by representatives of DOP's Office of Owner Advocate (OOA), and DOP's Office of Public Outreach (OPO).</small></div>
            </div>
          </div>
          <div className={s.vid}>
            <video controls preload="auto" playsInline>
              <source src={BP + "/videos/portable.mp4"} type="video/mp4" />
              <track src={BP + "/assets/circuit.vtt"} kind="subtitles" srcLang="en" default />
            </video>
            <div>
              <h3>Unboxing the Portable Portal: The Future of Portal</h3>
              <br />
              <div><small>24K views · {dateDiff(new Date("2023-12-6"), new Date())} ago</small></div>
              <br />
              <Icon src={AnnieProf} className={s.fr}>Annie He</Icon>
              <br />
              <div><small>Unboxing SP's latest Portable Portal + Exclusive DISCOUNT for My Viewers!</small></div>
              <br />
              <div><small>20% OFF!!!: <a>https://shop.safe-portals.com/UCUCLFrfc1Fzy3n9VL4vpGAA</a></small></div>
            </div>
          </div>
          <div className={s.load}>
            <video autoPlay loop muted playsInline>
              <source src={BP + "/videos/loading.mp4"} type="video/mp4" />
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
        <button>
          <Image src={SignInIcon} width={0} height={30} alt="icon" />
          <div>Sign In</div>
        </button>
      </div>
    </main>
  );
}
