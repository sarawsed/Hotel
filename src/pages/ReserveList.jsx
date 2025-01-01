import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ReservationList = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    // فرض می‌کنیم رزروها در localStorage ذخیره می‌شوند
    const storedReservations = JSON.parse(localStorage.getItem("reservations")) || [];
    setReservations(storedReservations);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-semibold">لیست رزروها</h1>
      <div className="mt-6">
        {reservations.length === 0 ? (
          <p>هیچ رزروی انجام نشده است.</p>
        ) : (
          <ul>
            {reservations.map((reservation, index) => (
              <li key={index} className="border p-4 mt-4 rounded-md">
                <h2 className="font-semibold">نام: {reservation.name}</h2>
                <p>تاریخ: {reservation.date}</p>
                <p>خدمت: {reservation.service}</p>
                <Link to={`/reservation/${index}`} className="text-blue-500 mt-2 inline-block">
                  جزئیات بیشتر
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ReservationList;
