import React, { useRef, useEffect } from 'react';
import { MemoriesCard } from '~/components';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";

// gsap.registerPlugin(ScrollTrigger);

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

function getTotalViewportWidth() {
  return window.innerWidth || document.documentElement.clientWidth;
}


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
    <section className="w-full min-h-[90vh] mt-10 px-8 pb-[10rem]">
      <h3 className="text-5xl">
        Sharing
        <span className="font-[EditorialNew] italic text-6xl"> Memories!</span>
      </h3>
      <p className="font-light text-3xl">
        Upload your NUIT photos and use the hashtag{' '}
        <strong>#nuitblanche</strong> to share!
      </p>

      <div className="w-full mt-10" >
        <div className="flex h-max w-max gap-3" >
          {imageSources.map((src, i) => (
              <MemoriesCard key={i} src={src} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Memories;
