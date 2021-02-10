import React from "react";
import Converter from "components/Converter";
import { Row } from "react-bootstrap";

const Preview = ({ title, content, getNoteToDisplay }) => {
  const handleClick = (event) => {
    getNoteToDisplay(title);
  };

  return (
    <div className="w-75" id="Preview" onClick={handleClick}>
      <Row>
        <h1>{title}</h1>
      </Row>
      <Row>
        <Converter
          text={content.length > 30 ? `${content.slice(0, 30)}...` : content}
        />
      </Row>
    </div>
  );
};

export default Preview;
