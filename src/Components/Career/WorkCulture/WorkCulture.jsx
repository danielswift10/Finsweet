import { culture } from "../../../Constants";
import styles from "../../../styles";

const WorkCulture = () => {
  return (
    <section className={` ${styles.boxWidth} my-20 ${styles.padding} bg-workBg  `}>
      <div className="py-20">
        <div className="content mb-[50px]">
          <p className={`${styles.caption} mb-3`}>OUR WORK & CULTURE</p>
          <h3
            className={`${styles.heading3} text-[30px] sm:text-[35px] mb-5 lg:text-[40px]  xl:w-[624px] smd:w-[700px] md:w-[800px]  text-black`}
          >
            Come and join a team of highly skilled professionals.
          </h3>
          <p
            className={`${styles.paragraph} text-gray xl:w-[622px] xs:text-[17px] md:w-[720px] sm:text-[18px] md:text-[16px] smd:w-[650px]`}
          >
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable
            saw his giving Remain expense you position concluded.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center  gap-7">
            {
                culture.map((item, index) => (
                    <div key={item.id} className="flex flex-col px-7 md:px-9 md:h-[188px] justify-center md:py-0 py-6  bg-white md:w-[408px] w-[354px] ">
                        <div className=" flex flex-col gap-5 ">
                        <img src={item.image} alt="" className="w-fit"/>
                        <h6 className={`${styles.heading6} text-black`}>{item.title}</h6>
                        <p className="font-poppins font-normal text-[14px] leading-[20px] text-veryDimBlack">{item.content}</p>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
    </section>
  );
};

export default WorkCulture;
