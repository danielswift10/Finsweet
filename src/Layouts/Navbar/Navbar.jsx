import { useEffect, useRef, useState } from "react";



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

        </nav>
     );
}
 
export default Navbar;