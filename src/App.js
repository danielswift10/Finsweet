import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Layouts";
import { Home } from "./Pages";

const App = () => (
  <div className="App">
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home title="Finsweet | Home"/>} />
      </Routes>
    </BrowserRouter>
    
  </div>
)
 
export default App;