import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {decrementDish, selectCartDishes} from '../../store/cartSlice';

const CheckOut = () => {
  const dispatch = useAppDispatch();
  const cartDishes = useAppSelector(selectCartDishes);
  const total = cartDishes.reduce((sum, cartDish) => {
    return sum + cartDish.dish.price * cartDish.amount;
  }, 0);


  const handleDecrement = (id: string) => {
    dispatch(decrementDish(id));
  };


  return (
    <div className="container mt-4 mb-4">
      <div>
        <h1>Your Order:</h1>
      </div>
      {cartDishes.map((dish) => (
        <div key={dish.dish.id} className="d-flex justify-content-between mt-5">
          <p style={{fontSize: '40px'}}>{dish.dish.name}</p>
          <p style={{fontSize: '40px'}}>x{dish.amount}</p>
          <p style={{fontSize: '40px'}}>{dish.dish.price} KGS</p>
          <div>
            <button
              onClick={() => handleDecrement(dish.dish.id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      <br/>
      <br/>
      <div className="d-flex justify-content-between mt-5" style={{fontSize: '40px'}}>
        <p>Delivery</p>
        <p>150 KGS</p>
      </div>
      <div className="d-flex justify-content-between" style={{fontSize: '40px'}}>
        <p>Total</p>
        <p><strong>{total}</strong> KGS</p>
      </div>
      <div className="d-flex flex-row mt-5">
        <button className="btn btn-primary me-5" style={{fontSize: '40px'}}>Cancel</button>
        <button className="btn btn-success" style={{fontSize: '40px'}}>Order</button>
      </div>
    </div>

  );
};

export default CheckOut;