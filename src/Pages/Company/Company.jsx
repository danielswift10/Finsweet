import { useEffect } from "react";
import { About, Expertise, Story, Team, Vision } from "../../Components/Company";

const Company = (props) => {
    useEffect(() => {
      document.title = props.title || "";
    }, [props.title]);
  
    return (
      <div className="">
       <About/>
       <Story/>
       <Expertise/>
       <Vision/>
       <Team/>
      </div>
    );
  };
  
  export default Company;
