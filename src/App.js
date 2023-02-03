import "./index.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Nav from './nav';
import Home from './landingPage';
import Footer from './footer';
import Login from './login';
import Register from "./register";
import Explore from "./explore";
import Extra from "./Extra";
import './pic/logo.png'
import LandingPage from "./landingPage";
import explore from "./explore";


function App() {
  return (
    <div className="App">

      <Router>
        <Nav />
        <Routes>
          <Route path='/landingpage' element={<LandingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/explore' element={<Explore />} />
          <Route path="/extra" element={<Extra />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
