import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/HMShopingMall.css';
import { useNavigate, useSearchParams } from 'react-router-dom'
import HMShopingMallNavbar from './components/HMShopingMallNavbar';
import HMShopingMallProductCard from './components/HMShopingMallProductCard';
import { Container, Row, Col } from 'react-bootstrap';

const HMShopingMallProductAll = ({setHMShopingMallAuthenticate, HMShopingMallAuthenticate}) => {
    const navigatePage = useNavigate();
    const goToHomepage = ()=>{
        navigatePage('/');
    }

    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();

    const getProducts = async ()=>{
        let searchQuery = query.get('q') || "";
        let url = `https://my-json-server.typicode.com/GentleK/second-project/products?q=${searchQuery}`;
        let response = await fetch(url);
        setProductList(await response.json());
    }

    useEffect(()=>{
        getProducts();
    }, [query])

    return (
        <div>
            <div className='titleBoxDiv'>
                <h1>H&M 쇼핑몰</h1>
                <button onClick={goToHomepage} className='homeButton'>Go Home</button>
            </div>
            <div className='product-all-main'>
                <div className='navbar-main'><HMShopingMallNavbar setHMShopingMallAuthenticate={setHMShopingMallAuthenticate} HMShopingMallAuthenticate={HMShopingMallAuthenticate}/></div>
                <div>
                    <Container>
                        <Row>
                            {productList.map((menu) =>(
                                <Col lg={3}><HMShopingMallProductCard item={menu} /></Col>
                            ))}
                        </Row>
                    </Container>
                </div>
            </div>
            
        </div>
    )
}

export default HMShopingMallProductAll
