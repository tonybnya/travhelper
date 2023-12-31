import Homepage from './pages/Homepage';
import Information from './pages/Information';
import Layout from './pages/Layout';
import Login from './pages/Login';
import NotFoundPage from './pages/NotFoundPage';
// import { useState } from 'react';
import Signup from './pages/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path='home' element={<Homepage />} />
        <Route path='login' element={<Login />} />
        <Route path='map' element={<Information />} />
        <Route path='signup' element={<Signup />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
};

export default App;
