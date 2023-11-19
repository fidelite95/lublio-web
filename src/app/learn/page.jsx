import '@/app/util/transition.css';
import styles from './page.module.css';
import Link from 'next/link';

export default function Learn () {
  return (
    <main className={`${styles.main} animated fade_1`}>
      <div className={styles.wrapper}>
        {/* <Card
          url="/learn/english"
          background="/images/learn_eng.png"
          language="ENGLISH"
          title="EMBARK ON A LINGUISTIC ADVENTURE LIKE NO OTHER"
        /> */}
        <Card
          url="/learn/french"
          background="/images/learn_fra.png"
          language="FRANÇAIS"
          title="SE LANCER DANS UNE AVENTURE LINGUISTIQUE SANS PRÉCÉDENT"
        />
        <Card
          url="/learn/german"
          background="/images/learn_deu.png"
          language="DEUTSCH"
          title="SICH AUF EIN SPRACHLICHES ABENTEUER WIE KEIN ANDERES EINLASSEN"
        />
        <Card
          url="/learn/italian"
          background="/images/learn_ita.png"
          language="ITALIANO"
          title="IMBARCARSI IN UN'AVVENTURA LINGUISTICA SENZA PRECEDENTI"
        />
        {/* <Card
          url="/learn/spanish"
          background="/images/learn_esp.png"
          language="ESPAÑOL"
          title="EMBARCARSE EN UNA AVENTURA LINGÜÍSTICA SIN PRECEDENTES"
        />
        <Card
          url="/learn/russian"
          background="/images/learn_rus.png"
          language="РУССКИЙ"
          title="ОТПРАВИТЬСЯ В БЕСПРЕЦЕДЕНТНОЕ ЛИНГВИСТИЧЕСКОЕ ПРИКЛЮЧЕНИЕ"
        />
        <Card
          url="/learn/turkish"
          background="/images/learn_tur.png"
          language="TÜRKÇE"
          title="BENZERİ GÖRÜLMEMİŞ BİR DİL MACERASINA ATILIN"
        /> */}
        {/* Hebrew */}
        {/* <div className={styles.card}>
          <Link href="/learn/hebrew">
            <img src="/images/learn_heb.png" />
            <h1 style={{fontFamily: 'Noto Sans Hebrew, sans-serif'}}>עברית</h1>
            <h2 style={{fontFamily: 'Noto Sans Hebrew, sans-serif'}}>צאו להרפתקה לשונית שאין דומה לה</h2>
          </Link>
        </div> */}
        {/* <Card
          url="/learn/bulgarian"
          background="/images/learn_bul.png"
          language="БЪЛГАРСКИ"
          title="ДА СЕ ВПУСНЕТЕ В ЛИНГВИСТИЧНО ПРИКЛЮЧЕНИЕ КАТО НИКОЕ ДРУГО"
        />
        <Card
          url="/learn/greek"
          background="/images/learn_gre.png"
          language="ΕΛΛΗΝΙΚΑ"
          title="ΞΕΚΙΝΉΣΤΕ ΜΙΑ ΓΛΩΣΣΙΚΉ ΠΕΡΙΠΈΤΕΙΑ ΠΟΥ ΔΕΝ ΜΟΙΆΖΕΙ ΜΕ ΚΑΜΊΑ ΆΛΛΗ"
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
