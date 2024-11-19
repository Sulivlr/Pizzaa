const AdminOrders = () => {
  return (
    <div className="container mt-2 mb-4">
      <div className="mt-4">
        <h2>Orders</h2>
      </div>
      <div>
        <div className="card-body">
          <div className="card d-flex flex-row justify-content-between mt-3">
            <div style={{fontSize: '40px'}} className="mt-3 ms-5">
              <p>Pepperoni</p>
              <p>Cola</p>
              <p>Delivery</p>
            </div>
            <div style={{fontSize: '40px'}} className="mt-3">
              <p>450 KGS</p>
              <p>80 KGS</p>
              <p>150 KGS</p>
            </div>
            <div style={{fontSize: '40px'}} className="mt-3 me-5">
              <p>Orders Total: </p>
              <p>680 KGS</p>
              <button style={{fontSize: '20px'}} className="btn btn-success me-5">Complete order</button>
            </div>
          </div>
          <div className="card d-flex flex-row justify-content-between mt-3">
            <div style={{fontSize: '40px'}} className="mt-3 ms-5">
              <p>Pepperoni</p>
              <p>Cola</p>
              <p>Delivery</p>
            </div>
            <div style={{fontSize: '40px'}} className="mt-3">
              <p>450 KGS</p>
              <p>80 KGS</p>
              <p>150 KGS</p>
            </div>
            <div style={{fontSize: '40px'}} className="mt-3 me-5">
              <p>Orders Total: </p>
              <p>680 KGS</p>
              <button style={{fontSize: '20px'}} className="btn btn-success me-5">Complete order</button>
            </div>
          </div>
          <div className="card d-flex flex-row justify-content-between mt-3">
            <div style={{fontSize: '40px'}} className="mt-3 ms-5">
              <p>Pepperoni</p>
              <p>Cola</p>
              <p>Delivery</p>
            </div>
            <div style={{fontSize: '40px'}} className="mt-3">
              <p>450 KGS</p>
              <p>80 KGS</p>
              <p>150 KGS</p>
            </div>
            <div style={{fontSize: '40px'}} className="mt-3 me-5">
              <p>Orders Total: </p>
              <p>680 KGS</p>
              <button style={{fontSize: '20px'}} className="btn btn-success me-5">Complete order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;