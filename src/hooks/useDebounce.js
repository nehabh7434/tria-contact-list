import { useRef, useEffect } from "react";

export default function useDebounce(value, delay = 300, cb) {
  const timer = useRef(null);
  useEffect(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      cb && cb(value);
    }, delay);
    return () => clearTimeout(timer.current);
  }, [value, delay, cb]);
}
