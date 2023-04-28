import {
  aboutImage1,
  aboutImage2,
  aboutImage3,
  shapesRight,
} from "../../../Assets";
import { Statistics, aboutImages, clients } from "../../../Constants";
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
              className={`${styles.heading2} text-[30px] sm:text-[35px] mb-5 lg:text-[40px]  xl:w-[640px] smd:w-[700px]  text-black`}
            >
              Award-winning Company seen and used by millions around the world.
            </h2>
            <p
              className={`${styles.paragraph} xl:w-[719px] md:w-[690px] text-veryDimBlack2`}
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
              <div className="overflow-hidden">
              <img src={about.image} alt="" className={`${styles.image}`} />
              </div>
              <img
                src={about.image2}
                alt=""
                className=" h-[352px] xs:h-[445px] w-[12px] absolute bottom-0 right-[-10px] "
              />
            </div>
          ))}
        </div>




      </div>
    </section>
  );
};

export default About;
