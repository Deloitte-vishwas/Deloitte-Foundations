package org.example;

import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.context.annotation.EnableLoadTimeWeaving;
import org.springframework.stereotype.Component;


@Aspect
@Component
public class LoggingAspect {

    @Pointcut("execution(public void com.example.ShoppingCart.checkout(..))")
    public void serviceMethod(){}

    @Before("serviceMethod()")
//    @Before("")
    public void beforeLoggingAdvice(){
        System.out.println("Before Logging Advice Called");
    }

    @After("serviceMethod()")
    public void afterLoggingAdvice(){
        System.out.println("After Logging Advice Called");
    }
}
