export const SpaceBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="stars-1"></div>
      <div className="stars-2"></div>
      <div className="stars-3"></div>
      <div className="planet" style={{ top: '10%', right: '15%' }}></div>
      <div className="planet" style={{ top: '60%', left: '10%', transform: 'scale(0.6)' }}></div>
      <div className="rocket"></div>
      <div className="satellite" style={{ top: '30%', left: '20%' }}></div>
      <div className="satellite" style={{ top: '70%', right: '25%', transform: 'scale(0.8) rotate(45deg)' }}></div>
      <div className="ufo" style={{ top: '45%', right: '30%' }}></div>
      <div className="shooting-star" style={{ top: '15%', left: '40%' }}></div>
      <div className="shooting-star" style={{ top: '75%', right: '20%' }}></div>
    </div>
  );
};