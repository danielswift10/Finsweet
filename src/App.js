import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./Layouts";
import { Career, Company, Home, Service } from "./Pages";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";


const App = () => (
  <div className="App">
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home title="Finsweet | Home"/>} />
        <Route path="/service" element={<Service title="Finsweet | Service"/>} />
        <Route path="/company" element={<Company title="Finsweet | Company"/>} />
        <Route path="/career" element={<Career title="Finsweet | Career"/>} />
      </Routes>
      <Footer/>
      <ScrollToTop/>
    </BrowserRouter>
    
    
  </div>
)
 
export default App;