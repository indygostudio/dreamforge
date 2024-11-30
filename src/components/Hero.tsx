import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-end text-center px-4 animate-fade-up relative">
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
      
      <div className="relative z-10 mb-20">
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