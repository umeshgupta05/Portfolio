import { motion } from "framer-motion";

export const SolarSystem = () => {
  const planets = [
    { name: "Mercury", size: "w-2 h-2", color: "bg-gray-400", orbit: "w-[120px] h-[100px]", duration: 8, angle: 7 },
    { name: "Venus", size: "w-3 h-3", color: "bg-yellow-600", orbit: "w-[180px] h-[150px]", duration: 22, angle: 3.4 },
    { name: "Earth", size: "w-4 h-4", color: "bg-blue-500", orbit: "w-[240px] h-[200px]", duration: 36.5, angle: 0 },
    { name: "Mars", size: "w-3 h-3", color: "bg-red-500", orbit: "w-[300px] h-[250px]", duration: 69, angle: 1.9 },
    { name: "Jupiter", size: "w-7 h-7", color: "bg-orange-300", orbit: "w-[380px] h-[320px]", duration: 433, angle: 1.3 },
    { name: "Saturn", size: "w-6 h-6", color: "bg-yellow-300", orbit: "w-[460px] h-[390px]", duration: 1075, angle: 2.5 },
    { name: "Uranus", size: "w-5 h-5", color: "bg-cyan-300", orbit: "w-[520px] h-[440px]", duration: 3066, angle: 0.8 },
    { name: "Neptune", size: "w-5 h-5", color: "bg-blue-300", orbit: "w-[580px] h-[490px]", duration: 6019, angle: 1.8 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* Sun */}
        <div className="absolute w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-orange-500/50" />
        
        {/* Orbits and Planets */}
        {planets.map((planet) => (
          <motion.div
            key={planet.name}
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${planet.orbit}`}
            style={{ transform: `rotate(${planet.angle}deg)` }}
          >
            <div className="absolute w-full h-full border border-gray-600/10 rounded-[100%]" />
            <motion.div
              className={`absolute ${planet.size} ${planet.color} rounded-full shadow-md`}
              animate={{
                rotate: 360,
                x: [-50, 50, -50], // Creates elliptical motion
                y: [-20, 20, -20], // Creates elliptical motion
              }}
              transition={{
                rotate: {
                  duration: planet.duration,
                  repeat: Infinity,
                  ease: "linear"
                },
                x: {
                  duration: planet.duration,
                  repeat: Infinity,
                  ease: "linear"
                },
                y: {
                  duration: planet.duration,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
              style={{
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)"
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};