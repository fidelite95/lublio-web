import '@/app/util/transition.css';
import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

export default async function Rookie () {
  return (
    <main className={`${styles.main} animated fade_1`}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <div className={styles.title_img}>
            <img src="/images/flag_eng.png" />
          </div>
          <div className={styles.title_text}>
            <h1>English</h1>
            <h2>Embark on a linguistic adventure like no other</h2>
          </div>
        </div>
        <ul />
        {/* {levels.map ((a, i) => {
          return (
            <Card
              level_code={levels[i].level_code}
              level_title={levels[i].level_title}
              image={levels[i].image}
              desc={levels[i].desc}
            />
          );
        })} */}
      </div>
    </main>
  );
}
