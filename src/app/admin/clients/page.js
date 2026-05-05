import { AdminHeader } from "@/components/admin/AdminHeader";
import { ClientList } from "@/components/admin/ClientList";
import { getClients } from "@/lib/clients-data";

export default async function AdminClientsPage() {
  const clients = await getClients();

  return (
    <div className="min-h-screen bg-[#0d111a]">
      <AdminHeader
        title="Clients"
        subtitle="Manage client codes and names"
        actionLabel="Add Client"
        actionHref="/admin/clients/new"
      />
      <ClientList clients={clients} />
    </div>
  );
}
