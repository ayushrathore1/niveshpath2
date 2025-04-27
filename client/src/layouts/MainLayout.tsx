import { useState } from "react";
import { Link } from "wouter";
import MobileNav from "./MobileNav";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-white/90">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <a className="gradient-text font-bold text-2xl">NiveshPath</a>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link href="/">
              <a className="text-gray-700 hover:gradient-text font-medium">Home</a>
            </Link>
            <Link href="/about">
              <a className="text-gray-700 hover:gradient-text font-medium">About</a>
            </Link>
            <Link href="/learn">
              <a className="text-gray-700 hover:gradient-text font-medium">Learn</a>
            </Link>
            <Link href="/features">
              <a className="text-gray-700 hover:gradient-text font-medium">Features</a>
            </Link>
            <Link href="/ai">
              <a className="text-gray-700 hover:gradient-text font-medium">AI Analysis</a>
            </Link>
          </nav>

          <div className="flex items-center space-x-5">
            <Link href="/login">
              <a className="text-gray-700 hover:gradient-text font-medium">Login</a>
            </Link>
            <Link href="/signup">
              <a className="gradient-primary px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center font-medium">
                <i className="fas fa-user-plus mr-2"></i> Sign Up
              </a>
            </Link>
          </div>

          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <MobileNav isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="gradient-dark py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">NiveshPath</h3>
              <p className="text-gray-300">Your trusted financial planning partner.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/">
                    <a className="text-gray-300 hover:text-white transition">Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a className="text-gray-300 hover:text-white transition">About</a>
                  </Link>
                </li>
                <li>
                  <Link href="/learn">
                    <a className="text-gray-300 hover:text-white transition">Learn</a>
                  </Link>
                </li>
                <li>
                  <Link href="/features">
                    <a className="text-gray-300 hover:text-white transition">Features</a>
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Contact</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <i className="fas fa-envelope mr-2"></i>
                  support@niveshpath.com
                </li>
                <li className="flex items-center">
                  <i className="fas fa-phone mr-2"></i>
                  +91 1234567890
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                  <i className="fab fa-twitter text-gray-300"></i>
                </a>
                <a href="#" className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                  <i className="fab fa-facebook-f text-gray-300"></i>
                </a>
                <a href="#" className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                  <i className="fab fa-linkedin-in text-gray-300"></i>
                </a>
                <a href="#" className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                  <i className="fab fa-instagram text-gray-300"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-10 mt-10 border-t border-gray-800 text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} NiveshPath. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
