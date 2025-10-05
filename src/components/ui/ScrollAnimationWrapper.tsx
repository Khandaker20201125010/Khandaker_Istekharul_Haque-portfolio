"use client";

import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

export default function ScrollAnimationWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 800,  // animation duration
      once: true,      // animate only once
      easing: 'ease-in-out',
    });

    AOS.refresh();     // refresh to detect dynamically rendered content
  }, []);

  return <>{children}</>;
}
