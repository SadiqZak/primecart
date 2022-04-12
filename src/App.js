import './App.css';
import { Route, Routes } from 'react-router-dom';

import Header from './Components/Header/Header'
import Homepage from './Pages/Homepage/Homepage';
import ProductListingpage from './Pages/ProductListingpage/ProductListingpage';
import CartManagementpage from './Pages/CartManagementpage/CartManagementpage';
import WishListManagement from './Pages/WishListManagement/WishListManagement';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/plp" element={<ProductListingpage/>}/>
        <Route path="/cartmanagement" element={<CartManagementpage/>}/>
        <Route path="/wishmanagement" element={<WishListManagement/>}/>
      </Routes>
    </div>
  );
}

export default App;
