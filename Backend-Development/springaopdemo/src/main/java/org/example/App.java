package org.example;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        ApplicationContext ctx = new AnnotationConfigApplicationContext(BeanConfig.class);
        ShoppingCart s1 = ctx.getBean(ShoppingCart.class);

        s1.checkout("ACCEPTED");
        s1.sendAmount("ACCEPTED");

    }
}
