import '@/app/util/transition.css';
import styles from './page.module.css';
import Link from 'next/link';

export default function Learn () {
  const languages = [
    {
      name: '영어',
      link: 'english',
      title: 'English',
      desc: 'Embark on a linguistic adventure like no other',
      background: '/images/learn_eng.png',
    },
    {
      name: '프랑스어',
      link: 'french',
      title: 'Français',
      desc: 'Embarquez pour une aventure linguistique sans précédent',
      background: '/images/learn_fra.png',
    },
    {
      name: '독일어',
      link: 'german',
      title: 'Deutsch',
      desc: 'Begeben Sie sich auf ein sprachliches Abenteuer wie kein anderes',
      background: '/images/learn_deu.png',
    },
    {
      name: '이탈리아어',
      link: 'italian',
      title: 'Italiano',
      desc: "Intraprendete un'avventura linguistica senza precedenti",
      background: '/images/learn_ita.png',
    },
    // {
    //   name: '러시아어',
    //   link: 'russian',
    //   title: 'Русский',
    //   desc: 'Отправиться в беспрецедентное лингвистическое приключение',
    //   background: '/images/learn_rus.png',
    // },
    // {
    //   name: '스페인어',
    //   link: 'spanish',
    //   title: 'Español',
    //   desc: 'Embárquese en una aventura lingüística sin igual',
    //   background: '/images/learn_esp.png',
    // },
    // {
    //   name: '튀르키예어',
    //   link: 'turkish',
    //   title: 'TÜRKÇE',
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
              name={languages[i].name}
              link={languages[i].link}
              title={languages[i].title}
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
          pathname: `/learn/${props.link}`,
          query: {
            link: props.link,
          },
        }}
        as={`/learn/${props.link}`}
      >
        <img src={props.background} />
        <h1>{props.title}</h1>
        <h2>{props.desc}</h2>
        <h3>{props.name}</h3>
      </Link>
    </div>
  );
}
