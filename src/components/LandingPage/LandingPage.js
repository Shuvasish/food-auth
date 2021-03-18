// import {  } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import imgIls from "../../img/undraw_eating_together_tjhx.png";
import team from "../../img/team.png";
import "./LandingPage.css";
import Card from "../Card/Card";

function LandingPage(props) {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.meals);
        setFoods(data.meals);
        // console.log(foods);
      });
  }, []);
  return (
    <main className="container my-4 ">
      {/* hero section */}
      <section className="hero">
        <Row>
          <Col className="col-12 col-md-6 order-2 order-md-1">
            <img src={imgIls} className="img-fluid "></img>
          </Col>
          <Col className="col-12 col-md-6  order-1 order-md-2 d-flex flex-column align-items-center justify-content-center">
            <div className="text-secondary">
              <h1>Hungry?</h1>
              <h4>Order now and be filthy!</h4>
              <Button className="btn btn-secondary my-4 " href="#food">
                What we have
              </Button>
            </div>
          </Col>
        </Row>
      </section>

      {/* abotu section */}
      <section className="about my-4 text-secondary">
        <h2 className="text-gray text-center mb-4">About Us</h2>
        <Row>
          <Col className="col-12 col-md-6 order-1 order-md-2 d-flex align-items-center">
            <img src={team} className="img-fluid "></img>
          </Col>
          <Col className="col-12 col-md-6  order-2 order-md-1 d-flex flex-column align-items-start justify-content-start mt-4">
            <div className="text-secondary">
              <span className="mb-4 d-block">
                <h2 className="h4">We started off as</h2>
                <h2 className="h3 text-dark-gray">a very small business</h2>
              </span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis ex provident, nulla eos voluptas numquam adipisci
                inventore aperiam animi sit magni, nihil aliquid suscipit
                temporibus quia. Nisi incidunt magni ratione animi dolores
                neque.
              </p>
              <p>
                Lorem ipsum dolor, at ex et. Odio ratione laboriosam culpa sed
                praesentium libero, quasi nam quidem tempore eum quis
                accusantium reprehenderit consequatur earum neque perferendis
                velit vitae cupiditate voluptas nostrum suscipit! Saepe nemo
                animi quas ullam qui optio tempore vel. Delectus fuga, saepe
                quia minima magnam aliquid animi quo?
              </p>
            </div>
          </Col>
        </Row>
      </section>

      {/* food secton */}
      <section className="food text-center " id="food">
        <h2 className="text-muted text-center mb-4">Foods</h2>
        <div className="food-card_container">
          <Row>
            {foods?.map((food, i) => (
              <Card key={i} food={food}></Card>
            ))}
          </Row>
        </div>
      </section>
    </main>
  );
}

export default LandingPage;
