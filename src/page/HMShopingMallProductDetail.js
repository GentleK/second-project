import React, {useEffect, useState} from 'react'
import './styles/HMShopingMall.css';
import { useParams } from 'react-router-dom';
import HMShopingMallNavbar from './components/HMShopingMallNavbar';
import { Col, Container, Row, Dropdown, Button } from 'react-bootstrap';

const HMShopingMallProductDetail = ({setHMShopingMallAuthenticate, HMShopingMallAuthenticate}) => {
    let {id} = useParams();
    const [product, setProduct] = useState(null);
    const getProductDetail = async ()=>{
        let url = `https://my-json-server.typicode.com/GentleK/second-project/products/${id}`;
        let response = await fetch(url);
        setProduct(await response.json());
    }
    const selectSize = (selectSize)=>{
        console.log("selectSize : ",selectSize);
    }
    useEffect(()=>{
        getProductDetail();
    },[])

    return (
        <div>
            <HMShopingMallNavbar setHMShopingMallAuthenticate={setHMShopingMallAuthenticate} HMShopingMallAuthenticate={HMShopingMallAuthenticate}/>
            <Container>
                <Row>
                    <Col className='hm-shopping-mall-product-img'>
                        <img src={product?.img} />
                    </Col>
                    <Col>
                        <div>{product?.title}</div>
                        <div>{product?.price}</div>
                        <div className='hm-shopping-mall-product-card-choice'>{product?.choice?"Conscioud choice":""}</div>
                        <div>
                            <Dropdown>
                                <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                                    사이즈 선택
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {product?.size.map((item)=>(
                                        <Dropdown.Item onClick={()=>selectSize(item)}>{item}</Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className='hm-shopping-mall-product-add-button'>
                            <Button>추가</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HMShopingMallProductDetail
