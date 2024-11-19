import {useNavigate} from 'react-router-dom';

const AdminDishes = () => {
  const navigate = useNavigate();
  const formClick = () => {
    navigate('/new-dish');
  } ;

  return (
    <div className="container mt-4 mb-4">
      <div className="d-flex justify-content-between">
        <h2>Dishes</h2>
        <button onClick={formClick} style={{fontSize: '25px'}} className="btn text-bg-success">Add new Dish</button>
      </div>
    </div>
  );
};

export default AdminDishes;