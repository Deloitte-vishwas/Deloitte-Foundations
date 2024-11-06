package com.cloudthat.productsappv2.controller;


import com.cloudthat.productsappv2.entity.Product;
import com.cloudthat.productsappv2.model.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductsController {
    @Autowired
    private com.cloudthat.productsappv2.service.ProductService productService;

    @PostMapping("/products")
    public Product createProduct(@RequestBody Product product){
        return productService.saveProduct(product);
    }

    @GetMapping("/products")
    public List<Product> getAllProducts(){
        return productService.getProducts();
    }

    @GetMapping("/products/{productId}")
    public ResponseEntity<ApiResponse> getProductByName(@PathVariable("productId") Long productId){
        return new ResponseEntity<ApiResponse>(new ApiResponse(true,"Product Fetch Successful", productService.getProduct(productId)), HttpStatus.OK );
    }

    @PutMapping("/products/{productId}")
    public Product updateProduct(@PathVariable("productId") Long productId, @RequestBody Product product){
        return productService.updateProduct(productId, product);
    }

    @DeleteMapping("/products/{productId}")
    public String deleteProduct(@PathVariable("productId") Long productId){
        productService.deleteProduct(productId);
        return "Product Deleted Successfully";
    }

    @GetMapping("/products/names/{productName}")
    public Product getProductByName(@PathVariable("productName") String productName){
        return productService.getProductByName(productName);
    }
}
