import { AdminHeader } from "@/components/admin/AdminHeader";
import { TeamList } from "@/components/admin/TeamList";
import { getTeamMembers } from "@/lib/team-data";

export default async function AdminTeamPage() {
  const members = await getTeamMembers();

  return (
    <div className="min-h-screen bg-[#0d111a]">
      <AdminHeader
        title="Team Management"
        subtitle="Manage the humans behind the headsets"
      />
      <TeamList members={members} />
    </div>
  );
}
