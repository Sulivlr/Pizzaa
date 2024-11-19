import React, {ChangeEvent, useState} from 'react';
import {DishMutation} from '../../types';

const DishForm = () => {

  const [dishMutation, setDishMutation] = useState<DishMutation>({
    name: '',
    image: '',
    price: '',
  });

  const onFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setDishMutation((prevState) => ({...prevState, [name]: value}));
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
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

      <button type="submit" className="btn btn-primary mt-3">
        Create
      </button>
    </form>

  );
};

export default DishForm;