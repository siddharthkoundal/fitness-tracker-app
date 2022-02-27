import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react";
import LoginForm from "../components/LoginForm"
import styled from "styled-components"

function LoginPage() {

    const adminUser = {
        email: "admin@admin.com",
        password: "12345",
      };
    
      const [user, setUser] = useState({ name: "", email: "" });
      const [error, setError] = useState("");
    
      const Login = (details) => {
        console.log(details);
    
        if (
          details.email === adminUser.email &&
          details.password === adminUser.password
        ) {
          console.log("Logged IN");
          setUser({
            name: details.name,
            email: details.email,
          })
        }
        else{
          console.log("Details do not match!");
          setError("Details do not match!")
        }
      };
      const Logout = () => {
        setUser({name: "", email: ""})
      };

  return (
      <LoginPageStyled>
          {user.email !== "" ? (
      <div className="welcome">
        <h2>
          Welcome, <span>{user.name}</span>
        </h2>
        <button onClick={Logout}>Logout</button>
      </div>
    ) : (
      <LoginForm Login={Login} error={error} />
    )}
      </LoginPageStyled>
    
  )
}

const LoginPageStyled = styled.section`
    display: flex;
    position: relative;
    text-align: center;
    justify-content: center;
    .welcome{
        width: 100%;
        max-width: 480px;
        padding: 15px 30px;
        h2{
            color: #888;
            font-size: 30px;
            font-weight: 500;
            margin-bottom: 30px;
            span{
                color: #fe4880;
                font-weight: 700;
            }
        }
        button{
            display: inline-block;
            padding: 10px 15px;
            border-radius: 8px;
            background-image: linear-gradient(to right, #FFCE00 50%, #FFCE00 50%, #FE4880);
            background-size: 200%;
            background-position: 0%;
            transition: 0.4s;
            color: #FFF;
            font-weight: 700;
            cursor: pointer;
            border: none;
            outline: none;
       }
       button:hover{
         background-position: 100% 0%;
       }
    }
`

export default LoginPage