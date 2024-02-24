import '@/app/util/transition.css';
import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

// Icons
import {BsGithub} from 'react-icons/bs';
import {BsTwitterX} from 'react-icons/bs';
import {BsWordpress} from 'react-icons/bs';

export default function About () {
  return (
    <main className={`${styles.main} animated fade_1`}>
      <div className={styles.background} />
      <div className={styles.wrapper}>
        <section className={`${styles.about} animated fade_2`}>
          <div className={`${styles.about_logo} animated fade_3`}>
            <Image
              src={'/images/lublio_heart_w.png'}
              width={100}
              height={100}
              alt={'Lublio Logo'}
            />
          </div>
          <div className={`${styles.about_title} animated fade_4`}>
            <h1>About Lublio.</h1>
          </div>
          <div className={`${styles.about_desc} animated fade_5`}>
            <div className={styles.about_socials}>
              <ul>
                <li>
                  <Link href={'https://github.com/fidelite95'}>
                    <BsGithub />
                  </Link>
                </li>
                <li>
                  <Link href={'https://twitter.com/inje_pak'}>
                    <BsTwitterX />
                  </Link>
                </li>
                <li>
                  <Link href={'/'}>
                    <BsWordpress />
                  </Link>
                </li>
              </ul>
            </div>
            <p>
              Welcome to Lublio!
              <br />
              <br />
              At Lublio, we believe in the power of communication and the transformative impact it has on individuals and communities. Our platform is more than just a language learning website; it's a dynamic space designed to inspire, engage, and empower learners of all backgrounds to embark on a journey of linguistic discovery.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
