import { TeamMemberEditor } from "@/components/admin/TeamMemberEditor";
import { getTeamMember } from "@/lib/team-data";
import { notFound } from "next/navigation";

export default async function EditTeamMemberPage({ params }) {
  const { id } = await params;
  const member = await getTeamMember(id);

  if (!member) {
    notFound();
  }

  return <TeamMemberEditor member={member} isNew={false} />;
}
