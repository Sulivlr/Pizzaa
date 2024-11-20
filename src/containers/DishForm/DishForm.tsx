import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import {ApiDish, DishMutation} from '../../types';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectDishIsCreating} from '../../store/dishesSlice';
import {createDish} from '../../store/dishesThunks';
import {toast} from 'react-toastify';
import {useNavigate, useParams} from 'react-router-dom';
import ButtonSpinner from '../../components/Spinners/ButtonSpinner';
import axiosApi from '../../axiosApi';
import Spinner from '../../components/Spinners/Spinner';

const DishForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {id} = useParams();
  const isCreating = useAppSelector(selectDishIsCreating);
  const [dishMutation, setDishMutation] = useState<DishMutation>({
    name: '',
    image: '',
    price: '',
  });

  const [isFetching, setIsFetching] = useState(false);

  const fetchOneDish = useCallback(async (id: string) => {
    setIsFetching(true);
    const {data: dish} = await axiosApi.get<ApiDish | null>(`/dish/${id}.json`);
    if (dish) {
      setDishMutation({
        ...dish,
        price: dish.price.toString(),
      });
    }
    setIsFetching(false);
  }, []);

  useEffect(() => {
    if (id !== undefined) {
      void fetchOneDish(id);
    }
  }, [id, fetchOneDish]);

  const onFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setDishMutation((prevState) => ({...prevState, [name]: value}));
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      if (id !== undefined) {
        await axiosApi.put(`/dishes/${id}.json`, {...dishMutation});
      } else {
        await dispatch(createDish({...dishMutation})).unwrap();
      }
        navigate('/');
        toast.success(id ? 'Dish successfully edited' : 'Dish successfully created');
    } catch {
      toast.error('Could not create dish.');
    }
  };

  return isFetching ? (<Spinner/>) : (
    <form className="container mb-4 mt-3" onSubmit={onSubmit}>
      <h4>{id ? 'Edit Dish' : 'Add new Dish'}</h4>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          required
          onChange={onFieldChange}
          value={dishMutation.name}
          type="text"
          name="name"
          id="name"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Image</label>
        <input
          required
          onChange={onFieldChange}
          value={dishMutation.image}
          type="url"
          name="image"
          id="image"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input
          required
          onChange={onFieldChange}
          value={dishMutation.price}
          type="number"
          name="price"
          id="price"
          className="form-control"
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary mt-3"
        disabled={isCreating}
      >
        {isCreating && <ButtonSpinner/>}
        {id ? 'Edit' : 'Create'}
      </button>
    </form>
  );
};

export default DishForm;