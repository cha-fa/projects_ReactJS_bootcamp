import React from "react";
import Preview from "components/Preview";
import NewBtn from "components/NewBtn";
import { Col } from "react-bootstrap";

const Sidebar = ({ notesList, getNoteToDisplay }) => {
  return (
    <Col>
      <NewBtn />
      {notesList.map((note, index) => {
        return (
          <Preview
            key={index}
            title={Object.keys(note)[0]}
            content={Object.values(note)[0]}
            getNoteToDisplay={getNoteToDisplay}
          />
        );
      })}
    </Col>
  );
};

export default Sidebar;
