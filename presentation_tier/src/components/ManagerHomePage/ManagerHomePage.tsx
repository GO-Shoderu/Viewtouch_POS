import React, { useEffect, useState } from "react";
import "./ManagerHomePage.css";

interface ManagerHomePageProps {
  userId: number;
  onLogout: () => void;
}

interface User {
  id: number;
  username: string;
  category: string;
}

const ManagerHomePage: React.FC<ManagerHomePageProps> = ({
  userId,
  onLogout,
}) => {
  const [users, setUsers] = useState<User[]>([]);
  const [newStaffName, setNewStaffName] = useState("");
  const [newStaffPassword, setNewStaffPassword] = useState("");
  const [newStaffCategory, setNewStaffCategory] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch("http://localhost:5000/admin_users", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  };

  const handleAddStaff = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newStaff = {
      name: newStaffName,
      password: newStaffPassword,
      category: newStaffCategory,
    };

    fetch("http://localhost:5000/create_user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStaff),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
        fetchUsers(); // Fetch the updated list of users
      })
      .catch((error) => console.log(error));

    setNewStaffName("");
    setNewStaffPassword("");
    setNewStaffCategory("");
  };

  // const handleManageOrder = () => {
  //   // Logic for managing orders
  // };

  return (
    <div className="manager-home-page">
      <h1>Manager Home Page</h1>

      <div className="staff-list">
        <h2>Staff List</h2>
        <ul className="user-list">
          {users.map((user) => (
            <li key={user.id} className="user-item">
              <div className="user-details">
                <span className="username">User: {user.username}</span>
                <span className="category">
                  Responsibility: {user.category}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="add-staff">
        <h2>Add Staff</h2>
        <form onSubmit={handleAddStaff}>
          <input
            type="text"
            placeholder="Staff Name"
            value={newStaffName}
            onChange={(e) => setNewStaffName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={newStaffPassword}
            onChange={(e) => setNewStaffPassword(e.target.value)}
          />
          <select
            value={newStaffCategory}
            onChange={(e) => setNewStaffCategory(e.target.value)}
          >
            <option value="waiter">Waiter</option>
            <option value="cashier">Cashier</option>
          </select>
          <button type="submit">Add Staff</button>
        </form>
      </div>

      <div className="logout-container">
        <button className="logout-button" onClick={onLogout}>
          Logout
        </button>
      </div>
      {/* <h2>Manage Orders</h2>
      <button onClick={handleManageOrder}>Manage Orders</button> */}
    </div>
  );
};

export default ManagerHomePage;
