import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <Router basename='/portfolio'>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
