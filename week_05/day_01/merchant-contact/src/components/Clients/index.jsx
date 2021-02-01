import React from 'react';
import faker from 'faker';
import Client from 'components/Client';
import { Container, Row, Col } from 'react-bootstrap';

const Clients = () => {
  let clientsList = Array.from({ length: 100 }, () => ({
    id: faker.random.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber('+3306########'),
    picture: faker.image.people(),
    job: faker.name.jobTitle(),
  }));


  return (
    <Container>
      <Row>
        {clientsList.map((clientData) => (
          <Client data={clientData} key={clientData.id} />
        ))}
      </Row>
    </Container>
  );
};

export default Clients;
