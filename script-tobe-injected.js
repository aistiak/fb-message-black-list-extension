console.log(" --- hello from injected content script ---") ;
  
window.name2 = 'sami' ;
// document.body.style.background = 'green'
// console.log(WebSocket);
// window.WebSocket = null ;
// WebSocket.prototype.onmessage = null 
// window.WebSocket.prototype.addEventListener = null 
// window.WebSocket.prototype.addEventListener = function (event,cb) {
//     console.log(` -- from add-event-listener --`)
//     console.log(event)
//     console.log(cb)
//     cb && cb()
// }

// (function(){
// //    'use strict';
//     console.log(` --- doing my thing ---`)
//     // var WebSocket_ = window.WebSocket;   
//     // WebSocket_.prototype = window.WebSocket.prototype 
//     // var temp = WebSocket_.prototype.constructor

//     // WebSocket_.prototype.constructor = function(){
//     //     console.log(` --- calling constructor log ---`)
//     //     temp()
//     // }
//     // window.WebSocket = function WebSocket () {
//     //     return new WebSocket_(...arguments)
//     // }

//     var temp = WebSocket.prototype.constructor
//     WebSocket.prototype.constructor = function(){
//         console.log(` --- calling constructor log ---`)
//         temp(...arguments)
//     }

    
// })() ;




// (function() {
//     console.log(` --- working --- `)
//     var Wrapped = window.WebSocket;
//     var map = new WeakMap();


    

//     /**
//      * Dummy function
//      */
//     var emptyFunction = function () {};

//     /**
//      * Gets a value of the specified property from the wrapped websocket if it is already created.
//      *
//      * @param wrapper       Wrapper instance
//      * @param prop          Property name
//      * @param defaultValue  Default value to be returned if real WS does not yet exist
//      * @returns {*}
//      */
//     var getWrappedProperty = function (wrapper, prop, defaultValue) {
//         var wrapped = map.get(wrapper);
//         if (!wrapped) {
//             return defaultValue;
//         }

//         if (wrapped instanceof Wrapped) {
//             return wrapped[prop];
//         }

//         return wrapped.properties.hasOwnProperty(prop) ?
//             wrapped.properties[prop] :
//             defaultValue;
//     };

//     /**
//      * Sets a value of the specified property.
//      *
//      * @param wrapper   Wrapper instance
//      * @param prop      Property name
//      * @param value     Value to set
//      */
//     var setWrappedProperty = function (wrapper, prop, value) {
//         if (value instanceof Function) {
//             value = value.bind(wrapper);
//         }

//         var wrapped = map.get(wrapper);
//         if (!wrapped) {
//             return;
//         }

//         if (wrapped instanceof Wrapped) {
//             wrapped[prop] = value;
//         } else {
//             wrapped.properties[prop] = value;
//         }
//     };

//     /**
//      * Fake websocket constructor.
//      * https://developer.mozilla.org/en-US/docs/Web/API/WebSocket
//      * 
//      * Original websocket opens a connection to a specified url. This wrapper works in a 
//      * different way, it first checks if this WS connection should be blocked or not.
//      *
//      * @param url       The URL to which to connect
//      * @param protocols Either a single protocol string or an array of protocol strings
//      * @constructor
//      */
//     var WebSocket = function (url, protocols) {
//         'native';
//         if (window.location.protocol === 'https:' &&
//                 url.lastIndexOf('ws:', 0) === 0) {
//             // Just in case, plain text WS cannot be used on HTTPS webpages.
//             // So we just trigger an exception.                     
//             var ws = new Wrapped(url, protocols);
//             if (ws) {
//                 ws.close();
//             }
//         }

//         Object.defineProperties(this, {
//             'binaryType': {
//                 get: function () {
//                     return getWrappedProperty(this, 'binaryType', 'blob');
//                 },
//                 set: function (value) {
//                     setWrappedProperty(this, 'binaryType', value);
//                 }
//             },
//             'bufferedAmount': {
//                 get: function () {
//                     return getWrappedProperty(this, 'bufferedAmount', 0);
//                 },
//                 set: emptyFunction
//             },
//             'extensions': {
//                 get: function () {
//                     return getWrappedProperty(this, 'extensions', '');
//                 },
//                 set: emptyFunction
//             },
//             'onclose': {
//                 get: function () {
//                     return getWrappedProperty(this, 'onclose', null);
//                 },
//                 set: function (value) {
//                     setWrappedProperty(this, 'onclose', value);
//                 }
//             },
//             'onerror': {
//                 get: function () {
//                     return getWrappedProperty(this, 'onerror', null);
//                 },
//                 set: function (value) {
//                     setWrappedProperty(this, 'onerror', value);
//                 }
//             },
//             'onmessage': {
//                 get: function () {
//                     return getWrappedProperty(this, 'onmessage', null);
//                 },
//                 set: function (value) {
//                     setWrappedProperty(this, 'onmessage', value);
//                 }
//             },
//             'onopen': {
//                 get: function () {
//                     return getWrappedProperty(this, 'onopen', null);
//                 },
//                 set: function (value) {
//                     setWrappedProperty(this, 'onopen', value);
//                 }
//             },
//             'protocol': {
//                 get: function () {
//                     return getWrappedProperty(this, 'protocol', '');
//                 },
//                 set: emptyFunction
//             },
//             'readyState': {
//                 get: function () {
//                     return getWrappedProperty(this, 'readyState', 0);
//                 },
//                 set: emptyFunction
//             },
//             'url': {
//                 get: function () {
//                     return getWrappedProperty(this, 'url', '');
//                 },
//                 set: emptyFunction
//             }
//         });

//         /**
//          * Store this wrapper into a map along with a properties bag object.
//          * Until we figure out what to do with this WS, we will 
//          * save all properties and listeners into that bag.
//          */
//         map.set(this, {
//             args: {
//                 url: url, 
//                 protocols: protocols
//             },
//             listeners: [],
//             properties: {}
//         });
//     };

//     // Safari doesn't have EventTarget
//     var EventTarget = window.EventTarget || Element;
//     WebSocket.prototype = Object.create(EventTarget.prototype, {
//         CONNECTING: {value: 0},
//         OPEN: {value: 1},
//         CLOSING: {value: 2},
//         CLOSED: {value: 3},
//         addEventListener: {
//             enumerable: true,
//             value: function (ev, cb, fl) {
//                 if (cb instanceof Function === false) {
//                     return;
//                 }
//                 var wrapped = map.get(this);
//                 if (!wrapped) {
//                     return;
//                 }
//                 var cbb = cb.bind(this);
//                 if (wrapped instanceof Wrapped) {
//                     wrapped.addEventListener(ev, cbb, fl);
//                 } else {
//                     wrapped.listeners.push({ev: ev, cb: cbb, fl: fl});
//                 }
//             },
//             writable: true
//         },
//         close: {
//             enumerable: true,
//             value: function (code, reason) {
//                 'native';
//                 var wrapped = map.get(this);
//                 if (wrapped instanceof Wrapped) {
//                     wrapped.close(code, reason);
//                 }
//             },
//             writable: true
//         },
//         removeEventListener: {
//             enumerable: true,
//             value: function (ev, cb, fl) {
//                 if (cb instanceof Function === false) {
//                     return;
//                 }
//                 var wrapped = map.get(this);
//                 if (!wrapped) {
//                     return;
//                 }
//                 var cbb = cb.bind(this);
//                 if (wrapped instanceof Wrapped) {
//                     wrapped.removeEventListener(ev, cbb, fl);
//                 } else {
//                     // wrapped.listeners.push({ev: ev, cb: cbb, fl: fl});
//                 }
//             },
//             writable: true
//         },

//         dispatchEvent: {
//             enumerable: true,
//             value: function (ev) {
//                 // if (cb instanceof Function === false) {
//                 //     return;
//                 // }
//                 var wrapped = map.get(this);
//                 if (!wrapped) {
//                     return;
//                 }
//                 // var cbb = cb.bind(this);
//                 if (wrapped instanceof Wrapped) {
//                     wrapped.dispatchEvent(ev);
//                 } else {
//                     // wrapped.listeners.push({ev: ev, cb: cbb, fl: fl});
//                 }
//             },
//             writable: true
//         },

//         send: {
//             enumerable: true,
//             value: function (data) {
//                 'native';
//                 var wrapped = map.get(this);
//                 if (wrapped instanceof Wrapped) {
//                     wrapped.send(data);
//                 }
//             },
//             writable: true
//         }
//     });

//     WebSocket.CONNECTING = 0;
//     WebSocket.OPEN = 1;
//     WebSocket.CLOSING = 2;
//     WebSocket.CLOSED = 3;
//     window.WebSocket = WebSocket;
// })(); // Use the appropriate channel here
    



console.log(" --- script injected  ---") ;

// setInterval(()=>{
//     console.log(`--- test var --- `)
//     window.test = 'ok'
// },2000)
