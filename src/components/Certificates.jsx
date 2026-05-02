import { motion } from "framer-motion";

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

const certs = [c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14];

export default function Certificates() {
  return (
    <section className="py-24 overflow-hidden">

      <h2 className="text-3xl text-cyan-400 text-center mb-12">
        Certifications
      </h2>

      <div className="overflow-hidden">

        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: "linear"
          }}
        >
          {[...certs, ...certs].map((img, i) => (
            <img
              key={i}
              src={img}
              className="w-[260px] rounded-xl shadow-lg hover:scale-110 transition"
            />
          ))}
        </motion.div>

      </div>

    </section>
  );
}