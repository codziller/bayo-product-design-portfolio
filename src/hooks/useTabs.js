import { useEffect, useMemo, useRef, useState } from "react";

export const useTabs = ({ tabs }) => {
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState(tabs?.[0]?.title);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(0);
  const activeTabIndex = tabs?.findIndex(({ title }) => title === activeTab);

  const handleSlide = () => {
    const width = containerRef?.current?.getBoundingClientRect()?.width;
    const slideContainerWidth = width / tabs.length;
    const slideWidth = slideContainerWidth;
    const slidePosition = slideContainerWidth * activeTabIndex;
    setSliderWidth(slideWidth);
    setSliderPosition(slidePosition);
  };

  useEffect(() => {
    handleSlide();
  }, [activeTab, handleSlide]);

  const tabsComponent = (onClick) => (
    <div className="w-fit h-fit px-0.5 bg rounded-[50px] bg-blue-50">
      <div
        className="flex flex-col justify-between items-center w-fit relative"
        ref={containerRef}
      >
        <div className="flex justify-between items-center w-fit">
          {tabs.map(({ title }, index) => (
            <button
              key={title + index}
              className={`z-[9] w-[165px] px-3 h-[40px] text-center whitespace-nowrap text-[15px] hover:bg-grey-lighter transition-all duration-500 ease-in-out rounded-t-lg cursor-pointer ${
                title === activeTab ? "text-grey-dark" : "text-grey-blue"
              }`}
              onClick={() => {
                setActiveTab(title);
                onClick && onClick(index);
              }}
            >
              <span className="">{title} </span>
            </button>
          ))}
        </div>

        <div
          className=" absolute left-0 top-[4px] h-[32px] bg-white rounded-[50px] transition-all duration-500 ease-in-out shadow-[0px_2px_4px_rgba(0,0,0,0.1)]"
          style={{
            width: `${sliderWidth}px`,
            transform: `translateX(${sliderPosition}px)`,
          }}
        />
      </div>
    </div>
  );

  return {
    activeTabIndex,
    tabsComponent,
    setActiveTab,
  };
};
