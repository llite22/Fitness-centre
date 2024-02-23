"use client";
import { login } from "@/lib/action";
import styles from "./LoginForm.module.scss";
import { useFormState } from "react-dom";
import Link from "next/link";

const LoginForm = (): JSX.Element => {
  const [state, formAction] = useFormState(login, undefined);

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="имя" name="username" />
      <input type="password" placeholder="пароль" name="password" />
      <button>Войти</button>
      {state?.error}
      <Link href="/register">
        {"Нет аккаунта?"} <b>Регистрация</b>
      </Link>
    </form>
  );
};

export default LoginForm;
