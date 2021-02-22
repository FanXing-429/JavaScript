/*
* 对象的分类：
*   1、内建对象
*       - 由ES标准定义的对象，在任何ES的实现中都可以使用
*       - 比如：Math String Number Boolean Object
*   2、宿主对象
*       - 由JS的运行环境提供的对象，目前来讲主要指浏览器提供的对象
*       - 比如：02_BOM、01_DOM
*   3、自定义对象
*       - 由开发人员自己创建的对象
*/

// 创建对象1：
let obj = new Object();
obj.name = "张三";
obj.age = 18;



// 创建对象2：JSON（JavaScript Object Notation, JS 对象简谱）
let obj1 = {
    name : "张三",
    age : 18
};
console.log(obj1);


// 删除对象的某个属性
delete obj.age;
document.writeln(obj.age); //undefined


