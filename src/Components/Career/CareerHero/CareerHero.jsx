import { shapesRight } from "../../../Assets";
import styles from "../../../styles";

const CareerHero = () => {
  return (
    <section className="py-20 mt-[60px]">
      <div className={` ${styles.boxWidth} ${styles.padding} `}>
        <div
          className={`flex flex-row mb-[0px] ${styles.flexStartB} md:items-start gap-3 sm:gap-0 md:gap-10`}
        >
          <div className="relative text-center pl-4 md:pl-20 flex-1">
            <p className={`${styles.caption} mb-7`}>CAREER AT FINSWEET</p>
            <h2
              className={`${styles.heading2}  text-[30px] sm:text-[35px] mx-auto mb-5 lg:text-[40px]  xl:w-[624px] smd:w-[700px]  text-black`}
            >
              We hired people who are Always Passionate about what they do
            </h2>
            <p
              className={`${styles.paragraph} xl:w-[624px] ss:w-[530px]  md:w-[690px] mx-auto text-veryDimBlack2`}
            >
              Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw .
            </p>
          </div>
          <div className="">
            <img
              src={shapesRight}
              alt=""
              className="w-[19px] ss:w-fit md:w-[48px] sm:w-[20px] "
            />
          </div>
        </div>

        <div className=""> 
            <h1 className={`career text-[4.5rem] xs:text-[6rem] ss:text-[8rem] sm:text-[10rem] smd:text-[11rem] md:text-[13rem]  font-poppins  font-[900] w-full lg:text-[16rem]  lg:w-[1080px] mx-auto  md:leading-[195px] xl:leading-[207px]  text-center text-black`}>Careers</h1>
        </div>
      </div>
    </section>
  );
};

export default CareerHero;
