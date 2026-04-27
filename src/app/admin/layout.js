import "@/app/globals.css";
import { Poppins } from "next/font/google";
import { AdminSidebar } from "@/components/admin/AdminSidebar";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export const metadata = {
  title: "Admin | Accept Recruitment",
  description: "Content management dashboard",
};

export default function AdminLayout({ children }) {
  return (
    <div className={`${poppins.className} dark flex h-screen bg-navy-900 text-white overflow-hidden`}>
      <AdminSidebar />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
