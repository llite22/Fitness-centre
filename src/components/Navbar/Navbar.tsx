import Link from "next/link";
import Links from "./Links/Links";
import styles from "./Navbar.module.scss";
import { auth } from "@/lib/auth";

const Navbar = async (): Promise<JSX.Element> => {
  const session = await auth();
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        FitLife
      </Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};
export default Navbar;
