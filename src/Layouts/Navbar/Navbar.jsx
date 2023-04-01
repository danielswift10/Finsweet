import styles from "../../styles"
import { useEffect, useRef, useState } from "react";
import { arrowRight, close, logo, menu } from "../../Assets";
import { NavLinks } from "../../Constants";

const Navbar = () => {
    const [active, setActive] = useState("");
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
          scrolled ? "bg-darkBlue" : "bg-darkBlue"
        } w-full mx-auto fixed top-0 z-20`}>
                  <div className={`bg-darkBlue  ${styles.flexBetween} ${styles.paddingX} ${styles.boxWidth}`} >
        <a href="#" className="logo ">
          <img
            src={logo}
            alt="talent-assurance"
            className="w-[104px] object-contain md:w-[120px] cursor-pointer "
          />
        </a>
        <div className="navbar-links-desk smd:flex flex-row hidden justify-end items-center">
          <ul className="flex">
            {NavLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`cursor-pointer font-poppins py-5 font-semibold text-[16px] ${
                  active === nav.title ? "text-white border-t-[3px] border-t-orange " : "text-gray"
                } 
                                ${
                                  index === NavLinks.length 
                                    ? "mr-0"
                                    : "mr-[40px] sm:mr-[40px] text-[15px] hover:font-bold hover:text-white lg:text-[17px] lg:leading-[24px]  md:mr-[50px] "
                                }`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`} className="">
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
          <a href="#clone" className={`${styles.flexCenter} gap-3 text-lightOrange cursor-pointer`}>Clone project 
            <img src={arrowRight} alt="" />
          </a> 
        </div>
        <div
          className="navbar-links-mobile smd:hidden flex flex-1 justify-end items-center z-[2]"
          ref={ref}
        >
          <div
            className=""
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <img src={close} alt=""/> : <img src={menu} alt="" />}
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
                  onClick={() => setToggle(false)}
                >
                  <a href={`#${nav.id}`} className="">
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
        </nav>
     );
}
 
export default Navbar;