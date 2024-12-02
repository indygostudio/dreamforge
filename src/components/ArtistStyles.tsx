import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PersonaImage } from "@/utils/personaImage.tsx";

interface Persona {
  imageName: string;
  style: string;
  voice: string;
}

const PERSONAS: Record<number, Persona> = {
  1: {
    imageName: "ember-knight",
    style: "Pop • Modern • Energetic",
    voice: "Female Voice • 24 years"
  },
  2: {
    imageName: "jaxon-stone",
    style: "Rock • Alternative • Intense",
    voice: "Male Voice • 28 years"
  },
  3: {
    imageName: "luna-sol",
    style: "Electronic • Ambient • Dreamy",
    voice: "Female Voice • 22 years"
  },
  4: {
    imageName: "raven-white",
    style: "R&B • Soul • Smooth",
    voice: "Male Voice • 26 years"
  }
};

export const ArtistStyles = () => {
  return (
    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 mb-32">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 gradient-text">Choose Your Artist Style</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Select from our curated collection of AI-powered artist personas
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i} className="bg-dreamaker-gray/80 backdrop-blur-sm border-none overflow-hidden hover:scale-105 transition-transform duration-300">
            <div className="relative">
              <PersonaImage
                name={PERSONAS[i as keyof typeof PERSONAS].imageName}
                alt={`Artist Style ${i}`}
                className="w-full aspect-[3/4] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dreamaker-gray via-dreamaker-gray/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-4 -mt-2 relative z-10">
              <div className="space-y-2">
                <h3 className="font-semibold text-lg gradient-text">
                  {PERSONAS[i as keyof typeof PERSONAS].imageName.split('-').map(word => 
                    word.charAt(0).toUpperCase() + word.slice(1)
                  ).join(' ')}
                </h3>
                <div className="text-sm text-gray-300 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-dreamaker-purple" />
                    {PERSONAS[i as keyof typeof PERSONAS].style}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-dreamaker-purple-light" />
                    {PERSONAS[i as keyof typeof PERSONAS].voice}
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full mt-4 border-dreamaker-purple text-dreamaker-purple hover:bg-dreamaker-purple hover:text-white transition-colors duration-300"
                >
                  Select Style
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
