import {
  aboutImage1,
  aboutImage2,
  aboutImage3,
  aboutShape,
  arrowRight,
  arrowRightDark,
  shapesRight,
} from "../../../Assets";
import { Statistics, aboutImages } from "../../../Constants";
import styles, { layout } from "../../../styles";

const About = () => {
  return (
    <section className="py-20 mt-[60px]">
      <div className={` ${styles.boxWidth} ${styles.padding} `}>
        <div
          className={`flex flex-row mb-[50px] ${styles.flexStartB} md:items-start gap-3 sm:gap-0 md:gap-10`}
        >
          <div className="relative">
            <p className={`${styles.caption} mb-3`}>COMPANY</p>
            <div className="absolute top-[-35px] left-0   xl:left-0   w-[16px] h-[16px] bg-lightOrange " />
            <h2
              className={`${styles.heading2} text-[30px] sm:text-[35px] mb-5 lg:text-[40px]  xl:w-[640px] smd:w-[700px] md:w-full  text-black`}
            >
              Award-winning Company seen and used by millions around the world.
            </h2>
            <p
              className={`${styles.paragraph} xl:w-[719px] text-veryDimBlack2`}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              Maker is a decentralized.
            </p>
          </div>
          <div className="">
            <img
              src={shapesRight}
              alt=""
              className="w-[70px] xs:w-[50px] ss:w-fit md:w-[48px] sm:w-[20px] "
            />
          </div>
        </div>

        <div className={`${styles.flexWrap} gap-3 `}>
          {aboutImages.map((about, index) => (
            <div className="relative">
              <img src={about.image} alt="" className="" />
              <img
                src={about.image2}
                alt=""
                className=" h-[352px] xs:h-[445px] w-[12px] absolute bottom-0 right-[-10px] "
              />
            </div>
          ))}
        </div>

        <div
          className={`flex flex-col md:flex-row mt-[150px] ${styles.flexStartB} md:items-start gap-5 sm:gap-0 md:gap-10`}
        >
          <div className="relative">
            <h6 className={`${styles.heading6} mb-3`}>Our Story 👇 </h6>
            <div className="absolute top-[-35px] left-0   xl:left-0   w-[16px] h-[16px] bg-lightBlue " />
            <h3
              className={`${styles.heading3} text-[30px] sm:text-[35px] mb-5 lg:text-[40px]  xl:w-[549px] smd:w-[700px] md:w-full  text-black`}
            >
              From Startups to Titans of Industry
            </h3>
            <p
              className={`${styles.paragraph} xl:w-[550px] text-veryDimBlack2`}
            >
              Through True Rich Attended does no end it his mother since
              favourable real had half every him case in packages enquire we up
              ecstatic unsatiable saw his giving Remain expense of gay produce
              excited perceived do an a china mean its so ye when in explained
              Hearts am next over match mr partiality not shoud latter thus as
              out no passed forming middleton exercise up
            </p>
          </div>
          <div className="bg-lightOrange2 xl:w-[624px] xl:h-[368px] flex flex-col justify-center items-center">
          <div
            className={`statistics-content flex flex-wrap  xl:w-[400px] items-start justify-between pr-[100px] sm:gap-10 md:gap-[60px] gap-5`}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
