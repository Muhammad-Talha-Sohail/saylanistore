import logo from './logo.svg';
import './App.css';
import Home from './pages/common screen/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './pages/common screen/SignUp';
import Signin from './pages/common screen/SignIn';
import UserHome from './pages/users/UserHome';
import AdminHome from './pages/admin/AdminHome';
import AddProducts from './pages/admin/AddProducts';
import AHome from './pages/admin/AHome';
function App() {
  return (

    <div >
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/userHome' element={<UserHome/>} />
          <Route path='/AHome' element={<AHome />} />
          <Route path='/adminHome' element={<AdminHome/>} />
          <Route path='/addProducts' element={<AddProducts/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
