import { arrowRightDark } from "../../../Assets";
import { ServicesCard } from "../../../Constants";
import { Button } from "../../../Utils";
import styles, { layout } from "../../../styles";

const Services = () => {
  return (
    <section className="bg-chalk py-10 ">
      <div className={` ${styles.boxWidth} ${styles.padding} `}>
        <div
          className={`${layout.sectionCol} about-us ${styles.flexStartB} md:items-start gap-10 md:gap-10`}
        >
          <div>
            <p className={`${styles.caption} mb-3`}>OUR SERVICES</p>
            <h2
              className={`${styles.heading2} mb-5 md:mb-8 text-[30px] sm:text-[35px] md:w-[650px] lg:text-[40px] xl:w-[777px] smd:w-[700px] md:w-[800px]  text-black`}
            >
              We build software solutions that solve client's business
              challenges
            </h2>
            <Button title={"Start a Project"} />
          </div>
          {/* <div className="flex items-center justify-center flex-wrap gap-4"> */}
          <div className="team-members mt-5 md:mt-10 flex gap-5 md:gap-7 items-center justify-center flex-wrap  ">
            {ServicesCard.map((service, index) => (
              <div className="bg-white px-7 drop-shadow-serviceCard py-10 flex flex-col items-start justify-center w-full xs:w-[330px] sm:w-[405px] ss:px-9 lg:px-12 h-[335px] ">
                <img src={service.image} alt="image" className="w-[50px] mb-5 xl:w-[47px] " />
                <h6 className={`${styles.heading6} mb-1 xs:text-[19px] lg:text-[16px] mb-3 text-secondary `}>{service.title}</h6>
                    <p className={`${styles.paragraph} mb-5 xs:text-[17px] xl:text-[16px] text-gray lg:w-[303px]`}>{service.content}</p>
                    <a href="#about"  className={`read-more ${styles.flexCenter} gap-3 text-primary font-poppins font-semibold text-[16px] leading-[24px] `}>
                        Read more
                        <img src={arrowRightDark} alt="" />
                    </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
