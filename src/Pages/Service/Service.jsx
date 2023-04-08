import { useEffect } from "react";
import {
  Process,
  Services,
} from "../../Components/Service";

const Service = (props) => {
  useEffect(() => {
    document.title = props.title || "";
  }, [props.title]);

  return (
    <div className="">
      <Services />
      <Process />
    </div>
  );
};

export default Service;
