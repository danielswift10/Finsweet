import { useEffect } from "react";
import {
  andrew,
  arrowRightDark,
  shapesRight,
  visionImage,
} from "../../../Assets";
import styles from "../../../styles";


const TrendingBlog1 = (props) => {
  useEffect(() => {
    document.title = props.title || "";
  }, [props.title]);

  return (
    <section className="pt-10  ">
      <div className={` ${styles.boxWidth} my-20 ${styles.padding}  `}>
        <div className="flex items-start justify-between mb-10">
          <div className="relative pt-10">
            <div className="absolute top-0 left-0   xl:left-0   w-[16px] h-[16px] bg-lightOrange " />
            <h2
              className={`${styles.heading2} text-[30px] sm:text-[37px] mb-5 lg:text-[40px]  xl:w-[739px] sm:w-[610px] md:w-full ss:w-[500px]  text-black`}
            >
              Breaking the code How did we build our Figma plugin
            </h2>
            <p
              className={`${styles.paragraph} xl:w-[719px] mb-5 ss:w-[520px] sm:w-[622px] md:w-full text-veryDimBlack2`}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              Maker is a decentralized. We aim to attain the.
            </p>
            <div className="author-date flex flex-col md:items-center md:flex-row mb-9 gap-5">
              <div className="avatar-name flex items-center gap-3">
                <img src={andrew} alt="" />
                <p className={`${styles.paragraph}`}>
                  <span className="me-5">Andrew Jonson</span>
                  <span className="text-[#00000033]">|</span>
                </p>
              </div>
              <div className="date">
                <p className={`${styles.paragraph} text-veryDimBlack2`}>
                  Posted on 27th January 2021
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <img
              src={shapesRight}
              alt=""
              className="w-[70px] xs:w-[50px] ss:w-fit md:w-[48px] sm:w-[20px] "
            />
          </div>
        </div>
        <div className="image overflow-hidden">
          <img src={visionImage} alt="" className={`${styles.image}`} />
        </div>

        <div className="bg-white flex flex-col px-7 py-20  xl:p-0 sm:px-16 items-center justify-center xl:h-[1280px] ">
          <div className="  lg:w-[841px] md:w-[771px]">
            <h3
              className={`${styles.heading3}  text-[30px] sm:text-[35px] lg:text-[40px] text-black mb-4`}
            >
              Transform Your Idea Into Reality with Ether a Leading Digital
              Agency
            </h3>
            <p className={`${styles.paragraph}`}>
              Writing UX copies can be a little frustrating and confusing, and
              sometimes we are unsure about how to get the right word. To crack
              the code for the UX copies, we at Zeta Design wanted to build a
              Figma plugin for the larger design community. The plugin is called
              the Ghost UXWriter and has a set of UX copies cataloged and
              categorized with a voice and tone variation ranging from plain,
              casual to playful. The intention to build this Figma plugin
              originated from our Medium blog post, ‘Designing voice and tone
              for error messages.
              <br />
              <br />
              Writing UX copies can be a little frustrating and confusing, and
              sometimes we are unsure about how to get the right word. To crack
              the code for the UX copies, we at Zeta Design wanted to build a
              Figma plugin for the larger design community. The plugin is called
              the Ghost UXWriter and has a set of UX copies cataloged.
              <br />
              <br />
              Writing UX copies can be a little frustrating and confusing, and
              sometimes we are unsure about how to get the right word. To crack
              the code for the UX copies, we at Zeta Design wanted to build a
              Figma plugin for the larger design community. The plugin is called
              the Ghost UXWriter and has a set of UX copies cataloged.
              <br />
              <br />
              Writing UX copies can be a little frustrating and confusing, and
              sometimes we are unsure about how to get the right word. To crack
              the code for the UX copies, we at Zeta Design wanted to build a
              Figma plugin for the larger design community. The plugin is called
              the Ghost UXWriter and has a set of UX copies cataloged and
              categorized with a voice and tone variation ranging from plain,
              casual to playful. The intention to build this Figma plugin
              originated from our Medium blog post, ‘Designing voice.
              <br />
              <br />
              <h4 className={`${styles.heading4}`}>
                Transform Your Idea Into Reality with Ether a Leading Digital
                Agency
              </h4>
              <br />
              <p>
                Step 1: Download the plugin from Figma community, search Ghost
                UXWriter <br />
                Step 2: Open the plugin on your artboard <br />
                Step 3: Search for your copy or look through the different
                categories of the copies <br />
                Step 4: Select the type of error you are looking for. You will
                get three different copies for each error
                <br />
                Step 5: Tap on the cards to insert text in your frames And you
                are all geared up to make your UX copies more fun and exciting
                😎
                <br />
                <br />
                <h4 className={`${styles.heading4}`}>
                  Transform Your Idea Into Reality with Ether a Leading Digital
                  Agency
                </h4>
                <br />
                Writing UX copies can be a little frustrating and confusing, and
                sometimes we are unsure about how to get the right word. To
                crack the code for the UX copies, we at Zeta Design wanted to
                build a Figma plugin for the larger design community. The plugin
                is called the Ghost UXWriter and has a set of UX copies
                cataloged and categorized with a voice and tone variation
                ranging from plain, casual to playful. The intention to build
                this Figma plugin originated from our Medium blog post,
                ‘Designing voice and tone for error messages.
              </p>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingBlog1;
