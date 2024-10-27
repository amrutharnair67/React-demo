import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterPage from './Components/registrationPage/RegisterPage';
import "react-toastify/dist/ReactToastify.css";

import LoginPage from './Components/loginPage/LoginPage';
import Welcomepage from './Components/welcomePage/Welcomepage';
import ForgotPassword from './Components/forgotpasswordPage/ForgotpasswordPage';
import ResetPassword from './Components/resetpasswordPage/ResetpasswordPage';
import DashboardPage from './Components/dashboardPage/DashboardPage';

function App() {
  return (
    <div>
    
      <BrowserRouter>
      <Routes>


        <Route path='/' element={<Welcomepage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/forgotpassword' element={<ForgotPassword/>}/>
        <Route path='/resetpassword' element={<ResetPassword/>}/>
        <Route path='/dashboard' element={<DashboardPage/>}/>
        
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
