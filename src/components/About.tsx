import { Code, Database, Globe, Server, Smartphone, Palette, GitBranch, Terminal, Layers, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    { 
      name: 'HTML5', 
      icon: <img src="/icons8-html-5.svg" alt="HTML5" className="w-12 h-12" />, 
      color: 'from-orange-400 to-red-500' 
    },
    { name: 'CSS3', icon: <Palette className="w-12 h-12" />, color: 'from-blue-400 to-blue-600' },
    { name: 'JavaScript', icon: <Code className="w-12 h-12" />, color: 'from-yellow-400 to-orange-500' },
    { name: 'React.js', icon: <Code className="w-12 h-12" />, color: 'from-cyan-400 to-blue-500' },
    { name: 'Node.js', icon: <Server className="w-12 h-12" />, color: 'from-green-400 to-green-600' },
    { name: 'MongoDB', icon: <Database className="w-12 h-12" />, color: 'from-emerald-400 to-green-500' },
    { name: 'Express.js', icon: <Terminal className="w-12 h-12" />, color: 'from-gray-400 to-gray-600' },
    { name: 'Git', icon: <GitBranch className="w-12 h-12" />, color: 'from-purple-400 to-purple-600' },
    { name: 'Redux', icon: <Layers className="w-12 h-12" />, color: 'from-violet-400 to-purple-500' },
    { name: 'Tailwind CSS', icon: <Zap className="w-12 h-12" />, color: 'from-teal-400 to-cyan-500' },
    { name: 'Bootstrap', icon: <Palette className="w-12 h-12" />, color: 'from-purple-500 to-pink-500' },
    { name: 'REST APIs', icon: <Server className="w-12 h-12" />, color: 'from-indigo-400 to-blue-500' },
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
                    <div className={`
                      relative w-32 h-32 rounded-2xl bg-gradient-to-br ${skill.color} 
                      flex flex-col items-center justify-center text-white
                      shadow-lg hover:shadow-2xl transition-all duration-500
                      group-hover:scale-110 group-hover:rotate-3
                      cursor-pointer overflow-hidden
                    `}>
                      {/* Background glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Icon */}
                      <div className="relative z-10 mb-2 group-hover:animate-bounce">
                        {skill.icon}
                      </div>
                      
                      {/* Skill Name */}
                      <span className="relative z-10 text-sm font-semibold text-center px-2 leading-tight">
                        {skill.name}
                      </span>
                      
                      {/* Animated border */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-white/30 group-hover:border-white/60 transition-colors duration-300"></div>
                    </div>
                    
                    {/* Floating particles effect */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-2 right-2 w-2 h-2 bg-white/40 rounded-full animate-ping group-hover:animate-pulse"></div>
                      <div className="absolute bottom-2 left-2 w-1 h-1 bg-white/60 rounded-full animate-pulse group-hover:animate-ping"></div>
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