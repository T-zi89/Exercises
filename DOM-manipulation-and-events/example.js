// DOM Manipulation and Events

console.log("hi");
const container = document.querySelector("#container");

const content = document.createElement("p");
content.classList.add("content");
content.textContent = "Hey I'm red!";
container.appendChild(content);

const h3Content = document.createElement("h3")
h3Content.classList.add("h3Content");
h3Content.textContent = "I'm a blue h3!";
container.appendChild(h3Content);

const newDiv = document.createElement("div");
newDiv.classList.add("newDiv");
newDiv.textContent = "I'm a div!";

const h1Child = document.createElement("h1");
h1Child.classList.add("h1Child");
h1Child.textContent = ("I'm in a div");
newDiv.appendChild(h1Child);

const pChild = document.createElement("p");
pChild.classList.add("pChild");
pChild.textContent = ("ME TOO!");
newDiv.appendChild(pChild);
// append the Div to its parent last
container.appendChild(newDiv);

content.style.color = "red";
h3Content.style.color = "blue";
newDiv.style.cssText = "background: pink; border: solid black;";


