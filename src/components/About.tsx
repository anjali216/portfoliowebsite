import { Code, Database, Globe, Server, Smartphone, Palette, GitBranch, Terminal } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'HTML5', icon: <Globe className="w-8 h-8" />, color: 'bg-orange-100 text-orange-600' },
    { name: 'CSS3', icon: <Palette className="w-8 h-8" />, color: 'bg-blue-100 text-blue-600' },
    { name: 'JavaScript', icon: <Code className="w-8 h-8" />, color: 'bg-yellow-100 text-yellow-600' },
    { name: 'React.js', icon: <Code className="w-8 h-8" />, color: 'bg-cyan-100 text-cyan-600' },
    { name: 'Node.js', icon: <Server className="w-8 h-8" />, color: 'bg-green-100 text-green-600' },
    { name: 'MongoDB', icon: <Database className="w-8 h-8" />, color: 'bg-emerald-100 text-emerald-600' },
    { name: 'Express.js', icon: <Terminal className="w-8 h-8" />, color: 'bg-gray-100 text-gray-600' },
    { name: 'Git', icon: <GitBranch className="w-8 h-8" />, color: 'bg-purple-100 text-purple-600' },
    { name: 'Responsive Design', icon: <Smartphone className="w-8 h-8" />, color: 'bg-pink-100 text-pink-600' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
            About <span className="text-blue-600">Me</span>
          </h2>
          
          {/* About Content - Centered */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate MERN Stack Developer with a strong foundation in modern web technologies. 
                I love creating efficient, scalable, and user-friendly applications that solve real-world problems.
                My journey in web development started with a curiosity for how things work on the web, and it has evolved 
                into a love for crafting digital solutions that make a real impact.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                With expertise in both frontend and backend development, I enjoy the complete process of 
                bringing ideas to life from designing intuitive user interfaces to building robust server-side 
                architectures. I'm always eager to learn new technologies and take on challenging projects that push 
                the boundaries of what's possible on the web.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                I specialize in building full-stack applications using modern technologies and
                best practices. Whether it's a responsive frontend with React or a robust
                backend with Node.js, I'm committed to delivering high-quality code that
                performs well and scales effectively.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing
                to open-source projects, or sharing my knowledge with the developer community.
                I believe in continuous learning and staying updated with the latest trends in web development.
              </p>

              {/* Currently Learning */}
              <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Currently Learning
                </h3>
                <p className="text-blue-600 font-medium text-lg">
                  TypeScript, Next.js, AWS Cloud Services, and Advanced React Patterns
                </p>
              </div>
            </div>
          </div>
          
          {/* Technical Skills Section - Centered */}
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-12 text-gray-800">Technical Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-5xl mx-auto mb-12">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`${skill.color} p-6 rounded-xl text-center transition-all duration-300 hover:transform hover:scale-110 hover:shadow-xl cursor-pointer group animate-bounce-in opacity-0 hover:animate-pulse-glow delay-${(index + 1) * 100}`}
                >
                  <div className="flex justify-center mb-3 animate-float group-hover:animate-spin" style={{ animationDelay: `${index * 0.5}s` }}>
                    {skill.icon}
                  </div>
                  <span className="font-semibold text-sm block">{skill.name}</span>
                </div>
              ))}
            </div>
            
            {/* Animated Technology Showcase */}
            <div className="mt-16 relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-white text-center mb-8">Technologies in Motion</h4>
              
              {/* Moving technology badges */}
              <div className="relative h-32 overflow-hidden">
                <div className="absolute inset-0 flex items-center">
                  {/* First row - moving right */}
                  <div className="flex animate-slide-right space-x-4 whitespace-nowrap">
                    {['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript'].map((tech, index) => (
                      <span
                        key={tech}
                        className={`px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full font-medium animate-float delay-${index * 100}`}
                        style={{ animationDelay: `${index * 0.2}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Second row - moving left */}
                <div className="absolute inset-0 flex items-center mt-16">
                  <div className="flex animate-slide-left space-x-4 whitespace-nowrap">
                    {['HTML5', 'CSS3', 'Tailwind CSS', 'Git', 'RESTful APIs'].map((tech, index) => (
                      <span
                        key={tech}
                        className={`px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full font-medium animate-float delay-${(index + 5) * 100}`}
                        style={{ animationDelay: `${(index + 5) * 0.2}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Additional Skills */}
            <div className="mt-16 p-8 bg-white rounded-xl shadow-lg max-w-4xl mx-auto">
              <h4 className="text-xl font-semibold text-gray-800 mb-6">Additional Technologies</h4>
              <div className="flex flex-wrap justify-center gap-3 opacity-0 animate-fade-in-up animation-delay-1000">
                {['Redux', 'Tailwind CSS', 'Bootstrap', 'JWT Authentication', 'RESTful APIs', 'Responsive Design', 'Version Control', 'Agile Development'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 rounded-full text-sm font-medium hover:from-blue-200 hover:to-purple-200 transition-all duration-200 cursor-default animate-rotate-in opacity-0"
                    style={{ animationDelay: `${Math.random() * 2}s` }}
                  >
                    {tech}
                  </span>
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