const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement('p');
para.classList.add('para');
para.textContent = "Hey I'm red!";
para.style.color = "red";

container.appendChild(para);

const header = document.createElement("h3");
header.classList.add("h3");
header.textContent = "I'm a blue h3!";
header.style.color = "blue";

container.appendChild(header);


