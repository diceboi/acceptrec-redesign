import FoodProductionClient from "./FoodProductionClient";

export const metadata = {
  title: "Food Production Recruitment Agency | GLA Licensed | Accept Recruitment",
  description: "GLA-licensed food production recruitment agency (PEAR0003). Supplying food-safe, hygiene-trained workers to BRC-accredited sites across the Midlands.",
  alternates: {
    canonical: "https://www.acceptrec.co.uk/industries/food-production",
  },
  openGraph: {
    title: "Food Production Recruitment | Accept Recruitment",
    description: "GLA-licensed food production recruitment agency. Supplying food-safe, hygiene-trained workers to BRC-accredited sites across the Midlands.",
    url: "https://www.acceptrec.co.uk/industries/food-production",
    siteName: "Accept Recruitment",
    locale: "en_GB",
    type: "website",
  },
};

export default function FoodProductionPage() {
  return <FoodProductionClient />;
}
