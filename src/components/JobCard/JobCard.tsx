import Image from "next/image";
import styles from "./JobCard.module.scss";
import { Suspense } from "react";
import PostUser from "../PostUser/PostUser";
const JobCard = ({
  job,
}: {
  job: {
    _id: string;
    title: string;
    description: string;
    img: string;
    contactEmail: string;
    userId: string;
  };
}): JSX.Element => {
  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <h1>{job.title}</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.image}>
          <Image src={job.img} width={350} height={200} alt="image" />
        </div>
        <div className={styles.info}>
          <p className={styles.description}>{job.description}</p>
          <div className={styles.username}>
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={job.userId} />
            </Suspense>
            <p>{job.contactEmail}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
