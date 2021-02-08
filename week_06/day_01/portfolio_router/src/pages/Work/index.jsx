import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useParams,
} from "react-router-dom";
import works from "../../data/works";

const Work = () => {
  const { category } = useParams();
  const [currentWorks, setCurrentWorks] = useState(undefined);

  useEffect(() => {
    const foundWorks = works.filter((work) => work.category === category);
    setCurrentWorks(foundWorks);
  }, [category]);

  console.log("CURRENT WORKS", currentWorks);

  return <h1>{currentWorks ? currentWorks[0].content : "Pas de works"}</h1>;
};

export default Work;
