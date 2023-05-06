import {
  avatar1,
  avatar2,
  avatar3,
  ipsumCustomer,
  quote,
  reviewShape,
} from "../../../Assets";
import styles, { layout } from "../../../styles";

const Review = () => {
  return (
    <section className="py-20 bg-lightPurple">
      <div
        className={`${styles.boxWidth} ${styles.padding} ${layout.section1} relative items-center justify-between gap-20`}
      >
        <div className="absolute top-[-10px] left-[30px] ss:left-[40px] md:left-[65px] xl:left-0  md:top-5 w-[16px] h-[16px] bg-lightBlue " />
        <div className="review-1">
          <h2
            className={`${styles.heading2} text-black xl:w-[492px] text-[30px] sm:text-[35px] lg:text-[40px] md:w-[502px] mb-2 `}
          >
            Our customers love what we do
          </h2>
          <p className={`${styles.paragraphLarge} mb-2 `}>
            Transform your idea into reality with finsweet
          </p>
          <p
            className={`${styles.paragraph} text-black text-[14px] xs:w-[390px] xl:w-[492px] `}
          >
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.{" "}
          </p>
          <div className="review-pic flex flex-row gap-3 mt-5 mb-3">
            <img src={avatar1} alt="" />
            <img src={avatar2} alt="" />
            <img src={avatar3} alt="" />
          </div>
          <p className="font-poppins font-semibold font-secondary">
            <span className="text-[16px] leading-[24px] ">30+ </span>
            <span className="text-[12px] leading-[16px] ">
              Customer Reviews
            </span>
          </p>
        </div>

        <div className="review-2 bg-white p-10 relative xs:w-[410px] md:w-[507px] lg:w-[607px] md:h-[340px]  xl:p-0 flex items-center justify-center">
          <img src={reviewShape} className="absolute left-[-15px]" alt="" />
          <img
            src={quote}
            className="absolute top-[-10px] md:top-[-15px] right-6 md:right-10 w-[33px] md:w-[43px]"
            alt=""
          />
          <div>
            <h4
              className={`${styles.heading4} mb-10 xl:w-[498px] md:text-[20px] `}
            >
              Finsweet has been a wonderful partner to work with. I have been a
              customer now for the past few months now and I have had nothing
              but positive experiences!
            </h4>
            <div className="flex flex-col gap-5 xs:flex-row justify-between ">
              <div className="avatar-title flex items-center gap-3 ">
                <div className="avatar">
                  <img src={avatar1} alt="" className="w-[38px] h-[38px] " />
                </div>
                <div className="title">
                  <h6 className={`${styles.heading6} text-[14px]`}>
                    Johnny Andro
                  </h6>
                  <p
                    className={`${styles.paragraphSmall} text-black text-[12px]`}
                  >
                    Director, Company
                  </p>
                </div>
              </div>
              <div>
                <img src={ipsumCustomer} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
