import { useEffect } from "react";
import {AllBlog, RecentBlog, TrendingBlog} from "../../Components/Blog";


const Blog = (props) => {
    useEffect(() => {
      document.title = props.title || "";
    }, [props.title]);
  
    return (
      <div className="">
    <TrendingBlog/>
    <RecentBlog/>
    <AllBlog/>
      </div>
    );
  };
  
  export default Blog;
