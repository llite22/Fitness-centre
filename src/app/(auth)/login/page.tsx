import LoginForm from "@/components/LoginForm/LoginForm";
import { handleGithubLogin } from "@/lib/action";
import styles from "./login.module.scss";

const LoginPage = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* <form action={handleGithubLogin}>
          <button className={styles.github}>Login with Github</button>
        </form> */}
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
