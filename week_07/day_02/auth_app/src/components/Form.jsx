import React from "react";
import Cookies from "js-cookie";

const Form = () => {
  const sendData = () => {
    const data = {
      username: "kikou zzdd",
      email: "chacha@gmail.com",
      password: "testing123",
    };

    fetch("http://localhost:1337/auth/local/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => Cookies.set("token", response.jwt));
  };

  const showCookie = () => {
    console.log(Cookies.get("token"));
  };

  const getMe = () => {
    const data = {
      identifier: "chacha@gmail.com",
      password: "testing123",
    };
    fetch("http://localhost:1337/auth/local", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => console.log("FETCH GET", response));
  };

  return (
    <div className="Form">
      Formulaire inscription
      <button onClick={sendData}>BUTTON</button>
      <button onClick={showCookie}>SHOW COOKIE</button>
      <button onClick={getMe}>GET</button>
    </div>
  );
};

export default Form;
