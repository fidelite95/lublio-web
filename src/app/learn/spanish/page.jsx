import '@/app/util/transition.css';
// import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

export default function Spanish () {
  return (
    <main className={`${styles.main} animated fade_1`}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h1>Español</h1>
          <h2>Embárquese en una aventura lingüística sin igual</h2>
        </div>
        <Card
          url="/learn/spanish/beginner"
          image="/images/learning1.png"
          title="Start From Scratch"
          desc="Learn basic expressions and vocabulary"
        />
        <Card
          url="/learn/spanish/vocabulary"
          image="/images/learning2.png"
          title="Vocabulary"
          desc="Expand your vocabulary to communicate better"
        />
        <Card
          url="/learn/spanish/pattern"
          image="/images/learning3.png"
          title="Pattern"
          desc="Conquer the language strategically"
        />
      </div>
    </main>
  );
}

function Card (props) {
  return (
    <div className={styles.card}>
      <Link href={props.url}>
        <img src={props.image} />
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
      </Link>
    </div>
  );
}
