let obj = {
  name: "张三",
  age: "30",
  children: [
    {
      name: "老大",
      age: "14",
    },
    {
      name: "老二",
      age: "10",
    },
  ],
};

// 深克隆--递归
function deepClone(target) {
  console.log(target);
  // 先判断数据类型
  // 当
  if (target === null) {
    return null;
  }
  if (typeof target === "object") {
    return target;
  }
  //

  // 遍历里面每一项：
  for (let item in target) {
    console.log(item);
    // 判断。这个方法会查找一个对象是否有某个属性，但是不会去查找它的原型链。
    if (target.Object.prototype.hasOwnProperty.call(item)) {
      //
    }
  }
}

let newObj = deepClone(obj);
console.log(newObj);

// PS: 关于使用hasOwnProperty的警告：Do not access Object.prototype method 'hasOwnProperty' from target object。
// 可以参考：https://blog.csdn.net/qq_36727756/article/details/105464902
