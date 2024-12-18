
const stats = [
  { number: '95%', label: 'User Satisfaction' },
  { number: '50k+', label: 'Active Users' },
  { number: '24/7', label: 'Support Available' },
  { number: '100%', label: 'Data Security' }
];

const StatsSection = () => {
  return (
    <div className="bg-blue-600">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-extrabold text-white">{stat.number}</div>
              <div className="mt-2 text-sm text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;