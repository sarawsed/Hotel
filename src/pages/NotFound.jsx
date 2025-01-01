import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-semibold">صفحه مورد نظر یافت نشد</h1>
      <button
        onClick={() => navigate("/")}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        بازگشت به خانه
      </button>
    </div>
  );
};

export default NotFound;
