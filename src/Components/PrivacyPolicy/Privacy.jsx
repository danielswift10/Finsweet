import { privacyShape } from "../../Assets";
import styles from "../../styles";

const Privacy = () => {
  return (
    <section className="py-20 mt-[60px]">
      <div className={` ${styles.boxWidth} ${styles.padding} `}>
        <div
          className={`flex flex-row mb-[80px] ${styles.flexStartB} md:items-start gap-3 sm:gap-0 md:gap-10`}
        >
          <div className="relative">
            <div className="absolute top-[-35px] left-0   xl:left-0   w-[16px] h-[16px] bg-lightOrange " />
            <h2
              className={`${styles.heading2} text-[30px] sm:text-[35px] mb-5 lg:text-[40px]  xl:w-[620px] smd:w-[700px]  text-black`}
            >
              Privacy Policy
            </h2>
            <p
              className={`${styles.paragraph} xl:w-[719px] md:w-[690px] text-veryDimBlack2`}
            >
              Last Updated on 27th January 2021
            </p>
          </div>
          <div className="">
            <img
              src={privacyShape}
              alt=""
              className="w-[20px] sm:w-[48px] "
            />
          </div>
        </div>
        <div className="bg-lightCyan flex flex-col px-7 py-20 xl:p-0 sm:px-16 items-center justify-center xl:h-[1280px] ">
          <div className="  lg:w-[841px] md:w-[771px]">
            <h3 className={`${styles.heading3}  text-[30px] sm:text-[35px] lg:text-[40px] text-black mb-4`}>
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
                We disclose your information in the following manner:
              </h4>
              <br />
              <p>
                Business partners, suppliers and sub-contractors (“Affiliates”):
                Affiliates may use this information to help provide, understand,
                and improve our services and Affiliate’s own services for the
                performance of any contract we enter into 
                <br />
                <br />
                Financial Institutions
                and Auditors: In order to complete third party financial,
                technical and legal audits of our operations to help us operate
                our business, we may need to share your information with
                financial institutions and auditors. 
                <br />
                <br />
                Advertisers and Advertising
                Networks: To provide you with select and serv e relevant
                advertisements to you and others, we may share your data with
                advertiser sand advertising networks. We do not disclose your
                Personal Information or Sensitive Personal Information to our
                advertisers, but we may provide them with aggregate information
                about our users (for example, we may inform them that any given
                number of participants in a specified age group who clicked on
                their advertisement on any given day). We may also use such
                aggregate information to help advertisers reach the kind of
                audience they want to target.
              </p>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
