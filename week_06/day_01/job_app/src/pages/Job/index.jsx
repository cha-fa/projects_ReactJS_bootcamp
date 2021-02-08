import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useParams,
} from "react-router-dom";
import JobCategory from "components/JobCategory";
import JobSkills from "components/JobSkills";

const Job = () => {
  const { uuid } = useParams();
  const [currentJob, setCurrentJob] = useState();

  const fetchJob = () => {
    fetch(`http://api.dataatwork.org/v1/jobs/${uuid}`)
      .then((response) => response.json())
      .then((response) => setCurrentJob(response));
  };
  useEffect(() => {
    fetchJob();
  }, [uuid]);

  return (
    <div>
      {(currentJob && (
        <div>
          <h1>{currentJob.title}</h1>
          <JobCategory category={currentJob.parent_uuid} />
          <JobSkills job={currentJob} />
        </div>
      )) ||
        "Please wait..."}
    </div>
  );
};

export default Job;
