import { ClientEditor } from "@/components/admin/ClientEditor";
import { getClient } from "@/lib/clients-data";
import { notFound } from "next/navigation";

export default async function EditClientPage({ params }) {
  const { id } = await params;
  const client = await getClient(id);

  if (!client) {
    notFound();
  }

  return <ClientEditor client={client} isNew={false} />;
}
