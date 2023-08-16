// API 등으로 불러온 여러가지 데이터가 있을 때, 각 항목에 버튼을 만들어
// 버튼을 클릭 시 해당 항목에 대한 데이터가 보이도록하는 기능

import { useState } from "react";

// dummy Data
const content = [
  {
    tab: "Section 1",
    content:
      "Time crumbles things; everything grows old under the power of Time and is forgotten through the lapse of Time.",
  },
  {
    tab: "Section 2",
    content:
      "I also became close to nature, and am now able to appreciate the beauty with which this world is endowed.",
  },
];

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

export default function App() {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section, index) => (
        <button key={index} onClick={() => changeItem(index)}>
          {section.tab}
        </button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}
