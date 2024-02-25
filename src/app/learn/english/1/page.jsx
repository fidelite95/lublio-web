import '@/app/util/transition.css';
// import Image from 'next/image';
import styles from './page.module.css';
import {promises as fs} from 'fs';

export default async function Home () {
  const file = await fs.readFile (
    process.cwd () + '/src/app/assets/chapter1.json',
    'utf8'
  );
  const data = JSON.parse (file);

  // Random number
  function randomNumberGenerator (min, max) {
    return Math.floor (Math.random () * (max - min + 1)) + min;
  }
  let random = randomNumberGenerator (1, data.length);
  console.log (random);

  // Translated words in Korean
  const kor = [];
  for (let i = 0; i < data.length; i++) {
    kor[i] = data[i].kor;
  }

  // Target words
  const target = [];
  for (let j = 0; j < data.length; j++) {
    target[j] = data[j].eng;
  }

  return (
    <main className={`${styles.main} animated fade_1`}>
      <div className={styles.section}>
        <div className={styles.question}>
          <h1>Embark on a linguistic adventure like no other</h1>
        </div>
        <div className={styles.answer}>
          <ul>
            <li>
              <p>{data[0].kor}</p>
            </li>
            <li>
              <p>{data[0].eng}</p>
            </li>
            <li>
              <p>{data[0].fra}</p>
            </li>
            <li>
              <p>{data[0].deu}</p>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
