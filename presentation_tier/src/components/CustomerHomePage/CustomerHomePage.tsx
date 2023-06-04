import React from "react";

interface CustomerHomePageProps {
  userId: number;
}

const CustomerHomePage: React.FC<CustomerHomePageProps> = ({ userId }) => {
  const handleOrder = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle the order submission logic here
  };

  const handleBook = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle the booking submission logic here
  };

  return (
    <div>
      <h1>Customer Home Page</h1>
      <h2>Order Form</h2>
      <form onSubmit={handleOrder}>
        <select name="item">
          <option value="1">Item 1</option>
          <option value="2">Item 2</option>
          <option value="3">Item 3</option>
          {/* Add more options for each available item */}
        </select>
        <button type="submit">Place Order</button>
      </form>

      <h2>Booking Form</h2>
      <form onSubmit={handleBook}>
        <select name="table">
          <option value="1">Table 1</option>
          <option value="2">Table 2</option>
          <option value="3">Table 3</option>
          {/* Add more options for each available table */}
        </select>
        <input type="text" name="description" placeholder="Description" />
        <button type="submit">Book Table</button>
      </form>
    </div>
  );
};

export default CustomerHomePage;
