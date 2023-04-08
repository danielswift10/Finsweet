import { Statistics, clients } from "../../../Constants";
import styles from "../../../styles";

const Story = () => {
    return ( 
        <section className={` ${styles.boxWidth} ${styles.padding} `}>
                    <div
          className={`flex flex-col md:flex-row  ${styles.flexStartB} md:items-start gap-8  md:gap-10`}
        >
          <div className="relative flex-1">
            <h6 className={`${styles.heading6} mb-3`}>Our Story 👇 </h6>
            <div className="absolute top-[-35px] left-0   xl:left-0   w-[16px] h-[16px] bg-lightBlue " />
            <h3
              className={`${styles.heading3} text-[30px] sm:text-[35px] mb-5 lg:text-[40px]  xl:w-[549px] smd:w-[700px] md:w-full  text-black`}
            >
              From Startups to Titans of Industry
            </h3>
            <p
              className={`${styles.paragraph} lg:w-[550px] ss:w-[550px] sm:w-[590px] smd:w-[670px] md:w-full text-veryDimBlack2`}
            >
              Through True Rich Attended does no end it his mother since
              favourable real had half every him case in packages enquire we up
              ecstatic unsatiable saw his giving Remain expense of gay produce
              excited perceived do an a china mean its so ye when in explained
              Hearts am next over match mr partiality not shoud latter thus as
              out no passed forming middleton exercise up
            </p>
          </div>
          <div className="bg-lightOrange2 flex-1 lg:w-[624px] md:h-[368px]  flex flex-col justify-center items-center">
          <div
            className={`statistics-content flex flex-wrap px-7 py-9 md:pl-0 md:py-0 md:w-[400px] items-start justify-between md:pl-[40px] md:pr-[40px] lg:pl-0 lg:pr-[100px] sm:gap-10 md:gap-[60px] gap-5`}
          >
            {Statistics.map((stat, index) => (
              <div key={stat.id}>
                <h3
                  className={`${styles.heading3} text-[30px] mb-2 text-black `}
                >
                  {stat.figure}{" "}
                </h3>
                <img src={stat.shapes} alt="figure" className="mb-2" />
                <p className={`${styles.paragraph} text-secondary `}>
                  {stat.title}{" "}
                </p>
              </div>
            ))}
          </div>
          </div>

        </div>
        <div className="client flex flex-wrap items-center justify-center mt-10">
          {
            clients.map((client, index) => (
              <img src={client.image} alt="image" />
            ))
          }
        </div>
        </section>
     );
}
 
export default Story;