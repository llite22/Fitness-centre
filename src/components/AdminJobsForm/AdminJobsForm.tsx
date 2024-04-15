"use client";
import { addJob } from "@/lib/action";
import styles from "./AdminJobsForm.module.scss";
import { useFormState } from "react-dom";

const AdminJobsForm = ({ userId }: { userId: string }): JSX.Element => {
  const [state, formAction] = useFormState(addJob, undefined);

  return (
    <form action={formAction} className={styles.container}>
      <h1>Добавить новую вакансию</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="заголовок" />
      <input type="email" name="contactEmail" placeholder="контактный email" />
      <input type="text" name="img" placeholder="ссылка на изображение" />
      <textarea name="description" placeholder="описание" rows={10} />
      <button>Добавить</button>
      {state?.error}
    </form>
  );
};

export default AdminJobsForm;
