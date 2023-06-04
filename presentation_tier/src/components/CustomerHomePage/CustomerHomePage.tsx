import React from "react";
import "./CustomerHomePage.css";

interface CustomerHomePageProps {
  userId: number;
  onLogout: () => void;
}

const CustomerHomePage: React.FC<CustomerHomePageProps> = ({
  userId,
  onLogout,
}) => {
  const handleOrder = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle the order submission logic here
  };

  const handleBook = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // const form = event.currentTarget;
    // const table = form.querySelector('select[name="table"]')?.value;
    // const description = form.querySelector('input[name="description"]')?.value;

    try {
      const response = await fetch("http://localhost/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // table,
          // description,
        }),
      });

      if (response.ok) {
        // Handle successful booking
        alert("Table booked successfully!");
      } else {
        // Handle booking failure
        alert("Booking failed. Please try again.");
      }
    } catch (error) {
      // Handle fetch error
      console.log("Error:", error);
    }

    // Reset the form after submission
    // form.reset();
  };

  return (
    <div className="customer-homepage">
      <h1>Customer Home Page</h1>
      <div className="form-container">
        <div className="form-section">
          <h2>Order Form</h2>
          <form onSubmit={handleOrder}>
            <select name="item" className="select-field">
              <option value="1">Item 1</option>
              <option value="2">Item 2</option>
              <option value="3">Item 3</option>
              {/* Add more options for each available item */}
            </select>
            <br />
            <button type="submit" className="form-button">
              Place Order
            </button>
          </form>
        </div>

        <div className="form-section">
          <h2>Booking Form</h2>
          <form onSubmit={handleBook}>
            <select name="table" className="select-field">
              <option value="1">Table 1</option>
              <option value="2">Table 2</option>
              <option value="3">Table 3</option>
              {/* Add more options for each available table */}
            </select>
            <br />
            <input
              type="text"
              name="description"
              className="input-field"
              placeholder="Description"
            />
            <br />
            <button type="submit" className="form-button">
              Book Table
            </button>
          </form>
        </div>
      </div>

      <div className="logout-container">
        <button className="logout-button" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default CustomerHomePage;
