import Homepage from './pages/Homepage';
import Layout from './pages/Layout';
import Login from './pages/Login';
import Map from './pages/Map';
import NotFoundPage from './pages/NotFoundPage';

import Signup from './pages/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {

  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path='home' element={<Homepage />} />
        <Route path='login' element={<Login />} />
        <Route path='map' element={<Map />} />
        <Route path='signup' element={<Signup />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
};

export default App;