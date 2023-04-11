import styles from "../../styles";

const Article2 = ({ image, title, avatar, name, date }) => {
    return ( 
        <div className="flex flex-col bg-lightPurple lg:flex-row items-center  w-[310px]  lg:w-[524px] lg:gap-3 gap-8">
        <div className="image w-full overflow-hidden cursor-pointer">
            <img src={image} alt="" className=" w-full h-full object-cover transition duration-150 ease-out hover:ease-in hover:scale-[1.03]" />
        </div>
        <div className="content px-4 pb-10 lg:pb-0  ">
        <h4 className={`${styles.heading4} xs:text-[20px]  md:text-[22px] mb-5  xl:w-[264px]`}>{title}</h4>
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
}
 
export default Article2;