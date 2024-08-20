import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/navbar/Nav';
import Home from './components/home/Home';

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App