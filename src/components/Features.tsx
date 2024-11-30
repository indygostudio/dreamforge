export const Features = () => {
  return (
    <div className="py-20 bg-dreamaker-bg">
      <div className="container mx-auto px-4">
        <section className="mb-20">
          <div className="aspect-video relative rounded-xl overflow-hidden mb-12">
            <img 
              src="/lovable-uploads/1451d802-c09e-495f-92a8-6c73d6338a8f.png" 
              alt="Persona Creation Interface"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-dreamaker-gray rounded-lg p-4 hover:scale-105 transition-transform">
                <img 
                  src={`/lovable-uploads/persona-${i}.jpg`}
                  alt={`Persona Example ${i}`}
                  className="w-full aspect-square object-cover rounded-lg mb-4"
                />
                <div className="text-sm opacity-75">
                  <div>Genre • Style • Mood</div>
                  <div>Voice Type • Age</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-bold mb-8">AI Record Label and Marketplace</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="bg-dreamaker-gray rounded-lg p-4 hover:scale-105 transition-transform">
                <img 
                  src={`/lovable-uploads/artist-${i}.jpg`}
                  alt={`Marketplace Artist ${i}`}
                  className="w-full aspect-square object-cover rounded-lg mb-4"
                />
                <div className="text-sm opacity-75">
                  <div className="font-bold">Artist Name</div>
                  <div>Genre • Style</div>
                  <button className="mt-2 px-4 py-1 bg-dreamaker-purple rounded-full text-xs">
                    Generate
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};