import React, { useState, useEffect, useRef } from "react";

const lerp = (start, end, t) => start + (end - start) * t;

const CursorDot = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const dotRef = useRef(null);
  const dotPosition = useRef({ x: 0, y: 0 });
  const requestRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const dot = dotRef.current;
    const smoothFactor = 0.1; // Adjust for smoothness

    const updateDotPosition = () => {
      if (dot) {
        // Interpolate dot position towards cursor position
        dotPosition.current.x = lerp(
          dotPosition.current.x,
          cursorPosition.x,
          smoothFactor
        );
        dotPosition.current.y = lerp(
          dotPosition.current.y,
          cursorPosition.y,
          smoothFactor
        );

        // Apply updated position to the dot
        dot.style.transform = `translate(-50%, -50%) translate(${dotPosition.current.x}px, ${dotPosition.current.y}px)`;
        // dot.style.mixBlendMode = "diffrence";
        // console.log(dot.style);
        // Request next animation frame
        requestRef.current = requestAnimationFrame(updateDotPosition);
      }
    };

    updateDotPosition();

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [cursorPosition]);

  useEffect(() => {
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    // Add event listeners to the document to detect hover state
    document.querySelectorAll("a, button, .hoverable").forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.querySelectorAll("a, button, .hoverable").forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      ref={dotRef}
      style={{
        position: "fixed",
        width: "40px",
        height: "40px",
        backgroundColor: isHovered ? "black" : "black",
        background: "white",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 9999,
        transformOrigin: "center",
        mixBlendMode: "difference",
        willChange: "transform, background-color",
        transition: "transform 0.1s ease-out, background-color 0.1s ease-out",
        transform: isHovered ? "scale(1.5)" : "scale(1)", // Scale up on hover
      }}
    />
  );
};

export default CursorDot;
