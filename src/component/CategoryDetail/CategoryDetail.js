import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetail = (props) => {
    const {name, category} = props.product;

    return (
        <div>
            <h4>This is Category detail:</h4>
            <p>Name: {name} <br/> Category: {category}</p>
        </div>
    );
};

export default CategoryDetail;