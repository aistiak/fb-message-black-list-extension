var actualCode = `// Code here.
// If you want to use a variable, use $ and curly braces.
// For example, to use a fixed random number:
var someFixedRandomValue = ${ Math.random() };
// NOTE: Do not insert unsafe variables in this way, see below
// at "Dynamic values in the injected code"
console.log(" --- hello from ibjected content script ---")
`;
console.log(" --- hello from  content script ---")

// var script = document.createElement('script');
// script.textContent = actualCode;
// (document.head||document.documentElement).appendChild(script);
// script.remove();
window.name1 = 'arif'
var s = document.createElement('script');
s.src = chrome.runtime.getURL('script-tobe-injected.js');
s.onload = function() {
    // this.remove();
};
(document.head || document.documentElement).appendChild(s);