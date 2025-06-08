
import { Github, Linkedin, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

const SocialLinks = ({ className = "", iconSize = 20 }: SocialLinksProps) => {
  const iconVariants = {
    hover: { 
      scale: 1.15, 
      rotate: 5, 
      transition: { type: "spring", stiffness: 400, damping: 10 } 
    }
  };

  return (
    <div className={`flex space-x-6 ${className}`}>
      <motion.a 
        href="https://www.linkedin.com/in/jahaganapathisugumar/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-[#b0b0b0] hover:text-[#7f5af0] transition-colors duration-300"
        aria-label="LinkedIn"
        whileHover="hover"
        variants={iconVariants}
      >
        <Linkedin size={iconSize} className="hover-glow" />
      </motion.a>
      <motion.a 
        href="https://github.com/JahaganapathiSugumar" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-[#b0b0b0] hover:text-[#7f5af0] transition-colors duration-300"
        aria-label="GitHub"
        whileHover="hover"
        variants={iconVariants}
      >
        <Github size={iconSize} className="hover-glow" />
      </motion.a>
      <motion.a 
        href="https://leetcode.com/u/JAHAGANAPATHI_SUGUMAR/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-[#b0b0b0] hover:text-[#7f5af0] transition-colors duration-300"
        aria-label="LeetCode"
        whileHover="hover"
        variants={iconVariants}
      >
        <svg 
          viewBox="0 0 24 24" 
          width={iconSize} 
          height={iconSize}
          fill="currentColor" 
          className="hover-glow"
        >
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
        </svg>
      </motion.a>
      <motion.a 
        href="https://www.coursera.org/learner/jahaganapathisugumar" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-[#b0b0b0] hover:text-[#7f5af0] transition-colors duration-300"
        aria-label="Coursera"
        whileHover="hover"
        variants={iconVariants}
      >
        <GraduationCap size={iconSize} className="hover-glow" />
      </motion.a>
    </div>
  );
};

export default SocialLinks;
