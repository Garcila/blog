---
title: '?. operator'
date: '2021-04-29'
spoiler: 'Optional chaining operator ?.'
---

Operator added to JavaScript in ES2020.

It is denoted with a question mark and a dot **?.**

## Definition

The **optional chaining operator** enables reading the value of properties located deep in a chain ⛓ of connected objects bypassing additional checks to make sure each reference in the chain is valid.

## Exploration of the definition

When we try to access the **value** of an object (object literal, array, function), and the value is **null** or **undefined**, we'll get an error, instead of just null or undefined.  To avoid getting the error we need to check at each level of the object if the property we are trying to access is not null or undefined.  

The optional chaining operator simplifies this process, by doing the check for us and returning either the value, if it exists or null or undefined if it does not.

## Examples

Lets use the **?.** operator in different scenarios, using the **human** object below.

```js
const human = {
    name: 'Pepita',
    friend: {
        name: 'Pepito',
        bake: function () {
        return 'I am baking cookies';
        },
    },
    jump: function () {
        return 'jumping';
    },
};
```

1. When trying to access the property **name** of **neighbour**, we get an error, as **neighbour** does not exist within our **human** object.

    ```js
    console.log(human.neighbour.name); // Cannot read property 
                                       // 'name' of undefined
    ```

    Using the **optional chaining** operator, we get **undefined**

    ```js
    console.log(human.neighbour?.name) // undefined
    ```

2. Here we'll try to access the method **dive** from our **friend** object, within the **human** parent object.  Since **friend** does not have a method **dive**, we get an error.

    ```js
    console.log(human.friend.dive()); // human.friend.dive 
                                      // is not a function
    ```

    Using the **optional chaining** operator, we get **undefined**.  

    🤔 Note the syntax, as we include the operator between the name and the parenthesis.

    ```js
    console.log(human.friend.dive?.()); // undefined
    ```

## Syntax in different cases

1. Accessing properties of an object

    ```js
    object?.property; // returns the property if the object 
                      // is not null or undefined, otherwise
                      // returns undefined
    ```

    Or

    ```js
    object?.['property'];
    ```

2. Calling a method of an object

    ```js
    object.method?.(); // returns undefined if the object 
                       // does not have that method
    ```

3. Accessing an item from an array

    ```js
    array?.[index]; // returns the item at the index or undefined 
                    // if it is null or undefined
    ```

## Power combo when implemented with **nullish coalescing**

It proves to be very useful when combined with the **nulish coalescing** operator, as we can check first if the value is **undefined** or **null** and if it is, we provide a default value.

1. Basic example with a variable **human**, that is undefined

    ```js
    const human = undefined;

    console.log(human ?? 'Pepito'); // As human is undefined, 
                                   // it defaults to 'Pepito'
    ```

2. Using our **human** object from above

    ```js
    console.log(human?.pet ?? 'Shark') // Logs 'Shark' as the 
                                       // human object does not 
                                       // have a pet property
    ```

## Short-circuiting

The operator short circuits (stops), the evaluation if the left part of the given expression is null or undefined, stopping any side effects.

```js
let whoKnows = null;
let counter = 100;
let counterChange = whoKnows?.[counter++];
console.log(counter); // counter remains 100, as whoKnows is null
```

## SyntaxError

As last point, it is important to note that the **optional chaining** operator must not be on the left side of an assigment.  It belongs only on the right side.

```js
human?.sport = 'cycling'; // SyntaxError: Invalid left-hand 
                          // side in assignment
```

I hope that this explanation helps you better understand and start using this very useful tool :).
