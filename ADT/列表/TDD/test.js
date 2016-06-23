/**
 * BDD测试代码，测试列表实现
 * http://mochajs.org/
 * http://chaijs.com/
 * 
 */
//引入断言库
var assert = require('chai').assert;

//引入要测试的文件
var List = require('../list.js');

describe('测试列表实现', function() {
    var newList = new List();
    
    describe('#append()', function() {
        it('应该在列表的末尾插入新元素', function() {
            newList.append('test');
            assert.equal(newList.dataStore[newList.listSize - 1], 'test');
        });
    });

    describe('#find()', function() {
        it('应该返回数字', function() {
            var index = newList.find('aa');
            assert.typeOf(index, 'number');
        });
        it('应该返回已存在元素不等于-1的索引，', function() {
            var index = newList.find('test');
            assert.notEqual(index, -1);
        });
    });

    describe('#remove()', function() {
        it('应该返回布尔值', function() {
            var bool = newList.remove();
            assert.typeOf(bool,'boolean');
        });
        it('移除已存在的元素，应该返回ture', function() {
            var bool = newList.remove('test');
            assert.equal(bool, true);
        });
    });

    describe('#length()', function() {
        it('应该返回 number 类型数据', function() {
            var num = newList.length();
            assert.typeOf(num, 'number');
        });
        it('应该返回列表中元素的实际个数', function() {
            newList.append('length');
            var length = newList.length();
            assert.equal(length, newList.dataStore.length);
        });
    });

    describe('#toString()', function() {
        it('应该返回一个数组', function() {
            var data = newList.toString();
            assert.isArray(data, '返回元素列表');
        });
    });

    describe('#insert()', function() {
        it('插入列表中不存在的元素后面应该返回false', function() {
            var bool = newList.insert('insert', 'notExit');
            assert.equal(bool, false);
        });
        it('插入列表中存在的元素后面应该返回true', function() {
            newList.append('mark');
            var bool = newList.insert('insert', 'mark');
            assert.equal(bool,true);
        });
    });

    describe('#contains()', function() {
        it('应该返回布尔值',function() {
            newList.remove('contains');
            var bool = newList.contains('contains');
            assert.typeOf(bool, 'boolean');
        });
        it('当检测列表中存在的元素时，应该返回true', function() {
            newList.append('contains');
            var bool = newList.contains('contains');
            assert.equal(bool, true);
        });
    });

    describe('#front()', function() {
        it('执行后当前pos值应该为0', function() {
            newList.front();
            assert.equal(newList.pos, 0);
        });
    });

    describe('#end()', function() {
        it('执行后当前pos值应该为最后一位', function() {
            newList.end();
            assert.equal(newList.pos, newList.listSize - 1);
        });
    });

    describe('#prev', function() {
        it('执行后当前位置后移一位', function() {
            newList.end();
            newList.prev();
            assert.equal(newList.pos, newList.listSize - 2);
        });
    });

    describe('#next', function() {
        it('执行后当前位置前移一位', function() {
            newList.front();
            newList.next();
            assert.equal(newList.pos, 1);
        });
    });

    describe('#currPos', function() {
        it('返回列表的当前位置应该为数字', function() {
            var num = newList.currPos();
            assert.typeOf(num, 'number');
        });
    });

    describe('#moveTo', function() {
        it('将当前位置移动到指定位置', function() {
            newList.front();
            newList.moveTo(1);
            assert.equal(newList.currPos(), 1);
        });
    });

    describe('#getElement', function() {
        it('返回当前位置的元素', function() {
            newList.clear();
            newList.append('test');
            var ele = newList.getElement();
            assert.equal(ele, 'test');
        });
    });

});

