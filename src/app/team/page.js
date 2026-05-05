import OurTeamPageClient from "./OurTeamPageClient";
import { getTeamMembers } from "@/lib/team-data";

export const metadata = {
  title: "Meet the team - Accept Recruitment",
  description: "Meet the dedicated team behind Accept Recruitment. A combined 100+ years of recruitment expertise working to find the perfect candidates for your business.",
  openGraph: {
    title: "Meet the team - Accept Recruitment",
    description: "Meet the dedicated team behind Accept Recruitment. A combined 100+ years of recruitment expertise working to find the perfect candidates for your business.",
  }
};

export default async function OurTeamPage() {
  const members = await getTeamMembers();
  return <OurTeamPageClient initialMembers={members} />;
}
