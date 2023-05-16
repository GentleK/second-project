import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Homepage from './page/Homepage';
import RockPaperScissors from './page/RockPaperScissors';
import Weather from './page/Weather';
import HMShopingMallProductAll from './page/HMShopingMallProductAll';
import HMShopingMallLogin from './page/HMShopingMallLogin';
import HMShopingMallPrivateRoute from './Route/HMShopingMallPrivateRoute';


function App() {
    const [HMShopingMallAuthenticate, setHMShopingMallAuthenticate] = useState(false);
      
    return (
      <div>
          <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/RockPaperScissors" element={<RockPaperScissors />} />
              <Route path="/Weather" element={<Weather />} />
              <Route path="/HMShopingMall" element={<HMShopingMallProductAll setHMShopingMallAuthenticate={setHMShopingMallAuthenticate} HMShopingMallAuthenticate={HMShopingMallAuthenticate} />} />
              <Route path="/HMShopingMall/login" element={<HMShopingMallLogin setHMShopingMallAuthenticate={setHMShopingMallAuthenticate} />} />
              <Route path="/HMShopingMall/product/:id" element={<HMShopingMallPrivateRoute setHMShopingMallAuthenticate={setHMShopingMallAuthenticate} HMShopingMallAuthenticate={HMShopingMallAuthenticate} />} />
          </Routes>
      </div>
    );
}

export default App;
