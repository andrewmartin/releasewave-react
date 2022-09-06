import { useState, useLayoutEffect, ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
const useIsomorphicLayoutEffect =
  typeof window !== `undefined` ? useLayoutEffect : useEffect;
export default useIsomorphicLayoutEffect;

function createWrapperAndAppendToBody(wrapperId: string) {
  const wrapperElement = document.createElement(`div`);
  wrapperElement.setAttribute(`id`, wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
}

interface PortalProps {
  children: ReactNode;
  wrapperId?: string;
}

export const ReactPortal = (props: PortalProps) => {
  const { children, wrapperId = `react-portal-wrapper` } = props;
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(
    null,
  );

  useIsomorphicLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    // if element is not found with wrapperId or wrapperId is not provided,
    // create and append to body
    if (!element) {
      element = createWrapperAndAppendToBody(wrapperId);
    }
    setWrapperElement(element);
  }, [wrapperId]);

  // wrapperElement state will be null on the very first render.
  if (wrapperElement === null) return null;

  return createPortal(children, wrapperElement);
};
