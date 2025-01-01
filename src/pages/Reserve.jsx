import React, { useState } from "react";
import { toast } from "react-toastify";

const ReservationPage = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newReservation = { name, date, service };

    // دریافت رزروهای قبلی از localStorage یا ایجاد آرایه خالی
    const storedReservations = JSON.parse(localStorage.getItem("reservations")) || [];

    // اضافه کردن رزرو جدید به لیست
    storedReservations.push(newReservation);

    // ذخیره‌سازی لیست به روز شده رزروها در localStorage
    localStorage.setItem("reservations", JSON.stringify(storedReservations));

    // نمایش پیغام موفقیت
    toast.success("رزرو با موفقیت انجام شد!");

    // پاک کردن فیلدهای ورودی پس از ثبت رزرو
    setName("");
    setDate("");
    setService("");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold text-center mb-6">رزرو خدمات</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium">
            نام
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-medium">
            تاریخ
          </label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="service" className="block text-sm font-medium">
            خدمات
          </label>
          <select
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          >
            <option value="">لطفاً یک خدمت را انتخاب کنید</option>
            <option value="Laundry">خشک‌شویی</option>
            <option value="Cleaning">تمیزکاری</option>
            <option value="Ironing">اتوی لباس</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded-md"
        >
          ثبت رزرو
        </button>
      </form>
    </div>
  );
};

export default ReservationPage;
