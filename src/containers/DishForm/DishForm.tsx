import React, {ChangeEvent, useState} from 'react';
import {DishMutation} from '../../types';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectDishIsCreating} from '../../store/dishesSlice';
import {createDish} from '../../store/dishesThunks';
import {toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom';
import ButtonSpinner from '../../components/Spinners/ButtonSpinner';

const DishForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isCreating = useAppSelector(selectDishIsCreating);

  const [dishMutation, setDishMutation] = useState<DishMutation>({
    name: '',
    image: '',
    price: '',
  });

  const onFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setDishMutation((prevState) => ({...prevState, [name]: value}));
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await dispatch(createDish({...dishMutation})).unwrap();
      navigate('/');
      toast.success('Dish added successfully.');
    } catch {
      toast.error('Could not create dish.');
    }
  };

  return (
    <form className="container mb-4 mt-3" onSubmit={onSubmit}>
      <h4>Add new Dish</h4>
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
        {isCreating && <ButtonSpinner />}
        Create
      </button>
    </form>

  );
};

export default DishForm;