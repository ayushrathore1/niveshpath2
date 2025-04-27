import { useState } from "react";
import { Link, useLocation } from "wouter";
import MobileNav from "./MobileNav";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const { t } = useLanguage();
  const [, setLocation] = useLocation();

  const handleLogout = async () => {
    try {
      await logout();
      setLocation("/");
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-white/90">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <span className="gradient-text font-bold text-2xl cursor-pointer">NiveshPath</span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link href="/">
              <span className="text-gray-700 hover:gradient-text font-medium cursor-pointer">
                {t("Home", "होम")}
              </span>
            </Link>
            <Link href="/about">
              <span className="text-gray-700 hover:gradient-text font-medium cursor-pointer">
                {t("About", "हमारे बारे में")}
              </span>
            </Link>
            <Link href="/learn">
              <span className="text-gray-700 hover:gradient-text font-medium cursor-pointer">
                {t("Learn", "सीखें")}
              </span>
            </Link>
            <Link href="/features">
              <span className="text-gray-700 hover:gradient-text font-medium cursor-pointer">
                {t("Features", "सुविधाएं")}
              </span>
            </Link>
            <Link href="/ai">
              <span className="text-gray-700 hover:gradient-text font-medium cursor-pointer">
                {t("AI Analysis", "AI विश्लेषण")}
              </span>
            </Link>
          </nav>

          <div className="flex items-center space-x-5">
            <LanguageToggle />
            
            {currentUser ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700 font-medium">
                  {t("Hi", "नमस्ते")}, {currentUser.email?.split('@')[0]}
                </span>
                <button 
                  onClick={handleLogout}
                  className="text-gray-700 hover:gradient-text font-medium cursor-pointer"
                >
                  {t("Logout", "लॉगआउट")}
                </button>
              </div>
            ) : (
              <>
                <Link href="/login">
                  <span className="text-gray-700 hover:gradient-text font-medium cursor-pointer">
                    {t("Login", "लॉगिन")}
                  </span>
                </Link>
                <Link href="/signup">
                  <div className="gradient-primary px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center font-medium cursor-pointer">
                    <i className="fas fa-user-plus mr-2"></i> {t("Sign Up", "साइन अप")}
                  </div>
                </Link>
              </>
            )}
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
              <h4 className="font-semibold mb-4 text-white">{t("Quick Links", "त्वरित लिंक")}</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/">
                    <span className="text-gray-300 hover:text-white transition cursor-pointer">
                      {t("Home", "होम")}
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <span className="text-gray-300 hover:text-white transition cursor-pointer">
                      {t("About", "हमारे बारे में")}
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/learn">
                    <span className="text-gray-300 hover:text-white transition cursor-pointer">
                      {t("Learn", "सीखें")}
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/features">
                    <span className="text-gray-300 hover:text-white transition cursor-pointer">
                      {t("Features", "सुविधाएं")}
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">{t("Contact", "संपर्क")}</h4>
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
              <h4 className="font-semibold mb-4 text-white">{t("Follow Us", "हमें फॉलो करें")}</h4>
              <div className="flex space-x-4">
                <div className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                  <i className="fab fa-twitter text-gray-300"></i>
                </div>
                <div className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                  <i className="fab fa-facebook-f text-gray-300"></i>
                </div>
                <div className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                  <i className="fab fa-linkedin-in text-gray-300"></i>
                </div>
                <div className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                  <i className="fab fa-instagram text-gray-300"></i>
                </div>
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
