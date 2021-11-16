import { Stack } from "@chakra-ui/layout";
import Home from "../views/home"
//import Art from "../views/art"
import NavBar from "../components/navigation";
import '../App.css'

function App() {

  return (
    <div>
      <Stack>
        <NavBar></NavBar>
        <Home></Home>
      </Stack>
    </div>
  );
}

export default App;