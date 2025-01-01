import React from "react";
import { useNavigate } from "react-router";
import { LOGIN_ROUTE } from "../routes"; // مسیر صفحه لاگین

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user"); // حذف اطلاعات کاربر از localStorage
    navigate(LOGIN_ROUTE); // هدایت کاربر به صفحه لاگین
  };

  return (
    <button
      onClick={handleLogout}
      className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md"
    >
      خروج
    </button>
  );
};

export default LogoutButton;
