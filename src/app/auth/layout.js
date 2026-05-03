import "@/app/globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export const metadata = {
  title: "Admin Auth | Accept Recruitment",
};

export default function AuthLayout({ children }) {
  return (
    <div className={`${poppins.className} dark min-h-screen bg-navy-900 text-white flex items-center justify-center p-6 relative overflow-hidden`}>
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-teal-5/10 to-transparent opacity-50 pointer-events-none" />
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-teal-5/20 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-md">
        {children}
      </div>
    </div>
  );
}
