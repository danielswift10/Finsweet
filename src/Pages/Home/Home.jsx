import { useEffect } from "react";
import { About, Expertise, Hero } from "../../Components/Home";


const Home = (props) => {
    useEffect(() => {
        document.title = props.title || ""; 
      }, [props.title]);

    return ( 
        <div className="">
            <Hero/>
            <About/>
            <Expertise/>
        </div>
     );
}
 
export default Home;