import { useEffect } from "react";
import { About } from "../../Components/Company";

const Company = (props) => {
    useEffect(() => {
      document.title = props.title || "";
    }, [props.title]);
  
    return (
      <div className="">
       <About/>
      </div>
    );
  };
  
  export default Company;
