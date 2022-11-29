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

###### 3. array is a sub-type of object

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

The callback insde the function setTimeout will only be triggered AFTER all synchronous code has been executed, no matter how many mini-second you set here, meaning it does not surely run after 0 second.
</p>
</details>

---

###### 7. There is no "class" at all when evaluated by `typeof`

```javascript
class a { }
console.log(typeof a) // "function"

function b(){}
console.log(typeof b) //"function"
```

<details><summary><b>Demystify</b></summary>
<p>

The long story short: There is no "class" in JavaScript if you use `typeof` operator. But who cares?

</p>
</details>

---

###### 8. Thanos does not understand the code

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

###### 9. true or false, that is the question!

```javascript
1 < 2 < 3; // -> true
3 > 2 > 1; // -> false
```

<details><summary><b>Demystify</b></summary>
<p>

As `1 < 2` returns `true` and so `true < 3` also returns `true`. On the second line, `3 > 2` return `true`, but `true > 1` gives us `false`.


</p>
</details>

---

###### 10. sort() does not always sort!

```javascript

let collections = [9, 13, 3, 20, 49, 10];
console.log(collections.sort()) //[10, 13, 20, 3, 49, 9]

```

<details><summary><b>Demystify</b></summary>
<p>

This is not a bug. The native JavaScript method `sort()` converts the list of elements in the array given into strings. It then compares the UTF-16 values and sorts the list based on these UTF-16 values.You might note that the list sorted according to the first digit, so 13 is less than 9 because 1 < 9.

</p>
</details>

---

###### 11. The magic does not end

```javascript
console.log(true + true === 2); //true
console.log(true - true === 0); //true
```

<details><summary><b>Demystify</b></summary>
<p>

Both return true.

But `console.log(true === 1)//` false because here both type and value are taken into account.

</p>
</details>

---

###### 12. The magic does not end

```javascript
console.log(true + true === 2); //true
console.log(true - true === 0); //true
```

<details><summary><b>Demystify</b></summary>
<p>

You might see that the operator == only compares the value while === takes both value and type into consideration.

If you write "10" == 10, then we get true but "10" === 10 returns false.

```javascript
console.log("10" == 10)//true
console.log("10" === 10)//false
```

</p>
</details>

---

###### 13. The magic does not end with +

```javascript
[1, 2, 3] + [4, 5, 6]
```

<details><summary><b>Demystify</b></summary>
<p>

"1,2,34,5,6". When the plus sign (+) is used between two different features/functions in a single context, it might behave quite strangely like above. We know it (+) holds two functions: a mathematical operation and for concatenating string.

</p>
</details>

---

###### 14. Comparison in JavaScript is odds

```javascript
console.log(null == 0); //false
console.log(null ===0); //false
console.log(null >  0); //false
console.log(null >= 0); //true
```

<details><summary><b>Demystify</b></summary>
<p>

silence is golden

</p>
</details>

---

###### 15. 

```javascript
Math.max() < Math.min() //true

```

<details><summary><b>Demystify</b></summary>
<p>

Math.min(number1, number2) and Math.max(number1, number2) allow us to find the smallest and the largest number in a collection, let say.

But if we do not pass any parameter into the function then by default Math.min(); // -> Infinity and Math.max(); // -> -Infinity.

</p>
</details>

---

###### 16. 

```javascript
Math.max() < Math.min() //true

```

<details><summary><b>Demystify</b></summary>
<p>

Math.min(number1, number2) and Math.max(number1, number2) allow us to find the smallest and the largest number in a collection, let say.

But if we do not pass any parameter into the function then by default Math.min(); // -> Infinity and Math.max(); // -> -Infinity.

</p>
</details>

---

###### 17 

```javascript
0.1 + 0.2; // -> 0.30000000000000004
0.1 + 0.2 === 0.3; // -> false

```

<details><summary><b>Demystify</b></summary>
<p>

This one is very famous and the cause rooted in the floating-point math which you might find in any other programming languages, one way or another.

So you should not blame JavaScript for this one

</p>
</details>

---

###### 18. 

```javascript
console.log(NaN === NaN); //false

```

<details><summary><b>Demystify</b></summary>
<p>

The code returns false. So I have nothing to say, just memorize it and avoid any particular bugs caused by.

</p>
</details>

---

###### 19. 

```javascript
console.log(typeof NaN)//"number"

```

<details><summary><b>Demystify</b></summary>
<p>

NaN means "Not a number" but its typeof is "number". Go crazy!!!

</p>
</details>

---

###### 20. 

```javascript
console.log(typeof []) //object

```

<details><summary><b>Demystify</b></summary>
<p>

It is said that array is a sub-type of object in JS. So the code above returns "object".

FYI:
console.log(typeof {})// "object"

How to fix that? Go with Array.isArray(isObjectorArray)
</p>
</details>

---

###### 21. 

```javascript
null is an object, "but"

```

<details><summary><b>Demystify</b></summary>
<p>

Let write some more code:
console.log(typeof null), // "object".
console.log(typeof undefined) // "undefined".

OMG,
console.log(null instanceof Object); // false

</p>
</details>

---

###### 22. 

```javascript
you can even declare a variable without any functional keyword such as "var", "let", or "const".

```

<details><summary><b>Demystify</b></summary>
<p>
So technically there are four ways to declare a variable:

1) no keyword,
2) var (not recommended),
3) const (highly recommended)
4) let (when you want to change the value)

</p>
</details>

---

###### 23. 

```javascript
variable without any functional word in the beginning is terribly bad and "var" keyword is also unfortunately terrible.

```

<details><summary><b>Demystify</b></summary>
<p>
Given the fact that we can re-declare a variable if it has been initially declared with "var". Say,

```javascript
var x = 10;
var x = 12;
console.log(x) //12
```

It is therefore highly recommended not to use "var" in any case.
</p>
</details>

---

###### 24. 

```javascript
"b" + "a" + + "a" + "a" === "baNaNa"

```

<details><summary><b>Demystify</b></summary>
<p>
The code above returns true. Yes hell! "NaN" in the right "baNaNa" simply means "Not a number".

Note that in JS, the plus sign (+) can be used as an operator (for number) and for concatenating (for string).

</p>
</details>