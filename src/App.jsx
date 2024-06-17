import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Bag from './pages/Bag';
import Klar from './pages/Klar';
import Profile from './pages/Profile';
import Progress from './pages/Progress';
import './styles.css';



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
        </Route>
      </Routes>
        
    </>
  )
}

export default App;
