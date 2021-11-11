import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../views/home'
import ROUTES from './routes'

function App() {
  return (
      <Router>
        <Routes>
          <Route path={ROUTES.PAGE} element={<Home />}></Route>
        </Routes>
      </Router>
  )
}

export default App