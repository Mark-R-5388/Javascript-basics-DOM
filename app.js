const result = document.querySelector('#result');
const first = document.querySelector('.red');
//create empty element

const bodyDiv = document.createElement('div');
// creat text node
const text = document.createTextNode('a simple body div');
//append text node to body div
bodyDiv.appendChild(text);
//append body div to the body
// document.body.appendChild(bodyDiv);
document.body.insertBefore(bodyDiv, result);

const heading = document.createElement('h2');
const headingText = document.createTextNode('dynamic heading');
heading.appendChild(headingText);
heading.classList.add('blue');
result.insertBefore(heading, first);

// result.appendChild(heading);

const smallHeading = document.createElement('h6');
const smallText = document.createTextNode(`i'm small heading text`);
smallHeading.classList.add('red');
smallHeading.appendChild(smallText);
document.body.replaceChild(smallHeading, bodyDiv);

console.log(result.children);
