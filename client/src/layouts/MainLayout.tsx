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
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <a className="text-primary font-bold text-xl">NiveshPath</a>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-6">
            <Link href="/">
              <a className="text-gray-800 hover:text-primary">Home</a>
            </Link>
            <Link href="/about">
              <a className="text-gray-800 hover:text-primary">About</a>
            </Link>
            <Link href="/learn">
              <a className="text-gray-800 hover:text-primary">Learn</a>
            </Link>
            <Link href="/features">
              <a className="text-gray-800 hover:text-primary">Features</a>
            </Link>
            <Link href="/ai">
              <a className="text-gray-800 hover:text-primary">AI</a>
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="/login">
              <a className="text-gray-800 hover:text-primary">Login</a>
            </Link>
            <Link href="/signup">
              <a className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 transition flex items-center">
                <i className="fas fa-user-plus mr-1"></i> Sign Up
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
      <footer className="bg-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">NiveshPath</h3>
              <p className="text-gray-400">Your trusted financial planning partner.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/">
                    <a className="text-gray-400 hover:text-white transition">Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a className="text-gray-400 hover:text-white transition">About</a>
                  </Link>
                </li>
                <li>
                  <Link href="/learn">
                    <a className="text-gray-400 hover:text-white transition">Learn</a>
                  </Link>
                </li>
                <li>
                  <Link href="/features">
                    <a className="text-gray-400 hover:text-white transition">Features</a>
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
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
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <i className="fab fa-facebook text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 mt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} NiveshPath. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
