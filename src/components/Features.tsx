import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const Features = () => {
  return (
    <div className="py-20 bg-dreamaker-bg">
      <div className="container mx-auto px-4">
        {/* Persona Creation Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Create Your Dream Artist</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Design and customize your virtual artist with our advanced AI tools. Choose their style, voice, and personality.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="bg-dreamaker-gray border-none hover:scale-105 transition-transform">
                <div className="p-4">
                  <img 
                    src={`/lovable-uploads/persona-${i}.jpg`}
                    alt={`Persona Example ${i}`}
                    className="w-full aspect-square object-cover rounded-lg mb-4"
                  />
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">Artist Style {i}</h3>
                    <div className="text-sm text-gray-400">
                      <div>Pop • Modern • Energetic</div>
                      <div>Female Voice • 24 years</div>
                    </div>
                    <Button variant="outline" className="w-full mt-4 border-dreamaker-purple text-dreamaker-purple hover:bg-dreamaker-purple hover:text-white">
                      Select Style
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* AI Record Label Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text">AI Record Label</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Launch your music career with our AI-powered record label. Get professional production, marketing, and distribution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-dreamaker-gray border-none p-6">
              <h3 className="text-xl font-bold mb-4">Music Production</h3>
              <p className="text-gray-400">Professional AI-powered music production and mixing</p>
              <Button className="mt-4 bg-dreamaker-purple hover:bg-dreamaker-purple-light">
                Start Creating
              </Button>
            </Card>

            <Card className="bg-dreamaker-gray border-none p-6">
              <h3 className="text-xl font-bold mb-4">Marketing</h3>
              <p className="text-gray-400">AI-driven marketing strategies and promotion</p>
              <Button className="mt-4 bg-dreamaker-purple hover:bg-dreamaker-purple-light">
                Promote Music
              </Button>
            </Card>

            <Card className="bg-dreamaker-gray border-none p-6">
              <h3 className="text-xl font-bold mb-4">Distribution</h3>
              <p className="text-gray-400">Global music distribution to all major platforms</p>
              <Button className="mt-4 bg-dreamaker-purple hover:bg-dreamaker-purple-light">
                Distribute Now
              </Button>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Frequently Asked Questions</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Find answers to common questions about our AI music platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
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
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Choose Your Plan</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Select the perfect plan for your music creation journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                price: "$9.99",
                features: ["5 AI-generated songs/month", "Basic voice customization", "Standard distribution"]
              },
              {
                name: "Pro",
                price: "$24.99",
                features: ["Unlimited songs", "Advanced voice customization", "Priority distribution", "Marketing tools"]
              },
              {
                name: "Enterprise",
                price: "Custom",
                features: ["Custom AI model training", "Dedicated support", "Custom distribution deals", "Full marketing suite"]
              }
            ].map((plan, index) => (
              <Card key={index} className={`bg-dreamaker-gray border-none p-8 ${index === 1 ? 'border-2 border-dreamaker-purple' : ''}`}>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold mb-6 gradient-text">{plan.price}</div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="text-gray-400">• {feature}</li>
                  ))}
                </ul>
                <Button className={`w-full ${index === 1 ? 'bg-dreamaker-purple' : 'bg-dreamaker-gray border border-dreamaker-purple'} hover:bg-dreamaker-purple-light`}>
                  Get Started
                </Button>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};