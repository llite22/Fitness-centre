"use client";
import { addPrice } from "@/lib/action";
import styles from "./AdminPricesForm.module.scss";
import { useFormState } from "react-dom";

const AdminPricesForm = ({ userId }: { userId: string }): JSX.Element => {
  const [state, formAction] = useFormState(addPrice, undefined);
  return (
    <form action={formAction} className={styles.container}>
      <h1>Добавить новый абонемент</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="заголовок" />
      <textarea name="description" placeholder="описание" rows={10} />
      <input type="text" name="amount" placeholder="цена" />
      <button>Добавить</button>
      {state?.error}
    </form>
  );
};
export default AdminPricesForm;
