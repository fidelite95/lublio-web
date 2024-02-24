import '@/app/util/transition.css';
// import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

export default function Italian () {
  const chapters = [
    {
      number: '1',
      title: 'Le espressioni di base',
      desc: '기초적인 표현',
    },
    {
      number: '2',
      title: 'I numeri',
      desc: '숫자',
    },
    {
      number: '3',
      title: "Il tempo",
      desc: '낮과 밤, 계절',
    },
    {
      number: '4',
      title: 'Il calendario',
      desc: '요일, 월, 년',
    },
    {
      number: '5',
      title: 'La famiglia',
      desc: '가족',
    },
    {
      number: '6',
      title: 'Il corpo Ⅰ',
      desc: '신체 1',
    },
    {
      number: '7',
      title: 'Il corpo Ⅱ',
      desc: '신체 2',
    },
    {
      number: '8',
      title: 'I colori',
      desc: '색상',
    },
    {
      number: '9',
      title: 'I vestiti',
      desc: '옷',
    },
    {
      number: '10',
      title: 'Il cibo',
      desc: '음식',
    },
    {
      number: '11',
      title: 'Il trasporto',
      desc: '교통',
    },
    {
      number: '12',
      title: 'La casa',
      desc: '집',
    },
    {
      number: '13',
      title: 'La salute',
      desc: '건강',
    },
    {
      number: '14',
      title: "L'ambiente Ⅰ",
      desc: '자연 1',
    },
    {
      number: '15',
      title: "L'ambiente Ⅱ",
      desc: '자연 2',
    },
  ];

  return (
    <main className={`${styles.main} animated fade_1`}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <div className={styles.title_text}>
            <h1>Italiano</h1>
            <h2>Intraprendete un'avventura linguistica senza precedenti</h2>
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
        href={`/learn/italian/${props.number}`}
        as={`/learn/italian/${props.number}`}
      >
        <h1 className={styles.card_number}>{props.number}</h1>
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
      </Link>
    </div>
  );
}
