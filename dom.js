// ! DOM SELECTORS ARE OF 5 TYPES, USED TO TARGET HTML ELEMENTS IN JAVASCRIPT

//! 1) document.getElementById() : Returns the first element within node's descendants whose ID is elementId else returns null.

// let h2Tag = document.getElementById("head2");
// console.log(h2Tag);

// console.log(h2Tag.textContent);
// console.log(h2Tag.innerHTML);

// //! 2) document.getElementsByClassName()
// let h3Tags = document.getElementsByClassName("head3");
// console.log(h3Tags); // HTMLCollection(3) [h3.head3, h3.head3, h3.head3]

// console.log(h3Tags[1].textContent);

// if we want to check array is pure or not -> Array.isArray() returns boolean
// console.log(Array.isArray(h3Tags)); // false

// convert impure array to pure array -> Array.from() returns pure array
// let pureArray = Array.from(h3Tags);
// console.log(pureArray);

// //! 3) document.getElementsByTagName()
// let tagsCollection = document.getElementsByTagName("h3");
// console.log(tagsCollection); // HTMLCollection(3) [h3.head3, h3.head3, h3.head3]

// //! 4) document.querySelector(" id , class , tagname ")

// let ele1 = document.querySelector("#head2");
// console.log(ele1);

// let ele2 = document.querySelector(".head3");
// console.log(ele2);

// let ele3 = document.querySelector("h3");
 // console.log(ele3);

 // priority : id > class > tagname
// let ele4 = document.querySelector("h3 ,#head2, .head3");
// console.log(ele4);

//! 5) document.querySelectorAll()
let ele5 = document.querySelectorAll(".head3");
console.log(ele5);

// WHENEVER WE USE getElementsByClassName or tagName we get HTMLCollection
// WHENEVER WE USE querySelectorAll we get NodeList

//! SIMIRAILTY
// BOTH ARE IMPURE ARRAY

//! DIFFERENCE BETWEEN HTMLCollection and NodeList

// CANNOT USE ANY OF THE ARRAY METHODS IN HTMLCollection
// CAN USE forEach() method in NodeList

// HTML COLLECTION IS CALLED LIVE COLLECTION
// NODE LIST IS CALLED STATIC COLLECTION

//! EXAMPLE OF STATIC AND LIVE COLLECTION
const collection = document.getElementsByTagName("div");
const list = document.querySelectorAll("div");

console.log("HTMLCollection --->", collection.length);
console.log("NodeList -->", list.length);

// create HTML Element dynamically
// for(let i)

// const divTag = document.createElement("div");
// divTag.style.textContent = "div 4";
// console.log(divTag); // <div> div4 </div>
// document.body.appendChild(divTag);

// console.log("HTMLCollection -->", collection.length); // 4 (LIVE)
// console.log("NodeList -->", list.length); // 3 (STATIC)

//! DOM MANIPULATION

const tableTag = document.createElement("table");

const trTag1 = document.createElement("tr");
const trTag2 = document.createElement("tr");
const trTag3 = document.createElement("tr");

const thTag1 = document.createElement("th");
const thTag2 = document.createElement("th");
const thTag3 = document.createElement("th");

const tdTag1 = document.createElement("td");
const tdTag2 = document.createElement("td");
const tdTag3 = document.createElement("td");
const tdTag4 = document.createElement("td");
const tdTag5 = document.createElement("td");
const tdTag6 = document.createElement("td");


