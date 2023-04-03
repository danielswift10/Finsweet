import { arrowRight, shapesLeft } from "../Assets";
import styles, { layout } from "../styles";

const Button = ({title}) => {
    return ( 
        <button type="button" className={`lg:h-[64px] w-[197px] relative h-[55px]  lg:w-[219px] hover:scale-[1.03] outline-none ${layout.button}`}>
            <p>{title}</p>
            <img src={arrowRight} alt="" />
            <img src={shapesLeft} className="absolute top-0 left-0 w-[23px] h-[23px] md:w-[28px] md:h-[28px] " alt="" />
        </button>
     );
}
 
export default Button;