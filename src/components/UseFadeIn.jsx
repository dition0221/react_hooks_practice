// 자동으로 서서히 나타나도록(fade in) 만듦

import { useEffect, useRef } from "react";

const useFadeIn = (duration = 1, delay = 0) => {
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}`;
      current.style.opacity = 1;
    }
  }, [duration, delay]);
  return { ref: element, style: { opacity: 0 } };
};

export default function App() {
  const fadeInH1 = useFadeIn(3, 2);
  const fadeInP = useFadeIn(5, 3);
  return (
    <div>
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>la la la la la la la la la</p>
    </div>
  );
}
