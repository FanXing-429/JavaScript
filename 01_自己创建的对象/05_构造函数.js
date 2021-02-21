// 在前面我们要创建对象只能 new Object()，我们要想创建一个人对象，怎么办？
// 我们可以通过写一个构造函数，来进行新对象的创建【相当于Java中的类】

function Person(name, age) {
    this.name = name;
    this.age = age;
}


let p1 = new Person("张三", 19);
let p2 = new Person("李四", 18);

document.write(p1 instanceof Person); // true
document.write(p2 instanceof Object); // true
