import '@/app/util/transition.css';
// import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

export default function German () {
  const chapters = [
    {
      number: '1',
      title: 'Die Grundausdrücke',
      desc: '기초적인 표현',
    },
    {
      number: '2',
      title: 'Die Zahlen',
      desc: '숫자',
    },
    {
      number: '3',
      title: "Die Uhrzeit",
      desc: '낮과 밤, 계절',
    },
    {
      number: '4',
      title: 'Der Kalender',
      desc: '요일, 월, 년',
    },
    {
      number: '5',
      title: 'Die Familie',
      desc: '가족',
    },
    {
      number: '6',
      title: 'Der Körper Ⅰ',
      desc: '신체 1',
    },
    {
      number: '7',
      title: 'Der Körper Ⅱ',
      desc: '신체 2',
    },
    {
      number: '8',
      title: 'Die Farben',
      desc: '색상',
    },
    {
      number: '9',
      title: 'Die Kleidung',
      desc: '옷',
    },
    {
      number: '10',
      title: 'Das Essen',
      desc: '음식',
    },
    {
      number: '11',
      title: 'Der Transport',
      desc: '교통',
    },
    {
      number: '12',
      title: 'Das Haus',
      desc: '집',
    },
    {
      number: '13',
      title: 'Die Gesundheit',
      desc: '건강',
    },
    {
      number: '14',
      title: "Die Umwelt Ⅰ",
      desc: '자연 1',
    },
    {
      number: '15',
      title: "Die Umwelt Ⅱ",
      desc: '자연 2',
    },
  ];

  return (
    <main className={`${styles.main} animated fade_1`}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <div className={styles.title_text}>
            <h1>Deutsch</h1>
            <h2>
              Begeben Sie sich auf ein sprachliches Abenteuer wie kein anderes
            </h2>
          </div>
        </div>
        {chapters.map ((a, i) => {
          return (
            <Card
              number={chapters[i].number}
              title={chapters[i].title}
              image={chapters[i].image}
              desc={chapters[i].desc}
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
        href={`/learn/german/${props.number}`}
        as={`/learn/german/${props.number}`}
      >
        <h1 className={styles.card_number}>{props.number}</h1>
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
      </Link>
    </div>
  );
}
