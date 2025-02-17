 'use client';
import React, { useEffect, useState, useCallback } from 'react';
import styles from './bganimation.module.css';

export default function BgAnimation() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  const [positions, setPositions] = useState([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);

  // Handle window resize
  const handleResize = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  const randomizePositions = useCallback(() => {
    const padding = 100; // Padding to prevent elements from going too close to the edges
    setPositions(
      Array(3).fill(null).map(() => ({
        x: Math.random() * (windowSize.width - padding * 2) + padding,
        y: Math.random() * (windowSize.height - padding * 2) + padding,
      }))
    );
  }, [windowSize]);

  useEffect(() => {
    // Initial position setup
    randomizePositions();

    // Set up resize listener
    window.addEventListener('resize', handleResize);
    
    // Set up animation interval
    const interval = setInterval(randomizePositions, 3000);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
    };
  }, [handleResize, randomizePositions]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {positions.map((pos, index) => (
        <div
          key={index}
          className={`${styles.element} ${index === 1 ? styles.red : styles.blue}`}
          style={{
            transform: `translate(${pos.x}px, ${pos.y}px)`,
          }}
        />
      ))}
    </div>
  );
}