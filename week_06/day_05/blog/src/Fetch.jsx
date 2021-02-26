import { useState, useEffect } from "react";

const Fetch = () => {
  const [clients, setClients] = useState();
  const fetchClients = () => {
    fetch("http://localhost:1337/clients")
      .then((response) => response.json())
      .then((response) => setClients(response));
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <div>
      <ul>
        {clients &&
          clients.map((client) => (
            <li key={client.id}>
              <p>{client.name}</p>
              <p>{client.description}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Fetch;

import React from "react";
