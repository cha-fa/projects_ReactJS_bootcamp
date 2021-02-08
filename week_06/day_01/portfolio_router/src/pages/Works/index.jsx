import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import works from "../../data/works";
import Work from "../../pages/Work";

const Works = () => {
  const categoryList = works.map((work) => (
    <li key={work.category}>
      <Link to={"/works/" + work.category}>{work.category}</Link>
    </li>
  ));

  return (
    <div>
      <h1>Welcome on the works page. Please, select a category</h1>
      <ul>{categoryList}</ul>
      <Switch>
        <Route path="/works/:category" component={Work} />
      </Switch>
    </div>
  );
};

export default Works;
