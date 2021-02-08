import { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "components/Navbar";
import Jobs from "pages/Jobs";
import Job from "pages/Job";
import Skill from "pages/Skill";

const App = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = (input) => {
    setSearchInput(input);
  };

  return (
    <Router>
      <Navbar handleSearchInput={handleSearchInput} />
      <main>
        <Switch>
          <Route path="/" exact>
            <Jobs searchKeyword={searchInput} />
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
