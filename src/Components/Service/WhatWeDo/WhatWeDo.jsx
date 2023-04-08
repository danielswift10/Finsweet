import { services } from "../../../Constants";
import styles from "../../../styles";

const WhatWeDo = () => {
  return (
    <section>
      <div className={`${styles.padding}`}>
        {services.map((service, index) => (
          <div key={service.id}
          className={`${styles.boxWidth} flex flex-col  mb-5 justify-between  border gap-10 items-center ${
            index % 2 === 0 ? 'md:flex-row justify-between' : 'md:flex-row-reverse'
          } ${
            index === 1 ? 'bg-lightCyan' : index === 3 ? 'bg-lightPurple' : 'bg-white'
          } p-4`}
          >
            <div className="content flex-1">
                <h4 className={`${styles.heading4} mb-3`}>{service.caption}</h4>
                <h3 className={`${styles.heading3} xl:w-[624px] mb-4`}>{service.title}</h3>
                <p className={`${styles.paragraph} xl:w-[622px] text-veryDimBlack2`}>{service.content}</p>
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
