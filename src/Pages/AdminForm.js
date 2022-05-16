import React from "react";
import "../Style/Form.css";

const AdminForm = () => {
  return (
    <div className="form-container">
      <h1 className="form-title">Profile</h1>
      <div className="contain-form">
        <form>
          <label for="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name"
          />

          <label for="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name"
          />
          <label for="lname">Email</label>
          <input
            type="text"
            id="lname"
            name="email"
            placeholder="Your last email"
          />
          <label for="lname">Phone Number</label>
          <input
            type="text"
            id="lname"
            name="phone"
            placeholder="Your phone number"
          />

          <label for="country">Role</label>
          <select id="country" name="country">
            <option value="australia">Admin</option>
            <option value="canada">CEO</option>
            <option value="usa">Manager</option>
          </select>
          <input type="submit" value="SUBMIT" />
        </form>
      </div>
    </div>
  );
};

export default AdminForm;
