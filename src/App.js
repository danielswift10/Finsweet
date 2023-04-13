import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./Layouts";
import { Blog, Contact, PrivacyPolicy } from "./Pages";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import { TrendingBlog1 } from "./Components/Blog";

const Home = lazy(() => import("../src/Pages/Home/Home"));
const Service = lazy(() => import("../src/Pages/Service/Service"));
const Company = lazy(() => import("../src/Pages/Company/Company"));
const Career = lazy(() => import("../src/Pages/Career/Career"));
// const Blog = lazy(() => import("../src/Pages/Blog/Blog"));
const JobApplication = lazy(() =>
  import("./Components/Career/JobApplication/JobApplication")
);

const App = () => {
  function handleContextMenu(e) {
    e.preventDefault();
  }
  return (
    <div className="App" onContextMenu={handleContextMenu}>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home title="Finsweet | Home" />} />
            <Route
              path="/service"
              element={<Service title="Finsweet | Service" />}
            />
            <Route
              path="/company"
              element={<Company title="Finsweet | Company" />}
            />
            <Route
              path="/career"
              element={<Career title="Finsweet | Career" />}
            />
            <Route path="/blog" element={<Blog title="Finsweet | Blog" />} />
            <Route
              path="/blog/Breaking-the-code-How-did-we-build-our-Figma-plugin"
              element={<TrendingBlog1 title="Finsweet | Blog" />}
            />
            <Route
              path="/career/:position"
              element={<JobApplication title="Finsweet | Career" />}
            />
            <Route
              path="/privacy-policy"
              element={<PrivacyPolicy title="Finsweet | Privacy Policy" />}
            />
            <Route
              path="/contact"
              element={<Contact title="Finsweet | Contact Us" />}
            />
          </Routes>
        </Suspense>
        <Footer />
        <ScrollToTop />
      </BrowserRouter>
    </div>
  );
};
export default App;
