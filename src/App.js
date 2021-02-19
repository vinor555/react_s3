import logo from './logo.svg';
import './App.css';
import Webcam from "react-webcam";
const WebcamComponent = () => <Webcam />;

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <WebcamComponent />
        <p>
          Kevin Ariel Cruz Ortiz - 201213059
        </p>
        
      </header>
    </div>
  );
}

export default App;
