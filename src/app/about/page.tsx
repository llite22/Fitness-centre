import Image from "next/image";
import styles from "./about.module.scss";

export const metadata = {
  title: "About Page",
  description: "About description",
};

const AboutPage = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>О FitLife</h2>
        <h1 className={styles.title}>Наша история:</h1>
        <p className={styles.desc}>
          Мы рады приветствовать вас в FitLife – месте, где забота о здоровье
          становится вдохновением для лучшей жизни. Наша история началась в 2010
          году, когда основатель, Сергей Васильев, осознал важность физической
          активности и заботы о своем теле. С момента открытия мы стремимся
          создать не просто фитнес-центр, а настоящее сообщество
          единомышленников, где каждый находит поддержку и вдохновение. Наш путь
          начался с простой, но мощной идеи – сделать заботу о здоровье
          увлекательной и доступной каждому. Со временем FitLife выросло,
          превратившись в место, где люди не только тренируются, но и обретают
          друзей, достигают своих целей и создают новые, более здоровые
          привычки. Мы гордимся тем, что наша история наполнена успехами наших
          клиентов и духом нашего сообщества. Присоединяйтесь к нам на этом
          захватывающем пути к здоровью и активности. Мы с нетерпением ждем
          возможности помочь вам достичь ваших фитнес-целей и создать свою
          историю успеха вместе с FitLife.
        </p>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/fitnesAbout.jpg"
          alt="About Image"
          fill
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default AboutPage;
