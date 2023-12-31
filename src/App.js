import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css';
import Homepage from './components/Homepage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
