import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

import c1 from "../assets/certificates/c1.png";
import c2 from "../assets/certificates/c2.png";
import c3 from "../assets/certificates/c3.png";
import c4 from "../assets/certificates/c4.png";
import c5 from "../assets/certificates/c5.png";
import c6 from "../assets/certificates/c6.png";
import c7 from "../assets/certificates/c7.png";
import c8 from "../assets/certificates/c8.png";
import c9 from "../assets/certificates/c9.png";
import c10 from "../assets/certificates/c10.png";
import c11 from "../assets/certificates/c11.png";
import c12 from "../assets/certificates/c12.png";
import c13 from "../assets/certificates/c13.png";
import c14 from "../assets/certificates/c14.png";

const certs = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14];

export default function Certificates() {
  return (
    <SectionReveal id="certificates" className="py-24 relative overflow-hidden">
      <motion.div variants={SectionReveal.itemVariants}>
        <h2 className="section-heading gradient-text">Certifications</h2>
        <p className="text-gray-400 text-center mb-12 text-sm">
          Continuous learning & professional development
        </p>
      </motion.div>

      {/* Marquee with fade edges */}
      <motion.div variants={SectionReveal.itemVariants} className="marquee-container group">
        <div
          className="flex gap-6 animate-marquee group-hover:[animation-play-state:paused]"
          style={{ width: "max-content" }}
        >
          {[...certs, ...certs].map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[280px] glass-card p-3 hover:!transform-none"
            >
              <img
                src={img}
                alt={`Certificate ${(i % certs.length) + 1}`}
                className="w-full rounded-lg transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Subtle hint */}
      <p className="text-gray-600 text-xs text-center mt-6">
        Hover to pause • {certs.length} certificates
      </p>
    </SectionReveal>
  );
}