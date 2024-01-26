var v=Object.defineProperty;var C=(e,t,r)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var p=(e,t,r)=>(C(e,typeof t!="symbol"?t+"":t,r),r);import{A as h,D as w,c as f,d as E,m as F,f as N,l as T,g as A,a as L}from"./2.l2C0bHUs.js";import"./session.UYN2b1Qc.js";const _=e=>()=>({async network(t,{client:r,initialValue:a,resolve:n,marshalVariables:s}){if(t.artifact.kind===h.Fragment)return n(t,a);const i=t.fetch??globalThis.fetch,o={name:t.name,text:t.text,hash:t.hash,variables:s(t)};let c=P(r.url,t.fetchParams);e&&(typeof e=="string"?c=P(e,t.fetchParams):c=e);const l=await c({fetch:(u,d)=>{const b=D(o,d)??d;return i(u,b)},metadata:t.metadata,session:t.session||{},...o});n(t,{fetching:!1,variables:t.variables??{},data:l.data,errors:!l.errors||l.errors.length===0?null:l.errors,partial:!1,stale:!1,source:w.Network})}}),P=(e,t)=>{if(!e)throw new Error("Could not find configured client url. Please specify one in your HoudiniClient constructor.");return async({fetch:r,name:a,text:n,variables:s})=>await(await r(e,{method:"POST",body:JSON.stringify({operationName:a,query:n,variables:s}),...t,headers:{Accept:"application/graphql+json, application/json","Content-Type":"application/json",...t==null?void 0:t.headers}})).json()};function D(e,t){const{files:r}=k({variables:e.variables});if(r.size){const a=t;let n={};if(a!=null&&a.headers){const c=Object.entries(a==null?void 0:a.headers).filter(([l,u])=>!(l.toLowerCase()=="content-type"&&u.toLowerCase()=="application/json"));n=Object.fromEntries(c)}const s=new FormData;t&&(t!=null&&t.body)?s.set("operations",t==null?void 0:t.body):s.set("operations",JSON.stringify({operationName:e.name,query:e.text,variables:e.variables}));const i={};let o=0;return r.forEach(c=>{i[++o]=c}),s.set("map",JSON.stringify(i)),o=0,r.forEach((c,l)=>{s.set(`${++o}`,l,l.name)}),{...a,headers:n,body:s}}}function S(e){return typeof File<"u"&&e instanceof File||typeof Blob<"u"&&e instanceof Blob}function k(e){if(!arguments.length)throw new TypeError("Argument 1 `value` is required.");const t=new Map,r=new Map;function a(n,s,i){if(S(n)){const l=r.get(n);return l?l.push(s):r.set(n,[s]),null}const o=Array.isArray(n)||typeof FileList<"u"&&n instanceof FileList,c=I(n);if(o||c){let l=t.get(n);const u=!l;if(u&&(l=o?[]:n instanceof Object?{}:Object.create(null),t.set(n,l)),!i.has(n)){const d=s?`${s}.`:"",b=new Set(i).add(n);if(o){let y=0;for(const m of n){const O=a(m,d+y++,b);u&&l.push(O)}}else for(const y in n){const m=a(n[y],d+y,b);u&&(l[y]=m)}}return l}return n}return{clone:a(e,"",new Set),files:r}}function I(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}const g=(e,t)=>()=>{const r=t(),a=s=>s?(i,o)=>i.artifact.kind!==e?o.next(i):s(i,o):void 0,n=s=>s?(i,o)=>i.artifact.kind!==e?o.resolve(i):s(i,o):void 0;return{start:a(r.start),network:a(r.network),afterNetwork:n(r.afterNetwork),end:n(r.end),catch:r.catch?(s,i)=>r.catch(s,i):void 0,cleanup:(...s)=>{var i;return(i=r.cleanup)==null?void 0:i.call(r,...s)}}},q=g(h.Query,function(){let e=null,t=null;return{start(r,{next:a}){r.variables={...t,...r.variables},a(r)},end(r,{resolve:a,marshalVariables:n,variablesChanged:s}){var i,o;if(s(r)&&!((i=r.cacheParams)!=null&&i.disableSubscriptions)){e&&f.unsubscribe(e,((o=e.variables)==null?void 0:o.call(e))||{}),t={...n(r)};const c=t;e={rootType:r.artifact.rootType,selection:r.artifact.selection,variables:()=>c,set:l=>{a(r,{data:l,errors:null,fetching:!1,partial:!1,stale:!1,source:w.Cache,variables:r.variables??{}})}},f.subscribe(e,t)}a(r)},cleanup(){var r;e&&(f.unsubscribe(e,(r=e.variables)==null?void 0:r.call(e)),t=null)}}}),M=g(h.Fragment,function(){let e=null,t=null;return{start(r,{next:a,resolve:n,variablesChanged:s,marshalVariables:i}){var c,l;if(!r.stuff.parentID)return a(r);const o={parent:r.stuff.parentID,variables:i(r)};if(!((c=r.cacheParams)!=null&&c.disableSubscriptions)&&(!E(t,o)||s(r))){e&&f.unsubscribe(e,((l=e.variables)==null?void 0:l.call(e))||{});const u=i(r);e={rootType:r.artifact.rootType,selection:r.artifact.selection,variables:()=>u,parentID:r.stuff.parentID,set:d=>{n(r,{data:d,errors:null,fetching:!1,partial:!1,stale:!1,source:w.Cache,variables:u})}},f.subscribe(e,u),t=o}a(r)},cleanup(){var r;e&&f.unsubscribe(e,(r=e.variables)==null?void 0:r.call(e))}}}),R=g(h.Mutation,()=>({async start(e,{next:t,marshalVariables:r}){const a=f._internal_unstable.storage.createLayer(!0),n=e.stuff.optimisticResponse;let s=[];n&&(s=f.write({selection:e.artifact.selection,data:await F({selection:e.artifact.selection,data:n}),variables:r(e),layer:a.id})),e.cacheParams={...e.cacheParams,layer:a,notifySubscribers:s,forceNotify:!0},t(e)},afterNetwork(e,{resolve:t}){var r;(r=e.cacheParams)!=null&&r.layer&&f.clearLayer(e.cacheParams.layer.id),t(e)},end(e,{resolve:t,value:r}){var n,s;r.errors&&r.errors.length>0&&(n=e.cacheParams)!=null&&n.layer&&f.clearLayer(e.cacheParams.layer.id),(s=e.cacheParams)!=null&&s.layer&&f._internal_unstable.storage.resolveLayer(e.cacheParams.layer.id),t(e)},catch(e,{error:t}){var r;if((r=e.cacheParams)!=null&&r.layer){const{layer:a}=e.cacheParams;f.clearLayer(a.id),f._internal_unstable.storage.resolveLayer(a.id)}throw t}})),H=({operations:e,error:t})=>()=>{const r=e.includes("all"),a=n=>r||{[h.Query]:e.includes("query"),[h.Mutation]:e.includes("mutation"),[h.Fragment]:!1,[h.Subscription]:e.includes("subscription")}[n];return{async end(n,{value:s,resolve:i}){if(s.errors&&s.errors.length>0&&a(n.artifact.kind))throw await(t??J)(s.errors,n);i(n)}}},J=async e=>new Error(e.map(t=>t.message).join(". ")+"."),B=(e=()=>({}))=>()=>({beforeNetwork(t,{next:r,marshalVariables:a}){r({...t,fetchParams:e({config:t.config,policy:t.policy,metadata:t.metadata,session:t.session,stuff:t.stuff,document:t.artifact,variables:a(t),text:t.text,hash:t.hash})})}}),K=[];var Q=K;class W{constructor({url:t,fetchParams:r,plugins:a,pipeline:n,throwOnError:s}={}){p(this,"url");p(this,"plugins");p(this,"throwOnError_operations");p(this,"proxies",{});p(this,"componentCache",{});var o,c;if(a&&n)throw new Error("A client cannot be given a pipeline and a list of plugins at the same time.");this.throwOnError_operations=(s==null?void 0:s.operations)??[],this.plugins=N([].concat(s?[H(s)]:[],B(r),n??[q,R,M].concat(a??[],Q,_())));let i=((c=(o=globalThis.process)==null?void 0:o.env)==null?void 0:c.HOUDINI_PORT)??"5173";this.url=t??(globalThis.window?"":`https://localhost:${i}`)+T(A())}observe({enableCache:t=!0,fetching:r=!1,...a}){return new L({client:this,plugins:j(this.plugins),fetching:r,enableCache:t,...a})}registerProxy(t,r){this.proxies[t]=r}}function j(e){return e.reduce((t,r)=>{if(typeof r!="function")throw new Error("Encountered client plugin that's not a function");const a=r();if(!a)return t;if(!Array.isArray(a))return t.concat(a);for(const n of a)if(n){if(typeof n=="function")return t.concat(j([n]));t.push(n)}return t},[])}const V=new W({url:"http://localhost:8081/query"});export{V as default};
