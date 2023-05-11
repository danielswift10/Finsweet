import { shapesRight } from "../../../Assets";
import { ProcessCard } from "../../../Constants";
import styles, {  } from "../../../styles";

const Process = () => {
  return (
    <section className="py-20">
      <div className={` ${styles.boxWidth} ${styles.padding} `}>
        <div
          className={`flex flex-row about-us ${styles.flexStartB} md:items-start gap-3 sm:gap-0 md:gap-10`}
        >
          <div className="mb-5">
            <p className={`${styles.caption} mb-3`}>OUR PROCESS</p>
            <h2
              className={`${styles.heading2} mb-2  text-[30px] sm:w-[600px] sm:text-[35px] md:w-[700px] lg:text-[40px] xl:w-[777px]  text-black`}
            >
              The process we are working With Our client Worldwide
            </h2>
            <p
              className={`${styles.paragraph} text-black xl:w-[642px] sm:w-[610px] ss:w-[500px] md:w-[700px]`}
            >
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire we up ecstatic
              unsatiable.
            </p>
          </div>

          <div>
            <img
              src={shapesRight}
              alt="shapes-right"
              className="w-[70px] xs:w-[50px] ss:w-fit md:w-fit sm:w-[20px]"
            />
          </div>
        </div>
        <div className="team-members mt-5 md:mt-10 flex gap-5 md:gap-10 items-center justify-center flex-wrap  ">
          {ProcessCard.map((service, index) => (
            <div className=" flex flex-col items-center  justify-center bg-white border border-veryLightBlack  px-7 w-full relative xs:w-[395px]  h-[270px]  ss:h-[174px] sm:h-[164px] ">
              <img src={service.shape} alt=""  className="absolute  bottom-[-7px] w-full"/>
              <img src={service.shape2} alt=""  className="absolute  top-[-7px]  w-full"/>
              <div className="font-poppins font-bold text-[24px] leading-[32px] text-veryLightBlack2 absolute right-5 top-3">{service.number}</div>
             <div className=" flex flex-col items-start  justify-center ss:gap-5 ss:flex-row w-fit flex flex-col items-start ss:items-start w-full ">
             <div className="">
                <img
                  src={service.image}
                  alt="service-img"
                  className="w-[50px] ss:w-[100px] mb-5 "
                />
              </div>
              <div className="">
                <h6
                  className={`${styles.heading6} xs:text-[19px] lg:text-[16px] mb-3 text-secondary `}
                >
                  {service.title}
                </h6>
                <p
                  className={`${styles.paragraph} text-[16px] smd:text-[16px] sm:text-[14px] text-veryDimBlack lg:w-[]`}
                >
                  {service.content}
                </p>
              </div>
             </div>
             {/* <div className="border w-[1px] absolute bottom-0 h-[48px]-"/> */}
             <img src={service.lined} alt="" className="absolute w-[23px] md:w-[38px] lg:w-auto md:bottom-[-21px] bottom-[-10px] lg:bottom-[70px] lg:right-[-50px] rotate-[90deg] lg:rotate-[0] " />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
