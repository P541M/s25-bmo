import Navbar from '@/components/Navbar';
import Introduction from '@/components/Introduction';
import CompanyProfile from '@/components/CompanyProfile';
import JobDescription from '@/components/JobDescription';
import Goals from '@/components/Goals';
import Conclusion from '@/components/Conclusion';
import Acknowledgements from '@/components/Acknowledgements';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <Introduction />
      <CompanyProfile />
      <JobDescription />
      <Goals />
      <Conclusion />
      <Acknowledgements />
    </main>
  );
}