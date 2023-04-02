import { heroImage } from "../../../Assets";
import {Button} from "../../../Utils";
import styles, { layout } from "../../../styles";
import { Ipsum } from "../../../Constants"

const Hero = () => {
    return ( 
        <div className="hero bg-darkBlue">
            <div className={` ${layout.section}  gap-10 flex justify-center items-center lg:justify-between   ${styles.boxWidth} mt-[60px] lg:gap-0 md:pt-[120px] pt-40 ${styles.padding}`}>
                <div className="hero-content">
                    <h1 className={`${styles.heading1} xs:text-[37px] mb-3 text-[30px] ss:w-[520px] md:text-[42px] lg:text-[46px] lg:w-[5S0px] sm:w-[500px] md:mb-[30px] `}>
                    Transform Your Idea Into Reality with Finsweet
                    </h1>
                    <p className={`mb-6 ${styles.paragraph} md:w-[480px] xs:text-[18px] ss:w-[550px] lg:w-[520px]  xl:w-[528px] text-gray`}>The entire Finsweet team knows what's good with Webflow and you can too with 1 week and a good attitude.</p>
                    <Button/>
                </div>
                <div className={`hero-image `}>
                    <img src={heroImage} alt="" />
                </div>
            </div>
            <div className={` ${layout.section1} py-5 pb-10 gap-10 ${styles.flexBetween}  ${styles.boxWidth} ${styles.paddingX}`}>
               <div className="client-title">
               <p className={`${styles.paragraphSmall} text-gray`}>Our Clients</p>
                <p className={`${styles.paragraphLarge} text-white`}>We've worked with</p>
               </div>
               <div className={`clients ${styles.flexWrap}`}>
                {
                    Ipsum.map((item, index) => (
                        <img src={item.image} alt="ipsum"/>
                    ))
                }
               </div>
            </div>
        </div>
     );
}
 
export default Hero ;