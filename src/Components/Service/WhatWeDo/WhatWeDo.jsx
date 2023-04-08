import { services } from "../../../Constants";
import styles from "../../../styles";

const WhatWeDo = () => {
  return (
    <section>
      <div className={`${styles.boxWidth} ${styles.padding}`}>
        {services.map((service, index) => (
          <div>
            <div className="content">
                
            </div>
            <div className="image">
                <img src={service.image} alt="" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
