import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 animate-fade-up relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dreamaker-bg z-0" />
      
      <div className="relative z-10">
        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          DREAMAKER
          <span className="gradient-text block mt-2">AI</span>
        </h1>
        
        <div className="max-w-4xl mx-auto mb-8">
          <h2 className="text-2xl md:text-3xl mb-4">AI RECORD LABEL</h2>
          <p className="text-lg md:text-xl text-gray-300">
            Create your own AI Artists with custom personas and generate unique music using cutting-edge AI technology.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto mb-12">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-square bg-dreamaker-gray rounded-lg overflow-hidden hover:scale-105 transition-transform">
              <img 
                src={`/lovable-uploads/artist-${i}.jpg`} 
                alt={`AI Artist ${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <Button 
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-full transition-all"
          onClick={() => window.location.href = "/signup"}
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
};