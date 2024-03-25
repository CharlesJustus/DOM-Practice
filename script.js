// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
// content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const body = document.body;

const div = document.createElement('div');

body.append(div);

 div.innerText = "Hi I'm red";

div.style.color = 'red';