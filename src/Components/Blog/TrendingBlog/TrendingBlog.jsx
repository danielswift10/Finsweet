import { shapesLeft } from "../../../Assets";
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
              className={`${styles.paragraph} xl:w-[624px] md:w-[690px] text-veryDimBlack2`}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              Maker is a decentralized. We aim to attain the.
            </p>
          </div>
          <div className="">
            <img
              src={shapesLeft}
              alt=""
              className="w-[70px] xs:w-[50px] ss:w-fit md:w-[48px] sm:w-[20px] "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingBlog;
