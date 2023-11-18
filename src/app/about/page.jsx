import '@/app/util/transition.css';
import Image from 'next/image';
import styles from './page.module.css';

export default function About () {
  return (
    <main className={`${styles.main} animated fade_1`}>
      <div className={styles.wrapper}>
        <section className={`${styles.about} animated fade_2`}>
          <div className={`${styles.about_logo} animated fade_3`}>
            <Image
              src={'/images/lublio_heart_w.png'}
              width={100}
              height={100}
              alt={'Lublio Logo'}
            />
          </div>
          <div className={`${styles.about_title} animated fade_4`}>
            <h1>About Lublio.</h1>
          </div>
          <div className={`${styles.about_desc} animated fade_5`}>
            <p>
              Welcome to Lublio, where language learning meets innovation and accessibility. At Lublio, we believe in the power of communication and the transformative impact it has on individuals and communities. Our platform is more than just a language learning website; it's a dynamic space designed to inspire, engage, and empower learners of all backgrounds to embark on a journey of linguistic discovery.
            </p>
            <p>
              Lublio is committed to breaking down language barriers and making the process of learning a new language not only effective but also enjoyable. We understand that each learner is unique, and our approach reflects that diversity. Whether you're a beginner eager to grasp the basics or an advanced learner aiming for fluency, Lublio provides a comprehensive and user-friendly environment tailored to your specific needs.
            </p>
            <p>
              What sets Lublio apart is our dedication to leveraging cutting-edge technology and innovative teaching methods. Our team of language experts and tech enthusiasts collaborates to create an immersive and interactive learning experience. From interactive lessons and real-world scenarios to gamified challenges, Lublio goes beyond traditional methods to make language learning an exciting and rewarding adventure.
            </p>
            <p>
              Join us at Lublio, where languages come to life, cultural barriers fade away, and the world becomes more connected through the beauty of communication. Start your linguistic journey with us and unlock a world of possibilities.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
