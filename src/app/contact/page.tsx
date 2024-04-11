import styles from "./contact.module.scss";

const ContactPage = (): JSX.Element => {
  return (
    <div className={styles.contact}>
      <div className={styles.contact_info}>
        <p>
          <strong>Адрес:</strong> Город Москва, Улица Ленина, дом 53
        </p>
        <p>
          <strong>Телефон:</strong> +7 (795) 554-35-25 
        </p>
        <p>
          <strong>Email:</strong> FitLife@yandex.ru
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
