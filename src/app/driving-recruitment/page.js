import DrivingRecruitmentClient from "./DrivingRecruitmentClient";

export const metadata = {
  title: "HGV & Driver Recruitment Agency | Class 1 & 2 Drivers Midlands | Accept Recruitment",
  description: "HGV and driver recruitment across the Midlands. Class 1, Class 2, 7.5T and van drivers supplied to logistics operations across Leicester, Coventry and Tamworth.",
  alternates: {
    canonical: "https://www.acceptrec.co.uk/driving-recruitment",
  },
  openGraph: {
    title: "HGV & Driver Recruitment | Accept Recruitment",
    description: "HGV and driver recruitment across the Midlands. Class 1, Class 2, 7.5T and van drivers.",
    url: "https://www.acceptrec.co.uk/driving-recruitment",
    siteName: "Accept Recruitment",
    locale: "en_GB",
    type: "website",
  },
};

export default function DrivingRecruitmentPage() {
  return <DrivingRecruitmentClient />;
}
