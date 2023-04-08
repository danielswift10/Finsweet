import { services } from "../../../Constants";
import styles from "../../../styles";

const WhatWeDo = () => {
  return (
    <section>
      <div >
        {services.map((service, index) => (
          <div key={service.id}
          className={`${styles.paddingX} py-20 md:py-0 ${
            index === 1 ? 'bg-lightCyan' : index === 3 ? 'bg-lightPurple' : 'bg-white'
          } `}
          >
           <div key={service.id}
          className={`${styles.boxWidth} flex flex-col md:gap-[60px]  pb-20 md:py-0 xs:w-[402px] md:w-full mb-5 md:mb-0  md:pb-20 md:justify-between gap-10  items-center ${
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          }`}
          >
            <div className="content flex-1 md:pt-20 ">
                <h4 className={`${styles.heading4} mb-3`}>{service.caption}</h4>
                <h3 className={`${styles.heading3} text-[24px] sm:text-[30px] lg:text-[35px]  xl:w-[629px] mb-4`}>{service.title}</h3>
                <p className={`${styles.paragraph} xl:w-[622px] text-veryDimBlack2`}>{service.content}</p>
            </div>
            <div className={`image flex-1  flex  ${
                index % 2 !== 0 ? "" : "justify-end" 
            }`}>
                <img src={service.image} alt="" className="w-fit"/>
            </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
