package com.cloudthat.productsappv2.service;



import com.cloudthat.productsappv2.entity.Product;
import com.cloudthat.productsappv2.model.ProductModel;
import com.cloudthat.productsappv2.model.ProductRequest;

import java.util.List;

public interface ProductService {
    ProductModel saveProduct(ProductRequest productRequest);

    List<ProductModel> getProducts();

    ProductModel getProduct(Long productId);

    Product updateProduct(Long productId, Product product);

    void deleteProduct(Long productId);

    Product getProductByName(String productName);
}
