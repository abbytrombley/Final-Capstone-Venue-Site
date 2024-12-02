
import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../../Services/UsersService";

export const Login = ({setIsLoggedIn}) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginSubmit = (e) => {
    e.preventDefault();
    loginUser(email)
      .then(r =>{
      if(r){
        const userProfile = {
            id: r.id,
            email: r.email,
            password: r.password,
            isAdmin: r.isAdmin
        }
        localStorage.setItem("venue_user", JSON.stringify(userProfile))
        setIsLoggedIn(true)
        navigate("/")
      }
      else{
        alert("Invalid email or password")
      }
    })
  };


  
  // useEffect(() => {
  //   document.body.style.backgroundImage = `url(https://i.pinimg.com/736x/e2/ea/c1/e2eac1f5a02ea3663a838bc918f5ade6.jpg)`
  // } , [])




  return (
    <Form onSubmit={loginSubmit}>
      <div className="font">
      <h1>
        <strong>Summit Soundstage</strong>
      </h1>
      <h2>Login</h2>
      <fieldset>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input id="email" type="text" onChange={e => setEmail(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input id="password" type="password" onChange={e => setPassword(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Button>Login</Button>
        </FormGroup>
        <em>
          Not registered? <Link to="/register">Register</Link>
        </em>
      </fieldset>
      </div>
    </Form>
  );
}
