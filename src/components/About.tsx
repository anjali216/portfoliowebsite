import { Code, Database, Globe, Server, Smartphone, Palette, GitBranch, Terminal, Layers, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'HTML', iconPath: '/icons8-html-5.svg' },
    { name: 'CSS3', iconPath: '/icons8-css3.svg' },
    { name: 'JavaScript', iconPath: '/icons8-javascript.svg' },
    { name: 'React.js', iconPath: '/icons8-react.svg' },
    { name: 'Node.js', iconPath: '/icons8-nodejs.svg' },
    { name: 'MongoDB', iconPath: '/icons8-mongodb.svg' },
    { name: 'Express.js', iconPath: '/icons8-express.svg' },
    { name: 'Git', iconPath: '/icons8-git.svg' },
    { name: 'Redux', iconPath: '/icons8-redux.svg' },
    { name: 'Tailwind CSS', iconPath: '/icons8-tailwind.svg' },
    { name: 'Bootstrap', iconPath: '/icons8-bootstrap.svg' },
    { name: 'REST APIs', iconPath: '/icons8-api.svg' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-200 opacity-20 animate-pulse"></div>
        <div className="absolute top-40 -left-20 w-60 h-60 rounded-full bg-purple-200 opacity-20 animate-pulse animation-delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
            About <span className="text-blue-600">Me</span>
          </h2>
          
          {/* About Content - Centered */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed animate-fade-in-up">
                I'm a passionate MERN Stack Developer with a strong foundation in modern web technologies. 
                I love creating efficient, scalable, and user-friendly applications that solve real-world problems.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed animate-fade-in-up animation-delay-300">
                With expertise in both frontend and backend development, I enjoy the complete process of 
                bringing ideas to life from designing intuitive user interfaces to building robust server-side 
                architectures.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed animate-fade-in-up animation-delay-600">
                I specialize in building full-stack applications using modern technologies and
                best practices. I'm committed to delivering high-quality code that
                performs well and scales effectively.
              </p>
            </div>
          </div>
          
          {/* Technical Skills Section - Centered */}
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 animate-fade-in-up animation-delay-900">
              Technical <span className="text-blue-600">Skills</span>
            </h3>
            <p className="text-lg text-gray-600 mb-16 animate-fade-in-up animation-delay-1000">
              Technologies I work with to bring ideas to life
            </p>
            
            {/* Animated Skills Grid */}
            <div className="relative">
              {/* Main Skills Container */}
              <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group relative"
                    style={{ 
                      animation: `skillFloat 6s ease-in-out infinite`,
                      animationDelay: `${index * 0.5}s`
                    }}
                  >
                    {/* Skill Card */}
                    <div className="
                      relative w-32 h-32 rounded-2xl bg-white border border-gray-200
                      flex flex-col items-center justify-center
                      shadow-lg hover:shadow-2xl transition-all duration-500
                      group-hover:scale-110 group-hover:rotate-3
                      cursor-pointer overflow-hidden
                    ">
                      
                      {/* Icon */}
                      <div className="relative z-10 mb-3 group-hover:animate-bounce">
                        <img 
                          src={skill.iconPath} 
                          alt={skill.name} 
                          className="w-16 h-16 object-contain"
                        />
                      </div>
                      
                      {/* Skill Name */}
                      <span className="relative z-10 text-sm font-semibold text-center px-2 leading-tight text-gray-800">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Orbiting elements */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2">
                  <div className="absolute inset-0 border border-blue-200 rounded-full animate-spin-slow opacity-30"></div>
                  <div className="absolute top-4 left-1/2 w-3 h-3 bg-blue-400 rounded-full -translate-x-1/2 animate-pulse"></div>
                  <div className="absolute bottom-4 left-1/2 w-2 h-2 bg-purple-400 rounded-full -translate-x-1/2 animate-pulse animation-delay-1000"></div>
                </div>
              </div>
            </div>
            
            {/* Stats Section */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-1200">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-1400">
                <div className="text-3xl font-bold text-purple-600 mb-2">2+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-1600">
                <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
                <div className="text-gray-600">Technologies Mastered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;