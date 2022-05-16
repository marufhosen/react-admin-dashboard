import React from "react";
import "../Style/Products.css";

import { BiCloudUpload } from "react-icons/bi";

const Customers = () => {
  return (
    <div className="product-container">
      <div className="product-title-top">Customers</div>
      <div className="add-products-container">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Joining Date" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Phone" />
        <button>Add Customer</button>
      </div>
      {/* Prodyct Table */}
      <div className="table-products-container">
        <table className="visitors-table">
          <tr>
            <th>Customer Name</th>
            <th>Joining Date</th>
            <th>Email</th>
            <th>PHONE</th>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>01-01-2022</td>
            <td>example@gmail.com</td>
            <td>+880 01700000000</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>01-01-2022</td>
            <td>example@gmail.com</td>
            <td>+880 01700000000</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>01-01-2022</td>
            <td>example@gmail.com</td>
            <td>+880 01700000000</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>01-01-2022</td>
            <td>example@gmail.com</td>
            <td>+880 01700000000</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>01-01-2022</td>
            <td>example@gmail.com</td>
            <td>+880 01700000000</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>01-01-2022</td>
            <td>example@gmail.com</td>
            <td>+880 01700000000</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>01-01-2022</td>
            <td>example@gmail.com</td>
            <td>+880 01700000000</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>01-01-2022</td>
            <td>example@gmail.com</td>
            <td>+880 01700000000</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>01-01-2022</td>
            <td>example@gmail.com</td>
            <td>+880 01700000000</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>01-01-2022</td>
            <td>example@gmail.com</td>
            <td>+880 01700000000</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>01-01-2022</td>
            <td>example@gmail.com</td>
            <td>+880 01700000000</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Customers;
