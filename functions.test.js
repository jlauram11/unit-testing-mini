const functions = require('./functions');

test('returnTwo() should return 2.', () => {
    expect(functions.returnTwo()).toBe(2);
});

test('greeting() should return a dynamic greeting based on a name passed in as a parameter.', () => {
    expect(functions.greeting('Jill')).toBe('Hello, Jill.');
    expect(functions.greeting('John')).toBe('Hello, John.');
});

describe('Math Functions:', () => {
    test('add() should return a dynamic sum of two numbers', () => {
        expect(functions.add(2, 4)).toBe(6);
        expect(functions.add(10, 5)).toBe(15);
    });
    
    test('multiply() should return a dynamic product of two numbers', () => {
        expect(functions.multiply(3, 6)).toBe(18);
        expect(functions.multiply(8, 5)).toBe(40);
    })
    
    test('divide() should return a dynamic quotient of two numbers', () => {
        expect(functions.divide(42, 7)).toBe(6);
        expect(functions.divide(36, 12)).toBe(3);
    })
    
    test('subtract() should return the dynamic difference between two numbers', () => {
        expect(functions.subtract(7,2)).toBe(5);
        expect(functions.subtract(37, 17)).toBe(20);
    })
})