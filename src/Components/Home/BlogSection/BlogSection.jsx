import { arrowRightDark } from "../../../Assets";
import { Blogr } from "../../../Constants";
import styles, { layout } from "../../../styles";

const BlogSection = () => {
  return (
    <section className="py-20 bg-lightCyan">
      <div
        className={`${styles.boxWidth} ${styles.padding} ${layout.sectionCol} relative items-center justify-between gap-10`}
      >
        <div className="absolute top-[-10px] left-[30px] ss:left-[28px] sm:left-[65px] md:left-[65px] xl:left-0  md:top-5 w-[16px] h-[16px] bg-lightBlue " />
        <h2 className={`${styles.heading2} text-[30px] text-black`}>
          Read our latest blogs & news
        </h2>
        <div className="blog-container flex flex-wrap justify-center  gap-5">
          {Blogr.map((blog, index) => (
            <div className=" w-[310px] md:w-[524px] xl:w-[624px] md:flex md:flex-row">
                <div className="image">
                    <img src={blog.image} alt="" className="w-full xl:w-[296px] " />
                </div>
                <div className="blog-content px-6 lg:px-8 py-7 xl:py-0  bg-white flex items-start justify-center flex-col">
                    <p className={`${styles.paragraphSmall} text-veryDimBlack`}>{blog.date}</p>
                    <h4 className={`${styles.heading4} text-[18px]  mb-4 md:w-[264px] `}>{blog.title}</h4>
                    <a href="#about"  className={`read-more flex items-center gap-3 text-primary font-poppins font-semibold text-[16px] leading-[24px] `}>
                        Read more
                        <img src={arrowRightDark} alt="" />
                    </a>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
