import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./Layouts";
import { Career, Company, Home, PrivacyPolicy, Service } from "./Pages";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import JobApplication from "./Components/Career/JobApplication/JobApplication";


const App = () => (
  <div className="App">
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home title="Finsweet | Home"/>} />
        <Route path="/service" element={<Service title="Finsweet | Service"/>} />
        <Route path="/company" element={<Company title="Finsweet | Company"/>} />
        <Route path="/career" element={<Career title="Finsweet | Career"/>} />
        <Route path="/career/:id" element={<JobApplication title="Finsweet | Career"/>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy title="Finsweet | Privacy Policy"/>} />
        
      </Routes>
      <Footer/>
      <ScrollToTop/>
    </BrowserRouter>
    
    
  </div>
)
 
export default App;