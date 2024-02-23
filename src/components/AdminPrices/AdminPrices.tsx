import { getPrice } from "@/lib/data";
import styles from "./AdminPrices.module.scss";
import { deletePrice } from "@/lib/action";
import Image from "next/image";

const AdminPrices = async (): Promise<JSX.Element> => {
  const prices = await getPrice();

  return (
    <div className={styles.container}>
      <h1>Цены</h1>
      {prices.map((price) => (
        <div className={styles.post} key={price.id}>
          <div className={styles.detail}>
            <Image
              src={price.img || "/noAvatar.png"}
              alt="avatar"
              width={50}
              height={50}
            />
            <span className={styles.postTitle}>{price.title}</span>
          </div>
          <form action={deletePrice}>
            <input type="hidden" name="id" value={price.id} />
            <button className={styles.postButton}>Удалить</button>
          </form>
        </div>
      ))}
    </div>
  );
};
export default AdminPrices;
