import React, { useContext, useState } from 'react';
import { CategoryContext } from '../../App';
import './Header.css';

const Header = () => {
    const [category, setCategory] = useContext(CategoryContext);

    return (
        <div>
            <h1>This is Header: {category}</h1>
            <button onClick={() => setCategory('Laptop')}>Laptop</button>
            <button onClick={() => setCategory('Mobile')}>Mobile</button>
            <button onClick={() => setCategory('Camera')}>Camera</button>
        </div>
    );
};

export default Header;