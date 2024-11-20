import {Route, Routes} from 'react-router-dom';
import ClientPage from './containers/ClientPanel/ClientPage';
import AdminDishes from './containers/AdminPanel/AdminDishes';
import DishForm from './containers/DishForm/DishForm';
import CheckOut from './containers/ClientPanel/CheckOut';
import AppBar from './components/AppBar/AppBar';
import AdminOrders from './containers/AdminPanel/AdminOrders';


const App = () => {
  return (
    <>
      <header>
        <AppBar/>
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<ClientPage/>}/>
          <Route path="/admin/dishes" element={<AdminDishes/>}/>
          <Route path="/admin/orders" element={<AdminOrders/>}/>
          <Route path="/checkout" element={<CheckOut/>}/>
          <Route path="/new-dish" element={<DishForm/>}/>
          <Route path="/dishes/:id/edit" element={<DishForm />} />
          <Route path="*" element={<h1>Page Doesn't Exist</h1>}/>
        </Routes>
      </main>
    </>
  );
};

export default App;
