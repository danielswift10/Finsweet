import { NavLink } from "react-router-dom";
import {
  arrowRightDark,
  contactShape,
  footerShapes,
  logoDark,
  newsLetterShape,
  newsLetterShape1,
} from "../../Assets";
import {
  footerLinks,
  footerLinks1,
  footerLinks2,
  socials,
} from "../../Constants";
import styles, { layout } from "../../styles";
import { useState } from "react";
import {Modal} from "../../Components";

const Footer = () => {
  const [show, setShow] = useState(false)
  const handleCloseModal = () => {
    setShow(false);
  };
  return (
    <footer className={`mt-20 `}>
      <Modal onClose={handleCloseModal} onClick={()=>{setShow(false)}} show={show} />
      <div
        className={`${styles.boxWidth}  sm:px-[90px]  px-[50px] xl:px-0  sm:py-12  py-[70px] xl:px-[100px]  lg:h-[333px]   ${layout.section1}  relative md:items-center  justify-between gap-5 bg-lightBlue`}
      >
        <img
          src={newsLetterShape}
          alt="shape"
          className="absolute top-0  left-0 lg:w-[88.59px] w-[50px]"
        />
        <img
          src={newsLetterShape1}
          alt=""
          className="absolute right-0 xs:h-[313px] w-[12.5px] h-[350px] lg:h-[332px] xl:h-[333px] top-0 sm:w-[14.5px] sm:h-[288px] md:h-[216px]  md:w-[19px]"
        />
        <div className={`news `}>
          <p className={`${styles.caption} text-white mb-3`}>NEWSLETTER</p>
          <h3
            className={`${styles.heading3} md:w-[410px] lg:w-[495px] text-[24px] sm:text-[30px] lg:text-[35px] text-white xl:w-[488px]`}
          >
            Subscribe our News Letter to get Latest Updates.
          </h3>
        </div>
        <div className="sub-input">
          <form>
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              className="xl:w-[454px] lg:w-[300px] outline-none w-full xl:h-[64px] h-[50px]   rounded-[2px] px-10 text-veryDimBlack font-poppins font-semibold leading-[24px] -none "
            />
          </form>
        </div>
      </div>

      <div
        className={`${styles.boxWidth} ${styles.padding2}   my-20   ${layout.section1}  relative gap-5`}
      >
        <div className=" flex-1">
          <img src={footerShapes} alt="" className="w-[36.72px] mb-8 " />
          <h2
            className={`${styles.heading2} text-[30px] lg:text-[40px] mb-8 lg:w-[492px]  text-black md:w-[]`}
          >
            Let's make something special
          </h2>
          <h4 className={`${styles.heading4} text-[20px] ss:text-[25px] mb-5 `}>
            Let's talk! 🤙{" "}
          </h4>
          <div>
            <p className={`contact ${styles.paragraphLarge}`}>020 7993 2905</p>
            <p className={`contact ${styles.paragraphLarge}`}>
              hi@finsweet.com
            </p>
            <hr className="text-[#00000014] w-[168px] my-4 md:w-[268px] " />
            <p className={`contact ${styles.paragraphSmall} lg:w-[206px]`}>
              DLF Cybercity, Bhubaneswar, <br className="md:hidden" /> India,
              &52050
            </p>
          </div>
        </div>
        <div className="footer-links  flex-1 mt-7 ss:mt-14">
          <div className=" flex flex-col justify-between ">
            <div className="flex flex-col gap-7 md:flex-row md:gap-[70px]">
              <ul>
                {footerLinks.map((item, index) => (
                  <h6 className={` text-[] mb-6 lg:mb-3 ${styles.heading6}`}>
                    {item.text}
                  </h6>
                ))}
              </ul>
              <ul>
                {footerLinks1.map((item, index) => (
                  <>
                    <h6 className={`${styles.heading6} mb-2`}>{item.title}</h6>
                    <li
                      className={`${styles.paragraphSmall} leading-[35px] md:leading-[30px]  `}
                    >
                      {item.text}
                    </li>
                  </>
                ))}
              </ul>
              <ul>
                {footerLinks2.map((item, index) => (
                  <>
                    <h6 className={`${styles.heading6} mb-2 `}>{item.title}</h6>
                    <li
                      className={`${styles.paragraphSmall} leading-[35px] md:leading-[35px]`}
                    >
                      <NavLink to={`${item.to}`} className="">
                        {item.text}
                      </NavLink>
                    </li>
                  </>
                ))}
              </ul>
            </div>
            <div className="contact flex items-center gap-3  justify-end mt-[80px] ">
              <img src={contactShape} alt="" />
              <button
                type="button" onClick={()=>{setShow(true)}}
                className={`read-more flex items-center gap-3 ${styles.textLink} text-black`}
              >
                Contact Us
                <img src={arrowRightDark} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`  bg-chalk`}>
        <div
          className={` ${styles.boxWidth} ${styles.padding2} py-6 md:h-[80px] gap-7  flex items-center justify-between flex-col ss:flex-row footer-footer mt-10 `}
        >
          <div className="logo-copyright flex gap-7 items-center">
            <img src={logoDark} alt="" className="" />
            <p className="font-poppins text-[16px] font-semibold ">
              ©2021 Finsweet
            </p>
          </div>
          <div className="socials flex items-center  gap-7">
            {socials.map((social, index) => (
              <div key={social.id}>
                <a href={social.link} title={social.title}>
                <img src={social.image}  alt={social.title} className="w-[20px]"/>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
