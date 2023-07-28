import React, { useEffect, useState } from "react";
import CategoryList from "../CategoryList/CategoryList";
import { Link } from "react-router-dom";

const LeftNav = () => {
   const [categories, setCategories] = useState([]);

   useEffect(() => {
     fetch("http://localhost:3000/category")
       .then((res) => res.json())
       .then((data) => setCategories(data))
       .catch((error) => console.error(error));
   }, []);
  return (
    <div>
      <h5>All Category</h5>
      <h6 className="w-100 p-3 bg-light text-center">National News</h6>
          {categories.map((category) => <CategoryList key={category.id} category={ category}></CategoryList>)}
    </div>
  );
};

export default LeftNav;
