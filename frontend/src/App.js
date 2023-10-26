import './App.css';
import NavBar from './components/NavBar';
import TextArea from './components/TextArea';
import "./components/TextArea.css"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <div className='row'>
        <NavBar />
        <TextArea />   
    </div>
    {/* <Routes>
      <Route path='/' />
    </Routes> */}
    </>
  );
}

export default App;
