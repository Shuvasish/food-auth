import React from "react";
import "./Card.css";
import { Col, Button } from "react-bootstrap";
import team from "../../img/team.png";
import { Link } from "react-router-dom";

function Card({ food }) {
  const { strMeal, idMeal, strMealThumb } = food;
  // console.log(strMeal, idMeal, strMealThumb);
  return (
    <Col className="col-12 col-md-6 col-lg-4 col-xl-3 mb-2  rounded shadow">
      <div className="text-muted rounded shadow-sm">
        <h5 className="text-center my-3 mt-4" title={strMeal}>
          {strMeal.slice(0, 20)}
          {strMeal.length > 20 ? "..." : ""}
        </h5>
        <img src={strMealThumb} className="img-fluid" />
        <h6 className="text-center mt-2">
          Price $<span>{idMeal / 1000}</span>
        </h6>
        <Link to={`/id/${idMeal}`}>
          <Button className="btn btn-secondary mt-2 mb-4">Place order</Button>
        </Link>
      </div>
    </Col>
  );
}

export default Card;
