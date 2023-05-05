import { bottomShapes, map, topShapes } from "../../Assets";
import styles from "../../styles";
import { Button } from "../../Utils";
import { ContactSocials, ContactWrapper } from "../../Constants";

const ContactSection = () => {
  return (
    <section className="pt-20 mt-[60px]">
      <div className={` ${styles.boxWidth} ${styles.padding} `}>
        <div
          className={`flex flex-col md:flex-row  mb-[50px] ${styles.flexStartB} md:items-start gap-14  md:gap-10 lg:gap-28`}
        >
          <div className="relative flex-1 pt-10">
            <p className={`${styles.caption} mb-5`}>CONTACT US</p>
            <div className="absolute top-0 left-0   xl:left-0   w-[16px] h-[16px] bg-lightOrange " />
            <h2
              className={`${styles.heading2}  text-[30px] sm:text-[37px] mb-5 lg:text-[40px]  xl:w-[640px] sm:w-[610px] md:w-full ss:w-[500px]  text-black`}
            >
              <span>
                Have a Question ? <br /> Let’s Get in Touch with us
              </span>
              <span className="han  w-fit block">👋</span>
            </h2>
            <p
              className={`${styles.paragraph} xl:w-[624px] mb-5 ss:w-[520px] sm:w-[622px] md:w-full text-veryDimBlack2`}
            >
              Fill up the Form and our team will get back to within 24 hrs
            </p>
            <div className="mt-16">
              <form>
                <div className="name flex flex-col gap-2 mb-6">
                  <label
                    className={`${styles.paragraphSmall} text-veryDimBlack2  `}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className={`${styles.paragraph} outline-0 pb-1 md:w-[405px] border-b text-black font-semibold border-b-veryLightBlack2 `}
                    placeholder="Enter your Name"
                  />
                </div>
                <div className="email flex flex-col gap-2 mb-6 ">
                  <label
                    className={`${styles.paragraphSmall} text-veryDimBlack2`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className={`${styles.paragraph} outline-0 pb-1 md:w-[405px]  border-b text-black font-semibold border-b-veryLightBlack2`}
                    placeholder="abc@gmail.com"
                  />
                </div>
                <div className="subject flex flex-col gap-2 mb-6">
                  <label
                    className={`${styles.paragraphSmall} text-veryDimBlack2`}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    className={`${styles.paragraph} outline-0 pb-1 md:w-[405px]  border-b text-black font-semibold border-b-veryLightBlack2`}
                    placeholder="Title of the mail"
                  />
                </div>
                <div className="message flex flex-col gap-2 mb-12">
                  <label
                    className={`${styles.paragraphSmall} text-veryDimBlack2`}
                  >
                    Message
                  </label>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="5"
                    type="text"
                    className={`${styles.paragraph} outline-0 pb-1 md:w-[405px]  border-b text-black font-semibold border-b-veryLightBlack2`}
                    placeholder="Type your Message here"
                  ></textarea>
                </div>
                <Button title={"Send Message"} />
              </form>
            </div>
          </div>
          <div className=" flex-1 z-10 flex relative flex-col items-center justify-center  ">
            <img
              src={topShapes}
              alt=""
              className="absolute  top-[-15px] sm:top-[-22px]  right-0 sm:right-0 xl:right-[6px] w-[138px] md:w-[133px]   "
            />
            <img
              src={bottomShapes}
              alt=""
              className="absolute  bottom-0  left-[-10px] sm:left-[-18px] w-[38px] md:w-[26px] h-[295px]   "
            />
            <div className="bg-lightBlue px-6 sm:px-20 z-5 md:w-[515px] lg:w-full  h-[638px] sm:h-[738px] xl:w-[515px] flex relative flex-col items-center justify-center  ">
              <div className="flex flex-col gap-10 mb-10 ">
                {ContactWrapper.map((item, index) => (
                  <div className="">
                    <p
                      className={`${styles.paragraphSmall} mb-4 text-neutral60`}
                    >
                      {item.heading}
                    </p>
                    <hr className="text-[#00000014] sm:w-[268px] mb-4" />
                    <p
                      className={`${styles.paragraphLarge} w-full  text-white md:w-[264px]`}
                    >
                      {item.content}
                    </p>
                    <p className={`${styles.paragraphLarge} text-white`}>
                      {item.time}
                    </p>
                    <p className={`${styles.paragraphSmall} text-neutral60`}>
                      {item.content2}
                    </p>
                  </div>
                ))}
              </div>
              <div className=" w-[268px] mx-auto flex gap-6 items-center">
                {ContactSocials.map((item, index) => (
                  <div className="" key={item.id}>
                    <a href={item.link}>
                      <img
                        src={item.image}
                        alt="social"
                        className="w-fit"
                        title={item.title}
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 ">
          <img src={map} alt="" />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
