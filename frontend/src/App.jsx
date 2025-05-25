import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, Cpu, ChevronDown, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const skills = {
    "Programming Languages": ["Python", "JavaScript", "Java", "C++", "TypeScript", "Go"],
    "Web Technologies": ["React", "Node.js", "Express", "HTML5", "CSS3", "Next.js"],
    "Databases": ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
    "Tools & Platforms": ["Git", "Docker", "AWS", "Linux", "Firebase", "Figma"]
  };

  const projects = [
    {
      title: "Accident Detection System",
      description: "Full-stack web application using React and Python Flask that helps users detect accidents in real-time using AI and computer vision.",
      tech: ["Arduino", "Python", "Flask", "React", "OpenCV"],
      github: "#",
      demo: "#",
      image: "🤖"
    }
  ];

  const experiences = [

  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Dharma
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-blue-400 transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/10">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 hover:text-blue-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-4xl font-bold mb-6">
              AC
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Dharma
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
            Computer Science & Engineering Student
          </h2>
          
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate about building innovative software solutions and exploring the intersection of 
            artificial intelligence, web development, and system design. Currently pursuing my degree 
            while working on exciting projects and gaining real-world experience.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a href="#" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-semibold transition-all hover:scale-105">
              View My Work
            </a>
            <a href="#contact" className="border border-white/30 hover:border-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105">
              Get In Touch
            </a>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform">
              <Mail size={24} />
            </a>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">My Journey</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm a Computer Science and Engineering student with a passion for creating 
                technology that makes a difference. My journey began with curiosity about 
                how software works, and has evolved into a deep love for problem-solving 
                and innovation.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Throughout my studies, I've maintained a 3.8 GPA while actively participating 
                in hackathons, contributing to open-source projects, and taking on internships 
                that challenge me to grow as a developer.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, mentoring 
                fellow students, or working on personal projects that push the boundaries 
                of what I know.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-6 text-purple-400">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Location:</span>
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">University:</span>
                  <span>VIT AP University</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Year:</span>
                  <span>Pre final year (2022)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">GPA:</span>
                  <span>8.9/10.0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Focus:</span>
                  <span>AI & Full-Stack Dev</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={category} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-400/50 transition-all hover:scale-105">
                <div className="text-center mb-4">
                  {category === 'Programming Languages' && <Code className="w-8 h-8 mx-auto text-blue-400 mb-2" />}
                  {category === 'Web Technologies' && <Globe className="w-8 h-8 mx-auto text-green-400 mb-2" />}
                  {category === 'Databases' && <Database className="w-8 h-8 mx-auto text-purple-400 mb-2" />}
                  {category === 'Tools & Platforms' && <Cpu className="w-8 h-8 mx-auto text-orange-400 mb-2" />}
                </div>
                <h3 className="text-lg font-semibold mb-4 text-center">{category}</h3>
                <div className="space-y-2">
                  {skillList.map((skill) => (
                    <div key={skill} className="bg-white/10 rounded-lg px-3 py-2 text-sm text-center">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-400/50 transition-all hover:scale-[1.02] group">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">
                  {project.image}
                </div>
                
                <h3 className="text-2xl font-semibold mb-4 text-blue-400">{project.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a href={project.github} className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a href={project.demo} className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                    <ExternalLink size={20} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-400/50 transition-all">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-400 mb-2">{exp.title}</h3>
                    <h4 className="text-xl text-purple-400 mb-2">{exp.company}</h4>
                  </div>
                  <span className="text-gray-400 bg-white/10 px-4 py-2 rounded-full text-sm">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm always interested in new opportunities, collaborations, and interesting conversations. 
            Whether you're a recruiter, fellow developer, or just want to chat about technology, 
            feel free to reach out!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a href="mailto:dharmaashok625@gmail.com" className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-400/50 transition-all hover:scale-105 group">
              <Mail className="w-12 h-12 mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-400">dharmaashok625@gmail.com</p>
            </a>
            
            <a href="#" className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-400/50 transition-all hover:scale-105 group">
              <Linkedin className="w-12 h-12 mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-400">linkedin.com/in/dharmaashok</p>
            </a>
            
            <a href="#" className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-400/50 transition-all hover:scale-105 group">
              <Github className="w-12 h-12 mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <p className="text-gray-400">github.com/dharmaashok</p>
            </a>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to work together?</h3>
            <p className="text-lg mb-6">Let's build something amazing!</p>
            <a href="mailto:dharmaashok625@gmail.com" className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10 bg-black/40">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Dharma. Built with React and lots of ☕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;