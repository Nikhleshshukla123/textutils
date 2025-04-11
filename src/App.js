import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
<Navbar title="TextUtils" aboutText="About"/>
<div className="container my-3">
  <TextForm heading="Enter The Text To Analyze Below" mode="light" />
</div>
    </>
  );
}

export default App;
