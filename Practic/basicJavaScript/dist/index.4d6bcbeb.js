// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"anvqh":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "bed887d14d6bcbeb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"gLLPy":[function(require,module,exports) {
// //1
// function multiple(a, b) {
//     return a * b
// }
// multiple(2, 5)
// //2
// function buildDate(day, month, year) {
//     return `${day}/${month}/${year}`
// }
// buildDate(5, 3, 2020)
// //3
// function isAdult(age) { 
//     return (age >= 18) ? true : false
// }
// isAdult(24)
// isAdult(12)
// //4
// function getMonthByNumber(monthNumber) {
//     switch(monthNumber) {
//         case 1:
//             return 'Январь'
//         case 2: 
//             return 'Февраль'
//         case 3: 
//             return 'Март'
//         case 4:
//             return 'Апрель'
//         case 5: 
//             return 'Май'
//         case 6: 
//             return 'Июнь'
//         case 7:
//             return 'Июль'
//         case 8: 
//             return 'Август'
//         case 9: 
//             return 'Сентябрь'
//         case 10:
//             return 'Октябрь'
//         case 11: 
//             return 'Ноябрь'
//         case 12: 
//             return 'Декабрь'
//             default: return 'Не верное число'
//     }
// }   
// getMonthByNumber(4)
// //5
// function convertRub(valueRub, currency) {
//     let valuta = {
//         usd: 97,
//         eur: 105,
//         kz: 4.9,
//         aed: 26.5
//     }
//     switch(currency) {
//         case 'USD':
//             return valueRub * valuta.usd
//         case 'EUR': 
//             return valueRub * valuta.eur
//         case 'KZN': 
//             return valueRub * valuta.kz
//         case 'AED': 
//             return valuta * valuta.aed
//             default: 'Не знаю такую валюту'
//     }
// }
// convertRub(15, 'USD')
// //6
// function printNumbers() {
//     for(let i = -10; i <= 10;i++ ) {
//         return i
//     }
// }
// printNumbers()
// //7
// function printNumbersByRange(start, end) {
//     for(let i = start; i <= end; i++) {
//         return i
//     }
// }
// printNumbersByRange(-3, 2)
// //8
// function calculateNumbersSum(numbers) {
//     let sum = 0;
//     for(let i = 0;i < numbers.length;i++) {
//         sum += numbers[i]
//     }
//     return sum
// }
// calculateNumbersSum([0, 1, 2, 4, 8])
// //9
// function includes(numbers, number) {
//     let result = false
//     for(let key of numbers) {
//         if(key === number) {
//             return true
//         } 
//     }
//     return result
// }
// includes([0, 1, 2, 4, 8], 80)
// //10
// let arr = []   
// function createPerson(name, surname, age) {
//     let obj = {
//         name: name,
//         surname: surname,
//         age: age
//     }
//     arr.push(obj)
// }   
// createPerson('Tima', 'Smith', 20)
// createPerson('Dan', 'Fillin', 3)
// createPerson('Tina', 'Smith', 40)
// createPerson('Dani', 'Fillin', 93)
// //11
// function findOldest(people) {
//     return people.reduce((a, b) => {
//         return (b.age > a.age) ? b : a
//     })
// } 
// findOldest(arr).name
///Самостоятельная работа
var _app = require("firebase/app");
var _firestore = require("firebase/firestore");
var _model = require("./model");
var _storage = require("./storage");
var _view = require("./view");
var _constans = require("./constans");
let crestic = document.querySelectorAll(".crestic");
let film = document.querySelectorAll(".film");
let spisocFilms = document.querySelector(".spisoc__films");
let inputAdd = document.querySelector(".search__films");
let btnInput = document.querySelector(".search__btn");
// Удаление фильма из списка
spisocFilms.addEventListener("click", async function(e) {
    const btn = e.target.closest(".crestic");
    // if (btn) {
    //     btn.parentElement.remove(); // Удаляет родительский элемент <li> при клике на crestic
    //     fetchDocumentIds()  
    // }
    // Добавляем обработчик клика для удаления элемента
    btn.addEventListener("click", async (event)=>{
        event.stopPropagation(); // Предотвращаем срабатывание других событий на элементе
        // Удаляем элемент из Firestore
        await deleteItem((0, _firestore.doc).id);
        // Удаляем элемент из DOM
        btn.parentElement.remove();
    });
});
// Ставим на фильме знак "прочитано" (вешаем активный класс)
spisocFilms.addEventListener("click", function(e) {
    const film = e.target.closest(".film");
    if (film && !e.target.closest(".crestic")) film.classList.toggle("ready"); // Переключаем класс "ready" для элемента <li>
});
//Добавление фильма в список
btnInput.addEventListener("click", async function(e) {
    e.preventDefault();
    addMovies();
    // HTML-код нового элемента li
    let newLiHTML = `<li class="film"><span class="circle"></span>${inputAdd.value}<span class="crestic"><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.3" d="M22.3575 3.74463L14.6021 11.5L22.3575 19.2554C22.7689 19.6667 23 20.2247 23 20.8064C23 21.3882 22.7689 21.9462 22.3575 22.3575C21.9462 22.7689 21.3882 23 20.8064 23C20.2247 23 19.6667 22.7689 19.2554 22.3575L11.5 14.6022L3.74463 22.3575C3.33326 22.7689 2.77532 23 2.19355 23C1.61179 23 1.05385 22.7689 0.642476 22.3575C0.231106 21.9462 7.3961e-07 21.3882 7.3961e-07 20.8064C7.3961e-07 20.2247 0.231106 19.6667 0.642476 19.2554L8.39785 11.5L0.642476 3.74463C0.231106 3.33326 0 2.77532 0 2.19355C0 1.61179 0.231106 1.05385 0.642476 0.642477C1.05385 0.231106 1.61178 7.3961e-07 2.19355 7.3961e-07C2.77532 7.3961e-07 3.33326 0.231106 3.74463 0.642477L11.5 8.39785L19.2554 0.642477C19.6667 0.231106 20.2247 0 20.8064 0C21.3882 0 21.9462 0.231106 22.3575 0.642477C22.7689 1.05385 23 1.61178 23 2.19355C23 2.77532 22.7689 3.33326 22.3575 3.74463Z" fill="#F3F6F9"/></svg></span></li>`;
    // Добавляем новый элемент в конец ul
    spisocFilms.insertAdjacentHTML("beforeend", newLiHTML);
    // Очищаем input после добавления
    inputAdd.value = "";
});
const firebaseConfig = {
    apiKey: "AIzaSyAvj1cTLGp0IVZMmcv6dUweiyAk2D1jYS4",
    authDomain: "movie-37c3b.firebaseapp.com",
    projectId: "movie-37c3b",
    storageBucket: "movie-37c3b.firebasestorage.app",
    messagingSenderId: "549541735538",
    appId: "1:549541735538:web:155d0548ecc3ef0bd426eb"
};
const app = (0, _app.initializeApp)(firebaseConfig);
const db = (0, _firestore.getFirestore)(app);
//функция добавление данных в firestore
async function addMovies() {
    try {
        const docRef = await (0, _firestore.addDoc)((0, _firestore.collection)(db, (0, _constans.MOVIS_STORAGE_KEY)), {
            movie: inputAdd.value
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
// Функция для получения данных из Firestore
async function fetchItems() {
    try {
        const querySnapshot = await (0, _firestore.getDocs)((0, _firestore.collection)(db, (0, _constans.MOVIS_STORAGE_KEY))); // Замените "items" на название вашей коллекции
        querySnapshot.forEach((doc)=>{
            console.log(`${doc} => ${doc.data().movie}`);
            console.log(`${doc} => ${doc.id}`);
            let newLiHTML = `<li data-id = ${doc.id} class="film"><span class="circle"></span>${doc.data().movie}<span class="crestic"><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.3" d="M22.3575 3.74463L14.6021 11.5L22.3575 19.2554C22.7689 19.6667 23 20.2247 23 20.8064C23 21.3882 22.7689 21.9462 22.3575 22.3575C21.9462 22.7689 21.3882 23 20.8064 23C20.2247 23 19.6667 22.7689 19.2554 22.3575L11.5 14.6022L3.74463 22.3575C3.33326 22.7689 2.77532 23 2.19355 23C1.61179 23 1.05385 22.7689 0.642476 22.3575C0.231106 21.9462 7.3961e-07 21.3882 7.3961e-07 20.8064C7.3961e-07 20.2247 0.231106 19.6667 0.642476 19.2554L8.39785 11.5L0.642476 3.74463C0.231106 3.33326 0 2.77532 0 2.19355C0 1.61179 0.231106 1.05385 0.642476 0.642477C1.05385 0.231106 1.61178 7.3961e-07 2.19355 7.3961e-07C2.77532 7.3961e-07 3.33326 0.231106 3.74463 0.642477L11.5 8.39785L19.2554 0.642477C19.6667 0.231106 20.2247 0 20.8064 0C21.3882 0 21.9462 0.231106 22.3575 0.642477C22.7689 1.05385 23 1.61178 23 2.19355C23 2.77532 22.7689 3.33326 22.3575 3.74463Z" fill="#F3F6F9"/></svg></span></li>`;
            spisocFilms.insertAdjacentHTML("beforeend", newLiHTML);
        });
    } catch (error) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0434\u0430\u043D\u043D\u044B\u0445:", error);
    }
}
fetchItems();
// Функция для получения и отображения ID документов
async function fetchDocumentIds() {
    try {
        const querySnapshot = await (0, _firestore.getDocs)((0, _firestore.collection)(db, (0, _constans.MOVIS_STORAGE_KEY)));
        querySnapshot.forEach((doc)=>{
            console.log("Document ID:", doc.id); // Вывод ID документа в консоль
            console.log("Document Data:", doc.data()); // Вывод данных документа в консоль
        });
    } catch (error) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0434\u0430\u043D\u043D\u044B\u0445:", error);
    }
}
//удаление
// async function deleteItem(movie) {
//     try {
//       await deleteDoc(doc(db, MOVIS_STORAGE_KEY, 'Ca8zodARBvCp5yVmwpI4'));
//       console.log(`Документ с ID ${movie} успешно удален`);
//     } catch (error) {
//       console.error("Ошибка удаления документа:", error);
//     }
// }
// Функция для удаления документа из Firestore
async function deleteItem(id) {
    try {
        await (0, _firestore.deleteDoc)((0, _firestore.doc)(db, (0, _constans.MOVIS_STORAGE_KEY), id));
        console.log(`\u{414}\u{43E}\u{43A}\u{443}\u{43C}\u{435}\u{43D}\u{442} \u{441} ID ${id} \u{443}\u{441}\u{43F}\u{435}\u{448}\u{43D}\u{43E} \u{443}\u{434}\u{430}\u{43B}\u{435}\u{43D}`);
    } catch (error) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430:", error);
    }
}
// Функция для отображения элементов
async function displayItems() {
    try {
        const querySnapshot = await (0, _firestore.getDocs)((0, _firestore.collection)(db, (0, _constans.MOVIS_STORAGE_KEY)));
        querySnapshot.forEach((doc)=>{
            // Создаем элемент списка с текстом и кнопкой удаления
            // const li = document.createElement("li");
            let newLiHTML = `<li data-id = ${doc.id} class="film"><span class="circle"></span>${doc.data().movie}<span class="crestic"><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.3" d="M22.3575 3.74463L14.6021 11.5L22.3575 19.2554C22.7689 19.6667 23 20.2247 23 20.8064C23 21.3882 22.7689 21.9462 22.3575 22.3575C21.9462 22.7689 21.3882 23 20.8064 23C20.2247 23 19.6667 22.7689 19.2554 22.3575L11.5 14.6022L3.74463 22.3575C3.33326 22.7689 2.77532 23 2.19355 23C1.61179 23 1.05385 22.7689 0.642476 22.3575C0.231106 21.9462 7.3961e-07 21.3882 7.3961e-07 20.8064C7.3961e-07 20.2247 0.231106 19.6667 0.642476 19.2554L8.39785 11.5L0.642476 3.74463C0.231106 3.33326 0 2.77532 0 2.19355C0 1.61179 0.231106 1.05385 0.642476 0.642477C1.05385 0.231106 1.61178 7.3961e-07 2.19355 7.3961e-07C2.77532 7.3961e-07 3.33326 0.231106 3.74463 0.642477L11.5 8.39785L19.2554 0.642477C19.6667 0.231106 20.2247 0 20.8064 0C21.3882 0 21.9462 0.231106 22.3575 0.642477C22.7689 1.05385 23 1.61178 23 2.19355C23 2.77532 22.7689 3.33326 22.3575 3.74463Z" fill="#F3F6F9"/></svg></span></li>`;
            spisocFilms.insertAdjacentHTML("beforeend", newLiHTML);
            // li.textContent = docSnapshot.data().name; // Отображаем поле name
            // li.dataset.id = docSnapshot.id; // Присваиваем ID документа в атрибут data-id
            // Создаем кнопку удаления (крестик)
            const deleteButton = document.querySelector(".crestic");
            // Добавляем обработчик клика для удаления элемента
            deleteButton.addEventListener("click", async (event)=>{
                event.stopPropagation(); // Предотвращаем срабатывание других событий на элементе
                // Получаем ID из data-id атрибута элемента li
                const itemId = newLiHTML.dataset.id;
                // Удаляем элемент из Firestore
                await deleteItem(itemId);
                // Удаляем элемент из DOM
                newLiHTML.remove();
            });
        // newLiHTML.appendChild(deleteButton); // Добавляем кнопку в элемент списка
        // spisocFilms.appendChild(newLiHTML); // Добавляем элемент списка в список
        });
    } catch (error) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0434\u0430\u043D\u043D\u044B\u0445:", error);
    }
}
// Функция для удаления документа из Firestore
async function deleteItem(id) {
    try {
        await (0, _firestore.deleteDoc)((0, _firestore.doc)(db, (0, _constans.MOVIS_STORAGE_KEY), id));
        console.log(`\u{414}\u{43E}\u{43A}\u{443}\u{43C}\u{435}\u{43D}\u{442} \u{441} ID ${id} \u{443}\u{441}\u{43F}\u{435}\u{448}\u{43D}\u{43E} \u{443}\u{434}\u{430}\u{43B}\u{435}\u{43D}`);
    } catch (error) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430:", error);
    }
}
// Отображаем элементы при загрузке страницы
displayItems();

},{"./model":"dEDha","./storage":"bkDau","./view":"ai2uB","./constans":"a7iG5","firebase/app":"aM3Fo","firebase/firestore":"8A4BC"}],"dEDha":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createMovieMode", ()=>createMovieMode);
function createMovieMode(movis) {
    return {};
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bkDau":[function(require,module,exports) {
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { ccollection, addDoc, getDocs  } from "firebase/firestore";
// const firebaseConfig = {
//     apiKey: "AIzaSyAvj1cTLGp0IVZMmcv6dUweiyAk2D1jYS4",
//     authDomain: "movie-37c3b.firebaseapp.com",
//     projectId: "movie-37c3b",
//     storageBucket: "movie-37c3b.firebasestorage.app",
//     messagingSenderId: "549541735538",
//     appId: "1:549541735538:web:155d0548ecc3ef0bd426eb"
// };
// export function createStorageMovie(key) {
//     const app = initializeApp(firebaseConfig);
//     const db = getFirestore(app);
//     return  {
//         key, 
//         db,
//         pull: async function() {
//         }
//     }
// }

},{}],"ai2uB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createViewMovie", ()=>createViewMovie);
function createViewMovie() {}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["anvqh","gLLPy"], "gLLPy", "parcelRequire69fa")

//# sourceMappingURL=index.4d6bcbeb.js.map
