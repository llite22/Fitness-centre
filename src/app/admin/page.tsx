import { Suspense } from "react";
import styles from "./admin.module.scss";
import AdminPosts from "@/components/AdminPosts/AdminPosts";
import AdminPostForm from "@/components/AdminPostForm/AdminPostForm";
import AdminUsers from "@/components/AdminUsers/AdminUsers";
import AdminUserForm from "@/components/AdminUserForm/AdminUserForm";
import { auth } from "@/lib/auth";
import AdminJobs from "@/components/AdminJobs/AdminJobs";
import AdminJobsForm from "@/components/AdminJobsForm/AdminJobsForm";
import AdminPrices from "@/components/AdminPrices/AdminPrices";
import AdminPricesForm from "@/components/AdminPricesForm/AdminPricesForm";

const AdminPage = async ({
  searchParams,
}: {
  searchParams: { page: string };
}): Promise<JSX.Element> => {
  const session: any = await auth();
  const page = searchParams.page || "1";

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts page={page} />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminPostForm userId={session?.user?.id} />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminUserForm />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminJobs />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminJobsForm userId={session?.user?.id} />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPrices />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminPricesForm userId={session?.user?.id} />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
