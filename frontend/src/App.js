import './App.css';
import {Routes, Route, useLocation} from 'react-router-dom';
import Home from './Pages/Home/Home'
import Holidays from './Pages/Holidays/Holidays';
import Flights from './Pages/Flights/Flights';
import Hotels from './Pages/Hotels/Hotels'
import Buses from './Pages/Buses/Buses';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import SearchResult from './Pages/SearchResult/SearchResult';
import Login from './Pages/Login/Login'
import Register from './Components/Register/Register';

function App() {
    const location = useLocation();
    let showNavbar = true;
    if (location.pathname !== '/' || location.pathname !== '/register'){
      showNavbar = false;
    }

  return (
    <div className="App">
      {showNavbar && <NavBar/>}
      <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/home' element={<Home/>} />
          <Route path='/flights' element={<Flights/>} />
          <Route path='/buses' element={<Buses/>} />
          <Route path='/hotels' element={<Hotels/>} />
          <Route path='/holidays' element={<Holidays/>} />
          <Route path='/search' element={<SearchResult/>}/>
      </Routes>
      {showNavbar && <Footer/>}
    </div>
  );
}

export default App;
