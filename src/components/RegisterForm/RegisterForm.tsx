"use client";
import { register } from "@/lib/action";
import styles from "./RegisterForm.module.scss";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterForm = (): JSX.Element => {
  const [state, formAction] = useFormState(register, undefined);
  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="имя" name="username" />
      <input type="email" placeholder="email" name="email" />
      <input type="password" placeholder="пароль" name="password" />
      <input
        type="password"
        placeholder="повторить пароль"
        name="passwordRepeat"
      />
      <button>Зарегистрироваться</button>
      {state?.error}
      <Link href="/login">
        Есть аккаунт? <b>Войти</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
