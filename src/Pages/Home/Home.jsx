import { useEffect } from "react";
import {
  About,
  Blog,
  Expertise,
  Hero,
  Process,
  Review,
  Services,
} from "../../Components/Home";

const Home = (props) => {
  useEffect(() => {
    document.title = props.title || "";
  }, [props.title]);

  return (
    <div className="">
      <Hero />
      <About />
      <Expertise />
      <Services />
      <Process />
      <Review />
      <Blog/>
    </div>
  );
};

export default Home;
