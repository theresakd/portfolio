import { Stack } from "@chakra-ui/layout";
import Header from "../components/header";
import Home from "../views/home";
import Work from "../views/work";
import Art from "../views/art"
import Contact from "../views/contact";
import Footer from "../components/footer";

import '../App.css'

function App() {

  return (
    <div class="sections">
        <Header></Header>
        <Home></Home>
        <Work></Work>
        <Art></Art>
        <Contact></Contact>
        <Footer></Footer>
    </div>
  );
}

export default App;