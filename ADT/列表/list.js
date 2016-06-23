//实现列类

var List = function() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // 初始化一个空数组来保存列表元素
};

/**
 * 在列表的末尾添加新元素
 * append
 * @param element
 * 
 */
List.prototype.append = function(element) {
    this.dataStore[this.listSize++] = element;
};

/**
 * 在列表中查找某一元素
 * find
 * @param element
 * @return {number}
 * 
 */
List.prototype.find = function(element) {
    for(var i = 0; i < this.listSize; i++) {
        if(this.dataStore[i] === element) {
            return i;
        }
    }
    return -1;
};

/**
 * 从列表中删除元素
 * remove
 * @param element
 * @return {boolean} 
 * 
 */
List.prototype.remove = function(element) {
    var foundAt = this.find(element);
    if(foundAt > -1) {
        this.dataStore.splice(foundAt,1);
        --this.listSize;
        return true;
    }
    return false;
};

/**
 * 返回列表中元素的个数
 * length
 * @return {number}
 * 
 */
List.prototype.length = function() {
    return this.listSize;
};

/**
 * 返回列表中的元素
 * toString
 * @return {array}
 */
List.prototype.toString = function() {
    return this.dataStore;
};

/**
 * 在现有元素后插入新元素
 * insert
 * @param element, after
 * @return {boolean}
 */
List.prototype.insert = function(element, after) {
    var insertPos = this.find(after);
    if(insertPos > -1) {
        this.dataStore.splice(insertPos+1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
};

/**
 * 清空列表中的所有元素
 * clear
 * 
 */
List.prototype.clear = function() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
};

/**
 * 判断给定值是否在列表中
 * contains
 * @param element
 * @return {boolean}
 */
List.prototype.contains = function(element) {
    for(var i = 0; i < this.listSize; ++i) {
        if(this.dataStore[i] === element) {
            return true;
        }
    }
    return false;
};

//以下方法为遍历列表方法

/**
 * 将列表的当前位置设移动到第一个元素
 * front
 */
List.prototype.front = function() {
    this.pos = 0;
};

/**
 * 将列表的当前位置移动到最后一个元素
 * end
 */
List.prototype.end = function() {
    this.pos = this.listSize - 1;
}

/**
 * 将当前位置后移一位
 * prev
 */
List.prototype.prev = function() {
    if(this.pos > 0) {
        --this.pos;
    }
};

/** 
 * 将当前位置前移一位
 * next
 */
List.prototype.next = function() {
    if(this.pos < this.listSize-1) {
        ++this.pos;
    }
}

/**
 * 返回列表的当前位置
 * currPos
 * @return {number}
 */
List.prototype.currPos = function() {
    return this.pos;
};

/**
 * 将当前位置移动到指定位置
 * moveTo
 * @param {number}
 */
List.prototype.moveTo = function(position) {
    this.pos = position;
};

/**
 * 返回当前位置的元素
 * getElement
 * @return element
 */
List.prototype.getElement = function() {
    return this.dataStore[this.pos];
}

module.exports = List;