import './Main.css';
import { useState } from "react";
import data from "./data";

function Faq () {

    const [selected, setSelected] = useState(null);

    const handleSelection = (id) => {
        setSelected(id === selected ? null : id);
    };

    return (
        <>
            <h2 className='faqh2'>FAQs</h2>
            <div id="faq">
                <div className="faq">
                    {data && data.length > 0 ? (
                        data.map((dataItem) => (
                            <div key={dataItem.id} className="item">
                                <div onClick={() => handleSelection(dataItem.id)} className="faqquestion">
                                    <h3>{dataItem.question}</h3>
                                    <span></span>
                                </div>
                                {selected === dataItem.id && (
                                    <div className="faqcontent">{dataItem.answer}</div>
                                )}
                            </div>
                        ))
                    ) : (
                        <div>No data present</div>
                    )}
                </div>
            </div>
        </>
    );



}

export default Faq; 