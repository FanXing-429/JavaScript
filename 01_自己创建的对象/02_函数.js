// 函数声明，不调用不会执行
function fun1() {
    document.write("hello,world");
}
// 调用
fun1();

function sum(a, b) {
    return a + b;
}
let result = sum(1,2);
document.write(result);