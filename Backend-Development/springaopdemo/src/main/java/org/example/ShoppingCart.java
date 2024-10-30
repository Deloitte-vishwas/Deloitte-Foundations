package org.example;

import org.springframework.stereotype.Component;

@Component
public class ShoppingCart {
    public void checkout(String status) {

        System.out.println("Checkout method called...");
    }

    public void sendAmount(String status) {
        System.out.println("sendAmount method called...");
        int k = 5;
    }

}