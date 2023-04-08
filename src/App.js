import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./Layouts";
import { Home, Service } from "./Pages";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";


const App = () => (
  <div className="App">
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home title="Finsweet | Home"/>} />
        <Route path="/service" element={<Service title="Finsweet | Service"/>} />
      </Routes>
    </BrowserRouter>
    <Footer/>
    <ScrollToTop/>
    
    
  </div>
)
 
export default App;