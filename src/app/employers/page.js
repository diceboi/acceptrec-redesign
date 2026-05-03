import EmployersPageClient from "./EmployersPageClient";

export const metadata = {
  title: "Are you searching for staff? You are in the Best place - Accept Recruitment",
  description: "Stop settling for mediocre temps. Accept Recruitment sends workers who are rated, coached, and rewarded for performance. Discover performance staffing today.",
  openGraph: {
    title: "Are you searching for staff? You are in the Best place - Accept Recruitment",
    description: "Stop settling for mediocre temps. Accept Recruitment sends workers who are rated, coached, and rewarded for performance. Discover performance staffing today.",
  }
};

export default function EmployersPage() {
  return <EmployersPageClient />;
}
