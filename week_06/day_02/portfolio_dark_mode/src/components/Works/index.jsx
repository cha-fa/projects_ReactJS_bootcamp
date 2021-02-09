import React from "react";
import works from "works.json";

const Works = () => {
  return (
    <div>
      <h2>{works.presentation}</h2>
      <ul>
        {works.works.map((work) => (
          <li key={work.id}>
            <h6>{work.title}</h6>
            <img src={work.img} alt="project illustration"></img>
            <p>{work.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Works;
