import { useEffect } from "react";

const Home = (props) => {
    useEffect(() => {
        document.title = props.title || ""; 
      }, [props.title]);

    return ( 
        <div className="">
            
        </div>
     );
}
 
export default Home;