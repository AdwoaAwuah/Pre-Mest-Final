import React, {useState} from 'react'
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import {useHistory} from 'react-router-dom'
import axios from 'axios';
import { Redirect } from "react-router-dom";

function SignupForm() {
  const [userObject, setUserObject] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    redirectTo: null,
  });
  const [redirectTo, setRedirectTo] = useState(null);

  const handleChange = (event) => {
    setUserObject({
      ...userObject,
      [event.target.name]: event.target.value,
    });
  };

  const handleSignupOnSubmit = (event) => {
    event.preventDefault();
    // TODO - validate!
    // signUpUser({
    //   firstName: userObject.firstName,
    //   lastName: userObject.lastName,
    //   email: userObject.email,
    //   password: userObject.password,
    //   isLoggedIn: true,
    // });
    axios.post('/signup', {firstName: userObject.firstName,
      lastName: userObject.lastName,
      email: userObject.email,
      password: userObject.password,
      isLoggedIn: true,})

    setRedirectTo("/assessment");
    alert('Sign Up Successful')

  };
  if (redirectTo) {
    return <Redirect to={{ pathname: redirectTo }} />;
  }

// const Signup = () => {
//   let history = useHistory();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [firstName, setfirstName] = useState("");
//   const [lastName, setlastName] = useState("");

//   const handleSignupOnSubmit = (event) => {
//     event.preventDefault();  //keeps page from reloading
//        axios.post('/api/auth/signup', {firstName,lastName,email,password})

      
//          //Redirect to login
//          history.push('/login')
        
//         alert('Sign Up Successful')

       
       
      
   
// }
    return (
        <div className="SignUp">
      <h1>SignUp Page</h1>
         <Form onSubmit={handleSignupOnSubmit}>
      <Form.Group size="lg" controlId="firstName">
          <Form.Label>Firstname</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            name="firstName"
            value={userObject.firstName}
            onChange={handleChange}
          />
           </Form.Group>
           <Form.Group size="lg" controlId="lastName">
          <Form.Label>LastName</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            name="lastName"
            value={userObject.lastName}
            onChange={handleChange}
          />
           </Form.Group>
        
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            id="exampleInputEmail1"
            name="email"
            value={userObject.email}
            onChange={handleChange}
          />
        </Form.Group>
        
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            id="exampleInputPassword1"
            name="password"
            value={userObject.password}
            onChange={handleChange}
          />
        </Form.Group>
        <div className='alert'>
        Already registered?<Link to="/login">
          Login
        </Link>
        </div>
        
        <Button block size="lg" type="submit" >
          SignUp
        </Button>
      </Form>
      </div>
    )
}


export default SignupForm;