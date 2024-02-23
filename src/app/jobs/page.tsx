import JobCard from "@/components/JobCard/JobCard";
import { getJobs } from "@/lib/data";
import styles from "./jobs.module.scss";

const JobsPage = async (): Promise<JSX.Element> => {
  const jobs = await getJobs();

  if (jobs.length === 0) {
    return <p className={styles.no_jobs}>Вакансий нет</p>;
  }

  return (
    <div className={styles.container}>
      {jobs.map((job) => (
        <div key={job.id}>
          <JobCard job={job} />
        </div>
      ))}
    </div>
  );
};
export default JobsPage;
