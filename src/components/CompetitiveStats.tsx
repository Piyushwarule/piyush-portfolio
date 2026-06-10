import React from 'react';
import { motion } from 'framer-motion';

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

const CompetitiveStats: React.FC = () => {
  const experienceList: Experience[] = [
    {
      id: 1,
      title: 'Full Stack Developer Intern',
      company: 'Qual-T Solutions',
      period: 'Feb 2025 – Jun 2025',
      location: 'Internship · Brisbane, Australia',
      description: [
        'Designed and developed a web-based local trade services platform connecting customers with verified service providers using the MERN stack.',
        'Implemented secure user authentication and role-based access control (RBAC) for admin, customers, and service providers using JWT and bcrypt.',
        'Built email verification workflow with Nodemailer and token-based password setup during signup for both customers and tradies.',
        'Developed custom dashboards for customers to browse and book services by location/type, and for tradies to manage listings, schedules, and bookings.',
        'Improved platform responsiveness by adding database indexes on high-traffic query fields, reducing average query response time by 18%.',
      ],
    },
    {
      id: 2,
      title: 'Junior Software Engineer',
      company: 'TietoevryConnect India Pvt Ltd',
      period: 'Mar 2021 – Dec 2023',
      location: 'Full-Time · Pune, India',
      description: [
        'Developed and maintained features for a full-stack enterprise supply chain platform, owning order handling workflows within the BDS core data layer supporting ordering, invoicing, and transportation modules.',
        'Built and maintained RESTful APIs using Node.js, Express, and MySQL with middleware, input validation, and error handling for scalable backend services.',
        'Designed dynamic user interfaces using React with reusable components, hooks, and efficient state management for seamless API integration.',
        'Optimised frontend performance through lazy loading and code splitting, reducing dashboard load time by 20% and improving overall responsiveness.',
        'Provided L2/L3 production support for enterprise supply chain application, resolving incidents and ensuring system stability in 24/7 operational environments.',
        'Recognised with a "Pat on the Back" award for measurable frontend performance improvements.',
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-16 md:py-24 px-4 border-b border-[#b77fff]/20 text-[#F0E8FF]"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-10 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p
            className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-[#B77FFF] mb-2 md:mb-3"
            style={{ fontFamily: '"Share Tech Mono", monospace' }}
          >
            // Mission Log
          </p>

          <h2
            className="text-3xl md:text-6xl font-black uppercase text-[#F0E8FF] leading-[0.95]"
            style={{ fontFamily: '"Barlow Condensed", sans-serif' }}
          >
            Experience Timeline
          </h2>

          <p className="text-[#6A5A8A] mt-3 md:mt-4 max-w-xl md:max-w-2xl text-sm md:text-base leading-relaxed">
            A record of full stack product development across personal builds,
            internal business systems, client delivery, and backend-focused engineering work.
          </p>
        </motion.div>

        <div className="space-y-5 md:space-y-6">
          {experienceList.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="border border-[#b77fff]/20 bg-[#0E0618] p-5 md:p-8 relative [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,0_100%)] md:[clip-path:polygon(0_0,calc(100%-16px)_0,100%_16px,100%_100%,0_100%)] hover:border-[#B77FFF]/40 transition-all"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#B77FFF] via-[#FFD700] to-transparent" />

              <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-6">
                <div>
                  <p
                    className="text-[#B77FFF] text-[10px] md:text-xs uppercase tracking-widest mb-1 md:mb-2"
                    style={{ fontFamily: '"Share Tech Mono", monospace' }}
                  >
                    {exp.period}
                  </p>

                  <h3
                    className="text-lg md:text-xl font-bold uppercase text-[#FFD700] leading-tight"
                    style={{ fontFamily: '"Barlow Condensed", sans-serif' }}
                  >
                    {exp.company}
                  </h3>

                  <p className="text-[#C8B8E8] text-sm md:text-sm mt-1">{exp.title}</p>
                  <p
                    className="text-[#6A5A8A] text-[10px] md:text-[11px] uppercase tracking-[0.08em] mt-2"
                    style={{ fontFamily: '"Share Tech Mono", monospace' }}
                  >
                    {exp.location}
                  </p>
                </div>

                <div>
                  <ul className="space-y-2 md:space-y-3 text-[#C8B8E8] text-sm md:text-[15px] leading-relaxed">
                    {exp.description.map((line, i) => (
                      <li key={i} className="flex gap-2 md:gap-3">
                        <span className="text-[#B77FFF] shrink-0">▸</span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitiveStats;