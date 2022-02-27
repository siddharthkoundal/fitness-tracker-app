import React from "react";
import { useState } from "react";
import styled from "styled-components";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  return (
    <LoginFormStyled>
      <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Login</h2>
        {error !== "" ? <div className="error">{error}</div> : ""}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        <input type="submit" value="LOGIN" />
      </div>
    </form>
    </LoginFormStyled>
    
  );
}

const LoginFormStyled = styled.section`
   margin: 0;
   padding: 0;
   height: 100vh;
   display:flex;
   align-items: center;
   justify-content: center;

   input, button{
     border: none;
     outline: none;
   }

   form{
     display: block;
     position: relative;

     .form-inner{
       position: relative;
       display: block;
       background-color: #FFF;
       padding: 30px;
       z-index: 2;

       h2{
         color: #888;
         font-size: 30px;
         font-weight: 500;
         margin-bottom: 30px;
       }

       .form-group{
         display: block;
         width: 300px;
         margin-bottom: 15px;
         label{
           display: block;
           color: #666;
           font-size: 15px;
           margin-bottom: 5px;
           transition: 0.4s;
         }
         input{
           display: block;
           width: 100%;
           padding: 10px 15px;
           background-color: #f8f8f8;
           border-radius: 8px;
           transition: 0.4s;
         }
         input:focus{
           background:0px 0px 3px rgba(0, 0, 0, 0.2);
         }
       }

       .form-group:focus-within{
         label{
           color: #FE4880;
         }
       }

       input[type="submit"]{
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
       }
       input[type="submit"]:hover{
         background-position: 100% 0%;
       }
     }
   }



   form:after{
     content: "";
     display: block;
     position: absolute;
     top: -5px;
     right: -5px;
     left: -5px;
     bottom: -5px;
     z-index: 1;
     background-image: linear-gradient(to bottom right, #FFCE00, #FE4880);
   }


`;

export default LoginForm;
