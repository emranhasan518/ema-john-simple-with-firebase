import React from 'react';
import img from '../../images/memes.jpg'

const PlaceOrder = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent:' center',
            alignItems: 'center',
            marginTop: '100px'
        }}>
            <img src={img} alt="" />
        </div>
    );
};

export default PlaceOrder;