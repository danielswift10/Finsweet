import { useEffect } from "react";
import {Privacy} from "../../Components/PrivacyPolicy";

const PrivacyPolicy = (props) => {
    useEffect(() => {
      document.title = props.title || "";
    }, [props.title]);
  
    return (
      <div className="">
       <Privacy/>
      </div>
    );
  };
  
  export default PrivacyPolicy;
