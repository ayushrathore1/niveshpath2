import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <Card className="bg-gray-50 hover:shadow-md transition">
      <CardContent className="p-6">
        <div className="mb-4 text-primary">
          <i className={`${icon} text-3xl`}></i>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

const FeaturesOverview = () => {
  const features = [
    {
      icon: "fas fa-chart-line",
      title: "Smart Investment Tools",
      description: "Access powerful tools to analyze and optimize your investment portfolio."
    },
    {
      icon: "fas fa-graduation-cap",
      title: "Educational Resources",
      description: "Learn from experts and stay updated with the latest financial trends."
    },
    {
      icon: "fas fa-robot",
      title: "AI-Powered Insights",
      description: "Get personalized recommendations based on your financial goals."
    }
  ];

  return (
    <section id="features" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose NiveshPath?</h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          We provide the tools and knowledge you need to succeed
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesOverview;
