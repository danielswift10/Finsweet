import { services } from "../../../Constants";
import styles from "../../../styles";

const WhatWeDo = () => {
  return (
    <section>
      <div className={`${styles.boxWidth} ${styles.padding}`}>
        {services.map((service, index) => (
          <div key={service.id}
          className={`flex mb-5 justify-between  border gap-10 items-center ${
            index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
          } ${index % 2 !== 0 ? 'bg-black' : 'bg-white'} p-4`}
          >
            <div className="content flex-1">
                <h4 className={`${styles.heading4}`}>{service.caption}</h4>
                <h3 className={`${styles.heading3}`}>{service.title}</h3>
                <p className={`${styles.paragraph}`}>{service.content}</p>
            </div>
            <div className="image flex-1">
                <img src={service.image} alt="" className="w-fit"/>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
