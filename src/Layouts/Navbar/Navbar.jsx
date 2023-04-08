import styles from "../../styles";
import { useEffect, useRef, useState } from "react";
import { arrowRight, close, logo, menu } from "../../Assets";
import { NavLinks } from "../../Constants";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState(NavLinks.find(navLink => navLink.to === location.pathname)?.title || NavLinks[0].title);
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setToggle(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 55) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    const handleClickLink = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setToggle(false);
      }
    };
    document.addEventListener("click", handleClickLink, true);
    return () => {
      document.removeEventListener("click", handleClickLink, true);
    };
  });
  return (
    <nav
      className={`${
        scrolled ? "bg-darkBlue border-b border-b-gray" : "bg-darkBlue"
      } w-full mx-auto fixed top-0 z-20`}
    >
      <div
        className={`bg-darkBlue ${styles.flexBetween} ${styles.paddingX} ${styles.boxWidth}`}
      >
        <Link to={"/"} className="logo " onClick={() => setActive(NavLinks[0].title)}>
          <img
            src={logo}
            alt="talent-assurance"
            className="w-[104px] object-contain md:w-[120px] lg:w-[122px] cursor-pointer "
          />
        </Link>
        <div className="navbar-links-desk md:flex flex-row hidden justify-end items-center">
          <ul className="flex">
            {NavLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`cursor-pointer font-poppins py-7  font-semibold text-[16px] ${
                  active === nav.title
                    ? "text-white border-t-[3px] pt-[25px] border-t-orange pointer-events-none "
                    : "text-gray  hover:text-white"
                }
                                ${
                                  index === NavLinks.length
                                    ? "mr-0"
                                    : "mr-[40px] sm:mr-[40px] text-[15px] hover:font-bold hover:text-white lg:text-[17px] lg:leading-[24px]  md:mr-[30px] lg:mr-[50px] "
                                }`}
                onClick={() => {setActive(nav.title); setToggle(false);}}
              >
                <NavLink to={`${nav.to}`} className="">
                  {nav.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <a
            href="#clone"
            className={`${styles.flexCenter} gap-3 text-lightOrange cursor-pointer`}
          >
            Clone project
            <img src={arrowRight} alt="" />
          </a>
        </div>
        <div
          className={` ${styles.flexEnd} py-8 navbar-links-mobile md:hidden flex-1 z-[2]`}
          ref={ref}
        >
          <div className="" onClick={() => setToggle(!toggle)}>
            {toggle ? <img src={close} alt="" /> : <img src={menu} alt="" />}
          </div>
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl navbar-links `}
          >
            <ul className="flex justify-end items-start flex-1 flex-col gap-7">
              {NavLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`cursor-pointer font-normal font-poppins text-[16px] ${
                    active === nav.title ? "text-white" : "text-white"
                  }
                        ${index === NavLinks.length - 1 ? "mr-0" : "mr-10"} `}
                        onClick={() => {setActive(nav.title); setToggle(false);}}
                >
                   <NavLink to={`${nav.to}`} className="">
                  {nav.title}
                </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
