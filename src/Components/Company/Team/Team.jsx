import { useState } from "react";
import { TeamData } from "../../../Constants";
import styles from "../../../styles";

const Team = () => {
    const [show, setShow] = useState(false);
    const handleShow = (event) => {
        setShow(true);
    }
  return (
    <section className="">
      <div className={` ${styles.boxWidth} ${styles.padding} `}>
        <div className="content mb-14">
          <p className={`${styles.caption} mb-3`}>MEET OUR TEAM</p>
          <h2
            className={`${styles.heading2} text-[30px] sm:text-[35px] mb-5 lg:text-[40px]  xl:w-[624px] smd:w-[700px]  text-black`}
          >
            Teamwork is the only way we work
          </h2>
          <p
            className={`${styles.paragraph} xl:w-[505.05px] md:w-[690px] text-veryDimBlack2`}
          >
           Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable.
          </p>
        </div>
        <div className="team-data flex gap-4 md:gap-0 justify-center flex-wrap ">
            {
                TeamData.map((team, index) => (
                    <div className="relative" >
                        <img  src={team.image} alt="team" className="" onClick={handleShow} />
                        <div key={team.id} className={`${show === team.id ? "flex" : " hidden "} team-info px-[60px] bg-teamBg absolute flex flex-col justify-end pb-14 z-10 w-[320px] h-[320px] top-0`}>
                            <h4 className={`${styles.heading4} mb-3 text-white`}>{team.name}</h4>
                            <p className={`${styles.paragraphSmall} mb-6 text-white`}>{team.role}</p>
                            <div className="flex gap-6 ">
                            {
                                team.socials.map((social, index) => (
                                    <img src={social.socialImage} alt="social" className=" w-fit" />
                                ))
                            }
                            </div>

                        </div>
                    </div>
                ))
            }
        </div>
      </div>
    </section>
  );
};

export default Team;
