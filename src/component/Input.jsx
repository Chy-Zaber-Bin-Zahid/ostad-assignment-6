import { useState } from "react";
import "../assets/css/input.css";
function Input() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const send = () => {
    list.push(item);
    setList([...list]);
  };

  return (
    <div className="input-main">
      <input
        placeholder="List"
        onChange={(e) => setItem(e.target.value)}
        className="input"
        type="text"
      />
      <div>
        <button onClick={send} className="btn">
          Add
        </button>
      </div>
      <ol className="list-ol">
        {list.length !== 0 ? (
          list.map((ele, idx) => {
            return (
              <div className="list-main">
                <li>{ele}</li>
                <button
                  onClick={(idx) => {
                    list.splice(idx, 1);
                    setList([...list])
                  }}
                  className="btn"
                >
                  X
                </button>
              </div>
            );
          })
        ) : (
          <li></li>
        )}
      </ol>
    </div>
  );
}

export default Input;
