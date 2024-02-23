"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./Links.module.scss";
import NavLink from "./NavLink/NavLink";
import { handleLogout } from "@/lib/action";

const links: {
  title: string;
  path: string;
}[] = [
  {
    title: "Главная",
    path: "/",
  },
  {
    title: "О нас",
    path: "/about",
  },
  {
    title: "Контакты",
    path: "/contact",
  },
  {
    title: "Отзывы",
    path: "/feedback",
  },
  {
    title: "Цены",
    path: "/price",
  },
  {
    title: "Блог",
    path: "/blog",
  },
  {
    title: "Вакансии",
    path: "/jobs",
  },
];

const Links = ({
  session,
}: {
  session: {
    user: {
      email: string;
      id: string;
      isAdmin: boolean;
    };
    expires: Date;
  };
}): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && (
              <NavLink link={{ title: "Админ", path: "/admin" }} />
            )}
            <form action={handleLogout}>
              <button className={styles.logout}>Выйти</button>
            </form>
          </>
        ) : (
          <NavLink link={{ title: "Войти", path: "/login" }} />
        )}
      </div>
      <Image
        className={styles.menuButton}
        src="/menu.png"
        alt="image"
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink link={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Links;
