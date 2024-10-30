package org.example;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class LoggingAspect {

    @Pointcut("execution(public * *(..)")
    public void serviceMethod(){}

    @Before("serviceMethod()")
    public void loggingAdvice(){
        System.out.println("Logging Advice Called");
    }
}
