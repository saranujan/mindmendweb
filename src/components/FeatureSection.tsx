import { Brain, Shield, Activity, Calendar } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Assessments',
    description: 'Personalized therapy sessions based on individual needs and development stages.'
  },
  {
    icon: Activity,
    title: 'Interactive Therapy',
    description: 'Engaging, gamified exercises focused on cognitive and motor skill development.'
  },
  {
    icon: Shield,
    title: 'Blockchain Security',
    description: 'Advanced protection for sensitive medical data and therapy records.'
  },
  {
    icon: Calendar,
    title: 'Progress Tracking',
    description: 'Real-time monitoring and visual reports for caregivers and therapists.'
  }
];

const FeatureSection = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Transforming Autism Care
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Our comprehensive platform provides innovative solutions for families and caregivers.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
              <div className="relative p-6 bg-white rounded-lg">
                <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-base text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;