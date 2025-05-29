
import { Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-brandmate-slate text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left - Copyright */}
          <div className="flex items-center gap-4">
            <div className="font-poppins font-bold text-xl">
              <span className="text-white">Brand</span>
              <span className="text-brandmate-gold">Mate</span>
            </div>
            <span className="font-inter text-sm text-gray-400">
              © 2025 BrandMate. All rights reserved.
            </span>
          </div>
          
          {/* Right - Links */}
          <div className="flex items-center gap-6">
            <a 
              href="#" 
              className="font-inter text-sm text-gray-400 hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="font-inter text-sm text-gray-400 hover:text-white transition-colors duration-300"
            >
              Contact
            </a>
            <div className="flex items-center gap-3">
              <a 
                href="https://twitter.com/brandmate_ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="mailto:hello@brandmate.ai"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300 text-sm"
              >
                ✉
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
