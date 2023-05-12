import { NavLink } from "react-router-dom";
import { andrew, arrowRightDark, shapesLeft, shapesRight, trendingPost } from "../../../Assets";
import styles from "../../../styles";
import { trendingBlog } from "../../../Constants";

const TrendingBlog = () => {
  return (
    <section className="pt-20 mt-[60px]">
      <div className={` ${styles.boxWidth} ${styles.padding} `}>
        <div
          className={`flex flex-col md:flex-row  mb-[50px] ${styles.flexStartB} md:items-start gap-14  md:gap-10 lg:gap-28`}
        >
          <div className="relative flex-1 pt-10">
            <p className={`${styles.caption} mb-5`}>TRENDING</p>
            <div className="absolute top-0 left-0   xl:left-0   w-[16px] h-[16px] bg-lightOrange " />
            <h2
              className={`${styles.heading2} text-[30px] sm:text-[37px] mb-5 lg:text-[40px]  xl:w-[640px] sm:w-[610px] md:w-full ss:w-[500px]  text-black`}
            >
              Breaking the code How did we build our Figma plugin
            </h2>
            <p
              className={`${styles.paragraph} xl:w-[624px] mb-5 ss:w-[520px] sm:w-[622px] md:w-full text-veryDimBlack2`}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              Maker is a decentralized. We aim to attain the.
            </p>
            <div className="mb-8">
             <NavLink
                to={"/blog/Breaking-the-code-How-did-we-build-our-Figma-plugin"}
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
             <div className="overflow-hidden">
                    <img src={trendingPost} alt=""  className={`${styles.image}`}/>
                    {/* <img src={trendingShapes} alt="" className="absolute top-0 right-[17px] " /> */}
                </div>
          </div>
          <div className="bg-jobDesc flex-1 lg:w-[515px] h-[738px] xl:w-[515px] flex relative flex-col items-center justify-center  ">
          <img src={shapesRight} alt=""  className="absolute  top-0 right-0 w-[38px] md:w-[48px]  "/>
           <div className="px-12 py-20 xl:py-0 xs:px-16 flex flex-col gap-10">
           {
            trendingBlog.map((trend, index) => (
                <div>
                    <h4 
                    className={`${styles.heading4} xs:text-[20px] xs:w-[318px] md:text-[22px] mb-5 md:w-[366px]`}
                    >{trend.title}</h4>
                    <div className="flex  items-center gap-4">
                        <div className="avatar">
                            <img src={trend.avatar} alt="" />
                        </div>
                        <div className="name-date">
                            <p className={`${styles.paragraph}`}>{trend.name}</p>
                            <p className={`${styles.paragraphSmall}`}>{trend.date}</p>
                        </div>
                    </div>


                </div>
            ))
           }
           </div>

        </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingBlog;
