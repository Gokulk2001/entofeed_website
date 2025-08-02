"use client";

import { useState, useEffect, useRef, ReactNode } from "react";

interface AnimatedComponentProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-in" | "slide-in-up";
  delay?: number;
}

const AnimatedComponent = ({
  children,
  className,
  animation = "fade-in",
  delay = 0,
}: AnimatedComponentProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const getAnimationClass = () => {
    if (!isVisible) {
      return "opacity-0";
    }
    switch (animation) {
      case "fade-in":
        return "animate-in fade-in";
      case "slide-in-up":
        return "animate-in slide-in-from-bottom";
      default:
        return "";
    }
  };

  return (
    <div
      ref={ref}
      className={`${className} transition-opacity duration-1000 ease-in-out ${getAnimationClass()}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedComponent;
