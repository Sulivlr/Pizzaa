import { useAppSelector} from '../../app/hooks';
import { selectCartDishes} from '../../store/cartSlice';
import {useNavigate} from 'react-router-dom';

const Cart = () => {
  const cartDishes = useAppSelector(selectCartDishes);
  const navigate = useNavigate();
  const checkOutClick = () => {
    navigate('/checkout');
  };

  const total = cartDishes.reduce((sum, cartDish) => {
    return sum + cartDish.dish.price * cartDish.amount;
  }, 0);

  return (
    <>
      <h3 className="mt-2">Cart</h3>
      <div className="card mb-2 mt-3 p-2">
        {cartDishes.map((cartDish) => (
          <div
            key={cartDish.dish.id}
            className="card-body d-flex justify-content-around">
            <div
              style={{fontSize: '40px'}}
              className="col-3">{cartDish.dish.name}
            </div>
            <div style={{fontSize: '40px'}} className="text-center">x{cartDish.amount}</div>
          </div>
        ))}
        <div className="d-flex justify-content-between mt-3">
          <h3>Order Total : {total} KGS</h3>
          <button onClick={checkOutClick} style={{fontSize: '25px'}}
                  className="btn btn-info btn-outline-success">CheckOut
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;