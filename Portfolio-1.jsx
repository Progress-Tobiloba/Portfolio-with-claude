import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeProject, setActiveProject] = useState(0);
  const [cursorVariant, setCursorVariant] = useState('default');

  // Custom cursor tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      title: 'Smarttobby',
      description: 'Digital Strategy & Brand Ecosystem',
      url: 'https://smarttobby.mystrikingly.com',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop&q=80',
      year: '2024',
      category: 'Web Design',
    },
    {
      title: 'Digital Experience',
      description: 'Immersive User Interface Design',
      url: '#',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop&q=80',
      year: '2024',
      category: 'UI/UX Design',
    },
    {
      title: 'Brand Systems',
      description: 'Identity & Design Guidelines',
      url: '#',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop&q=80',
      year: '2023',
      category: 'Brand Design',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, clipPath: 'inset(0 0 100% 0)' },
    visible: {
      opacity: 1,
      y: 0,
      clipPath: 'inset(0 0 0 0)',
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  return (
    <div className="bg-midnight text-mist-blue min-h-screen overflow-hidden selection:bg-cobalt selection:text-mist-blue">
      {/* Custom Cursor */}
      <motion.div
        className="fixed w-1 h-1 bg-safety-orange rounded-full pointer-events-none z-50"
        animate={{ x: mousePosition.x, y: mousePosition.y }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="fixed w-8 h-8 border border-safety-orange rounded pointer-events-none z-50"
        animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      />

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center px-8 overflow-hidden">
        {/* Structural Background Line */}
        <motion.div
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cobalt to-transparent"
          variants={lineVariants}
          initial="hidden"
          animate="visible"
        />

        <motion.div
          className="relative z-10 max-w-7xl w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Image - Asymmetric Placement */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative"
              variants={itemVariants}
            >
              <motion.div
                className="relative w-full aspect-square max-w-md mx-auto"
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                {/* Image Frame - Minimal Brutalist */}
                <div className="absolute inset-0 border-2 border-cobalt"></div>
                <div className="absolute inset-2 border border-cobalt/40"></div>

                <img
                  src="https://i.ibb.co/vCH1wdBb/image.png"
                  alt="Web Designer"
                  loading="lazy"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop';
                  }}
                />

                {/* Corner Accent */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-safety-orange"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />
                <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-safety-orange" />
              </motion.div>
            </motion.div>

            {/* Hero Typography */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <motion.div
                  className="overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <h1 className="text-7xl lg:text-8xl font-black leading-none font-serif tracking-tighter">
                    Digital
                    <br />
                    <span className="text-cobalt">Architect</span>
                  </h1>
                </motion.div>

                <motion.p
                  className="text-lg tracking-widest uppercase mt-6 text-mist-blue/70"
                  variants={itemVariants}
                >
                  Web Design & Digital Strategy
                </motion.p>
              </div>

              <motion.p
                className="text-base leading-relaxed max-w-sm text-mist-blue/80 font-light"
                variants={itemVariants}
              >
                Crafting intentional digital experiences with precision typography, brutalist structure, and editorial sophistication. Every pixel has purpose.
              </motion.p>

              <motion.div
                className="flex gap-6 pt-4"
                variants={itemVariants}
              >
                <motion.a
                  href="#projects"
                  className="relative px-8 py-3 text-sm tracking-widest uppercase font-medium"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute inset-0 border border-cobalt"></div>
                  <span className="relative">View Work</span>
                </motion.a>

                <motion.a
                  href="https://smarttobby.mystrikingly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative px-8 py-3 text-sm tracking-widest uppercase font-medium text-safety-orange"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute inset-0 border border-safety-orange"></div>
                  <span className="relative">Featured Work</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-px h-8 border-l border-mist-blue/40"></div>
        </motion.div>
      </section>

      {/* PROJECTS GALLERY SECTION */}
      <section id="projects" className="relative py-32 px-8 bg-midnight">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="mb-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="h-px bg-gradient-to-r from-cobalt via-cobalt to-transparent mb-8"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />

            <h2 className="text-6xl lg:text-7xl font-black font-serif tracking-tighter mb-4">
              Selected Works
            </h2>
            <p className="text-mist-blue/60 tracking-widest uppercase text-sm">
              Precision. Strategy. Execution.
            </p>
          </motion.div>

          {/* Projects Grid - Asymmetric */}
          <div className="space-y-24">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                viewport={{ once: true }}
                onMouseEnter={() => setCursorVariant('project')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    {/* Text Content - Overlapping */}
                    <motion.div
                      className="lg:col-span-1 order-2 lg:order-1 relative z-10"
                      whileHover={{ x: -8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
                        whileInView={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }}
                        transition={{ duration: 0.6, delay: idx * 0.15 + 0.2 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-safety-orange text-xs tracking-widest uppercase font-medium">
                          {project.category}
                        </span>

                        <h3 className="text-4xl lg:text-5xl font-black font-serif tracking-tighter leading-tight">
                          {project.title}
                        </h3>

                        <p className="text-mist-blue/70 leading-relaxed">
                          {project.description}
                        </p>

                        <div className="flex items-center gap-8 pt-4">
                          <span className="text-xs tracking-widest uppercase text-mist-blue/50">
                            {project.year}
                          </span>
                          <motion.div
                            className="flex items-center gap-2"
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2 }}
                          >
                            <span className="text-sm tracking-widest uppercase font-medium">
                              View
                            </span>
                            <div className="w-4 h-px bg-mist-blue/40 group-hover:bg-safety-orange transition-colors" />
                          </motion.div>
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* Image - Large & Dominant */}
                    <motion.div
                      className="lg:col-span-2 order-1 lg:order-2"
                      whileHover={{ scale: 0.99 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="relative aspect-video overflow-hidden border border-cobalt/30">
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          initial={{ scale: 1.05 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 1 }}
                          viewport={{ once: true }}
                        />

                        {/* Overlay Grid on Hover */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-transparent via-cobalt/0 to-cobalt/20"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Project Divider */}
                  {idx < projects.length - 1 && (
                    <motion.div
                      className="h-px bg-gradient-to-r from-cobalt/20 to-transparent mt-24"
                      initial={{ scaleX: 0, originX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: idx * 0.15 + 0.3 }}
                      viewport={{ once: true }}
                    />
                  )}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION - Editorial Column */}
      <section className="relative py-32 px-8 bg-midnight border-t border-cobalt/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="space-y-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl lg:text-7xl font-black font-serif tracking-tighter">
              Philosophy
            </h2>

            {[
              {
                title: 'Architecture Over Aesthetics',
                text: 'Design is not decoration. Every element serves structure. We build systems that endure, not trends that fade.',
              },
              {
                title: 'Precision in Typography',
                text: 'Type is the primary interface. We obsess over kerning, scale, and rhythm—because typography is the backbone of digital experience.',
              },
              {
                title: 'Intentional Interaction',
                text: 'Motion has weight. Color has purpose. We reject gratuitous animation in favor of micro-interactions that feel mechanical and human.',
              },
              {
                title: 'Editorial Sophistication',
                text: 'Inspired by print design and architectural drawings. We bring editorial depth and compositional discipline to digital spaces.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="space-y-4 pb-12 border-b border-cobalt/20"
                initial={{ opacity: 0, y: 20, clipPath: 'inset(0 0 100% 0)' }}
                whileInView={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0 0)' }}
                transition={{ duration: 0.7, delay: idx * 0.12 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold font-serif tracking-tight text-cobalt">
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed text-mist-blue/80">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FOOTER - Contact Section */}
      <section className="relative py-24 px-8 bg-midnight border-t border-cobalt/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Left - Call to Action */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-5xl font-black font-serif tracking-tighter">
                Ready to build something<br />
                <span className="text-cobalt">extraordinary</span>
              </h3>
              <p className="text-mist-blue/70 text-base leading-relaxed">
                Let's create digital experiences that challenge convention and endure.
              </p>

              <motion.a
                href="mailto:adetokunboprogress@gmail.com"
                className="inline-block mt-8 px-8 py-4 border border-safety-orange text-safety-orange text-sm tracking-widest uppercase font-medium"
                whileHover={{ 
                  backgroundColor: 'rgba(245, 143, 32, 0.1)',
                  x: 4 
                }}
                transition={{ duration: 0.2 }}
              >
                Get in Touch
              </motion.a>
            </motion.div>

            {/* Right - Meta Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <p className="text-xs tracking-widest uppercase text-mist-blue/50">
                  Current Focus
                </p>
                <p className="text-base text-mist-blue/80">
                  Web Design, Digital Strategy & Brand Systems
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-xs tracking-widest uppercase text-mist-blue/50">
                  Featured Work
                </p>
                <a
                  href="https://smarttobby.mystrikingly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-cobalt hover:text-safety-orange transition-colors"
                >
                  Smarttobby.mystrikingly.com
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Footer Bottom */}
          <motion.div
            className="mt-24 pt-12 border-t border-cobalt/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between items-center">
              <p className="text-xs tracking-widest uppercase text-mist-blue/40">
                © 2024 Web Designer. All rights reserved.
              </p>
              <p className="text-xs tracking-widest uppercase text-mist-blue/40">
                Designed & Built with Precision
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
