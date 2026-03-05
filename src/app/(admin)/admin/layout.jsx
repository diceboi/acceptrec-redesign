import { AdminSidebar } from "@/components/admin/AdminSidebar";

export const metadata = {
    title: "Admin - Vezérlőpult",
};

export default function AdminLayout({ children }) {
    return (
        <div className="flex h-screen bg-gray-50 dark:bg-zinc-950">
            <AdminSidebar />
            <main className="flex-1 overflow-y-auto p-8">
                {children}
            </main>
        </div>
    );
}
