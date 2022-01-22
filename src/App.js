import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header"> /* keeps div at top of page */
        <div className="logo" />
        <span className="title">CHATTER!</span>
      </header>
      <footer className="footer"> /* keeps div at bottom of page */
        <input className="text-input" /> /* allows users to input their own text */
        <button className="send">↑</button>
      </footer>
    </div>
  );
}

export default App;
