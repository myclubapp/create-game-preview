const e="create-game-preview";var t=Object.defineProperty;var n=(e,n)=>{for(var r in n)t(e,r,{get:n[r],enumerable:true})};var r={};var l="http://www.w3.org/2000/svg";var s="http://www.w3.org/1999/xhtml";var i=e=>e!=null;var o=e=>{e=typeof e;return e==="object"||e==="function"};function a(e){var t,n,r;return(r=(n=(t=e.head)==null?void 0:t.querySelector('meta[name="csp-nonce"]'))==null?void 0:n.getAttribute("content"))!=null?r:void 0}var f={};n(f,{err:()=>u,map:()=>v,ok:()=>c,unwrap:()=>h,unwrapErr:()=>d});var c=e=>({isOk:true,isErr:false,value:e});var u=e=>({isOk:false,isErr:true,value:e});function v(e,t){if(e.isOk){const n=t(e.value);if(n instanceof Promise){return n.then((e=>c(e)))}else{return c(n)}}if(e.isErr){const t=e.value;return u(t)}throw"should never get here"}var h=e=>{if(e.isOk){return e.value}else{throw e.value}};var d=e=>{if(e.isErr){return e.value}else{throw e.value}};var p=(e,t="")=>{{return()=>{}}};var m=(e,t)=>{{return()=>{}}};var y="{visibility:hidden}.hydrated{visibility:inherit}";var w="slot-fb{display:contents}slot-fb[hidden]{display:none}";var b=(e,t,...n)=>{let r=null;let l=null;let s=false;let i=false;const a=[];const f=t=>{for(let n=0;n<t.length;n++){r=t[n];if(Array.isArray(r)){f(r)}else if(r!=null&&typeof r!=="boolean"){if(s=typeof e!=="function"&&!o(r)){r=String(r)}if(s&&i){a[a.length-1].t+=r}else{a.push(s?$(null,r):r)}i=s}}};f(n);if(t){if(t.key){l=t.key}}const c=$(e,null);c.l=t;if(a.length>0){c.i=a}{c.o=l}return c};var $=(e,t)=>{const n={u:0,v:e,t,h:null,i:null};{n.l=null}{n.o=null}return n};var g={};var S=e=>e&&e.v===g;var j=(e,t)=>{if(e!=null&&!o(e)){if(t&1){return String(e)}return e}return e};var O=(e,t,n)=>{const r=je.ce(t,n);e.dispatchEvent(r);return r};var k=new WeakMap;var C=(e,t,n)=>{let r=$e.get(e);if(ke&&n){r=r||new CSSStyleSheet;if(typeof r==="string"){r=t}else{r.replaceSync(t)}}else{r=t}$e.set(e,r)};var E=(e,t,n)=>{var r;const l=P(t);const s=$e.get(l);e=e.nodeType===11?e:Se;if(s){if(typeof s==="string"){e=e.head||e;let n=k.get(e);let i;if(!n){k.set(e,n=new Set)}if(!n.has(l)){{i=Se.createElement("style");i.innerHTML=s;const t=(r=je.p)!=null?r:a(Se);if(t!=null){i.setAttribute("nonce",t)}e.insertBefore(i,e.querySelector("link"))}if(t.u&4){i.innerHTML+=w}if(n){n.add(l)}}}else if(!e.adoptedStyleSheets.includes(s)){e.adoptedStyleSheets=[...e.adoptedStyleSheets,s]}}return l};var M=e=>{const t=e.m;const n=e.$hostElement$;const r=t.u;const l=p("attachStyles",t.$);const s=E(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);if(r&10){n["s-sc"]=s;n.classList.add(s+"-h")}l()};var P=(e,t)=>"sc-"+e.$;var x=(e,t,n,r,l,s)=>{if(n!==r){let i=me(e,t);t.toLowerCase();if(t==="key");else{const a=o(r);if((i||a&&r!==null)&&!l){try{if(!e.tagName.includes("-")){const l=r==null?"":r;if(t==="list"){i=false}else if(n==null||e[t]!=l){e[t]=l}}else{e[t]=r}}catch(e){}}if(r==null||r===false){if(r!==false||e.getAttribute(t)===""){{e.removeAttribute(t)}}}else if((!i||s&4||l)&&!a){r=r===true?"":r;{e.setAttribute(t,r)}}}}};var L=(e,t,n)=>{const l=t.h.nodeType===11&&t.h.host?t.h.host:t.h;const s=e&&e.l||r;const i=t.l||r;{for(const e of T(Object.keys(s))){if(!(e in i)){x(l,e,s[e],void 0,n,t.u)}}}for(const e of T(Object.keys(i))){x(l,e,s[e],i[e],n,t.u)}};function T(e){return e.includes("ref")?[...e.filter((e=>e!=="ref")),"ref"]:e}var U;var A;var H=false;var N=false;var W=(e,t,n,r)=>{const o=t.i[n];let a=0;let f;let c;if(o.t!==null){f=o.h=Se.createTextNode(o.t)}else{if(!N){N=o.v==="svg"}f=o.h=Se.createElementNS(N?l:s,o.v);if(N&&o.v==="foreignObject"){N=false}{L(null,o,N)}if(i(U)&&f["s-si"]!==U){f.classList.add(f["s-si"]=U)}if(o.i){for(a=0;a<o.i.length;++a){c=W(e,o,a);if(c){f.appendChild(c)}}}{if(o.v==="svg"){N=false}else if(f.tagName==="foreignObject"){N=true}}}f["s-hn"]=A;return f};var D=(e,t,n,r,l,s)=>{let i=e;let o;if(i.shadowRoot&&i.tagName===A){i=i.shadowRoot}for(;l<=s;++l){if(r[l]){o=W(null,n,l);if(o){r[l].h=o;I(i,o,t)}}}};var R=(e,t,n)=>{for(let r=t;r<=n;++r){const t=e[r];if(t){const e=t.h;if(e){e.remove()}}}};var q=(e,t,n,r,l=false)=>{let s=0;let i=0;let o=0;let a=0;let f=t.length-1;let c=t[0];let u=t[f];let v=r.length-1;let h=r[0];let d=r[v];let p;let m;while(s<=f&&i<=v){if(c==null){c=t[++s]}else if(u==null){u=t[--f]}else if(h==null){h=r[++i]}else if(d==null){d=r[--v]}else if(F(c,h,l)){G(c,h,l);c=t[++s];h=r[++i]}else if(F(u,d,l)){G(u,d,l);u=t[--f];d=r[--v]}else if(F(c,d,l)){G(c,d,l);I(e,c.h,u.h.nextSibling);c=t[++s];d=r[--v]}else if(F(u,h,l)){G(u,h,l);I(e,u.h,c.h);u=t[--f];h=r[++i]}else{o=-1;{for(a=s;a<=f;++a){if(t[a]&&t[a].o!==null&&t[a].o===h.o){o=a;break}}}if(o>=0){m=t[o];if(m.v!==h.v){p=W(t&&t[i],n,o)}else{G(m,h,l);t[o]=void 0;p=m.h}h=r[++i]}else{p=W(t&&t[i],n,i);h=r[++i]}if(p){{I(c.h.parentNode,p,c.h)}}}}if(s>f){D(e,r[v+1]==null?null:r[v+1].h,n,r,i,v)}else if(i>v){R(t,s,f)}};var F=(e,t,n=false)=>{if(e.v===t.v){if(!n){return e.o===t.o}return true}return false};var G=(e,t,n=false)=>{const r=t.h=e.h;const l=e.i;const s=t.i;const i=t.v;const o=t.t;if(o===null){{N=i==="svg"?true:i==="foreignObject"?false:N}{if(i==="slot"&&!H);else{L(e,t,N)}}if(l!==null&&s!==null){q(r,l,t,s,n)}else if(s!==null){if(e.t!==null){r.textContent=""}D(r,null,t,s,0,s.length-1)}else if(l!==null){R(l,0,l.length-1)}if(N&&i==="svg"){N=false}}else if(e.t!==o){r.data=o}};var I=(e,t,n)=>{const r=e==null?void 0:e.insertBefore(t,n);return r};var V=(e,t,n=false)=>{const r=e.$hostElement$;const l=e.m;const s=e.S||$(null,null);const i=S(t)?t:b(null,null,t);A=r.tagName;if(n&&i.l){for(const e of Object.keys(i.l)){if(r.hasAttribute(e)&&!["key","ref","style","class"].includes(e)){i.l[e]=r[e]}}}i.v=null;i.u|=4;e.S=i;i.h=s.h=r.shadowRoot||r;{U=r["s-sc"]}H=(l.u&1)!==0;G(s,i,n)};var _=(e,t)=>{if(t&&!e.j&&t["s-p"]){t["s-p"].push(new Promise((t=>e.j=t)))}};var z=(e,t)=>{{e.u|=16}if(e.u&4){e.u|=512;return}_(e,e.O);const n=()=>B(e,t);return Ue(n)};var B=(e,t)=>{const n=p("scheduleUpdate",e.m.$);const r=e.k;let l;if(t){{l=ee(r,"componentWillLoad")}}n();return J(l,(()=>Q(e,r,t)))};var J=(e,t)=>K(e)?e.then(t):t();var K=e=>e instanceof Promise||e&&e.then&&typeof e.then==="function";var Q=async(e,t,n)=>{var r;const l=e.$hostElement$;const s=p("update",e.m.$);const i=l["s-rc"];if(n){M(e)}const o=p("render",e.m.$);{X(e,t,l,n)}if(i){i.map((e=>e()));l["s-rc"]=void 0}o();s();{const t=(r=l["s-p"])!=null?r:[];const n=()=>Y(e);if(t.length===0){n()}else{Promise.all(t).then(n);e.u|=4;t.length=0}}};var X=(e,t,n,r)=>{try{t=t.render();{e.u&=~16}{e.u|=2}{{{V(e,t,r)}}}}catch(t){ye(t,e.$hostElement$)}return null};var Y=e=>{const t=e.m.$;const n=e.$hostElement$;const r=p("postUpdate",t);const l=e.k;const s=e.O;if(!(e.u&64)){e.u|=64;{te(n)}{ee(l,"componentDidLoad")}r();{e.C(n);if(!s){Z()}}}else{r()}{if(e.j){e.j();e.j=void 0}if(e.u&512){Te((()=>z(e,false)))}e.u&=~(4|512)}};var Z=t=>{{te(Se.documentElement)}Te((()=>O(ge,"appload",{detail:{namespace:e}})))};var ee=(e,t,n)=>{if(e&&e[t]){try{return e[t](n)}catch(e){ye(e)}}return void 0};var te=e=>e.classList.add("hydrated");var ne=(e,t)=>he(e).M.get(t);var re=(e,t,n,r)=>{const l=he(e);if(!l){throw new Error(`Couldn't find host element for "${r.$}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/ionic-team/stencil/issues/5457).`)}const s=l.M.get(t);const i=l.u;const o=l.k;n=j(n,r.P[t][0]);const a=Number.isNaN(s)&&Number.isNaN(n);const f=n!==s&&!a;if((!(i&8)||s===void 0)&&f){l.M.set(t,n);if(o){if((i&(2|16))===2){z(l,false)}}}};var le=(e,t,n)=>{var r;const l=e.prototype;if(t.P){const s=Object.entries(t.P);s.map((([e,[r]])=>{if(r&31||n&2&&r&32){Object.defineProperty(l,e,{get(){return ne(this,e)},set(n){re(this,e,n,t)},configurable:true,enumerable:true})}}));if(n&1){const n=new Map;l.attributeChangedCallback=function(e,r,s){je.jmp((()=>{var i;const o=n.get(e);if(this.hasOwnProperty(o)){s=this[o];delete this[o]}else if(l.hasOwnProperty(o)&&typeof this[o]==="number"&&this[o]==s){return}else if(o==null){const n=he(this);const l=n==null?void 0:n.u;if(l&&!(l&8)&&l&128&&s!==r){const l=n.k;const o=(i=t.L)==null?void 0:i[e];o==null?void 0:o.forEach((t=>{if(l[t]!=null){l[t].call(l,s,r,e)}}))}return}this[o]=s===null&&typeof this[o]==="boolean"?false:s}))};e.observedAttributes=Array.from(new Set([...Object.keys((r=t.L)!=null?r:{}),...s.filter((([e,t])=>t[0]&15)).map((([e,t])=>{const r=t[1]||e;n.set(r,e);return r}))]))}}return e};var se=async(e,t,n,r)=>{let l;if((t.u&32)===0){t.u|=32;const r=n.T;if(r){l=be(n);if(l.then){const e=m();l=await l;e()}if(!l.isProxied){le(l,n,2);l.isProxied=true}const e=p("createInstance",n.$);{t.u|=8}try{new l(t)}catch(e){ye(e)}{t.u&=~8}e()}else{l=e.constructor;customElements.whenDefined(n.$).then((()=>t.u|=128))}if(l.style){let e=l.style;const t=P(n);if(!$e.has(t)){const r=p("registerStyles",n.$);C(t,e,!!(n.u&1));r()}}}const s=t.O;const i=()=>z(t,true);if(s&&s["s-rc"]){s["s-rc"].push(i)}else{i()}};var ie=e=>{};var oe=e=>{if((je.u&1)===0){const t=he(e);const n=t.m;const r=p("connectedCallback",n.$);if(!(t.u&1)){t.u|=1;{let n=e;while(n=n.parentNode||n.host){if(n["s-p"]){_(t,t.O=n);break}}}if(n.P){Object.entries(n.P).map((([t,[n]])=>{if(n&31&&e.hasOwnProperty(t)){const n=e[t];delete e[t];e[t]=n}}))}{se(e,t,n)}}else{if(t==null?void 0:t.k);else if(t==null?void 0:t.U){t.U.then((()=>ie()))}}r()}};var ae=e=>{};var fe=async e=>{if((je.u&1)===0){const t=he(e);if(t==null?void 0:t.k);else if(t==null?void 0:t.U){t.U.then((()=>ae()))}}};var ce=(e,t={})=>{var n;const r=p();const l=[];const s=t.exclude||[];const i=ge.customElements;const o=Se.head;const f=o.querySelector("meta[charset]");const c=Se.createElement("style");const u=[];let v;let h=true;Object.assign(je,t);je.A=new URL(t.resourcesUrl||"./",Se.baseURI).href;let d=false;e.map((e=>{e[1].map((t=>{const n={u:t[0],$:t[1],P:t[2],H:t[3]};if(n.u&4){d=true}{n.P=t[2]}const r=n.$;const o=class extends HTMLElement{constructor(e){super(e);e=this;pe(e,n);if(n.u&1){{{e.attachShadow({mode:"open"})}}}}connectedCallback(){if(v){clearTimeout(v);v=null}if(h){u.push(this)}else{je.jmp((()=>oe(this)))}}disconnectedCallback(){je.jmp((()=>fe(this)))}componentOnReady(){return he(this).U}};n.T=e[0];if(!s.includes(r)&&!i.get(r)){l.push(r);i.define(r,le(o,n,1))}}))}));if(l.length>0){if(d){c.textContent+=w}{c.textContent+=l+y}if(c.innerHTML.length){c.setAttribute("data-styles","");const e=(n=je.p)!=null?n:a(Se);if(e!=null){c.setAttribute("nonce",e)}o.insertBefore(c,f?f.nextSibling:o.firstChild)}}h=false;if(u.length){u.map((e=>e.connectedCallback()))}else{{je.jmp((()=>v=setTimeout(Z,30)))}}r()};var ue=e=>je.p=e;var ve=new WeakMap;var he=e=>ve.get(e);var de=(e,t)=>ve.set(t.k=e,t);var pe=(e,t)=>{const n={u:0,$hostElement$:e,m:t,M:new Map};{n.U=new Promise((e=>n.C=e));e["s-p"]=[];e["s-rc"]=[]}return ve.set(e,n)};var me=(e,t)=>t in e;var ye=(e,t)=>(0,console.error)(e,t);var we=new Map;var be=(e,t,n)=>{const r=e.$.replace(/-/g,"_");const l=e.T;const s=we.get(l);if(s){return s[r]}
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return import(`./${l}.entry.js${""}`).then((e=>{{we.set(l,e)}return e[r]}),ye)};var $e=new Map;var ge=typeof window!=="undefined"?window:{};var Se=ge.document||{head:{}};var je={u:0,A:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,r)=>e.addEventListener(t,n,r),rel:(e,t,n,r)=>e.removeEventListener(t,n,r),ce:(e,t)=>new CustomEvent(e,t)};var Oe=e=>Promise.resolve(e);var ke=(()=>{try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replaceSync==="function"}catch(e){}return false})();var Ce=false;var Ee=[];var Me=[];var Pe=(e,t)=>n=>{e.push(n);if(!Ce){Ce=true;if(t&&je.u&4){Te(Le)}else{je.raf(Le)}}};var xe=e=>{for(let t=0;t<e.length;t++){try{e[t](performance.now())}catch(e){ye(e)}}e.length=0};var Le=()=>{xe(Ee);{xe(Me);if(Ce=Ee.length>0){je.raf(Le)}}};var Te=e=>Oe().then(e);var Ue=Pe(Me,true);export{g as H,ce as b,b as h,Oe as p,de as r,ue as s};
//# sourceMappingURL=p-b1221919.js.map