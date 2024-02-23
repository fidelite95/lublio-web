import '@/app/util/transition.css';
// import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import {connectDB} from '@/app/util/database';

export default async function Rookie () {
  const db = (await connectDB).db ('Lublio');
  let result = await db.collection ('expression').find ().toArray ();
  console.log (result);

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
