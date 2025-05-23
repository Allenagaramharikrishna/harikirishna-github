import React, { useState } from "react";

const Calculator = () => {
  const [result, setResult] = useState("");
  const handleclick = (e) => {
    setResult(result.concat(e.target.name));
  };
  const Clear = () => {
    setResult("");
  };
  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  const handleResult = () => {
    setResult(eval(result));
  };

  return (
    <div className="Container">
      <form>
        <input type="text" value={result} />
      </form>
      <div className="Keypad">
        <button className="highlight" onClick={Clear} id="Clear">
          Clear
        </button>
        <button className="highlight" onClick={backspace} id="backspace">
          C
        </button>
        <button className="highlight" name="/" onClick={handleclick}>
          &divide;
        </button>
        <button name="7" onClick={handleclick}>
          7
        </button>
        <button name="8" onClick={handleclick}>
          8
        </button>
        <button name="9" onClick={handleclick}>
          9
        </button>
        <button className="highlight" name="*" onClick={handleclick}>
          &times;
        </button>
        <button name="4" onClick={handleclick}>
          4
        </button>
        <button name="5" onClick={handleclick}>
          5
        </button>
        <button name="6" onClick={handleclick}>
          6
        </button>
        <button className="highlight" name="-" onClick={handleclick}>
          -
        </button>
        <button name="1" onClick={handleclick}>
          1
        </button>
        <button name="2" onClick={handleclick}>
          2
        </button>
        <button name="3" onClick={handleclick}>
          3
        </button>
        <button className="highlight" name="+" onClick={handleclick}>
          +
        </button>
        <button name="0" onClick={handleclick}>
          0
        </button>
        <button name="." onClick={handleclick}>
          .
        </button>
        <button name=" " onClick={handleclick}></button>

        <button className="highlight" onClick={handleResult} id="Result">
          Result
        </button>
      </div>
    </div>
  );
};

export default Calculator;
