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

const content2 = document.createElement("div");
content2.classList.add("content2");
content2.style.cssText = "background-color: pink; border-color: black; border-style:solid; padding: 5px;";

const header2 = document.createElement("h1");
header2.classList.add("hsmall");
header2.textContent = "I'm in a div";

content2.appendChild(header2);

const para2 = document.createElement("p");
para2.classList.add("para2");
para2.textContent = "Me too!";

content2.appendChild(para2);

container.appendChild(content2);
