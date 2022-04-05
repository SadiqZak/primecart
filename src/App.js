import './App.css';
import { Route, Routes } from 'react-router-dom';

import Header from './Components/Header/Header'
import Homepage from './Pages/Homepage/Homepage';
import ProductListingpage from './Pages/ProductListingpage/ProductListingpage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/plp" element={<ProductListingpage/>}/>
      </Routes>
    </div>
  );
}

export default App;
