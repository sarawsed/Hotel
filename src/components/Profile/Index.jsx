import React from "react";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="max-w-lg mx-auto p-8">
      <h1 className="text-3xl font-semibold">پروفایل</h1>
      <div className="mt-4">
        <p>نام کاربری: {user ? user.username : "کاربر ناشناخته"}</p>
        <p>ایمیل: {user ? user.email : "ایمیل ناشناخته"}</p>
      </div>
    </div>
  );
};

export default Profile;
