import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import List  from './pages/List.jsx';
import Hotel from './pages/Hotel.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotel" element={ <List/>}/>
        <Route path="/hotel/:id" element={ <Hotel/>}/>
      </Routes>
    </Router>
  );
}

export default App;
