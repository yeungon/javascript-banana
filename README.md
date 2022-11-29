JavaScript is one of the most popular programming languages in 2022 and likely many more years to come. Learn the worse part of it to become a better developer.

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
