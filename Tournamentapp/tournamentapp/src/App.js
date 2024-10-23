import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';

function App() {
  return (
    <div>
    
      <BrowserRouter>
      <Routes>


        <Route path='/' element={<LoginPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/regiter' element={<RegisterPage/>}/>
        
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
