(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[452],{1166:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/works/pichu2",function(){return r(2088)}])},2034:(e,t,r)=>{"use strict";r.d(t,{$S:()=>p,Ei:()=>u,HQ:()=>x});var n=r(4848),i=r(1106),s=r.n(i),a=r(9965),l=r.n(a),c=r(6287),o=r(9199),d=r(4045),h=r(7437);let u=e=>{let{children:t,href:r,title:i,thumbnail:s}=e;return(0,n.jsx)(c.az,{w:"100%",textAlign:"center",children:(0,n.jsxs)(o.Q,{cursor:"pointer",children:[(0,n.jsx)(l(),{src:s,alt:i,className:"grid-item-thumbnail",loading:"lazy"}),(0,n.jsx)(o.r,{href:r,target:"_blank",children:(0,n.jsx)(d.E,{mt:2,children:i})}),(0,n.jsx)(d.E,{fontSize:14,children:t})]})})},x=e=>{let{children:t,title:r,thumbnail:i}=e;return(0,n.jsx)(c.az,{w:"100%",textAlign:["left","left"],children:(0,n.jsxs)(o.Q,{as:s(),href:"/#",scroll:!1,cursor:"pointer",children:[(0,n.jsx)(l(),{src:i,alt:r,className:"grid-item-thumbnail",placeholder:"blur"}),(0,n.jsx)(o.r,{as:"div",href:"/#",children:(0,n.jsx)(d.E,{mt:2,fontSize:20,children:r})}),(0,n.jsx)(d.E,{fontSize:14,children:t})]})})},p=()=>(0,n.jsx)(h.mL,{styles:"\n      .grid-item-thumbnail {\n        border-radius: 12px;\n      }\n    "})},5372:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var n=r(4848),i=r(8063),s=r(3368),a=r.n(s),l=r(2034);let c={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:-0,y:20}},o=e=>{let{children:t,title:r}=e,s="".concat(r," - Aditia A. Pratama");return(0,n.jsx)(i.P.article,{initial:"hidden",animate:"enter",exit:"exit",variants:c,transition:{duration:.4,type:"easeInOut"},style:{position:"relative"},children:(0,n.jsxs)(n.Fragment,{children:[r&&(0,n.jsxs)(a(),{children:[(0,n.jsx)("title",{children:s}),(0,n.jsx)("meta",{name:"twitter:title",content:s}),(0,n.jsx)("meta",{property:"og:title",content:s})]}),t,(0,n.jsx)(l.$S,{})]})})}},9296:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var n=r(4577);function i(){let e=(0,n._)(["\n  text-align: justify;\n  text-indent: 1em;\n  hyphens: auto;\n  margin-top: 8px;\n  line-height: 1.9em;\n"]);return i=function(){return e},e}let s=r(5505).A.p(i())},5302:(e,t,r)=>{"use strict";r.d(t,{W8:()=>v,hE:()=>y,f7:()=>g});var n=r(4848),i=r(1106),s=r.n(i),a=r(6287),l=r(874),c=r(8340),o=r(8855),d=(0,o.R)(function(e,t){let{htmlWidth:r,htmlHeight:i,alt:s,...a}=e;return(0,n.jsx)("img",{width:r,height:i,ref:t,alt:s,...a})});d.displayName="NativeImage";var h=r(1600),u=r(6540),x=(e,t)=>"loaded"!==e&&"beforeLoadOrError"===t||"failed"===e&&"onError"===t,p=r(4934),m=(0,o.R)(function(e,t){let{fallbackSrc:r,fallback:i,src:s,srcSet:a,align:l,fit:c,loading:o,ignoreFallback:m,crossOrigin:j,fallbackStrategy:f="beforeLoadOrError",referrerPolicy:y,...g}=e,v=void 0!==r||void 0!==i,b=null!=o||m||!v,w=x(function(e){let{loading:t,src:r,srcSet:n,onLoad:i,onError:s,crossOrigin:a,sizes:l,ignoreFallback:c}=e,[o,d]=(0,u.useState)("pending");(0,u.useEffect)(()=>{d(r?"loading":"pending")},[r]);let x=(0,u.useRef)(),p=(0,u.useCallback)(()=>{if(!r)return;m();let e=new Image;e.src=r,a&&(e.crossOrigin=a),n&&(e.srcset=n),l&&(e.sizes=l),t&&(e.loading=t),e.onload=e=>{m(),d("loaded"),null==i||i(e)},e.onerror=e=>{m(),d("failed"),null==s||s(e)},x.current=e},[r,a,n,l,i,s,t]),m=()=>{x.current&&(x.current.onload=null,x.current.onerror=null,x.current=null)};return(0,h.U)(()=>{if(!c)return"loading"===o&&p(),()=>{m()}},[o,p,c]),c?"loaded":o}({...e,crossOrigin:j,ignoreFallback:b}),f),k={ref:t,objectFit:c,objectPosition:l,...b?g:function(e,t=[]){let r=Object.assign({},e);for(let e of t)e in r&&delete r[e];return r}(g,["onError","onLoad"])};return w?i||(0,n.jsx)(p.B.img,{as:d,className:"chakra-image__placeholder",src:r,...k}):(0,n.jsx)(p.B.img,{as:d,src:s,srcSet:a,crossOrigin:j,loading:o,referrerPolicy:y,className:"chakra-image",...k})});m.displayName="Image";var j=r(3285),f=r(1703);let y=e=>{let{children:t}=e;return(0,n.jsxs)(a.az,{children:[(0,n.jsx)(l.N,{as:s(),href:"/works",children:"Works"}),(0,n.jsxs)("span",{children:[" ",(0,n.jsx)(f.v,{})," "]}),(0,n.jsx)(c.D,{display:"inline-block",as:"h3",fontSize:20,mb:4,children:t})]})},g=e=>{let{src:t,alt:r}=e;return(0,n.jsx)(m,{borderRadius:"lg",w:"full",src:t,alt:r,mb:4})},v=e=>{let{children:t}=e;return(0,n.jsx)(j.E,{colorScheme:"green",mr:2,children:t})}},2088:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var n=r(4848),i=r(6272),s=r(3285),a=r(981),l=r(8340),c=r(1238),o=r(874),d=r(5372),h=r(3384),u=r(5302),x=r(9296);let p=()=>(0,n.jsx)(d.A,{title:"pichu*pichu",children:(0,n.jsxs)(i.m,{children:[(0,n.jsxs)(u.hE,{children:["pichu*pichu ",(0,n.jsx)(s.E,{children:"2010"})]}),(0,n.jsx)(x.A,{children:"A Twitter client app for iPhone Safari, made in the iPhone 3GS era. I built it for my research work at a graduate school. Got over 2,000 users."}),(0,n.jsxs)(a.B8,{ml:4,my:4,children:[(0,n.jsxs)(a.ck,{children:[(0,n.jsx)(u.W8,{children:"Platform"}),(0,n.jsx)("span",{children:"iPhone Safari"})]}),(0,n.jsxs)(a.ck,{children:[(0,n.jsx)(u.W8,{children:"Stack"}),(0,n.jsx)("span",{children:"PHP, jQuery, MySQL"})]})]}),(0,n.jsx)(l.D,{as:"h4",fontSize:16,my:6,children:(0,n.jsx)(c.o,{children:"Media coverage"})}),(0,n.jsxs)(a.Xy,{my:4,children:[(0,n.jsx)(a.ck,{children:(0,n.jsxs)(o.N,{href:"http://www.donpy.net/standard-entry/app-reiview/4303.html",children:[(0,n.jsx)(s.E,{mr:2,children:"覚醒する @CDiP"}),"Webアプリ版twitterクライアントの「pichu*pichu」が凄い。"," ",(0,n.jsx)(h.p,{mx:"2px"})]})}),(0,n.jsx)(a.ck,{children:(0,n.jsxs)(o.N,{href:"http://labs.laurahouse.net/articles/iphone/1115.html",children:[(0,n.jsx)(s.E,{mr:2,children:"LauraHouse Labs"}),"知っておきたいWebアプリ版Twitterクライアント活用法"," ",(0,n.jsx)(h.p,{mx:"2px"})]})})]}),(0,n.jsx)(u.f7,{src:"/images/works/pichu2_eyecatch.png",alt:"Pichu*Pichu"}),(0,n.jsx)(u.f7,{src:"/images/works/pichu2_01.png",alt:"Pichu*Pichu"})]})})},1703:(e,t,r)=>{"use strict";r.d(t,{v:()=>n});var n=(0,r(3153).w)({d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z",displayName:"ChevronRightIcon"})},3384:(e,t,r)=>{"use strict";r.d(t,{p:()=>s});var n=r(3153),i=r(4848),s=(0,n.w)({displayName:"ExternalLinkIcon",path:(0,i.jsxs)("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"2",children:[(0,i.jsx)("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),(0,i.jsx)("path",{d:"M15 3h6v6"}),(0,i.jsx)("path",{d:"M10 14L21 3"})]})})},981:(e,t,r)=>{"use strict";r.d(t,{B8:()=>x,Xy:()=>p,ck:()=>m});var n=r(4393),i=r(61),s=r(1117),a=r(8855),l=r(3352),c=r(4515),o=r(4934),d=r(4848),[h,u]=(0,i.q)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),x=(0,a.R)(function(e,t){let r=(0,l.o5)("List",e),{children:n,styleType:i="none",stylePosition:a,spacing:u,...x}=(0,c.MN)(e),p=(0,s.a)(n);return(0,d.jsx)(h,{value:r,children:(0,d.jsx)(o.B.ul,{ref:t,listStyleType:i,listStylePosition:a,role:"list",__css:{...r.container,...u?{"& > *:not(style) ~ *:not(style)":{mt:u}}:{}},...x,children:p})})});x.displayName="List",(0,a.R)((e,t)=>{let{as:r,...n}=e;return(0,d.jsx)(x,{ref:t,as:"ol",styleType:"decimal",marginStart:"1em",...n})}).displayName="OrderedList";var p=(0,a.R)(function(e,t){let{as:r,...n}=e;return(0,d.jsx)(x,{ref:t,as:"ul",styleType:"initial",marginStart:"1em",...n})});p.displayName="UnorderedList";var m=(0,a.R)(function(e,t){let r=u();return(0,d.jsx)(o.B.li,{ref:t,...e,__css:r.item})});m.displayName="ListItem",(0,a.R)(function(e,t){let r=u();return(0,d.jsx)(n.I,{ref:t,role:"presentation",...e,__css:r.icon})}).displayName="ListIcon"},1238:(e,t,r)=>{"use strict";r.d(t,{o:()=>a});var n=r(4934),i=r(8855),s=r(4848),a=(0,n.B)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});a.displayName="Center";var l={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}};(0,i.R)(function(e,t){let{axis:r="both",...i}=e;return(0,s.jsx)(n.B.div,{ref:t,__css:l[r],...i,position:"absolute"})})},3285:(e,t,r)=>{"use strict";r.d(t,{E:()=>o});var n=r(8855),i=r(3352),s=r(4515),a=r(4934),l=r(9857),c=r(4848),o=(0,n.R)(function(e,t){let r=(0,i.Vl)("Badge",e),{className:n,...o}=(0,s.MN)(e);return(0,c.jsx)(a.B.span,{ref:t,className:(0,l.cx)("chakra-badge",e.className),...o,__css:{display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle",...r}})});o.displayName="Badge"}},e=>{var t=t=>e(e.s=t);e.O(0,[339,636,593,792],()=>t(1166)),_N_E=e.O()}]);