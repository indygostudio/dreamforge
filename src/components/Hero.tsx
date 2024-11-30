import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 animate-fade-up relative">
      {/* Hero background image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/6ceede82-7822-439b-89e9-302abd648d82.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dreamaker-bg z-0" />
      
      <div className="relative z-10">
        <div className="max-w-4xl mx-auto mb-8">
          <h2 className="text-2xl md:text-3xl mb-4">AI RECORD LABEL</h2>
          <p className="text-lg md:text-xl text-gray-300">
            Create your own Virtual Music Stars. Unleash your creativity and bring your musical visions to life with our cutting-edge AI-powered platform. Easily build unique virtual artist personas, complete with custom voice clones, stunning visuals, and original music - all without needing a band or recording studio.
          </p>
        </div>

        <Button 
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-full transition-all"
          onClick={() => window.location.href = "/signup"}
        >
          LISTEN NOW
        </Button>
      </div>
    </div>
  );
};