import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { getPublicJobs } from '@/lib/jobs-data';
import { JobsClientSection } from './JobsClientSection';
import { IconSearch } from '@tabler/icons-react';

export const metadata = {
  title: 'Current Vacancies | Accept Recruitment',
  description: 'Browse live job vacancies across Leicester, Coventry, and Tamworth. Immediate starts available in warehouse, driving, and production roles.',
};

export const revalidate = 60; // ISR: revalidate every 60 seconds

export default async function JobsPage() {
  const jobs = await getPublicJobs();

  // Build filter options from live data
  const locations = ['All', ...new Set(jobs.map(j => j.location).filter(Boolean))];
  const categories = ['All', ...new Set(
    jobs.flatMap(j => j.category.split(',').map(c => c.trim())).filter(Boolean)
  )];
  const payRates = jobs.map(j => j.payRate).filter(Boolean);
  const minPayInData = payRates.length ? Math.floor(Math.min(...payRates)) : 10;
  const maxPayInData = payRates.length ? Math.ceil(Math.max(...payRates)) : 30;

  return (
    <main className="bg-navy-900 min-h-screen">
      <Navbar />
      {/* Hero */}
      <section className="relative flex min-h-[60vh] w-full items-center justify-center overflow-hidden bg-navy-900 pt-32 pb-12">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div
            className="absolute rounded-full animate-pulse"
            style={{ height: '70%', width: '55%', left: '-10%', top: '-10%', background: 'var(--color-teal-5)', opacity: 0.13, filter: 'blur(90px)' }}
          />
          <div
            className="absolute rounded-full animate-pulse"
            style={{ height: '60%', width: '55%', right: '-10%', top: '-5%', background: 'var(--color-purple-5)', opacity: 0.18, filter: 'blur(100px)', animationDelay: '1s' }}
          />
        </div>
        <div className="pointer-events-none absolute inset-0 dot-pattern opacity-20" />
        <div className="relative z-10 mx-auto max-w-[1140px] px-6 text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-teal-5/30 bg-teal-5/10 px-4 py-2">
            <IconSearch className="text-teal-5" size={16} />
            <span className="text-sm font-semibold text-teal-4">Find Work</span>
          </div>
          <h1 className="font-sans text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl mb-8">
            Current Vacancies
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/60 mb-10">
            Browse live vacancies across Leicester, Coventry, and Tamworth. Immediate starts available.
          </p>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-navy-700 to-transparent" />
      </section>

      {/* Interactive client section (filters + grid) */}
      <JobsClientSection
        jobs={jobs}
        locations={locations}
        categories={categories}
        minPayInData={minPayInData}
        maxPayInData={maxPayInData}
      />

      <CtaBanner
        badge="CAN'T FIND WHAT YOU'RE LOOKING FOR?"
        title="Register and we'll find"
        titleHighlight="the right role."
        subtitle="Register with us and we'll contact you when the right role comes in. Jobs get filled fast — don't miss out."
        primaryButtonText="Register Now"
        secondaryButtonText="Message Us"
        primaryButtonHref="/registration"
        secondaryButtonHref="/contact"
      />
      <Footer />
    </main>
  );
}
