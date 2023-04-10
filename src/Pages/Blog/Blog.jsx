import { useEffect } from "react";
import {TrendingBlog} from "../../Components/Blog/index";


const Blog = (props) => {
    useEffect(() => {
      document.title = props.title || "";
    }, [props.title]);
  
    return (
      <div className="">
    <TrendingBlog/>
      </div>
    );
  };
  
  export default Blog;
