import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./Layouts";
import { PrivacyPolicy } from "./Pages";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

const Home = lazy(() => import("../src/Pages/Home/Home"));
const Service = lazy(() => import("../src/Pages/Service/Service"));
const Company = lazy(() => import("../src/Pages/Company/Company"));
const Career = lazy(() => import("../src/Pages/Career/Career"));
const JobApplication = lazy(() =>
  import("./Components/Career/JobApplication/JobApplication")
);

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home title="Finsweet | Home" />} />
          <Route path="/service" element={<Service title="Finsweet | Service" />} />
          <Route path="/company" element={<Company title="Finsweet | Company" />} />
          <Route path="/career" element={<Career title="Finsweet | Career" />} />
          <Route path="/career/:id" element={<JobApplication title="Finsweet | Career" />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy title="Finsweet | Privacy Policy" />} />
        </Routes>
      </Suspense>
      <Footer />
      <ScrollToTop />
    </BrowserRouter>
  </div>
);

export default App;
