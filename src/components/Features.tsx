import { Music, Sparkles, Brain } from "lucide-react";

const features = [
  {
    icon: <Sparkles className="w-8 h-8 text-dreamaker-purple" />,
    title: "AI Persona Creation",
    description: "Design unique AI artists with distinct personalities and styles"
  },
  {
    icon: <Music className="w-8 h-8 text-dreamaker-purple" />,
    title: "Music Generation",
    description: "Generate original music tracks using advanced AI technology"
  },
  {
    icon: <Brain className="w-8 h-8 text-dreamaker-purple" />,
    title: "Smart Customization",
    description: "Fine-tune your AI artist's style and musical preferences"
  }
];

export const Features = () => {
  return (
    <div className="py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Features</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="bg-dreamaker-gray p-8 rounded-2xl hover:scale-105 transition-transform duration-300 animate-fade-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};