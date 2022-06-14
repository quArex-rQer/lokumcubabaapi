import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Adminapplication from './pages/adminApplication/Adminapplication';
import Application from './pages/applications/Application';
import Home from './pages/home/Home';
import Login from './pages/login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/application' element={<Application />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin/application' element={<Adminapplication />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
