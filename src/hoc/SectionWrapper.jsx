
import styles, {  } from "../styles";

const StartWrapper = (Component) => 
  function HOC() {
    return (
      <section
      >
        
        <span className={`${styles.padding} ${styles.boxWidth} bg-darkBlue ${} `}>
          &nbsp;
        </span>

        <Component />
      </section>
    );
  };
export default StartWrapper;