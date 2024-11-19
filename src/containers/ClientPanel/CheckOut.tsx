
const CheckOut = () => {
  return (
    <div className="container mt-4 mb-4">
      <div>
        <h1>Your Order:</h1>
      </div>
      <div className="d-flex justify-content-between mt-5">
        <p style={{fontSize: '40px'}}>Pepperoni</p>
        <p style={{fontSize: '40px'}}>450 KGS</p>
        <div>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
      <br/>
      <br/>
      <div className="d-flex justify-content-between mt-5" style={{fontSize: '40px'}}>
        <p>Delivery</p>
        <p>150 KGS</p>
      </div>
      <div className="d-flex justify-content-between" style={{fontSize: '40px'}}>
        <p>Total</p>
        <p>600 KGS</p>
      </div>
      <div className="d-flex flex-row mt-5">
        <button className="btn btn-primary me-5" style={{fontSize: '40px'}}>Cancel</button>
        <button className="btn btn-success" style={{fontSize: '40px'}}>Order</button>
      </div>
    </div>

  );
};

export default CheckOut;