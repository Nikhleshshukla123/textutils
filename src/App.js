import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

/**
 * The main application component.
 *
 * @returns {JSX.Element} The JSX element representing the application.
 */
function App() {
  return (
    <div className="app-container">
      {/* <Navbar title="TextUtils" aboutText="About" /> */}
      <div className="container my-3">
        <TextForm heading="Enter The Text To Analyze Below" mode="light" />
      </div>
    </div>
  );
}

export default App;