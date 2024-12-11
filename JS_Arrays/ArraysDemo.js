var fruits=["Banana","Orange","Apple","Mango"];
console.log("Length of Fruits Array : "+fruits.length)
fruits.push("Lemon")
console.log(fruits)
console.log(fruits.toString())
// for(i=0;i<fruits.length;i++)
//     console.log(fruits[i]);
var popedElement=fruits.pop();
console.log(popedElement);
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift("Watermelon");
console.log(fruits)

fruits.splice(2,0,"Lemon");
console.log(fruits)