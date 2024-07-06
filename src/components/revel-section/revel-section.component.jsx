import React, { useEffect, useRef } from 'react';
import { useVisibilityHook } from 'react-observer-api';

const RevelSection = ({ children }) => {
  const { setElement, isVisible } = useVisibilityHook({
    root: null,
    rootMargin: '0px',
    threshold: 0,
    always: false,
  });
  const parentEl = useRef(null);

  console.log(children);

  useEffect(() => {
    // console.log(isVisible);
    // console.log(parentEl);
    if (!isVisible || !parentEl.current) return;

    // console.log(parentEl.current);
    parentEl.current.style.opacity = 1;
    parentEl.current.style.transform = 'translateY(0)';
  }, [isVisible]);

  return (
    <div ref={setElement}>
      {React.Children.map(children, (child, i) => {
        const currentEl = React.cloneElement(child, {
          ref: parentEl,
          className: `${child.props?.className} section section--hidden`,
        });

        console.log(child);
        return currentEl;
      })}
    </div>
  );
};

export default RevelSection;
