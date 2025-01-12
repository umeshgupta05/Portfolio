import { motion } from "framer-motion";

export const SolarSystem = () => {
  const planets = [
    { name: "Mercury", size: "w-4 h-4", color: "bg-gray-400", orbit: "w-[200px] h-[200px]", duration: 20 },
    { name: "Venus", size: "w-6 h-6", color: "bg-yellow-600", orbit: "w-[300px] h-[300px]", duration: 25 },
    { name: "Earth", size: "w-8 h-8", color: "bg-blue-500", orbit: "w-[400px] h-[400px]", duration: 30 },
    { name: "Mars", size: "w-7 h-7", color: "bg-red-500", orbit: "w-[500px] h-[500px]", duration: 35 },
    { name: "Jupiter", size: "w-12 h-12", color: "bg-orange-300", orbit: "w-[600px] h-[600px]", duration: 40 },
    { name: "Saturn", size: "w-11 h-11", color: "bg-yellow-300", orbit: "w-[700px] h-[700px]", duration: 45 },
    { name: "Uranus", size: "w-10 h-10", color: "bg-cyan-300", orbit: "w-[800px] h-[800px]", duration: 50 },
    { name: "Neptune", size: "w-10 h-10", color: "bg-blue-300", orbit: "w-[900px] h-[900px]", duration: 55 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* Sun */}
        <div className="absolute w-16 h-16 bg-yellow-500 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        
        {/* Planets */}
        {planets.map((planet, index) => (
          <motion.div
            key={planet.name}
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-600/20 ${planet.orbit}`}
            style={{ rotate: index * 45 }}
          >
            <motion.div
              className={`absolute ${planet.size} ${planet.color} rounded-full`}
              animate={{ rotate: 360 }}
              transition={{
                duration: planet.duration,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ left: "100%", transform: "translateX(-50%)" }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};