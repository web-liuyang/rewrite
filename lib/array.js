/**
 * 数组方法重写
 * 1. forEach -> myForEach
 * 2. map -> myMap
 * 3. filter -> myFilter
 * 4. find -> myFind
 */

(function () {
  /**
   * @description 重写forEach方法
   * @param { Function } cb - 回调函数
   * @param { Any } _this - 更改this指向
   */
  Array.prototype.myForEach = function (cb, _this) {
    var _origin = this; // 保存源对象
    var _len = this.length; // 保存长度
    var _this = _this || window; // 获取第二个参数改变this指向，没有则指向window
    for (var i = 0; i < _len; i++) {
      cb.call(_this, _origin[i], i, _origin); // 更改this指向并传参数
    }
  };

  /**
   * @description 重写map方法
   * @param { Function } cb - 回调函数
   * @param { Any } _this - 更改this指向
   * @returns { Any[] } 返回处理后的数组
   */
  Array.prototype.myMap = function (cb, _this) {
    var _origin = this; // 保存源对象
    var _len = this.length; // 保存长度
    var _this = _this || window; // 获取第二个参数改变this指向，没有则指向window
    var _arr = []; // 保存返回的数据
    for (var i = 0; i < _len; i++) {
      _arr.push(cb.call(_this, _origin[i], i, _origin)); // 更改this指向并传参数，返回值装入_arr
    }
    return _arr; //返回值
  };

  /**
   * @description 重写filter方法
   * @param { Function } cb - 回调函数
   * @param { Any } _this - 更改this指向
   * @returns { Any[] } 返回处理后的数组
   */
  Array.prototype.myFilter = function (cb, _this) {
    var _origin = this; // 保存源对象
    var _len = this.length; // 保存长度
    var _this = _this || window; // 获取第二个参数改变this指向，没有则指向window
    var _arr = []; // 保存返回的数据
    for (var i = 0; i < _len; i++) {
      var _data = cb.call(_this, _origin[i], i, _origin); // 更改this指向并传参数,保存返回值
      _data && _arr.push(_origin[i]); // 返回值为真才装入_arr
    }
    return _arr; //返回值
  };

  /**
   * @description 重写find方法
   * @param { Function } cb - 回调函数
   * @param { Any } _this - 更改this指向
   * @returns { Any[] } 返回处理后的数组
   */
  Array.prototype.myFind = function (cb, _this) {
    var _origin = this; // 保存源对象
    var _len = this.length; // 保存长度
    var _this = _this || window; // 获取第二个参数改变this指向，没有则指向window

    for (var i = 0; i < _len; i++) {
      var _data = cb.call(_this, _origin[i], i, _origin); // 更改this指向并传参数,保存返回值
      if (_data) return _origin[i];
    }
  };
})();
