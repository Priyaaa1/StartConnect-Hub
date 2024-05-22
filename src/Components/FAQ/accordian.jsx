import './accordian.css';
import { useState } from "react";
import data from "./data";

function Accordian () {

    const [selected, setSelected] = useState(null);

    function handleSelection (getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    return (
        
        <>
        <h2> FAQ's</h2>
        <div id="accordian">
        <div className="accordian" data-aos="flip-up">
            {
                data && data.length > 0 ? 
                data.map(dataItem=> <div className="item" > 
                <div onClick = { () => handleSelection(dataItem.id)} className="question"> <h3> {dataItem.question} </h3> <span>  </span> </div> 

                {
                    selected === dataItem.id ? 
                    <div className="content"> {dataItem.answer} </div> 
                    
                    : null

                }
                </div>)
                
                
                : <div> No data present </div>
            }

        </div>
        
        
        </div>

        </>
    );



}

export default Accordian; 