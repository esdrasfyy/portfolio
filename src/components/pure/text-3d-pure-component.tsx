import React, { useEffect, useRef } from 'react';

interface Text3DPureProps {
  text: string;
  className?: string;
}

export const Text3DPure: React.FC<Text3DPureProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const tube = container.querySelector('.tube') as HTMLElement;
    const finalWrap = container.querySelector('.final__wrap') as HTMLElement;
    const clone = container.querySelector('.clone') as HTMLElement;

    if (!tube || !finalWrap || !clone) return;

    // Create the cloned nodes, append and add classes for required HTML structure
    const finalClone = clone.cloneNode(true) as HTMLElement;
    finalWrap.appendChild(finalClone);
    finalClone.classList.add('final');

    // Create line elements
    for (let i = 0; i < 2; i++) {
      const newClone = clone.cloneNode(true) as HTMLElement;
      const lineClass = `line${i + 2}`;
      tube.appendChild(newClone);
      clone.classList.add('line');
      newClone.classList.add('line', lineClass);
    }
    clone.classList.add('line1');

    // Show container
    container.style.visibility = 'visible';

    // Get cloned elements
    const lines = container.querySelectorAll('.line');
    const line1 = container.querySelector('.line1') as HTMLElement;
    const line2 = container.querySelector('.line2') as HTMLElement;
    const line3 = container.querySelector('.line3') as HTMLElement;
    const final = container.querySelector('.final') as HTMLElement;

    // Split text characters manually
    function splitText(element: HTMLElement) {
      const text = element.textContent || '';
      const chars: HTMLElement[] = [];
      for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i];
        span.classList.add('char');
        chars.push(span);
      }
      element.innerHTML = '';
      chars.forEach(char => element.appendChild(char));
      return chars;
    }

    const splitLine1 = splitText(line1);
    const splitLine2 = splitText(line2);
    const splitLine3 = splitText(line3);
    const splitFinal = splitText(final);

    // Set up vars
    const animTime = 0.9;
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;
    const depth = -width / 8;
    const tOrigin = `50% 50% ${depth}`;

    // Import GSAP dynamically
    import('gsap').then(({ gsap }) => {
      // Init 3D perspective
      gsap.set([lines, final], { perspective: 700, transformStyle: "preserve-3d" });

      // Animate Timeline
      const linesTL = gsap.timeline();
      linesTL
        .fromTo(splitLine1, animTime, 
          { rotationX: -90 }, 
          { rotationX: 90, ease: "none", transformOrigin: tOrigin }, 
          0.08
        )
        .fromTo(splitLine2, animTime, 
          { rotationX: -90 }, 
          { rotationX: 90, ease: "none", transformOrigin: tOrigin, stagger: 0.08 }, 
          0.45
        )
        .fromTo(splitLine3, animTime, 
          { rotationX: -90 }, 
          { rotationX: 90, ease: "none", transformOrigin: tOrigin, stagger: 0.08 }, 
          0.9
        )
        .fromTo(splitFinal, animTime * 1.8, 
          { rotationX: -90, opacity: 0 }, 
          { rotationX: 0, opacity: 1, ease: "power2.out", transformOrigin: tOrigin, stagger: 0.06 }, 
          1.6
        )
        .fromTo(final, animTime * 5, 
          { y: height / 6 }, 
          { y: -height / 6, ease: "power4.out" }, 
          2.0
        );

      // Mouse move effect
      const handleMouseMove = (e: MouseEvent) => {
        const sxPos = (e.pageX / width * 100 - 50) * 2;
        const syPos = (e.pageY / height * 100 - 50) * 2;
        gsap.to(finalWrap, 3, {
          rotationY: 0.04 * sxPos,
          rotationX: -0.04 * syPos,
          transformOrigin: "center center -800",
          ease: "power2.out"
        });
      };

      window.addEventListener('mousemove', handleMouseMove);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    });
  }, [text]);

  return (
    <div className={`text-3d-pure-container ${className}`} ref={containerRef}>
      <style>{`
        .text-3d-pure-container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          visibility: hidden;
        }

        .tube {
          position: relative;
          width: 100%;
          height: 24vw;
        }

        .line {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          line-height: 1;
          margin: 0;
          letter-spacing: -0.6vw;
          font-size: 18vw;
          white-space: nowrap;
          text-align: center;
        }

        .final__wrap {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .final {
          line-height: 1;
          margin: 0;
          font-size: 13vw;
          letter-spacing: -0.5vw;
          white-space: nowrap;
        }

        .char {
          backface-visibility: hidden;
        }
      `}</style>
      
      <div className="tube">
        <h1 className="clone">{text}</h1>
      </div>
      <div className="final__wrap"></div>
    </div>
  );
};

export default Text3DPure;
