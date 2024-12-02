import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PersonaImage } from "@/utils/personaImage.tsx";
import { useNavigate } from "react-router-dom";
import { PERSONAS } from "@/constants/personas";

export const Features = () => {
  const navigate = useNavigate();

  return (
    <div className="py-20 bg-dreamaker-bg">
      <div className="container mx-auto px-4">
        <div className="space-y-20">
          {/* AI Artist Personas */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">AI Artist Personas</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Choose from our diverse collection of AI-powered virtual artists, each with their unique style and voice characteristics.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <Card 
                  key={i} 
                  className="bg-dreamaker-gray border-none overflow-hidden hover:scale-105 transition-transform duration-300 flex flex-col cursor-pointer"
                  onClick={() => navigate(`/artist/${i}`)}
                >
                  <div className="relative">
                    <PersonaImage
                      name={PERSONAS[i as keyof typeof PERSONAS].imageName}
                      alt={`Persona Example ${i}`}
                      className="w-full aspect-[3/4] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dreamaker-gray via-dreamaker-gray/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-4 -mt-2 relative z-10 flex flex-col flex-grow">
                    <div>
                      <h3 className="font-semibold text-lg gradient-text">
                        {PERSONAS[i as keyof typeof PERSONAS].imageName.split('-').map(word => 
                          word.charAt(0).toUpperCase() + word.slice(1)
                        ).join(' ')}
                      </h3>
                      <div className="text-sm text-gray-400 space-y-1 mt-2">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-dreamaker-purple" />
                          {PERSONAS[i as keyof typeof PERSONAS].style}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-dreamaker-purple-light" />
                          {PERSONAS[i as keyof typeof PERSONAS].voice}
                        </div>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full mt-auto border-dreamaker-purple text-dreamaker-purple hover:bg-dreamaker-purple hover:text-white transition-colors duration-300"
                    >
                      Select Style
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* AI Record Label Section */}
          <section className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-3 gradient-text">AI Record Label</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Launch your music career with our AI-powered record label. Get professional production, marketing, and distribution.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-dreamaker-gray border-none overflow-hidden">
                <div className="relative h-48">
                  <img
                    src="/lovable-uploads/1451d802-c09e-495f-92a8-6c73d6338a8f.png"
                    alt="Music Production"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dreamaker-gray to-transparent" />
                </div>
                <div className="p-6 relative">
                  <h3 className="text-xl font-bold mb-4">Music Production</h3>
                  <p className="text-gray-400">Professional AI-powered music production and mixing</p>
                  <Button className="mt-4 bg-dreamaker-purple hover:bg-dreamaker-purple-light">
                    Start Creating
                  </Button>
                </div>
              </Card>

              <Card className="bg-dreamaker-gray border-none overflow-hidden">
                <div className="relative h-48">
                  <img
                    src="/lovable-uploads/a0632996-7538-41a3-9f83-80c4f27be398.png"
                    alt="Marketing"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dreamaker-gray to-transparent" />
                </div>
                <div className="p-6 relative">
                  <h3 className="text-xl font-bold mb-4">Marketing</h3>
                  <p className="text-gray-400">AI-driven marketing strategies and promotion</p>
                  <Button className="mt-4 bg-dreamaker-purple hover:bg-dreamaker-purple-light">
                    Promote Music
                  </Button>
                </div>
              </Card>

              <Card className="bg-dreamaker-gray border-none overflow-hidden">
                <div className="relative h-48">
                  <img
                    src="/lovable-uploads/e6070cd9-7a10-4470-b557-b1eba61123e7.png"
                    alt="Distribution"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dreamaker-gray to-transparent" />
                </div>
                <div className="p-6 relative">
                  <h3 className="text-xl font-bold mb-4">Distribution</h3>
                  <p className="text-gray-400">Global music distribution to all major platforms</p>
                  <Button className="mt-4 bg-dreamaker-purple hover:bg-dreamaker-purple-light">
                    Distribute Now
                  </Button>
                </div>
              </Card>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-3 gradient-text">Frequently Asked Questions</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Find answers to common questions about our AI music platform
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  question: "How does AI music generation work?",
                  answer: "Our AI analyzes millions of songs to understand patterns and create unique compositions tailored to your style."
                },
                {
                  question: "Can I customize my virtual artist?",
                  answer: "Yes, you can fully customize your virtual artist's appearance, voice, style, and personality."
                },
                {
                  question: "What about copyright and ownership?",
                  answer: "You retain 100% ownership of all music created through our platform."
                },
                {
                  question: "How is the music distributed?",
                  answer: "We distribute your music to all major streaming platforms including Spotify, Apple Music, and more."
                }
              ].map((faq, index) => (
                <Card key={index} className="bg-dreamaker-gray border-none p-6">
                  <h3 className="text-xl font-bold mb-4">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section>
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-3 gradient-text">Pricing Plans</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Choose the perfect plan for your music creation journey
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-dreamaker-gray border-none overflow-hidden flex flex-col">
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-4">Basic</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">$9</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <ul className="space-y-4 mb-6 text-gray-400">
                    <li>✓ 10 AI-generated songs</li>
                    <li>✓ Basic mixing</li>
                    <li>✓ Standard support</li>
                  </ul>
                </div>
                <div className="p-6 pt-0">
                  <Button className="w-full bg-dreamaker-purple hover:bg-dreamaker-purple-light">
                    Get Started
                  </Button>
                </div>
              </Card>

              <Card className="bg-dreamaker-gray border-none overflow-hidden relative flex flex-col">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-dreamaker-purple text-white px-4 py-1 rounded-b-lg">
                  Popular
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-4">Pro</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">$29</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <ul className="space-y-4 mb-6 text-gray-400">
                    <li>✓ Unlimited AI songs</li>
                    <li>✓ Professional mixing</li>
                    <li>✓ Priority support</li>
                    <li>✓ Custom artist styles</li>
                  </ul>
                </div>
                <div className="p-6 pt-0">
                  <Button className="w-full bg-dreamaker-purple hover:bg-dreamaker-purple-light">
                    Get Started
                  </Button>
                </div>
              </Card>

              <Card className="bg-dreamaker-gray border-none overflow-hidden flex flex-col">
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-4">Enterprise</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">$99</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <ul className="space-y-4 mb-6 text-gray-400">
                    <li>✓ Everything in Pro</li>
                    <li>✓ White-label rights</li>
                    <li>✓ API access</li>
                    <li>✓ Dedicated support</li>
                  </ul>
                </div>
                <div className="p-6 pt-0">
                  <Button className="w-full bg-dreamaker-purple hover:bg-dreamaker-purple-light">
                    Get Started
                  </Button>
                </div>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};