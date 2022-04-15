---
title: Advanced JavaScript Foundations
description: Advanced JS concepts with code snippets
date: 15-04-2022
tags: javascript
---

---

## Primitive Types

You might have heard in JS that everything in JS is an object. But that's not true in the case of primitive values.

```js
console.log(typeof 'Hello World!'); // string
console.log(typeof 10); // number
console.log(typeof false); // boolean
console.log(typeof 14n); // bigint
console.log(typeof Symbol()); // symbol
console.log(typeof null); // object
console.log(typeof undefined); // undefined
```

### What makes primitive types different?

- Primitive types cannot be mutated like an array or object
- It does not have properties or methods on it because it's not an object.

Primitive values represent the lowest level of language implementation. The `typeof` operator is used to determine its type.

> The `typeof null` evaluates to `object` which is not really an object. It's a bug introduced in JS and has never been fixed.

### Pass by value/reference

Primitive types are passed by values to the functions params. It means the params copy the actual value and can be modified inside the function, but the original variable holds the same value.

```js
let num = 1;

function addTwo(num) {
	num = num + 2;
	console.log(num); // 3
}

addTwo(num);
console.log(num); // 1
```

Whereas object types are passed by reference inside the functions, any modifications will reflect on the original object variable as well.

```js
let obj = { a: 1 };

function addTwo(obj) {
	obj.a = 2;
	console.log(obj); // {a: 2}
}

addTwo(obj);
console.log(obj); // {a: 2}
```

> 🧠 Remember: Objects are passed by memory reference. Primitives are passed by values.

---

## Autoboxing Primitive Types

When we work with JavaScript, we keep hearing that everything in JS is an object. But there are primitives types that we use like `string`, `number`, etc are not actually objects. These do not have any properties or methods on them.

The reason we keep hearing this is because of a feature called **Autoboxing**. Whenever we treat a primitive as an object (putting . next to the variable), JS will wrap the variable into an object and connect to the built-in object prototype that corresponds with that primitive type which gives access to the built-in `.prototype` methods from the browser.

```js
const name = 'Ram';

console.log(typeof name); // string
console.log(str.length); // 3
console.log((14).toString()); // 14
console.log(false.valueOf()); // false
```

---

## Prototypal Inheritance

Prototypes are the mechanism that powers the inheritance in JavaScript. Unlike in other programming languages like C# and Java where inheritance is achieved through classes and extending them, JS has prototypes which is just an object.

![prototype inheritance](https://res.cloudinary.com/da91xzc7s/image/upload/v1650029276/Blog-JS/prototype-inheritance.png)

### Dunder proto

These objects are automatically linked together for us by the JS engine. When we expand the object, we see a property `[[Prototype]]`. This is an object that has a bunch of other properties and methods. It is also called **Dunder proto** and seen as `__proto__` in some browsers.

When we work with an object in JS and as long as we don't mutate, it will be linked through this dunder proto property to the global object prototype.

### Prototype Chain

We can create new objects using a built-in object method `Object.create()` which takes an object as input. This creates a new object which has the dunder proto connected to the input object. Any methods that we try to access will check in the current object's properties and goes down to the dunder proto if it didn't find any.

![prototype inheritance and chaining](https://res.cloudinary.com/da91xzc7s/image/upload/v1650031019/Blog-JS/prototype-inheritance-obj.png)

In the above example, we can see b object is created from a which has its dunder proto connected to the actual reference of an object. If we drill down a, we still see an object's dunder proto is connected to the global object. This is how the prototype chain works. If we want to access `.toString()` method, the lookup goes from b -> a -> Object.

The same goes when we use other object types like Array, Map, or Set. Each of them has its own built-in object connected as dunder proto on initialization.

![prototype inheritance for other object types](https://res.cloudinary.com/da91xzc7s/image/upload/v1650031226/Blog-JS/prototype-inheritance-obj-other.png)

---

## Difference between .prototype and [[Prototype]]

In JS functions are treated as first-class objects. This means we can add properties and methods to functions as we add to normal objects. Though we typically don't see properties added to functions in most of the codebases.

Whenever we create a new function, JS will automatically add a property called `prototype` to the created function. This is just an object which has two properties on it.

- A `constructor` property that points back to the function itself.
- A `__proto__` property that refers to the global object.

![function prototype](https://res.cloudinary.com/da91xzc7s/image/upload/v1650032104/Blog-JS/function-prototype.png)

> Note: `__proto__` is the property that lives on all objects, including functions. `.prototype` only lives on functions.

If we want to access a property inside the function, the lookup doesn't search the `.prototype` property. Instead, the `__proto__` is used for prototype inheritance. Whenever we create objects using the `new` keyword, the `.prototype` function property becomes the dunder proto for the newly created objects.

```js
function foo() {}

foo.prototype.name = 'Ramgopal';
console.log(foo.prototype); // foo {name: 'Ramgopal'}

const person = new foo();
console.log(person.name); // Ramgopal

foo.prototype === person.__proto__; // true
Array.prototype.map === [].map; // true
```
