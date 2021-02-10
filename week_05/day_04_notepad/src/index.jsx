import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import MarkdownInput from "components/MarkdownInput";
import Sidebar from "components/Sidebar";
import "main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

document.body.style = "background: black;";

const App = () => {
  const [notesList, setNoteslist] = useState([]);
  const [noteToDisplay, setNoteToDisplay] = useState("");

  const getLastList = (note) => {
    const newNoteList = [...notesList, note];
    setNoteslist(newNoteList);
    localStorage.setItem("notes", JSON.stringify(newNoteList));
  };

  const getNoteToDisplay = (noteTitle) => {
    setNoteToDisplay(noteTitle);
  };

  useEffect(() => {
    if (localStorage["notes"]) {
      setNoteslist(JSON.parse(localStorage["notes"]));
    }
  }, []);

  return (
    <Container>
      <Row>
        <Col sm={4} className="p-2">
          <Row>
            <Sidebar
              notesList={notesList}
              getNoteToDisplay={getNoteToDisplay}
            />
          </Row>
        </Col>
        <Col sm={8} className="p-2" style={{ borderLeft: "1px solid white" }}>
          <MarkdownInput
            getLastList={getLastList}
            noteToDisplay={noteToDisplay}
          />
        </Col>
      </Row>
    </Container>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
