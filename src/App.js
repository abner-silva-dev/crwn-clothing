import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authtentication from './routes/authtentication/authtentication.component';

const Shop = () => {
  return (
    <div>
      <h1>I am de page shop</h1>
      <Outlet></Outlet>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authtentication />} />
      </Route>
    </Routes>
  );
};

export default App;
