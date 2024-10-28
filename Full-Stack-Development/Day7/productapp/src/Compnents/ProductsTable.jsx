import React from 'react';
import './ProductsTable.styles.css';
import { Button, Table } from 'react-bootstrap';

export default function Productstable({ products, onProductClick }){
    return products && products.length > 0 ? (
        <Table striped bordered hover>
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
            {products.map((product, idx) => (
              <tr key={product.id}>
                <th scope="row">{idx+1} </th>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>{product.price}</td>
                <td><Button variant="primary" onClick={()=> onProductClick(product)}>View</Button> </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <>
          <h3> No data found</h3>
        </>
      );
}