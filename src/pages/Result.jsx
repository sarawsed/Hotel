import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PaymentResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [paymentStatus, setPaymentStatus] = useState(null);

  useEffect(() => {
    const { status } = location.state || {};  // اگر وضعیت پرداخت ارسال شده بود
    if (status === "success") {
      setPaymentStatus("پرداخت با موفقیت انجام شد.");
      toast.success("پرداخت با موفقیت انجام شد!");
    } else if (status === "failure") {
      setPaymentStatus("پرداخت با شکست مواجه شد.");
      toast.error("پرداخت با شکست مواجه شد!");
    }
  }, [location.state]);

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-semibold">{paymentStatus}</h1>
      <button
        onClick={() => navigate("/")}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        بازگشت به خانه
      </button>
    </div>
  );
};

export default PaymentResult;
