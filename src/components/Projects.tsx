//import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: " E-Commerce Platform",
      description: "A complete e-commerce platform built with React, Node.js, Redux,MongoDB and Middlewares. Features include user authentication, product catalog, shopping cart, order management, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Redux","Middlewares"],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      githubUrl: "https://github.com/anjali216/E-Cart",
      liveUrl: "https://e-cart-anjali.netlify.app/"
    },
    {
      title: "Hospital Management System",
      description: "A comprehensive hospital management system with patient records, appointment scheduling, doctor management, billing system, and medical inventory tracking. Built with secure authentication and role-based access control.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600",
      githubUrl: "https://github.com/anjali216/hospital-management",
      liveUrl: "https://hospitalmanagementsystem-anjali.netlify.app/",
    },
    {
      title: "Weather App",
      description: "A responsive weather application that displays current weather conditions, 5-day forecasts, and location-based weather data using OpenWeatherMap API.",
      technologies: ["React", "JavaScript", "CSS3", "OpenWeather API"],
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600",
      githubUrl: "https://github.com/anjali216/Weather-app",
      liveUrl: "https://weatherapp-anjali.netlify.app/"
    },
    {
      title: "Budget Calculator",
      description: "Budget Calculator helps you see where your money goes, set monthly limits, and forecast savings in seconds. Add income and expenses, get instant totals, and make smarter money decisions.",
      technologies: ["Html", "Css", "Javascript"],
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      githubUrl: "https://github.com/anjali216/BudgetCalculator",
      liveUrl: "https://budget-anjali.netlify.app/"
    },
    {
      title: "Food Delivery App",
      description: "A food delivery application that allows users to search for recipes, save favorites, create shopping lists, and share recipes with friends.",
      technologies: ["Html","Css "],
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      githubUrl: "https://github.com/anjali216/food-delivery-app",
      liveUrl: "https://fooddelivery-anjali.netlify.app/"
    },
    {
      title: "Travel blog",
      description: "A full-featured blogging platform with rich text editor, comment system, user profiles, and admin dashboard for content management.",
      technologies: ["Html", "Css", "Bootstrap" ],
      image: "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=600",
      githubUrl: "https://github.com/anjali216/travel-blog-using-html-css-bootstrap",
      liveUrl: "https://travelblog-anjali.netlify.app/"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:transform hover:scale-105 border border-gray-100"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex gap-3">
                      <a
                        href={project.githubUrl}
                        className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-200"
                        aria-label="View GitHub repository"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={project.liveUrl}
                        className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-200"
                        aria-label="View live demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      className="flex-1 bg-gray-800 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.liveUrl}
                      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;