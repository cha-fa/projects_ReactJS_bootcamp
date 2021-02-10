import React from "react";
import { Row } from "react-bootstrap";

const SaveButton = ({ title, content, getLastList }) => {
  const handleClick = () => {
    if (title && content) {
      const note = { [title]: content };
      getLastList(note);
    }
  };

  return (
    <Row className="ml-5">
      {title && content && (
        <button type="button" id="SaveButton" onClick={handleClick}>
          Sauvegarder
        </button>
      )}
      {(!title || !content) && <p>Il te faut un titre et un contenu !</p>}
    </Row>
  );
};

export default SaveButton;
