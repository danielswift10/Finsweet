import { ServicesCard } from "../../../Constants";
import { Button } from "../../../Utils";
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
              We build software solutions that solve client's business
              challenges
            </h2>
            <Button title={"Start a Project"} />
          </div>
          <div className="flex flex-col md:flex-row  mx-auto w-full gap-5">
            {ServicesCard.map((service, index) => (
              <div className="bg-white flex flex-col items-center w-[320px] mx-auto xs:w-[380px] ss:w-[400px] sm:w-[450px] md:w-full lg:w-[515px] mx-auto  h-[250px] lg:h-[140px] px-8">
                <img src={service.image} alt="image" />
                <h6 className={`${styles.heading6} mb-1 xs:text-[19px] md:text-[16px]`}>{service.title}</h6>
                    <p className={`${styles.paragraph} xs:text-[17px]  md:text-[14px] text-gray lg:w-[303px]`}>{service.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
