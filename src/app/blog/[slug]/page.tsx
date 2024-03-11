import Image from "next/image";
import styles from "./singlePost.module.scss";
import PostUser from "@/components/PostUser/PostUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

// const getData = async (slug: string) => {
//   const responce = await fetch(`http://localhost:3000/api/blog/${slug}`);

//   if (!responce.ok) {
//     throw new Error("Something went wrong");
//   }

//   return responce.json();
// };

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const { slug } = params;

  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};

const SinglePostPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const post = await getPost(slug);

  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image src={post.img} alt="blogImage" fill className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Опубликовано</span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(0, 10)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
