import React, { useState } from "react";
import LoginPage from "./components/LoginPage/LoginPage";
import CustomerHomePage from "./components/CustomerHomePage/CustomerHomePage";
import WaiterHomePage from "./components/WaiterHomePage/WaiterHomePage";
import ManagerHomePage from "./components/ManagerHomePage/ManagerHomePage";

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [category, setCategory] = useState<string>("");
  const [userId, setUserId] = useState<number>(0);

  const handleLogin = (
    loggedIn: boolean,
    userCategory: string,
    userId: number
  ) => {
    setIsLoggedIn(loggedIn);
    setCategory(userCategory);
    setUserId(userId);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <div>
          {category === "customer" && <CustomerHomePage userId={userId} />}
          {category === "manager" && <ManagerHomePage userId={userId} />}
          {category === "waiter" && <WaiterHomePage userId={userId} />}
        </div>
      )}
    </div>
  );
};

export default App;
