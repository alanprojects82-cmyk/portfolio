"use client";

import { useEffect, useRef, useState } from "react";

function Counter({
  value,
  start,
  suffix = "",
  prefix = "",
}: {
  value: number;
  start: boolean;
  suffix?: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 1200;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = value / steps;

    const interval = setInterval(() => {
      current += increment;

      if (current >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [start, value]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function Trust() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStart(true);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const items = [
    { value: 50, label: "Proyectos realizados", prefix: "+", suffix: "" },
    { value: 4, label: "Años de experiencia", prefix: "+", suffix: "" },
    { value: 100, label: "Atención personalizada", prefix: "", suffix: "%" },
    { value: 5, label: "Servicios diferentes para tí", prefix: "+", suffix: "" },
  ];

  return (
    <section ref={ref} className="w-full flex justify-center py-14">
      <div className="w-full max-w-6xl px-4">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center">

              <div className="text-4xl md:text-5xl font-semibold tracking-tight leading-none text-[#C8A24A]">
                <Counter
                  value={item.value}
                  start={start}
                  prefix={item.prefix}
                  suffix={item.suffix}
                />
              </div>

              <div className="mt-2 text-sm md:text-base text-white/70 tracking-wide">
                {item.label}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
