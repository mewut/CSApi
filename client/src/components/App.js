import './App.css';
import HomePage from './HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SecondPage from './SecondPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/second-page" element={<SecondPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
