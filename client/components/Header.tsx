import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-white sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/c79abcb168ec2d175962002c51138cd9dd9418f9?width=217" 
              alt="Nexar Logo" 
              className="h-7"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-11">
            <button className="flex items-center gap-2 text-black font-tt-norms font-medium text-base hover:text-nexar-purple transition-colors">
              Products
              <ChevronDown className="w-6 h-6" />
            </button>
            <Link to="/about" className="text-black font-tt-norms font-medium text-base hover:text-nexar-purple transition-colors">
              About Us
            </Link>
            <Link to="/blogs" className="text-black font-tt-norms font-medium text-base hover:text-nexar-purple transition-colors">
              Blogs
            </Link>
            <Link to="/faqs" className="text-black font-tt-norms font-medium text-base hover:text-nexar-purple transition-colors">
              FAQs
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link to="/signin" className="text-black font-tt-norms font-medium text-base hover:text-nexar-purple transition-colors">
              Sign In
            </Link>
            <Link 
              to="/signup" 
              className="px-7 py-1.5 bg-nexar-purple text-white font-tt-norms font-medium text-base rounded-full hover:bg-nexar-darkPurple transition-colors"
            >
              Sign up
            </Link>
          </div>

          <button className="lg:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
