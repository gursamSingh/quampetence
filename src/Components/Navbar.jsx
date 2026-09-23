import React from "react";
import { useState } from "react";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import HeaderAccordion from "./HeaderAccordion";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const [navBar, setNavBar] = useState(false);

  const menu = [
    {
      title: "Home",
      subTitles: ["Hellow Workd"],
    },
    {
      title: "About Us",
      subTitles: ["Our Story", "Our Team", "Our Values"],
    },
    {
      title: "Services",
      subTitles: ["Customer Support", "Digital Marketing", "Sales"],
    },
    {
      title: "Contact Us",
      subTitles: ["Contact", "Locations"],
    },
  ];

  const mobileNavBar = useRef();
  const menuIcon = useRef();
  const closeIcon = useRef();
  const backdrop = useRef();

  // Logic is basically when navbar is clicked the state changes to true and the navbar appears.

  // sets the navbar to the position
  useGSAP(() => {
    gsap.set(mobileNavBar.current, {
      x: "100%",
    });

    gsap.set(backdrop.current, {
      opacity: 0,
      backdropFilter: "blur(0px)",
      pointerEvents: "none",
    });
  });

  // This is animation part that depends on the navbar
  useGSAP(() => {
    if (navBar) {
      gsap.to(mobileNavBar.current, {
        x: "0%",
        duration: 0.4,
      });

      gsap.to(backdrop.current, {
        opacity: 1,
        backdropFilter: "blur(2px)",
        pointerEvents: "auto",
        duration: 0.4,
      });

      gsap.to(menuIcon.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.2,
      });

      gsap.to(closeIcon.current, {
        opacity: 1,
        scale: 1,
        duration: 0.2,
      });
    } else {
      gsap.to(mobileNavBar.current, {
        x: "100%",
        duration: 0.4,
      });
      gsap.to(backdrop.current, {
        opacity: 0,
        backdropFilter: "blur(0px)",
        pointerEvents: "none",
        duration: 0.4,
      });
      gsap.to(menuIcon.current, {
        opacity: 1,
        scale: 1,
        duration: 0.2,
      });

      gsap.to(closeIcon.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.2,
      });
    }
  }, [navBar]);

  return (
    <>
      <nav
        id="navbar"
        className="h-20 w-full gap-2 md:gap-10 lg:gap-20  justify-between shadow-2xl p-4 "
      >
        <div id="header" className="h-full w-full flex items-center justify-between z-60">
          <div id="logo">
            {/* Logo */}
            <img className="w-40 ml-4" src="src/assets/QBS_Logo.png" alt="" />
          </div>

          {/* Desktop Version with Extended Links */}
          <div id="desktop-navbar" className="hidden sm:flex text-black">
            <div>Link 1</div>

            <div>Linnk 2</div>

            <div>link 3</div>
          </div>

          <div className="sm:hidden ">
            <button
              className="relative w-8 h-8 mr-2.5"
              onClick={() => {
                setNavBar((prev) => !prev);
              }}
            >
              <svg
                ref={closeIcon}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8 text-blue-quampetence absolute inset-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>

              <svg
                ref={menuIcon}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8 text-blue-quampetence absolute inset-0 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Version Hamburger Menu */}
        <div
          ref={mobileNavBar}
          className=" fixed top-20 left-0 right-0 sm:hidden w-full rounded-b-xl text-black z-50"
        >
          <div className=" text-white rounded-b-xl">
            <div>
              <HeaderAccordion menu={menu} />
            </div>
          </div>
          <div
            ref={backdrop}
            onClick={() => setNavBar(false)}
            className="absolute top-full left-0 w-screen h-screen bg-gray-100/10"
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
