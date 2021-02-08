import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useParams,
} from "react-router-dom";

const Skill = () => {
  const { skill_uuid } = useParams();
  const [currentRelatedJobs, setCurrentRelatedJobs] = useState();
  const [currentSkill, setCurrentSkill] = useState();

  const fetchRelatedJobs = () => {
    fetch(`http://api.dataatwork.org/v1/skills/${skill_uuid}/related_jobs`)
      .then((response) => response.json())
      .then((response) => {
        console.log(
          "response in fetch jobs",
          response.jobs,
          "skill name",
          response.skill_name
        );
        setCurrentRelatedJobs(response.jobs);
        setCurrentSkill(response.skill_name);
      });
  };
  useEffect(() => {
    fetchRelatedJobs();
  }, [skill_uuid]);

  return (
    <div>
      {(currentRelatedJobs && (
        <div>
          <h1>Jobs with the skill: {currentSkill}</h1>
          <ul>
            {currentRelatedJobs &&
              currentRelatedJobs.map((job) => (
                <li key={job.job_uuid}>
                  <Link to={"/job/" + job.job_uuid}>{job.job_title}</Link>
                </li>
              ))}
          </ul>
        </div>
      )) ||
        "Please wait..."}
    </div>
  );
};

export default Skill;
