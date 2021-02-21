/*
作用域：
    全局作用域
        全局作用域有一个全局对象 window
            创建全局变量都会作为 window对象 的属性保存
            创建函数会作为 window对象 的方法保存

    函数作用域
 */

window.a = 1;
document.write(a);
