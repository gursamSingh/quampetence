import React from "react";
import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SubHeaderAccordion from "./SubHeaderAccordion";

gsap.registerPlugin(useGSAP);

// Onclick I have to expand the specific div and add the subheader accordion

const HeaderAccordion = ({ menu }) => {
  const [openIndex, setOpenIndex] = useState(null); // Created this useState variable to get the index on which the user clicks

  useGSAP(() => {
    menu.forEach((_, index) => {
      const dropdown = document.querySelector(`#dropdown-${index}`);

      if (!dropdown) return;

      if (openIndex === index) {
        gsap.to(dropdown, {
          rotation: 180,
          duration: 0.2,
        });
      } else {
        gsap.to(dropdown, {
          rotation: 0,
          duration: 0.2,
        });
      }
    });
  }, [openIndex]);

  return (
    <div>
      {/* HERE I RAN A MAP OVER THE PROPS ARRAY & FOR EACH ITEM I GOT THE DIV ==> NOW I WANT IF I CLICK ON THE DIV I GET A SUB ACCORDION WITHT THE SUB-TITLES */}

      {/* Here the map also gives the index of the props. so for each index(item) we check if the openItem(div) === index then isOpen is true else false */}
      {menu.map((item, index) => {
        const isOpen = openIndex === index; // This is will give true or false
        return (
          //   main outer div
          <div className="w-full text-blue-quampetence " key={index}>
            {/* inner div */}
            <div
              className="ml-2 mr-2 mb-2 p-2"
              onClick={() => {
                setOpenIndex((prev) => (prev === index ? null : index)); //And this line handles opening/closing of the sub accordian
              }}
            >
              <div className="flex items-center justify-between text-md p-4 rounded-none border-white border-b-0">
                <span>{item.title}</span>
                <button className="relative">
                  <svg
                    id={`dropdown-${index}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className=" size-5 text-blue-quampetence"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* HERE I CAN CHECK IF IS OPEN IS TRUE => THEN OPEN THEN THE SUB ACCORDION */}
            <SubHeaderAccordion isOpen={isOpen} subTitles={item.subTitles} />
          </div>
        );
      })}
    </div>
  );
};

export default HeaderAccordion;
