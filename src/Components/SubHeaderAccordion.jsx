import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const SubHeaderAccordion = ({ isOpen }) => {
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
    <div ref={subHeader}>
      <div>Sub Accordian</div>
      <div>Sub Accordian</div>
      <div>Sub Accordian</div>
      <div>Sub Accordian</div>
      <div>Sub Accordian</div>
      <div>Sub Accordian</div>
      <div>Sub Accordian</div>
      <div>Sub Accordian</div>
      <div>Sub Accordian</div>
      <div>Sub Accordian</div>
    </div>
  );
};

export default SubHeaderAccordion;
