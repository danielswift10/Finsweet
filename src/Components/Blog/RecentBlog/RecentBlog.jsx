import { recentBlogPost } from "../../../Constants";
import styles from "../../../styles";

const RecentBlog = () => {
  return (
    <section className="py-20 ">
      <div className={` ${styles.boxWidth} ${styles.padding} `}>
        <div className="heading ">
          <h2 
          className={`${styles.heading2 } md:mb-14 text-[30px] sm:text-[37px] mb-5 lg:text-[40px]  text-black`}
          >Read Recent Post</h2>
          <div className="recent-blog  flex flex-wrap items-center justify-center xl:justify-between gap-5">
            {recentBlogPost.map((recent, index) => (
              <div className="flex flex-col bg-lightPurple lg:flex-row items-center  w-[310px]  lg:w-[524px] lg:gap-3 gap-8">
                <div className="image w-full overflow-hidden cursor-pointer">
                    <img src={recent.image} alt="" className=" w-full h-full object-cover hover:scale-[1.12] hover:scale-[1.09]" />
                </div>
                <div className="content px-4 pb-10 lg:pb-0  ">
                <h4 className={`${styles.heading4} xs:text-[20px]  md:text-[22px] mb-5  xl:w-[264px]`}>{recent.title}</h4>
                  <div className="flex  items-center gap-4">
                    <div className="avatar">
                      <img src={recent.avatar} alt="" className="w-fit" />
                    </div>
                    <div className="name-date">
                      <p className={`${styles.paragraph}`}>{recent.name}</p>
                      <p className={`${styles.paragraphSmall}`}>{recent.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentBlog;
