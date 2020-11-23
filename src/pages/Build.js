import logo from "../images/logo.svg";
import "./styles/Build.css";


function Build() {
  return (
    <div className="Build">
      <header className="Build-header">
        <h1 className="display-2">
          Hackaton <code className="Build-link">React.js</code> 2020{" "}
        </h1>
        <p className="display-4">'React-Team-Two'</p>
        <a
          className="Build-link"
          href="https://github.com/Hackaton-ReactJS-Team-React-Two/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Building "BreakingPedia" . . .
        </a>
        <img src={logo} className="Build-logo" alt="logo" />
      </header>
    </div>
  );
}

export default Build;
