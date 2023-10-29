import './App.css';
import NavBar from './components/NavBar';
import TextArea from './components/TextArea';
import "./components/TextArea.css"
import { Routes, Route, Router } from "react-router-dom";
import Login from './components/login';
import MainPage from './pages/mainpage';


function App() {
  return (
    <>
    <div className='row'>
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/textarea' element={<MainPage/>} />
        </Routes>  
    </div>
    </>
 );
}

export default App;
