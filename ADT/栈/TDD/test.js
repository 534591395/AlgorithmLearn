/**
 * TDD测试代码，测试列表实现
 * http://mochajs.org/
 * http://chaijs.com/
 * 
 */
//引入断言库
var assert = require('chai').assert;

//引入要测试的文件
var Stack = require('../stack.js');
var stack;

describe('测试栈实现', function() {
    before(function() {
        stack =  new Stack();
    });
    
    describe('#push()', function() {
        it('应该添加了一个元素', function() {
            stack.push('push');
            assert.equal(stack.top, stack.dataStore.length);
        });
    });
    
    describe('#pop()', function() {
        before(function() {
           stack.push('pop'); 
        });
        
        it('应该返回栈最顶部元素', function() {
            var element = stack.pop();
            assert.equal(element, 'pop');
        });
        it('应该删除之前的最顶部元素', function() {
            assert.notEqual(stack.dataStore[stack.top - 1], 'pop');
        });
    });
    
    describe('#peek()', function() {
        it('应该返回栈最顶部的元素', function() {
            stack.push('peek');
            assert.equal(stack.peek(), 'peek');
        });
    });
    
    describe('#length()', function() {
         before(function() {
             stack.dataStore = [];
             stack.top = 0;
             stack.push('one');
             stack.push('two');
         });
         
         it('应该返回栈的元素个数', function() {
             assert.equal(stack.top, 2);
         });
         
         after(function() {
             stack.dataStore = [];
             stack.top = 0;
         });
    });
    
    describe('#clear', function() {
        before(function() {
            stack.push('clear');
            stack.push('clear2');
        });
        
        it('执行后应该长度为0', function() {
            stack.clear();
            assert.equal(stack.top, 0);
        });
    });
    
    after(function() {
        stack =  null;
    });
});

