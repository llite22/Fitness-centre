import ReviewCard from "@/components/ReviewCard/ReviewCard";
import styles from "./feedback.module.scss";
import { getReviews } from "@/lib/data";
import { auth } from "@/lib/auth";
import ReviewForm from "@/components/ReviewForm/ReviewForm";

const FeedbackPage = async (): Promise<JSX.Element> => {
  const reviews = await getReviews();
  const session: any = await auth();

  return (
    <div className={styles.container}>
      <ReviewForm sessionUser={session.user.id} />
      {reviews.map((review) => (
        <div key={review.id}>
          <ReviewCard review={review} />
        </div>
      ))}
    </div>
  );
};
export default FeedbackPage;
