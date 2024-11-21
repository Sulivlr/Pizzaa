import { useAppSelector} from '../../app/hooks';
import { selectCartDishes} from '../../store/cartSlice';
import {useNavigate} from 'react-router-dom';

const Cart = () => {
  const cartDishes = useAppSelector(selectCartDishes);
  const navigate = useNavigate();
  const checkOutClick = () => {
    navigate('/checkout');
  };


  return (
    <>
      <h2 className="mt-2">Cart</h2>
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
        <div className="d-flex justify-content-end mt-3">
          <button onClick={checkOutClick} style={{fontSize: '25px'}}
                  className="btn btn-warning btn-outline-success">CheckOut
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;