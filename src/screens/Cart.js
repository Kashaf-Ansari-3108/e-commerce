import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import CardCmp from "../components/Card";
import NavbarCmp from "../components/Navbar";

const AddToCart = () => {
  const { cartItem } = useSelector((state) => state.AddToCartReducer);

  console.log(cartItem, "cartItem");
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