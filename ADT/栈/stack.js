//实现栈

var Stack = function() {
    this.dataStore = [];
    this.top = 0;
};

/**
 * 将一个元素压人栈
 * push
 * @param element
 * 
 */
Stack.prototype.push = function(element) {
    this.dataStore[this.top++] = element;
};

/**
 * 将一个元素弹出栈
 * pop
 * @return  element
 */
Stack.prototype.pop = function() {
    return this.dataStore[--this.top];
};

/**
 * 返回栈顶元素
 * peek
 * @return element
 */
Stack.prototype.peek = function() {
    return this.dataStore[this.top-1];
};

/**
 * 返回栈的元素个数
 * length
 * @return {number} 
 */
Stack.prototype.length = function() {
    return this.top;
};

/**
 * 清除栈内所有元素
 * clear
 */
Stack.prototype.clear = function() {
    this.dataStore = [];
    this.top = 0;
};

module.exports = Stack;