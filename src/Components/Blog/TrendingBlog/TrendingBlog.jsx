import { NavLink } from "react-router-dom";
import { andrew, arrowRightDark, shapesLeft, shapesRight, trendingPost } from "../../../Assets";
import styles from "../../../styles";

const TrendingBlog = () => {
  return (
    <section className="py-20 mt-[60px]">
      <div className={` ${styles.boxWidth} ${styles.padding} `}>
        <div
          className={`flex flex-row mb-[50px] ${styles.flexStartB} md:items-start gap-3 sm:gap-0 md:gap-10`}
        >
          <div className="relative">
            <p className={`${styles.caption} mb-3`}>TRENDING</p>
            <div className="absolute top-[-35px] left-0   xl:left-0   w-[16px] h-[16px] bg-lightOrange " />
            <h2
              className={`${styles.heading2} text-[30px] sm:text-[35px] mb-5 lg:text-[40px]  xl:w-[640px] smd:w-[700px]  text-black`}
            >
              Breaking the code How did we build our Figma plugin
            </h2>
            <p
              className={`${styles.paragraph} xl:w-[624px] mb-5 md:w-[690px] text-veryDimBlack2`}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              Maker is a decentralized. We aim to attain the.
            </p>
            <div className="mb-8">
             <NavLink
                // to={item.to}
                className={`read-more gap-3 text-primary flex items-center  font-poppins font-semibold text-[16px] leading-[24px] `}
              >
                Read More
                <img src={arrowRightDark} alt="" />
              </NavLink>
             </div>
             
             <div className="author-date flex flex-col md:items-center md:flex-row mb-9 gap-5">
                <div className="avatar-name flex items-center gap-3">
                    <img src={andrew} alt="" />
                    <p className={`${styles.paragraph}`}>
                        <span className="me-5">
                        Andrew Jonson 
                        </span>
                    <span className="text-[#00000033]">|</span>
                     </p>
                </div> 
                <div className="date">
                    <p className={`${styles.paragraph} text-veryDimBlack2`}>
                    Posted on 27th January 2021
                    </p>
                </div>
             </div>
             <div>
                    <img src={trendingPost} alt="" />
                </div>
          </div>
          <div className="bg-jobDesc lg:w-[515px] h-[324px] flex relative flex-col items-center justify-center  ">
          <img src={shapesRight} alt=""  className="absolute  top-0 right-0 w-[38px] md:w-[48px]  "/>
           <div className="px-7 xs:px-16">
           <h4 className={`${styles.heading4} text-black mb-7 `}>Job Description</h4>
            <p className={`${styles.paragraph}`}>
            Remote, India , 4 to 5 Years Of Experience
            <br />
            <br />
            Department: Product Engineering
            <br />
            <br />
            Full Time 5 Position Available.
            </p>
           </div>

        </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingBlog;
