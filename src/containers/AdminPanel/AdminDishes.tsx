import {useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectDishes, selectDishIsFetching, selectDishIsRemoving} from '../../store/dishesSlice';
import {useEffect} from 'react';
import {deleteDish, fetchDishes} from '../../store/dishesThunks';
import Spinner from '../../components/Spinners/Spinner';
import ButtonSpinner from '../../components/Spinners/ButtonSpinner';
import {toast} from 'react-toastify';

const AdminDishes = () => {
  const dispatch = useAppDispatch();
  const dishes = useAppSelector(selectDishes);
  const isFetching = useAppSelector(selectDishIsFetching);
  const isDeleting = useAppSelector(selectDishIsRemoving);
  const navigate = useNavigate();
  const formClick = () => {
    navigate('/new-dish');
  };

  useEffect(() => {
    dispatch(fetchDishes());
  }, [dispatch]);

  const onRemove = async (id: string) => {
    try {
      await dispatch(deleteDish(id)).unwrap();
      await dispatch(fetchDishes());
      toast.success('Dish Successfully deleted');
    } catch {

      toast.error('Could not create dish.');
    }
  }

  return isFetching ? (<Spinner/>) : (
    <div className="container mt-4 mb-4">
      <div className="d-flex justify-content-between">
        <h2>Dishes</h2>
        <div>
          <button onClick={formClick} style={{fontSize: '25px'}} className="btn text-bg-success mt-2">Add new Dish
          </button>
        </div>
      </div>
      <div className="card-body">
        {dishes.map((dish) => (
          <div key={dish.id} className="card d-flex flex-row justify-content-between mt-3"
               style={{maxHeight: '200px'}}>
            <img style={{width: '350px'}}
                 src={dish.image}
                 alt="img"
            />

            <div>
              <p style={{fontSize: '40px'}} className="mt-5 me-5">{dish.name}</p>
            </div>
            <div>
              <p style={{fontSize: '40px'}} className="mt-5 me-5">{dish.price} KGS</p>
            </div>
            <div>
              <button style={{fontSize: '25px'}} className="btn btn-primary mt-5 me-5">Edit</button>
            </div>
            <div>
              <button
                style={{fontSize: '25px'}}
                className="btn btn-danger mt-5 me-5"
                onClick={() => onRemove(dish.id)}
                disabled={isDeleting === dish.id}
              >
                {isDeleting === dish.id && <ButtonSpinner/>}
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDishes;