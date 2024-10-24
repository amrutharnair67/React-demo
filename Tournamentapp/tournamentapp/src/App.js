import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterPage from './Components/registrationPage/RegisterPage';

import LoginPage from './Components/loginPage/LoginPage';
import Welcomepage from './Components/welcomePage/Welcomepage';
import ForgotPassword from './Components/forgotpasswordPage/ForgotpasswordPage';
import ResetPassword from './Components/resetpasswordPage/ResetpasswordPage';

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
        
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
