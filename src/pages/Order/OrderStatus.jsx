import { useLocation } from "react-router-dom";

export default function OrderStatus() {
  const location = useLocation();
  const { orderResponse } = location.state || {};

  return (
    <div className="flex flex-col gap-4 justify-center items-center p-8 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-successColor">Order Status</h1>
      <p className="text-lg text-gray-700">
        Congratulations, your order has been created.
      </p>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <p className="text-md font-semibold">
          Order Id: <span className="text-blue-600">{orderResponse.id}</span>
        </p>
        <p className="text-md font-semibold">
          Amount paid:{" "}
          <span className="text-blue-600">{orderResponse.price} TL</span>
        </p>
      </div>
      <button className="mt-4 px-6 py-2 bg-color3 text-white rounded-lg shadow hover:bg-green-600 transition">
        Go to Orders Page
      </button>
    </div>
  );
}
