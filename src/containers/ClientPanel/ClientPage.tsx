import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {useEffect} from 'react';
import {fetchDishes} from '../../store/dishesThunks';
import {selectDishes, selectDishIsFetching} from '../../store/dishesSlice';
import Spinner from '../../components/Spinners/Spinner';
import Cart from '../../components/Cart/Cart';
import {addDish} from '../../store/cartSlice';



const ClientPage = () => {

  const dispatch = useAppDispatch();
  const dishes = useAppSelector(selectDishes);
  const isFetching = useAppSelector(selectDishIsFetching);


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
          <div
            key={dish.id} className="card d-flex flex-row justify-content-between mt-3"
            onClick={() => dispatch(addDish(dish))}
            style={{maxHeight: '200px'}}>
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
      <Cart/>
    </div>

  );
};

export default ClientPage;