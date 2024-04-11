"use client";
import { useState } from "react";
import { addPost } from "@/lib/action";
import styles from "./AdminPostForm.module.scss";
import { useFormState } from "react-dom";

const AdminPostForm = ({ userId }: { userId: string }): JSX.Element => {
  const [state, formAction] = useFormState(addPost, undefined);
  const [slug, setSlug] = useState<string>("");

  const handleSlugChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (/^[a-zA-Z]*$/.test(event.target.value)) {
      setSlug(event.target.value);
    }
  };

  return (
    <form action={formAction} className={styles.container}>
      <h1>Добавить новый пост</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="заголовок" />
      <input
        type="text"
        name="slug"
        value={slug}
        onChange={handleSlugChange}
        placeholder="Заголовок на английском"
      />
      <input type="text" name="img" placeholder="ссылка на изображение" />
      <textarea name="desc" placeholder="описание" rows={10} />
      <button>Добавить</button>
      {state?.error}
    </form>
  );
};

export default AdminPostForm;
