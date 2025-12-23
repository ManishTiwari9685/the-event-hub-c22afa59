import { useEffect, useState, useRef } from 'react';

interface StatCardProps {
  number: string;
  label: string;
  delay?: number;
}

const StatCard = ({ number, label, delay = 0 }: StatCardProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const numericValue = parseInt(number.replace(/\D/g, ''));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, numericValue]);

  return (
    <div
      ref={ref}
      className="text-center animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground">
        {count}
        {number.includes('+') && '+'}
      </div>
      <div className="text-primary-foreground/80 mt-2 text-sm md:text-base">{label}</div>
    </div>
  );
};

export default StatCard;
