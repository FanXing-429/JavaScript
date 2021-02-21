// 在Java中，会有class的概念
/*
    class Main {
        public static void fun1() {
            System.out.println("Hello");
        }
        Main main = new Main();
        main.fun1();
    }
*/
// 可以对象调用方法
// 在 js 中我们也可以通过 匿名函数赋值给变量 实现
let obj2 = new Object();
obj2.fun1 = function() {

}
alert(obj2.fun1());
