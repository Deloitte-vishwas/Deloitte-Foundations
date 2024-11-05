package com.cloudthat.productsapp.entity;

import jakarta.persistence.*;

import java.util.Set;

@Entity
public class Shipper {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String shipperName;

    @ManyToMany(mappedBy = "shippers")
    private Set<Product> products;

}
