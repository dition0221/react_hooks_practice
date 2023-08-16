// component의 click event listener를 생성/제거 하는 hook

import { useEffect, useRef } from "react";

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return typeof onClick !== "function" ? element : undefined;
};

export default function App() {
  const sayHello = () => console.log("Say Hello !");
  const title = useClick(sayHello);
  return (
    <div>
      <h1 ref={title}>Hi</h1>
    </div>
  );
}
