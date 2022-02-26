import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react";
import LoginForm from "./components/LoginForm";

function App() {
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
    }
  };
  const Logout = () => {
    console.log("Logout");
  };

  return (
    <Router>
      <div className="container">
        {user.email !== "" ? (
          <div className="welcome">
            <h2>
              Welcome, <span>{user.name}</span>
            </h2>
          </div>
        ) : (
          <LoginForm Login={Login} error={error} />
        )}
      </div>
    </Router>
  );
}

export default App;
