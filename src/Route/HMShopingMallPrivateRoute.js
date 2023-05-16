import React from 'react'
import HMShopingMallProductDetail from '../page/HMShopingMallProductDetail'
import { Navigate } from 'react-router-dom'

const HMShopingMallPrivateRoute = ({setHMShopingMallAuthenticate, HMShopingMallAuthenticate}) => {
  return HMShopingMallAuthenticate?<HMShopingMallProductDetail setHMShopingMallAuthenticate={setHMShopingMallAuthenticate} HMShopingMallAuthenticate={HMShopingMallAuthenticate}/>:<Navigate to='/HMShopingMall/login' />;
}

export default HMShopingMallPrivateRoute
