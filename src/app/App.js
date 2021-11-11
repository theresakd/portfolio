import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import Header from "../components/header";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../views/home'
import ROUTES from './routes'

function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading
          ml="8" size="md" fontWeight='semibold' color="cyan.400">tkd</Heading>
      </Flex>
      <Header />
    </VStack>,
    <Router>
    <Routes>
      <Route path={ROUTES.PAGE} element={<Home />}></Route>
    </Routes>
  </Router>
  );
}

export default App;
