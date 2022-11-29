In JS we trust - The best way to learn is by building/coding and teaching. I create the challenges to help my friends learn JavaScript and in return it helps me embrace the language in much deeper level. Feel free to clone, fork and pull.

---

###### 1. Concatenation between string and number

```javascript
1 + 2 + "3"
```


<details><summary><b>Demystify</b></summary>
<p>

#### 

33 . First we have 3 as the first + works as a normal mathematical operation and then 3 + "3", the second + plays the role of concatenation.

</p>
</details>

---

###### 2. Concatenation between null and number

```javascript
null + 0
```

<details><summary><b>Demystify</b></summary>
<p>

#### 

It returns 0 because in this operation null is converted to 0.

</p>
</details>

---

###### 3. typeof array

array is a sub-type of object

<details><summary><b>Demystify</b></summary>
<p>

####

Sure, but looping through an object is a bit different from looping through an array and in this regard [{}, {}], as you might guess, is the best way to construct a huge collection in JavaScript.

</p>
</details>

---

###### 4. The rescure of ...rest operator

```javascript
const array = ["hello", "World"];
console.log({...array})
```

<details><summary><b>Demystify</b></summary>
<p>

You can convert an array to object using ...rest operator. The output will be :

```javascript
[object Object] { 0: "hello", 1: "World" }
```

</p>
</details>

---

###### 5. typeof might give you a surprise sometimes

```javascript
const a = new Array();
console.log(typeof a) //"object"

const b = [];
console.log(typeof b) //"object"
```

<details><summary><b>Demystify</b></summary>
<p>


```javascript
const a = new Array();
console.log(typeof a) //"object"

const b = [];
console.log(typeof b) //"object"
```

The first way to initiate an array is not deemed as a best practice.

</p>
</details>

---

###### 6. What's the output?

```javascript
setTimeout(callback, 0)
```

<details><summary><b>Demystify</b></summary>
<p>


callback will only be triggered AFTER all synchronous code has been executed, no matter how many mini-second you set here.
</p>
</details>

---

###### 7. What's the output?

```javascript
class a { }
console.log(typeof a) // "function"

function b(){}
console.log(typeof b) //"function"
```

- A: 5;
- B: 6;
- C: 7;
- D: 8;

<details><summary><b>Demystify</b></summary>
<p>

The long story short: There is no "class" in JavaScript if you use "typeof" operator. But who cares?

</p>
</details>

---

###### 8. What's the output?

```javascript
Math.min(); // -> Infinity
Math.max(); // -> -Infinity
Infinity > -Infinity; // -> true
```

<details><summary><b>Demystify</b></summary>
<p>

Note that Math.max() is not the same thing as Number.MAX_VALUE. And hence, as you might see, the following code returns true:

```javascript
Math.min() > Math.max(); //true
```

</p>
</details>

---
```javascript
let x = {};
let y = {};
let z = x;

console.log(x == y);
console.log(x === y);
console.log(x == z);
console.log(x === z);
```

- A: true true true true;
- B: false false false false;
- C: true true false false;
- D: false false true true;

<details><summary><b>Demystify</b></summary>
<p>

#### Answer: D

Technically, `x` and `y` have the same value. Both are empty objects. However, we do not use the value to compare objects.

`z` is `x` are two objects referring to the same memory position. In JavaScript, array and object are passed by `reference`. `x` and `z` therefore return true when being compared.

</p>
</details>

---

###### 11. What's the output?

```javascript
console.log("hello");

setTimeout(() => console.log("world"), 0);

console.log("hi");
```

- A: "hello" -> "world" -> "hi"
- B: "hello" -> "hi" -> "world"
- C: "hi" -> "world" -> "hello"
- D: "hi" -> "hello" -> "world"

<details><summary><b>Demystify</b></summary>
<p>

#### Answer: B

Given that the function setTimeout() will be kept in the `task queue` before jumping back to `stack,` "hello" and "hi" will be printed first, then A is incorrect. That is also the case of the answers C and D.

No matter how many seconds you set to the `setTimeout()` function, it will run after synchronous code. So we will get "hello" first as it is put into the call stack first. Though the `setTimeout()` is then being put into the call stack, it will subsequently offload to web API (or Node API) and then being called when other synchronous codes are cleared. It means we then get "hi" and finally "world".

So B is the correct answer.

Credit: @kaitoubg (voz) for your suggestion regarding the ` timeout throttled` by which I have decided to alter the question slightly. It will ensure that readers will not get confused as the previous code might bring out different results when tested on other browsers or environments. The main point of the question is about the discrepancy between the synchronous code and asynchronous code when using `setTimeout.`.

</p>
</details>

---

###### 12. What's the output?

```javascript
String.prototype.lengthy = () => {
  console.log("hello");
};

let x = { name: "Vuong" };

delete x;

x.name.lengthy();
```

- A: "Vuong";
- B: "hello";
- C: "undefined"
- D: "ReferenceError"

<details><summary><b>Demystify</b></summary>
<p>

#### Answer: B

`String.prototype.someThing = function () {}` is the common way to define a new built-in method for `String`. We can do the same thing with `Array`, `Object` or `FunctionName` where FunctionName is the function designed by ourself.

That is not challenging to realise that `"string".lengthy()` always returns `hello`. Yet, the tricky part lies in the `delete object` where we might think that this expression will entirely delete the object. That is not the case as `delete` is used to delete the property of the object only. It does not delete the object. Then we get `hello` rather than `ReferenceError`.

Note that if we declare object without `let, const` or `var`, we then have a global object. `delete objectName` then return `true`. Otherwise, it always returns `false`.

</p>
</details>

---

###### 13. What's the output?

```javascript
let x = {};

x.__proto__.hi = 10;

Object.prototype.hi = ++x.hi;

console.log(x.hi + Object.keys(x).length);
```

- A: 10
- B: 11
- C: 12
- D: NaN

<details><summary><b>Demystify</b></summary>
<p>

#### Answer: C

First we have an empty object `x`, then we add another property `hi` for x with `x.__proto__.hi`. Note this is equivalent to `Object.prototype.hi = 10` and we are adding to the `father` object `Object` the property `hi`. It means every single object will inherit this propety. The property `hi` becomes a shared one. Say now we declare a new object such as `let y = {}`, `y` now has a propery `hi` inherited from the `father` `Object`. Put it simply `x.__proto__ === Object.prototype` returns `true`.

Then we overwrite the property `hi` with a new value 11. Last we have 11 + 1 = 12. `x` has one property and `x.hi` returns 11.

Updated (July 27th 2021). If you write `Object.prototype.hi = 11;` instead of `Object.prototype.hi = ++x.hi;` as written in the code above, then `Object.keys(x)` will return an empty array as `Object.keys(object)` only returns the property of the object itself, not the inherited ones. It means the final result will be 11 rather than 12. For some reason, the code ``Object.prototype.hi = ++x.hi;` will create a property for the object `x` itself and then `Object.keys(x)` gives us the array `["hi"]`.

Yet, if you run `console.log(x.hasOwnProperty("hi"))` it still returns `false`. By the way, when you deliberately add a property for x such as `x.test = "testing"`, then `console.log(x.hasOwnProperty("test"))` returns `true`.

</p>
</details>

---

###### 14. What's the output?

```javascript
const array = (a) => {
  let length = a.length;
  delete a[length - 1];
  return a.length;
};

console.log(array([1, 2, 3, 4]));

const object = (obj) => {
  let key = Object.keys(obj);
  let length = key.length;
  delete obj[key[length - 1]];

  return Object.keys(obj).length;
};

console.log(object({ 1: 2, 2: 3, 3: 4, 4: 5 }));

const setPropNull = (obj) => {
  let key = Object.keys(obj);
  let length = key.length;
  obj[key[length - 1]] = null;

  return Object.keys(obj).length;
};

console.log(setPropNull({ 1: 2, 2: 3, 3: 4, 4: 5 }));
```

- A: 333
- B: 444
- C: 434
- D: 343

<details><summary><b>Demystify</b></summary>
<p>

#### Answer: C

This question examines how the `delete` operator works in JavaScript. In short, it does nothing when we write `delete someObject` or `delete someArray`. It nonetheless completely deletes and removes a property of an object when writing something like `delete someObject.someProperty`. In the case of array, when we write `delete someArray[keyNumber]`, it only removes the `value` of the `index`, keep the `index` intact and the new `value` is now set to `undefined`. For that reason, in the code first snippet, we get (the length) 4 elements as in the original array but only 3 properties left in the object passed when the function object() is called, as in the second snippet.

The third snippet gives us 4 as declaring an object's propery to either `null` or `undefined` does not completely remove the property. The key is intact. So the length of the object is immutable.

For those who are familiar with PHP, we have `unset($someArray[index])` that remove the array element, both key and value. When `print_r` the array, we might not see the key and value that have been unset. However, when we push (using `array_push($someArray, $someValue)`) a new element in that array, we might see that the previous key is still kept, but no value and not being displayed. That is something you should be aware of. Have a look at https://3v4l.org/7C3Nf

</p>
</details>

---

###### 15. What's the output?

```javascript
var a = [1, 2, 3];
var b = [1, 2, 3];

var c = [1, 2, 3];
var d = c;

var e = [1, 2, 3];
var f = e.slice();

console.log(a === b);
console.log(c === d);
console.log(e === f);
```

- A: true true true
- B: false false true
- C: true true false
- D: false true false

<details><summary><b>Demystify</b></summary>
<p>

#### Answer: D

`a` and `b` returns false because they point to different memory location even though the values are the same. If you are coming from PHP world, then it will return true obviously when we compare either value or value + type. Check it out: https://3v4l.org/IjaOs.

In JavaScript, value is passed by reference in case of `array` and `object`. Hence in the second case, `d` is the copy of `c` but they both point to the same memory position. Everything changes in `c` will result in the change in `d`. In PHP, we might have `$a = &$b;`, working in the similar way.

The third one gives us a hint to copy an array in JavaScript using `slice()` method. Now we have `f`, which is the copy of `e` but they point to different memory locations, thus they have different "life". We get `false` accordingly when they are being compared.

</p>
</details>

---

###### 16. What's the output?

```javascript
var languages = {
  name: ["elixir", "golang", "js", "php", { name: "feature" }],
  feature: "awesome",
};

let flag = languages.hasOwnProperty(Object.values(languages)[0][4].name);

(() => {
  if (flag !== false) {
    console.log(
      Object.getOwnPropertyNames(languages)[0].length <<
        Object.keys(languages)[0].length
    );
  } else {
    console.log(
      Object.getOwnPropertyNames(languages)[1].length <<
        Object.keys(languages)[1].length
    );
  }
})();
```

- A: 8
- B: NaN
- C: 64
- D: 12

<details><summary><b>Demystify</b></summary>
<p>

#### Answer: 64

The code snippet is quite tricky as it has a couple of different built-in methods handling object in `JavaScript`. For example, both `Object.keys` and `Object.getOwnPropertyNames` are used even thought they are quite similar except that the latter can return non-enumerable properties. You might want to have a look at this thoroughly written reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames

`Object.values` and `Object.keys` return the property value and property name of the object, respectively. That is nothing new. `object.hasOwnProperty('propertyName')` returns a `boolean` confirming whether a property exists or not.

We have `flag` true because `Object.values(languages)[0][4].name` returns `feature`, which is also the name of the property.

Then we have 4 << 4 in the `if-else` flow that returns the bitwise value, equivalent to `4*2^4` ~ `4*16` ~ 64.

</p>
</details>

---

###### 17. What's the output?

```javascript
var player = {
  name: "Ronaldo",
  age: 34,
  getAge: function () {
    return ++this.age - this.name.length;
  },
};

function score(greeting, year) {
  console.log(
    greeting + " " + this.name + `! You were born in  ${year - this.getAge()}`
  );
}

window.window.window.score.call(window.window.window.player, "Kiora", 2019);

score.apply(player, ["Kiora", 2009]);

const helloRonaldo = window.score.bind(window.player, "Kiora", 2029);

helloRonaldo();
```

- A: "Kiora Ronaldo! You were born in 1985", "Kiora Ronaldo! You were born in 1985", "Kiora Ronaldo! You were born in 1985"
- B: "Kiora Ronaldo! You were born in 1991", "Kiora Ronaldo! You were born in 1991", "Kiora Ronaldo! You were born in 1999"
- C: "Kiora Ronaldo! You were born in 1991", NaN, "Kiora Ronaldo! You were born in 1980"
- D: "Kiora Ronaldo! You were born in 1991", "Kiora Ronaldo! You were born in 1980", "Kiora Ronaldo! You were born in 1999"

<details><summary><b>Demystify</b></summary>
<p>

#### Answer: D

We can use `call()`, `apply()` and `bind()` to apply a function to any object. At first sight, it seems that three functions do the same thing. Yet there are some situations where they are differently employed to handle respective contexts or solve particular problems.

Of the three, only `bind()` can be executed after binding. We can create a variable to store the result as `helloRonaldo()` in the code snippet above. `apply()` and `call()` will bind and execute the function at the same time. `apply()` hints us `a` ~ array where we need to pass an array as parameter. `call()` hints us `c` or comma where we pass parameters with a comma. You might want to have a look at this post https://stackoverflow.com/questions/15455009/javascript-call-apply-vs-bind

Note that `window.window.window.score` or `window.score` or simply `score` do the same thing. It points to the `score()` function in the global scope.

The correct anwser is D. The `score()` and `getAge()` functions are nothing special. The only tricky part is that `this.age` is incremented each time you call the funtion `getAge()`;

</p>
</details>

---

###### 18. What's the output?

```javascript
var ronaldo = { age: 34 };

var messi = { age: 32 };

function score(year, tr, t) {
  if (typeof tr === "function" && typeof t === "function") {
    console.log(`You score ${tr(year, t(this.age))} times`);
  }
}

const transform = (x, y) => x - y;

const title = (x) => ++x + x++;

const helloRonaldo = score.bind(ronaldo, 2029, transform, title);

helloRonaldo();

const helloMessi = score.bind(messi, 2029, transform, title);

helloMessi();
```

- A: "You score 1989 times" and "You score 1963 times"
- B: "You score 1959 times" and "You score 1989 times"
- C: "You score 1989 times" and "You score 1953 times"
- D: "You score 1959 times" and "You score 1963 times"

<details><summary><b>Demystify</b></summary>
<p>

#### Answer: D

`bind()` allows us to bind a function declared with any object. Here we bind `score()` and both `ronaldo` and `messi`.

In `score()` we pass three parameters `year`, `tr` and `t` in which both `tr` and `t` are function. They handle simple things as defined afterwards.

When we bind `score()` with `ronaldo` and `messi`, we pass three parameters as declared in the `score()` function wherein `transform` and `title` are functions.

</p>
</details>

---

###### 19. What's the output?

```javascript
var person = {};

Object.defineProperties(person, {
  name: {
    value: "Vuong",
    enumerable: true,
  },
  job: {
    value: "developer",
    enumerable: true,
  },
  studying: {
    value: "PhD",
    enumerable: true,
  },
  money: {
    value: "NZD",
    enumerable: false,
  },
});

class Evaluate {
  static checkFlag(obj) {
    return Object.getOwnPropertyNames(obj) > Object.keys(obj)
      ? Object.getOwnPropertyNames(obj)
      : Object.keys(obj);
  }
}

const flag = Evaluate.checkFlag(person);

console.log(flag.length);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Demystify</b></summary>
<p>

#### Answer: D

`Object.keys(obj)` is almost identical to `Object.getOwnPropertyNames(obj)` except the fact that the latter returns any type of object's property regardless of `enumerable`. By default `enumerable` is true when creating object. Using `Object.defineProperties` or `Object.defineProperty` we can manually set this option to `false`.

As such the object `person` will get 3 using`Object.keys(obj)`but 4 with `Object.getOwnPropertyNames(obj)`. `In short Object.keys(obj)` only returns the property setting the enumerable as `true`.

</p>
</details>

---

###### 20. What's the output?

```javascript
const id = 10;

const getID = (...id) => {
  id(id);

  function id(id) {
    console.log(typeof id);
  }
};

getID(id);
```

- A: ReferenceError
- B: 10
- C: undefined
- D: 'function'

<details><summary><b>Demystify</b></summary>
<p>

#### Answer: D

When declaring a function inside another function, we are working with Closure in JavaScript. Note that if a function is declared as normal (rather than function expression), it is hoisted. We might see several `id` in the code snippet above but in fact, some of them does nothing.

The result of the code depending on the operator `typeof id`, which is `function`. So `id` in this operation is the `id()` function.

</p>
</details>

---

###### 21. What's the output?

```javascript
var book1 = {
  name: "Name of the rose",
  getName: function () {
    console.log(this.name);
  },
};

var book2 = {
  name: { value: "Harry Potter" },
};

var bookCollection = Object.create(book1, book2);

bookCollection.getName();
```

- A: 'Harry Potter'
- B: 'Name of the rose'
- C: ReferenceError
- D: Object object

<details><summary><b>Demystify</b></summary>
<p>

#### Answer: A

`Object.create` allows us to create an object which is based on another object. If we do not pass the second parameter - `book2` in this case - the `name` property of the object `bookCollection` will be `Name of the rose` inherited from the `book1`. It means we can provide additional properties when declaring object with `Object.create`.

`bookCollection` has its own property `name` and another one inherited from `book1`. In this case its own property `name` will show up as it has higher priority. That is why we get 'Harry Potter'.

</p>
</details>

---