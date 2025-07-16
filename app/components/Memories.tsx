import React, { useRef, useEffect } from 'react';
import { MemoriesCard } from '~/components';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const imageSources = [
  './images/sample1.jpg',
  './images/sample2.jpg',
  './images/sample3.jpg',
  './images/sample4.jpg',
  './images/sample5.jpg',
  './images/sample1.jpg',
  './images/sample2.jpg',
  './images/sample3.jpg',
];

const Memories = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: 'top 80%',
//         end: 'bottom 20%',
//         toggleActions: 'play none none reverse',
//       },
//     });

//     tl.from(cardsRef.current, {
//       y: 50,
//       x: 50,
//       opacity: 0,
//       stagger: 0.15,
//       duration: 1,
//       ease: 'power3.out',
//     });

//     return () => {
//       ScrollTrigger.getById('memories-trigger')?.kill();
//       tl.kill();
//     };
//   }, []);

  return (
    <section className="w-full min-h-[90vh] mt-10 px-8">
      <h3 className="text-5xl">
        Sharing{' '}
        <span className="font-[EditorialNew] italic text-6xl">Memories!</span>
      </h3>
      <p className="font-light text-3xl">
        Upload your NUIT photos and use the hashtag{' '}
        <strong>#nuitblanche</strong> to share!
      </p>

      <div ref={containerRef} className="w-full mt-10 overflow-x-auto">
        <div className="flex gap-4 w-max">
          {imageSources.map((src, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
              className="min-w-[25%]"
            >
              <MemoriesCard src={src} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Memories;
