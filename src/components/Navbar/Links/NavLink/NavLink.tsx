"use client";
import Link from "next/link";
import styles from "./NavLink.module.scss";
import { usePathname } from "next/navigation";

const NavLink = ({
  link,
}: {
  link: { title: string; path: string };
}): JSX.Element => {
  const pathName = usePathname();
  return (
    <Link
      href={link.path}
      className={`${styles.container} ${
        pathName === link.path && styles.active
      }`}
    >
      {link.title}
    </Link>
  );
};
export default NavLink;
