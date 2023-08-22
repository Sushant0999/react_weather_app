import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom'; // Use BrowserRouter as Router
import './App.css';
import Homepage from './components/Homepage';
import SearchPage from '../src/components/SearchPage'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
