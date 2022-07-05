import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Header from './components/Header';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Header/>
      <Routes>

      <Route element={<Login/>} path="login"/>
      <Route element={<Signup/>} path="signup"/>

      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
