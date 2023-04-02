import { Expertises } from "../../../Constants";
import styles, { layout } from "../../../styles";

const Expertise = () => {
  return (
    <section className="py-10 bg-lightCyan">
      <div className={` ${styles.boxWidth} ${styles.padding} `}>
        <div
          className={`${layout.section2} about-us ${styles.flexStartB} md:items-start gap-10 md:gap-10`}
        >
          <div>
            <p className={`${styles.caption} mb-3`}>OUR EXPERTISE</p>
            <h2
              className={`${styles.heading2} mb-5 text-[30px] lg:w-[90%] sm:text-[35px] md:w-[650px] lg:text-[40px] xl:w-[640px] smd:w-[700px] md:w-full  text-black`}
            >
              We want to get local identification in every corner of the world
              in this era of global citizenship
            </h2>
            <p
              className={`${styles.paragraph} text-gray xl:w-[622px] xs:text-[17px] md:w-[780px] lg:w-[90%] md:w-[] sm:text-[18px] md:text-[16px] smd:w-[650px] md:w-full`}
            >
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire we up ecstatic
              unsatiable saw his giving Remain expense you position concluded.
            </p>
          </div>
          <div className="expertise-others flex flex-col md:flex-row lg:flex-col mx-auto gap-3 ">
            {Expertises.map((item, index) => (
              <div className="bg-white flex flex-row items-center w-[320px] mx-auto xs:w-[380px] ss:w-[400px] sm:w-[450px] md:w-full lg:w-[515px] mx-auto  h-[250px] lg:h-[140px] px-8">
               <div className="flex flex-col lg:flex-row  gap-5">
               <div className="image">
                    <img src={item.image} alt="" className="md:w-[47px]   "/>
                </div>
                <div className="content">
                    <h6 className={`${styles.heading6} mb-1 xs:text-[19px] md:text-[16px]`}>{item.title}</h6>
                    <p className={`${styles.paragraphSmall} xs:text-[17px]  md:text-[14px] text-gray lg:w-[303px]`}>{item.content}</p>
                </div>
               </div>
              </div>
            ))}
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Expertise;
