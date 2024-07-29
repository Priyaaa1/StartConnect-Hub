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
        <div className="accordian" data-aos="flip-up">
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
                      selected === dataItem.id ? "active-faq" : ""
                    }`}
                  >
                    <FaChevronDown />
                  </div>
                </div>

                <div
                  ref={(el) => (refs.current[index] = el)}
                  className={`content ${selected === dataItem.id ? "show" : ""}`}
                  style={{
                    maxHeight: selected === dataItem.id ? `${heights[dataItem.id]}px` : "0",
                  }}
                >
                  {dataItem.answer}
                </div>
              </div>
            ))
          ) : (
            <div className="no-data"> No data present </div>
          )}
        </div>
      </div>
    </>
  );
}
export default Accordian;
