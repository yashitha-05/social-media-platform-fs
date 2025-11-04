import React from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../Store/Theme/Action";
import { logout } from "../Store/Auth/Action";

const Settings = () => {
  const dispatch = useDispatch();
  const { theme, auth } = useSelector((s) => s);

  const toggleTheme = () => {
    dispatch(changeTheme(theme.currentTheme === "dark" ? "light" : "dark"));
  };

  const handleLogout = () => {
    dispatch(logout());
    window.location.href = "/";
  };

  return (
    <div className="py-6 space-y-6">
      <h1 className="text-xl font-bold">Settings</h1>

      <section>
        <h2 className="font-semibold mb-2">Appearance</h2>
        <Button variant="outlined" onClick={toggleTheme}>
          Switch to {theme.currentTheme === "dark" ? "Light" : "Dark"} mode
        </Button>
      </section>

      <section>
        <h2 className="font-semibold mb-2">Account</h2>
        <div className="text-sm text-gray-500">Name</div>
        <div className="mb-2">{auth.user?.fullName}</div>
        <div className="text-sm text-gray-500">User ID</div>
        <div className="mb-2">{auth.user?.id}</div>
      </section>

      <section>
        <h2 className="font-semibold mb-2">Session</h2>
        <Button color="error" variant="contained" onClick={handleLogout}>
          Logout
        </Button>
      </section>
    </div>
  );
};

export default Settings;


