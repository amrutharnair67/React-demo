import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterPage from './Components/registrationPage/RegisterPage';

import LoginPage from './Components/loginPage/LoginPage';
import Welcomepage from './Components/welcomePage/Welcomepage';

function App() {
  return (
    <div>
    
      <BrowserRouter>
      <Routes>


        <Route path='/' element={<Welcomepage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/regiter' element={<RegisterPage/>}/>
        
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
