//! addEventList 

const section = document.querySelectorAll("section");
const article = document.querySelectorAll("article");
const divs = document.querySelectorAll("div");

section.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Section");
    section.style.backgroundColor = "orange";
},0);

article.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Article");
    article.style.backgroundColor = "yellow";
},0);

divs.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Div");
    divs.style.backgroundColor = "red";
},0);

divs.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Hello Div");
    divs.style.backgroundColor = "red";
},0);
