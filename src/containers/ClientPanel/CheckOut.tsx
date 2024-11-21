import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {clearCart, decrementDish, selectCartDishes, selectCartDishIsLoading} from '../../store/cartSlice';
import {sendCartDish} from '../../store/cartsThunks';
import {useNavigate} from 'react-router-dom';


const CheckOut = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const cartDishes = useAppSelector(selectCartDishes);
  const isLoading = useAppSelector(selectCartDishIsLoading);
  const delivery = 150;
  const total = cartDishes.reduce((sum, cartDish) => {
    return sum + cartDish.dish.price * cartDish.amount + delivery;
  }, 0);


  const handleDecrement = (id: string) => {
    dispatch(decrementDish(id));
  };

  const onSubmit = async () => {
     await dispatch(sendCartDish(cartDishes));
     dispatch(clearCart());
     navigate('/');
  };


  return (
    <div className="container mt-4 mb-4">
      <div>
        <h1>Your Order:</h1>
      </div>
      {cartDishes.map((dish) => (
        <div key={dish.dish.id} className="d-flex justify-content-between mt-5">
          <div className="col-1">
            <p style={{fontSize: '40px'}}>{dish.dish.name}</p>
          </div>
          <br/>
          <div className="col-3">
            <p style={{fontSize: '40px'}}>x{dish.amount}</p>
          </div>
          <div className="col-5">
            <p style={{fontSize: '40px'}}>{dish.dish.price} KGS</p>
          </div>
          <div>
            <button
              onClick={() => handleDecrement(dish.dish.id)}
              className="btn btn-danger"
              style={{fontSize: 20}}
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
        <p>{delivery} KGS</p>
      </div>
      <div className="d-flex justify-content-between" style={{fontSize: '40px'}}>
        <p>Total</p>
        <p><strong>{total}</strong> KGS</p>
      </div>
      <div className="d-flex flex-row mt-5">
        <button className="btn btn-primary me-5" style={{fontSize: '40px'}}>Cancel</button>
        <button
          className="btn btn-success"
          style={{fontSize: '40px'}}
          type="submit"
          onClick={onSubmit}
          disabled={isLoading}
        >
          Order
        </button>
      </div>
    </div>

  );
};

export default CheckOut;