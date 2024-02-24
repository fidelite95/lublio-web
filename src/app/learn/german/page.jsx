import '@/app/util/transition.css';
// import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

export default function German () {
  const levels = [
    {
      number: '1',
      title: 'Basic Expressions',
      desc: 'Try to learn basic expressions',
    },
    {
      number: '2',
      title: 'Numbers',
      desc: 'Numbers from zero to one trillion',
    },
    {
      number: '3',
      title: 'Time',
      desc: 'Day and night, Seasons',
    },
    {
      number: '4',
      title: 'Calendar',
      desc: 'Days of the week, Months of the year',
    },
    {
      number: '5',
      title: 'Family',
      desc: 'Family members',
    },
    {
      number: '6',
      title: 'Body Ⅰ',
      desc: 'Body parts, Face, Hand, Foot',
    },
    {
      number: '7',
      title: 'Body Ⅱ',
      desc: 'Muscles, Skeleton, Internal Organs',
    },
    {
      number: '8',
      title: 'Colors',
      desc: 'Various colors',
    },
    {
      number: '9',
      title: 'Clothes',
      desc: "Men's clothing, Women's clothing, Accessories",
    },
    {
      number: '10',
      title: 'Food',
      desc: 'Meat, Fish, Vegetables, Fruits, Drinks',
    },
    {
      number: '11',
      title: 'Transportation',
      desc: 'Roads, Bus, Train, Ship, Airline',
    },
    {
      number: '12',
      title: 'Home',
      desc: 'House, Home appliances, Gardening',
    },
    {
      number: '13',
      title: 'Health',
      desc: 'Ilness, Hospital',
    },
    {
      number: '14',
      title: 'Environment Ⅰ',
      desc: 'Landscape, Weather, Earth, Space',
    },
    {
      number: '15',
      title: 'Environment Ⅱ',
      desc: 'Animals, Plants',
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
        {levels.map ((a, i) => {
          return (
            <Card
              number={levels[i].number}
              title={levels[i].title}
              image={levels[i].image}
              desc={levels[i].desc}
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
        href={`/learn/German/${props.number}`}
        as={`/learn/German/${props.number}`}
      >
        <h1 className={styles.card_number}>{props.number}</h1>
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
      </Link>
    </div>
  );
}
