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
  const aboutMeTabBtnRef = useRef();

  const handleResize = () => {
    const updatedWidth = getComputedStyle(aboutMeTabBtnRef.current).width;
    if (updatedWidth) {
      setCurrentTab((curr) => {
        return {
          ...curr,
          width: updatedWidth,
        };
      });
      buttonBackgroundRef.current.style.width = updatedWidth;
    }
  };

  useEffect(() => {
    if (aboutMeTabBtnRef.current) {
      aboutMeTabBtnRef.current.click();
    }
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (buttonBackgroundRef.current) {
      buttonBackgroundRef.current.style.width = currentTab.width || "0px";
      buttonBackgroundRef.current.style.tranform = `translateX(1000px)`;
    }
  }, [currentTab.tab]);

  return (
    <SectionTemplate className="w-full pl-[14px] pb-4">
      <div className="bg-primary p-1.5 rounded-[23px] flex justify-between gap-5 mr-10 relative fade-outline-b">
        {Object.keys(tabs).map((tab, i) => (
          <div
            key={i}
            {...(tabs[tab] === tabs.aboutMe ? { ref: aboutMeTabBtnRef } : {})}
            className={`${
              currentTab.tab !== tabs[tab] && "text-[#A3ADB2]"
            } text-center py-[10px] text-lg font-normal font-poppins rounded-2xl cursor-pointer w-full relative z-10 transition-colors duration-500 tab-div`}
            onClick={(e) => {
              setCurrentTab({
                tabNo: i,
                tab: tabs[tab],
                width: getComputedStyle(e.target).width,
              });
            }}
          >
            <p className="relative z-30">{tabs[tab]}</p>
            {currentTab.tab !== tabs[tab] && (
              <div className="absolute gradient-2 h-full top-0 rounded-2xl z-0 w-0 transition-all duration-300"></div>
            )}
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

      <div className="h-[185px] overflow-auto text-xl font-pjs font-normal text-[#969696] pr-10 leading-[26px] pt-7">
        {currentTab.tab === tabs.aboutMe && (
          <div>
            <p>
              Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
              working at this awesome company for 3 years now.
              <br />
              <br />I was born and raised in Albany, NY& have been living in
              Santa Carla for the past 10 years my wife Tiffany and my 4 year
              old twin daughters- Emma and Ella. Both of them are just starting
              school, so my calender is usually blocked between 9-10 AM. This is
              a...
            </p>
            <br />
            <p>
              Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
              working at this awesome company for 3 years now.
              <br />
              <br />I was born and raised in Albany, NY& have been living in
              Santa Carla for the past 10 years my wife Tiffany and my 4 year
              old twin daughters- Emma and Ella. Both of them are just starting
              school, so my calender is usually blocked between 9-10 AM. This is
              a...
            </p>
          </div>
        )}
        {currentTab.tab === tabs.experiences && <p>Experiences...</p>}
        {currentTab.tab === tabs.recommended && <p>Recommended...</p>}
      </div>
    </SectionTemplate>
  );
}
