import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import PublicNav from "./PublicNav";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../Store/Theme/Action";

const PublicLayout = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((s) => s);
  useEffect(() => {
    if (theme.currentTheme !== 'light') {
      dispatch(changeTheme('light'));
    }
  }, [theme.currentTheme, dispatch]);
  return (
    <div className="bg-white text-gray-900 dark:bg-[#0D0D0D] dark:text-gray-100">
      <PublicNav />
      <div className="pt-6 min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default PublicLayout;


