import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import LandingNavbar from "./LandingNavbar";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const isUserLoggedIn = async () => {
    const result = await fetch("/api/dashboard/login", {
      method: "GET",
    });
    if (result.status === 200) {
      setLogin((prev) => true);
    }
  };
  useEffect(() => {
    isUserLoggedIn();
  }, []);
  return (
    <div>
      {login ? <Navbar /> : <LandingNavbar />}
      <div className="page-not-found">
        <h1>404 Page Not Found</h1>
        <h5>
          We can protect your Calendly links but we can't always protect your
          navigation.
        </h5>
        <Button
          onClick={() => {
            navigate("/");
          }}
          sx={{
            color: "#fff",
            textTransform: "none",
            backgroundColor: "#221f1f",
            borderRadius: "30px",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
          id="logout-button"
        >
          Take Me Back To Safety
        </Button>
      </div>
    </div>
  );
};

export default PageNotFound;
