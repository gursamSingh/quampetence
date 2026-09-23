import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const SubHeaderAccordion = ({ isOpen, subTitles }) => {
  const subHeader = useRef();
  useGSAP(() => {
    if (isOpen) {
      gsap.to(subHeader.current, {
        height: "auto",
        opacity: 1,
        duration: 0.4,
      });
    } else {
      gsap.to(subHeader.current, {
        height: 0,
        opacity: 0,
        duration: 0.4,
      });
    }
  }, [isOpen]);

  return (
    <div ref={subHeader} className="overflow-hidden">
      {subTitles.map((item) => {
        return (
          <div className="w-full">
            {/* inner div */}
            <div className="p-2">
              <div className="ml-6 flex items-center justify-between text-md text-blue-quampetence rounded-none ">
                <div className="flex items-center justify-center">
                <span className="pb-4 pl-2">{item}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SubHeaderAccordion;
