import '@/app/util/transition.css';
import styles from './page.module.css';
import Link from 'next/link';

export default function Learn () {
  const languages = [
    {
      lang_code: 'english',
      lang_title: 'English',
      desc: 'Embark on a linguistic adventure like no other',
      background: '/images/learn_eng.png',
    },
    {
      lang_code: 'french',
      lang_title: 'Français',
      desc: 'Embarquez pour une aventure linguistique sans précédent',
      background: '/images/learn_fra.png',
    },
    {
      lang_code: 'german',
      lang_title: 'Deutsch',
      desc: 'Begeben Sie sich auf ein sprachliches Abenteuer wie kein anderes',
      background: '/images/learn_deu.png',
    },
    {
      lang_code: 'spanish',
      lang_title: 'Español',
      desc: 'Embárquese en una aventura lingüística sin igual',
      background: '/images/learn_esp.png',
    },
  ];

  return (
    <main className={`${styles.main} animated fade_1`}>
      <div className={styles.wrapper}>
        {languages.map ((a, i) => {
          return (
            <Card
              lang_code={languages[i].lang_code}
              lang_title={languages[i].lang_title}
              desc={languages[i].desc}
              background={languages[i].background}
            />
          );
        })}
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
      <Link
        href={{
          pathname: `/learn/${props.lang_code}`,
          query: {
            lang_code: props.lang_code,
          },
        }}
        as={`/learn/${props.lang_code}`}
      >
        <img src={props.background} />
        <h1>{props.lang_title}</h1>
        <h2>{props.desc}</h2>
      </Link>
    </div>
  );
}
