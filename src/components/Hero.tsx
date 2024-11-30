import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 animate-fade-up">
      <h1 className="text-5xl md:text-7xl font-bold mb-6">
        Create Your Perfect
        <span className="gradient-text block mt-2">AI Artist</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
        Generate custom AI personas and music using cutting-edge technology. Transform your creative vision into reality.
      </p>
      <Button 
        className="bg-dreamaker-purple hover:bg-dreamaker-purple-light text-white px-8 py-6 text-lg rounded-full transition-all"
        onClick={() => window.location.href = "/signup"}
      >
        Start Creating Now
      </Button>
    </div>
  );
};