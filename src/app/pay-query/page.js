import PayQueryPageClient from "./PayQueryPageClient";

export const metadata = {
  title: "Pay Query - Accept Recruitment",
  description: "Submit a pay query to Accept Recruitment's payroll team.",
  openGraph: {
    title: "Pay Query - Accept Recruitment",
    description: "Submit a pay query to Accept Recruitment's payroll team.",
  }
};

export default function PayQueryPage() {
  return <PayQueryPageClient />;
}
