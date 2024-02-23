import styles from "./PriceCard.module.scss";
import { Suspense } from "react";
import PostUser from "../PostUser/PostUser";
const PriceCard = ({
  price,
}: {
  price: {
    _id: string;
    title: string;
    description: string;
    amount: number;
    userId: string;
  };
}): JSX.Element => {
  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <h1>{price.title}</h1>
      </div>
      <div className={styles.content}>
        {/* <div className={styles.image}>
          <Image src={job.img} width={350} height={200} alt="image" />
        </div> */}
        <div className={styles.info}>
          <p>{price.description}</p>
          <div className={styles.username}>
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={price.userId} />
            </Suspense>
            <p className={styles.price}>{price.amount} ₽</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PriceCard;
