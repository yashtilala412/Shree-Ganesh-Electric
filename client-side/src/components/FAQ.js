// FAQ.jsx

import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa"; // Importing icons from react-icons library

const FAQ = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="faq">
            <ul>
                {data.map((item, index) => (
                    <li key={item.id}>
                        <h3 onClick={() => toggleAnswer(index)}>
                            {item.question}
                            {activeIndex === index ? <FaAngleUp /> : <FaAngleDown />}
                        </h3>
                        {activeIndex === index && <p>{item.answer}</p>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FAQ;
