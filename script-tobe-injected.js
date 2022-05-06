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
//     'use strict';
//     var WebSocket_ = window.WebSocket;
//     // Create dummy worker for the following purposes:
//     // 1. Don't override the global Worker object if the fallback isn't
//     //    going to work (future API changes?)
//     // 2. Use it to trigger early validation of postMessage calls
//     // Note: Blob constructor is supported since Chrome 20, but since
//     // some of the used Chrome APIs are only supported as of Chrome 20,
//     //  I don't bother adding a BlobBuilder fallback.
//     // var dummyWorker = new WebSocket_(
//     //     URL.createObjectURL(new Blob([], {type: 'text/javascript'})));
//     window.WebSocket = function WebSocket(scriptURL,protocols) {
//       if (arguments.length === 0) {
//         throw new TypeError('Not enough arguments');
//       }
//       try {
//         // return new Worker_(scriptURL);
//         return new CustomWebSocket(scriptURL,protocols)
//       } catch (e) {
//         console.log(e)
//         // if (e.code === 18/*DOMException.SECURITY_ERR*/) {
//         //   return new WorkerXHR(scriptURL);
//         // } else {
//         //   throw e;
//         // }
//       }
//     };
//     // Bind events and replay queued messages
//     // function bindWorker(worker, workerURL) {
//     //   if (worker._terminated) {
//     //     return;
//     //   }
//     //   worker.Worker = new Worker_(workerURL);
//     //   worker.Worker.onerror = worker._onerror;
//     //   worker.Worker.onmessage = worker._onmessage;
//     //   var o;
//     //   while ( (o = worker._replayQueue.shift()) ) {
//     //     worker.Worker[o.method].apply(worker.Worker, o.arguments);
//     //   }
//     //   while ( (o = worker._messageQueue.shift()) ) {
//     //     worker.Worker.postMessage.apply(worker.Worker, o);
//     //   }
//     // }
//     function bindWebSocket(worker, workerURL,protocols) {
//     //   if (worker._terminated) {
//     //     return;
//     //   }
//       worker.WebSocket = new WebSocket_(workerURL,protocols);
//       worker.WebSocket.onerror = worker._onerror;
//       worker.WebSocket.onmessage = worker._onmessage;
//     //   var o;
//     //   while ( (o = worker._replayQueue.shift()) ) {
//     //     worker.Worker[o.method].apply(worker.Worker, o.arguments);
//     //   }
//     //   while ( (o = worker._messageQueue.shift()) ) {
//     //     worker.Worker.postMessage.apply(worker.Worker, o);
//     //   }
//     }

//     function CustomWebSocket(scriptURL,protocols) {
//       var worker = this;
//       bindWebSocket(worker, scriptURL,protocols);

//     }


//     CustomWebSocket.prototype = {
//       constructor: WebSocket_,

//     };
//     // Implement the EventTarget interface
    
//     [
//       'addEventListener',
//       'removeEventListener',
//       'dispatchEvent'
//     ].forEach(function(method) {
//         CustomWebSocket.prototype[method] = function() {
//         if (!(this instanceof CustomWebSocket)) {
//           throw new TypeError('Illegal invocation');
//         }
//         if (this.WebSocket) {
//           this.WebSocket[method].apply(this.WebSocket, arguments);
//         } 
//       };
//     });
//     Object.defineProperties(WebSocket.prototype, {
//       onmessage: {
//         get: function() {
//             console.log(` --- magic get onmessage---`);
//             return this._onmessage || null;
//         },
//         set: function(func) {
//           console.log(` --- magic set onmessage---`);
//           this._onmessage = typeof func === 'function' ? func : null;
//         }
//       },
//       onerror: {
//         get: function() {
//             console.log(` --- magic get onerror---`);
//             return this._onerror || null;
//         },
//         set: function(func) {
//           console.log(` --- magic set onerror ---`);
//           this._onerror = typeof func === 'function' ? func : null;
//         }
//       }
//     });
//   })();

console.log(" --- script injected  ---") ;

// setInterval(()=>{
//     console.log(`--- test var --- `)
//     window.test = 'ok'
// },2000)
