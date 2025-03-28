import React, { useState } from "react";
import "./row2.css";
import Signup from "../../../pages/Signup-Page/Signup";
import Login from "../../../pages/Login-Page/Login";

function Row2() {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="row2">
      <div className="logo">
        <img src="main_logo.svg" alt="" />
      </div>
      <div className="tollPhone">
        <img src="toll_phone.webp" alt="" />
      </div>
      <div className="search">
        <input
          type="text"
          id="search_specs"
          placeholder="What are you looking for?"
        />
      </div>
      <div className="nav-links">
        <button>Track Order</button>
        <button onClick={() => setShowSignup(true)}>Sign In & Sign Up</button>
        {showSignup && (
          <div className="modal-overlay">
            <div className="modal">
              <Signup
                closeModalSignup={() => setShowSignup(false)}
                openLogin={() => {
                  setShowLogin(true);
                }}
              />
            </div>
          </div>
        )}
        {showLogin && (
          <div className="modal-overlay">
            <div className="modal">
              <Login closeModalLogin={() => setShowLogin(false)}/>
            </div>
          </div>
        )}
        <button>
          <div>
            <img src="wishlist.svg" alt="" />
          </div>
          <p>Wishlist</p>
        </button>
        <button>
          <div>
            <img src="bag.svg" alt="" />
          </div>
          <p>Cart</p>
        </button>
      </div>
    </div>
  );
}

export default Row2;
