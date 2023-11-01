import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header Component with small logo at the left */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Navigation Component */}
        <nav className="right-nav">
          <ul className="menu-list">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
export default App;
