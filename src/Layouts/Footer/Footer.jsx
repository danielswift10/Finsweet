import { newsLetterShape } from "../../Assets";
import styles, { layout } from "../../styles";

const Footer = () => {
  return (
    <footer className={`my-20 ${styles.padding}`}>
      <div
        className={`${styles.boxWidth} sm:px-[90px] px-[50px] xl:px-0  sm:py-12  py-[70px] xl:px-[100px] xl:py-[100px]   ${layout.section1}  relative md:items-center  justify-between gap-5 bg-lightBlue`}
      >
        <img src={newsLetterShape} alt="shape" className="absolute top-0 left-0 lg:w-[88.59px] w-[50px] " />
        <div className="news">
          <p className={`${styles.caption} text-white mb-3`}>NEWSLETTER</p>
          <h3 className={`${styles.heading3} md:w-[410px] text-[24px] sm:text-[30px] lg:text-[35px] text-white xl:w-[488px]`}>Subscribe our News Letter to get Latest Updates.</h3>
        </div>
        <div className="sub-input">
            <form>
                <input type="email" placeholder="johndoe@gmail.com" className="xl:w-[454px] outline-none w-full xl:h-[64px] h-[50px]   rounded-[2px] px-10 text-veryDimBlack font-poppins font-semibold leading-[24px] border-none "/>
            </form>
        </div>
      </div>
      <div className="footer-content"></div>
    </footer>
  );
};

export default Footer;
