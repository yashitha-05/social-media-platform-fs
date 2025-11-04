import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import AuthModel from "./AuthModel";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GoogleLogin } from "@react-oauth/google";
import { loginWithGoogleAction } from "../../Store/Auth/Action";

const Authentication = () => {
  const [authModelOpen, setAuthModelOpen] = useState(false);
  const { auth } = useSelector((store) => store);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAuthModelClose = () => {
    setAuthModelOpen(false);
    navigate("/");
  };

  const handleAuthModelOpen = (path) => {
    setAuthModelOpen(true);
    navigate(path);
  };

  useEffect(() => {
    if (location.pathname === "/signin" || location.pathname === "/signup") {
      setAuthModelOpen(true);
    }
  }, [location.pathname]);

  const loginWithGoole = (res) => {
    console.log("res : ", res);
    dispatch(loginWithGoogleAction(res));
    // return
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-50 to-white">
      <Grid container className="items-center justify-center">
        <Grid item xs={12} className="px-4 w-full">
          <div className="mx-auto max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
            <div className="flex justify-center pb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-white shadow flex items-center justify-center">
                <img className="w-full h-full object-contain p-2" src={process.env.PUBLIC_URL + '/admiree-logo.jpg'} alt="Admiree" />
              </div>
            </div>

            <h1 className="font-bold text-2xl text-center">Welcome to Admiree</h1>

            <div className="w-full mt-6">
              <div className="w-full">
              {/* <button 
            className="w-full flex justify-center items-center border border-gray-400 py-2 px-7 rounded-full bg-white shadow-md text-gray-600">
              <img
                src="https://www.google.com/images/hpp/ic_wahlberg_product_core_48.png8.png"
                alt="Google Logo"
                className="h-6 w-6 mr-2"
              />
              Sign Up with Google
            </button> */}
              <GoogleLogin
                width={330}
                onSuccess={loginWithGoole}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
              <p className="py-5 text-center text-gray-500">OR</p>
              <Button
                onClick={() => handleAuthModelOpen("/signup")}
                sx={{
                  width: "100%",
                  borderRadius: "29px",
                  py: "10px",
                  bgcolor: "#e91e63",
                }}
                variant="contained"
                size="large"
              >
                Create Account
              </Button>
              <p className="text-sm mt-2">
                By signing up, you agree to the Terms of Service and Privacy
                Policy, including Cookie Use.
              </p>
            </div>
            <div className="mt-10">
              <h1 className="font-bold text-xl mb-5 text-center">Already have an account?</h1>
              <Button
                onClick={() => handleAuthModelOpen("/signin")}
                sx={{
                  width: "100%",
                  borderRadius: "29px",
                  py: "10px",
                }}
                variant="outlined"
                size="large"
              >
                Signin
              </Button>
            </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <AuthModel isOpen={authModelOpen} handleClose={handleAuthModelClose} />
    </div>
  );
};

export default Authentication;
