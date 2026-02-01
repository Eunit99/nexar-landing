import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./atoms/Button";

const navLinks = [
  { name: "Products", href: "/products", hasDropdown: true },
  { name: "Affiliate Products", href: "/affiliate", hasDropdown: true },
  { name: "About Us", href: "/about" },
  { name: "Blogs", href: "/blogs" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white sticky top-0 z-50 border-b border-[#F2F4F7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-14 py-4 lg:py-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo-black.svg"
              alt="Nexar Logo"
              className="h-7 lg:h-8"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <div key={link.name} className="flex items-center gap-2 cursor-pointer group">
                <Link
                  to={link.href}
                  className="text-[#000000] font-tt-norms font-medium text-[16px] group-hover:text-nexar-purple transition-colors"
                >
                  {link.name}
                </Link>
                {link.hasDropdown && (
                  <ChevronDown className="w-4 h-4 text-[#000000] group-hover:text-nexar-purple transition-colors" />
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-8">
            <Button variant="ghost" asChild>
              <Link to="/signin" className="font-tt-norms font-medium text-[16px]">
                Sign In
              </Link>
            </Button>
            <Button variant="primary" size="md" asChild>
              <Link to="/signup">
                Sign up
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col items-end gap-[6px] p-2"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-[2px] bg-[#101828]"></div>
            <div className="w-6 h-[2px] bg-[#101828]"></div>
            <div className="w-4 h-[2px] bg-[#101828]"></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-[60]"
            />

            {/* Drawer Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full bg-white z-[70] flex flex-col shadow-2xl"
            >
              {/* Mobile Header */}
              <div className="px-6 py-4 flex justify-between items-center border-b border-[#F2F4F7]">
                <Link to="/" onClick={() => setIsMenuOpen(false)}>
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/c79abcb168ec2d175962002c51138cd9dd9418f9?width=217"
                    alt="Nexar Logo"
                    className="h-7"
                  />
                </Link>
                <button onClick={() => setIsMenuOpen(false)} className="p-2 -mr-2">
                  <X className="w-6 h-6 text-[#101828]" />
                </button>
              </div>

              {/* Mobile Links */}
              <div className="flex flex-col px-6 py-8 overflow-y-auto">
                {navLinks.map((link) => (
                  <div key={link.name} className="py-5 border-b border-transparent">
                    <div className="flex justify-between items-center group cursor-pointer">
                      <Link
                        to={link.href}
                        className="text-[#101828] font-tt-norms font-medium text-[16px]"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                      {link.hasDropdown && (
                        <ChevronDown className="w-4 h-4 text-[#667085]" />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Actions */}
              <div className="mt-auto px-6 pb-10 pt-6 flex flex-col gap-6 items-center">
                <Button variant="ghost" asChild className="w-full">
                  <Link
                    to="/signin"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                </Button>
                <Button variant="primary" className="w-full" asChild>
                  <Link
                    to="/signup"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign up
                  </Link>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
