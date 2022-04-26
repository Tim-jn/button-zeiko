import { useState, useEffect, useRef } from "react";
import "../styles.css";

export default function Button() {
  const [color, setColor] = useState("#b8b8b8");
  const [displayText, setDisplayText] = useState(false);
  const buttonRef = useRef(null);

  const randomizeColor = () => {
    const randomColor = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
    setColor(randomColor);
    setDisplayText(true);
  };

  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setDisplayText(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  useOutsideAlerter(buttonRef);

  return (
    <div>
      <button
        type="button"
        className="button"
        style={{ background: color }}
        onClick={randomizeColor}
        ref={buttonRef}
      >
        Click me
      </button>
      {displayText ? <p>The color is {color}</p> : ""}
    </div>
  );
}
