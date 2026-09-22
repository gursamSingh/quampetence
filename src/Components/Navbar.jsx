import React from "react";
import { useState } from "react";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import HeaderAccordion from "./HeaderAccordion";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const [navBar, setNavBar] = useState(false);

  const mobileNavBar = useRef();
  const menuIcon = useRef();
  const closeIcon = useRef();
  // Logic is basically when navbar is clicked the state changes to true and the navbar appears.

  // sets the navbar to the position
  useGSAP(() => {
    gsap.set(mobileNavBar.current, {
      x: "100%",
    });
  });

  // This is animation part that depends on the navbar
  useGSAP(() => {
    if (navBar) {
      gsap.to(mobileNavBar.current, {
        x: "0%",
        duration: 0.6,
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
        duration: 0.6,
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
        className="h-20 w-full gap-2 md:gap-10 lg:gap-20  justify-between shadow-2xl p-4"
      >
        <div id="header" className="h-full w-full flex items-center justify-between">
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
              className="relative w-8 h-8"
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
          className="fixed right-0 sm:hidden w-full h-[calc(100vh-5rem)] bg-white text-black"
        >
          <div className=" text-white">
            <div>
              <HeaderAccordion
                subTitle={[
                  "Home",
                  "About Us",
                  "Recognitions",
                  "Contact Us",
                  "Hello World",
                ]}
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
