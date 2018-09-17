
// Creation
var div = document.createElement('div');
// Addition
document.body.appendChild(div);

// Style manipulation
// Positioning
div.style.left = '32px'; div.style.top = '-16px';

// Classes
div.className = 'ui-modal';

// Modification
// ID 
div.id = 'test';
// contents (using HTML)
div.innerHTML = '<span class="msg">Hello world.</span>';
// contents (using text)
div.textContent = 'Hello world.';

// Removal
div.parentNode.removeChild(div);

// Accessing
// by ID
div = document.getElementById('test');
// by tags
array = document.getElementsByTagName('div');
// by class
array = document.getElementsByClassName('ui-modal');
// by CSS selector (single)
div = document.querySelector('div #test .ui-modal');
// by CSS selector (multi)
array = document.querySelectorAll('div');

// Relations (text nodes included)
// children
node = div.childNodes[i];
// sibling
node = div.nextSibling;
// Relations (HTML elements only)
// children
element = div.children[i];
// sibling
element = div.nextElementSibling;
