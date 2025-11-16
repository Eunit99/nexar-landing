import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Youtube, Send, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-nexar-purple pt-16 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
          <div className="flex flex-col gap-6">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/c382b3387cc33935c6fd97269f2e600372caa045?width=300" 
              alt="Nexar Logo" 
              className="h-10 w-auto"
            />
            <p className="font-poppins text-base text-gray-200 leading-[30px]">
              At Nexar, we are dedicated to providing cutting-edge digital solutions that empower individuals and businesses.
            </p>
            <div className="flex items-center gap-4">
              <SocialIcon icon={<Instagram className="w-5 h-5" />} />
              <SocialIcon icon={<Twitter className="w-5 h-5" />} />
              <SocialIcon icon={<Facebook className="w-5 h-5" />} />
              <SocialIcon icon={<Youtube className="w-5 h-5" />} />
              <SocialIcon icon={<Send className="w-5 h-5" />} />
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="font-poppins text-xl font-semibold text-white">Quick Links</h3>
            <nav className="flex flex-col gap-5">
              <Link to="/" className="font-poppins text-base text-gray-200 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/login" className="font-poppins text-base text-gray-200 hover:text-white transition-colors">
                Login
              </Link>
              <Link to="/register" className="font-poppins text-base text-gray-200 hover:text-white transition-colors">
                Create Account
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="font-poppins text-xl font-semibold text-white">Quick Links</h3>
            <nav className="flex flex-col gap-5">
              <Link to="/" className="font-poppins text-base text-gray-200 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/login" className="font-poppins text-base text-gray-200 hover:text-white transition-colors">
                Login
              </Link>
              <Link to="/register" className="font-poppins text-base text-gray-200 hover:text-white transition-colors">
                Create Account
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="font-poppins text-xl font-semibold text-white">Contact Us</h3>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <Mail className="w-6 h-6 text-gray-200" />
                <a href="mailto:support@nexar.com" className="font-poppins text-base text-gray-200 hover:text-white transition-colors">
                  support@nexar.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-6 h-6 text-gray-200" />
                <span className="font-poppins text-base text-gray-200">
                  Whatsapp live chat
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-6 h-6 text-gray-200" />
                <span className="font-poppins text-base text-gray-200">
                  Email Support
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-nexar-darkPurple py-6">
          <div className="bg-[#242424] -mx-4 sm:-mx-6 lg:-mx-16 px-4 sm:px-6 lg:px-16 py-6">
            <p className="text-center font-poppins text-sm text-gray-400">
              © 2024 Nexar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
      {icon}
    </button>
  );
}
