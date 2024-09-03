import SectionTemplate from "./SectionTemplate";
import { tabs } from "../constants";
import { useEffect, useRef, useState } from "react";

export default function TabsSection() {
  const [currentTab, setCurrentTab] = useState({
    tabNo: 0,
    tab: "",
    width: "",
  });
  const buttonBackgroundRef = useRef();
  const sliderBtnRef = useRef();

  const handleResize = () => {
    setCurrentTab({ tabNo: 0, tab: "", width: "" });
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (buttonBackgroundRef.current) {
      buttonBackgroundRef.current.style.width = currentTab.width || "0px";
      console.log("Hey");
      buttonBackgroundRef.current.style.tranform = `translateX(1000px)`;
    }
  }, [currentTab.tab]);

  return (
    <SectionTemplate className="space-y-7 w-full pl-[14px] pb-4">
      <div className="bg-primary p-1.5 rounded-[23px] flex justify-between gap-5 mr-10 relative">
        {Object.keys(tabs).map((tab, i) => (
          <div
            key={i}
            className={`${
              currentTab.tab !== tabs[tab] && "text-[#A3ADB2]"
            } text-center py-[10px] text-lg font-normal font-poppins rounded-2xl cursor-pointer w-full relative z-10 transition-colors duration-500`}
            onClick={(e) => {
              setCurrentTab({
                tabNo: i,
                tab: tabs[tab],
                width: getComputedStyle(e.target).width,
              });
            }}
          >
            {tabs[tab]}
          </div>
        ))}
        <div
          className="bg-[#28292F] rounded-2xl absolute h-[calc(100%-12px)] transition-tranform duration-500"
          ref={buttonBackgroundRef}
          style={{
            boxShadow:
              "-8.43px -16.87px 50.6px -16.87px rgba(72, 91, 113, 1), 13.49px 16.87px 67.47px 8.43px rgba(10, 10, 10, 1)",
            transform: `translateX(${
              (parseFloat(currentTab.width) + 20) * currentTab.tabNo
            }px)`,
          }}
        ></div>
      </div>

      <div className="h-[135px] overflow-auto text-xl font-pjs font-normal text-[#969696] pr-10 leading-[26px]">
        <p>
          Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
          working at this awesome company for 3 years now.
          <br />
          <br />I was born and raised in Albany, NY& have been living in Santa
          Carla for the past 10 years my wife Tiffany and my 4 year old twin
          daughters- Emma and Ella. Both of them are just starting school, so my
          calender is usually blocked between 9-10 AM. This is a...
        </p>
        <br />
        <p>
          Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
          working at this awesome company for 3 years now.
          <br />
          <br />I was born and raised in Albany, NY& have been living in Santa
          Carla for the past 10 years my wife Tiffany and my 4 year old twin
          daughters- Emma and Ella. Both of them are just starting school, so my
          calender is usually blocked between 9-10 AM. This is a...
        </p>
      </div>
    </SectionTemplate>
  );
}
