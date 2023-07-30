import React from "react";
import { Button, Card, Image } from "react-bootstrap";
import { FaEye, FaRegBookmark, FaShareNodes } from "react-icons/fa6";
import moment from "moment";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";

const NewsCard = (props) => {
  const {
    _id,
    rating,
    category_id,
    total_view,
    title,
    author,
    thumbnail_url,
    image_url,
    details,
  } = props.category;

  return (
    <Card className="mb-4">
      <Card.Header className="d-flex  justify-content-between">
        <div className="d-flex  ">
          <Image
            src={author.img}
            alt=""
            style={{ width: "40px", height: "40px" }}
            roundedCircle
          />
          <div className="ms-2">
            <p className="p-0 m-0 fw-bold">{author.name}</p>
            <p className="p-0 m-0">
              {" "}
              <small>{moment(author.published_date).format("LL")}</small>
            </p>
          </div>
        </div>
        <div>
          <Button variant="white">
            {" "}
            <FaShareNodes></FaShareNodes>{" "}
          </Button>
          <Button variant="white">
            {" "}
            <FaRegBookmark></FaRegBookmark>{" "}
          </Button>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Image src={image_url} fluid />
        <Card.Text className="mt-4">
          {details.length > 200
            ? details.slice(0, 200).concat(".....")
            : details}
          <Link to={`/news/${_id}`}>Read More</Link>
        </Card.Text>

        <Card.Footer className="d-flex justify-content-between bg-white">
          <div className="d-flex">
            <Rating
              className="me-2"
              style={{ maxWidth: 100 }}
              readOnly
              orientation="horizontal"
              value={rating.number}
            />
            {rating.number}
          </div>
          <div className="d-flex align-items-center ">
            <FaEye className="me-2"></FaEye>
            {total_view}
          </div>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
