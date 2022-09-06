import {
  LegacyRef,
  MouseEventHandler,
  ReactNode,
  Ref,
  RefObject,
  useEffect,
  useRef,
} from 'react';

type OnClick = (args?: any) => any;

const useOutsideAlerter = (
  ref: RefObject<HTMLDivElement>,
  callback: OnClick,
) => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      const target = event.target;

      if (ref.current && !ref.current.contains(target as Node)) {
        callback();
      }
    }

    // Bind the event listener
    document.addEventListener(`mousedown`, handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener(`mousedown`, handleClickOutside);
    };
  }, [callback, ref]);
};

interface OutsideClick {
  show: boolean;
  children: ReactNode;
  onClick: OnClick;
}

/**
 * Component that alerts if you click outside of it
 */
export const OutsideClick = ({ children, show, onClick }: OutsideClick) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, onClick);

  if (!show) {
    return null;
  }

  return <div ref={wrapperRef}>{children}</div>;
};
