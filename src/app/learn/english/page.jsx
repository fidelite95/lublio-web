import '@/app/util/transition.css';
// import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

export default function English () {
  const chapters = [
    {
      number: '1',
      title: 'Basic Expressions',
      desc: '기초적인 표현',
    },
    {
      number: '2',
      title: 'Numbers',
      desc: '숫자',
    },
    {
      number: '3',
      title: 'Time',
      desc: '낮과 밤, 계절',
    },
    {
      number: '4',
      title: 'Calendar',
      desc: '요일, 월, 년',
    },
    {
      number: '5',
      title: 'Family',
      desc: '가족',
    },
    {
      number: '6',
      title: 'Body Ⅰ',
      desc: '신체 1',
    },
    {
      number: '7',
      title: 'Body Ⅱ',
      desc: '신체 2',
    },
    {
      number: '8',
      title: 'Colors',
      desc: '색상',
    },
    {
      number: '9',
      title: 'Clothes',
      desc: '옷',
    },
    {
      number: '10',
      title: 'Food',
      desc: '음식',
    },
    {
      number: '11',
      title: 'Transportation',
      desc: '교통',
    },
    {
      number: '12',
      title: 'Home',
      desc: '집',
    },
    {
      number: '13',
      title: 'Health',
      desc: '건강',
    },
    {
      number: '14',
      title: 'Environment Ⅰ',
      desc: '자연 1',
    },
    {
      number: '15',
      title: 'Environment Ⅱ',
      desc: '자연 2',
    },
  ];

  return (
    <main className={`${styles.main} animated fade_1`}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <div className={styles.title_text}>
            <h1>English</h1>
            <h2>Embark on a linguistic adventure like no other</h2>
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
        href={`/learn/english/chapter${props.number}`}
        as={`/learn/english/chapter${props.number}`}
      >
        <h1 className={styles.card_number}>{props.number}</h1>
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
      </Link>
    </div>
  );
}
