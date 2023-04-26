import { NavLink } from "react-router-dom";
import {
  arrowRightDark,
} from "../../../Assets";
import { Statistics, aboutImages } from "../../../Constants";
import styles, { layout } from "../../../styles";

const About = () => {
  
  return (
    <section className="py-10">
      <div className={` ${styles.boxWidth} ${styles.padding} `}>
        <div
          className={`${layout.section} about-us ${styles.flexStartB} md:items-center gap-6 md:gap-10`}
        >
          <div className="">
            <p className={`${styles.caption} mb-3`}>ABOUT US</p>
            <h2
              className={`${styles.heading2} text-[30px] sm:text-[35px] lg:text-[40px]  xl:w-[640px] smd:w-[700px] md:w-full  text-black`}
            >
              The company leads entire webdesign process from concept to
              delivery.
            </h2>
          </div>
          <div>
            <h3
              className={`${styles.heading3} mb-2 text-[24px] sm:text-[30px] lg:text-[35px]`}
            >
              The Era Of Technology.
            </h3>
            <p
              className={`${styles.paragraph} text-gray xl:w-[547px] md:w-[] sm:text-[18px] md:text-[16px] smd:w-[650px] md:w-full`}
            >
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire we up ecstatic
              unsatiable saw his giving Remain expense you position concluded.
            </p>
          </div>
        </div>
        <div className={`${styles.flexWrap} gap-3 `}>
          {aboutImages.map((about, index) => (
            <div className="relative overflow-hidden cursor-pointer">
              <img src={about.image} alt="" className={`${styles.image} w-auto h-auto`}/>
              <img src={about.image2} alt="" className="  h-[352px] xs:h-[445px] w-[12px]  absolute bottom-0 right-[-5px]  " />
            </div>
          ))}
        </div>
        <div
          className={`statistics ${styles.flexBetween} ${layout.section1} ${styles.paddingY} mt-3 gap-10`}
        >
          <div
            className={`statistics-content flex flex-wrap sm:gap-10 md:gap-[60px] gap-5`}
          >
            {Statistics.map((stat, index) => (
              <div key={stat.id}>
                <h3
                  className={`${styles.heading3} text-[30px] mb-2 text-black `}
                >
                  {stat.figure}{" "}
                </h3>
                <img src={stat.shapes} alt="figure" className="mb-2" />
                <p className={`${styles.paragraph} text-secondary `}>
                  {stat.title}{" "}
                </p>
              </div>
            ))}
          </div>
          <NavLink to={"/company"}
            
            className={`read-more ${styles.flexCenter} gap-5 text-primary ${styles.textNavNavLink} `}
          >
            Read about us
            <img src={arrowRightDark} alt="" />
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default About;
