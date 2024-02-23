import styles from "./register.module.scss";
import RegisterForm from "@/components/RegisterForm/RegisterForm";
const RegisterPage = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <RegisterForm />
      </div>
    </div>
  );
};
export default RegisterPage;
