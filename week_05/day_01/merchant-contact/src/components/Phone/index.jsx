const Phone = (props) => {

  return (
    <a class="btn btn-primary m-1" href={`callto:${props.number}`}>Appeler</a>
  );
};

export default Phone
