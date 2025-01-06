export const SpaceBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="stars-1"></div>
      <div className="stars-2"></div>
      <div className="stars-3"></div>
      <div className="planet" style={{ top: '10%', right: '15%' }}></div>
      <div className="rocket"></div>
      <div className="satellite" style={{ top: '30%', left: '20%' }}></div>
    </div>
  );
};