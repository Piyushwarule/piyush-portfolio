import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'TranscodeX',
      description:
        'Cloud-based video processing platform on AWS. Designed a microservices architecture with Node.js/Express REST APIs, Docker on EC2, S3 for storage, DynamoDB for metadata, and SQS for async job processing. Secured via API Gateway and AWS Certificate Manager with dead letter queues for failure handling.',
      techStack: ['Node.js', 'Express', 'AWS EC2', 'S3', 'DynamoDB', 'SQS', 'Docker', 'API Gateway'],
      githubLink: 'https://github.com/piyushwarule/transcodex',
    },
    {
      id: 2,
      title: 'SpendWise',
      description:
        'Cross-platform personal finance mobile app built with React Native (Expo Go). Features a secure Node.js/Express/MongoDB backend with JWT auth, CRUD operations, server-side pagination, global state management, push notifications, and seamless cross-device navigation.',
      techStack: ['React Native', 'Expo', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      githubLink: 'https://github.com/piyushwarule/spendwise',
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 md:py-24 px-4 relative border-b border-[#b77fff]/20 text-[#F0E8FF]"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <motion.div
          className="mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-[#B77FFF] mb-2 md:mb-3">
            // Active Builds
          </p>

          <h2 className="text-3xl md:text-6xl font-black uppercase leading-[0.95]">
            Selected <span className="text-[#B77FFF]">Projects</span>
          </h2>

          <p className="text-[#6A5A8A] max-w-xl md:max-w-2xl mt-3 text-sm md:text-base leading-relaxed">
            Cloud-deployed systems and mobile applications built end-to-end.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2px] bg-[#b77fff]/10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="bg-[#0E0618] border border-[#b77fff]/20 p-5 md:p-8 relative overflow-hidden hover:border-[#b77fff]/45 transition-all duration-300 [clip-path:polygon(0_0,calc(100%-14px)_0,100%_14px,100%_100%,0_100%)]"
            >
              {/* TOP LINE */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#B77FFF] via-[#FFD700] to-transparent opacity-80" />

              {/* NUMBER */}
              <div className="text-[10px] md:text-[11px] uppercase text-[#B77FFF]/50 mb-4 md:mb-6">
                // 0{project.id}
              </div>

              <div className="flex flex-col h-full">
                
                {/* TEXT */}
                <div>
                  <h3 className="text-2xl md:text-4xl font-extrabold uppercase leading-[1] mb-3 md:mb-4">
                    {project.title}
                  </h3>

                  <p className="text-[#B8A8D8] text-sm md:text-[15px] leading-relaxed mb-5 md:mb-6">
                    {project.description}
                  </p>

                  {/* TECH */}
                  <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[9px] md:text-[10px] px-2.5 md:px-3 py-1 border border-[#FFD700]/20 bg-[#FFD700]/5 text-[#FFD700] uppercase tracking-[0.05em]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* BUTTONS */}
                <div className="flex flex-wrap gap-2 md:gap-3 mt-auto">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 md:gap-2 px-4 md:px-5 py-2 md:py-3 text-sm md:text-base bg-[#B77FFF] text-black font-bold uppercase hover:bg-[#FFD700] transition"
                    >
                      Live <ArrowUpRight size={14} />
                    </a>
                  )}

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 md:gap-2 px-4 md:px-5 py-2 md:py-3 text-sm md:text-base border border-[#b77fff]/30 text-[#B77FFF] font-bold uppercase hover:bg-[#B77FFF]/5 transition"
                  >
                    <Github size={14} /> Code
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;