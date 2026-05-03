import { AdminHeader } from "@/components/admin/AdminHeader";
import { JobList } from "@/components/admin/JobList";
import { getJobs } from "@/lib/jobs-data";

export default async function AdminJobsPage() {
  const jobs = await getJobs();

  return (
    <div className="min-h-screen bg-[#0d111a]">
      <AdminHeader
        title="Job Vacancies"
        subtitle="Create, edit and publish job listings"
        actionLabel="New Job"
        actionHref="/admin/jobs/new"
      />
      <JobList jobs={jobs} />
    </div>
  );
}
