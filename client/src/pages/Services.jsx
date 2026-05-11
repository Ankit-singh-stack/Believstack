import React from 'react';

const services = [
  {
    title: "Full Stack Development",
    description: "End-to-end web applications built with performance and scalability in mind using the MERN stack.",
    icon: "🚀"
  },
  {
    title: "UI/UX Design",
    description: "Modern, intuitive, and stunning user interfaces designed to WOW your customers and improve engagement.",
    icon: "🎨"
  },
  {
    title: "Cloud & DevOps",
    description: "Seamless deployment and infrastructure management ensuring 99.9% uptime and security.",
    icon: "☁️"
  },
  {
    title: "API Solutions",
    description: "Robust and secure API architectures for seamless integration between your systems and services.",
    icon: "🔌"
  },
  {
    title: "AI Integration",
    description: "Harness the power of Artificial Intelligence to automate tasks and provide intelligent insights.",
    icon: "🤖"
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock maintenance and technical support to keep your business running smoothly.",
    icon: "🛠️"
  }
];

const Services = () => (
  <div className="py-24 px-6 max-w-7xl mx-auto">
    <div className="text-center mb-20 space-y-4">
      <h2 className="text-5xl font-black tracking-tighter text-gradient">Premium Services</h2>
      <p className="text-gray-400 max-w-2xl mx-auto text-lg">
        We provide cutting-edge solutions tailored to your business needs, leveraging the latest technology stacks.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div 
          key={index} 
          className="glass p-8 rounded-3xl group hover:border-brand-primary/50 transition-all duration-500 hover:-translate-y-2"
        >
          <div className="text-4xl mb-6 bg-white/5 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform">
            {service.icon}
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
          <p className="text-gray-400 leading-relaxed">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default Services;
