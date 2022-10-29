import React from "react";
import logo from "../assets/brand.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  setName,
  setEmail,
  setPwd,
  setContact,
  setAdress,
  setCountry,
  createUser,
  createUserAction
} from "../store/actions/signup";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import NavbarCmp from "../components/Navbar";
import { Link } from "react-router-dom";

function Signup() {
  const user = localStorage.getItem("uid");
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/products");
    }
  }, []);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.signUpReducer);
  
  const setNameInput = (val) => {
    dispatch(setName(val));
  };
  const setEmailInput = (val) => {
    dispatch(setEmail(val));
  };
  const setPwdInput = (val) => {
    dispatch(setPwd(val));
  };
  const setContactInput = (val) => {
    dispatch(setContact(val));
  };
  const setAdressInput = (val) => {
    dispatch(setAdress(val));
  };
  const setCountryInput = (val) => {
    dispatch(setCountry(val));
  };
  const createUser = (email,pwd,name,contact,adress,country) =>{
    dispatch(createUserAction(email,pwd,name,contact,adress,country));
  }

  return (
    <>
      <NavbarCmp />
      <MDBContainer className="my-5 gradient-form">
        <MDBRow>
          <MDBCol col="6" className="mb-5">
            <div className="d-flex flex-column ms-5">
              <div className="text-center">
                <img src={logo} style={{ width: "185px" }} alt="logo" />
                <h4 className="mt-1 mb-5 pb-1">SIGN UP</h4>
              </div>

              <MDBInput
                onChange={(e) => setNameInput(e.target.value)}
                wrapperClass="mb-4"
                label="Name"
                id="form3"
                type="text"
              />
              <MDBInput
                onChange={(e) => setEmailInput(e.target.value)}
                wrapperClass="mb-4"
                label="Email address"
                id="form1"
                type="email"
              />
              <MDBInput
                onChange={(e) => setPwdInput(e.target.value)}
                wrapperClass="mb-4"
                label="Password"
                id="form2"
                type="password"
              />
              <MDBInput
                onChange={(e) => setContactInput(e.target.value)}
                wrapperClass="mb-4"
                label="Contact"
                id="form4"
                type="text"
              />
              <MDBInput
                onChange={(e) => setAdressInput(e.target.value)}
                wrapperClass="mb-4"
                label="Adress"
                id="form5"
                type="text"
              />
              <MDBInput
                onChange={(e) => setCountryInput(e.target.value)}
                wrapperClass="mb-4"
                label="Country"
                id="form6"
                type="text"
              />

              <div className="text-center pt-1 mb-5 pb-1">
                <MDBBtn onClick={()=>createUser(selector.email,selector.pwd,selector.name,selector.contact,selector.adress,selector.country)} className="mb-4 w-100 gradient-custom-2">
                 <Link to='/login'>Sign up</Link> 
                </MDBBtn>
              </div>

              <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                <p className="mb-0">Already have an account?</p>
                <MDBBtn outline className="mx-2" color="success">
                  <Link to='/login'>SignIn</Link>
                </MDBBtn>
              </div>
            </div>
          </MDBCol>

          <MDBCol col="6" className="mb-5">
            <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 className="mb-4">NEW AMAZING STUFF IS HERE !!!!</h4>
                <p className="small mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default Signup;
