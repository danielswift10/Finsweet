import { useEffect, useRef, useState } from "react";
import { close, logo, menu } from "../../Assets";


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
          scrolled ? "bg-white border-bottom border-bottom-white " : "bg-darkBlue"
        } w-full mx-auto fixed top-0 z-20`}>
                  <div className="w-full xl:max-w-[1280px] mx-auto bg-white flex py-1 justify-between items-center px-7 sm:px-16 xl:px-0 ">
        <a href="#" className="logo ">
          <img
            src={logo}
            alt="talent-assurance"
            className="w-[104px] object-contain md:w-[120px] cursor-pointer "
          />
        </a>
        <div className="navbar-links-desk smd:flex flex-row hidden justify-end items-center flex-1">
          <ul className="flex">
            {NavLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`cursor-pointer font-nunito text-[16px] ${
                  active === nav.title ? "text-base font-bold" : "text-black"
                } 
                                ${
                                  index === NavLinks.length - 1
                                    ? "mr-0"
                                    : "mr-[40px] sm:mr-[40px] text-[15px] hover:font-bold lg:text-[17px] lg:leading-[24px]  md:mr-[50px] "
                                }`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`} className="">
                  {nav.title.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="navbar-links-mobile smd:hidden flex flex-1 justify-end items-center z-[2]"
          ref={ref}
        >
          <div
            className=""
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <img src={close} /> : <RiMenu3Line color="#000" size={28}/>}
            </div>
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl navbar-links `}
          >
            <ul className="flex justify-end items-start flex-1 flex-col gap-7">
              {NavLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`cursor-pointer font-normal font-nunito text-[16px] ${
                    active === nav.title ? "text-black" : "text-white"
                  }
                        ${index === NavLinks.length - 1 ? "mr-0" : "mr-10"} `}
                  onClick={() => setToggle(false)}
                >
                  <a href={`#${nav.id}`} className="">
                    {nav.title.toUpperCase()}
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