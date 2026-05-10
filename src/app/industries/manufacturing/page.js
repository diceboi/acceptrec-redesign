import ManufacturingClient from "./ManufacturingClient";

export const metadata = {
  title: "Manufacturing Recruitment Agency | Midlands Temp Staffing | Accept Recruitment",
  description: "Manufacturing recruitment across the Midlands. Production operatives, machine operators, assembly workers and quality inspectors. 98% fill rate, 4-hour emergency response.",
  alternates: {
    canonical: "https://www.acceptrec.co.uk/industries/manufacturing",
  },
  openGraph: {
    title: "Manufacturing Recruitment | Accept Recruitment",
    description: "Manufacturing recruitment across the Midlands. Production operatives, machine operators, assembly workers and quality inspectors.",
    url: "https://www.acceptrec.co.uk/industries/manufacturing",
    siteName: "Accept Recruitment",
    locale: "en_GB",
    type: "website",
  },
};

export default function ManufacturingPage() {
  return <ManufacturingClient />;
}
