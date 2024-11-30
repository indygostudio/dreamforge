import { Facebook, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-dreamaker-bg text-gray-400 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Home Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Home</h3>
            <ul className="space-y-2">
              <li><Link to="/">Browse</Link></li>
              <li><Link to="/features">Features</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>

          {/* Dreamaker Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Dreamaker</h3>
            <ul className="space-y-2">
              <li><Link to="/artists">Artists</Link></li>
              <li><Link to="/record-label">Record Label</Link></li>
              <li><Link to="/new-release">New Release</Link></li>
              <li><Link to="/popular">Popular</Link></li>
            </ul>
          </div>

          {/* Personas Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Personas</h3>
            <ul className="space-y-2">
              <li><Link to="/generate-look">Generate Look</Link></li>
              <li><Link to="/generate-lyrics">Generate Lyrics</Link></li>
              <li><Link to="/generate-voice-model">Generate Voice Model</Link></li>
              <li><Link to="/generate-music">Generate Music</Link></li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Subscription Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Subscription</h3>
            <ul className="space-y-2">
              <li><Link to="/plans">Plans</Link></li>
              <li><Link to="/features">Features</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-8">
          <p className="text-sm">©2023 DREAMAKER, All Rights Reserved</p>
          
          <div className="flex items-center space-x-8 mt-4 md:mt-0">
            <div className="flex items-center space-x-4">
              <Link to="https://facebook.com" className="hover:text-white">
                <Facebook size={20} />
              </Link>
              <Link to="https://twitter.com" className="hover:text-white">
                <Twitter size={20} />
              </Link>
              <Link to="https://linkedin.com" className="hover:text-white">
                <Linkedin size={20} />
              </Link>
            </div>
            
            <div className="flex items-center space-x-4 text-sm">
              <Link to="/terms" className="hover:text-white">Terms of Use</Link>
              <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
              <Link to="/cookies" className="hover:text-white">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};