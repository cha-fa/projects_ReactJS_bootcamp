import React from 'react';

const Form = () => {
  const lowerInput = (event) => {
    event.target.value = event.target.value.toLowerCase()
  };

return (
  <form>
    <label>Your search: </label>
    <input onChange={lowerInput} type="text" id="search"/>
  </form>
  )
}

export default Form
