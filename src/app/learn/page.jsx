import '@/app/util/transition.css';
import styles from './page.module.css';
import Link from 'next/link';

export default function Learn () {
  const languages = [
    {
      language_name: 'english',
      language_title: 'English',
      desc: 'Embark on a linguistic adventure like no other',
      background: '/images/learn_eng.png',
    },
    {
      language_name: 'french',
      language_title: 'Français',
      desc: 'Embarquez pour une aventure linguistique sans précédent',
      background: '/images/learn_fra.png',
    },
    {
      language_name: 'german',
      language_title: 'Deutsch',
      desc: 'Begeben Sie sich auf ein sprachliches Abenteuer wie kein anderes',
      background: '/images/learn_deu.png',
    },
    {
      language_name: 'italian',
      language_title: 'Italiano',
      desc: "Intraprendete un'avventura linguistica senza precedenti",
      background: '/images/learn_ita.png',
    },
    // {
    //   language_name: 'spanish',
    //   language_title: 'Español',
    //   desc: 'Embárquese en una aventura lingüística sin igual',
    //   background: '/images/learn_esp.png',
    // },
    // {
    //   language_name: 'russian',
    //   language_title: 'РУССКИЙ',
    //   desc: 'Отправиться в беспрецедентное лингвистическое приключение',
    //   background: '/images/learn_rus.png',
    // },
    // {
    //   language_name: 'turkish',
    //   language_title: 'TÜRKÇE',
    //   desc: 'Eşi benzeri görülmemiş bir dilsel maceraya atılın',
    //   background: '/images/learn_tur.png',
    // },
  ];

  return (
    <main className={`${styles.main} animated fade_1`}>
      <div className={styles.wrapper}>
        {languages.map ((a, i) => {
          return (
            <Card
              language_name={languages[i].language_name}
              language_title={languages[i].language_title}
              desc={languages[i].desc}
              background={languages[i].background}
            />
          );
        })}
      </div>
    </main>
  );
}

function Card (props) {
  return (
    <div className={styles.card}>
      <Link
        href={{
          pathname: `/learn/${props.language_name}`,
          query: {
            language_name: props.language_name,
          },
        }}
        as={`/learn/${props.language_name}`}
      >
        <img src={props.background} />
        <h1>{props.language_title}</h1>
        <h2>{props.desc}</h2>
        <h3>{props.language_name}</h3>
      </Link>
    </div>
  );
}
