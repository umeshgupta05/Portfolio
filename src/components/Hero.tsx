import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    })
  };

  const gradientText = "bg-gradient-to-r from-terra via-sage to-terra bg-clip-text text-transparent animate-gradient";

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden">
      <div 
        className="absolute inset-0 -z-10 animate-pulse"
        style={{
          backgroundImage: `linear-gradient(225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%)`,
          opacity: 0.05
        }}
      />
      <div 
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1
        }}
      />
      <motion.div
        initial="hidden"
        animate="visible"
        className="text-center max-w-3xl mx-auto backdrop-blur-sm bg-white/30 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <motion.span
          custom={0}
          variants={textVariants}
          className="text-sage inline-block px-3 py-1 rounded-full text-sm font-medium mb-6 bg-sage/10 hover:bg-sage/20 transition-colors"
        >
          Welcome to my portfolio
        </motion.span>
        <motion.h1
          custom={1}
          variants={textVariants}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Hi, I'm <span className={gradientText}>Your Name</span>
          <br />
          <span className="text-terra hover:text-terra-light transition-colors">Aspiring Developer</span>
        </motion.h1>
        <motion.p
          custom={2}
          variants={textVariants}
          className="text-muted-foreground text-lg md:text-xl mb-8 hover:text-foreground transition-colors"
        >
          Passionate about creating beautiful and functional web experiences.
          Currently seeking opportunities to grow and learn.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: '#A3B9A0' }}
          whileTap={{ scale: 0.95 }}
          custom={3}
          variants={textVariants}
          className="bg-sage text-white px-6 py-3 rounded-lg font-medium shadow-lg transition-all duration-300 hover:shadow-xl"
        >
          View My Work
        </motion.button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground hover:text-terra transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  );
};