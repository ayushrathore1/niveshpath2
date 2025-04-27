import { Link, useLocation } from "wouter";
import { useAuth } from "@/contexts/AuthContext";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const { currentUser, logout } = useAuth();
  const [, setLocation] = useLocation();

  const handleLogout = async () => {
    try {
      await logout();
      onClose();
      setLocation("/");
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <div className="gradient-text font-bold text-xl">NiveshPath</div>
        <button className="text-gray-800" onClick={onClose}>
          <i className="fas fa-times text-xl"></i>
        </button>
      </div>
      <nav className="p-4">
        <ul className="space-y-4">
          <li>
            <Link href="/">
              <div className="block py-2 px-4 hover:bg-gray-100 rounded cursor-pointer" onClick={onClose}>
                Home
              </div>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <div className="block py-2 px-4 hover:bg-gray-100 rounded cursor-pointer" onClick={onClose}>
                About
              </div>
            </Link>
          </li>
          <li>
            <Link href="/learn">
              <div className="block py-2 px-4 hover:bg-gray-100 rounded cursor-pointer" onClick={onClose}>
                Learn
              </div>
            </Link>
          </li>
          <li>
            <Link href="/features">
              <div className="block py-2 px-4 hover:bg-gray-100 rounded cursor-pointer" onClick={onClose}>
                Features
              </div>
            </Link>
          </li>
          <li>
            <Link href="/ai">
              <div className="block py-2 px-4 hover:bg-gray-100 rounded cursor-pointer" onClick={onClose}>
                AI Analysis
              </div>
            </Link>
          </li>
          
          <li className="border-t pt-4 mt-4">
            {currentUser ? (
              <>
                <div className="py-2 px-4 text-gray-600 font-medium">
                  Hi, {currentUser.email?.split('@')[0]}
                </div>
                <div 
                  className="block py-2 px-4 hover:bg-gray-100 rounded cursor-pointer text-gray-700 font-medium"
                  onClick={handleLogout}
                >
                  Logout
                </div>
              </>
            ) : (
              <Link href="/login">
                <div className="block py-2 px-4 hover:bg-gray-100 rounded cursor-pointer" onClick={onClose}>
                  Login
                </div>
              </Link>
            )}
          </li>
          
          {!currentUser && (
            <li>
              <Link href="/signup">
                <div
                  className="block py-3 px-4 gradient-primary text-white rounded shadow-md hover:shadow-lg text-center cursor-pointer mt-2"
                  onClick={onClose}
                >
                  Sign Up
                </div>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;