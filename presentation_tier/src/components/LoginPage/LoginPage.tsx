import React, { useState } from "react";
import "./LoginPage.css";

interface LoginPageProps {
  onLogin: (isLoggedIn: boolean, category: string, userId: number) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const { isLoggedIn, category, userId } = await response.json();
        onLogin(isLoggedIn, category, userId);
      } else {
        // Handle error response
        console.log("Login failed");
      }
    } catch (error) {
      // Handle fetch error
      console.log("Error:", error);
    }
  };

  return (
    <div className="login-page">
      <h1>ViewTouch Login Page</h1>
      <form className="form-container" onSubmit={handleLogin}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="input-field"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="input-field"
        />
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
