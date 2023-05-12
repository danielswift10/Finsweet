import { heroImage, heroShapeL, heroShapeR } from "../../../Assets";
import {Button} from "../../../Utils";
import styles, { layout } from "../../../styles";
import { Ipsum } from "../../../Constants"

const Hero = () => {
    return ( 
        <div className="hero bg-darkBlue">
            <div className={` ${layout.section}  gap-10 flex justify-center items-center lg:justify-between   ${styles.boxWidth} mt-[60px] lg:gap-0 md:pt-[120px] pt-20 ss:pt-[100px] sm:pt-[120px] ${styles.padding}`}>
                <div className="hero-content relative">
                <div className="absolute top-[-25px] left-0   xl:left-0   w-[16px] h-[16px] bg-[#FFFFFF0F] " />
                    <h1 className={`${styles.heading1} text-white xs:text-[37px] mb-3 text-[30px] ss:w-[520px] md:text-[42px] lg:text-[46px] lg:w-[5S0px] sm:w-[500px] md:mb-[30px] `}>
                    Transform Your Idea Into Reality with Finsweet
                    </h1>
                    <p className={`mb-6 ${styles.paragraph} md:w-[480px] xs:text-[18px] ss:w-[550px] lg:w-[520px]  xl:w-[528px] text-gray`}>The entire Finsweet team knows what's good with Webflow and you can too with 1 week and a good attitude.</p>
                    <Button title={'Request Quote'}/>
                </div>
                <div className={`hero-image relative z-10 `}>
                    <div className="relative overflow-hidden relative z-10">
                    <img src={heroImage} alt="" className={`${styles.image} w-auto h-auto`} />
                    </div>
                    <img src={heroShapeR} alt="" className="absolute top-0 h-[230px] xs:h-[350px] ss:right-[-20px] ss:top-0 right-[-13px] md:right-[-15px] md:h-[320px] md:top-0 " />
                    <img src={heroShapeL} alt="" className="absolute bottom-0 h-[80px] xs:h-[120px] left-[-12px] " />
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
                        <img src={item.image} alt="ipsum" className="w-auto h-auto"/>
                    ))
                }
               </div>
            </div>
        </div>
     );
}
 
export default Hero ;