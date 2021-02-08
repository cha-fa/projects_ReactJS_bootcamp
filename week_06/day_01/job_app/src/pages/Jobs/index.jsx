import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const Jobs = ({ searchKeyword, handleClickedJob }) => {
  const [searchResults, setSearchResults] = useState(undefined);

  const fetchJobs = () => {
    fetch(
      `http://api.dataatwork.org/v1/jobs/autocomplete?begins_with=${searchKeyword}`
    ).then((response) => {
      if (response.ok) {
        response.json().then((response) => setSearchResults(response));
      } else {
        setSearchResults(undefined);
      }
    });
  };

  const handleClick = (event) => {
    const jobInfo = [event.target.innerHTML, event.target.id];
    handleClickedJob(jobInfo);
  };

  useEffect(() => {
    searchKeyword.length > 2 ? fetchJobs() : setSearchResults(undefined);
  }, [searchKeyword]);

  return (
    <div>
      <h1>Jobs</h1>
      <ul>
        {searchResults &&
          searchResults.map((job) => (
            <li key={job.uuid}>
              <Link to={"/job/" + job.uuid} id={job.uuid} onClick={handleClick}>
                {job.suggestion}{" "}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Jobs;
