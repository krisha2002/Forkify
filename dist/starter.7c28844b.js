// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  distDir,
  publicUrl,
  devServer
) {
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

  var importMap = previousRequire.i || {};
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
        globalObject
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
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  function $parcel$resolve(url) {  url = importMap[url] || url;  return import.meta.resolve(distDir + url);}newRequire.resolve = $parcel$resolve;

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
    }
  }
})({"hzm12":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "d2bde0377c28844b";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
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
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            if (err.message) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
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
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
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
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
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
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
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
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
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
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
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
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
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
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
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
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
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
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"dGopa":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _webImmediateJs = require("core-js/modules/web.immediate.js");
var _modelJs = require("./model.js");
var _configJs = require("./config.js");
var _recipeViewJs = require("./views/recipeView.js");
var _recipeViewJsDefault = parcelHelpers.interopDefault(_recipeViewJs);
var _searchViewJs = require("./views/searchView.js");
var _searchViewJsDefault = parcelHelpers.interopDefault(_searchViewJs);
var _resultsViewJs = require("./views/resultsView.js");
var _resultsViewJsDefault = parcelHelpers.interopDefault(_resultsViewJs);
var _paginationViewJs = require("./views/paginationView.js");
var _paginationViewJsDefault = parcelHelpers.interopDefault(_paginationViewJs);
var _bookmarksViewJs = require("./views/bookmarksView.js");
var _bookmarksViewJsDefault = parcelHelpers.interopDefault(_bookmarksViewJs);
var _addRecipeViewJs = require("./views/addRecipeView.js");
var _addRecipeViewJsDefault = parcelHelpers.interopDefault(_addRecipeViewJs);
var _runtime = require("regenerator-runtime/runtime");
// if (module.hot) {
//   module.hot.accept();
// }
const controlRecipes = async function() {
    try {
        const id = window.location.hash.slice(1);
        if (!id) return;
        (0, _recipeViewJsDefault.default).renderSpinner();
        // 0) Update results view to mark selected search result
        (0, _resultsViewJsDefault.default).update(_modelJs.getSearchResultsPage());
        // 1) Updating bookmarks view
        (0, _bookmarksViewJsDefault.default).update(_modelJs.state.bookmarks);
        // 2) Loading recipe
        await _modelJs.loadRecipe(id);
        const { recipe } = _modelJs.state;
        // 3) Rendering recipes
        (0, _recipeViewJsDefault.default).render(_modelJs.state.recipe);
    } catch (err) {
        (0, _recipeViewJsDefault.default).renderError();
        console.error(err);
    }
};
const controlSearchResults = async function() {
    try {
        (0, _resultsViewJsDefault.default).renderSpinner();
        // 1) Get search query
        const query = (0, _searchViewJsDefault.default).getQuery();
        if (!query) return;
        // 2) Load search results
        await _modelJs.loadSearchResults(query);
        // 3) Render results
        // resultsView.render(model.state.search.results);
        (0, _resultsViewJsDefault.default).render(_modelJs.getSearchResultsPage());
        // 4) Render initial paginations buttons
        (0, _paginationViewJsDefault.default).render(_modelJs.state.search);
    } catch (err) {
        console.log(err);
    }
};
const controlPagination = function(goToPage) {
    // 1) Render NEW results
    (0, _resultsViewJsDefault.default).render(_modelJs.getSearchResultsPage(goToPage));
    // 2) Render NEW paginations buttons
    (0, _paginationViewJsDefault.default).render(_modelJs.state.search);
};
const controlServings = function(newServings) {
    // Update the recipe servings (in state)
    _modelJs.updateServings(newServings);
    // Update the recipe view
    // recipeView.render(model.state.recipe);
    (0, _recipeViewJsDefault.default).update(_modelJs.state.recipe);
};
const controlAddBookmark = function() {
    // 1) Add/remove bookmark
    if (!_modelJs.state.recipe.bookmarked) _modelJs.addBookmark(_modelJs.state.recipe);
    else _modelJs.deleteBookmark(_modelJs.state.recipe.id);
    // 2) Update recipe view
    (0, _recipeViewJsDefault.default).update(_modelJs.state.recipe);
    // 3) Render bookmarks
    (0, _bookmarksViewJsDefault.default).render(_modelJs.state.bookmarks);
};
const controlBookmarks = function() {
    (0, _bookmarksViewJsDefault.default).render(_modelJs.state.bookmarks);
};
const controlAddRecipe = async function(newRecipe) {
    try {
        // Show loading spinner
        (0, _addRecipeViewJsDefault.default).renderSpinner();
        // Upload the new recipe data
        await _modelJs.uploadRecipe(newRecipe);
        console.log(_modelJs.state.recipe);
        // Render recipe
        (0, _recipeViewJsDefault.default).render(_modelJs.state.recipe);
        // Success message
        (0, _addRecipeViewJsDefault.default).renderMessage();
        // Close form window
        setTimeout(function() {
            (0, _addRecipeViewJsDefault.default).toggleWindow();
        }, (0, _configJs.MODAL_CLOSE_SEC) * 1000);
    } catch (err) {
        console.error("\u203C\uFE0F", err);
        (0, _addRecipeViewJsDefault.default).renderError(err.message);
    }
};
const init = function() {
    (0, _bookmarksViewJsDefault.default).addHandlerRender(controlBookmarks);
    (0, _recipeViewJsDefault.default).addHandlerRender(controlRecipes);
    (0, _recipeViewJsDefault.default).addHandlerUpdateServings(controlServings);
    (0, _recipeViewJsDefault.default).addHandlerAddBookmark(controlAddBookmark);
    (0, _searchViewJsDefault.default).addHandlerSearch(controlSearchResults);
    (0, _paginationViewJsDefault.default).addHandlerClick(controlPagination);
    (0, _addRecipeViewJsDefault.default).addHandlerUpload(controlAddRecipe);
};
init();

},{"core-js/modules/web.immediate.js":"bzsBv","./model.js":"cfHEn","./views/recipeView.js":"fLbry","./views/searchView.js":"5aK57","./views/resultsView.js":"lYFJn","./views/paginationView.js":"3kBPa","./views/bookmarksView.js":"2vc5x","regenerator-runtime/runtime":"f6ot0","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","./views/addRecipeView.js":"8Ye1u","./config.js":"7c2aR"}],"bzsBv":[function(require,module,exports,__globalThis) {
'use strict';
// TODO: Remove this module from `core-js@4` since it's split to modules listed below
require("52e9b3eefbbce1ed");
require("292fa64716f5b39e");

},{"52e9b3eefbbce1ed":"6n7Wj","292fa64716f5b39e":"cpv3g"}],"6n7Wj":[function(require,module,exports,__globalThis) {
'use strict';
var $ = require("79389288a80b279c");
var globalThis = require("e4d64249a0133d14");
var clearImmediate = require("84ba5ca62b8b14c9").clear;
// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: globalThis.clearImmediate !== clearImmediate
}, {
    clearImmediate: clearImmediate
});

},{"79389288a80b279c":"7Vckd","e4d64249a0133d14":"6xMjU","84ba5ca62b8b14c9":"9fjiV"}],"7Vckd":[function(require,module,exports,__globalThis) {
'use strict';
var globalThis = require("23dea28abc8414d1");
var getOwnPropertyDescriptor = require("2ec751f39e500b85").f;
var createNonEnumerableProperty = require("b4567636b28a3b3a");
var defineBuiltIn = require("50460aa43dd4048a");
var defineGlobalProperty = require("581238c99f8c2c30");
var copyConstructorProperties = require("566a383894c688bc");
var isForced = require("f0e2e697f04e8ad9");
/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/ module.exports = function(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) target = globalThis;
    else if (STATIC) target = globalThis[TARGET] || defineGlobalProperty(TARGET, {});
    else target = globalThis[TARGET] && globalThis[TARGET].prototype;
    if (target) for(key in source){
        sourceProperty = source[key];
        if (options.dontCallGetSet) {
            descriptor = getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
        // contained in target
        if (!FORCED && targetProperty !== undefined) {
            if (typeof sourceProperty == typeof targetProperty) continue;
            copyConstructorProperties(sourceProperty, targetProperty);
        }
        // add a flag to not completely full polyfills
        if (options.sham || targetProperty && targetProperty.sham) createNonEnumerableProperty(sourceProperty, 'sham', true);
        defineBuiltIn(target, key, sourceProperty, options);
    }
};

},{"23dea28abc8414d1":"6xMjU","2ec751f39e500b85":"dqLxA","b4567636b28a3b3a":"i7bgu","50460aa43dd4048a":"es56c","581238c99f8c2c30":"48kcX","566a383894c688bc":"i7gI0","f0e2e697f04e8ad9":"3rvW8"}],"6xMjU":[function(require,module,exports,__globalThis) {
var global = arguments[3];
'use strict';
var check = function(it) {
    return it && it.Math === Math && it;
};
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == 'object' && self) || check(typeof global == 'object' && global) || check(typeof this == 'object' && this) || // eslint-disable-next-line no-new-func -- fallback
function() {
    return this;
}() || Function('return this')();

},{}],"dqLxA":[function(require,module,exports,__globalThis) {
'use strict';
var DESCRIPTORS = require("c04e6fb248689dba");
var call = require("553ec943aa2a4554");
var propertyIsEnumerableModule = require("bbc5e69071aa2fbd");
var createPropertyDescriptor = require("1d2ffbfd99e01f41");
var toIndexedObject = require("c4ea69a78a643d87");
var toPropertyKey = require("8ab18ff766aa2ab9");
var hasOwn = require("3761c5d34b7aa48f");
var IE8_DOM_DEFINE = require("c4dfcc26308f1b4a");
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPropertyKey(P);
    if (IE8_DOM_DEFINE) try {
        return $getOwnPropertyDescriptor(O, P);
    } catch (error) {}
    if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};

},{"c04e6fb248689dba":"5AxuF","553ec943aa2a4554":"3v9g9","bbc5e69071aa2fbd":"U03h7","1d2ffbfd99e01f41":"dOb5l","c4ea69a78a643d87":"58zOi","8ab18ff766aa2ab9":"lGuA3","3761c5d34b7aa48f":"9CekL","c4dfcc26308f1b4a":"kwjpQ"}],"5AxuF":[function(require,module,exports,__globalThis) {
'use strict';
var fails = require("735b783268fd06c0");
// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
        get: function() {
            return 7;
        }
    })[1] !== 7;
});

},{"735b783268fd06c0":"7Gv5z"}],"7Gv5z":[function(require,module,exports,__globalThis) {
'use strict';
module.exports = function(exec) {
    try {
        return !!exec();
    } catch (error) {
        return true;
    }
};

},{}],"3v9g9":[function(require,module,exports,__globalThis) {
'use strict';
var NATIVE_BIND = require("44e025d030d66023");
var call = Function.prototype.call;
// eslint-disable-next-line es/no-function-prototype-bind -- safe
module.exports = NATIVE_BIND ? call.bind(call) : function() {
    return call.apply(call, arguments);
};

},{"44e025d030d66023":"5U5xz"}],"5U5xz":[function(require,module,exports,__globalThis) {
'use strict';
var fails = require("2642aa7619056f20");
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function() {}).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != 'function' || test.hasOwnProperty('prototype');
});

},{"2642aa7619056f20":"7Gv5z"}],"U03h7":[function(require,module,exports,__globalThis) {
'use strict';
var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
    1: 2
}, 1);
// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

},{}],"dOb5l":[function(require,module,exports,__globalThis) {
'use strict';
module.exports = function(bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};

},{}],"58zOi":[function(require,module,exports,__globalThis) {
'use strict';
// toObject with fallback for non-array-like ES3 strings
var IndexedObject = require("9d8f8f50ac9468eb");
var requireObjectCoercible = require("f7224aed72953ac4");
module.exports = function(it) {
    return IndexedObject(requireObjectCoercible(it));
};

},{"9d8f8f50ac9468eb":"gXe04","f7224aed72953ac4":"7cHwm"}],"gXe04":[function(require,module,exports,__globalThis) {
'use strict';
var uncurryThis = require("7ba7e65983d7b662");
var fails = require("df551e12a7c872dd");
var classof = require("1d34ea813cebff9c");
var $Object = Object;
var split = uncurryThis(''.split);
// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function() {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object('z').propertyIsEnumerable(0);
}) ? function(it) {
    return classof(it) === 'String' ? split(it, '') : $Object(it);
} : $Object;

},{"7ba7e65983d7b662":"aAate","df551e12a7c872dd":"7Gv5z","1d34ea813cebff9c":"fKrQp"}],"aAate":[function(require,module,exports,__globalThis) {
'use strict';
var NATIVE_BIND = require("829dd7a4e960cf9e");
var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
// eslint-disable-next-line es/no-function-prototype-bind -- safe
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
    return function() {
        return call.apply(fn, arguments);
    };
};

},{"829dd7a4e960cf9e":"5U5xz"}],"fKrQp":[function(require,module,exports,__globalThis) {
'use strict';
var uncurryThis = require("1c71c3f6daac476c");
var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);
module.exports = function(it) {
    return stringSlice(toString(it), 8, -1);
};

},{"1c71c3f6daac476c":"aAate"}],"7cHwm":[function(require,module,exports,__globalThis) {
'use strict';
var isNullOrUndefined = require("74607922ed30019f");
var $TypeError = TypeError;
// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function(it) {
    if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
    return it;
};

},{"74607922ed30019f":"gHvvU"}],"gHvvU":[function(require,module,exports,__globalThis) {
'use strict';
// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function(it) {
    return it === null || it === undefined;
};

},{}],"lGuA3":[function(require,module,exports,__globalThis) {
'use strict';
var toPrimitive = require("53a3a67ac381c4e8");
var isSymbol = require("b992ca9cdcf7937b");
// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function(argument) {
    var key = toPrimitive(argument, 'string');
    return isSymbol(key) ? key : key + '';
};

},{"53a3a67ac381c4e8":"hyNfR","b992ca9cdcf7937b":"8EQ8A"}],"hyNfR":[function(require,module,exports,__globalThis) {
'use strict';
var call = require("70235907dc93b4b0");
var isObject = require("46fb53dace408c8e");
var isSymbol = require("677bdc4d74d2f983");
var getMethod = require("80395bcde336a28b");
var ordinaryToPrimitive = require("49552a7324952190");
var wellKnownSymbol = require("aea01c71276624bf");
var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function(input, pref) {
    if (!isObject(input) || isSymbol(input)) return input;
    var exoticToPrim = getMethod(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
        if (pref === undefined) pref = 'default';
        result = call(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result)) return result;
        throw new $TypeError("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = 'number';
    return ordinaryToPrimitive(input, pref);
};

},{"70235907dc93b4b0":"3v9g9","46fb53dace408c8e":"5rTge","677bdc4d74d2f983":"8EQ8A","80395bcde336a28b":"9TreM","49552a7324952190":"cUIZh","aea01c71276624bf":"lzelE"}],"5rTge":[function(require,module,exports,__globalThis) {
'use strict';
var isCallable = require("f87cee1cb79cbcca");
module.exports = function(it) {
    return typeof it == 'object' ? it !== null : isCallable(it);
};

},{"f87cee1cb79cbcca":"2KfBB"}],"2KfBB":[function(require,module,exports,__globalThis) {
'use strict';
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var documentAll = typeof document == 'object' && document.all;
// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
module.exports = typeof documentAll == 'undefined' && documentAll !== undefined ? function(argument) {
    return typeof argument == 'function' || argument === documentAll;
} : function(argument) {
    return typeof argument == 'function';
};

},{}],"8EQ8A":[function(require,module,exports,__globalThis) {
'use strict';
var getBuiltIn = require("6b6c481cdfb7df35");
var isCallable = require("2af44fcbdbf14c83");
var isPrototypeOf = require("76e903e830c40e7c");
var USE_SYMBOL_AS_UID = require("7e2fe930b3598e22");
var $Object = Object;
module.exports = USE_SYMBOL_AS_UID ? function(it) {
    return typeof it == 'symbol';
} : function(it) {
    var $Symbol = getBuiltIn('Symbol');
    return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};

},{"6b6c481cdfb7df35":"h2CMt","2af44fcbdbf14c83":"2KfBB","76e903e830c40e7c":"jkNHH","7e2fe930b3598e22":"fSbH5"}],"h2CMt":[function(require,module,exports,__globalThis) {
'use strict';
var globalThis = require("e057fc33d60763c1");
var isCallable = require("f1d62079325906cb");
var aFunction = function(argument) {
    return isCallable(argument) ? argument : undefined;
};
module.exports = function(namespace, method) {
    return arguments.length < 2 ? aFunction(globalThis[namespace]) : globalThis[namespace] && globalThis[namespace][method];
};

},{"e057fc33d60763c1":"6xMjU","f1d62079325906cb":"2KfBB"}],"jkNHH":[function(require,module,exports,__globalThis) {
'use strict';
var uncurryThis = require("83f14842ef67e16a");
module.exports = uncurryThis({}.isPrototypeOf);

},{"83f14842ef67e16a":"aAate"}],"fSbH5":[function(require,module,exports,__globalThis) {
'use strict';
/* eslint-disable es/no-symbol -- required for testing */ var NATIVE_SYMBOL = require("da4a972af0214ea0");
module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == 'symbol';

},{"da4a972af0214ea0":"2fu84"}],"2fu84":[function(require,module,exports,__globalThis) {
'use strict';
/* eslint-disable es/no-symbol -- required for testing */ var V8_VERSION = require("53b951dfb9de4d22");
var fails = require("b37df495bcdc1d99");
var globalThis = require("e5929e9affd2affc");
var $String = globalThis.String;
// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
    var symbol = Symbol('symbol detection');
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
    // of course, fail.
    return !$String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

},{"53b951dfb9de4d22":"cePh9","b37df495bcdc1d99":"7Gv5z","e5929e9affd2affc":"6xMjU"}],"cePh9":[function(require,module,exports,__globalThis) {
'use strict';
var globalThis = require("d049c1c2aa0eee5b");
var userAgent = require("4eb5796bbafe334d");
var process = globalThis.process;
var Deno = globalThis.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
    match = v8.split('.');
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}
// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
    match = userAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version = +match[1];
    }
}
module.exports = version;

},{"d049c1c2aa0eee5b":"6xMjU","4eb5796bbafe334d":"qxRHs"}],"qxRHs":[function(require,module,exports,__globalThis) {
'use strict';
var globalThis = require("888bcb4c75dc4ad");
var navigator = globalThis.navigator;
var userAgent = navigator && navigator.userAgent;
module.exports = userAgent ? String(userAgent) : '';

},{"888bcb4c75dc4ad":"6xMjU"}],"9TreM":[function(require,module,exports,__globalThis) {
'use strict';
var aCallable = require("bbfed17b24e215f4");
var isNullOrUndefined = require("492a86e2970f6a26");
// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function(V, P) {
    var func = V[P];
    return isNullOrUndefined(func) ? undefined : aCallable(func);
};

},{"bbfed17b24e215f4":"dxhWU","492a86e2970f6a26":"gHvvU"}],"dxhWU":[function(require,module,exports,__globalThis) {
'use strict';
var isCallable = require("4094667126ecac05");
var tryToString = require("fce2a7573db493fa");
var $TypeError = TypeError;
// `Assert: IsCallable(argument) is true`
module.exports = function(argument) {
    if (isCallable(argument)) return argument;
    throw new $TypeError(tryToString(argument) + ' is not a function');
};

},{"4094667126ecac05":"2KfBB","fce2a7573db493fa":"fPD2p"}],"fPD2p":[function(require,module,exports,__globalThis) {
'use strict';
var $String = String;
module.exports = function(argument) {
    try {
        return $String(argument);
    } catch (error) {
        return 'Object';
    }
};

},{}],"cUIZh":[function(require,module,exports,__globalThis) {
'use strict';
var call = require("abe9ca006f56626e");
var isCallable = require("c96b3a89fec6248a");
var isObject = require("551615fda0214f1b");
var $TypeError = TypeError;
// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function(input, pref) {
    var fn, val;
    if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
    if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    throw new $TypeError("Can't convert object to primitive value");
};

},{"abe9ca006f56626e":"3v9g9","c96b3a89fec6248a":"2KfBB","551615fda0214f1b":"5rTge"}],"lzelE":[function(require,module,exports,__globalThis) {
'use strict';
var globalThis = require("ad5ef4474219c101");
var shared = require("6a2cda01df6b4c79");
var hasOwn = require("dccc28ffa5beeb54");
var uid = require("48d6af1225853d44");
var NATIVE_SYMBOL = require("9f762329148684");
var USE_SYMBOL_AS_UID = require("1ce268781e409df2");
var Symbol = globalThis.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;
module.exports = function(name) {
    if (!hasOwn(WellKnownSymbolsStore, name)) WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name) ? Symbol[name] : createWellKnownSymbol('Symbol.' + name);
    return WellKnownSymbolsStore[name];
};

},{"ad5ef4474219c101":"6xMjU","6a2cda01df6b4c79":"6SeRV","dccc28ffa5beeb54":"9CekL","48d6af1225853d44":"dePDt","9f762329148684":"2fu84","1ce268781e409df2":"fSbH5"}],"6SeRV":[function(require,module,exports,__globalThis) {
'use strict';
var store = require("84eeed9891aafe14");
module.exports = function(key, value) {
    return store[key] || (store[key] = value || {});
};

},{"84eeed9891aafe14":"29eKX"}],"29eKX":[function(require,module,exports,__globalThis) {
'use strict';
var IS_PURE = require("7b43004672b1879f");
var globalThis = require("bc8329e77dc2c1cc");
var defineGlobalProperty = require("dfb72a1d809f7b02");
var SHARED = '__core-js_shared__';
var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});
(store.versions || (store.versions = [])).push({
    version: '3.41.0',
    mode: IS_PURE ? 'pure' : 'global',
    copyright: "\xa9 2014-2025 Denis Pushkarev (zloirock.ru)",
    license: 'https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE',
    source: 'https://github.com/zloirock/core-js'
});

},{"7b43004672b1879f":"cpju0","bc8329e77dc2c1cc":"6xMjU","dfb72a1d809f7b02":"48kcX"}],"cpju0":[function(require,module,exports,__globalThis) {
'use strict';
module.exports = false;

},{}],"48kcX":[function(require,module,exports,__globalThis) {
'use strict';
var globalThis = require("2d1c29655635b9ea");
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
module.exports = function(key, value) {
    try {
        defineProperty(globalThis, key, {
            value: value,
            configurable: true,
            writable: true
        });
    } catch (error) {
        globalThis[key] = value;
    }
    return value;
};

},{"2d1c29655635b9ea":"6xMjU"}],"9CekL":[function(require,module,exports,__globalThis) {
'use strict';
var uncurryThis = require("f5dcaa60a713971f");
var toObject = require("ab17c4f45fcf0841");
var hasOwnProperty = uncurryThis({}.hasOwnProperty);
// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject(it), key);
};

},{"f5dcaa60a713971f":"aAate","ab17c4f45fcf0841":"fTIhz"}],"fTIhz":[function(require,module,exports,__globalThis) {
'use strict';
var requireObjectCoercible = require("f45a7b5dcdc4a410");
var $Object = Object;
// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function(argument) {
    return $Object(requireObjectCoercible(argument));
};

},{"f45a7b5dcdc4a410":"7cHwm"}],"dePDt":[function(require,module,exports,__globalThis) {
'use strict';
var uncurryThis = require("5da0fe4507da20a3");
var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);
module.exports = function(key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};

},{"5da0fe4507da20a3":"aAate"}],"kwjpQ":[function(require,module,exports,__globalThis) {
'use strict';
var DESCRIPTORS = require("9b4278b13c076bf");
var fails = require("8aee5d88a5f9b6b5");
var createElement = require("1db4d60148afcf21");
// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement('div'), 'a', {
        get: function() {
            return 7;
        }
    }).a !== 7;
});

},{"9b4278b13c076bf":"5AxuF","8aee5d88a5f9b6b5":"7Gv5z","1db4d60148afcf21":"eF8HX"}],"eF8HX":[function(require,module,exports,__globalThis) {
'use strict';
var globalThis = require("845bcece0e6d354");
var isObject = require("824df78b2e007250");
var document = globalThis.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);
module.exports = function(it) {
    return EXISTS ? document.createElement(it) : {};
};

},{"845bcece0e6d354":"6xMjU","824df78b2e007250":"5rTge"}],"i7bgu":[function(require,module,exports,__globalThis) {
'use strict';
var DESCRIPTORS = require("a8753383ef98ee18");
var definePropertyModule = require("189ab650b8f71085");
var createPropertyDescriptor = require("1168c8162aa30435");
module.exports = DESCRIPTORS ? function(object, key, value) {
    return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function(object, key, value) {
    object[key] = value;
    return object;
};

},{"a8753383ef98ee18":"5AxuF","189ab650b8f71085":"aBGsi","1168c8162aa30435":"dOb5l"}],"aBGsi":[function(require,module,exports,__globalThis) {
'use strict';
var DESCRIPTORS = require("ca50eb9163928400");
var IE8_DOM_DEFINE = require("d482f9e5478795e8");
var V8_PROTOTYPE_DEFINE_BUG = require("b6ad7537efb06f4b");
var anObject = require("16365a73399e7fe7");
var toPropertyKey = require("fab1d366c47796d9");
var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';
// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        if (current && current[WRITABLE]) {
            O[P] = Attributes.value;
            Attributes = {
                configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
                enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
                writable: false
            };
        }
    }
    return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
        return $defineProperty(O, P, Attributes);
    } catch (error) {}
    if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
};

},{"ca50eb9163928400":"5AxuF","d482f9e5478795e8":"kwjpQ","b6ad7537efb06f4b":"8Gm1h","16365a73399e7fe7":"jFjFb","fab1d366c47796d9":"lGuA3"}],"8Gm1h":[function(require,module,exports,__globalThis) {
'use strict';
var DESCRIPTORS = require("b22a5a2de93e3ad2");
var fails = require("249a5b857c2dfccd");
// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function() {}, 'prototype', {
        value: 42,
        writable: false
    }).prototype !== 42;
});

},{"b22a5a2de93e3ad2":"5AxuF","249a5b857c2dfccd":"7Gv5z"}],"jFjFb":[function(require,module,exports,__globalThis) {
'use strict';
var isObject = require("2b6c6258a0a6082f");
var $String = String;
var $TypeError = TypeError;
// `Assert: Type(argument) is Object`
module.exports = function(argument) {
    if (isObject(argument)) return argument;
    throw new $TypeError($String(argument) + ' is not an object');
};

},{"2b6c6258a0a6082f":"5rTge"}],"es56c":[function(require,module,exports,__globalThis) {
'use strict';
var isCallable = require("99ee13632b3fa68");
var definePropertyModule = require("9ebb3e3004fccc0a");
var makeBuiltIn = require("f10cc812a3094053");
var defineGlobalProperty = require("d354802d852d9c2b");
module.exports = function(O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable(value)) makeBuiltIn(value, name, options);
    if (options.global) {
        if (simple) O[key] = value;
        else defineGlobalProperty(key, value);
    } else {
        try {
            if (!options.unsafe) delete O[key];
            else if (O[key]) simple = true;
        } catch (error) {}
        if (simple) O[key] = value;
        else definePropertyModule.f(O, key, {
            value: value,
            enumerable: false,
            configurable: !options.nonConfigurable,
            writable: !options.nonWritable
        });
    }
    return O;
};

},{"99ee13632b3fa68":"2KfBB","9ebb3e3004fccc0a":"aBGsi","f10cc812a3094053":"6JWCA","d354802d852d9c2b":"48kcX"}],"6JWCA":[function(require,module,exports,__globalThis) {
'use strict';
var uncurryThis = require("ca84677f1ebd1804");
var fails = require("13360f2842eba261");
var isCallable = require("103e488c0928755a");
var hasOwn = require("cbf9b0e0779cc368");
var DESCRIPTORS = require("3f2eb7efeae2f72b");
var CONFIGURABLE_FUNCTION_NAME = require("548b10f284264c72").CONFIGURABLE;
var inspectSource = require("358f00f3103bd55b");
var InternalStateModule = require("9b2ce14119fd2412");
var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);
var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
    return defineProperty(function() {}, 'length', {
        value: 8
    }).length !== 8;
});
var TEMPLATE = String(String).split('String');
var makeBuiltIn = module.exports = function(value, name, options) {
    if (stringSlice($String(name), 0, 7) === 'Symbol(') name = '[' + replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
    if (options && options.getter) name = 'get ' + name;
    if (options && options.setter) name = 'set ' + name;
    if (!hasOwn(value, 'name') || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if (DESCRIPTORS) defineProperty(value, 'name', {
            value: name,
            configurable: true
        });
        else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) defineProperty(value, 'length', {
        value: options.arity
    });
    try {
        if (options && hasOwn(options, 'constructor') && options.constructor) {
            if (DESCRIPTORS) defineProperty(value, 'prototype', {
                writable: false
            });
        } else if (value.prototype) value.prototype = undefined;
    } catch (error) {}
    var state = enforceInternalState(value);
    if (!hasOwn(state, 'source')) state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
    return value;
};
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
    return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');

},{"ca84677f1ebd1804":"aAate","13360f2842eba261":"7Gv5z","103e488c0928755a":"2KfBB","cbf9b0e0779cc368":"9CekL","3f2eb7efeae2f72b":"5AxuF","548b10f284264c72":"d1uzf","358f00f3103bd55b":"aXOzF","9b2ce14119fd2412":"hbwRd"}],"d1uzf":[function(require,module,exports,__globalThis) {
'use strict';
var DESCRIPTORS = require("8ad2bacb0e20b95c");
var hasOwn = require("4eabfd8f83afc9d5");
var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() {}).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable);
module.exports = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
};

},{"8ad2bacb0e20b95c":"5AxuF","4eabfd8f83afc9d5":"9CekL"}],"aXOzF":[function(require,module,exports,__globalThis) {
'use strict';
var uncurryThis = require("26e26db98367212e");
var isCallable = require("40ed9a4f6ae66648");
var store = require("485d48d6f4c6739e");
var functionToString = uncurryThis(Function.toString);
// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) store.inspectSource = function(it) {
    return functionToString(it);
};
module.exports = store.inspectSource;

},{"26e26db98367212e":"aAate","40ed9a4f6ae66648":"2KfBB","485d48d6f4c6739e":"29eKX"}],"hbwRd":[function(require,module,exports,__globalThis) {
'use strict';
var NATIVE_WEAK_MAP = require("d3f0c9f3327b2fd6");
var globalThis = require("28c3574d0c39fe7e");
var isObject = require("f82e6cc0ac249fa5");
var createNonEnumerableProperty = require("c0ae163eea4ef97");
var hasOwn = require("6dea7358344877bb");
var shared = require("3e035a1241da2f0");
var sharedKey = require("88d6ccc27e779e5a");
var hiddenKeys = require("d40b9b3abdbb956e");
var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = globalThis.TypeError;
var WeakMap = globalThis.WeakMap;
var set, get, has;
var enforce = function(it) {
    return has(it) ? get(it) : set(it, {});
};
var getterFor = function(TYPE) {
    return function(it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) throw new TypeError('Incompatible receiver, ' + TYPE + ' required');
        return state;
    };
};
if (NATIVE_WEAK_MAP || shared.state) {
    var store = shared.state || (shared.state = new WeakMap());
    /* eslint-disable no-self-assign -- prototype methods protection */ store.get = store.get;
    store.has = store.has;
    store.set = store.set;
    /* eslint-enable no-self-assign -- prototype methods protection */ set = function(it, metadata) {
        if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        store.set(it, metadata);
        return metadata;
    };
    get = function(it) {
        return store.get(it) || {};
    };
    has = function(it) {
        return store.has(it);
    };
} else {
    var STATE = sharedKey('state');
    hiddenKeys[STATE] = true;
    set = function(it, metadata) {
        if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
    };
    get = function(it) {
        return hasOwn(it, STATE) ? it[STATE] : {};
    };
    has = function(it) {
        return hasOwn(it, STATE);
    };
}
module.exports = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
};

},{"d3f0c9f3327b2fd6":"6z7Mo","28c3574d0c39fe7e":"6xMjU","f82e6cc0ac249fa5":"5rTge","c0ae163eea4ef97":"i7bgu","6dea7358344877bb":"9CekL","3e035a1241da2f0":"29eKX","88d6ccc27e779e5a":"fDnL8","d40b9b3abdbb956e":"2sYlt"}],"6z7Mo":[function(require,module,exports,__globalThis) {
'use strict';
var globalThis = require("8b1a8c1dbfd18eb5");
var isCallable = require("aa77fff8d5ef0565");
var WeakMap = globalThis.WeakMap;
module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));

},{"8b1a8c1dbfd18eb5":"6xMjU","aa77fff8d5ef0565":"2KfBB"}],"fDnL8":[function(require,module,exports,__globalThis) {
'use strict';
var shared = require("dbc8182adeb8c92f");
var uid = require("90b4ffb58508a6e5");
var keys = shared('keys');
module.exports = function(key) {
    return keys[key] || (keys[key] = uid(key));
};

},{"dbc8182adeb8c92f":"6SeRV","90b4ffb58508a6e5":"dePDt"}],"2sYlt":[function(require,module,exports,__globalThis) {
'use strict';
module.exports = {};

},{}],"i7gI0":[function(require,module,exports,__globalThis) {
'use strict';
var hasOwn = require("d91d786cc71453ce");
var ownKeys = require("88cb809f98beddc6");
var getOwnPropertyDescriptorModule = require("10ea642aad5f7c21");
var definePropertyModule = require("39ff598ce822187e");
module.exports = function(target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
};

},{"d91d786cc71453ce":"9CekL","88cb809f98beddc6":"dDsbC","10ea642aad5f7c21":"dqLxA","39ff598ce822187e":"aBGsi"}],"dDsbC":[function(require,module,exports,__globalThis) {
'use strict';
var getBuiltIn = require("3cc1e4329d869e34");
var uncurryThis = require("2b8e77cbdbe3db7a");
var getOwnPropertyNamesModule = require("d703bcb62fcda216");
var getOwnPropertySymbolsModule = require("157674bad2772c6d");
var anObject = require("a09e060b9cae3c6c");
var concat = uncurryThis([].concat);
// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

},{"3cc1e4329d869e34":"h2CMt","2b8e77cbdbe3db7a":"aAate","d703bcb62fcda216":"kdCGz","157674bad2772c6d":"5fq5o","a09e060b9cae3c6c":"jFjFb"}],"kdCGz":[function(require,module,exports,__globalThis) {
'use strict';
var internalObjectKeys = require("6d8591e17a49376c");
var enumBugKeys = require("2c933f93dd98f385");
var hiddenKeys = enumBugKeys.concat('length', 'prototype');
// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys(O, hiddenKeys);
};

},{"6d8591e17a49376c":"gRwJ4","2c933f93dd98f385":"6IITF"}],"gRwJ4":[function(require,module,exports,__globalThis) {
'use strict';
var uncurryThis = require("363ee0e6bb4f46a7");
var hasOwn = require("3183fe0b0bf6f6ac");
var toIndexedObject = require("28192ac12e934672");
var indexOf = require("a5f9c5d8e993ccd6").indexOf;
var hiddenKeys = require("57775908f1581bc6");
var push = uncurryThis([].push);
module.exports = function(object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for(key in O)!hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
    // Don't enum bug & hidden keys
    while(names.length > i)if (hasOwn(O, key = names[i++])) ~indexOf(result, key) || push(result, key);
    return result;
};

},{"363ee0e6bb4f46a7":"aAate","3183fe0b0bf6f6ac":"9CekL","28192ac12e934672":"58zOi","a5f9c5d8e993ccd6":"kvmnR","57775908f1581bc6":"2sYlt"}],"kvmnR":[function(require,module,exports,__globalThis) {
'use strict';
var toIndexedObject = require("d5dcbcd68ac5acd0");
var toAbsoluteIndex = require("212b13aecfa48226");
var lengthOfArrayLike = require("e5a8b3e1da4c5637");
// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        if (length === 0) return !IS_INCLUDES && -1;
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare -- NaN check
        if (IS_INCLUDES && el !== el) while(length > index){
            value = O[index++];
            // eslint-disable-next-line no-self-compare -- NaN check
            if (value !== value) return true;
        // Array#indexOf ignores holes, Array#includes - not
        }
        else for(; length > index; index++){
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
    };
};
module.exports = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod(false)
};

},{"d5dcbcd68ac5acd0":"58zOi","212b13aecfa48226":"hMPua","e5a8b3e1da4c5637":"132UY"}],"hMPua":[function(require,module,exports,__globalThis) {
'use strict';
var toIntegerOrInfinity = require("72fe0a53ad43912c");
var max = Math.max;
var min = Math.min;
// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function(index, length) {
    var integer = toIntegerOrInfinity(index);
    return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

},{"72fe0a53ad43912c":"hfRnH"}],"hfRnH":[function(require,module,exports,__globalThis) {
'use strict';
var trunc = require("3403cba02b5f61d8");
// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function(argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : trunc(number);
};

},{"3403cba02b5f61d8":"bZw4A"}],"bZw4A":[function(require,module,exports,__globalThis) {
'use strict';
var ceil = Math.ceil;
var floor = Math.floor;
// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor : ceil)(n);
};

},{}],"132UY":[function(require,module,exports,__globalThis) {
'use strict';
var toLength = require("23d9716c54a2ab90");
// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function(obj) {
    return toLength(obj.length);
};

},{"23d9716c54a2ab90":"8PIfI"}],"8PIfI":[function(require,module,exports,__globalThis) {
'use strict';
var toIntegerOrInfinity = require("c48d3a8b8ac52b0b");
var min = Math.min;
// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function(argument) {
    var len = toIntegerOrInfinity(argument);
    return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

},{"c48d3a8b8ac52b0b":"hfRnH"}],"6IITF":[function(require,module,exports,__globalThis) {
'use strict';
// IE8- don't enum bug keys
module.exports = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf'
];

},{}],"5fq5o":[function(require,module,exports,__globalThis) {
'use strict';
// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;

},{}],"3rvW8":[function(require,module,exports,__globalThis) {
'use strict';
var fails = require("10299561ea0c7870");
var isCallable = require("8b1ecdaf59f07210");
var replacement = /#|\.prototype\./;
var isForced = function(feature, detection) {
    var value = data[normalize(feature)];
    return value === POLYFILL ? true : value === NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
};
var normalize = isForced.normalize = function(string) {
    return String(string).replace(replacement, '.').toLowerCase();
};
var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';
module.exports = isForced;

},{"10299561ea0c7870":"7Gv5z","8b1ecdaf59f07210":"2KfBB"}],"9fjiV":[function(require,module,exports,__globalThis) {
'use strict';
var globalThis = require("629a4d99f4fe5b2e");
var apply = require("e574be68c288c7c8");
var bind = require("df212787338802d3");
var isCallable = require("afdf018c2d01bbc6");
var hasOwn = require("35a3e849940fd612");
var fails = require("b8bf5434d2248ca7");
var html = require("731f9370cc21fc3b");
var arraySlice = require("ec358060964e4bde");
var createElement = require("907adb6d219da7a3");
var validateArgumentsLength = require("f398561ebd49a798");
var IS_IOS = require("8a8e342aaad83bb");
var IS_NODE = require("6eef8b4e43dd6731");
var set = globalThis.setImmediate;
var clear = globalThis.clearImmediate;
var process = globalThis.process;
var Dispatch = globalThis.Dispatch;
var Function = globalThis.Function;
var MessageChannel = globalThis.MessageChannel;
var String = globalThis.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var $location, defer, channel, port;
fails(function() {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    $location = globalThis.location;
});
var run = function(id) {
    if (hasOwn(queue, id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
    }
};
var runner = function(id) {
    return function() {
        run(id);
    };
};
var eventListener = function(event) {
    run(event.data);
};
var globalPostMessageDefer = function(id) {
    // old engines have not location.origin
    globalThis.postMessage(String(id), $location.protocol + '//' + $location.host);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
    set = function setImmediate(handler) {
        validateArgumentsLength(arguments.length, 1);
        var fn = isCallable(handler) ? handler : Function(handler);
        var args = arraySlice(arguments, 1);
        queue[++counter] = function() {
            apply(fn, undefined, args);
        };
        defer(counter);
        return counter;
    };
    clear = function clearImmediate(id) {
        delete queue[id];
    };
    // Node.js 0.8-
    if (IS_NODE) defer = function(id) {
        process.nextTick(runner(id));
    };
    else if (Dispatch && Dispatch.now) defer = function(id) {
        Dispatch.now(runner(id));
    };
    else if (MessageChannel && !IS_IOS) {
        channel = new MessageChannel();
        port = channel.port2;
        channel.port1.onmessage = eventListener;
        defer = bind(port.postMessage, port);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (globalThis.addEventListener && isCallable(globalThis.postMessage) && !globalThis.importScripts && $location && $location.protocol !== 'file:' && !fails(globalPostMessageDefer)) {
        defer = globalPostMessageDefer;
        globalThis.addEventListener('message', eventListener, false);
    // IE8-
    } else if (ONREADYSTATECHANGE in createElement('script')) defer = function(id) {
        html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run(id);
        };
    };
    else defer = function(id) {
        setTimeout(runner(id), 0);
    };
}
module.exports = {
    set: set,
    clear: clear
};

},{"629a4d99f4fe5b2e":"6xMjU","e574be68c288c7c8":"9A5Vw","df212787338802d3":"l8jub","afdf018c2d01bbc6":"2KfBB","35a3e849940fd612":"9CekL","b8bf5434d2248ca7":"7Gv5z","731f9370cc21fc3b":"2ac6V","ec358060964e4bde":"kGYHC","907adb6d219da7a3":"eF8HX","f398561ebd49a798":"elQJL","8a8e342aaad83bb":"9HLc7","6eef8b4e43dd6731":"3ENS9"}],"9A5Vw":[function(require,module,exports,__globalThis) {
'use strict';
var NATIVE_BIND = require("d07466971ded2aca");
var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;
// eslint-disable-next-line es/no-function-prototype-bind, es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function() {
    return call.apply(apply, arguments);
});

},{"d07466971ded2aca":"5U5xz"}],"l8jub":[function(require,module,exports,__globalThis) {
'use strict';
var uncurryThis = require("92f6f475baa85665");
var aCallable = require("547ee4f9dab0cc76");
var NATIVE_BIND = require("5acd31cba656d393");
var bind = uncurryThis(uncurryThis.bind);
// optional / simple context binding
module.exports = function(fn, that) {
    aCallable(fn);
    return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function() {
        return fn.apply(that, arguments);
    };
};

},{"92f6f475baa85665":"1401W","547ee4f9dab0cc76":"dxhWU","5acd31cba656d393":"5U5xz"}],"1401W":[function(require,module,exports,__globalThis) {
'use strict';
var classofRaw = require("8e77093015e1e67f");
var uncurryThis = require("9daa4dbbca634c9e");
module.exports = function(fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if (classofRaw(fn) === 'Function') return uncurryThis(fn);
};

},{"8e77093015e1e67f":"fKrQp","9daa4dbbca634c9e":"aAate"}],"2ac6V":[function(require,module,exports,__globalThis) {
'use strict';
var getBuiltIn = require("14cb391fa4a0dda8");
module.exports = getBuiltIn('document', 'documentElement');

},{"14cb391fa4a0dda8":"h2CMt"}],"kGYHC":[function(require,module,exports,__globalThis) {
'use strict';
var uncurryThis = require("5250b5c9324ccbe");
module.exports = uncurryThis([].slice);

},{"5250b5c9324ccbe":"aAate"}],"elQJL":[function(require,module,exports,__globalThis) {
'use strict';
var $TypeError = TypeError;
module.exports = function(passed, required) {
    if (passed < required) throw new $TypeError('Not enough arguments');
    return passed;
};

},{}],"9HLc7":[function(require,module,exports,__globalThis) {
'use strict';
var userAgent = require("88313d0d5d3e28c");
// eslint-disable-next-line redos/no-vulnerable -- safe
module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);

},{"88313d0d5d3e28c":"qxRHs"}],"3ENS9":[function(require,module,exports,__globalThis) {
'use strict';
var ENVIRONMENT = require("5fac34e3c4c0e043");
module.exports = ENVIRONMENT === 'NODE';

},{"5fac34e3c4c0e043":"k2Sud"}],"k2Sud":[function(require,module,exports,__globalThis) {
'use strict';
/* global Bun, Deno -- detection */ var globalThis = require("7dc361f46ecde901");
var userAgent = require("9f6e24ecbba66a9e");
var classof = require("a008a59fdc341842");
var userAgentStartsWith = function(string) {
    return userAgent.slice(0, string.length) === string;
};
module.exports = function() {
    if (userAgentStartsWith('Bun/')) return 'BUN';
    if (userAgentStartsWith('Cloudflare-Workers')) return 'CLOUDFLARE';
    if (userAgentStartsWith('Deno/')) return 'DENO';
    if (userAgentStartsWith('Node.js/')) return 'NODE';
    if (globalThis.Bun && typeof Bun.version == 'string') return 'BUN';
    if (globalThis.Deno && typeof Deno.version == 'object') return 'DENO';
    if (classof(globalThis.process) === 'process') return 'NODE';
    if (globalThis.window && globalThis.document) return 'BROWSER';
    return 'REST';
}();

},{"7dc361f46ecde901":"6xMjU","9f6e24ecbba66a9e":"qxRHs","a008a59fdc341842":"fKrQp"}],"cpv3g":[function(require,module,exports,__globalThis) {
'use strict';
var $ = require("33581c362196ed1f");
var globalThis = require("503bb555249cad41");
var setTask = require("4219ce460223bd08").set;
var schedulersFix = require("738dc378e6a94c64");
// https://github.com/oven-sh/bun/issues/1633
var setImmediate = globalThis.setImmediate ? schedulersFix(setTask, false) : setTask;
// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: globalThis.setImmediate !== setImmediate
}, {
    setImmediate: setImmediate
});

},{"33581c362196ed1f":"7Vckd","503bb555249cad41":"6xMjU","4219ce460223bd08":"9fjiV","738dc378e6a94c64":"fRRu2"}],"fRRu2":[function(require,module,exports,__globalThis) {
'use strict';
var globalThis = require("aa6765693e58a0fe");
var apply = require("a68ecfcbf29c46f6");
var isCallable = require("7087588d33667af2");
var ENVIRONMENT = require("864edee099e8affb");
var USER_AGENT = require("3a3a5a2cfab86f21");
var arraySlice = require("cff2c830bdea4f24");
var validateArgumentsLength = require("58a74f00cee1ac64");
var Function = globalThis.Function;
// dirty IE9- and Bun 0.3.0- checks
var WRAP = /MSIE .\./.test(USER_AGENT) || ENVIRONMENT === 'BUN' && function() {
    var version = globalThis.Bun.version.split('.');
    return version.length < 3 || version[0] === '0' && (version[1] < 3 || version[1] === '3' && version[2] === '0');
}();
// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
module.exports = function(scheduler, hasTimeArg) {
    var firstParamIndex = hasTimeArg ? 2 : 1;
    return WRAP ? function(handler, timeout /* , ...arguments */ ) {
        var boundArgs = validateArgumentsLength(arguments.length, 1) > firstParamIndex;
        var fn = isCallable(handler) ? handler : Function(handler);
        var params = boundArgs ? arraySlice(arguments, firstParamIndex) : [];
        var callback = boundArgs ? function() {
            apply(fn, this, params);
        } : fn;
        return hasTimeArg ? scheduler(callback, timeout) : scheduler(callback);
    } : scheduler;
};

},{"aa6765693e58a0fe":"6xMjU","a68ecfcbf29c46f6":"9A5Vw","7087588d33667af2":"2KfBB","864edee099e8affb":"k2Sud","3a3a5a2cfab86f21":"qxRHs","cff2c830bdea4f24":"kGYHC","58a74f00cee1ac64":"elQJL"}],"cfHEn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "loadRecipe", ()=>loadRecipe);
parcelHelpers.export(exports, "loadSearchResults", ()=>loadSearchResults);
parcelHelpers.export(exports, "getSearchResultsPage", ()=>getSearchResultsPage);
parcelHelpers.export(exports, "updateServings", ()=>updateServings);
parcelHelpers.export(exports, "addBookmark", ()=>addBookmark);
parcelHelpers.export(exports, "deleteBookmark", ()=>deleteBookmark);
parcelHelpers.export(exports, "uploadRecipe", ()=>uploadRecipe);
var _regeneratorRuntime = require("regenerator-runtime");
var _configJs = require("./config.js");
var _helpersJs = require("./helpers.js");
const state = {
    recipe: {},
    search: {
        query: '',
        results: [],
        page: 1,
        resultsPerPage: (0, _configJs.RES_PER_PAGE)
    },
    bookmarks: []
};
const createRecipeObject = function(data) {
    const { recipe } = data.data;
    return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        sourceUrl: recipe.source_url,
        image: recipe.image_url,
        servings: recipe.servings,
        cookingTime: recipe.cooking_time,
        ingredients: recipe.ingredients,
        ...recipe.key && {
            key: recipe.key
        }
    };
};
const loadRecipe = async function(id) {
    try {
        const data = await (0, _helpersJs.getJSON)(`${(0, _configJs.API_URL)}/${id}`);
        state.recipe = createRecipeObject(data);
        if (state.bookmarks.some((bookmark)=>bookmark.id === id)) state.recipe.bookmarked = true;
        else state.recipe.bookmarked = false;
    } catch (err) {
        // Temporary error handling
        console.error(`${err} \u{203C}\u{FE0F}\u{203C}\u{FE0F}`);
        throw err;
    }
};
const loadSearchResults = async function(query) {
    try {
        state.search.query = query;
        const data = await (0, _helpersJs.getJSON)(`${(0, _configJs.API_URL)}/?search=${query}`);
        console.log(data);
        state.search.results = data.data.recipes.map((rec)=>{
            return {
                id: rec.id,
                title: rec.title,
                publisher: rec.publisher,
                image: rec.image_url
            };
        });
        state.search.page = 1;
    } catch (err) {
        console.error(`${err} \u{203C}\u{FE0F}\u{203C}\u{FE0F}`);
        throw err;
    }
};
const getSearchResultsPage = function(page = state.search.page) {
    state.search.page = page;
    const start = (page - 1) * 10; // 0;
    const end = page * state.search.resultsPerPage; // 9;
    return state.search.results.slice(start, end);
};
const updateServings = function(newServings) {
    state.recipe.ingredients.forEach((ing)=>{
        ing.quantity = ing.quantity * newServings / state.recipe.servings;
    // newQt = oldQt * newServings / oldServings // 2 * 8 / 4 = 4
    });
    state.recipe.servings = newServings;
};
const persistBookmarks = function() {
    localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};
const addBookmark = function(recipe) {
    // Add bookmark
    state.bookmarks.push(recipe);
    // Mark current recipe as bookmarked
    if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
    persistBookmarks();
};
const deleteBookmark = function(id) {
    // Delete bookmark
    const index = state.bookmarks.findIndex((el)=>el.id === id);
    state.bookmarks.splice(index, 1);
    // Mark current recipe as NOT bookmarked
    if (id === state.recipe.id) state.recipe.bookmarked = false;
    persistBookmarks();
};
const init = function() {
    const storage = localStorage.getItem('bookmarks');
    if (storage) state.bookmarks = JSON.parse(storage);
};
init();
const clearBookmarks = function() {
    localStorage.clear('bookmarks');
};
const uploadRecipe = async function(newRecipe) {
    try {
        const ingredients = Object.entries(newRecipe).filter((entry)=>entry[0].startsWith('ingredient') && entry[1] !== '').map((ing)=>{
            const ingArr = ing[1].replaceAll(' ', '').split(',');
            if (ingArr.length !== 3) throw new Error('Wrong ingredient format! Please use the correct format :)');
            const [quantity, unit, description] = ingArr;
            return {
                quantity: quantity ? +quantity : null,
                unit,
                description
            };
        });
        const recipe = {
            title: newRecipe.title,
            source_url: newRecipe.sourceUrl,
            image_url: newRecipe.image,
            publisher: newRecipe.publisher,
            cooking_time: +newRecipe.cookingTime,
            servings: +newRecipe.servings,
            ingredients
        };
        const data = await (0, _helpersJs.sendJSON)(`${(0, _configJs.API_URL)}?key=${(0, _configJs.KEY)}`, recipe);
        state.recipe = createRecipeObject(data);
        addBookmark(state.recipe);
    } catch (err) {
        throw err;
    }
};

},{"regenerator-runtime":"f6ot0","./config.js":"7c2aR","./helpers.js":"2QjiY","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"f6ot0":[function(require,module,exports,__globalThis) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var runtime = function(exports) {
    "use strict";
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var defineProperty = Object.defineProperty || function(obj, key, desc) {
        obj[key] = desc.value;
    };
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        return obj[key];
    }
    try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
    } catch (err) {
        define = function(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        defineProperty(generator, "_invoke", {
            value: makeInvokeMethod(innerFn, self, context)
        });
        return generator;
    }
    exports.wrap = wrap;
    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};
    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function() {
        return this;
    });
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    defineProperty(Gp, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: true
    });
    defineProperty(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: true
    });
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function(genFun) {
        if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
    };
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
        return {
            __await: arg
        };
    };
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") reject(record.arg);
            else {
                var result = record.arg;
                var value = result.value;
                if (value && typeof value === "object" && hasOwn.call(value, "__await")) return PromiseImpl.resolve(value.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                });
                return PromiseImpl.resolve(value).then(function(unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                }, function(error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                });
            }
        }
        var previousPromise;
        function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        defineProperty(this, "_invoke", {
            value: enqueue
        });
    }
    defineIteratorMethods(AsyncIterator.prototype);
    define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
    });
    exports.AsyncIterator = AsyncIterator;
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
         : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    };
    function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
            if (state === GenStateExecuting) throw new Error("Generator is already running");
            if (state === GenStateCompleted) {
                if (method === "throw") throw arg;
                // Be forgiving, per GeneratorResume behavior specified since ES2015:
                // ES2015 spec, step 3: https://262.ecma-international.org/6.0/#sec-generatorresume
                // Latest spec, step 2: https://tc39.es/ecma262/#sec-generatorresume
                return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while(true){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if (context.method === "next") // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                    if (state === GenStateSuspendedStart) {
                        state = GenStateCompleted;
                        throw context.arg;
                    }
                    context.dispatchException(context.arg);
                } else if (context.method === "return") context.abrupt("return", context.arg);
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                } else if (record.type === "throw") {
                    state = GenStateCompleted;
                    // Dispatch the exception by looping back around to the
                    // context.dispatchException(context.arg) call above.
                    context.method = "throw";
                    context.arg = record.arg;
                }
            }
        };
    }
    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
        var methodName = context.method;
        var method = delegate.iterator[methodName];
        if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method, or a missing .next method, always terminate the
            // yield* loop.
            context.delegate = null;
            // Note: ["return"] must be used for ES3 parsing compatibility.
            if (methodName === "throw" && delegate.iterator["return"]) {
                // If the delegate iterator has a return method, give it a
                // chance to clean up.
                context.method = "return";
                context.arg = undefined;
                maybeInvokeDelegate(delegate, context);
                if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
            }
            if (methodName !== "return") {
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
        }
        if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;
            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;
            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
            }
        } else // Re-yield the result returned by the delegate method.
        return info;
        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
    }
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");
    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    define(Gp, iteratorSymbol, function() {
        return this;
    });
    define(Gp, "toString", function() {
        return "[object Generator]";
    });
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        if (1 in locs) entry.catchLoc = locs[1];
        if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
    }
    function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
    }
    exports.keys = function(val) {
        var object = Object(val);
        var keys = [];
        for(var key in object)keys.push(key);
        keys.reverse();
        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
            while(keys.length){
                var key = keys.pop();
                if (key in object) {
                    next.value = key;
                    next.done = false;
                    return next;
                }
            }
            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
        };
    };
    function values(iterable) {
        if (iterable != null) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if (typeof iterable.next === "function") return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next = function next() {
                    while(++i < iterable.length)if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                    }
                    next.value = undefined;
                    next.done = true;
                    return next;
                };
                return next.next = next;
            }
        }
        throw new TypeError(typeof iterable + " is not iterable");
    }
    exports.values = values;
    function doneResult() {
        return {
            value: undefined,
            done: true
        };
    }
    Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
                for(var name in this)// Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined;
            }
        },
        stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    context.method = "next";
                    context.arg = undefined;
                }
                return !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc");
                    var hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                    } else if (hasFinally) {
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else throw new Error("try statement without catch or finally");
                }
            }
        },
        abrupt: function(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
            }
            return this.complete(record);
        },
        complete: function(record, afterLoc) {
            if (record.type === "throw") throw record.arg;
            if (record.type === "break" || record.type === "continue") this.next = record.arg;
            else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
            } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
            return ContinueSentinel;
        },
        finish: function(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                }
            }
        },
        "catch": function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if (record.type === "throw") {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            };
            if (this.method === "next") // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
            return ContinueSentinel;
        }
    };
    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
}(// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
(0, module.exports));
try {
    regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, in modern engines
    // we can explicitly access globalThis. In older engines we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    if (typeof globalThis === "object") globalThis.regeneratorRuntime = runtime;
    else Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],"7c2aR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_URL", ()=>API_URL);
parcelHelpers.export(exports, "TIMEOUT_SEC", ()=>TIMEOUT_SEC);
parcelHelpers.export(exports, "RES_PER_PAGE", ()=>RES_PER_PAGE);
parcelHelpers.export(exports, "KEY", ()=>KEY);
parcelHelpers.export(exports, "MODAL_CLOSE_SEC", ()=>MODAL_CLOSE_SEC);
const API_URL = 'https://forkify-api.herokuapp.com/api/v2/recipes/';
const TIMEOUT_SEC = 10;
const RES_PER_PAGE = 10;
const KEY = 'a23e2a61-70e9-449d-b22e-6eb913d6bb7b';
const MODAL_CLOSE_SEC = 2.5;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"2QjiY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getJSON", ()=>getJSON);
parcelHelpers.export(exports, "sendJSON", ()=>sendJSON);
var _regeneratorRuntime = require("regenerator-runtime");
var _configJs = require("./config.js");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
const getJSON = async function(url) {
    try {
        const fetchPro = fetch(url);
        const res = await Promise.race([
            fetchPro,
            timeout((0, _configJs.TIMEOUT_SEC))
        ]);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        return data;
    } catch (err) {
        throw err;
    }
};
const sendJSON = async function(url, uploadData) {
    try {
        const fetchPro = fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(uploadData)
        });
        const res = await Promise.race([
            fetchPro,
            timeout((0, _configJs.TIMEOUT_SEC))
        ]);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        return data;
    } catch (err) {
        throw err;
    }
};

},{"regenerator-runtime":"f6ot0","./config.js":"7c2aR","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fLbry":[function(require,module,exports,__globalThis) {
// import icons from '../img/icons.svg'; // Parcel 1
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg"); // Parcel 2
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
// import Fraction from 'fractional';
// const { Fraction } = fraction;
class Fraction {
    constructor(numerator, denominator = 1){
        this.numerator = numerator;
        this.denominator = denominator;
        this.simplify();
    }
    simplify() {
        const gcd = (a, b)=>b ? gcd(b, a % b) : a;
        const divisor = gcd(this.numerator, this.denominator);
        this.numerator /= divisor;
        this.denominator /= divisor;
    }
    toString() {
        if (this.denominator === 1) return this.numerator.toString();
        return `${this.numerator}/${this.denominator}`;
    }
    static fromDecimal(decimal) {
        const tolerance = 1.0e-6;
        let h1 = 1, h2 = 0;
        let k1 = 0, k2 = 1;
        let b = decimal;
        do {
            const a = Math.floor(b);
            [h1, h2] = [
                a * h1 + h2,
                h1
            ];
            [k1, k2] = [
                a * k1 + k2,
                k1
            ];
            b = 1 / (b - a);
        }while (Math.abs(decimal - h1 / k1) > decimal * tolerance);
        return new Fraction(h1, k1);
    }
}
class RecipeView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector('.recipe');
    _errorMessage = 'We could not find this recipe. Please try another one!';
    _message = '';
    addHandlerRender(handler) {
        [
            'hashchange',
            'load'
        ].forEach((ev)=>window.addEventListener(ev, handler));
    }
    addHandlerUpdateServings(handler) {
        this._parentElement.addEventListener('click', function(e) {
            const btn = e.target.closest('.btn--update-servings');
            if (!btn) return;
            const { updateTo } = btn.dataset;
            if (+updateTo > 0) handler(+updateTo);
        });
    }
    addHandlerAddBookmark(handler) {
        this._parentElement.addEventListener('click', function(e) {
            const btn = e.target.closest('.btn--bookmark');
            if (!btn) return;
            handler();
        });
    }
    _generateMarkup() {
        return `
        <figure class="recipe__fig">
          <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${0, _iconsSvgDefault.default}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${0, _iconsSvgDefault.default}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings - 1}">
                <svg>
                  <use href="${0, _iconsSvgDefault.default}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings + 1}">
                <svg>
                  <use href="${0, _iconsSvgDefault.default}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated">
          </div>
          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${0, _iconsSvgDefault.default}#icon-bookmark${this._data.bookmarked ? '-fill' : ''}"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(this._generateMarkupIngredient).join('')}
            </ul>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this._data.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>`;
    }
    _generateMarkupIngredient(ing) {
        let quantityDisplay = '';
        if (ing.quantity) {
            if (ing.quantity % 1 !== 0 && ing.quantity <= 10) quantityDisplay = Fraction.fromDecimal(ing.quantity).toString();
            else quantityDisplay = ing.quantity.toString();
        }
        return `
      <li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${0, _iconsSvgDefault.default}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${quantityDisplay}</div>
      <div class="recipe__description">
        <span class="recipe__unit">${ing.unit}</span>
        ${ing.description}
      </div>
    </li>
  `;
    }
}
exports.default = new RecipeView();

},{"./View.js":"l0Asn","url:../../img/icons.svg":"apwnT","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"l0Asn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _array = require("core-js/./es/array");
var _iconsSvg = require("url:../../img/icons.svg"); // Parcel 2
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class View {
    _data;
    render(data, render = true) {
        if (!data || Array.isArray(data) && data.length === 0) return this.renderError();
        this._data = data;
        const markup = this._generateMarkup();
        if (!render) return markup;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    _clear() {
        this._parentElement.innerHTML = '';
    }
    renderSpinner() {
        const markup = `<div class="spinner">
                <svg>
                  <use href="${(0, _iconsSvgDefault.default)}#icon-loader"></use>
                </svg>
              </div> `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    renderError(message = this._errorMessage) {
        const markup = `<div class="error">
                <div>
                  <svg>
                    <use href="${(0, _iconsSvgDefault.default)}#icon-alert-triangle"></use>
                  </svg>
                </div>
                <p>${message}</p>
              </div>`;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    update(data) {
        this._data = data;
        const newMarkup = this._generateMarkup();
        const newDOM = document.createRange().createContextualFragment(newMarkup);
        const newElements = Array.from(newDOM.querySelectorAll('*'));
        const curElements = Array.from(this._parentElement.querySelectorAll('*'));
        // console.log(curElements);
        // console.log(newElements);
        newElements.forEach((newEl, i)=>{
            const curEl = curElements[i];
            // console.log(curEl, newEl.isEqualNode(curEl));
            // Updates changed TEXT
            if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== '') // console.log('🔴', newEl.firstChild.nodeValue.trim());
            curEl.textContent = newEl.textContent;
            // Updates changed ATTRIBUTES
            if (!newEl.isEqualNode(curEl)) Array.from(newEl.attributes).forEach((attr)=>curEl.setAttribute(attr.name, attr.value));
        });
    }
    renderMessage(message = this._message) {
        const markup = `<div class="message">
                <div>
                  <svg>
                    <use href="${(0, _iconsSvgDefault.default)}#icon-smile"></use>
                  </svg>
                </div>
                <p>${message}</p>
              </div>`;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
}
exports.default = View;

},{"core-js/./es/array":"lsVJH","url:../../img/icons.svg":"apwnT","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lsVJH":[function(require,module,exports,__globalThis) {
'use strict';
require("71f47728a852dc65");
require("dcbcdb9cac29c90c");
require("4a1ea0e09ce4ba46");
require("21cc0cbc7e69b50b");
require("2e04e88c2817a748");
require("99a8122dff9847ed");
require("394f35f89aaa8a05");
require("55d0b0ca3282e9d2");
require("fc7bcaf49c87c183");
require("be3ae7af9adffde6");
require("e131761a31f78a4c");
require("28ec1df4e9c292c3");
require("d479f73054d4400d");
require("4462fe92aface4a4");
require("1ea7418a63b9b7cb");
require("6ca78bd8b83b250f");
require("db0581f900c2b136");
require("5d3cdbb1147e0b57");
require("639b2d1f16a42728");
require("6b634049bad2ff0b");
require("22c2efa92a5f068e");
require("b1d256f05c381e96");
require("510671758de3b82d");
require("e6c61f9b6abcf331");
require("7af9c3e778586be1");
require("28a57dea6e2993d3");
require("8da037d0d7f480c2");
require("4108cd4747da26e6");
require("46c80ad9452d6fe3");
require("f39960a7fd66bb02");
require("434b713bd7f8d103");
require("45a98ae141e4c0fb");
require("8cdb1f7a32795ba6");
require("95a02c376ec4d7b5");
require("80d790595512527f");
require("1fed293b50c7fe18");
require("58ac11542a36ea97");
require("9a46604fb4a9b7ce");
require("98c1a284222ae6fa");
require("e22b7c6ab679ae14");
var path = require("4b183472d25d2c63");
module.exports = path.Array;

},{"71f47728a852dc65":"975Lr","dcbcdb9cac29c90c":"hREe0","4a1ea0e09ce4ba46":"3OuJw","21cc0cbc7e69b50b":"8DDnu","2e04e88c2817a748":"gbWzt","99a8122dff9847ed":"6ayrZ","394f35f89aaa8a05":"1Ywsb","55d0b0ca3282e9d2":"cP3D1","fc7bcaf49c87c183":"8kz83","be3ae7af9adffde6":"1GaUQ","e131761a31f78a4c":"1FEsQ","28ec1df4e9c292c3":"54m1u","d479f73054d4400d":"6cbQL","4462fe92aface4a4":"c0jcQ","1ea7418a63b9b7cb":"4R5cg","6ca78bd8b83b250f":"7Cjwm","db0581f900c2b136":"917Ww","5d3cdbb1147e0b57":"fG2L5","639b2d1f16a42728":"6mmeh","6b634049bad2ff0b":"8JHEf","22c2efa92a5f068e":"lUFiH","b1d256f05c381e96":"baMZZ","510671758de3b82d":"a0lIP","e6c61f9b6abcf331":"4HVyy","7af9c3e778586be1":"6bIdl","28a57dea6e2993d3":"5U5Ji","8da037d0d7f480c2":"lsq6d","4108cd4747da26e6":"3VnzD","46c80ad9452d6fe3":"jRe4W","f39960a7fd66bb02":"fNMr8","434b713bd7f8d103":"jjZcZ","45a98ae141e4c0fb":"2EN4C","8cdb1f7a32795ba6":"dIMP9","95a02c376ec4d7b5":"9Thjo","80d790595512527f":"k7bgQ","1fed293b50c7fe18":"wriv9","58ac11542a36ea97":"lilI6","9a46604fb4a9b7ce":"gAbUm","98c1a284222ae6fa":"421Yq","e22b7c6ab679ae14":"hFo4A","4b183472d25d2c63":"4Hv7q"}],"975Lr":[function(require,module,exports,__globalThis) {
'use strict';
var $ = require("76f1b3b688a029fa");
var from = require("55358907c05b685d");
var checkCorrectnessOfIteration = require("98fd99047e51c8be");
var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function(iterable) {
    // eslint-disable-next-line es/no-array-from -- required for testing
    Array.from(iterable);
});
// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({
    target: 'Array',
    stat: true,
    forced: INCORRECT_ITERATION
}, {
    from: from
});

},{"76f1b3b688a029fa":"7Vckd","55358907c05b685d":"kPH0A","98fd99047e51c8be":"5dTPS"}],"kPH0A":[function(require,module,exports,__globalThis) {
'use strict';
var bind = require("c006aee3ec90867f");
var call = require("bdaed06b86eeb767");
var toObject = require("ca05db7523b31410");
var callWithSafeIterationClosing = require("47fe223c8f6c2dd5");
var isArrayIteratorMethod = require("75eba7673a242ae6");
var isConstructor = require("188dc0b37c140076");
var lengthOfArrayLike = require("32c4effc8b33b2c2");
var createProperty = require("a6ed280c439df9d0");
var getIterator = require("3faaa09a63a90825");
var getIteratorMethod = require("13cbec27e4dd055f");
var $Array = Array;
// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */ ) {
    var O = toObject(arrayLike);
    var IS_CONSTRUCTOR = isConstructor(this);
    var argumentsLength = arguments.length;
    var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
    var iteratorMethod = getIteratorMethod(O);
    var index = 0;
    var length, result, step, iterator, next, value;
    // if the target is not iterable or it's an array with the default iterator - use a simple case
    if (iteratorMethod && !(this === $Array && isArrayIteratorMethod(iteratorMethod))) {
        result = IS_CONSTRUCTOR ? new this() : [];
        iterator = getIterator(O, iteratorMethod);
        next = iterator.next;
        for(; !(step = call(next, iterator)).done; index++){
            value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [
                step.value,
                index
            ], true) : step.value;
            createProperty(result, index, value);
        }
    } else {
        length = lengthOfArrayLike(O);
        result = IS_CONSTRUCTOR ? new this(length) : $Array(length);
        for(; length > index; index++){
            value = mapping ? mapfn(O[index], index) : O[index];
            createProperty(result, index, value);
        }
    }
    result.length = index;
    return result;
};

},{"c006aee3ec90867f":"l8jub","bdaed06b86eeb767":"3v9g9","ca05db7523b31410":"fTIhz","47fe223c8f6c2dd5":"c8RVm","75eba7673a242ae6":"1oPjO","188dc0b37c140076":"d16xX","32c4effc8b33b2c2":"132UY","a6ed280c439df9d0":"jErM3","3faaa09a63a90825":"epTEb","13cbec27e4dd055f":"7FZx1"}],"c8RVm":[function(require,module,exports,__globalThis) {
'use strict';
var anObject = require("4afbb4be48dcf066");
var iteratorClose = require("d24fa1ffea48fa52");
// call something on iterator step with safe closing on error
module.exports = function(iterator, fn, value, ENTRIES) {
    try {
        return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
    } catch (error) {
        iteratorClose(iterator, 'throw', error);
    }
};

},{"4afbb4be48dcf066":"jFjFb","d24fa1ffea48fa52":"gbeNz"}],"gbeNz":[function(require,module,exports,__globalThis) {
'use strict';
var call = require("a4a3a7d4a45c4219");
var anObject = require("feb876e7da2df7bd");
var getMethod = require("2e660cdfabd9c61f");
module.exports = function(iterator, kind, value) {
    var innerResult, innerError;
    anObject(iterator);
    try {
        innerResult = getMethod(iterator, 'return');
        if (!innerResult) {
            if (kind === 'throw') throw value;
            return value;
        }
        innerResult = call(innerResult, iterator);
    } catch (error) {
        innerError = true;
        innerResult = error;
    }
    if (kind === 'throw') throw value;
    if (innerError) throw innerResult;
    anObject(innerResult);
    return value;
};

},{"a4a3a7d4a45c4219":"3v9g9","feb876e7da2df7bd":"jFjFb","2e660cdfabd9c61f":"9TreM"}],"1oPjO":[function(require,module,exports,__globalThis) {
'use strict';
var wellKnownSymbol = require("85b004b6ab4bc5da");
var Iterators = require("6de391ad2976ca02");
var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;
// check on default Array iterator
module.exports = function(it) {
    return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};

},{"85b004b6ab4bc5da":"lzelE","6de391ad2976ca02":"avCQR"}],"avCQR":[function(require,module,exports,__globalThis) {
'use strict';
module.exports = {};

},{}],"d16xX":[function(require,module,exports,__globalThis) {
'use strict';
var uncurryThis = require("3b3e7fa8cfe4b3ac");
var fails = require("84df2127d2d40501");
var isCallable = require("ae35eceee587c4bc");
var classof = require("7bd40df22601ee7e");
var getBuiltIn = require("271ff92378cbc486");
var inspectSource = require("74840ba4357c1c30");
var noop = function() {};
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.test(noop);
var isConstructorModern = function isConstructor(argument) {
    if (!isCallable(argument)) return false;
    try {
        construct(noop, [], argument);
        return true;
    } catch (error) {
        return false;
    }
};
var isConstructorLegacy = function isConstructor(argument) {
    if (!isCallable(argument)) return false;
    switch(classof(argument)){
        case 'AsyncFunction':
        case 'GeneratorFunction':
        case 'AsyncGeneratorFunction':
            return false;
    }
    try {
        // we can't check .prototype since constructors produced by .bind haven't it
        // `Function#toString` throws on some built-it function in some legacy engines
        // (for example, `DOMQuad` and similar in FF41-)
        return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
    } catch (error) {
        return true;
    }
};
isConstructorLegacy.sham = true;
// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function() {
    var called;
    return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function() {
        called = true;
    }) || called;
}) ? isConstructorLegacy : isConstructorModern;

},{"3b3e7fa8cfe4b3ac":"aAate","84df2127d2d40501":"7Gv5z","ae35eceee587c4bc":"2KfBB","7bd40df22601ee7e":"9wxbZ","271ff92378cbc486":"h2CMt","74840ba4357c1c30":"aXOzF"}],"9wxbZ":[function(require,module,exports,__globalThis) {
'use strict';
var TO_STRING_TAG_SUPPORT = require("397e535b3976d304");
var isCallable = require("eebd8012c2d2c3ae");
var classofRaw = require("8da113eeaf06c4ba");
var wellKnownSymbol = require("df252844008f634");
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function() {
    return arguments;
}()) === 'Arguments';
// fallback for IE11 Script Access Denied error
var tryGet = function(it, key) {
    try {
        return it[key];
    } catch (error) {}
};
// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};

},{"397e535b3976d304":"8zC3R","eebd8012c2d2c3ae":"2KfBB","8da113eeaf06c4ba":"fKrQp","df252844008f634":"lzelE"}],"8zC3R":[function(require,module,exports,__globalThis) {
'use strict';
var wellKnownSymbol = require("6306cd4835715127");
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};
test[TO_STRING_TAG] = 'z';
module.exports = String(test) === '[object z]';

},{"6306cd4835715127":"lzelE"}],"jErM3":[function(require,module,exports,__globalThis) {
'use strict';
var DESCRIPTORS = require("667a2d5a858194a6");
var definePropertyModule = require("2daa2f41b7310fd4");
var createPropertyDescriptor = require("7bb9efd811e3f83f");
module.exports = function(object, key, value) {
    if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));
    else object[key] = value;
};

},{"667a2d5a858194a6":"5AxuF","2daa2f41b7310fd4":"aBGsi","7bb9efd811e3f83f":"dOb5l"}],"epTEb":[function(require,module,exports,__globalThis) {
'use strict';
var call = require("132ebf774107ae29");
var aCallable = require("e248489b4825ceb7");
var anObject = require("18a343d2ef625577");
var tryToString = require("7e576a1564cef99e");
var getIteratorMethod = require("4a7b0311be0471b2");
var $TypeError = TypeError;
module.exports = function(argument, usingIterator) {
    var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
    if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
    throw new $TypeError(tryToString(argument) + ' is not iterable');
};

},{"132ebf774107ae29":"3v9g9","e248489b4825ceb7":"dxhWU","18a343d2ef625577":"jFjFb","7e576a1564cef99e":"fPD2p","4a7b0311be0471b2":"7FZx1"}],"7FZx1":[function(require,module,exports,__globalThis) {
'use strict';
var classof = require("32d61dafd81dde78");
var getMethod = require("84e24a6ac7559d3a");
var isNullOrUndefined = require("f0707282c0d93eeb");
var Iterators = require("1c181d5c49efd5d1");
var wellKnownSymbol = require("d10d0e0ae49498c5");
var ITERATOR = wellKnownSymbol('iterator');
module.exports = function(it) {
    if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR) || getMethod(it, '@@iterator') || Iterators[classof(it)];
};

},{"32d61dafd81dde78":"9wxbZ","84e24a6ac7559d3a":"9TreM","f0707282c0d93eeb":"gHvvU","1c181d5c49efd5d1":"avCQR","d10d0e0ae49498c5":"lzelE"}],"5dTPS":[function(require,module,exports,__globalThis) {
'use strict';
var wellKnownSymbol = require("a5154de5c7fcf21e");
var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;
try {
    var called = 0;
    var iteratorWithReturn = {
        next: function() {
            return {
                done: !!called++
            };
        },
        'return': function() {
            SAFE_CLOSING = true;
        }
    };
    iteratorWithReturn[ITERATOR] = function() {
        return this;
    };
    // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
    Array.from(iteratorWithReturn, function() {
        throw 2;
    });
} catch (error) {}
module.exports = function(exec, SKIP_CLOSING) {
    try {
        if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
    } catch (error) {
        return false;
    } // workaround of old WebKit + `eval` bug
    var ITERATION_SUPPORT = false;
    try {
        var object = {};
        object[ITERATOR] = function() {
            return {
                next: function() {
                    return {
                        done: ITERATION_SUPPORT = true
                    };
                }
            };
        };
        exec(object);
    } catch (error) {}
    return ITERATION_SUPPORT;
};

},{"a5154de5c7fcf21e":"lzelE"}],"hREe0":[function(require,module,exports,__globalThis) {
'use strict';
var $ = require("e1a67b4aafecad9a");
var isArray = require("1fa49986380c79ad");
// `Array.isArray` method
// https://tc39.es/ecma262/#sec-array.isarray
$({
    target: 'Array',
    stat: true
}, {
    isArray: isArray
});

},{"e1a67b4aafecad9a":"7Vckd","1fa49986380c79ad":"1Vb8k"}],"1Vb8k":[function(require,module,exports,__globalThis) {
'use strict';
var classof = require("ccb261b2d73a4fca");
// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
    return classof(argument) === 'Array';
};

},{"ccb261b2d73a4fca":"fKrQp"}],"3OuJw":[function(require,module,exports,__globalThis) {
'use strict';
var $ = require("c49bbaeadf669473");
var fails = require("2b7c23018838f50");
var isConstructor = require("5ca03f92538fd001");
var createProperty = require("d87cf2a2bcbb5c2c");
var $Array = Array;
var ISNT_GENERIC = fails(function() {
    function F() {}
    // eslint-disable-next-line es/no-array-of -- safe
    return !($Array.of.call(F) instanceof F);
});
// `Array.of` method
// https://tc39.es/ecma262/#sec-array.of
// WebKit Array.of isn't generic
$({
    target: 'Array',
    stat: true,
    forced: ISNT_GENERIC
}, {
    of: function of() {
        var index = 0;
        var argumentsLength = arguments.length;
        var result = new (isConstructor(this) ? this : $Array)(argumentsLength);
        while(argumentsLength > index)createProperty(result, index, arguments[index++]);
        result.length = argumentsLength;
        return result;
    }
});

},{"c49bbaeadf669473":"7Vckd","2b7c23018838f50":"7Gv5z","5ca03f92538fd001":"d16xX","d87cf2a2bcbb5c2c":"jErM3"}],"8DDnu":[function(require,module,exports,__globalThis) {
'use strict';
var $ = require("17b6274b31efea6a");
var toObject = require("bd1f09a15df9c54b");
var lengthOfArrayLike = require("aeeef420262f9436");
var toIntegerOrInfinity = require("d3a5a5518b6afdf1");
var addToUnscopables = require("a3c99fc0a91390b5");
// `Array.prototype.at` method
// https://tc39.es/ecma262/#sec-array.prototype.at
$({
    target: 'Array',
    proto: true
}, {
    at: function at(index) {
        var O = toObject(this);
        var len = lengthOfArrayLike(O);
        var relativeIndex = toIntegerOrInfinity(index);
        var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
        return k < 0 || k >= len ? undefined : O[k];
    }
});
addToUnscopables('at');

},{"17b6274b31efea6a":"7Vckd","bd1f09a15df9c54b":"fTIhz","aeeef420262f9436":"132UY","d3a5a5518b6afdf1":"hfRnH","a3c99fc0a91390b5":"5ZvPT"}],"5ZvPT":[function(require,module,exports,__globalThis) {
'use strict';
var wellKnownSymbol = require("d4032cdcc50314e7");
var create = require("3ca2a6909ac2dcef");
var defineProperty = require("545ab457bf71d338").f;
var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;
// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] === undefined) defineProperty(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
});
// add a key to Array.prototype[@@unscopables]
module.exports = function(key) {
    ArrayPrototype[UNSCOPABLES][key] = true;
};

},{"d4032cdcc50314e7":"lzelE","3ca2a6909ac2dcef":"lwgUm","545ab457bf71d338":"aBGsi"}],"lwgUm":[function(require,module,exports,__globalThis) {
'use strict';
/* global ActiveXObject -- old IE, WSH */ var anObject = require("3bbe31d8f504111f");
var definePropertiesModule = require("a9712f03fc468b49");
var enumBugKeys = require("d9e0c389f84efa79");
var hiddenKeys = require("8a43b6a211717cde");
var html = require("78d31e3a50d79c6e");
var documentCreateElement = require("e29f7e32a0583f3");
var sharedKey = require("a6edaba97f293fc9");
var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');
var EmptyConstructor = function() {};
var scriptTag = function(content) {
    return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};
// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function(activeXDocument) {
    activeXDocument.write(scriptTag(''));
    activeXDocument.close();
    var temp = activeXDocument.parentWindow.Object;
    // eslint-disable-next-line no-useless-assignment -- avoid memory leak
    activeXDocument = null;
    return temp;
};
// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function() {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = documentCreateElement('iframe');
    var JS = 'java' + SCRIPT + ':';
    var iframeDocument;
    iframe.style.display = 'none';
    html.appendChild(iframe);
    // https://github.com/zloirock/core-js/issues/475
    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag('document.F=Object'));
    iframeDocument.close();
    return iframeDocument.F;
};
// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function() {
    try {
        activeXDocument = new ActiveXObject('htmlfile');
    } catch (error) {}
    NullProtoObject = typeof document != 'undefined' ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) // old IE
     : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument); // WSH
    var length = enumBugKeys.length;
    while(length--)delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
    return NullProtoObject();
};
hiddenKeys[IE_PROTO] = true;
// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
        EmptyConstructor[PROTOTYPE] = anObject(O);
        result = new EmptyConstructor();
        EmptyConstructor[PROTOTYPE] = null;
        // add "__proto__" for Object.getPrototypeOf polyfill
        result[IE_PROTO] = O;
    } else result = NullProtoObject();
    return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};

},{"3bbe31d8f504111f":"jFjFb","a9712f03fc468b49":"gMCSC","d9e0c389f84efa79":"6IITF","8a43b6a211717cde":"2sYlt","78d31e3a50d79c6e":"2ac6V","e29f7e32a0583f3":"eF8HX","a6edaba97f293fc9":"fDnL8"}],"gMCSC":[function(require,module,exports,__globalThis) {
'use strict';
var DESCRIPTORS = require("aa39c539d0a1ec3f");
var V8_PROTOTYPE_DEFINE_BUG = require("2e9118dcee7eb93e");
var definePropertyModule = require("d88f5f00164c2da2");
var anObject = require("12ac356c5e06e57d");
var toIndexedObject = require("3cbdc44082c2f8b8");
var objectKeys = require("634da70e74fce29b");
// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject(O);
    var props = toIndexedObject(Properties);
    var keys = objectKeys(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while(length > index)definePropertyModule.f(O, key = keys[index++], props[key]);
    return O;
};

},{"aa39c539d0a1ec3f":"5AxuF","2e9118dcee7eb93e":"8Gm1h","d88f5f00164c2da2":"aBGsi","12ac356c5e06e57d":"jFjFb","3cbdc44082c2f8b8":"58zOi","634da70e74fce29b":"1L9aK"}],"1L9aK":[function(require,module,exports,__globalThis) {
'use strict';
var internalObjectKeys = require("fb982c683f43ec98");
var enumBugKeys = require("7cabc30df1982d48");
// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
    return internalObjectKeys(O, enumBugKeys);
};

},{"fb982c683f43ec98":"gRwJ4","7cabc30df1982d48":"6IITF"}],"gbWzt":[function(require,module,exports,__globalThis) {
'use strict';
var $ = require("ae9bcc3c886d2e43");
var fails = require("320b7f8f99977d72");
var isArray = require("c9c4d35908c64a9b");
var isObject = require("e40ffb4fd8cdd6ef");
var toObject = require("600c6b55241cb08d");
var lengthOfArrayLike = require("c35064fc908d412e");
var doesNotExceedSafeInteger = require("d3e233a6dd5508d7");
var createProperty = require("4da7fb5e70719532");
var arraySpeciesCreate = require("706ee6e3130d3c44");
var arrayMethodHasSpeciesSupport = require("76c3a5d37e98bd2f");
var wellKnownSymbol = require("210a9ec1468bd8f4");
var V8_VERSION = require("64448af9c74a3ff5");
var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function() {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
});
var isConcatSpreadable = function(O) {
    if (!isObject(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray(O);
};
var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport('concat');
// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({
    target: 'Array',
    proto: true,
    arity: 1,
    forced: FORCED
}, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    concat: function concat(arg) {
        var O = toObject(this);
        var A = arraySpeciesCreate(O, 0);
        var n = 0;
        var i, k, length, len, E;
        for(i = -1, length = arguments.length; i < length; i++){
            E = i === -1 ? O : arguments[i];
            if (isConcatSpreadable(E)) {
                len = lengthOfArrayLike(E);
                doesNotExceedSafeInteger(n + len);
                for(k = 0; k < len; k++, n++)if (k in E) createProperty(A, n, E[k]);
            } else {
                doesNotExceedSafeInteger(n + 1);
                createProperty(A, n++, E);
            }
        }
        A.length = n;
        return A;
    }
});

},{"ae9bcc3c886d2e43":"7Vckd","320b7f8f99977d72":"7Gv5z","c9c4d35908c64a9b":"1Vb8k","e40ffb4fd8cdd6ef":"5rTge","600c6b55241cb08d":"fTIhz","c35064fc908d412e":"132UY","d3e233a6dd5508d7":"jSgtt","4da7fb5e70719532":"jErM3","706ee6e3130d3c44":"9ngUA","76c3a5d37e98bd2f":"j0bSz","210a9ec1468bd8f4":"lzelE","64448af9c74a3ff5":"cePh9"}],"jSgtt":[function(require,module,exports,__globalThis) {
'use strict';
var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991
module.exports = function(it) {
    if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
    return it;
};

},{}],"9ngUA":[function(require,module,exports,__globalThis) {
'use strict';
var arraySpeciesConstructor = require("4580767bbbe40f0b");
// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function(originalArray, length) {
    return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};

},{"4580767bbbe40f0b":"8yYp7"}],"8yYp7":[function(require,module,exports,__globalThis) {
'use strict';
var isArray = require("a9e5b9af57e551f6");
var isConstructor = require("2b4d84c184e08f4f");
var isObject = require("f4bec83e8d6008c9");
var wellKnownSymbol = require("4a13cf47b259a825");
var SPECIES = wellKnownSymbol('species');
var $Array = Array;
// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function(originalArray) {
    var C;
    if (isArray(originalArray)) {
        C = originalArray.constructor;
        // cross-realm fallback
        if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;
        else if (isObject(C)) {
            C = C[SPECIES];
            if (C === null) C = undefined;
        }
    }
    return C === undefined ? $Array : C;
};

},{"a9e5b9af57e551f6":"1Vb8k","2b4d84c184e08f4f":"d16xX","f4bec83e8d6008c9":"5rTge","4a13cf47b259a825":"lzelE"}],"j0bSz":[function(require,module,exports,__globalThis) {
'use strict';
var fails = require("bbe4de7ca7a1c6be");
var wellKnownSymbol = require("6cb3e4ca309911dc");
var V8_VERSION = require("4d1dd9e6baf7a81f");
var SPECIES = wellKnownSymbol('species');
module.exports = function(METHOD_NAME) {
    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/677
    return V8_VERSION >= 51 || !fails(function() {
        var array = [];
        var constructor = array.constructor = {};
        constructor[SPECIES] = function() {
            return {
                foo: 1
            };
        };
        return array[METHOD_NAME](Boolean).foo !== 1;
    });
};

},{"bbe4de7ca7a1c6be":"7Gv5z","6cb3e4ca309911dc":"lzelE","4d1dd9e6baf7a81f":"cePh9"}],"6ayrZ":[function(require,module,exports,__globalThis) {
'use strict';
var $ = require("4890937a7e7c636b");
var copyWithin = require("7256897b95da01b3");
var addToUnscopables = require("4c4cc4b0d9ea98ec");
// `Array.prototype.copyWithin` method
// https://tc39.es/ecma262/#sec-array.prototype.copywithin
$({
    target: 'Array',
    proto: true
}, {
    copyWithin: copyWithin
});
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('copyWithin');

},{"4890937a7e7c636b":"7Vckd","7256897b95da01b3":"4QGy9","4c4cc4b0d9ea98ec":"5ZvPT"}],"4QGy9":[function(require,module,exports,__globalThis) {
'use strict';
var toObject = require("67e19c72f7fbebd0");
var toAbsoluteIndex = require("5063d303bf924d87");
var lengthOfArrayLike = require("e3d01b6d6197aedd");
var deletePropertyOrThrow = require("6ffaf2643c0abf62");
var min = Math.min;
// `Array.prototype.copyWithin` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.copywithin
// eslint-disable-next-line es/no-array-prototype-copywithin -- safe
module.exports = [].copyWithin || function copyWithin(target /* = 0 */ , start /* = 0, end = @length */ ) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var to = toAbsoluteIndex(target, len);
    var from = toAbsoluteIndex(start, len);
    var end = arguments.length > 2 ? arguments[2] : undefined;
    var count = min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
    var inc = 1;
    if (from < to && to < from + count) {
        inc = -1;
        from += count - 1;
        to += count - 1;
    }
    while(count-- > 0){
        if (from in O) O[to] = O[from];
        else deletePropertyOrThrow(O, to);
        to += inc;
        from += inc;
    }
    return O;
};

},{"67e19c72f7fbebd0":"fTIhz","5063d303bf924d87":"hMPua","e3d01b6d6197aedd":"132UY","6ffaf2643c0abf62":"9C6cF"}],"9C6cF":[function(require,module,exports,__globalThis) {
'use strict';
var tryToString = require("49f65044bb4dad7f");
var $TypeError = TypeError;
module.exports = function(O, P) {
    if (!delete O[P]) throw new $TypeError('Cannot delete property ' + tryToString(P) + ' of ' + tryToString(O));
};

},{"49f65044bb4dad7f":"fPD2p"}],"1Ywsb":[function(require,module,exports,__globalThis) {
'use strict';
var $ = require("c1238b63d9c8719e");
var $every = require("f6644a21f0f5983").every;
var arrayMethodIsStrict = require("8bc22f42d8ee353c");
var STRICT_METHOD = arrayMethodIsStrict('every');
// `Array.prototype.every` method
// https://tc39.es/ecma262/#sec-array.prototype.every
$({
    target: 'Array',
    proto: true,
    forced: !STRICT_METHOD
}, {
    every: function every(callbackfn /* , thisArg */ ) {
        return $every(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
});

},{"c1238b63d9c8719e":"7Vckd","f6644a21f0f5983":"gBJqJ","8bc22f42d8ee353c":"fBCiF"}],"gBJqJ":[function(require,module,exports,__globalThis) {
'use strict';
var bind = require("13e0747865316a42");
var uncurryThis = require("99224cc18a4a792e");
var IndexedObject = require("57aaeabd9d30911");
var toObject = require("3acffc809f3b03fb");
var lengthOfArrayLike = require("1fc4c4e55871562c");
var arraySpeciesCreate = require("76c922b575fbf7bd");
var push = uncurryThis([].push);
// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function(TYPE) {
    var IS_MAP = TYPE === 1;
    var IS_FILTER = TYPE === 2;
    var IS_SOME = TYPE === 3;
    var IS_EVERY = TYPE === 4;
    var IS_FIND_INDEX = TYPE === 6;
    var IS_FILTER_REJECT = TYPE === 7;
    var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
    return function($this, callbackfn, that, specificCreate) {
        var O = toObject($this);
        var self = IndexedObject(O);
        var length = lengthOfArrayLike(self);
        var boundFunction = bind(callbackfn, that);
        var index = 0;
        var create = specificCreate || arraySpeciesCreate;
        var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
        var value, result;
        for(; length > index; index++)if (NO_HOLES || index in self) {
            value = self[index];
            result = boundFunction(value, index, O);
            if (TYPE) {
                if (IS_MAP) target[index] = result; // map
                else if (result) switch(TYPE){
                    case 3:
                        return true; // some
                    case 5:
                        return value; // find
                    case 6:
                        return index; // findIndex
                    case 2:
                        push(target, value); // filter
                }
                else switch(TYPE){
                    case 4:
                        return false; // every
                    case 7:
                        push(target, value); // filterReject
                }
            }
        }
        return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
    };
};
module.exports = {
    // `Array.prototype.forEach` method
    // https://tc39.es/ecma262/#sec-array.prototype.foreach
    forEach: createMethod(0),
    // `Array.prototype.map` method
    // https://tc39.es/ecma262/#sec-array.prototype.map
    map: createMethod(1),
    // `Array.prototype.filter` method
    // https://tc39.es/ecma262/#sec-array.prototype.filter
    filter: createMethod(2),
    // `Array.prototype.some` method
    // https://tc39.es/ecma262/#sec-array.prototype.some
    some: createMethod(3),
    // `Array.prototype.every` method
    // https://tc39.es/ecma262/#sec-array.prototype.every
    every: createMethod(4),
    // `Array.prototype.find` method
    // https://tc39.es/ecma262/#sec-array.prototype.find
    find: createMethod(5),
    // `Array.prototype.findIndex` method
    // https://tc39.es/ecma262/#sec-array.prototype.findIndex
    findIndex: createMethod(6),
    // `Array.prototype.filterReject` method
    // https://github.com/tc39/proposal-array-filtering
    filterReject: createMethod(7)
};

},{"13e0747865316a42":"l8jub","99224cc18a4a792e":"aAate","57aaeabd9d30911":"gXe04","3acffc809f3b03fb":"fTIhz","1fc4c4e55871562c":"132UY","76c922b575fbf7bd":"9ngUA"}],"fBCiF":[function(require,module,exports,__globalThis) {
'use strict';
var fails = require("77f0d106558781f");
module.exports = function(METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !!method && fails(function() {
        // eslint-disable-next-line no-useless-call -- required for testing
        method.call(null, argument || function() {
            return 1;
        }, 1);
    });
};

},{"77f0d106558781f":"7Gv5z"}],"cP3D1":[function(require,module,exports,__globalThis) {
'use strict';
var $ = require("52cb142d804aabd3");
var fill = require("daf335b8230cfcc7");
var addToUnscopables = require("3e31c661bed82a2d");
// `Array.prototype.fill` method
// https://tc39.es/ecma262/#sec-array.prototype.fill
$({
    target: 'Array',
    proto: true
}, {
    fill: fill
});
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('fill');

},{"52cb142d804aabd3":"7Vckd","daf335b8230cfcc7":"9IcQ8","3e31c661bed82a2d":"5ZvPT"}],"9IcQ8":[function(require,module,exports,__globalThis) {
'use strict';
var toObject = require("45e35cf118865951");
var toAbsoluteIndex = require("ae17acf5d72570ed");
var lengthOfArrayLike = require("94aaef7256431b15");
// `Array.prototype.fill` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.fill
module.exports = function fill(value /* , start = 0, end = @length */ ) {
    var O = toObject(this);
    var length = lengthOfArrayLike(O);
    var argumentsLength = arguments.length;
    var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
    var end = argumentsLength > 2 ? arguments[2] : undefined;
    var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
    while(endPos > index)O[index++] = value;
    return O;
};

},{"45e35cf118865951":"fTIhz","ae17acf5d72570ed":"hMPua","94aaef7256431b15":"132UY"}],"8kz83":[function(require,module,exports,__globalThis) {
'use strict';
var $ = require("a465bc55e057d26f");
var $filter = require("fa9926c68c33923f").filter;
var arrayMethodHasSpeciesSupport = require("9232c94be2f9c639");
var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT
}, {
    filter: function filter(callbackfn /* , thisArg */ ) {
        return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
});

},{"a465bc55e057d26f":"7Vckd","fa9926c68c33923f":"gBJqJ","9232c94be2f9c639":"j0bSz"}],"1GaUQ":[function(require,module,exports,__globalThis) {
'use strict';
var $ = require("a6cb3a492b52d21c");
var $find = require("ad97e1511b32e588").find;
var addToUnscopables = require("62fd950aac3d5249");
var FIND = 'find';
var SKIPS_HOLES = true;
// Shouldn't skip holes
// eslint-disable-next-line es/no-array-prototype-find -- testing
if (FIND in []) Array(1)[FIND](function() {
    SKIPS_HOLES = false;
});
// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({
    target: 'Array',
    proto: true,
    forced: SKIPS_HOLES
}, {
    find: function find(callbackfn /* , that = undefined */ ) {
        return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
});
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);

},{"a6cb3a492b52d21c":"7Vckd","ad97e1511b32e588":"gBJqJ","62fd950aac3d5249":"5ZvPT"}],"1FEsQ":[function(require,module,exports,__globalThis) {
'use strict';
var $ = require("dcce3e96aeb32c26");
var $findIndex = require("25f2fe0b92321096").findIndex;
var addToUnscopables = require("1c93cc746ac8ffb1");
var FIND_INDEX = 'findIndex';
var SKIPS_HOLES = true;
// Shouldn't skip holes
// eslint-disable-next-line es/no-array-prototype-findindex -- testing
if (FIND_INDEX in []) Array(1)[FIND_INDEX](function() {
    SKIPS_HOLES = false;
});
// `Array.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findindex
$({
    target: 'Array',
    proto: true,
    forced: SKIPS_HOLES
}, {
    findIndex: function findIndex(callbackfn /* , that = undefined */ ) {
        return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
});
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND_INDEX);

},{"dcce3e96aeb32c26":"7Vckd","25f2fe0b92321096":"gBJqJ","1c93cc746ac8ffb1":"5ZvPT"}],"54m1u":[function(require,module,exports,__globalThis) {
'use strict';
var $ = require("7c9570dd28371e00");
var $findLast = require("43d20d51fd072b05").findLast;
var addToUnscopables = require("8c5f13eb9efbfd84");
// `Array.prototype.findLast` method
// https://tc39.es/ecma262/#sec-array.prototype.findlast
$({
    target: 'Array',
    proto: true
}, {
    findLast: function findLast(callbackfn /* , that = undefined */ ) {
        return $findLast(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
});
addToUnscopables('findLast');

},{"7c9570dd28371e00":"7Vckd","43d20d51fd072b05":"8xVwx","8c5f13eb9efbfd84":"5ZvPT"}],"8xVwx":[function(require,module,exports,__globalThis) {
'use strict';
var bind = require("c1d87d2297f1acca");
var IndexedObject = require("e5df4a29c897e724");
var toObject = require("42c314ae435e3665");
var lengthOfArrayLike = require("a64fff03b4e929f6");
// `Array.prototype.{ findLast, findLastIndex }` methods implementation
var createMethod = function(TYPE) {
    var IS_FIND_LAST_INDEX = TYPE === 1;
    return function($this, callbackfn, that) {
        var O = toObject($this);
        var self = IndexedObject(O);
        var index = lengthOfArrayLike(self);
        var boundFunction = bind(callbackfn, that);
        var value, result;
        while(index-- > 0){
            value = self[index];
            result = boundFunction(value, index, O);
            if (result) switch(TYPE){
                case 0:
                    return value; // findLast
                case 1:
                    return index; // findLastIndex
            }
        }
        return IS_FIND_LAST_INDEX ? -1 : undefined;
    };
};
module.exports = {
    // `Array.prototype.findLast` method
    // https://github.com/tc39/proposal-array-find-from-last
    findLast: createMethod(0),
    // `Array.prototype.findLastIndex` method
    // https://github.com/tc39/proposal-array-find-from-last
    findLastIndex: createMethod(1)
};

},{"c1d87d2297f1acca":"l8jub","e5df4a29c897e724":"gXe04","42c314ae435e3665":"fTIhz","a64fff03b4e929f6":"132UY"}],"6cbQL":[function(require,module,exports,__globalThis) {
'use strict';
var $ = require("bba50227ea399df7");
var $findLastIndex = require("c196d65aab15955b").findLastIndex;
var addToUnscopables = require("5f02d29251865622");
// `Array.prototype.findLastIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findlastindex
$({
    target: 'Array',
    proto: true
}, {
    findLastIndex: function findLastIndex(callbackfn /* , that = undefined */ ) {
        return $findLastIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
});
addToUnscopables('findLastIndex');

},{"bba50227ea399df7":"7Vckd","c196d65aab15955b":"8xVwx","5f02d29251865622":"5ZvPT"}],"c0jcQ":[function(require,module,exports,__globalThis) {
'use strict';
var $ = require("eea83811f9bf5b44");
var flattenIntoArray = require("d9157408980dcae4");
var toObject = require("1603b1d7d71c6d78");
var lengthOfArrayLike = require("95d7017c9e9cedeb");
var toIntegerOrInfinity = require("9b0770c8bd20c0f9");
var arraySpeciesCreate = require("4c36764bcb49234f");
// `Array.prototype.flat` method
// https://tc39.es/ecma262/#sec-array.prototype.flat
$({
    target: 'Array',
    proto: true
}, {
    flat: function flat() {
        var depthArg = arguments.length ? arguments[0] : undefined;
        var O = toObject(this);
        var sourceLen = lengthOfArrayLike(O);
        var A = arraySpeciesCreate(O, 0);
        A.length = flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toIntegerOrInfinity(depthArg));
        return A;
    }
});

},{"eea83811f9bf5b44":"7Vckd","d9157408980dcae4":"bW16R","1603b1d7d71c6d78":"fTIhz","95d7017c9e9cedeb":"132UY","9b0770c8bd20c0f9":"hfRnH","4c36764bcb49234f":"9ngUA"}],"bW16R":[function(require,module,exports,__globalThis) {
'use strict';
var isArray = require("ebb82f00ac94e25c");
var lengthOfArrayLike = require("d2ce61b77ec49b3f");
var doesNotExceedSafeInteger = require("d3f4210cd620e3d6");
var bind = require("a7c8b8651480c6c9");
// `FlattenIntoArray` abstract operation
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var flattenIntoArray = function(target, original, source, sourceLen, start, depth, mapper, thisArg) {
    var targetIndex = start;
    var sourceIndex = 0;
    var mapFn = mapper ? bind(mapper, thisArg) : false;
    var element, elementLen;
    while(sourceIndex < sourceLen){
        if (sourceIndex in source) {
            element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];
            if (depth > 0 && isArray(element)) {
                elementLen = lengthOfArrayLike(element);
                targetIndex = flattenIntoArray(target, original, element, elementLen, targetIndex, depth - 1) - 1;
            } else {
                doesNotExceedSafeInteger(targetIndex + 1);
                target[targetIndex] = element;
            }
            targetIndex++;
        }
        sourceIndex++;
    }
    return targetIndex;
};
module.exports = flattenIntoArray;

},{"ebb82f00ac94e25c":"1Vb8k","d2ce61b77ec49b3f":"132UY","d3f4210cd620e3d6":"jSgtt","a7c8b8651480c6c9":"l8jub"}],"4R5cg":[function(require,module,exports,__globalThis) {
'use strict';
var $ = require("e4ee3b9d2bc1ffb2");
var flattenIntoArray = require("378c1e23131cdaae");
var aCallable = require("74e7f70118e2a778");
var toObject = require("1a2d0561d09775b8");
var lengthOfArrayLike = require("f7bbb0ab5ee7446c");
var arraySpeciesCreate = require("51d35c0066e59cdb");
// `Array.prototype.flatMap` method
// https://tc39.es/ecma262/#sec-array.prototype.flatmap
$({
    target: 'Array',
    proto: true
}, {
    flatMap: function flatMap(callbackfn /* , thisArg */ ) {
        var O = toObject(this);
        var sourceLen = lengthOfArrayLike(O);
        var A;
        aCallable(callbackfn);
        A = arraySpeciesCreate(O, 0);
        A.length = flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        return A;
    }
});

},{"e4ee3b9d2bc1ffb2":"7Vckd","378c1e23131cdaae":"bW16R","74e7f70118e2a778":"dxhWU","1a2d0561d09775b8":"fTIhz","f7bbb0ab5ee7446c":"132UY","51d35c0066e59cdb":"9ngUA"}],"7Cjwm":[function(require,module,exports,__globalThis) {
'use strict';
var $ = require("214b5a111591d046");
var forEach = require("658aa5ae0eee38b0");
// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
$({
    target: 'Array',
    proto: true,
    forced: [].forEach !== forEach
}, {
    forEach: forEach
});

},{"214b5a111591d046":"7Vckd","658aa5ae0eee38b0":"gqgFI"}],"gqgFI":[function(require,module,exports,__globalThis) {
'use strict';
var $forEach = require("1a0535b754110eb5").forEach;
var arrayMethodIsStrict = require("df61bc1b7a92de0f");
var STRICT_METHOD = arrayMethodIsStrict('forEach');
// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */ ) {
    return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;

},{"1a0535b754110eb5":"gBJqJ","df61bc1b7a92de0f":"fBCiF"}],"917Ww":[function(require,module,exports,__globalThis) {
'use strict';
var $ = require("ffa5d46bdab873f9");
var $includes = require("abe71b6f5a2c149").includes;
var fails = require("119354898116a770");
var addToUnscopables = require("9a828f869e1adf81");
// FF99+ bug
var BROKEN_ON_SPARSE = fails(function() {
    // eslint-disable-next-line es/no-array-prototype-includes -- detection
    return !Array(1).includes();
});
// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({
    target: 'Array',
    proto: true,
    forced: BROKEN_ON_SPARSE
}, {
    includes: function includes(el /* , fromIndex = 0 */ ) {
        return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
});
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');

},{"ffa5d46bdab873f9":"7Vckd","abe71b6f5a2c149":"kvmnR","119354898116a770":"7Gv5z","9a828f869e1adf81":"5ZvPT"}],"fG2L5":[function(require,module,exports,__globalThis) {
'use strict';
/* eslint-disable es/no-array-prototype-indexof -- required for testing */ var $ = require("9d4bf984c01e8ef7");
var uncurryThis = require("ff94ec157dbe45f");
var $indexOf = require("84db9b100b66a9f4").indexOf;
var arrayMethodIsStrict = require("928c12f9f760e965");
var nativeIndexOf = uncurryThis([].indexOf);
var NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([
    1
], 1, -0) < 0;
var FORCED = NEGATIVE_ZERO || !arrayMethodIsStrict('indexOf');
// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$({
    target: 'Array',
    proto: true,
    forced: FORCED
}, {
    indexOf: function indexOf(searchElement /* , fromIndex = 0 */ ) {
        var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
        return NEGATIVE_ZERO ? nativeIndexOf(this, searchElement, fromIndex) || 0 : $indexOf(this, searchElement, fromIndex);
    }
});

},{"9d4bf984c01e8ef7":"7Vckd","ff94ec157dbe45f":"1401W","84db9b100b66a9f4":"kvmnR","928c12f9f760e965":"fBCiF"}],"6mmeh":[function(require,module,exports,__globalThis) {
'use strict';
var toIndexedObject = require("c8e067881939a0cb");
var addToUnscopables = require("275b8f0cb65b77aa");
var Iterators = require("21f4d3653c90f049");
var InternalStateModule = require("85efa8d5848315f6");
var defineProperty = require("94a17682acfdceb4").f;
var defineIterator = require("bb30bdef31147b17");
var createIterResultObject = require("d8384af5151f994c");
var IS_PURE = require("fdcc207797f592fe");
var DESCRIPTORS = require("11e42ff2bbda8d0a");
var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);
// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function(iterated, kind) {
    setInternalState(this, {
        type: ARRAY_ITERATOR,
        target: toIndexedObject(iterated),
        index: 0,
        kind: kind // kind
    });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function() {
    var state = getInternalState(this);
    var target = state.target;
    var index = state.index++;
    if (!target || index >= target.length) {
        state.target = null;
        return createIterResultObject(undefined, true);
    }
    switch(state.kind){
        case 'keys':
            return createIterResultObject(index, false);
        case 'values':
            return createIterResultObject(target[index], false);
    }
    return createIterResultObject([
        index,
        target[index]
    ], false);
}, 'values');
// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators.Arguments = Iterators.Array;
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');
// V8 ~ Chrome 45- bug
if (!IS_PURE && DESCRIPTORS && values.name !== 'values') try {
    defineProperty(values, 'name', {
        value: 'values'
    });
} catch (error) {}

},{"c8e067881939a0cb":"58zOi","275b8f0cb65b77aa":"5ZvPT","21f4d3653c90f049":"avCQR","85efa8d5848315f6":"hbwRd","94a17682acfdceb4":"aBGsi","bb30bdef31147b17":"sPpI7","d8384af5151f994c":"caUWL","fdcc207797f592fe":"cpju0","11e42ff2bbda8d0a":"5AxuF"}],"sPpI7":[function(require,module,exports,__globalThis) {
'use strict';
var $ = require("923c1bf4a39ae90c");
var call = require("46a3f73465955199");
var IS_PURE = require("c1577e63189cf935");
var FunctionName = require("dc625e1bb584faf6");
var isCallable = require("d55d91c410baca17");
var createIteratorConstructor = require("3e4ae607dbb6e78b");
var getPrototypeOf = require("48ca4ae1d4998232");
var setPrototypeOf = require("1263258b63630933");
var setToStringTag = require("9b61caf69f87dfde");
var createNonEnumerableProperty = require("7f30a3ab1bf5e1c1");
var defineBuiltIn = require("c027b4da648348d3");
var wellKnownSymbol = require("d4ad91965213ee1");
var Iterators = require("b616a206eb405268");
var IteratorsCore = require("4f9ec7e9f5d20965");
var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';
var returnThis = function() {
    return this;
};
module.exports = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
    createIteratorConstructor(IteratorConstructor, NAME, next);
    var getIterationMethod = function(KIND) {
        if (KIND === DEFAULT && defaultIterator) return defaultIterator;
        if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND];
        switch(KIND){
            case KEYS:
                return function keys() {
                    return new IteratorConstructor(this, KIND);
                };
            case VALUES:
                return function values() {
                    return new IteratorConstructor(this, KIND);
                };
            case ENTRIES:
                return function entries() {
                    return new IteratorConstructor(this, KIND);
                };
        }
        return function() {
            return new IteratorConstructor(this);
        };
    };
    var TO_STRING_TAG = NAME + ' Iterator';
    var INCORRECT_VALUES_NAME = false;
    var IterablePrototype = Iterable.prototype;
    var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
    var anyNativeIterator = NAME === 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY;
    // fix native
    if (anyNativeIterator) {
        CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
        if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
            if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
                if (setPrototypeOf) setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
                else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
            }
            // Set @@toStringTag to native iterators
            setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
            if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
        }
    }
    // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
    if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
        if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
        else {
            INCORRECT_VALUES_NAME = true;
            defaultIterator = function values() {
                return call(nativeIterator, this);
            };
        }
    }
    // export additional methods
    if (DEFAULT) {
        methods = {
            values: getIterationMethod(VALUES),
            keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
            entries: getIterationMethod(ENTRIES)
        };
        if (FORCED) {
            for(KEY in methods)if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
        } else $({
            target: NAME,
            proto: true,
            forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
        }, methods);
    }
    // define iterator
    if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, {
        name: DEFAULT
    });
    Iterators[NAME] = defaultIterator;
    return methods;
};

},{"923c1bf4a39ae90c":"7Vckd","46a3f73465955199":"3v9g9","c1577e63189cf935":"cpju0","dc625e1bb584faf6":"d1uzf","d55d91c410baca17":"2KfBB","3e4ae607dbb6e78b":"4jmQv","48ca4ae1d4998232":"hBeWl","1263258b63630933":"fMtik","9b61caf69f87dfde":"8xOHF","7f30a3ab1bf5e1c1":"i7bgu","c027b4da648348d3":"es56c","d4ad91965213ee1":"lzelE","b616a206eb405268":"avCQR","4f9ec7e9f5d20965":"lli2Y"}],"4jmQv":[function(require,module,exports,__globalThis) {
'use strict';
var IteratorPrototype = require("6d3197d79123a33d").IteratorPrototype;
var create = require("f19338a88747fb05");
var createPropertyDescriptor = require("cc176dfbf6ea0553");
var setToStringTag = require("bc433e6ab6880430");
var Iterators = require("2f833e0e1738e7e0");
var returnThis = function() {
    return this;
};
module.exports = function(IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
    var TO_STRING_TAG = NAME + ' Iterator';
    IteratorConstructor.prototype = create(IteratorPrototype, {
        next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next)
    });
    setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
    Iterators[TO_STRING_TAG] = returnThis;
    return IteratorConstructor;
};

},{"6d3197d79123a33d":"lli2Y","f19338a88747fb05":"lwgUm","cc176dfbf6ea0553":"dOb5l","bc433e6ab6880430":"8xOHF","2f833e0e1738e7e0":"avCQR"}],"lli2Y":[function(require,module,exports,__globalThis) {
'use strict';
var fails = require("cdb9dcd93b52b3fc");
var isCallable = require("db955145706fc55a");
var isObject = require("83e5df3d56e8834f");
var create = require("45d6f1a3c372cdf6");
var getPrototypeOf = require("a97459767d74fdc3");
var defineBuiltIn = require("3bdf78f362001d7c");
var wellKnownSymbol = require("d3901e60df7842c9");
var IS_PURE = require("e736fd193ddc96e5");
var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;
// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;
/* eslint-disable es/no-array-prototype-keys -- safe */ if ([].keys) {
    arrayIterator = [].keys();
    // Safari 8 has buggy iterators w/o `next`
    if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
    else {
        PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
        if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
    }
}
var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function() {
    var test = {};
    // FF44- legacy iterators case
    return IteratorPrototype[ITERATOR].call(test) !== test;
});
if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);
// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) defineBuiltIn(IteratorPrototype, ITERATOR, function() {
    return this;
});
module.exports = {
    IteratorPrototype: IteratorPrototype,
    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};

},{"cdb9dcd93b52b3fc":"7Gv5z","db955145706fc55a":"2KfBB","83e5df3d56e8834f":"5rTge","45d6f1a3c372cdf6":"lwgUm","a97459767d74fdc3":"hBeWl","3bdf78f362001d7c":"es56c","d3901e60df7842c9":"lzelE","e736fd193ddc96e5":"cpju0"}],"hBeWl":[function(require,module,exports,__globalThis) {
'use strict';
var hasOwn = require("da54a59ea207dd");
var isCallable = require("71ab2a7bcc8c8fc8");
var toObject = require("7a3afd2bb40b0292");
var sharedKey = require("296d7a2db8e23969");
var CORRECT_PROTOTYPE_GETTER = require("58de29d5e883862f");
var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;
// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function(O) {
    var object = toObject(O);
    if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
    var constructor = object.constructor;
    if (isCallable(constructor) && object instanceof constructor) return constructor.prototype;
    return object instanceof $Object ? ObjectPrototype : null;
};

},{"da54a59ea207dd":"9CekL","71ab2a7bcc8c8fc8":"2KfBB","7a3afd2bb40b0292":"fTIhz","296d7a2db8e23969":"fDnL8","58de29d5e883862f":"7bB64"}],"7bB64":[function(require,module,exports,__globalThis) {
'use strict';
var fails = require("85ffc28af2e8afc1");
module.exports = !fails(function() {
    function F() {}
    F.prototype.constructor = null;
    // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
    return Object.getPrototypeOf(new F()) !== F.prototype;
});

},{"85ffc28af2e8afc1":"7Gv5z"}],"8xOHF":[function(require,module,exports,__globalThis) {
'use strict';
var defineProperty = require("93a3d85da48077c").f;
var hasOwn = require("2ebf7179e87d878f");
var wellKnownSymbol = require("5b1eb5d1639e9eb7");
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
module.exports = function(target, TAG, STATIC) {
    if (target && !STATIC) target = target.prototype;
    if (target && !hasOwn(target, TO_STRING_TAG)) defineProperty(target, TO_STRING_TAG, {
        configurable: true,
        value: TAG
    });
};

},{"93a3d85da48077c":"aBGsi","2ebf7179e87d878f":"9CekL","5b1eb5d1639e9eb7":"lzelE"}],"fMtik":[function(require,module,exports,__globalThis) {
'use strict';
/* eslint-disable no-proto -- safe */ var uncurryThisAccessor = require("995a94425a563d6");
var isObject = require("caa27fe2635f1f44");
var requireObjectCoercible = require("a751660a0fcdf70");
var aPossiblePrototype = require("6e2c833ee2a62cf6");
// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function() {
    var CORRECT_SETTER = false;
    var test = {};
    var setter;
    try {
        setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
        setter(test, []);
        CORRECT_SETTER = test instanceof Array;
    } catch (error) {}
    return function setPrototypeOf(O, proto) {
        requireObjectCoercible(O);
        aPossiblePrototype(proto);
        if (!isObject(O)) return O;
        if (CORRECT_SETTER) setter(O, proto);
        else O.__proto__ = proto;
        return O;
    };
}() : undefined);

},{"995a94425a563d6":"eVMQJ","caa27fe2635f1f44":"5rTge","a751660a0fcdf70":"7cHwm","6e2c833ee2a62cf6":"anlvF"}],"eVMQJ":[function(require,module,exports,__globalThis) {
'use strict';
var uncurryThis = require("27a2d181325e1926");
var aCallable = require("36b26076b1e2fac1");
module.exports = function(object, key, method) {
    try {
        // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
        return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
    } catch (error) {}
};

},{"27a2d181325e1926":"aAate","36b26076b1e2fac1":"dxhWU"}],"anlvF":[function(require,module,exports,__globalThis) {
'use strict';
var isPossiblePrototype = require("fcc5bbb526d602c6");
var $String = String;
var $TypeError = TypeError;
module.exports = function(argument) {
    if (isPossiblePrototype(argument)) return argument;
    throw new $TypeError("Can't set " + $String(argument) + ' as a prototype');
};

},{"fcc5bbb526d602c6":"1hudF"}],"1hudF":[function(require,module,exports,__globalThis) {
'use strict';
var isObject = require("a504c97d35bacd6c");
module.exports = function(argument) {
    return isObject(argument) || argument === null;
};

},{"a504c97d35bacd6c":"5rTge"}],"caUWL":[function(require,module,exports,__globalThis) {
'use strict';
// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
module.exports = function(value, done) {
    return {
        value: value,
        done: done
    };
};

},{}],"8JHEf":[function(require,module,exports,__globalThis) {
'use strict';
var $ = require("1fd3a81d59354079");
var uncurryThis = require("878a42cfd07db75d");
var IndexedObject = require("c417af28e9abb2b");
var toIndexedObject = require("cdcc2dbc58a28c02");
var arrayMethodIsStrict = require("733e226e143494d1");
var nativeJoin = uncurryThis([].join);
var ES3_STRINGS = IndexedObject !== Object;
var FORCED = ES3_STRINGS || !arrayMethodIsStrict('join', ',');
// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
$({
    target: 'Array',
    proto: true,
    forced: FORCED
}, {
    join: function join(separator) {
        return nativeJoin(toIndexedObject(this), separator === undefined ? ',' : separator);
    }
});

},{"1fd3a81d59354079":"7Vckd","878a42cfd07db75d":"aAate","c417af28e9abb2b":"gXe04","cdcc2dbc58a28c02":"58zOi","733e226e143494d1":"fBCiF"}],"lUFiH":[function(require,module,exports,__globalThis) {
'use strict';
var $ = require("962fe7a81cad1a6");
var lastIndexOf = require("9a92cbcc02ff28cd");
// `Array.prototype.lastIndexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
// eslint-disable-next-line es/no-array-prototype-lastindexof -- required for testing
$({
    target: 'Array',
    proto: true,
    forced: lastIndexOf !== [].lastIndexOf
}, {
    lastIndexOf: lastIndexOf
});

},{"962fe7a81cad1a6":"7Vckd","9a92cbcc02ff28cd":"fQPl6"}],"fQPl6":[function(require,module,exports,__globalThis) {
'use strict';
/* eslint-disable es/no-array-prototype-lastindexof -- safe */ var apply = require("4ca7787412cb919d");
var toIndexedObject = require("883419ed27232d44");
var toIntegerOrInfinity = require("ec6d0c7c9b243b67");
var lengthOfArrayLike = require("f185a9d11d03524a");
var arrayMethodIsStrict = require("6d58dcee43d16a4d");
var min = Math.min;
var $lastIndexOf = [].lastIndexOf;
var NEGATIVE_ZERO = !!$lastIndexOf && 1 / [
    1
].lastIndexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('lastIndexOf');
var FORCED = NEGATIVE_ZERO || !STRICT_METHOD;
// `Array.prototype.lastIndexOf` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
module.exports = FORCED ? function lastIndexOf(searchElement /* , fromIndex = @[*-1] */ ) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return apply($lastIndexOf, this, arguments) || 0;
    var O = toIndexedObject(this);
    var length = lengthOfArrayLike(O);
    if (length === 0) return -1;
    var index = length - 1;
    if (arguments.length > 1) index = min(index, toIntegerOrInfinity(arguments[1]));
    if (index < 0) index = length + index;
    for(; index >= 0; index--)if (index in O && O[index] === searchElement) return index || 0;
    return -1;
} : $lastIndexOf;

},{"4ca7787412cb919d":"9A5Vw","883419ed27232d44":"58zOi","ec6d0c7c9b243b67":"hfRnH","f185a9d11d03524a":"132UY","6d58dcee43d16a4d":"fBCiF"}],"baMZZ":[function(require,module,exports,__globalThis) {
'use strict';
var $ = require("5fce1361821ac187");
var $map = require("a7a3b0905c6ea58c").map;
var arrayMethodHasSpeciesSupport = require("869912db050ffcc6");
var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT
}, {
    map: function map(callbackfn /* , thisArg */ ) {
        return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
});

},{"5fce1361821ac187":"7Vckd","a7a3b0905c6ea58c":"gBJqJ","869912db050ffcc6":"j0bSz"}],"a0lIP":[function(require,module,exports,__globalThis) {
'use strict';
var $ = require("b6ccafca6520a091");
var toObject = require("617fddde3018a247");
var lengthOfArrayLike = require("59103d39edb4650b");
var setArrayLength = require("92e23121d8e92745");
var doesNotExceedSafeInteger = require("e72c330067644bc");
var fails = require("a33adf7f040c3b17");
var INCORRECT_TO_LENGTH = fails(function() {
    return [].push.call({
        length: 0x100000000
    }, 1) !== 4294967297;
});
// V8 <= 121 and Safari <= 15.4; FF < 23 throws InternalError
// https://bugs.chromium.org/p/v8/issues/detail?id=12681
var properErrorOnNonWritableLength = function() {
    try {
        // eslint-disable-next-line es/no-object-defineproperty -- safe
        Object.defineProperty([], 'length', {
            writable: false
        }).push();
    } catch (error) {
        return error instanceof TypeError;
    }
};
var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();
// `Array.prototype.push` method
// https://tc39.es/ecma262/#sec-array.prototype.push
$({
    target: 'Array',
    proto: true,
    arity: 1,
    forced: FORCED
}, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    push: function push(item) {
        var O = toObject(this);
        var len = lengthOfArrayLike(O);
        var argCount = arguments.length;
        doesNotExceedSafeInteger(len + argCount);
        for(var i = 0; i < argCount; i++){
            O[len] = arguments[i];
            len++;
        }
        setArrayLength(O, len);
        return len;
    }
});

},{"b6ccafca6520a091":"7Vckd","617fddde3018a247":"fTIhz","59103d39edb4650b":"132UY","92e23121d8e92745":"kqCbN","e72c330067644bc":"jSgtt","a33adf7f040c3b17":"7Gv5z"}],"kqCbN":[function(require,module,exports,__globalThis) {
'use strict';
var DESCRIPTORS = require("dc66120e0129528");
var isArray = require("60f73fd41619acc2");
var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// Safari < 13 does not throw an error in this case
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function() {
    // makes no sense without proper strict mode support
    if (this !== undefined) return true;
    try {
        // eslint-disable-next-line es/no-object-defineproperty -- safe
        Object.defineProperty([], 'length', {
            writable: false
        }).length = 1;
    } catch (error) {
        return error instanceof TypeError;
    }
}();
module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function(O, length) {
    if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) throw new $TypeError('Cannot set read only .length');
    return O.length = length;
} : function(O, length) {
    return O.length = length;
};

},{"dc66120e0129528":"5AxuF","60f73fd41619acc2":"1Vb8k"}],"4HVyy":[function(require,module,exports,__globalThis) {
'use strict';
var $ = require("aa6d80bc3b697f48");
var $reduce = require("1ee240c0462acdf8").left;
var arrayMethodIsStrict = require("161424d627b72094");
var CHROME_VERSION = require("bc7f601de74ac73e");
var IS_NODE = require("fbcc11805e216a7d");
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
var FORCED = CHROME_BUG || !arrayMethodIsStrict('reduce');
// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({
    target: 'Array',
    proto: true,
    forced: FORCED
}, {
    reduce: function reduce(callbackfn /* , initialValue */ ) {
        var length = arguments.length;
        return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
    }
});

},{"aa6d80bc3b697f48":"7Vckd","1ee240c0462acdf8":"cReFt","161424d627b72094":"fBCiF","bc7f601de74ac73e":"cePh9","fbcc11805e216a7d":"3ENS9"}],"cReFt":[function(require,module,exports,__globalThis) {
'use strict';
var aCallable = require("93e7a99f8d3bc817");
var toObject = require("915d05570b61a3c9");
var IndexedObject = require("da310552be96f5db");
var lengthOfArrayLike = require("f4209260f2003c23");
var $TypeError = TypeError;
var REDUCE_EMPTY = 'Reduce of empty array with no initial value';
// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function(IS_RIGHT) {
    return function(that, callbackfn, argumentsLength, memo) {
        var O = toObject(that);
        var self = IndexedObject(O);
        var length = lengthOfArrayLike(O);
        aCallable(callbackfn);
        if (length === 0 && argumentsLength < 2) throw new $TypeError(REDUCE_EMPTY);
        var index = IS_RIGHT ? length - 1 : 0;
        var i = IS_RIGHT ? -1 : 1;
        if (argumentsLength < 2) while(true){
            if (index in self) {
                memo = self[index];
                index += i;
                break;
            }
            index += i;
            if (IS_RIGHT ? index < 0 : length <= index) throw new $TypeError(REDUCE_EMPTY);
        }
        for(; IS_RIGHT ? index >= 0 : length > index; index += i)if (index in self) memo = callbackfn(memo, self[index], index, O);
        return memo;
    };
};
module.exports = {
    // `Array.prototype.reduce` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduce
    left: createMethod(false),
    // `Array.prototype.reduceRight` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduceright
    right: createMethod(true)
};

},{"93e7a99f8d3bc817":"dxhWU","915d05570b61a3c9":"fTIhz","da310552be96f5db":"gXe04","f4209260f2003c23":"132UY"}],"6bIdl":[function(require,module,exports,__globalThis) {
'use strict';
var $ = require("fce4aa67eb1fe4da");
var $reduceRight = require("9bb83011bb72081c").right;
var arrayMethodIsStrict = require("86ebd8f03f19e7b");
var CHROME_VERSION = require("c87ecf8f0d069a25");
var IS_NODE = require("ceeda59dcd941a57");
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
var FORCED = CHROME_BUG || !arrayMethodIsStrict('reduceRight');
// `Array.prototype.reduceRight` method
// https://tc39.es/ecma262/#sec-array.prototype.reduceright
$({
    target: 'Array',
    proto: true,
    forced: FORCED
}, {
    reduceRight: function reduceRight(callbackfn /* , initialValue */ ) {
        return $reduceRight(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
    }
});

},{"fce4aa67eb1fe4da":"7Vckd","9bb83011bb72081c":"cReFt","86ebd8f03f19e7b":"fBCiF","c87ecf8f0d069a25":"cePh9","ceeda59dcd941a57":"3ENS9"}],"5U5Ji":[function(require,module,exports,__globalThis) {
'use strict';
var $ = require("96e1bf170d634a10");
var uncurryThis = require("ccf1d267c2b85a6");
var isArray = require("683c722e26101e35");
var nativeReverse = uncurryThis([].reverse);
var test = [
    1,
    2
];
// `Array.prototype.reverse` method
// https://tc39.es/ecma262/#sec-array.prototype.reverse
// fix for Safari 12.0 bug
// https://bugs.webkit.org/show_bug.cgi?id=188794
$({
    target: 'Array',
    proto: true,
    forced: String(test) === String(test.reverse())
}, {
    reverse: function reverse() {
        // eslint-disable-next-line no-self-assign -- dirty hack
        if (isArray(this)) this.length = this.length;
        return nativeReverse(this);
    }
});

},{"96e1bf170d634a10":"7Vckd","ccf1d267c2b85a6":"aAate","683c722e26101e35":"1Vb8k"}],"lsq6d":[function(require,module,exports,__globalThis) {
'use strict';
var $ = require("f4626508f1e86a5e");
var isArray = require("c55f884cac32042");
var isConstructor = require("c7ab28f7c42930d4");
var isObject = require("d62f4c68d4a29c88");
var toAbsoluteIndex = require("598be77178793bf1");
var lengthOfArrayLike = require("f9b9299dc750b2dd");
var toIndexedObject = require("ff620c60ded20435");
var createProperty = require("49168568b59df51b");
var wellKnownSymbol = require("f02f140688adf449");
var arrayMethodHasSpeciesSupport = require("eb9bbc0536d1f202");
var nativeSlice = require("88cb1064f5f88f9e");
var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var SPECIES = wellKnownSymbol('species');
var $Array = Array;
var max = Math.max;
// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT
}, {
    slice: function slice(start, end) {
        var O = toIndexedObject(this);
        var length = lengthOfArrayLike(O);
        var k = toAbsoluteIndex(start, length);
        var fin = toAbsoluteIndex(end === undefined ? length : end, length);
        // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
        var Constructor, result, n;
        if (isArray(O)) {
            Constructor = O.constructor;
            // cross-realm fallback
            if (isConstructor(Constructor) && (Constructor === $Array || isArray(Constructor.prototype))) Constructor = undefined;
            else if (isObject(Constructor)) {
                Constructor = Constructor[SPECIES];
                if (Constructor === null) Constructor = undefined;
            }
            if (Constructor === $Array || Constructor === undefined) return nativeSlice(O, k, fin);
        }
        result = new (Constructor === undefined ? $Array : Constructor)(max(fin - k, 0));
        for(n = 0; k < fin; k++, n++)if (k in O) createProperty(result, n, O[k]);
        result.length = n;
        return result;
    }
});

},{"f4626508f1e86a5e":"7Vckd","c55f884cac32042":"1Vb8k","c7ab28f7c42930d4":"d16xX","d62f4c68d4a29c88":"5rTge","598be77178793bf1":"hMPua","f9b9299dc750b2dd":"132UY","ff620c60ded20435":"58zOi","49168568b59df51b":"jErM3","f02f140688adf449":"lzelE","eb9bbc0536d1f202":"j0bSz","88cb1064f5f88f9e":"kGYHC"}],"3VnzD":[function(require,module,exports,__globalThis) {
'use strict';
var $ = require("7d2f6f3fe52919ae");
var $some = require("b1828f452e0c06d").some;
var arrayMethodIsStrict = require("2a793f2ccd9f7f4e");
var STRICT_METHOD = arrayMethodIsStrict('some');
// `Array.prototype.some` method
// https://tc39.es/ecma262/#sec-array.prototype.some
$({
    target: 'Array',
    proto: true,
    forced: !STRICT_METHOD
}, {
    some: function some(callbackfn /* , thisArg */ ) {
        return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
});

},{"7d2f6f3fe52919ae":"7Vckd","b1828f452e0c06d":"gBJqJ","2a793f2ccd9f7f4e":"fBCiF"}],"jRe4W":[function(require,module,exports,__globalThis) {
'use strict';
var $ = require("bcbafe2730da3578");
var uncurryThis = require("45fd6781824a0ecc");
var aCallable = require("227e835045b72b76");
var toObject = require("d460a9dbedc2e639");
var lengthOfArrayLike = require("eb5d266a4b580e05");
var deletePropertyOrThrow = require("ab9af39e90a45cab");
var toString = require("2874e3c4ed670355");
var fails = require("b077ecec4e3b8790");
var internalSort = require("b1c0993c5b4a0232");
var arrayMethodIsStrict = require("fc67c1f531962716");
var FF = require("5463fbeb0c308d9");
var IE_OR_EDGE = require("44ffda3b5c0f4b25");
var V8 = require("f9fbdc3cf34ed30");
var WEBKIT = require("f4067f6b9a5e38cb");
var test = [];
var nativeSort = uncurryThis(test.sort);
var push = uncurryThis(test.push);
// IE8-
var FAILS_ON_UNDEFINED = fails(function() {
    test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function() {
    test.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');
var STABLE_SORT = !fails(function() {
    // feature detection can be too slow, so check engines versions
    if (V8) return V8 < 70;
    if (FF && FF > 3) return;
    if (IE_OR_EDGE) return true;
    if (WEBKIT) return WEBKIT < 603;
    var result = '';
    var code, chr, value, index;
    // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
    for(code = 65; code < 76; code++){
        chr = String.fromCharCode(code);
        switch(code){
            case 66:
            case 69:
            case 70:
            case 72:
                value = 3;
                break;
            case 68:
            case 71:
                value = 4;
                break;
            default:
                value = 2;
        }
        for(index = 0; index < 47; index++)test.push({
            k: chr + index,
            v: value
        });
    }
    test.sort(function(a, b) {
        return b.v - a.v;
    });
    for(index = 0; index < test.length; index++){
        chr = test[index].k.charAt(0);
        if (result.charAt(result.length - 1) !== chr) result += chr;
    }
    return result !== 'DGBEFHACIJK';
});
var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;
var getSortCompare = function(comparefn) {
    return function(x, y) {
        if (y === undefined) return -1;
        if (x === undefined) return 1;
        if (comparefn !== undefined) return +comparefn(x, y) || 0;
        return toString(x) > toString(y) ? 1 : -1;
    };
};
// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
$({
    target: 'Array',
    proto: true,
    forced: FORCED
}, {
    sort: function sort(comparefn) {
        if (comparefn !== undefined) aCallable(comparefn);
        var array = toObject(this);
        if (STABLE_SORT) return comparefn === undefined ? nativeSort(array) : nativeSort(array, comparefn);
        var items = [];
        var arrayLength = lengthOfArrayLike(array);
        var itemsLength, index;
        for(index = 0; index < arrayLength; index++)if (index in array) push(items, array[index]);
        internalSort(items, getSortCompare(comparefn));
        itemsLength = lengthOfArrayLike(items);
        index = 0;
        while(index < itemsLength)array[index] = items[index++];
        while(index < arrayLength)deletePropertyOrThrow(array, index++);
        return array;
    }
});

},{"bcbafe2730da3578":"7Vckd","45fd6781824a0ecc":"aAate","227e835045b72b76":"dxhWU","d460a9dbedc2e639":"fTIhz","eb5d266a4b580e05":"132UY","ab9af39e90a45cab":"9C6cF","2874e3c4ed670355":"kVqMP","b077ecec4e3b8790":"7Gv5z","b1c0993c5b4a0232":"1vREP","fc67c1f531962716":"fBCiF","5463fbeb0c308d9":"fCl2d","44ffda3b5c0f4b25":"d4iI0","f9fbdc3cf34ed30":"cePh9","f4067f6b9a5e38cb":"bwOo4"}],"kVqMP":[function(require,module,exports,__globalThis) {
'use strict';
var classof = require("3e4265f3f6994add");
var $String = String;
module.exports = function(argument) {
    if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
    return $String(argument);
};

},{"3e4265f3f6994add":"9wxbZ"}],"1vREP":[function(require,module,exports,__globalThis) {
'use strict';
var arraySlice = require("477ba4a4642e124b");
var floor = Math.floor;
var sort = function(array, comparefn) {
    var length = array.length;
    if (length < 8) {
        // insertion sort
        var i = 1;
        var element, j;
        while(i < length){
            j = i;
            element = array[i];
            while(j && comparefn(array[j - 1], element) > 0)array[j] = array[--j];
            if (j !== i++) array[j] = element;
        }
    } else {
        // merge sort
        var middle = floor(length / 2);
        var left = sort(arraySlice(array, 0, middle), comparefn);
        var right = sort(arraySlice(array, middle), comparefn);
        var llength = left.length;
        var rlength = right.length;
        var lindex = 0;
        var rindex = 0;
        while(lindex < llength || rindex < rlength)array[lindex + rindex] = lindex < llength && rindex < rlength ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++] : lindex < llength ? left[lindex++] : right[rindex++];
    }
    return array;
};
module.exports = sort;

},{"477ba4a4642e124b":"kGYHC"}],"fCl2d":[function(require,module,exports,__globalThis) {
'use strict';
var userAgent = require("a5aa79c2b523d5ed");
var firefox = userAgent.match(/firefox\/(\d+)/i);
module.exports = !!firefox && +firefox[1];

},{"a5aa79c2b523d5ed":"qxRHs"}],"d4iI0":[function(require,module,exports,__globalThis) {
'use strict';
var UA = require("e23e24a84dc58074");
module.exports = /MSIE|Trident/.test(UA);

},{"e23e24a84dc58074":"qxRHs"}],"bwOo4":[function(require,module,exports,__globalThis) {
'use strict';
var userAgent = require("b4f554b2b39611d1");
var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);
module.exports = !!webkit && +webkit[1];

},{"b4f554b2b39611d1":"qxRHs"}],"fNMr8":[function(require,module,exports,__globalThis) {
'use strict';
var setSpecies = require("42da8ff88dc4c1c4");
// `Array[@@species]` getter
// https://tc39.es/ecma262/#sec-get-array-@@species
setSpecies('Array');

},{"42da8ff88dc4c1c4":"aVgln"}],"aVgln":[function(require,module,exports,__globalThis) {
'use strict';
var getBuiltIn = require("b05e11590de6536b");
var defineBuiltInAccessor = require("5ccd92fa5628281e");
var wellKnownSymbol = require("5145e81a7788c772");
var DESCRIPTORS = require("19428004aa07279c");
var SPECIES = wellKnownSymbol('species');
module.exports = function(CONSTRUCTOR_NAME) {
    var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
    if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) defineBuiltInAccessor(Constructor, SPECIES, {
        configurable: true,
        get: function() {
            return this;
        }
    });
};

},{"b05e11590de6536b":"h2CMt","5ccd92fa5628281e":"cmEHS","5145e81a7788c772":"lzelE","19428004aa07279c":"5AxuF"}],"cmEHS":[function(require,module,exports,__globalThis) {
'use strict';
var makeBuiltIn = require("5bd1cd8472955124");
var defineProperty = require("1413185c6323bbbc");
module.exports = function(target, name, descriptor) {
    if (descriptor.get) makeBuiltIn(descriptor.get, name, {
        getter: true
    });
    if (descriptor.set) makeBuiltIn(descriptor.set, name, {
        setter: true
    });
    return defineProperty.f(target, name, descriptor);
};

},{"5bd1cd8472955124":"6JWCA","1413185c6323bbbc":"aBGsi"}],"jjZcZ":[function(require,module,exports,__globalThis) {
'use strict';
var $ = require("fcdd299870ca460d");
var toObject = require("5f536a62c5bdccdf");
var toAbsoluteIndex = require("ec98ec63afca6e23");
var toIntegerOrInfinity = require("d308f711ad345c5e");
var lengthOfArrayLike = require("5b3d6eaf0671a489");
var setArrayLength = require("32601ab988fd40d3");
var doesNotExceedSafeInteger = require("b495b3fcd17928be");
var arraySpeciesCreate = require("f92c3217c97e3529");
var createProperty = require("5390d505f7091be7");
var deletePropertyOrThrow = require("3105e86fb8ab7be");
var arrayMethodHasSpeciesSupport = require("68735e235584e669");
var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
var max = Math.max;
var min = Math.min;
// `Array.prototype.splice` method
// https://tc39.es/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT
}, {
    splice: function splice(start, deleteCount /* , ...items */ ) {
        var O = toObject(this);
        var len = lengthOfArrayLike(O);
        var actualStart = toAbsoluteIndex(start, len);
        var argumentsLength = arguments.length;
        var insertCount, actualDeleteCount, A, k, from, to;
        if (argumentsLength === 0) insertCount = actualDeleteCount = 0;
        else if (argumentsLength === 1) {
            insertCount = 0;
            actualDeleteCount = len - actualStart;
        } else {
            insertCount = argumentsLength - 2;
            actualDeleteCount = min(max(toIntegerOrInfinity(deleteCount), 0), len - actualStart);
        }
        doesNotExceedSafeInteger(len + insertCount - actualDeleteCount);
        A = arraySpeciesCreate(O, actualDeleteCount);
        for(k = 0; k < actualDeleteCount; k++){
            from = actualStart + k;
            if (from in O) createProperty(A, k, O[from]);
        }
        A.length = actualDeleteCount;
        if (insertCount < actualDeleteCount) {
            for(k = actualStart; k < len - actualDeleteCount; k++){
                from = k + actualDeleteCount;
                to = k + insertCount;
                if (from in O) O[to] = O[from];
                else deletePropertyOrThrow(O, to);
            }
            for(k = len; k > len - actualDeleteCount + insertCount; k--)deletePropertyOrThrow(O, k - 1);
        } else if (insertCount > actualDeleteCount) for(k = len - actualDeleteCount; k > actualStart; k--){
            from = k + actualDeleteCount - 1;
            to = k + insertCount - 1;
            if (from in O) O[to] = O[from];
            else deletePropertyOrThrow(O, to);
        }
        for(k = 0; k < insertCount; k++)O[k + actualStart] = arguments[k + 2];
        setArrayLength(O, len - actualDeleteCount + insertCount);
        return A;
    }
});

},{"fcdd299870ca460d":"7Vckd","5f536a62c5bdccdf":"fTIhz","ec98ec63afca6e23":"hMPua","d308f711ad345c5e":"hfRnH","5b3d6eaf0671a489":"132UY","32601ab988fd40d3":"kqCbN","b495b3fcd17928be":"jSgtt","f92c3217c97e3529":"9ngUA","5390d505f7091be7":"jErM3","3105e86fb8ab7be":"9C6cF","68735e235584e669":"j0bSz"}],"2EN4C":[function(require,module,exports,__globalThis) {
'use strict';
var $ = require("dcb26709a7ce1aaf");
var arrayToReversed = require("9188a72e8fb05720");
var toIndexedObject = require("f7666d6cb036e5cf");
var addToUnscopables = require("7f063c8e62d2c4bc");
var $Array = Array;
// `Array.prototype.toReversed` method
// https://tc39.es/ecma262/#sec-array.prototype.toreversed
$({
    target: 'Array',
    proto: true
}, {
    toReversed: function toReversed() {
        return arrayToReversed(toIndexedObject(this), $Array);
    }
});
addToUnscopables('toReversed');

},{"dcb26709a7ce1aaf":"7Vckd","9188a72e8fb05720":"aQRp7","f7666d6cb036e5cf":"58zOi","7f063c8e62d2c4bc":"5ZvPT"}],"aQRp7":[function(require,module,exports,__globalThis) {
'use strict';
var lengthOfArrayLike = require("da2f237fc4470694");
// https://tc39.es/proposal-change-array-by-copy/#sec-array.prototype.toReversed
// https://tc39.es/proposal-change-array-by-copy/#sec-%typedarray%.prototype.toReversed
module.exports = function(O, C) {
    var len = lengthOfArrayLike(O);
    var A = new C(len);
    var k = 0;
    for(; k < len; k++)A[k] = O[len - k - 1];
    return A;
};

},{"da2f237fc4470694":"132UY"}],"dIMP9":[function(require,module,exports,__globalThis) {
'use strict';
var $ = require("52ce81dc0a9a443d");
var uncurryThis = require("b27df370ae680d78");
var aCallable = require("d484118a239a7fe4");
var toIndexedObject = require("c5a21e340982153");
var arrayFromConstructorAndList = require("7c8fdece48b2bb2");
var getBuiltInPrototypeMethod = require("5901404f2d888ec5");
var addToUnscopables = require("ad0abff5cc640cb1");
var $Array = Array;
var sort = uncurryThis(getBuiltInPrototypeMethod('Array', 'sort'));
// `Array.prototype.toSorted` method
// https://tc39.es/ecma262/#sec-array.prototype.tosorted
$({
    target: 'Array',
    proto: true
}, {
    toSorted: function toSorted(compareFn) {
        if (compareFn !== undefined) aCallable(compareFn);
        var O = toIndexedObject(this);
        var A = arrayFromConstructorAndList($Array, O);
        return sort(A, compareFn);
    }
});
addToUnscopables('toSorted');

},{"52ce81dc0a9a443d":"7Vckd","b27df370ae680d78":"aAate","d484118a239a7fe4":"dxhWU","c5a21e340982153":"58zOi","7c8fdece48b2bb2":"e2kHk","5901404f2d888ec5":"bVR5D","ad0abff5cc640cb1":"5ZvPT"}],"e2kHk":[function(require,module,exports,__globalThis) {
'use strict';
var lengthOfArrayLike = require("2dee1f257e46a7db");
module.exports = function(Constructor, list, $length) {
    var index = 0;
    var length = arguments.length > 2 ? $length : lengthOfArrayLike(list);
    var result = new Constructor(length);
    while(length > index)result[index] = list[index++];
    return result;
};

},{"2dee1f257e46a7db":"132UY"}],"bVR5D":[function(require,module,exports,__globalThis) {
'use strict';
var globalThis = require("63ff55de103c0dc5");
module.exports = function(CONSTRUCTOR, METHOD) {
    var Constructor = globalThis[CONSTRUCTOR];
    var Prototype = Constructor && Constructor.prototype;
    return Prototype && Prototype[METHOD];
};

},{"63ff55de103c0dc5":"6xMjU"}],"9Thjo":[function(require,module,exports,__globalThis) {
'use strict';
var $ = require("c44d9276f6e49c66");
var addToUnscopables = require("ccd8819e12261215");
var doesNotExceedSafeInteger = require("95891e25a6f53375");
var lengthOfArrayLike = require("71fb5de0045d079d");
var toAbsoluteIndex = require("150c173e099ddbe3");
var toIndexedObject = require("bc8453913d7979ca");
var toIntegerOrInfinity = require("a4502cc79d58ffee");
var $Array = Array;
var max = Math.max;
var min = Math.min;
// `Array.prototype.toSpliced` method
// https://tc39.es/ecma262/#sec-array.prototype.tospliced
$({
    target: 'Array',
    proto: true
}, {
    toSpliced: function toSpliced(start, deleteCount /* , ...items */ ) {
        var O = toIndexedObject(this);
        var len = lengthOfArrayLike(O);
        var actualStart = toAbsoluteIndex(start, len);
        var argumentsLength = arguments.length;
        var k = 0;
        var insertCount, actualDeleteCount, newLen, A;
        if (argumentsLength === 0) insertCount = actualDeleteCount = 0;
        else if (argumentsLength === 1) {
            insertCount = 0;
            actualDeleteCount = len - actualStart;
        } else {
            insertCount = argumentsLength - 2;
            actualDeleteCount = min(max(toIntegerOrInfinity(deleteCount), 0), len - actualStart);
        }
        newLen = doesNotExceedSafeInteger(len + insertCount - actualDeleteCount);
        A = $Array(newLen);
        for(; k < actualStart; k++)A[k] = O[k];
        for(; k < actualStart + insertCount; k++)A[k] = arguments[k - actualStart + 2];
        for(; k < newLen; k++)A[k] = O[k + actualDeleteCount - insertCount];
        return A;
    }
});
addToUnscopables('toSpliced');

},{"c44d9276f6e49c66":"7Vckd","ccd8819e12261215":"5ZvPT","95891e25a6f53375":"jSgtt","71fb5de0045d079d":"132UY","150c173e099ddbe3":"hMPua","bc8453913d7979ca":"58zOi","a4502cc79d58ffee":"hfRnH"}],"k7bgQ":[function(require,module,exports,__globalThis) {
'use strict';
// this method was added to unscopables after implementation
// in popular engines, so it's moved to a separate module
var addToUnscopables = require("38dfe1dec51aa5e");
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('flat');

},{"38dfe1dec51aa5e":"5ZvPT"}],"wriv9":[function(require,module,exports,__globalThis) {
'use strict';
// this method was added to unscopables after implementation
// in popular engines, so it's moved to a separate module
var addToUnscopables = require("a292f2e262c4e9cd");
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('flatMap');

},{"a292f2e262c4e9cd":"5ZvPT"}],"lilI6":[function(require,module,exports,__globalThis) {
'use strict';
var $ = require("b1f0614c13f2cf4c");
var toObject = require("efdf90907e209c0d");
var lengthOfArrayLike = require("7a3a82e1e33fbf71");
var setArrayLength = require("4aef1328332da65a");
var deletePropertyOrThrow = require("e6ae4b015c0c53de");
var doesNotExceedSafeInteger = require("1890691961e2b2d7");
// IE8-
var INCORRECT_RESULT = [].unshift(0) !== 1;
// V8 ~ Chrome < 71 and Safari <= 15.4, FF < 23 throws InternalError
var properErrorOnNonWritableLength = function() {
    try {
        // eslint-disable-next-line es/no-object-defineproperty -- safe
        Object.defineProperty([], 'length', {
            writable: false
        }).unshift();
    } catch (error) {
        return error instanceof TypeError;
    }
};
var FORCED = INCORRECT_RESULT || !properErrorOnNonWritableLength();
// `Array.prototype.unshift` method
// https://tc39.es/ecma262/#sec-array.prototype.unshift
$({
    target: 'Array',
    proto: true,
    arity: 1,
    forced: FORCED
}, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    unshift: function unshift(item) {
        var O = toObject(this);
        var len = lengthOfArrayLike(O);
        var argCount = arguments.length;
        if (argCount) {
            doesNotExceedSafeInteger(len + argCount);
            var k = len;
            while(k--){
                var to = k + argCount;
                if (k in O) O[to] = O[k];
                else deletePropertyOrThrow(O, to);
            }
            for(var j = 0; j < argCount; j++)O[j] = arguments[j];
        }
        return setArrayLength(O, len + argCount);
    }
});

},{"b1f0614c13f2cf4c":"7Vckd","efdf90907e209c0d":"fTIhz","7a3a82e1e33fbf71":"132UY","4aef1328332da65a":"kqCbN","e6ae4b015c0c53de":"9C6cF","1890691961e2b2d7":"jSgtt"}],"gAbUm":[function(require,module,exports,__globalThis) {
'use strict';
var $ = require("d86bc3b82a987bfe");
var arrayWith = require("61402c55343416de");
var toIndexedObject = require("bc0327accd7b18f0");
var $Array = Array;
// `Array.prototype.with` method
// https://tc39.es/ecma262/#sec-array.prototype.with
$({
    target: 'Array',
    proto: true
}, {
    'with': function(index, value) {
        return arrayWith(toIndexedObject(this), $Array, index, value);
    }
});

},{"d86bc3b82a987bfe":"7Vckd","61402c55343416de":"kLq8I","bc0327accd7b18f0":"58zOi"}],"kLq8I":[function(require,module,exports,__globalThis) {
'use strict';
var lengthOfArrayLike = require("304f31a5544e0a3a");
var toIntegerOrInfinity = require("639b509ec45617c8");
var $RangeError = RangeError;
// https://tc39.es/proposal-change-array-by-copy/#sec-array.prototype.with
// https://tc39.es/proposal-change-array-by-copy/#sec-%typedarray%.prototype.with
module.exports = function(O, C, index, value) {
    var len = lengthOfArrayLike(O);
    var relativeIndex = toIntegerOrInfinity(index);
    var actualIndex = relativeIndex < 0 ? len + relativeIndex : relativeIndex;
    if (actualIndex >= len || actualIndex < 0) throw new $RangeError('Incorrect index');
    var A = new C(len);
    var k = 0;
    for(; k < len; k++)A[k] = k === actualIndex ? value : O[k];
    return A;
};

},{"304f31a5544e0a3a":"132UY","639b509ec45617c8":"hfRnH"}],"421Yq":[function(require,module,exports,__globalThis) {
'use strict';
var TO_STRING_TAG_SUPPORT = require("2f5378debd330ed5");
var defineBuiltIn = require("5e0718aecf12f1e8");
var toString = require("6b32f4accffdcba8");
// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) defineBuiltIn(Object.prototype, 'toString', toString, {
    unsafe: true
});

},{"2f5378debd330ed5":"8zC3R","5e0718aecf12f1e8":"es56c","6b32f4accffdcba8":"asFpg"}],"asFpg":[function(require,module,exports,__globalThis) {
'use strict';
var TO_STRING_TAG_SUPPORT = require("312e54676af41375");
var classof = require("2dbce13c946fe9d0");
// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? ({}).toString : function toString() {
    return '[object ' + classof(this) + ']';
};

},{"312e54676af41375":"8zC3R","2dbce13c946fe9d0":"9wxbZ"}],"hFo4A":[function(require,module,exports,__globalThis) {
'use strict';
var charAt = require("e8b36e9e8f60deb1").charAt;
var toString = require("99724183e9ac759e");
var InternalStateModule = require("75c45c226da41a58");
var defineIterator = require("5bce8e62b9ff7984");
var createIterResultObject = require("cab4a14c8e102263");
var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);
// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function(iterated) {
    setInternalState(this, {
        type: STRING_ITERATOR,
        string: toString(iterated),
        index: 0
    });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
    var state = getInternalState(this);
    var string = state.string;
    var index = state.index;
    var point;
    if (index >= string.length) return createIterResultObject(undefined, true);
    point = charAt(string, index);
    state.index += point.length;
    return createIterResultObject(point, false);
});

},{"e8b36e9e8f60deb1":"5lYTs","99724183e9ac759e":"kVqMP","75c45c226da41a58":"hbwRd","5bce8e62b9ff7984":"sPpI7","cab4a14c8e102263":"caUWL"}],"5lYTs":[function(require,module,exports,__globalThis) {
'use strict';
var uncurryThis = require("8b9beff9818f042");
var toIntegerOrInfinity = require("d3e375e7697978fb");
var toString = require("545a72c28133c459");
var requireObjectCoercible = require("5bafa9e5b372669c");
var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var stringSlice = uncurryThis(''.slice);
var createMethod = function(CONVERT_TO_STRING) {
    return function($this, pos) {
        var S = toString(requireObjectCoercible($this));
        var position = toIntegerOrInfinity(pos);
        var size = S.length;
        var first, second;
        if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
        first = charCodeAt(S, position);
        return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? charAt(S, position) : first : CONVERT_TO_STRING ? stringSlice(S, position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
    };
};
module.exports = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: createMethod(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod(true)
};

},{"8b9beff9818f042":"aAate","d3e375e7697978fb":"hfRnH","545a72c28133c459":"kVqMP","5bafa9e5b372669c":"7cHwm"}],"4Hv7q":[function(require,module,exports,__globalThis) {
'use strict';
var globalThis = require("34c09090b9638032");
module.exports = globalThis;

},{"34c09090b9638032":"6xMjU"}],"apwnT":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("icons.3eb43249.svg") + "?" + Date.now();

},{}],"5aK57":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class SearchView {
    _parentEl = document.querySelector('.search');
    getQuery() {
        const query = this._parentEl.querySelector('.search__field').value;
        this._clearInput();
        return query;
    }
    _clearInput() {
        this._parentEl.querySelector('.search__field').value = '';
    }
    addHandlerSearch(handler) {
        this._parentEl.addEventListener('submit', function(e) {
            e.preventDefault();
            handler();
        });
    }
}
exports.default = new SearchView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lYFJn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _previewViewJs = require("./previewView.js");
var _previewViewJsDefault = parcelHelpers.interopDefault(_previewViewJs);
var _iconsSvg = require("url:../../img/icons.svg"); // Parcel 2
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class ResultsView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector('.results');
    _errorMessage = 'No recipes found for your query. Please try again!';
    _message = '';
    _generateMarkup() {
        return this._data.map((result)=>(0, _previewViewJsDefault.default).render(result, false)).join('');
    }
}
exports.default = new ResultsView();

},{"./View.js":"l0Asn","./previewView.js":"8rL4Y","url:../../img/icons.svg":"apwnT","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8rL4Y":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg"); // Parcel 2
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class PreviewView extends (0, _viewJsDefault.default) {
    _parentElement = '';
    _generateMarkup() {
        const id = window.location.hash.slice(1);
        return `
        <li class="preview">
        <a class="preview__link ${this._data.id === id ? 'preview__link--active' : ''}" href="#${this._data.id}">
        <figure class="preview__fig">
        <img src="${this._data.image}" alt=" ${this._data.title}" />
        </figure>
        <div class="preview__data">
        <h4 class="preview__name">
        ${this._data.title}
        </h4>
        <div>
        <p class="preview__publisher">${this._data.publisher}</p>
        </div>
        </div>
        </a>
        </li>
        `;
    }
}
exports.default = new PreviewView();

},{"./View.js":"l0Asn","url:../../img/icons.svg":"apwnT","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3kBPa":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg"); // Parcel 2
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class PaginationView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector('.pagination');
    addHandlerClick(handler) {
        this._parentElement.addEventListener('click', function(e) {
            const btn = e.target.closest('.btn--inline');
            if (!btn) return;
            const goToPage = +btn.dataset.goto;
            handler(goToPage);
        });
    }
    _generateMarkup() {
        const currPage = this._data.page;
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
        // Page 1, and there are other pages
        if (currPage === 1 && numPages > 1) return `
      <button data-goto="${currPage + 1}" class="btn--inline pagination__btn--next">
            <span>Page ${currPage + 1}</span>
            <svg class="search__icon">
              <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
            </svg>
          </button>`;
        // Last page
        if (currPage === numPages && numPages > 1) return `
      <button data-goto="${currPage - 1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currPage - 1}</span>
          </button>
      `;
        // Other page
        if (currPage < numPages) return `<button data-goto="${currPage - 1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currPage - 1}</span>
          </button>
          
          <button data-goto="${currPage + 1}" class="btn--inline pagination__btn--next">
            <span>Page ${currPage + 1}</span>
            <svg class="search__icon">
              <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
            </svg>
          </button>`;
        // Page 1, and there are NO other pages
        return '';
    }
}
exports.default = new PaginationView();

},{"./View.js":"l0Asn","url:../../img/icons.svg":"apwnT","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2vc5x":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _previewViewJs = require("./previewView.js");
var _previewViewJsDefault = parcelHelpers.interopDefault(_previewViewJs);
var _iconsSvg = require("url:../../img/icons.svg"); // Parcel 2
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class BookmarksView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector('.bookmarks__list');
    _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it ;)';
    _message = '';
    addHandlerRender(handler) {
        window.addEventListener('load', handler);
    }
    _generateMarkup() {
        return this._data.map((bookmark)=>(0, _previewViewJsDefault.default).render(bookmark, false)).join('');
    }
}
exports.default = new BookmarksView();

},{"./View.js":"l0Asn","./previewView.js":"8rL4Y","url:../../img/icons.svg":"apwnT","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8Ye1u":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg"); // Parcel 2
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class AddRecipeView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector('.upload');
    _message = 'Recipe was successfully uploaded :)';
    _window = document.querySelector('.add-recipe-window');
    _overlay = document.querySelector('.overlay');
    _btnOpen = document.querySelector('.nav__btn--add-recipe');
    _btnClose = document.querySelector('.btn--close-modal');
    constructor(){
        super();
        this._addHandlerShowWindow();
        this._addHandlerHideWindow();
    }
    toggleWindow() {
        this._overlay.classList.toggle('hidden');
        this._window.classList.toggle('hidden');
    }
    _addHandlerShowWindow() {
        this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
    }
    _addHandlerHideWindow() {
        this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
        this._overlay.addEventListener('click', this.toggleWindow.bind(this));
    }
    addHandlerUpload(handler) {
        this._parentElement.addEventListener('submit', function(e) {
            e.preventDefault();
            const dataArr = [
                ...new FormData(this)
            ];
            const data = Object.fromEntries(dataArr);
            handler(data);
        });
    }
    _generateMarkup() {}
}
exports.default = new AddRecipeView();

},{"./View.js":"l0Asn","url:../../img/icons.svg":"apwnT","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["hzm12","dGopa"], "dGopa", "parcelRequirea6cc", "./", "/")

//# sourceMappingURL=starter.7c28844b.js.map
