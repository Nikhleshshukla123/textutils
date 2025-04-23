// App.js
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/**
 * The main application component.
 *
 * @returns {JSX.Element} The JSX element representing the application.
 */
function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar title="TextUtils" aboutText="About" />
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<TextForm heading="Enter The Text To Analyze Below" mode="light" />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
