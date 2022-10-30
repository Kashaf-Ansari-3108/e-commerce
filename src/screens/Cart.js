import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import CardCmp from "../components/Card";
import NavbarCmp from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AddToCart = () => {
  const { cartItem } = useSelector((state) => state.AddToCartReducer);

  console.log(cartItem, "cartItem");
  const user = localStorage.getItem("uid");
   const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/");
      alert("Login First !!!")
    }
  }, []);
  return (
    <div>
      <NavbarCmp/>
      <Container className="mt-5">
        <Row>
          {cartItem.map((product) => {
            return (
              <Col lg="3" key={product.id}>
                <CardCmp product={product} removeBtn={true} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default AddToCart;