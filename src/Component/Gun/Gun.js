import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Gun.css'
import { IoArrowRedoSharp } from "react-icons/io5";

const Gun = ({countCart, gun}) => {
    const {name, img, bullet, action,price,capacity} = gun;
    return (
        <div className='col-md-4'>
           <Card className='shadow-lg p-3' style={{ width: '18rem'}}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <h1>$ {price}</h1>
                <p>Bullet Type : {bullet}</p>
                <p>Capacity : {capacity}</p>
                <p>Action : {action}</p>
                <Button variant="primary" onClick={()=>countCart(gun)}>Buy <IoArrowRedoSharp></IoArrowRedoSharp> </Button> 
            </Card.Body>
            </Card>
        </div>
    );
};

export default Gun;

