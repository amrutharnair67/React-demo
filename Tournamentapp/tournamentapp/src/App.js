import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import Welcomepage from './Components/Welcomepage';

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
