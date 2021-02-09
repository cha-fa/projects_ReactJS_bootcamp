import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Navbar from "components/Navbar";
import Jobs from "pages/Jobs";
import Job from "pages/Job";
import Skill from "pages/Skill";

const App = () => {
  const [searchInput, setSearchInput] = useState("");
  const storedSearches = JSON.parse(
    localStorage.getItem("thp_storage_previous_jobs") || "[]"
  );
  const [previousClickedJobs, setPreviousClickedJobs] = useState(
    storedSearches || []
  );

  const handleClickedJob = (job) => {
    setPreviousClickedJobs((prevJobs) => [...prevJobs, job]);
  };

  const handleSearchInput = (input) => {
    setSearchInput(input);
  };

  useEffect(() => {
    localStorage.setItem(
      "thp_storage_previous_jobs",
      JSON.stringify(previousClickedJobs)
    );
  }, [previousClickedJobs]);

  return (
    <Router>
      <Navbar handleSearchInput={handleSearchInput} />
      <p>You previously viewed :</p>
      <ul>
        {previousClickedJobs &&
          previousClickedJobs.slice(-1 * 6).map((job) => (
            <li key={job[1]}>
              <Link to={"/job/" + job[1]}>{job[0]} </Link>
            </li>
          ))}
      </ul>
      <main>
        <Switch>
          <Route path="/" exact>
            <Jobs
              searchKeyword={searchInput}
              handleClickedJob={handleClickedJob}
            />
          </Route>
          <Route path="/job/:uuid">
            <Job />
          </Route>
          <Route path="/skill/:skill_uuid">
            <Skill />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
