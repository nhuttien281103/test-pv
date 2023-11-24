import React, { useEffect, useRef, useState } from "react";
import { logo, logoScroll } from "../assets";
const navLinks = [
  { textDisplay: "Home", path: "/" },
  { textDisplay: "Tours", path: "/" },
  { textDisplay: "Booking", path: "/" },
  { textDisplay: "Destinations", path: "/" },
  { textDisplay: "Pages", path: "/" },
  { textDisplay: "Blog", path: "/" },
  { textDisplay: "Shortcodes", path: "/" },
  { textDisplay: "Shop", path: "/" },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const buttonScrollTopRef = useRef(null);
  const [isLogo, setIsLogo] = useState(true);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        setIsLogo(false);
        headerRef.current.classList.add("sticky__header");
        buttonScrollTopRef.current.classList.add("button__scrollTop-active");
      } else {
        setIsLogo(true);
        headerRef.current.classList.remove("sticky__header");
        buttonScrollTopRef.current.classList.remove("button__scrollTop-active");
      }
    });
  };

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="inner">
          {isLogo ? <img src={logo} alt="" /> : <img src={logoScroll} alt="" />}
          <div className="header__nav">
            {navLinks.map((navLink, index) => {
              return (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <a href={navLink.path} key={index}>
                  {navLink.textDisplay}
                  <i className="ti ti-angle-down"></i>
                </a>
              );
            })}
            <button onClick={toggleMenu}>
              <i className="ti ti-menu"></i>
            </button>
            <button>
              <i className="ti ti-shopping-cart"></i>
            </button>
          </div>

          <div className="button__controll">
            <button onClick={toggleMenu}>
              <i className="ti ti-menu"></i>
            </button>
            <button>
              <i className="ti ti-shopping-cart"></i>
            </button>
          </div>
        </div>
      </div>
      <Menu menuRef={menuRef} toggleMenu={toggleMenu} />
      <button
        className="button__scrollTop"
        ref={buttonScrollTopRef}
        onClick={scrollToTop}
      >
        <i className="ti ti-angle-up"></i>
      </button>
    </header>
  );
};

const Menu = ({ menuRef, toggleMenu }) => {
  return (
    <div className="menu" ref={menuRef}>
      <div className="container">
        <div className="inner__menu">
          <div className="btn__close">
            <button onClick={toggleMenu}>
              <i className="ti ti-close"></i>
            </button>
          </div>
          <div className="menu__nav">
            {navLinks.map((navLink, index) => {
              return (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <a href={navLink.path} key={index}>
                  {navLink.textDisplay}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
