import { getPosts } from "@/lib/data";
import styles from "./AdminPosts.module.scss";
import Image from "next/image";
import { deletePost } from "@/lib/action";
import Pagination from "../ui/Pagination/Pagination";

const AdminPosts = async ({ page }: { page: string }): Promise<JSX.Element> => {
  const { count, posts } = await getPosts(page);

  return (
    <div className={styles.container}>
      <h1>Посты</h1>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <div className={styles.detail}>
            <Image
              src={post.img || "/noAvatar.png"}
              alt="postImage"
              width={50}
              height={50}
            />
            <span className={styles.postTitle}>{post.title}</span>
          </div>
          <form action={deletePost}>
            <input type="hidden" name="id" value={post.id} />
            <button className={styles.postButton}>Удалить</button>
          </form>
        </div>
      ))}
      <Pagination count={count} />
    </div>
  );
};

export default AdminPosts;
