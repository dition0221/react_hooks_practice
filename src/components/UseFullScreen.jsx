// 전체화면/되돌리기

import { useRef } from "react";

const useFullScreen = (callback) => {
  const element = useRef();
  const runCallback = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      runCallback(true);
    }
  };
  const exitFull = () => {
    const checkFullScreen = document.fullscreenElement;
    if (checkFullScreen !== null) {
      document.exitFullscreen();
      runCallback(false);
    }
  };
  return { element, triggerFull, exitFull };
};

export default function App() {
  const onFullScreen = (isFull) => {
    console.log(isFull ? "We are full" : "we are small");
  };
  const { element, triggerFull, exitFull } = useFullScreen(onFullScreen);
  return (
    <div>
      <div ref={element}>
        <img src="https://cdn.gamemeca.com/data_center/267/660/20230624182505.jpg" />
        <button onClick={exitFull}>Exit FullScreen</button>
      </div>
      <button onClick={triggerFull}>Make FullScreen</button>
    </div>
  );
}
