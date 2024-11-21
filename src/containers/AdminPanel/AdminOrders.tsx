import {useSelector} from 'react-redux';
import {selectCartDishes} from '../../store/cartSlice';

const AdminOrders = () => {
  const cartDishes = useSelector(selectCartDishes);
  const delivery = 150;
  const total = cartDishes.reduce((sum, cartDish) => {
    return sum + (cartDish.dish.price * cartDish.amount);
  }, 0 + delivery);


  return (
    <div className="container mt-2 mb-4">
      <div className="mt-4">
        <h2>Orders</h2>
      </div>
      <div className="card d-flex flex-column justify-content-between mt-3">
        <div style={{fontSize: '40px'}} className="mt-3 ms-5">
          <h2>Order Details</h2>
        </div>
        <div className="mt-3 ms-5">
          {cartDishes.map((orderDish) => (
            <div key={orderDish.dish.id} className="d-flex justify-content-between">
              <p style={{fontSize: '25px'}} className="col-2">{orderDish.dish.name}</p>
              <p style={{fontSize: '25px'}} className="col-2">x {orderDish.amount}</p>
              <p style={{fontSize: '25px'}} className="col-2">{orderDish.dish.price * orderDish.amount} KGS</p>
            </div>
          ))}
        </div>
        <div style={{fontSize: '40px'}} className="mt-3 ms-5">
          <p>Delivery: {delivery} KGS</p>
          <p>Total: {total} KGS</p>
          <button style={{fontSize: '20px'}} className="btn btn-success me-5 mb-3 d-flex justify-content-end">
            Complete Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;