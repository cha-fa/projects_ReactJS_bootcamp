import Email from '../../components/Email';
import Phone from '../../components/Phone'

const Client = (props) => {
  const { firstName, lastName, phoneNumber, picture, job } = props.data;

  return (

    <div class="col-sm-12 col-md-4 p-2 card mb-2">
      <img class="card-img-top" src={picture} alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">{firstName} {lastName}</h5>
        <p class="card-text">Job: {job}</p>
        <Phone number={phoneNumber} />
        <Email firstName={firstName} lastName={lastName} />
      </div>
    </div>



  );
};

export default Client
