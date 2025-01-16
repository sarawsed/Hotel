import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "./InputField";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BASE_LOGIN_API_URL } from "../../constant/api";

const schema = yup.object().shape({
  username: yup.string().required("username is required !"),
  password: yup.string().required("password is required !"),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const response = await axios.get(`${BASE_LOGIN_API_URL}`);

      const users = response.data;

      const user = users.find(
        (user) =>
          user.username === data.username && user.password === data.password
      );

      if (user) {
        console.log("Login successful", user);
        localStorage.setItem("user", JSON.stringify(user));
        toast.success("Login successful!", {
          position: "top-center",
        });
      } else {
        toast.error("نام کاربری یا رمز عبور اشتباه است", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log("Login failed", error);
      toast.error("خطا در ارتباط با سرور", {
        position: "top-center",
      });
    }

    setLoading(false);
  };
  const fields = [
    { label: "UserName", name: "username", type: "text" },
    { label: "PassWord", name: "password", type: "password" },
  ];

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-6">ورود به حساب</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field) => (
          <InputField
            key={field.name}
            label={field.label}
            name={field.name}
            type={field.type}
            register={register}
            errors={errors}
          />
        ))}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? "در حال ورود..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
