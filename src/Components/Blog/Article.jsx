import styles from "../../styles";

const Article = ({ image, title, content, avatar, name, date }) => {
  return (
    <div className="flex flex-col items-center w-[310px]  lg:w-[405px] lg:gap-0 gap-5">
      <div className="image w-full overflow-hidden cursor-pointer  ">
        <img src={image} alt="pic" className={`w-full h-full ${styles.image}`} />
      </div>
      <div className="content bg-white px-4 pb-10 lg:p-8  ">
        <h4
          className={`${styles.heading4} xs:text-[20px]  md:text-[22px] mb-3  xl:w-[264px]`}
        >
          {title}
        </h4>
        <p className={`${styles.paragraph} mb-5`}>{content}</p>
        <div className="flex  items-center gap-4">
          <div className="avatar">
            <img src={avatar} alt="" className="w-fit" />
          </div>
          <div className="name-date">
            <p className={`${styles.paragraph}`}>{name}</p>
            <p className={`${styles.paragraphSmall}`}>{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
