import React, { useRef } from 'react';
import { gsap, useGSAP, prefersReducedMotion } from '../../src/lib/gsap';

interface GsapButtonProps {
  children: React.ReactNode;
  className?: string;
  scaleOnHover?: number;
  elasticity?: number;
  onClick?: (e: React.MouseEvent) => void;
  as?: 'button' | 'div' | 'span';
}

export const GsapButton: React.FC<GsapButtonProps> = ({
  children,
  className = '',
  scaleOnHover = 1.03,
  onClick,
  as: Component = 'div',
}) => {
  const btnRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = btnRef.current;
      if (!el || prefersReducedMotion()) return;

      const enterAnim = () => {
        gsap.to(el, {
          scale: scaleOnHover,
          duration: 0.35,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      };

      const leaveAnim = () => {
        gsap.to(el, {
          scale: 1,
          duration: 0.45,
          ease: 'elastic.out(1, 0.4)',
          overwrite: 'auto',
        });
      };

      const downAnim = () => {
        gsap.to(el, {
          scale: 0.97,
          duration: 0.15,
          ease: 'power1.out',
          overwrite: 'auto',
        });
      };

      el.addEventListener('mouseenter', enterAnim);
      el.addEventListener('mouseleave', leaveAnim);
      el.addEventListener('mousedown', downAnim);
      el.addEventListener('mouseup', enterAnim);
      el.addEventListener('focus', enterAnim);
      el.addEventListener('blur', leaveAnim);

      return () => {
        el.removeEventListener('mouseenter', enterAnim);
        el.removeEventListener('mouseleave', leaveAnim);
        el.removeEventListener('mousedown', downAnim);
        el.removeEventListener('mouseup', enterAnim);
        el.removeEventListener('focus', enterAnim);
        el.removeEventListener('blur', leaveAnim);
      };
    },
    { scope: btnRef, dependencies: [scaleOnHover] }
  );

  return (
    <Component
      ref={btnRef as any}
      onClick={onClick}
      className={`inline-block ${className}`}
    >
      {children}
    </Component>
  );
};

export default GsapButton;
