import { getJobs } from "@/lib/data";
import Image from "next/image";
import styles from "./AdminJobs.module.scss";
import { deleteJob } from "@/lib/action";

const AdminJobs = async (): Promise<JSX.Element> => {
  const jobs = await getJobs();

  return (
    <div className={styles.container}>
      <h1>Вакансии</h1>
      {jobs.map((job) => (
        <div className={styles.user} key={job.id}>
          <div className={styles.detail}>
            <Image
              src={job.img || "/noAvatar.png"}
              alt="jobImage"
              width={50}
              height={50}
            />
            <span>{job.title}</span>
          </div>
          <form action={deleteJob}>
            <input type="hidden" name="id" value={job.id} />
            <button className={styles.userButton}>Удалить</button>
          </form>
        </div>
      ))}
    </div>
  );
};
export default AdminJobs;
