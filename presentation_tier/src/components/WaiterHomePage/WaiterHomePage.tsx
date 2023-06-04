import React from "react";

interface WaiterHomePageProps {
  userId: number;
}

const WaiterHomePage: React.FC<WaiterHomePageProps> = ({ userId }) => {
  const handlePayment = (orderId: number) => {
    // Handle the payment logic for the specified orderId
  };

  return (
    <div>
      <h1>Waiter Home Page</h1>
      <h2>Orders</h2>
      {/* Fetch and display the orders for the waiter */}
      <ul>
        <li>Order 1</li>
        <li>Order 2</li>
        <li>Order 3</li>
        {/* Add more list items for each order */}
      </ul>

      <h2>Manage Payments</h2>
      <button onClick={() => handlePayment(1)}>Make Payment for Order 1</button>
      <button onClick={() => handlePayment(2)}>Make Payment for Order 2</button>
      <button onClick={() => handlePayment(3)}>Make Payment for Order 3</button>
      {/* Add more buttons for each order */}
    </div>
  );
};

export default WaiterHomePage;
