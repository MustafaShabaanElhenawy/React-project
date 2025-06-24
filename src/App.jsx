import { BrowserRouter,Route,Routes } from "react-router";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";

function App() {

  return (
    <>
   <BrowserRouter>
    <Routes>
     <Route  path="/" element={<Home/>}/>
     <Route  path="/Home" element={<Home/>}/>
     <Route  path="/About" element={<About/>}/>
     <Route  path="/Portfolio" element={<Portfolio/>}/>
     <Route  path="/Contact" element={<Contact/>}/>
    </Routes>
  </BrowserRouter>

    </>
  )
}

export default App



