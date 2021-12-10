import { Route, Routes } from "react-router-dom";
import Home from "../views/home";
import Work from "../views/work";
import Art from "../views/art";
import Contact from "../views/contact";

const RoutePaths = () =>{
    <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/work" element={ <Work /> } />
        <Route exact path="/art" element={ <Art /> } />
        <Route exact path="/contact" element={ <Contact /> } />
      </Routes>
}

export default RoutePaths;