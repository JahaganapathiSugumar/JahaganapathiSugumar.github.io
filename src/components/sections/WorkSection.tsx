import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Briefcase, Calendar, Building } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "Uptricks Services Pvt. Ltd.",
    title: "Python Developer Intern",
    period: "May 2024 - July 2024",
    location: "Remote, Pune, Maharashtra",
    description: "Developed an automation tool to streamline email communication processes using Python and MySQL, enhancing workflow efficiency.",
    responsibilities: [
      "Automated the routine email dispatch system using Python and SMTPLib",
      "Integrated MySQL for email scheduling and data management",
      "Designed a Tkinter-based GUI for easy control of the automation tool"
    ],
    technologies: ["Python", "Tkinter", "MySQL", "SMTPLib", "Email Modules"],
    offerLetter: "https://res.cloudinary.com/dyxu6ylng/image/upload/v1746610522/intern1_offer_vq7tem.jpg", // Path to the offer letter
    completionLetter: "https://res.cloudinary.com/dyxu6ylng/image/upload/v1746610523/intern1_comp_iggzmc.jpg" // Path to the completion letter
  },
  {
    id: 2,
    company: "Generative AI Consortium",
    title: "AI/ML Intern",
    period: "Jun 2024 - Oct 2024",
    location: "Remote, Chennai, Tamil Nadu",
    description: "Worked on foundational AI/ML projects, documented key concepts, and built machine learning models for diverse use cases.",
    responsibilities: [
      "Documented AI terminologies and created illustrative concept examples",
      "Developed and trained ML models using Python and scikit-learn",
      "Processed and analyzed datasets to derive actionable insights"
    ],
    technologies: ["Python", "Machine Learning", "scikit-learn", "Pandas", "NumPy"],
    offerLetter: "https://res.cloudinary.com/dyxu6ylng/image/upload/v1746610272/intern2_xngofo.jpg", // Path to the offer letter
    completionLetter: "https://res.cloudinary.com/dyxu6ylng/image/upload/v1746610523/intern2_comp_kjrfsi.jpg" // Path to the completion letter
  }
];

const WorkSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="work" ref={sectionRef} className="py-20 md:py-32 bg-[#f0eff9] text-[#333333]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-grotesk font-bold mb-16 flex items-center"
        >
          <Briefcase className="mr-3 text-[#7f5af0]" size={32} />
          <span className="pb-2 border-b-2 border-[#8b5cf6] inline-block">
            Work Experience
          </span>
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#7f5af0]/30 transform md:translate-x-[-0.5px]"></div>
          
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <div className={`md:flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-[-8px] md:left-1/2 top-0 w-4 h-4 rounded-full bg-[#7f5af0] transform md:translate-x-[-8px] border-2 border-[#f0eff9] z-10"></div>
                  
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-10" : "md:pl-10"} pl-10 md:pl-0`}>
                    <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-[#333333]">{exp.title}</h3>
                        <div className="flex items-center text-[#7f5af0] text-sm mt-2 md:mt-0">
                          <Calendar size={16} className="mr-1" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center mb-4 text-[#555555]">
                        <Building size={16} className="mr-2 text-[#7f5af0]" />
                        <span>{exp.company}</span>
                      </div>
                      
                      <p className="text-[#555555] mb-6">{exp.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-medium mb-2 text-[#7f5af0]">Responsibilities:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-[#555555]">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx}>{resp}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-medium mb-2 text-[#7f5af0]">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <span 
                              key={idx} 
                              className="bg-[#7f5af0]/10 text-[#7f5af0] px-3 py-1 rounded-full text-sm border border-[#7f5af0]/20 hover:bg-[#7f5af0]/20 transition-colors duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <br></br>
                        <h4 className="text-lg font-medium mb-2 text-[#7f5af0]">Documents:</h4>
                        <div className="flex gap-4">
                          {exp.offerLetter && (
                            <a
                              href={exp.offerLetter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-white bg-[#7f5af0] px-4 py-2 rounded-lg hover:bg-[#6e4ae0] transition-colors duration-300"
                            >
                              Offer Letter
                            </a>
                          )}
                          {exp.completionLetter && (
                            <a
                              href={exp.completionLetter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-white bg-[#7f5af0] px-4 py-2 rounded-lg hover:bg-[#6e4ae0] transition-colors duration-300"
                            >
                              Completion Letter
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
