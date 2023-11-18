import '@/app/util/transition.css';
// import Image from 'next/image';
import styles from './page.module.css';

export default function Home () {
  return (
    <main className={`${styles.main} animated fade_1`}>
      <div className={styles.background}>
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className={styles.section}>
        <h1>Embark on a linguistic adventure like no other</h1>
      </div>
    </main>
  );
}