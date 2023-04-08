import { useEffect } from "react";
import {
  Process,
  Services,
  WhatWeDo,
} from "../../Components/Service";

const Service = (props) => {
  useEffect(() => {
    document.title = props.title || "";
  }, [props.title]);

  return (
    <div className="">
      <Services />
      <Process />
      <WhatWeDo/>
    </div>
  );
};

export default Service;
