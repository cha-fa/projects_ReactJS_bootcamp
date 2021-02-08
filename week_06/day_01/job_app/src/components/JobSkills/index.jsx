import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const JobSkills = ({ job }) => {
  const [currentSkills, setCurrentSkills] = useState();

  const fetchSkills = () => {
    fetch(`http://api.dataatwork.org/v1/jobs/${job.uuid}/related_skills`)
      .then((response) => response.json())
      .then((response) => setCurrentSkills(response.skills));
  };

  useEffect(() => {
    fetchSkills();
  }, [job]);

  return (
    <div>
      <h1>Skills needed for the job: {job.title}</h1>
      <ul>
        {(currentSkills &&
          currentSkills.map((skill) => (
            <li key={skill.skill_uuid}>
              <Link to={"/skill/" + skill.skill_uuid}>{skill.skill_name}</Link>
              <p>{skill.description}</p>
            </li>
          ))) ||
          "Please wait..."}
      </ul>
    </div>
  );
};

export default JobSkills;
