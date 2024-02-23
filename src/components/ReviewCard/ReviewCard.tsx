import styles from "./ReviewCard.module.scss";
import { Suspense } from "react";
import PostUser from "../PostUser/PostUser";

const ReviewCard = ({
  review,
}: {
  review: {
    _id: string;
    userId: string;
    text: string;
    rating: number;
  };
}): JSX.Element => {
  const generateStars = (): JSX.Element[] => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={i <= review.rating ? styles.filled : styles.star}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className={styles.review_card}>
      <h1>{review.text}</h1>
      <div className={styles.rating}>{generateStars()}</div>
      <div className={styles.username}>
        <Suspense fallback={<div>Loading...</div>}>
          <PostUser userId={review.userId} />
        </Suspense>
      </div>
    </div>
  );
};

export default ReviewCard;
