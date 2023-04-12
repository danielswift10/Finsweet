import { shapesRight } from "../../../Assets";
import { Button } from "../../../Utils";
import styles, { layout } from "../../../styles";

const JobApplication = ({ position }) => {
  if (!position) {
    return null;
  }
  return (
    <section className={` ${styles.boxWidth} my-20 `}>
      <div className={`${layout.section1} ${styles.flexCenter} gap-14 `}>
        <div className="content mb-[50px]">
          <p className={`${styles.caption} mb-3`}>CAREER AT ETHER</p>
          <h2
            className={`${styles.heading2} text-[30px] sm:text-[35px] mb-5 lg:text-[40px]  xl:w-[500px] smd:w-[]  text-black`}
          >
            {position.role}
          </h2>
          <p
            className={`${styles.paragraph} text-gray mb-7 lg:w-[430px] xs:w-[375px] ss:w-[520px] sm:w-[650px] xs:text-[17px] md:w-[420px] sm:text-[18px] md:text-[16px] smd:w-[700px]`}
          >
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages.
          </p>
          <Button title={'Apply Now'}/>
        </div>
        <div className="bg-jobDesc lg:w-[515px] h-[324px] flex relative flex-col items-center justify-center  ">
          <img src={shapesRight} alt=""  className="absolute  top-0 right-0 w-[38px] md:w-[48px]  "/>
           <div className="px-7 xs:px-16">
           <h4 className={`${styles.heading4} text-black mb-7 `}>Job Description</h4>
            <p className={`${styles.paragraph}`}>
            Remote, India , 4 to 5 Years Of Experience
            <br />
            <br />
            Department: Product Engineering
            <br />
            <br />
            Full Time 5 Position Available.
            </p>
           </div>

        </div>
      </div>

      <div>
        
      </div>
    </section>
  );
};

export default JobApplication;
