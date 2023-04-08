import { useEffect } from "react";
import { CareerHero, Positions, WorkCulture } from "../../Components/Career";

const Career = (props) => {
    useEffect(() => {
      document.title = props.title || "";
    }, [props.title]);
  
    return (
      <div className="">
       <CareerHero/>
       <Positions/>
       <WorkCulture/>
      </div>
    );
  };
  
  export default Career;
