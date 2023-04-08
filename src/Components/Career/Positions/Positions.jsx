import styles from "../../../styles";
import { position } from "../../../Constants";
import { arrowRightDark } from "../../../Assets";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import JobApplication from "../JobApplication/JobApplication";

const Positions = () => {
    const [selectedPosition, setSelectedPosition] = useState(null);
  return (
    <section className={` ${styles.boxWidth} my-20 ${styles.padding} `}>
      <div className="">
        <div className="flex items-center justify-center mb-28">
          <p className={`${styles.paragraphLarge} text-center`}>
            See Our open positions <br /> 👇{" "}
          </p>
        </div>
        <div className="bg-lightCyan flex flex-wrap items-center py-20  px-6 gap-7 justify-center">
          {position.map((item, index) => (
            <div className="bg-white w-[354px] h-[243px] flex flex-col items-center justify-center ">
             <div className="w-[250px] flex flex-col justify-betweeen gap-10">
             <div>
             <h6 className={`${styles.heading6}`}>{item.role}</h6>
              <p className={`${styles.paragraph} text-veryDimBlack`}>{item.mode}</p>
              <p className={`${styles.paragraph} text-veryDimBlack`}>{item.salary}</p>
             </div>
             <div>
             <NavLink
                // to={item.to}
                className={`read-more gap-3 text-primary flex items-center  font-poppins font-semibold text-[16px] leading-[24px] `}
                onClick={() => setSelectedPosition(item)}
              >
                Apply Now
                <img src={arrowRightDark} alt="" />
              </NavLink>
             </div>
             </div>
            </div>
          ))}
        </div>
        {selectedPosition && (
        <JobApplication position={selectedPosition} />
      )}
      </div>
    </section>
  );
};

export default Positions;
