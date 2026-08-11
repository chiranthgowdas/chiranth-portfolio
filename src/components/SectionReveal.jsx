import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

/**
 * Wrap a section to get scroll-triggered staggered fade-up animation.
 * Children should each be wrapped in <motion.div variants={SectionReveal.itemVariants}>.
 * Or simply wrap everything — the container itself fades up.
 */
export default function SectionReveal({ children, className = "", id }) {
  return (
    <motion.section
      id={id}
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.section>
  );
}

// Export variants for use in children
SectionReveal.itemVariants = itemVariants;
SectionReveal.containerVariants = containerVariants;
