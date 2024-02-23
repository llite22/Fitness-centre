"use client";

import { addUser } from "@/lib/action";
import styles from "./AdminUserForm.module.scss";
import { useFormState } from "react-dom";

const AdminUserForm = (): JSX.Element => {
  const [state, formAction] = useFormState(addUser, undefined);

  return (
    <form action={formAction} className={styles.container}>
      <h1>Добавить нового пользователя</h1>
      <input type="text" name="username" placeholder="имя" />
      <input type="text" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="пароль" />
      <input type="text" name="img" placeholder="ссылка на изображение" />
      <select className={styles.select} name="isAdmin">
        <option value="false">Это админ?</option>
        <option value="false">Нет</option>
        <option value="true">Да</option>
      </select>
      <button>Добавить</button>
      {state?.error}
    </form>
  );
};

export default AdminUserForm;
