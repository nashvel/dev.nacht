import { useLayoutEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Rig = ({ onZoomFinished }) => {
  const { camera, controls } = useThree();

  useLayoutEffect(() => {
    // Set initial camera position before animation
    camera.position.set(0, 0.5, 10);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.model-section',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        onUpdate: (self) => {
          if (onZoomFinished) {
            onZoomFinished(self.progress >= 0.99);
          }
        },
        onToggle: (self) => {
          if (controls) controls.enabled = !self.isActive;
        },
      },
    });

    // Animate TO the zoomed-in position
    tl.to(camera.position, {
      x: 0,
      y: 0.2,
      z: 3.5,
      ease: 'power1.inOut',
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [camera, controls, onZoomFinished]);

  return null;
};

export default Rig;
