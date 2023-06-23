import logo from './logo.svg';
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ReactTilt from './pages/ReactTilt';
import BatteryStatus from './pages/BatteryStatus';

function App() {
  return (
    <div className=' overflow-x-hidden bg-gradient-to-r from-slate-950 to-slate-900 h-screen'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/batterystatus' element={<BatteryStatus/>}/>
        <Route path='/reacttilt' element={<ReactTilt/>}/>
      </Routes>
    </div>
  );
}

export default App;
