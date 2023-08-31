import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Layout from './pages/Layout';
import Login from './pages/login';
import NotFoundPage from './pages/NotFoundPage';
import Signup from './pages/signup';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Homepage />}></Route>
        <Route path='home' element={<Homepage />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='signup' element={<Signup />}></Route>
        <Route path='*' element={<NotFoundPage />}></Route>
      </Route>
  </Routes>
  </BrowserRouter>
);

export default App;