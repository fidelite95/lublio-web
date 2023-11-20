import '@/app/util/transition.css';
import styles from './page.module.css';
import Link from 'next/link';

export default function Learn () {
  return (
    <main className={`${styles.main} animated fade_1`}>
      <div className={styles.wrapper}>
        <Card
          url="/learn/french"
          background="/images/learn_fra.png"
          language="FRANÇAIS"
          title="Embarquez pour une aventure linguistique sans précédent"
        />
        <Card
          url="/learn/german"
          background="/images/learn_deu.png"
          language="DEUTSCH"
          title="Begeben Sie sich auf ein sprachliches Abenteuer wie kein anderes"
        />
        <Card
          url="/learn/spanish"
          background="/images/learn_esp.png"
          language="ESPAÑOL"
          title="Embárquese en una aventura lingüística sin igual"
        />
        {/* <Card
          url="/learn/italian"
          background="/images/learn_ita.png"
          language="ITALIANO"
          title="Intraprendete un'avventura linguistica senza precedenti"
        />
        <Card
          url="/learn/russian"
          background="/images/learn_rus.png"
          language="РУССКИЙ"
          title="Отправиться в беспрецедентное лингвистическое приключение"
        />
        <Card
          url="/learn/turkish"
          background="/images/learn_tur.png"
          language="TÜRKÇE"
          title="Eşi benzeri görülmemiş bir dilsel maceraya atılın"
        /> */}
      </div>
    </main>
  );
}

function Card (props) {
  return (
    <div className={styles.card}>
      <Link href={props.url}>
        <img src={props.background} />
        <h1>{props.language}</h1>
        <h2>{props.title}</h2>
      </Link>
    </div>
  );
}
