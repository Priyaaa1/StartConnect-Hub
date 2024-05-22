import "./accordian.css";
import { useEffect, useRef, useState } from "react";
import data from "./data";
import { FaChevronDown } from "react-icons/fa6";

function Accordian() {
  // for rotating the arrow icon
  const [selected, setSelected] = useState(null);
  // for smooth scroll of content
  const [heights, setHeights] = useState({});
  const refs = useRef([]);

  function handleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  // to get the content height of answer
  useEffect(() => {
    const newHeights = {};
    refs.current.forEach((ref, index) => {
      if (ref) {
        newHeights[data[index].id] = ref.scrollHeight;
      }
    });
    setHeights(newHeights);
  }, [data]);

  return (
    <>
      <h2> FAQ&apos;s</h2>
      <div id="accordian">
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((dataItem, index) => (
              <div className="item" key={dataItem.id}>
                <div
                  onClick={() => handleSelection(dataItem.id)}
                  className="question"
                >
                  <h3> {dataItem.question} </h3>
                  <div
                    className={`arrow-icon ${
                      selected === dataItem.id ? "active" : ""
                    }`}
                  >
                    <FaChevronDown />
                  </div>
                </div>

                <div
                  ref={(el) => (refs.current[index] = el)}
                  className="content"
                  style={{
                    maxHeight:
                      selected === dataItem.id
                        ? // dataItem.id gives only content height
                          `${heights[dataItem.id]}px`
                        : "0",
                    padding: selected === dataItem.id ? "20px" : "",
                    border: selected === dataItem.id ? "3px solid black" : "",
                    margin: selected === dataItem.id ? "10px" : "",
                  }}
                >
                  {dataItem.answer}
                </div>
              </div>
            ))
          ) : (
            <div> No data present </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Accordian;
