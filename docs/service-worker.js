if(!self.define){let e,d={};const a=(a,i)=>(a=new URL(a+".js",i).href,d[a]||new Promise((d=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=d,document.head.appendChild(e)}else e=a,importScripts(a),d()})).then((()=>{let e=d[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(d[r])return;let b={};const n=e=>a(e,r),s={module:{uri:r},exports:b,require:n};d[r]=Promise.all(i.map((e=>s[e]||n(e)))).then((e=>(c(...e),b)))}}define(["./workbox-460519b3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon.46cde3b8.png",revision:"ce93b7951ce7b72ff7b113252dbdd83e"},{url:"barcode-detector.module.08f05a63.js",revision:"e3a59eb8d941f3988e09afb0aa479d07"},{url:"barcode-detector.module.08f05a63.js.map",revision:"4d7eb24f014604cd4a9d36326dbceaf2"},{url:"barcode-detector.module.2b61079d.js",revision:"81f8af5faa283173578624936245a0e6"},{url:"barcode-detector.module.2b61079d.js.map",revision:"6b2a09af570039000fbb91abdc8cf494"},{url:"favicon.a05bdb0a.ico",revision:"ece89efb9e6bf43b4a1a4bddc3e6c0ee"},{url:"icon-large-maskable.efa0d40f.png",revision:"90b10ed172c97b3448628f121ea0aec7"},{url:"icon-large.7024db77.png",revision:"e5d0a8a61bad68e4acec2ef4ad4d8f7d"},{url:"icon-medium.870e37b4.png",revision:"3f7bc412b073051c392adb02a8a13713"},{url:"icon-small.3bde0630.png",revision:"bb3189391827df68dd02a6219f83e6ab"},{url:"index.5fa12010.js",revision:"42231dbbcc1ea0328ca28157a2a57195"},{url:"index.5fa12010.js.map",revision:"918dfeec211c012b2f74b842f7946919"},{url:"index.84d098aa.js",revision:"31b3dbcaf6b1ff235919b9a9cd10e3f2"},{url:"index.84d098aa.js.map",revision:"4963b85430cdf416bd1622660b0e781f"},{url:"index.bca43d77.js",revision:"4d25209ed39b5e0e80ff91eeecfe1b01"},{url:"index.bca43d77.js.map",revision:"362aa13eb35c7f2b2d0d344bca76295a"},{url:"index.ca27f089.js",revision:"5899e40da48cc462a3709b94938cd52b"},{url:"index.ca27f089.js.map",revision:"8e95b1500de211796c578a79788375b1"},{url:"index.d7c7340b.css",revision:"9225dce7247a6c2a572eecfc07a6be7c"},{url:"index.d7c7340b.css.map",revision:"5130bb80e978cd22b1a81593060b037f"},{url:"index.ead3ada5.css",revision:"f520d2ba9f860273807201211e9ca525"},{url:"index.ead3ada5.css.map",revision:"8d1a7419db416397f2760ee739180a2d"},{url:"index.html",revision:"1f937b04d126e52822d863c5942a9cb7"},{url:"manifest.webmanifest",revision:"22d5fffa962208a7996cb6375c3e5b35"},{url:"screenshot-dark.da3644e7.png",revision:"a185ccb286400b21b0ec12b551892551"},{url:"screenshot-light.97caf2b4.png",revision:"044629d73b67c08307d03b32ed2e1a33"},{url:"spinner-dark.b333552b.svg",revision:"6cfd3a61069a549a059354e0ec0202dc"},{url:"spinner-light.4452ed29.svg",revision:"609c6274c68c19f6badaf5488b6aeef2"}],{})}));
//# sourceMappingURL=service-worker.js.map
