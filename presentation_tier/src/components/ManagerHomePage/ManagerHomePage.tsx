import React from "react";

interface ManagerHomePageProps {
  userId: number;
}

const ManagerHomePage: React.FC<ManagerHomePageProps> = ({ userId }) => {
  const handleAddStaff = () => {
    // Logic for adding staff members
  };

  const handleManageOrder = () => {
    // Logic for managing orders
  };

  return (
    <div>
      <h1>Manager Home Page</h1>
      <h2>Add Staff</h2>
      <button onClick={handleAddStaff}>Add Staff</button>

      <h2>Manage Orders</h2>
      <button onClick={handleManageOrder}>Manage Orders</button>
    </div>
  );
};

export default ManagerHomePage;
