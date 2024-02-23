import styles from "./Footer.module.scss";
const Footer = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>FitLife</div>
      <div className={styles.text}>FitLife © Все права защищены.</div>
    </div>
  );
};
export default Footer;
