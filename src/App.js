import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Header from './components/Header';
import Preview from './components/Preview';
import Dashboard from './components/Dashboard';
import Form from './components/Form';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Header/>
      <Routes>

      <Route element={<Login/>} path="login"/>
      <Route element={<Signup/>} path="signup"/>
      <Route element={<Preview/>} path="preview"/>
      <Route element={<Dashboard/>} path="dashboard"/>
      <Route element={<Form/>} path="form"/>

      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
