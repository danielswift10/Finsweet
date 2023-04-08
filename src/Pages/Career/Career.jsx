import { useEffect } from "react";
import { CareerHero, Positions } from "../../Components/Career";

const Career = (props) => {
    useEffect(() => {
      document.title = props.title || "";
    }, [props.title]);
  
    return (
      <div className="">
       <CareerHero/>
       <Positions/>
      </div>
    );
  };
  
  export default Career;
