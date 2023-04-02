import styles, { layout } from "../../../styles";

const Services = () => {
  return (
    <section className="bg-chalk py-10 ">
      <div className={` ${styles.boxWidth} ${styles.padding} `}>
        <div
          className={`${layout.section2} about-us ${styles.flexStartB} md:items-start gap-10 md:gap-10`}
        >
            <div>
            <p className={`${styles.caption} mb-3`}>OUR SERVICES</p>
            <h2
              className={`${styles.heading2} mb-5 text-[30px] sm:text-[35px] md:w-[650px] lg:text-[40px] xl:w-[777px] smd:w-[700px] md:w-full  text-black`}
            >
              We build software solutions that solve client's business challenges
            </h2>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
