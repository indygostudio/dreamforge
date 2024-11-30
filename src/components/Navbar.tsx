import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 bg-dreamaker-bg/80 backdrop-blur-md z-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold gradient-text">Dreamaker AI</div>
        <div className="flex gap-4">
          <Button variant="ghost" className="text-white hover:text-dreamaker-purple">
            Features
          </Button>
          <Button variant="ghost" className="text-white hover:text-dreamaker-purple">
            Pricing
          </Button>
          <Button className="bg-dreamaker-purple hover:bg-dreamaker-purple-light text-white rounded-full">
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};