import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Introduction from '@/components/Introduction';
import CompanyProfile from '@/components/CompanyProfile';
import JobDescription from '@/components/JobDescription';
import Goals from '@/components/Goals';
import Conclusion from '@/components/Conclusion';
import Acknowledgements from '@/components/Acknowledgements';
import BMOLogo from '@/components/BMOLogo';

export default function Home() {
  return (
    <main className="min-h-screen pt-16 overflow-x-hidden w-full relative">
      <Navbar />
      <Hero />
      <Introduction />
      <CompanyProfile />
      <JobDescription />
      <Goals />
      <Conclusion />
      <Acknowledgements />
      
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center mb-6">
              <div className="flex items-center mb-2 sm:mb-0 sm:mr-4">
                <BMOLogo size="sm" className="mr-3" />
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Summer 2025 Work Term Report</h3>
                  <p className="text-sm text-gray-600">Technology Research Analyst</p>
                </div>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-600 mb-4 max-w-2xl mx-auto">
              Thank you for taking the time to read about my journey at BMO Financial Group.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-gray-500">
              <span>© 2025 Work Term Report</span>
              <span className="hidden sm:block">•</span>
              <span>BMO Financial Group</span>
              <span className="hidden sm:block">•</span>
              <span>University of Guelph</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}