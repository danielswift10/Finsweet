import { AllPost } from "../../../Constants";
import styles from "../../../styles";
import Article from "../Article";

const AllBlog = () => {
  return (
    <section className="py-10 bg-lightPurple">
      <div className={` ${styles.boxWidth} ${styles.padding} `}>
        <div className="heading ">
          <h2 
          className={`${styles.heading2} md:mb-14 text-[30px] sm:text-[37px] mb-5 lg:text-[40px]  text-black`}
          >All posts</h2>
          <div className="recent-blog flex flex-wrap items-center justify-center gap-8">
            {AllPost.map((post, index) => (
              <Article
              image={post.image}
              title={post.title}
              content={post.content}
              avatar={post.avatar}
              name={post.name}
              date={post.date}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllBlog;
