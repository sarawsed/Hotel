import React, { useEffect } from "react";
import { useNavigate } from "react-router"; // برای هدایت به صفحه دیگه
import { HOME_ROUTE } from "../routes"; // مسیر صفحه خانه

const LoginRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      // اگه کاربر وارد شده بود، هدایتش کن به صفحه خانه
      navigate(HOME_ROUTE);
    }
  }, [navigate]);

  return <div>در حال بررسی اطلاعات کاربر...</div>;
};

export default LoginRedirect;
