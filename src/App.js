import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Edit from './components/Edit';
import Add from './components/Add';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/Edit' element={<Edit/>} /> 
        <Route path='/Add' element={<Add/>} /> 

      </Routes>


    </div>
  );
}

export default App;
