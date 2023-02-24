import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar'
import './App.css';

function App() {
  return (
    <>
    <Navbar />
    <Home />
    {/* <Router>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router> */}
    </>
  );
}

export default App;
