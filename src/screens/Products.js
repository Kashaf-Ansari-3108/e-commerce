import {useEffect} from 'react'
import NavbarCmp from '../components/Navbar'
import {useDispatch, useSelector} from 'react-redux'
import { getProductAction } from '../store/actions/products'
import CardCmp from '../components/Card'
import { Col, Container, Row } from 'react-bootstrap'
import {
  collection,getDoc,doc} from "firebase/firestore";
  import {db} from '../firebase'


const Products = () => {
  const dispatch = useDispatch();
  const { data, dataLoading } = useSelector((state) => state.GetProductReducer);
  
  useEffect(() => {
    dispatch(getProductAction());
  }, []);
  
  return (
    <>
    <NavbarCmp/>
    {dataLoading ? (
        <h1>LOADING....</h1>
      ) : (
        <Container className="mt-5">
          <Row>
            {data.map((product) => {
              return (
                <Col lg="3" key={product.id}>
                  <CardCmp product={product} />
                </Col>
              );
            })}
          </Row>
        </Container>
      )}
   
    </>
  )
}

export default Products