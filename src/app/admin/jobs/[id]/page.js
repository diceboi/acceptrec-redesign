import { JobEditor } from "@/components/admin/JobEditor";
import { getJob } from "@/lib/jobs-data";
import { notFound } from "next/navigation";

export default async function EditJobPage({ params }) {
  const { id } = await params;
  const job = await getJob(id);

  if (!job) notFound();

  return <JobEditor job={job} isNew={false} />;
}
