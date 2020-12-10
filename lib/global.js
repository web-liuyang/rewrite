/**
 * @description 全局API重写
 */
(function () {

  /**
   * @description - 模拟new关键词
   * @param { function } constructor - 构造函数
   * @param { ...any } arguments - 参数
   * @returns { object } - 返回实例对象
   */
  var create = function (constructor) {
    var _origin = constructor; // 保存构造函数
    var _args = Array.from(arguments).slice(1); // 获取参数
    var _obj = {}; // 创建一个空对象
    _obj.__proto__ = constructor.prototype; // 把空对象的构造函数指向传进来的构造函数
    var newObj = _origin.apply(_obj, _args); // 执行传进来的构造函数，并把this指向空对象
    return newObj ? newObj : _obj;
  };

  return {
    create,
  };
})();
