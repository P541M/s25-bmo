import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Introduction from '@/components/Introduction';
import CompanyProfile from '@/components/CompanyProfile';
import JobDescription from '@/components/JobDescription';
import Goals from '@/components/Goals';
import Conclusion from '@/components/Conclusion';
import Acknowledgements from '@/components/Acknowledgements';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Introduction />
      <CompanyProfile />
      <JobDescription />
      <Goals />
      <Conclusion />
      <Acknowledgements />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mr-3">
                <span className="text-white font-bold">BMO</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Summer 2025 Work Term Report</h3>
                <p className="text-gray-400">Technology Research Analyst</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Thank you for taking the time to read about my journey at BMO Financial Group.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-500">
              <span>© 2025 Work Term Report</span>
              <span>•</span>
              <span>BMO Financial Group</span>
              <span>•</span>
              <span>University of Guelph</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}