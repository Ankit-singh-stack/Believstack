import React from 'react';

const projects = [
  {
    title: "Startup Launchpad",
    category: "Full Stack",
    description: "A comprehensive platform for entrepreneurs to launch, manage, and scale their startups with integrated analytics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Eco-Commerce",
    category: "E-Commerce",
    description: "Next-gen shopping experience with sustainable focus, AR product previews, and lightning-fast checkout.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "DevPortfolio Pro",
    category: "Web Design",
    description: "Premium portfolio architectures for high-end digital creators and professional developers.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
  }
];

const Projects = () => (
  <div className="py-24 px-6 max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
      <div className="space-y-4">
        <h2 className="text-5xl font-black tracking-tighter text-gradient">Featured Work</h2>
        <p className="text-gray-400 max-w-xl text-lg">
          Explore our latest projects where creativity meets cutting-edge technology to deliver exceptional results.
        </p>
      </div>
      <button className="px-8 py-3 rounded-full border border-white/20 text-white font-bold hover:bg-white hover:text-black transition-all">
        View All Case Studies
      </button>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {projects.map((project, index) => (
        <div key={index} className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:border-brand-primary/50 transition-all duration-500">
          <div className="aspect-video overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="p-8 space-y-4">
            <span className="text-xs font-bold text-brand-secondary uppercase tracking-widest">{project.category}</span>
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              {project.description}
            </p>
            <div className="pt-4">
              <button className="text-white font-bold flex items-center gap-2 group/btn">
                View Project <span className="group-hover/btn:translate-x-2 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
