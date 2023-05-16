import React from 'react'
import '../styles/HMShopingMall.css';
import { useNavigate } from 'react-router-dom';

const HMShopingMallProductCard = ({item}) => {
    const navigate = useNavigate();
    const showDetail = ()=>{
        navigate(`/HMShopingMall/product/${item.id}`);
    }
    return (
        <div className="hm-shopping-mall-product-card" onClick={()=>showDetail()}>
            <img className='hm-shopping-mall-product-card-img' src={item?.img} />
            <div className='hm-shopping-mall-product-card-choice'>{item?.choice?"Conscioud choice":""}</div>
            <div>{item?.title}</div>
            <div>{item?.price}</div>
            <div className='hm-shopping-mall-product-card-new'>{item?.new?"신제품":""}</div>
        </div>
    )
}

export default HMShopingMallProductCard;
