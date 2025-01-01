import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (username === "user" && password === "password") {
      localStorage.setItem("user", JSON.stringify({ username }));
      toast.success("ورود با موفقیت انجام شد!");
      navigate("/home");
    } else {
      if (username !== "user") {
        toast.error("نام کاربری اشتباه است.");
      } else if (password !== "password") {
        toast.error("رمز عبور اشتباه است.");
      }
    }
    setIsLoading(false);
  };

  return (
    <div className="max-w-lg mx-auto p-8">
      <h1 className="text-3xl font-semibold">ورود</h1>
      <form onSubmit={handleSubmit}>
        <div className="mt-4">
          <label className="block">نام کاربری</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 mt-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mt-4">
          <label className="block">رمز عبور</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mt-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className={`w-full mt-4 p-2 bg-blue-500 text-white rounded-md ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isLoading}
        >
          {isLoading ? "در حال ورود..." : "ورود"}
        </button>
      </form>
    </div>
  );
};

export default SignIn;
