---
sidebar_position: 3
---

# 1、装箱和拆箱

在javascript中有两种数据类型：

　　基本类型：字符串（String）、数字(Number)、布尔(Boolean)、空（Null）、未定义（Undefined）、Symbol，BigInt

　　引用类型：对象(Object)、数组(Array)、函数(Function)

　　在 JavaScript 中，有四个基本的包装类型 String、Number、Boolean、Symbol。



## 装箱操作

所谓的**装箱**，是指将基本数据类型转换为对应的引用类型的操作。

> 装拆箱操作主要是基于基本包装类型来进行的。ECMAScript 提供了3 个基本包装类型类型：Boolean、Number和String。这个三种基本包装类型是3个特殊的引用类型，属于Object类型。

　　装箱分隐式装箱和显式装箱两种装箱方式。

### 隐式装箱

```js
var s1 = 'call_me_R'; // 隐式装箱
var s2 = s1.substring(2);


//等价于
# 1
var s1 = new String('call_me_R');
# 2
var s2 = s1.substring(2);
# 3
s1 = null;
```



> **隐式装箱**当读取一个基本类型值时，后台会创建一个该基本类型所对应的`基本包装类型`对象。在这个基本类型的对象上调用方法，其实就是在这个基本类型对象上调用方法。这个基本类型的对象是临时的，它只存在于方法调用那一行代码执行的瞬间，执行方法后立即被销毁。这也是在基本类型上添加属性和方法会不识别或报错的原因了

```js
var s1 = 'call_me_R';
s1.job = 'frontend engineer';
s1.sayHello = function(){
	console.log('hello kitty');
}
console.log(s1.job); // undefined
s1.sayHello(); // Uncaught TypeError: s1.sayHello is not a function

```









### 显式装箱

装箱的另一种方式是**显式装箱**，这个就比较好理解了，这是通过`基本包装类型`对象对基本类型进行显式装箱，如下：

```js
var name = new String('call_me_R');

new Boolean(true); // 装箱
typeof new Boolean(true) === 'object'; 
typeof new Number(1) === 'object'; 
typeof new String('abc') === 'object';
```



> 显示装箱的操纵可以对`new`出来的对象进行属性和方法的添加啦，
>
> 因为通过`通过new操作符创建的引用类型的实例，在执行流离开当前作用域之前一直保留在内存中`。



```js 
var objStr = new String('call_me_R');
objStr.job = 'frontend engineer';
objStr.sayHi = function(){
	console.log('hello kitty');
}
console.log(objStr.job); // frontend engineer
objStr.sayHi(); // hello kitty

```











## 拆箱操作



拆箱就和装箱相反了，**拆箱**是指把引用类型转换成基本的数据类型。通常通过引用类型的`valueOf()和toString()`方法来实现。

引用类型的值转成基本类型的值就是拆箱。拆箱必须要提两个方法 toString() 和 valueOf() ，toString() 返回字符串，valueOf() 返回对象本身。



```js
var objNum = new Number(64);
var objStr = new String('64');
console.log(typeof objNum); // object
console.log(typeof objStr); // object
// 拆箱
console.log(typeof objNum.valueOf()); // 64  number 基本的数字类型，想要的
console.log(typeof objNum.toString()); // '64'  string 基本的字符类型，不想要的
console.log(typeof objStr.valueOf()); // '64'   string 基本的数据类型，不想要的
console.log(typeof objStr.toString()); // '64'  string 基本的数据类型，想要的
```



```js
var objNum = new Number(123); 
console.log( typeof objNum ); //object
console.log( typeof objNum.valueOf() ); //number
console.log( typeof objNum.toString() ); // string 

var objStr =new String("123");  
console.log( typeof objStr ); //object
console.log( typeof objStr.valueOf() ); //string
console.log( typeof objStr.toString() ); // string
```



## 注意事项

**Number(1)和new Number(1)是不一样的，这个是基本字符串和字符串对象的区别，详情参考基本MDN**

```js
typeof new String('abc') === 'object';//字符串对象
typeof String('abc') === 'string';//基本字符串
```







浅析JavaScript中的装箱和拆箱

https://www.cnblogs.com/goloving/p/14442541.html



github

https://github.com/HuYuee/blog/issues/80



