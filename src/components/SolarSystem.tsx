
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export const SolarSystem = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);
    
    // Sun
    const sunGeometry = new THREE.SphereGeometry(5, 32, 32);
    const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffcc00 });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);
    
    // Planets
    const createPlanet = (radius: number, color: number, distance: number, speed: number) => {
      const planetGeometry = new THREE.SphereGeometry(radius, 32, 32);
      const planetMaterial = new THREE.MeshBasicMaterial({ color });
      const planet = new THREE.Mesh(planetGeometry, planetMaterial);
      
      // Create orbit
      const orbit = new THREE.Object3D();
      scene.add(orbit);
      orbit.add(planet);
      
      // Position planet
      planet.position.x = distance;
      
      return { planet, orbit, speed };
    };
    
    const planets = [
      createPlanet(1, 0x3366ff, 10, 0.01),
      createPlanet(1.5, 0x66ff33, 15, 0.008),
      createPlanet(1.2, 0xff3366, 20, 0.006),
      createPlanet(1.7, 0x33ffcc, 25, 0.004),
    ];
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate sun
      sun.rotation.y += 0.005;
      
      // Rotate planets in orbit
      planets.forEach(({ orbit, speed }) => {
        orbit.rotation.y += speed;
      });
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose resources
      planets.forEach(({ planet }) => {
        planet.geometry.dispose();
        (planet.material as THREE.Material).dispose();
      });
      
      sun.geometry.dispose();
      (sun.material as THREE.Material).dispose();
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
    />
  );
};
