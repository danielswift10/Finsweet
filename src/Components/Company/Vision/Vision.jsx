import { visionImage } from "../../../Assets";
import styles from "../../../styles";

const Vision = () => {
  return (
    <section className={` ${styles.boxWidth} my-20 ${styles.padding} `}>
      <div>
        <div className="content mb-[50px]">
          <p className={`${styles.caption} mb-3`}>OUR VISION</p>
          <h3
            className={`${styles.aheading3} text-[30px] sm:text-[35px] mb-5 lg:text-[40px]  xl:w-[701px] smd:w-[700px] md:w-[800px]  text-black`}
          >
            We want to get local identification in every corner of the world in
            this era of global citizenship.
          </h3>
          <p
            className={`${styles.paragraph} text-gray xl:w-[622px] xs:text-[17px] md:w-[720px] sm:text-[18px] md:text-[16px] smd:w-[650px]`}
          >
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable
            saw his giving Remain expense you position concluded.
          </p>
        </div>
        <div className="image">
            <img src={visionImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Vision;
