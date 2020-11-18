import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="display-2">
          Hackaton <code className="App-link">React.js</code> 2020{" "}
        </h1>
        <p className="display-4">'React-Team-Two'</p>
        <a
          className="App-link"
          href="https://github.com/Hackaton-ReactJS-Team-React-Two/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Building "BreakingPedia" . . .
        </a>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
