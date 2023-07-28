import React from 'react';
import { Link } from 'react-router-dom';

const CategoryList = (props) => {
    const { name,id}=props.category
    return (
        <div>
            <Link to={`/category/${id}`}>{ name}</Link>
        </div>
    );
};

export default CategoryList;