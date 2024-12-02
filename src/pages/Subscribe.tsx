import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "9.99",
    period: "month",
    description: "Perfect for beginners starting their AI music journey",
    features: [
      "1 AI Artist Persona",
      "10 Songs per Month",
      "Basic Voice Training",
      "Standard Audio Quality",
      "Community Support"
    ],
    highlighted: false
  },
  {
    name: "Professional",
    price: "24.99",
    period: "month",
    description: "Ideal for serious creators and small labels",
    features: [
      "3 AI Artist Personas",
      "Unlimited Songs",
      "Advanced Voice Training",
      "High-Quality Audio",
      "Priority Support",
      "Custom Artwork Generation",
      "Marketing Tools"
    ],
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "99.99",
    period: "month",
    description: "For labels and professional studios",
    features: [
      "10 AI Artist Personas",
      "Unlimited Everything",
      "Professional Voice Training",
      "Studio Quality Audio",
      "24/7 Dedicated Support",
      "Custom Branding",
      "Advanced Analytics",
      "API Access"
    ],
    highlighted: false
  }
];

const Subscribe = () => {
  const navigate = useNavigate();

  const handleSubscribe = (plan: string) => {
    // Here you would handle the subscription process
    console.log(`Subscribing to ${plan} plan`);
  };

  return (
    <div className="min-h-screen bg-dreamaker-bg py-16 px-4">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold gradient-text mb-4">Choose Your Plan</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Select the perfect plan for your AI music creation journey. All plans include access to our cutting-edge AI technology.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan) => (
          <Card 
            key={plan.name}
            className={`bg-dreamaker-gray border-none p-8 relative ${
              plan.highlighted ? 'ring-2 ring-dreamaker-purple' : ''
            }`}
          >
            {plan.highlighted && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-dreamaker-purple text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </span>
              </div>
            )}

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-400">/{plan.period}</span>
              </div>
              <p className="text-gray-400">{plan.description}</p>
            </div>

            <div className="space-y-4 mb-8">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-center">
                  <Check className="h-5 w-5 text-dreamaker-purple mr-2" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <Button
              onClick={() => handleSubscribe(plan.name)}
              className={`w-full py-6 text-lg ${
                plan.highlighted
                  ? 'bg-red-600 hover:bg-red-700 text-white'
                  : 'bg-dreamaker-gray border-2 border-dreamaker-purple text-dreamaker-purple hover:bg-dreamaker-purple hover:text-white'
              }`}
            >
              Get Started
            </Button>
          </Card>
        ))}
      </div>

      {/* Money Back Guarantee */}
      <div className="text-center mt-16">
        <p className="text-gray-400">
          30-day money-back guarantee • Cancel anytime • Secure payment
        </p>
      </div>
    </div>
  );
};

export default Subscribe;
