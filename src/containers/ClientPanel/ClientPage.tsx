import {useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {useEffect} from 'react';
import {fetchDishes} from '../../store/dishesThunks';
import {selectDishes, selectDishIsFetching} from '../../store/dishesSlice';
import Spinner from '../../components/Spinners/Spinner';

const ClientPage = () => {

  const dispatch = useAppDispatch();
  const dishes = useAppSelector(selectDishes);
  const isFetching = useAppSelector(selectDishIsFetching);
  const navigate = useNavigate();
  const checkOutClick = () => {
    navigate('/checkout');
  };

  useEffect(() => {
    dispatch(fetchDishes());
  }, [dispatch]);

  return isFetching ? (<Spinner/>) : (
    <div className="container mt-2 mb-4">
      <div className="d-flex justify-content-between">
        <h2 className="mt-3">Turtle Pizza</h2>
      </div>
      <div className="card-body">
        {dishes.map((dish) => (
          <div key={dish.id} className="card d-flex flex-row justify-content-between mt-3" style={{maxHeight:'200px'}}>
            <img style={{width: '350px'}}
                 src={dish.image}
                 alt="img"/>
            <div>
              <p style={{fontSize: '40px'}} className="mt-5 me-5">{dish.name}</p>
            </div>
            <p style={{fontSize: '40px'}} className="mt-5 me-5">{dish.price} KGS</p>
          </div>
        ))}
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