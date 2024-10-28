import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Productstable from '../Compnents/ProductsTable';
import ProductModal from '../Compnents/ProductModal';
import './styles.css'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { fetchAllProducts } from '../Services/ProductService';



// const products = [
//     {id:1,pname:'Apple',pdesc:'Kashmiri Apple',price:120,quantity:100},
//     {id:2,pname:'Banana',pdesc:'Kashmiri Banana',price:120,quantity:100},
//     {id:3,pname:'Grapes',pdesc:'Kashmiri Grapes',price:120,quantity:100},
//     {id:4,pname:'Mango',pdesc:'Kashmiri Mango',price:120,quantity:0},
//     {id:5,pname:'Jackfruit',pdesc:'Kerala Jackruit',price:120,quantity:0},
// ]

export default function Home(){
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleSelectedProduct = (product) => { setSelectedProduct(product); setShow(true)};

    useEffect(() => {
        // Fetch products from the product service
        fetchAllProducts()
          .then((data) => {
            setProducts(data);
          })
          .catch((error) => {
            console.error("Error fetching products:", error);
          });
      }, []);


    return (
        <>
        <Button variant="success" onClick={()=> navigate('addProduct')}>Add Product </Button>
        <Productstable products={products} onProductClick={handleSelectedProduct}/>
        <ProductModal selectedProduct={selectedProduct} show={show} handleClose={handleClose}/>


        </>
    )
}