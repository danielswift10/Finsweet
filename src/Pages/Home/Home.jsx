import { useEffect } from "react";
import { About, Expertise, Hero, Process, Services } from "../../Components/Home";


const Home = (props) => {
    useEffect(() => {
        document.title = props.title || ""; 
      }, [props.title]);

    return ( 
        <div className="">
            <Hero/>
            <About/>
            <Expertise/>
            <Services/>
            <Process/>
        </div>
     );
}
 
export default Home;