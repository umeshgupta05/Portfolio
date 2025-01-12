import { motion } from "framer-motion";

export const SolarSystem = () => {
  const planets = [
    { name: "Mercury", size: "w-3 h-3", color: "bg-gray-400", orbit: "w-[150px] h-[150px]", duration: 20 },
    { name: "Venus", size: "w-4 h-4", color: "bg-yellow-600", orbit: "w-[200px] h-[200px]", duration: 25 },
    { name: "Earth", size: "w-5 h-5", color: "bg-blue-500", orbit: "w-[250px] h-[250px]", duration: 30 },
    { name: "Mars", size: "w-4 h-4", color: "bg-red-500", orbit: "w-[300px] h-[300px]", duration: 35 },
    { name: "Jupiter", size: "w-8 h-8", color: "bg-orange-300", orbit: "w-[370px] h-[370px]", duration: 40 },
    { name: "Saturn", size: "w-7 h-7", color: "bg-yellow-300", orbit: "w-[440px] h-[440px]", duration: 45 },
    { name: "Uranus", size: "w-6 h-6", color: "bg-cyan-300", orbit: "w-[510px] h-[510px]", duration: 50 },
    { name: "Neptune", size: "w-6 h-6", color: "bg-blue-300", orbit: "w-[580px] h-[580px]", duration: 55 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* Sun */}
        <div className="absolute w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-orange-500/50" />
        
        {/* Orbits and Planets */}
        {planets.map((planet, index) => (
          <motion.div
            key={planet.name}
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-600/10 ${planet.orbit}`}
          >
            <motion.div
              className={`absolute ${planet.size} ${planet.color} rounded-full shadow-md`}
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