import '@/app/util/transition.css';
// import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

export default function German () {
  const levels = [
    {
      level_code: 'rookie',
      level_title: 'Rookie',
      desc: 'Start your journey from scratch',
      image: '/images/learn_lv1.png',
    },
    {
      level_code: 'explorer',
      level_title: 'Explorer',
      desc: 'Expand your vocabulary to communicate better',
      image: '/images/learn_lv2.png',
    },
    {
      level_code: 'pioneer',
      level_title: 'Pioneer',
      desc: 'Conquer the language strategically',
      image: '/images/learn_lv3.png',
    },
  ];

  return (
    <main className={`${styles.main} animated fade_1`}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <div className={styles.title_img}>
            <img src="/images/flag_deu.png" />
          </div>
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
              level_code={levels[i].level_code}
              level_title={levels[i].level_title}
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
        href={`/learn/german/${props.level_code}`}
        as={`/learn/german/${props.level_code}`}
      >
        <img src={props.image} />
        <h1>{props.level_title}</h1>
        <p>{props.desc}</p>
      </Link>
    </div>
  );
}
