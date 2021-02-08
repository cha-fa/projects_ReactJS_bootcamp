import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "components/Navbar";
import Jobs from "pages/Jobs";
import Job from "pages/Job";
import Skill from "pages/Skill";

const App = () => {
  const [searchInput, setSearchInput] = useState("");
  const storedSearches = JSON.parse(
    localStorage.getItem("thp_storage_previous_jobs") || "[]"
  );
  const [newClickedJob, setNewClickedJob] = useState("");
  const [previousClickedJobs, setPreviousClickedJobs] = useState(
    storedSearches || []
  );

  const handleClickedJob = (job) => {
    setNewClickedJob(job);
  };

  const handleSearchInput = (input) => {
    setSearchInput(input);
  };

  useEffect(() => {
    setPreviousClickedJobs((prevJobs) => [...prevJobs, newClickedJob]);
  }, [newClickedJob]);

  useEffect(() => {
    localStorage.setItem(
      "thp_storage_previous_jobs",
      JSON.stringify(previousClickedJobs)
    );
  }, [previousClickedJobs]);

  console.log(newClickedJob, "NEW CLICKED JOB IN APP");

  return (
    <Router>
      <Navbar handleSearchInput={handleSearchInput} />
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
