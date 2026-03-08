import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jakarta.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
