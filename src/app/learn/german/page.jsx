import '@/app/util/transition.css';
// import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

export default function German () {
  return (
    <main className={`${styles.main} animated fade_1`}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h1>Deutsch</h1>
          <h2>Begeben Sie sich auf ein sprachliches Abenteuer wie kein anderes</h2>
        </div>
        <Card
          url="/learn/german/beginner"
          image="/images/learning1.png"
          title="Start From Scratch"
          desc="Learn basic expressions and vocabulary"
        />
        <Card
          url="/learn/german/vocabulary"
          image="/images/learning2.png"
          title="Vocabulary"
          desc="Expand your vocabulary to communicate better"
        />
        <Card
          url="/learn/german/pattern"
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
