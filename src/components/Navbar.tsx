import { Button } from "@/components/ui/button";
import { Search, Bell } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 bg-dreamaker-bg/80 backdrop-blur-md z-50 animate-fade-in border-b border-dreamaker-gray">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white">DR3AMAK3R</Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-white hover:text-dreamaker-purple transition-colors">
            Home
          </Link>
          <Link to="/browse" className="text-white hover:text-dreamaker-purple transition-colors">
            Browse
          </Link>
          <Link to="/updates" className="text-white hover:text-dreamaker-purple transition-colors">
            Updates
          </Link>
          <Link to="/pricing" className="text-white hover:text-dreamaker-purple transition-colors">
            Pricing
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-white hover:text-dreamaker-purple">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:text-dreamaker-purple">
            <Bell className="h-5 w-5" />
          </Button>
          <Button 
            className="bg-dreamaker-purple hover:bg-dreamaker-purple-light text-white rounded-full px-6"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};