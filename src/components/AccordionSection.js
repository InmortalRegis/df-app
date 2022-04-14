import React from "react";
import "./AccordionSection.css";
import ChevronDown from "./Icons/ChevronDown";
import ChevronUp from "./Icons/ChevronUp";

const AccordionSection = ({ content, title }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="product-description__title"
      >
        <p>{title}</p>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </div>
      {isOpen ? (
        <div className="product-description__panel">
          <p dangerouslySetInnerHTML={{ __html: content }}></p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default AccordionSection;
