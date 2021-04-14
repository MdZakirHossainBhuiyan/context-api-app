import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Shipment = () => {
    const [category, setCategory] = useContext(CategoryContext);

    return (
        <div>
            <h1>This is Shipment: {category}</h1>
            <button onClick={()=>setCategory('High price')}>High price</button>
            <button onClick={()=>setCategory('Medium price')}>Medium price</button>
            <button onClick={()=>setCategory('Low price')}>Low price</button>
        </div>
    );
};

export default Shipment;