
let color = 'red';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

// function logURL(requestDetails) {
//   // intercept web socket for facebook 
//   if(requestDetails.url.includes('wss://edge-chat.facebook.com')){
//     console.log(` --- intercepting facebook request --- `)
//     console.log(requestDetails)
//   }
// }

// chrome.webRequest.onResponseStarted.addListener(
//   logURL,
//   {urls: ["<all_urls>"]}
// );

const networkFilters = {
  urls: [
      "wss://edge-chat.facebook.com/*"
  ]
};

chrome.webRequest.onBeforeRequest.addListener((details) => {
  const { tabId, requestId } = details;
  console.log(details)
  // do stuff here
}, networkFilters);