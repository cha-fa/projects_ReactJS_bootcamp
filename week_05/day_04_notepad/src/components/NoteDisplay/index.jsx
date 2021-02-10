import { useEffect, useState } from "react";
import Converter from "components/Converter";
import { Row } from "react-bootstrap";

const NoteDisplay = (props) => {
  const [title, setTitle] = useState(props.title);
  const [content, setContent] = useState(props.content);

  useEffect(() => {
    setTitle(props.title);
  }, [props.title]);

  useEffect(() => {
    setContent(props.content);
  }, [props.content]);

  return (
    <div id="NoteDisplay" className="pl-5">
      <Row className="w-100">
        <h1>{title}</h1>
      </Row>
      <Row className="w-100">
        <Converter text={content} />
      </Row>
    </div>
  );
};

export default NoteDisplay;
