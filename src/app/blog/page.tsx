import PostCard from "@/components/PostCard/PostCard";
import styles from "./blog.module.scss";
import { getPosts } from "@/lib/data";

// const getData = async () => {
//   const responce = await fetch(`http://localhost:3000/api/blog`, {
//     next: { revalidate: 3600 },
//   });

//   if (!responce.ok) {
//     throw new Error("Failed to fetch posts");
//   }
//   return responce.json();
// };

const BlogPage = async (): Promise<JSX.Element> => {
  const posts = await getPosts();

  if (posts.length === 0) {
    return <p className={styles.no_post}>Постов нет</p>;
  }

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};
export default BlogPage;
