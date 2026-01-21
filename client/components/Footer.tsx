import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-nexar-purple pt-[527px] relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-64">
          {/* Brand Section */}
          <div className="flex flex-col gap-6 max-w-sm">
            <div className="flex flex-col gap-4">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/05aee446ad17f7d9224643ffa802af6c20ebd1b8?width=300"
                alt="Nexar Logo"
                className="w-[150px] h-auto"
              />
              <p className="text-[#EEEEF0] font-poppins text-base leading-[30px]">
                At Nexar, we are dedicated to providing cutting-edge digital solutions that empower individuals and businesses.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <SocialIcon icon="instagram" />
              <SocialIcon icon="twitter" />
              <SocialIcon icon="facebook" />
              <SocialIcon icon="youtube" />
              <SocialIcon icon="telegram" />
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-col sm:flex-row gap-12 lg:gap-24">
            {/* Quick Links 1 */}
            <div className="flex flex-col gap-5">
              <h3 className="text-white font-poppins text-xl font-semibold leading-6">
                Quick Links
              </h3>
              <Link to="/" className="text-[#EEEEF0] font-poppins text-base leading-6 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/login" className="text-[#EEEEF0] font-poppins text-base leading-6 hover:text-white transition-colors">
                Login
              </Link>
              <Link to="/signup" className="text-[#EEEEF0] font-poppins text-base leading-6 hover:text-white transition-colors">
                Create Account
              </Link>
            </div>

            {/* Quick Links 2 */}
            <div className="flex flex-col gap-5">
              <h3 className="text-white font-poppins text-xl font-semibold leading-6">
                Quick Links
              </h3>
              <Link to="/" className="text-[#EEEEF0] font-poppins text-base leading-6 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/login" className="text-[#EEEEF0] font-poppins text-base leading-6 hover:text-white transition-colors">
                Login
              </Link>
              <Link to="/signup" className="text-[#EEEEF0] font-poppins text-base leading-6 hover:text-white transition-colors">
                Create Account
              </Link>
            </div>

            {/* Contact Us */}
            <div className="flex flex-col gap-5">
              <h3 className="text-white font-poppins text-xl font-semibold leading-6">
                Contact Us
              </h3>
              <div className="flex items-center gap-2">
                <EmailIcon />
                <span className="text-[#EEEEF0] font-poppins text-base leading-6">
                  support@shawnsms.com
                </span>
              </div>
              <div className="flex items-center gap-2">
                <WhatsappIcon />
                <span className="text-[#EEEEF0] font-poppins text-base leading-6">
                  Whatsapp live chat
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon />
                <span className="text-[#EEEEF0] font-poppins text-base leading-6">
                  Email Support
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[30px] mb-96">
          <svg viewBox="0 0 1274 0" fill="none" className="w-full">
            <path d="M0 0H1274" stroke="#533FC8" strokeWidth="30" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-[#242424]"></div>
    </footer>
  );
}

function SocialIcon({ icon }: { icon: string }) {
  return (
    <div className="w-8 h-8 rounded-full bg-white/12 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
      <div className="w-5 h-5">
        {/* Icon placeholder - in production, use actual icons */}
        <div className="w-full h-full bg-white/80 rounded-sm"></div>
      </div>
    </div>
  );
}

function EmailIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M18 6H6C4.89543 6 4 6.89543 4 8V16C4 17.1046 4.89543 18 6 18H18C19.1046 18 20 17.1046 20 16V8C20 6.89543 19.1046 6 18 6Z" stroke="#EEEEF0" strokeWidth="1.4"/>
      <path d="M4 9L11.106 12.553C11.3836 12.6917 11.6897 12.7639 12 12.7639C12.3103 12.7639 12.6164 12.6917 12.894 12.553L20 9" stroke="#EEEEF0" strokeWidth="1.4"/>
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M19.0508 4.91005C18.1338 3.98416 17.0418 3.25002 15.8383 2.75042C14.6348 2.25081 13.3439 1.99574 12.0408 2.00005C6.58078 2.00005 2.13078 6.45005 2.13078 11.9101C2.13078 13.6601 2.59078 15.3601 3.45078 16.8601L2.05078 22.0001L7.30078 20.6201C8.75078 21.4101 10.3808 21.8301 12.0408 21.8301C17.5008 21.8301 21.9508 17.3801 21.9508 11.9201C21.9508 9.27005 20.9208 6.78005 19.0508 4.91005Z" fill="#EEEEF0"/>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M9 9L13.5 12L18 9M3 13.5H5M1 10.5H5" stroke="#EEEEF0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 7.5V7C5 6.46957 5.21071 5.96086 5.58579 5.58579C5.96086 5.21071 6.46957 5 7 5H20C20.5304 5 21.0391 5.21071 21.4142 5.58579C21.7893 5.96086 22 6.46957 22 7V17C22 17.5304 21.7893 18.0391 21.4142 18.4142C21.0391 18.7893 20.5304 19 20 19H7C6.46957 19 5.96086 18.7893 5.58579 18.4142C5.21071 18.0391 5 17.5304 5 17V16.5" stroke="#EEEEF0" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
