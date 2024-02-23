import { getPrice } from "@/lib/data";
import styles from "./price.module.scss";
import PriceCard from "@/components/PriceCard/PriceCard";

const PricePage = async (): Promise<JSX.Element> => {
  const prices = await getPrice();

  if (prices.length === 0) {
    return <p className={styles.no_prices}>Данные не найдены</p>;
  }

  return (
    <div className={styles.container}>
      {prices.map((price) => (
        <div key={price.id}>
          <PriceCard price={price} />
        </div>
      ))}
    </div>
  );
};
export default PricePage;
