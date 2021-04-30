---
title: '?? operator'
date: '2021-04-24'
spoiler: 'Nullish coalescing operator ??'
---

This operator is a newer addition to JavaScript, introduced in ES2020.

It is denoted with two question marks  **??**.

## Definition

The **nullish coalescing operator** is a logical operator that takes two operands, and will return the right hand operand if the left side operand is **either null or undefined**

## Name exploration

The name can be broken down in two components:

- **nullish**, meaning nothing, null, void, amounting to nothing, having no value.

- **coalesce**, meaning to unite, to join force, to grow together

## Comparable to the logical OR operator **||**

It is similar to the OR operator, but unlike it it does not check for **falsy** values, but only **null** or **undefined**.

It is very useful as you may want to have falsy values, as part of your code, but want to avoid null or undefined ones.  

## Examples

Lets use the ?? operator in different scenarios

1. In this example the result of the console log is **'Pepito'**
as the variable has been declared, but at the moment it is **undefined**.

    ```js
    let undefinedName;
    console.log(undefinedName ?? 'Pepito'); // 'Pepito'
    ```

2. Here **nullName** is defined, but the value is **null**, therefore the result of the console log is 'Pepita'.

    ```js
    const nullName = null;
    console.log(nullName ?? 'Pepita'); // 'Pepita'
    ```

3. The value of **falsyName** is **false**, therefore the result of the console log is **false**.  This is a very good example to demonstrate the difference between the **nullish coalescing** operator and the logical **OR** (||), as the **||** operator will not return a **falsy** value.

    ```js
    const falsyName = false;
    console.log(falsyName ?? 'Pepito') // false

    // with logical OR
    console.log(falsyName || 'Pepito') // 'Pepito'
    ```

4. In this case **numberName** is the number **42**.  As it is not **null**, **undefined** or **falsy**, the console log will be the same using *??** or **||**.

    ```js
    const numberName = 42;
    console.log(numberName ?? 'Pepita'); // 42

    // with logical OR
    console.log(numberName || 'Pepita') // 42
    ```

5. Our variable **emptyName** is an empty string, therefore it is a **falsy** value and the result of the console log using **??** will be the empty string.

    ```js
    const emptyName = '';
    console.log(emptyName ?? 'Pepito'); // ''

    // with logical OE
    console.log(emptyName || 'Pepito'); // 'Pepito'
    ```

## Short-circuiting

Short-circuiting means that the right hand operand is not evaluated if the left hand operand is not **null** or **undefined**

## SyntaxError

As last point, it is important to note that the **nullish coalescing** operator can not be combined with AND and OR operators.  It will throw a SyntaxError

```js
undefined || undefined ?? 'Pepito'; // SyntaxError

null && 42 ?? 'Pepita'; // SyntaxError

false || 'Pepito' ?? 42; // SyntaxError
```

I hope that this explanation helps you better understand and start using this very useful tool :).
