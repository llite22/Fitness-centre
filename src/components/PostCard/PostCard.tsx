import Image from "next/image";
import styles from "./PostCard.module.scss";
import Link from "next/link";

const PostCard = ({
  post,
}: {
  post: {
    _id: string;
    title: string;
    desc: string;
    img: string;
    slug: string;
    createdAt: Date;
  };
}): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {post.img && (
          <div className={styles.imgContainer}>
            <Image src={post.img} alt="image" fill className={styles.img} />
          </div>
        )}
        <span className={styles.date}>
          {post.createdAt?.toString().slice(0, 10)}
        </span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>
          {post.desc.substring(0, 30)}
          {post.desc.length > 30 && "..."}
        </p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>
          ЧИТАТЬ ДАЛЕЕ
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
