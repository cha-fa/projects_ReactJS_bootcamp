import { useState, useEffect } from "react";
import SaveButton from "components/SaveButton";
import { Row, Col } from "react-bootstrap";
import "components/MarkdownInput/MarkdownInput.scss";
import NoteDisplay from "components/NoteDisplay";

const MarkdownInput = ({ getLastList, noteToDisplay }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const getContent = () => {
    const notesList = JSON.parse(localStorage.getItem("notes"));
    notesList &&
      notesList.forEach((obj, index) => {
        if (Object.keys(obj)[0] === noteToDisplay) {
          setTitle(noteToDisplay);
          setContent(obj[noteToDisplay]);
        }
      });
  };

  useEffect(() => {
    getContent();
  }, [noteToDisplay]);

  useEffect(() => {
    document.getElementById("newNote").addEventListener("click", (event) => {
      setTitle("");
      setContent("");
    });
  }, []);

  return (
    <Col>
      <NoteDisplay title={title} content={content} />
      <Row id="inputForm" className="pl-5">
        <Row className="section w-100 p-1 d-flex justify-content-center">
          <input
            placeholder="Titre"
            className="w-100"
            value={title}
            maxLength="50"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Row>
        <Row className="section w-100 p-1 d-flex justify-content-center">
          <textarea
            placeholder="Titre"
            className="w-100"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="12"
            required
          />
        </Row>
      </Row>
      <SaveButton title={title} content={content} getLastList={getLastList} />
    </Col>
  );
};

export default MarkdownInput;
