import { useState, useEffect } from "react";

const JobCategory = ({ category }) => {
  const [currentCategory, setCurrentCategory] = useState();

  const fetchCategory = () => {
    fetch(`http://api.dataatwork.org/v1/jobs/${category}`)
      .then((response) => response.json())
      .then((response) => setCurrentCategory(response));
  };

  useEffect(() => {
    fetchCategory();
  }, [category]);

  return (
    <div>
      {(currentCategory && (
        <div>
          <h2>{currentCategory.title}</h2>
          <p>{currentCategory.description}</p>
        </div>
      )) ||
        "Please wait..."}
    </div>
  );
};

export default JobCategory;
