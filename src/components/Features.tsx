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
          <div className="aspect-video relative rounded-xl overflow-hidden">
            <img 
              src="/lovable-uploads/e6070cd9-7a10-4470-b557-b1eba61123e7.png" 
              alt="AI Record Label and Marketplace"
              className="w-full h-full object-cover"
            />
          </div>
        </section>
      </div>
    </div>
  );
};