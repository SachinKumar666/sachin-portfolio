import React, { useState, useEffect } from 'react';
import './custom-cursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorSize, setCursorSize] = useState(15);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e) => {
      const target = e.target;
      
      // Detect different types of elements
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.closest('.hoverable') ||
        target.textContent.trim().length > 0
      ) {
        setIsHovered(true);
        setCursorSize(30);
      }
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      setCursorSize(15);
    };

    // Add event listeners to the entire document
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    // Cleanup event listeners
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      className="custom-cursor" 
      style={{
        left: `${position.x}px`, 
        top: `${position.y}px`,
        width: `${cursorSize}px`,
        height: `${cursorSize}px`,
        backgroundColor: isHovered ? '#fd5b20' : '#FF5722',
        mixBlendMode: isHovered ? 'difference' : 'normal',
        transition: 'width 0.3s ease, height 0.3s ease, background-color 0.3s ease'
      }}
    />
  );
};

export default CustomCursor;