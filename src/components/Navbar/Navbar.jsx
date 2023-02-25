import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import logo from "../../assets/logo.png";
import search from "../../assets/searchicon.svg";
import Avatar from "../Avatar/Avatar";
import "./Navbar.css";
import { setCurrentUser } from "../../actions/currentUser";

const navbar = () => {
  const dispatch = useDispatch();
  var User = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    dispatch(setCurrentUser(null));
  };

  useEffect(() => {
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [dispatch]);

  return (
    <nav className="main-nav">
      <div className="navbar">
        <Link to="/" className="nav-item nav-logo">
          <img src={logo} alt="logo" width="150" />
        </Link>
        <Link to="./" className="nav-item nav-btn">
          About
        </Link>
        <Link to="./" className="nav-item nav-btn">
          Products
        </Link>
        <Link to="./" className="nav-item nav-btn">
          For Teams
        </Link>
        <form>
          <input type="text" placeholder="Search..." />
          <img src={search} alt="search" width="18" className="searchicon" />
        </form>
        {User === null ? (
          <Link to="/Auth" className="nav-item nav-links">
            Log in
          </Link>
        ) : (
          <>
            <Avatar
              backgroundColor="#009dff"
              px="10px"
              py="7px"
              borderRadius="50%"
              color="white"
            >
              {" "}
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                {User.result.name.charAt(0).toUpperCase(0)}
              </Link>
            </Avatar>

            <button className="nav-item nav-link" onClick={handleLogout}>
              Log out
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default navbar;
