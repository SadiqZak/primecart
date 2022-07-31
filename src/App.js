import './App.css';
import { Route, Routes } from 'react-router-dom';

// import Header from './Components/Header/Header'
import Homepage from './Pages/Homepage/Homepage';
import ProductListingpage from './Pages/ProductListingpage/ProductListingpage';
import CartManagementpage from './Pages/CartManagementpage/CartManagementpage';
import WishListManagement from './Pages/WishListManagement/WishListManagement';
import Login from './Pages/Login/Login';
import RequiresAuth from './utils/require-auth';

import Mockman from "mockman-js";
import SingleProductsPage from './Pages/SingleProductsPage/SingleProductsPage';
import SignupPage from './Pages/SignupPage/SignupPage';

function MockAPI() {
  return (
    <div className="MockAPI">
      <Mockman />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/plp" element={<ProductListingpage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route
          path="/cartmanagement"
          element={
            <RequiresAuth>
              <CartManagementpage />
            </RequiresAuth>
          }
        />
        <Route
          path="/wishmanagement"
          element={
            <RequiresAuth>
              <WishListManagement/>
            </RequiresAuth>
          }
        />
            <Route
          path="/singlepage/:productId"
          element={<SingleProductsPage/> }
        />
        <Route path="/mockman" element={<Mockman/>}/>
      </Routes>
    </div>
  );
}

export default App;
