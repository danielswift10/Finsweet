import styles from "../../styles";
import { useEffect, useRef, useState } from "react";
import { arrowRight, close, logo, menu } from "../../Assets";
import { NavLinks } from "../../Constants";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState(
    NavLinks.find((navLink) => navLink.to === location.pathname)?.title ||
      NavLinks[0].title
  );
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  
  useEffect(() => {
    setActive(
      NavLinks.find((navLink) => navLink.to === location.pathname)?.title ||
        NavLinks[0].title
    );
  }, [location.pathname]);
  
  return (
    <nav
      className={`${
        scrolled ? "bg-darkBlue border-b border-b-gray" : "bg-darkBlue"
      } w-full mx-auto fixed top-0 z-20 md:px-16 `}
    >
      <div className={`bg-darkBlue py-7  md:p-0 ${styles.flexBetween} ${styles.paddingX} ${styles.boxWidth}`}>
       <div className="nav-logo">
       <Link
          to={"/"}
          className="logo "
          onClick={() => setActive(NavLinks[0].title)}
        >
          <img
            src={logo}
            alt="finsweet"
            className="w-[104px] object-contain md:w-[120px] lg:w-[122px] cursor-pointer "
          />
        </Link>
       </div>
        <div className="navbar-links-desk md:flex md:flex-row hidden md:justify-end md:items-center">
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
                onClick={() => {
                  setActive(nav.title);
                  setToggle(false);
                }}
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
        <div className="md:hidden " >
            {toggle ? <img src={menu} alt="" onClick={() => setToggle(true)}/> : <img src={menu} alt="" onClick={() => setToggle(true)}/>}
        </div>
      </div>
     {
      toggle && (
        <div
        className={`fixed navbar-bg top-0 min-h-screen  z-10  w-full   md:hidden  z-10`}
        style={
          {
            left: toggle ? "0px" : "-300px",
          }
        }
        
        >
      <div className="w-[250px]  navbar-mobile min-h-screen fixed top-0 z-20 "  ref={ref}>
      <div className="flex items-end  py-[10px] flex-col  justify-end ">
          <div className="rounded-full cursor-pointer w-auto hover:bg-[#8080803c] mr-5 p-3 mt-5 me" title="Close" onClick={() => setToggle(false)}>
          <img src={close} alt="" />
          </div>
          <ul className="flex pe-20 mt-10 flex-col gap-10">
            {NavLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`cursor-pointer font-normal font-poppins text-[16px] ${
                  active === nav.title 
                  ? "text-white pl-[20px] border-l-[3px] pt-[] border-l-orange pointer-events-none "
                  : "text-gray pl-[20px]  hover:text-white"
                }
                      ${index === NavLinks.length - 1 ? "mr-0" : "mr-10"} `}
                onClick={() => {
                  setActive(nav.title);
                  setToggle(false);
                }}
              >
                <NavLink to={`${nav.to}`} className="">
                  {nav.title}
                </NavLink>
              </li>
            ))}
            <a
          href="#clone"
          className={`${styles.flexCenter} gap-3 text-lightOrange cursor-pointer`}
        >
          Clone project
          <img src={arrowRight} alt="" />
        </a>
          </ul>
          
        </div>
      </div>
      </div>
      )
     }
    </nav>
  );
};

export default Navbar;
