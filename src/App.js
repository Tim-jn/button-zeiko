import Button from "./Components/Button";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Button />
      <div className="bottom-links">
        <a
          href="https://timjeanmart.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Portfolio
        </a>
        <a
          href="https://linkedin.com/in/timjeanmart"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
