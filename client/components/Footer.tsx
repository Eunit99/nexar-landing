import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Youtube, Send, Mail, MessageSquare, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-nexar-purple text-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-14 py-16 lg:py-24">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="font-poppins text-xl font-bold">Quick Links</h3>
            <div className="flex flex-col gap-4">
              <Link to="/" className="font-tt-norms text-[16px] text-white/90 hover:text-white transition-colors">Home</Link>
              <Link to="/signin" className="font-tt-norms text-[16px] text-white/90 hover:text-white transition-colors">Login</Link>
              <Link to="/signup" className="font-tt-norms text-[16px] text-white/90 hover:text-white transition-colors">Create Account</Link>
            </div>
          </div>

          {/* Product Links */}
          <div className="flex flex-col gap-6">
            <h3 className="font-poppins text-xl font-bold">Product Links</h3>
            <div className="flex flex-col gap-4">
              <Link to="/virtual-numbers" className="font-tt-norms text-[16px] text-white/90 hover:text-white transition-colors">Virtual Numbers</Link>
              <Link to="/giftcards" className="font-tt-norms text-[16px] text-white/90 hover:text-white transition-colors">Gifcards</Link>
              <Link to="/esim" className="font-tt-norms text-[16px] text-white/90 hover:text-white transition-colors">ESim</Link>
              <Link to="/social-media" className="font-tt-norms text-[16px] text-white/90 hover:text-white transition-colors">Buy & Boost Social Media</Link>
              <Link to="/pay-bills" className="font-tt-norms text-[16px] text-white/90 hover:text-white transition-colors">Pay Bills</Link>
            </div>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col gap-6">
            <h3 className="font-poppins text-xl font-bold">Contact Us</h3>
            <div className="flex flex-col gap-6">
              <a href="mailto:support@shawnsms.com" className="flex items-center gap-3 font-tt-norms text-[16px] text-white/90 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
                <span>support@shawnsms.com</span>
              </a>
              <a href="#" className="flex items-center gap-3 font-tt-norms text-[16px] text-white/90 hover:text-white transition-colors">
                <MessageSquare className="w-6 h-6 rotate-[270deg]" />
                <span>Whatsapp live chat</span>
              </a>
              <a href="#" className="flex items-center gap-3 font-tt-norms text-[16px] text-white/90 hover:text-white transition-colors">
                <Send className="w-6 h-6" />
                <span>Email Support</span>
              </a>
            </div>
          </div>

          {/* Brand & Socials Section (On desktop this moves, on mobile it's at the bottom) */}
          <div className="flex flex-col gap-8 lg:order-first">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img
                src="/logo.svg"
                alt="Nexar Logo"
                className="h-10 brightness-0 invert"
              />
            </div>

            <p className="font-tt-norms text-[16px] text-white/90 leading-[160%] lg:max-w-xs">
              At Nexar, we are dedicated to providing cutting-edge digital solutions that empower individuals and businesses.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <SocialIcon icon={<Instagram className="w-5 h-5" />} />
              <SocialIcon icon={<Twitter className="w-5 h-5 fill-white" />} />
              <SocialIcon icon={<Facebook className="w-5 h-5 fill-white" />} />
              <SocialIcon icon={<Youtube className="w-5 h-5 fill-white" />} />
              <SocialIcon icon={<Send className="w-5 h-5 fill-white" />} />
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Dark Bottom Bar */}
      <div className="w-full bg-[#000000] h-20" />
    </footer>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
      {icon}
    </div>
  );
}
