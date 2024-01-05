import { useEffect, useRef } from "react";

interface UseInterval {
  (callback: () => void, interval: number): void;
}

export const useInterval: UseInterval = (callback, interval) => {
  const savedCallback = useRef<(() => void) | null>(null);
  // After every render, save the latest callback into our ref.
  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }

    let id = setInterval(tick, interval);
    return () => clearInterval(id);
  }, [interval]);
};
