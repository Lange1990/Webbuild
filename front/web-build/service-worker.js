if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise(async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()})),r.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},r=(r,i)=>{Promise.all(r.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(r)};self.define=(r,n,s)=>{i[r]||(i[r]=Promise.resolve().then(()=>{let i={};const t={uri:location.origin+r.slice(1)};return Promise.all(n.map(r=>{switch(r){case"exports":return i;case"module":return t;default:return e(r)}})).then(e=>{const r=s(...e);return i.default||(i.default=r),i})}))}}define("./service-worker.js",["./workbox-37ea05e8"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/./fonts/AntDesign.ttf",revision:"3a2ba31570920eeb9b1d217cabe58315"},{url:"/./fonts/Entypo.ttf",revision:"744ce60078c17d86006dd0edabcd59a7"},{url:"/./fonts/Feather.ttf",revision:"6beba7e6834963f7f171d3bdd075c915"},{url:"/./fonts/FontAwesome.ttf",revision:"b06871f281fee6b241d60582ae9369b9"},{url:"/./fonts/FontAwesome5_Brands.ttf",revision:"c6aef942e3668158ec29d4adcb2e768f"},{url:"/./fonts/FontAwesome5_Solid.ttf",revision:"872545dde71de3842234bf6afe80c4cb"},{url:"/./fonts/Fontisto.ttf",revision:"b49ae8ab2dbccb02c4d11caaacf09eab"},{url:"/./fonts/Foundation.ttf",revision:"e20945d7c929279ef7a6f1db184a4470"},{url:"/./fonts/Ionicons.ttf",revision:"b2e0fc821c6886fb3940f85a3320003e"},{url:"/./fonts/MaterialCommunityIcons.ttf",revision:"5a293a273bee8d740a045d9922b9a9ae"},{url:"/./fonts/MaterialIcons.ttf",revision:"a37b0c01c0baf1888ca812cc0508f6e2"},{url:"/./fonts/SimpleLineIcons.ttf",revision:"d2285965fe34b05465047401b8595dd0"},{url:"/expo-service-worker.js",revision:"48c7ed4e7da9792af288a60d7242d615"},{url:"/favicon-16.png",revision:"afd5733ac789ab1795f1ed7a26e1ecd3"},{url:"/favicon-32.png",revision:"3d85359b37ca7590f8e91d593d02ddaf"},{url:"/favicon.ico",revision:"5e52768b0f7cbb62cbe07751add33101"},{url:"/index.html",revision:"6941a4da245c716a7736cfa1ab02f5ad"},{url:"/manifest.json",revision:"87c7014ad7a082e63ee6e25f131c0d7e"},{url:"/register-service-worker.js",revision:"04cf1ae10e30155ca207400239ec1cbd"},{url:"/serve.json",revision:"d0c694b562b2208635f250762cd7fc79"},{url:"/static/js/2.f5876191.chunk.js",revision:"1661672b8ec448955776c3a78271ed4d"},{url:"/static/js/app.74f2d891.chunk.js",revision:"fae5d9f60df8fa54fff8d154fedf1b6a"},{url:"/static/js/runtime~app.a6639e49.js",revision:"46e6b84eb954502bd93d0bd9569bf6fb"},{url:"/static/media/shipro.720cc555.png",revision:"720cc5552ff5478d2b16920bdf8c405d"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/^\/_/,/\/[^\/]+\.[^\/]+$/]})),e.registerRoute(/^https?.*/,new e.NetworkFirst({cacheName:"offlineCache",plugins:[new e.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0})]}),"GET")}));
//# sourceMappingURL=service-worker.js.map