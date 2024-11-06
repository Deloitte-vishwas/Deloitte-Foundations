package com.cloudthat.productsappv2.controller;

import com.cloudthat.productsappv2.entity.Category;
import com.cloudthat.productsappv2.entity.Product;
import com.cloudthat.productsappv2.model.ProductRequest;
import com.cloudthat.productsappv2.service.ProductService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;


@WebMvcTest(ProductsController.class)
public class ProductControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ProductService productService;

    private Product product;

    @BeforeEach
    void setUp(){
//        Product product1 = Product.builder()
//                .productName("Orange")
//                .category("GROCERY")
//                .price(23.5)
//                .id(1L)
//                .build();
    }

    @Test
    void saveProduct() throws Exception{
//        ProductRequest inputProduct = new ProductRequest();
//                inputProduct.setProductName("Orange");
//                inputProduct.setCategory(Category.valueOf("GROCERY"));
//                inputProduct.setPrice(23.5);
//
//        Mockito.when(productService.saveProduct(inputProduct)).thenReturn(product1);
//
//        mockMvc.perform(MockMvcRequestBuilders.post("/products").contentType(MediaType.APPLICATION_JSON)
//                        .content("{\r\n    \"success\": true,\r\n    \"message\": \"Product Created Successfully\",\r\n    \"data\": {\r\n        \"id\": 30,\r\n        \"productName\": \"Orange\",\r\n        \"price\": 23.5,\r\n        \"category\": \"GROCERY\"\r\n    }\r\n}"))
//                .andExpect(MockMvcResultMatchers.status().isOk());
//    }
}
