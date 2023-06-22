import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Bag from './pages/Bag';
import Klar from './pages/Klar';
import Profile from './pages/Profile';
import Progress from './pages/Progress';
import Settings from './pages/Settings';
import Camera from './pages/Camera';
import Map from './pages/Map';
import Test from './pages/Test';
import New from './pages/New';
import Information from './pages/Information';
import './styles.css';
import SideNav from './components/SideNav';
import CameraNav from './components/CameraNav';
import Done from './pages/Done';


function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/bag' element={<Bag />} />
          <Route path='/klar' element={<Klar/>} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/progress' element={<Progress/>} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/camera' element={<Camera />} />
          <Route path='/map' element={<Map />} />
          <Route path='/test' element={<Test />} />
          <Route path='/sidenav' element={<SideNav/>} />
          <Route path='/information' element={<Information />}/>
          <Route path='/new' element={<New />} /> 
          <Route path='/cameranav' element={<CameraNav />} />
          <Route path='/done' element={<Done />} />
        </Route>
      </Routes>
        
    </>
  )
}

export default App;
