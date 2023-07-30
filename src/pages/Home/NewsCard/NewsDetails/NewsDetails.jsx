import React from "react";
import { Button } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";

const NewsDetails = () => {
  const loader = useLoaderData();
  const { image_url, details, title, category_id } = loader;
  return (
    <div>
      <img src={image_url} alt="" className="w-100" />
      <h4>{title}</h4>
      <p>{details}</p>
      <Button variant="danger">
        <Link
          to={`/category/${category_id}`}
          className=" text-decoration-none text-white"
        >
          Show All News All This Category
        </Link>
      </Button>
    </div>
  );
};

export default NewsDetails;
