import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-end text-center px-2 sm:px-4 animate-fade-up relative">
      {/* Hero background image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/DREAMAKER IMAGE.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dreamaker-bg z-0" />
      
      {/* Main content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto mb-4">
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed px-3 sm:px-4 max-w-[90%] mx-auto">
          Unleash your creativity and bring your musical visions to life with our cutting-edge AI-powered platform. 
          Easily build unique virtual artist personas, complete with custom voice clones, stunning visuals, and original music - all without needing a band or recording studio. 
          Our intuitive tools empower you to craft captivating personas that can perform, record, and even tour the digital world.
        </p>
        <Button 
          className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full transition-all mb-8"
          onClick={() => navigate('/subscribe')}
        >
          Subscribe
        </Button>
      </div>
    </div>
  );
};