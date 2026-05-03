import PrivacyPolicyPageClient from "./PrivacyPolicyPageClient";

export const metadata = {
  title: "Privacy Policy - Accept Recruitment",
  description: "Privacy Policy for Accept Recruitment. Read about how we collect, use, share and protect your personal data.",
  openGraph: {
    title: "Privacy Policy - Accept Recruitment",
    description: "Privacy Policy for Accept Recruitment. Read about how we collect, use, share and protect your personal data.",
  }
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyPageClient />;
}
