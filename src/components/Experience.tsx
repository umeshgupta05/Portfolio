
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Define the animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Google",
      duration: "2020 - Present",
      description: "Developing and maintaining front-end applications using React, TypeScript, and Next.js. Collaborating with cross-functional teams to deliver high-quality software solutions.",
      skills: ["React", "TypeScript", "Next.js", "Redux", "GraphQL"]
    },
    {
      title: "Front-end Developer",
      company: "Microsoft",
      duration: "2018 - 2020",
      description: "Implemented responsive web designs and optimized application performance. Worked closely with designers to ensure pixel-perfect implementation of UI components.",
      skills: ["JavaScript", "Vue.js", "CSS", "SASS", "Webpack"]
    },
    {
      title: "Web Developer Intern",
      company: "Amazon",
      duration: "2017 - 2018",
      description: "Assisted in developing and debugging web applications. Gained hands-on experience with front-end technologies and agile development methodologies.",
      skills: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 md:px-8 bg-white/5 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-gradient">
          Professional Experience
        </h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6"
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="relative"
            >
              <Card className="glass card-hover border border-primary/20">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl md:text-2xl font-bold">
                        {exp.title}
                      </CardTitle>
                      <p className="text-lg text-primary">{exp.company}</p>
                    </div>
                    <div>
                      <Badge variant="outline" className="bg-white/10 backdrop-blur-sm">
                        {exp.duration}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-neutral-100">{exp.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {exp.skills.map((skill, idx) => (
                      <Badge key={idx} className="bg-secondary/10 text-secondary border-secondary/30">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
