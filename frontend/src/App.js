import './App.css';
import NavBar from './components/NavBar';
import TextArea from './components/TextArea';
import "./components/TextArea.css"
import Message from './components/Message';

function App() {
  return (
    <>
    <div className='row'>
        <NavBar />
        {/* <Message /> */}
        <TextArea />   
    </div>
    </>
  );
}

export default App;
