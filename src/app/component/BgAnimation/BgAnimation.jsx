'use client';
import React, { useEffect, useState } from 'react';
import styles from './bganimation.module.css'

export default function BgAnimation() {
    const [positions, setPositions] = useState([
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
    ]);

    const randomizePositions = () => {
        setPositions([ 
            { x: Math.random() * window.innerWidth + 200, y: Math.random() * window.innerHeight + 900 },
            { x: Math.random() * window.innerWidth , y: Math.random() * window.innerHeight + 400 },
            { x: Math.random() * window.innerWidth + 200, y: Math.random() * window.innerHeight + 600 },
        ]);
    };
    useEffect(() => {
        const interval = setInterval(randomizePositions, 3000);
        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);
    return (
        <>
            {positions.map((pos, index) => (
                <div
                    key={index}
                    className={`${styles.element} ${index === 1 ? styles.red : styles.blue}`}
                    style={{
                        transform: `translate(${pos.x}px, ${pos.y}px)`,
                    }}
                ></div>
            ))}
        </>
    )
}
