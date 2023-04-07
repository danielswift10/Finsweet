import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./Layouts";
import { Home, Service } from "./Pages";

const App = () => (
  <div className="App">
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home title="Finsweet | Home"/>} />
        <Route path="/service" element={<Service title="Finsweet | Service"/>} />
      </Routes>
    </BrowserRouter>
    <Footer/>
    
  </div>
)
 
export default App;