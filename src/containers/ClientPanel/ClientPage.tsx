import {useNavigate} from 'react-router-dom';

const ClientPage = () => {
  const navigate = useNavigate();
  const checkOutClick = () => {
    navigate('/checkout');
  };

  return (
    <div className="container mt-2 mb-4">
      <div className="d-flex justify-content-between">
        <h2 className="mt-3">Turtle Pizza</h2>
      </div>
      <div>
        <div className="card-body">
          <div className="card d-flex flex-row justify-content-between mt-3">
            <img style={{width: '20%'}}
                 src="https://www.simplyrecipes.com/thmb/KE6iMblr3R2Db6oE8HdyVsFSj2A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-1024x682-583b275444104ef189d693a64df625da.jpg"
                 alt="img"/>
            <div>
              <p style={{fontSize: '40px'}} className="mt-5 me-5">Pepperoni</p>
            </div>
            <p style={{fontSize: '40px'}} className="mt-5 me-5">450 KGS</p>
          </div>
          <div className="card d-flex flex-row justify-content-between mt-4">
            <img style={{width: '20%'}}
                 src="https://www.simplyrecipes.com/thmb/KE6iMblr3R2Db6oE8HdyVsFSj2A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-1024x682-583b275444104ef189d693a64df625da.jpg"
                 alt="img"/>
            <div className="me-4">
              <p style={{fontSize: '40px'}} className="mt-5 me-5">Pepperoni</p>
            </div>
            <p style={{fontSize: '40px'}} className="mt-5 me-5">450 KGS</p>
          </div>
          <div className="card d-flex flex-row justify-content-between mt-4">
            <img style={{width: '20%'}}
                 src="https://www.simplyrecipes.com/thmb/KE6iMblr3R2Db6oE8HdyVsFSj2A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-1024x682-583b275444104ef189d693a64df625da.jpg"
                 alt="img"/>
            <div>
              <p style={{fontSize: '40px'}} className="mt-5 me-5">Pepperoni</p>
            </div>
            <p style={{fontSize: '40px'}} className="mt-5 me-5">450 KGS</p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between mt-3">
        <h3>Order Total : 450 KGS</h3>
        <button onClick={checkOutClick} style={{fontSize: '25px'}}
                className="btn btn-info btn-outline-success">CheckOut
        </button>
      </div>
    </div>

  );
};

export default ClientPage;