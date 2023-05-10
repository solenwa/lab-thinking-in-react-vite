import React from "react";
import ProductRow from "./ProductRow";

function ProductTable(products) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
      </table>
      <ProductRow products={products} />
    </div>
  );
}

export default ProductTable;
