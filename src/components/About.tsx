
import { Code, Database, Globe, Server } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'HTML', icon: <Globe className="w-8 h-8" />, color: 'bg-orange-100 text-orange-600' },
    { name: 'CSS', icon: <Code className="w-8 h-8" />, color: 'bg-blue-100 text-blue-600' },
    { name: 'JavaScript', icon: <Code className="w-8 h-8" />, color: 'bg-yellow-100 text-yellow-600' },
    { name: 'React.js', icon: <Code className="w-8 h-8" />, color: 'bg-cyan-100 text-cyan-600' },
    { name: 'Node.js', icon: <Server className="w-8 h-8" />, color: 'bg-green-100 text-green-600' },
    { name: 'MongoDB', icon: <Database className="w-8 h-8" />, color: 'bg-emerald-100 text-emerald-600' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
            About <span className="text-blue-600">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate MERN Stack Developer with a strong foundation in modern web technologies. 
                I love creating efficient, scalable, and user-friendly applications that solve real-world problems.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                With expertise in both frontend and backend development, I enjoy the complete process of 
                bringing ideas to life - from designing intuitive user interfaces to building robust server-side 
                architectures.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm always eager to learn new technologies and take on challenging projects that push 
                the boundaries of what's possible on the web.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-8 text-gray-800">Skills & Technologies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`${skill.color} p-4 rounded-xl text-center transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg cursor-pointer`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex justify-center mb-2">
                      {skill.icon}
                    </div>
                    <span className="font-semibold text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;