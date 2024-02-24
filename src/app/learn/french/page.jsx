import '@/app/util/transition.css';
// import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

export default function French () {
  const chapters = [
    {
      number: '1',
      title: 'Les expressions de base',
      desc: '기초적인 표현',
    },
    {
      number: '2',
      title: 'Les nombres',
      desc: '숫자',
    },
    {
      number: '3',
      title: 'L\'heure',
      desc: '낮과 밤, 계절',
    },
    {
      number: '4',
      title: 'Le calendrier',
      desc: '요일, 월, 년',
    },
    {
      number: '5',
      title: 'La famille',
      desc: '가족',
    },
    {
      number: '6',
      title: 'Le corps Ⅰ',
      desc: '신체 1',
    },
    {
      number: '7',
      title: 'Le corps Ⅱ',
      desc: '신체 2',
    },
    {
      number: '8',
      title: 'Les couleurs',
      desc: '색상',
    },
    {
      number: '9',
      title: 'Les vêtements',
      desc: "옷",
    },
    {
      number: '10',
      title: 'La nourriture',
      desc: '음식',
    },
    {
      number: '11',
      title: 'Les transports',
      desc: '교통',
    },
    {
      number: '12',
      title: 'La maison',
      desc: '집',
    },
    {
      number: '13',
      title: 'La santé',
      desc: '건강',
    },
    {
      number: '14',
      title: 'L\'environnement Ⅰ',
      desc: '자연 1',
    },
    {
      number: '15',
      title: 'L\'environnement Ⅱ',
      desc: '자연 2',
    },
  ];

  return (
    <main className={`${styles.main} animated fade_1`}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <div className={styles.title_text}>
            <h1>Français</h1>
            <h2>Embarquez pour une aventure linguistique sans précédent</h2>
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
        href={`/learn/french/${props.number}`}
        as={`/learn/french/${props.number}`}
      >
        <h1 className={styles.card_number}>{props.number}</h1>
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
      </Link>
    </div>
  );
}
