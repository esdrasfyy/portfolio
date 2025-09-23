import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { useInView } from "framer-motion";

interface TextTubeProps {
  text: string;
  color?: string;
  fontSize?: string;
  className?: string;
  finalPosition?: string;
}

export const TextTube = ({ text, color = "white", fontSize = "18vw", className = "", finalPosition = "0" }: TextTubeProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tubeRef = useRef<HTMLDivElement>(null);
  const finalWrapRef = useRef<HTMLDivElement>(null);
  const cloneRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(containerRef, { once: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!finalWrapRef.current || !isInView) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!finalWrapRef.current) return;
      
      const rect = finalWrapRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const sxPos = ((e.clientX - centerX) / rect.width) * 100;
      const syPos = ((e.clientY - centerY) / rect.height) * 100;
      
      gsap.to(finalWrapRef.current, {
        rotationY: 0.02 * sxPos,
        rotationX: -0.02 * syPos,
        transformOrigin: "center center -800",
        ease: "expo.out",
        duration: 1.5,
        y: -window.innerHeight / 6 + parseInt(finalPosition),
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isInView, finalPosition]);

  useEffect(() => {
    if (!tubeRef.current || !finalWrapRef.current || !cloneRef.current || !isInView || hasAnimated) return;

    const finalClone = cloneRef.current.cloneNode(true) as HTMLElement;
    finalClone.classList.add("final");
    finalWrapRef.current.appendChild(finalClone);

    for (let i = 0; i < 2; i++) {
      const newClone = cloneRef.current.cloneNode(true) as HTMLElement;
      tubeRef.current.appendChild(newClone);

      cloneRef.current.classList.add("line");
      newClone.classList.add(`line${i + 2}`);
    }
    cloneRef.current.classList.add("line1");

    const line1 = tubeRef.current.querySelector(".line1") as HTMLElement;
    const line2 = tubeRef.current.querySelector(".line2") as HTMLElement;
    const line3 = tubeRef.current.querySelector(".line3") as HTMLElement;
    const final = finalWrapRef.current.querySelector(".final") as HTMLElement;

    if (!line1 || !line2 || !line3 || !final) {
      return;
    }

    let splitLine1, splitLine2, splitLine3, splitFinal;

    try {
      splitLine1 = new SplitType(line1, { types: "chars" });
      splitLine2 = new SplitType(line2, { types: "chars" });
      splitLine3 = new SplitType(line3, { types: "chars" });
      splitFinal = new SplitType(final, { types: "chars" });
    } catch (error) {
      return;
    }

    const width = window.innerWidth;
    const height = window.innerHeight;
    const depth = -width / 8;
    const tOrigin = `50% 50% ${depth}`;

    const tl = gsap.timeline();
    tl.set(containerRef.current, { visibility: "visible" })
      .set([line1, line2, line3, final], {
        transformStyle: "preserve-3d",
        perspective: 700,
      })
      .fromTo(
        splitLine1.chars,
        { rotationX: -90 },
        {
          rotationX: 90,
          transformOrigin: tOrigin,
          ease: "none",
          stagger: 0.08,
          duration: 0.9,
        }
      )
      .fromTo(
        splitLine2.chars,
        { rotationX: -90 },
        {
          rotationX: 90,
          transformOrigin: tOrigin,
          ease: "none",
          stagger: 0.08,
          duration: 0.9,
        },
        0.45
      )
      .fromTo(
        splitLine3.chars,
        { rotationX: -90 },
        {
          rotationX: 90,
          transformOrigin: tOrigin,
          ease: "none",
          stagger: 0.08,
          duration: 0.9,
        },
        0.9
      )
      .fromTo(
        splitFinal.chars,
        { rotationX: -90, opacity: 0 },
        {
          rotationX: 0,
          opacity: 1,
          transformOrigin: tOrigin,
          ease: "expo.out",
          stagger: 0.06,
          duration: 1.6,
        },
        1.6
      )
      .fromTo(final, { y: height / 6 }, { y: -height / 6 + parseInt(finalPosition), ease: "power4.out", duration: 5 }, 2.0)
      .call(() => setHasAnimated(true));

    return () => {
      gsap.killTweensOf([tubeRef.current, finalWrapRef.current]);
      if (line1) gsap.killTweensOf(line1);
      if (line2) gsap.killTweensOf(line2);
      if (line3) gsap.killTweensOf(line3);
      if (final) gsap.killTweensOf(final);
    };
  }, [isInView, finalPosition, hasAnimated]);

  return (
    <div className={`container ${className}`} ref={containerRef}>
      <div className="tube" ref={tubeRef}>
        <h1
          className="clone"
          ref={cloneRef}
          style={{
            color: color,
            fontSize: fontSize,
          }}
        >
          {text}
        </h1>
      </div>
      <div className="final__wrap" ref={finalWrapRef}></div>
    </div>
  );
};
