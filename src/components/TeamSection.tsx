import { Users } from 'lucide-react';

const team = [
  {
    name: 'Sashiraj Akaash',
    role: 'Frontend Lead',
    id: '20231979',
    photo: "/src/pic/ak.jpg"
  },
  {
    name: 'Rama Raguram',
    role: 'Backend Developer',
    id: '20230137',
    photo: '/src/pic/rama.jpg'
  },
  {
    name: 'Rajendran Shakthivasan',
    role: 'Full Stack Developer',
    id: '20230386',
    photo: '/src/pic/shakthi.jpg'
  },
  {
    name: 'Gunanesan Saranujan',
    role: 'Backend Developer',
    id: '20221857',
    photo: '/src/pic/saran.JPG'
  },
  {
    name: 'Shahana Kuganesan',
    role: 'UI/UX Designer',
    id: '20230239',
    photo: '/src/pic/shana.jpg'
  },
  {
    name: 'Kerushan Sribaskaran',
    role: 'Full Stack Developer',
    id: '20232193',
    photo: '/src/pic/kaja.jpg'
  }
];

const TeamSection = () => {
  return (
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Meet Our Team Nexus
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              The minds behind MindMend
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
                <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="h-20 w-20 rounded-full overflow-hidden bg-blue-100 mx-auto mb-4 flex items-center justify-center">
                    <img
                        src={member.photo}
                        alt={member.name}
                        className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                  <p className="text-xs text-gray-400 mt-1">IIT ID: {member.id}</p>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default TeamSection;
