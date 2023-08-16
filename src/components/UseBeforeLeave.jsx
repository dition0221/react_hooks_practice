// 커서가 윈도우 페이지 탭을 벗어날 때 실행되는 function

import { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
  const handle = (event) => {
    const { clientY } = event;
    // 커서가 위로 벗어날 때만 적용
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    if (typeof onBefore !== "function") {
      return;
    }
    document.addEventListener("mouseleave", handle);
    return () => {
      document.removeEventListener("mouseleave", handle);
    };
  }, []);
};

export default function App() {
  const begForLite = () => console.log("plz don't leave");
  useBeforeLeave(begForLite);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}
