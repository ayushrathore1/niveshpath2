import { Link } from "wouter";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <div className="text-primary font-bold text-xl">NiveshPath</div>
        <button className="text-gray-800" onClick={onClose}>
          <i className="fas fa-times text-xl"></i>
        </button>
      </div>
      <nav className="p-4">
        <ul className="space-y-4">
          <li>
            <Link href="/">
              <a className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={onClose}>
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={onClose}>
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="/learn">
              <a className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={onClose}>
                Learn
              </a>
            </Link>
          </li>
          <li>
            <Link href="/features">
              <a className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={onClose}>
                Features
              </a>
            </Link>
          </li>
          <li>
            <Link href="/ai">
              <a className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={onClose}>
                AI
              </a>
            </Link>
          </li>
          <li className="border-t pt-4 mt-4">
            <Link href="/login">
              <a className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={onClose}>
                Login
              </a>
            </Link>
          </li>
          <li>
            <Link href="/signup">
              <a
                className="block py-2 px-4 bg-primary text-white rounded hover:bg-opacity-90 text-center"
                onClick={onClose}
              >
                Sign Up
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
