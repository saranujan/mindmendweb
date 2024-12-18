import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "MindMend has transformed how we approach therapy. The progress tracking and AI recommendations have been invaluable.",
    author: "Sarah Johnson",
    role: "Parent"
  },
  {
    quote: "As a therapist, the platform has made it easier to provide consistent, quality care to my patients.",
    author: "Dr. Michael Chen",
    role: "Child Psychologist"
  }
];

const TestimonialSection = () => {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">
          What People Are Saying
        </h2>
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 transform hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">{testimonial.quote}</p>
              <div>
                <p className="font-medium text-gray-900">{testimonial.author}</p>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;