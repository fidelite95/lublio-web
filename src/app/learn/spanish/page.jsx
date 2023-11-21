import '@/app/util/transition.css';
// import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

export default function Spanish () {
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
            <img src="/images/flag_esp.png" />
          </div>
          <div className={styles.title_text}>
            <h1>Español</h1>
            <h2>Embárquese en una aventura lingüística sin igual</h2>
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
        href={`/learn/spanish/${props.level_code}`}
        as={`/learn/spanish/${props.level_code}`}
      >
        <img src={props.image} />
        <h1>{props.level_title}</h1>
        <p>{props.desc}</p>
      </Link>
    </div>
  );
}
