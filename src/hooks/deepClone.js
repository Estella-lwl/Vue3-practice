import { map } from 'core-js/core/array';

// 未考虑数组的情况下：
export function basicClone(target) {
  // 先判断是否为对象类型：
  if (typeof target === 'object') {
    let cloneTarget = {};
    for (const key in target) {
      // 将原对象中每一项放入新对象：
      cloneTarget[key] = basicClone(target[key]);
    }
    // 返回新对象：
    return cloneTarget;
  } else {
    return target;
  }
}

// 根据以上改进加入数组：
export function Clone(target) {
  if (typeof target === 'object') {
    // 关键：如果target是数组则定义个新数组而非对象。其余代码与上种无差别。
    let cloneTarget = Array.isArray(target) ? [] : {};
    for (const key in target) {
      cloneTarget[key] = Clone(target[key]);
    }
    return cloneTarget;
  } else {
    return target;
  }
}

// 考虑栈溢出的情况：(当对象中的属性引用了自身，就会导致栈溢出。)
// 测试用例：
// const target = {
//   field1: 1,
//   field2: undefined,
//   field3: {
//       child: 'child'
//   },
//   field4: [2, 4, 8]
// };
// target.target = target;
export function deepClone(target, map = new Map()) {
  if (typeof target === 'object') {
    let cloneTarget = Array.isArray(target) ? [] : {};
    // 判断map中有没有已经克隆过的对象：
    if (map.get(target)) {
      // 有 =》直接返回：
      return map.get(target);
    }
    // 没有 =》将当前对象作为key，克隆对象作为value进行存储：
    map.set(target, cloneTarget);
    // 继续克隆：
    for (const key in target) {
      cloneTarget[key] = deepClone(target[key], map);
    }
    return cloneTarget;
  } else {
    return target;
  }
}
