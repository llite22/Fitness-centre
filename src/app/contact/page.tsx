import styles from "./contact.module.scss";

const ContactPage = (): JSX.Element => {
  return (
    <div className={styles.contact}>
      <div className={styles.contact_info}>
        <p>
          <strong>Адрес:</strong> Город Псков, Улица Вымышленная, дом 6
        </p>
        <p>
          <strong>Телефон:</strong> +7 (123) 456-7890
        </p>
        <p>
          <strong>Email:</strong> FitLife@yandex.ru
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
