package com.cloudthat.productsappv2.service;


import com.cloudthat.productsappv2.entity.Product;
import com.cloudthat.productsappv2.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class ProductServiceImpl implements ProductService{

    @Autowired
    private ProductRepository productRepository;

    @Override
    public Product saveProduct(Product product) {

        return productRepository.save(product);
    }

    @Override
    public List<Product> getProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product getProduct(Long productId) {
        return productRepository.findById(productId).get();
    }

    @Override
    public Product updateProduct(Long productId, Product product) {
        Product productDB = productRepository.findById(productId).get();

        if(Objects.nonNull(product.getProductName()) && !("".equalsIgnoreCase(product.getProductName()))){
            productDB.setProductName(product.getProductName());
        }

        return productRepository.save(productDB);
    }

    @Override
    public void deleteProduct(Long productId) {
        productRepository.deleteById(productId);
    }

    @Override
    public Product getProductByName(String productName) {
        return productRepository.findByProductName(productName);
    }
}
