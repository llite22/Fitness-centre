import Image from "next/image";
import styles from "./home.module.scss";
import Link from "next/link";
const Homepage = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Активность. Сила. Результат.</h1>
        <p className={styles.desc}>
          Наш фитнес-комплекс - это пространство, где забота о вашем здоровье
          вдохновляет на активный образ жизни. Современное оборудование,
          индивидуальные тренировки и энергичная атмосфера создают идеальные
          условия для достижения ваших фитнес-целей. Вместе мы создаем путь к
          здоровью, радости и физической силе!
        </p>
        <div className={styles.stl}>
          <Link className={styles.button} href="/about">
            Узнать больше
          </Link>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/fitnes.jpg" alt="" fill className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Homepage;
