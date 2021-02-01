const Email = (props) => {

  return (
    <a class="btn btn-primary m-1" href={`mailto:${props.lastName.toLowerCase()}.${props.firstName.toLowerCase()}@gmail.com`}>Envoyer un mail</a>
  );
};

export default Email
