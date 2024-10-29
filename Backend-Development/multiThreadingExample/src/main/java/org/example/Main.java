package org.example;

public class Main  extends Thread{
    public void run(){
        System.out.println("Hello from new thread");
    }

    public static void main(String[] args) {
        (new Main()).start();
    }
}





//public class Main implements Runnable{
//
//
//    @Override
//    public void run() {
//        System.out.println("Hello from a thread");
//    }
//
//
//    public static void main(String[] args) {
//
//        System.out.println("Hello world!");
//        new Thread(new Main()).start();
//    }
//}