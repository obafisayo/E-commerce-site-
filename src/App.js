import logo from './logo.svg';
import './App.css';
import ScrollToTop from './components/scrollToTop/ScrollToTop';

function App() {
  return (
    <div className="App">
      <header className="App-header bg-blue-500">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ScrollToTop />
    </div>
  );
}

export default App;
