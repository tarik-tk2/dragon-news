import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../../../pages/Home/NewsCard/NewsCard';

const Category = () => {
    const { id } = useParams();
    const loader = useLoaderData();
   
   
 
    return (
        <div>
            {loader.map((news) => 
                <NewsCard category={ news} key={news._id}></NewsCard>
            )}
        </div>
    );
};

export default Category;