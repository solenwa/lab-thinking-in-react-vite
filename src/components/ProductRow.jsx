import React from "react";

function ProductRow(products) {
  return (
    <div>
      {products.map((product) => {
        return (
          <tr>
            {product.inStock === true ? (
              <td style={{ color: "red" }}>{product.name}</td>
            ) : (
              <td>{product.name}</td>
            )}

            <td>{product.price}</td>
          </tr>
        );
      })}
    </div>
  );
}

export default ProductRow;
