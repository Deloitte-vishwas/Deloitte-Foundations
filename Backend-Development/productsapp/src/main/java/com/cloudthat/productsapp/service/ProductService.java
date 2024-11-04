package com.cloudthat.productsapp.service;

import com.cloudthat.productsapp.entity.Product;

import java.util.List;

public interface ProductService {
    Product saveProduct(Product product);

    List<Product> getProducts();

    Product getProduct(Long productId);
}
