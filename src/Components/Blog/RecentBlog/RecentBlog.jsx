import { recentBlogPost } from "../../../Constants";
import styles from "../../../styles";
import Article2 from "../Article2";

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
            <Article2
            image={recent.image}
            title={recent.title}
            avatar={recent.avatar}
            name={recent.name}
            date={recent.date}
            />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentBlog;
