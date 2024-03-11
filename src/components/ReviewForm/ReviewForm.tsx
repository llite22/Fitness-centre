"use client";
import { useState } from "react";
import { useFormState } from "react-dom";
import { addRewiev } from "@/lib/action";
import styles from "./ReviewForm.module.scss";

const ReviewForm = ({ sessionUser }: { sessionUser: string }): JSX.Element => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [state, formAction] = useFormState(addRewiev, undefined);
  const generateStarsAdd = (): JSX.Element[] => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={i <= selectedRating ? styles.filled_add : styles.star_add}
          onClick={() => setSelectedRating(i)}
        >
          ★
        </span>
      );
    }
    return stars;
  };
  return (
    <form action={formAction} className={styles.container}>
      <textarea name="text" cols={30} rows={10}></textarea>
      <div className={styles.rating_add}>{generateStarsAdd()}</div>
      <input type="text" name="userId" value={sessionUser} />
      <input type="text" name="rating" value={selectedRating} />
      <button className={styles.button}>Оставить отзыв</button>
      {state?.error}
    </form>
  );
};
export default ReviewForm;
