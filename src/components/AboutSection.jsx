import { Briefcase, Code, User } from "lucide-react";
import { motion } from "framer-motion";

const expertise = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "Building responsive and interactive user interfaces using modern frameworks like React, Tailwind CSS, and JavaScript to deliver seamless user experiences.",
    icon: Code,
  },
  {
    id: 2,
    title: "Backend Development",
    description:
      "Creating robust server-side applications with technologies like Laravel, PHP, and MySQL, ensuring secure and scalable APIs and databases.",
    icon: Briefcase,
  },
  {
    id: 3,
    title: "Machine Learning",
    description:
      "Developing intelligent systems with Python, TensorFlow, and OpenCV, including projects like emotion-based music recommendation systems.",
    icon: User,
  },
];

export const AboutSection = () => {
  // Animation variants for Framer Motion
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About <span className="text-primary">Me</span>
        </motion.h2>
        <motion.p
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-base md:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Discover who I am and what drives my passion for coding.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>
            <p className="text-muted-foreground text-sm md:text-base">
              I'm a dedicated web developer with a love for crafting innovative
              solutions. My expertise spans frontend and backend development,
              creating user-friendly interfaces and robust server-side systems.
            </p>
            <p className="text-muted-foreground text-sm md:text-base">
              With a strong foundation in technologies like React, Laravel, and
              Python, I enjoy tackling complex challenges, from building responsive
              websites to developing AI-driven applications like emotion-based
              music recommendation systems. My goal is to deliver seamless,
              impactful digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a
                href="#contact"
                className="cosmic-button inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
                aria-label="Get in touch"
              >
                Get In Touch
              </a>
              <a
                href="/assets/resume.pdf"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                aria-label="Download my CV"
                download
              >
                Download CV
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {expertise.map((item, index) => (
              <motion.div
                key={item.id}
                className="gradient-border p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 card-hover bg-card"
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">{item.title}</h4>
                    <p className="text-muted-foreground text-sm md:text-base">
                      {item.description}
                    </p>
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