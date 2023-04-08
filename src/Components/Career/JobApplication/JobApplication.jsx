import styles from "../../../styles";

const JobApplication = ({ position }) => {
  return (
    <section className={` ${styles.boxWidth} my-20 ${styles.padding} `}>
      <div>
        <div className="content mb-[50px]">
          <p className={`${styles.caption} mb-3`}>CAREER AT ETHER</p>
          <h2
            className={`${styles.heading2} text-[30px] sm:text-[35px] mb-5 lg:text-[40px]  xl:w-[490px] smd:w-[700px]  text-black`}
          >
            {position.role}
          </h2>
          <p
            className={`${styles.paragraph} text-gray xl:w-[622px] xs:text-[17px] md:w-[720px] sm:text-[18px] md:text-[16px] smd:w-[650px]`}
          >
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages.
          </p>
        </div>
        <div>
            <h4>Job Description</h4>

        </div>
      </div>
    </section>
  );
};

export default JobApplication;
