import React from 'react';
import './ProductsTable.styles.css';
import { Button } from 'react-bootstrap';

export default function Productstable({ products, onProductClick }){
    const notAvailable = 'notAvailable'
    return products && products.length > 0 ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} >
                <th scope="row">{product.id}</th>
                <td>{product.pname}</td>
                <td>{product.quantity}</td>
                <td>{product.price}</td>
                <td><Button variant="primary" onClick={()=> onProductClick(product)}>View</Button> </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <>
          <h3> No data found</h3>
        </>
      );
}