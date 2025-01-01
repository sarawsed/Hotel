import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { LOGIN_ROUTE } from "../routes"; // مسیر صفحه لاگین

const Home = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    } else {
      navigate(LOGIN_ROUTE); // هدایت به صفحه لاگین اگه کاربر وارد نشده باشه
    }
  }, [navigate]);

  return (
    <div className="max-w-4xl mx-auto p-8">
      {user ? (
        <div>
          <h1 className="text-3xl font-bold">سلام {user.username}!</h1>
          <p className="mt-4">خوش آمدید به صفحه اصلی</p>
        </div>
      ) : (
        <div>در حال بارگذاری...</div>
      )}
    </div>
  );
};

export default Home;
