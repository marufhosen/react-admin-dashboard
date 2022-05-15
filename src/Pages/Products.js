import React from "react";
import "../Style/Products.css";

import { BiCloudUpload } from "react-icons/bi";

const Products = () => {
  return (
    <div className="product-container">
      <div className="product-title-top">Products</div>
      <div className="add-products-container">
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Category" />
        <input type="text" placeholder="Price" />
        <input type="text" placeholder="Quantity" />
        <div class="file">
          <label for="input-file">
            <BiCloudUpload className="product-add-icon" />
            Upload Image
          </label>
          <input id="input-file" type="file" />
        </div>
        <button>Add Product</button>
      </div>
      {/* Prodyct Table */}
      <div className="table-products-container">
        <table className="visitors-table">
          <tr>
            <th>Product Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
          <tr>
            <td>Iphone 13 Pro Max</td>
            <td>Electronics</td>
            <td>1212 USD</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Iphone 13 Pro Max</td>
            <td>Electronics</td>
            <td>1212 USD</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Iphone 13 Pro Max</td>
            <td>Electronics</td>
            <td>1212 USD</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Iphone 13 Pro Max</td>
            <td>Electronics</td>
            <td>1212 USD</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Iphone 13 Pro Max</td>
            <td>Electronics</td>
            <td>1212 USD</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Iphone 13 Pro Max</td>
            <td>Electronics</td>
            <td>1212 USD</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Iphone 13 Pro Max</td>
            <td>Electronics</td>
            <td>1212 USD</td>
            <td>100</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Products;
