import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard';
import ContactForm from '@/components/ContactForm';
import { Github, Linkedin, Mail } from 'lucide-react';

const projects = [
  {
    title: "Investment Projection Calculator",
    description: "A tool for calculating projected returns on investments using different variables like interest rates and time periods.",
    image: "/placeholder.svg",
    githubLink: "#",
  },
  {
    title: "Simple Python Projects",
    description: "A collection of small Python programs demonstrating my foundational knowledge.",
    image: "/placeholder.svg",
    githubLink: "#",
  },
  {
    title: "Personal Finance Tracker",
    description: "A Python-based tool where users can input income, expenses, and savings to receive financial insights.",
    image: "/placeholder.svg",
    githubLink: "#",
    demoLink: "#",
  },
  {
    title: "Project Portfolio",
    description: "A collection of various Python scripts, such as automation tools, file manipulation, or web scraping scripts.",
    image: "/placeholder.svg",
    githubLink: "#",
  },
  {
    title: "Data Visualization Project",
    description: "A project using Python libraries like Matplotlib or Plotly to generate graphs for financial or other data.",
    image: "/placeholder.svg",
    githubLink: "#",
    demoLink: "#",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="container px-6 py-12">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-primary">
              Python Developer
            </h1>
            <p className="text-xl text-gray-600">
              T-Level student passionate about creating efficient and innovative Python solutions.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#projects"
                className="bg-accent text-white px-6 py-3 rounded-md hover:bg-accent/90 transition-colors"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Contact Information</h3>
                <p className="text-gray-600">
                  Feel free to reach out if you're interested in my work or would like to collaborate on a project.
                </p>
                <div className="flex flex-col space-y-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-600 hover:text-accent transition-colors"
                  >
                    <Github size={20} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-600 hover:text-accent transition-colors"
                  >
                    <Linkedin size={20} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="mailto:your.email@example.com"
                    className="flex items-center space-x-3 text-gray-600 hover:text-accent transition-colors"
                  >
                    <Mail size={20} />
                    <span>Email</span>
                  </a>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;