import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title:
    "Accept Recruitment – Dependable Temporary Staffing | Leicester & Midlands",
  description:
    "Accept Recruitment specialises in temporary staffing for warehousing, manufacturing, food production, and logistics across Leicester, Coventry & Tamworth. 190+ clients, 98% retention rate.",
  keywords:
    "recruitment agency Leicester, temp agency Coventry, warehouse staffing Tamworth, industrial recruitment Midlands, Accept Recruitment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
