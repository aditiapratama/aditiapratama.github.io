(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[834],{2706:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/works/walknote",function(){return r(5702)}])},2034:(e,t,r)=>{"use strict";r.d(t,{$S:()=>x,Ei:()=>h,HQ:()=>p});var n=r(4848),s=r(1106),i=r.n(s),a=r(9965),l=r.n(a),o=r(6287),c=r(9199),d=r(4045),u=r(7437);let h=e=>{let{children:t,href:r,title:s,thumbnail:i}=e;return(0,n.jsx)(o.az,{w:"100%",textAlign:"center",children:(0,n.jsxs)(c.Q,{cursor:"pointer",children:[(0,n.jsx)(l(),{src:i,alt:s,className:"grid-item-thumbnail",loading:"lazy"}),(0,n.jsx)(c.r,{href:r,target:"_blank",children:(0,n.jsx)(d.E,{mt:2,children:s})}),(0,n.jsx)(d.E,{fontSize:14,children:t})]})})},p=e=>{let{children:t,category:r="works",id:s,title:a,thumbnail:u}=e;return(0,n.jsx)(o.az,{w:"100%",textAlign:"center",children:(0,n.jsxs)(c.Q,{as:i(),href:"/".concat(r,"/").concat(s),scroll:!1,cursor:"pointer",children:[(0,n.jsx)(l(),{src:u,alt:a,className:"grid-item-thumbnail"}),(0,n.jsx)(c.r,{as:"div",href:"/".concat(r,"/").concat(s),children:(0,n.jsx)(d.E,{mt:2,fontSize:20,children:a})}),(0,n.jsx)(d.E,{fontSize:14,children:t})]})})},x=()=>(0,n.jsx)(u.mL,{styles:"\n      .grid-item-thumbnail {\n        border-radius: 12px;\n      }\n    "})},5372:(e,t,r)=>{"use strict";r.d(t,{A:()=>c});var n=r(4848),s=r(8063),i=r(3368),a=r.n(i),l=r(2034);let o={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:-0,y:20}},c=e=>{let{children:t,title:r}=e,i="".concat(r," - Aditia A. Pratama");return(0,n.jsx)(s.P.article,{initial:"hidden",animate:"enter",exit:"exit",variants:o,transition:{duration:.4,type:"easeInOut"},style:{position:"relative"},children:(0,n.jsxs)(n.Fragment,{children:[r&&(0,n.jsxs)(a(),{children:[(0,n.jsx)("title",{children:i}),(0,n.jsx)("meta",{name:"twitter:title",content:i}),(0,n.jsx)("meta",{property:"og:title",content:i})]}),t,(0,n.jsx)(l.$S,{})]})})}},9296:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var n=r(4577);function s(){let e=(0,n._)(["\n  text-align: justify;\n  text-indent: 1em;\n  hyphens: auto;\n  margin-top: 8px;\n  line-height: 1.9em;\n"]);return s=function(){return e},e}let i=r(5505).A.p(s())},5302:(e,t,r)=>{"use strict";r.d(t,{W8:()=>k,hE:()=>f,f7:()=>w});var n=r(4848),s=r(1106),i=r.n(s),a=r(6287),l=r(874),o=r(8340),c=r(8855),d=(0,c.R)(function(e,t){let{htmlWidth:r,htmlHeight:s,alt:i,...a}=e;return(0,n.jsx)("img",{width:r,height:s,ref:t,alt:i,...a})});d.displayName="NativeImage";var u=r(1600),h=r(6540),p=(e,t)=>"loaded"!==e&&"beforeLoadOrError"===t||"failed"===e&&"onError"===t,x=r(4934),m=(0,c.R)(function(e,t){let{fallbackSrc:r,fallback:s,src:i,srcSet:a,align:l,fit:o,loading:c,ignoreFallback:m,crossOrigin:j,fallbackStrategy:g="beforeLoadOrError",referrerPolicy:f,...w}=e,k=void 0!==r||void 0!==s,y=null!=c||m||!k,v=p(function(e){let{loading:t,src:r,srcSet:n,onLoad:s,onError:i,crossOrigin:a,sizes:l,ignoreFallback:o}=e,[c,d]=(0,h.useState)("pending");(0,h.useEffect)(()=>{d(r?"loading":"pending")},[r]);let p=(0,h.useRef)(),x=(0,h.useCallback)(()=>{if(!r)return;m();let e=new Image;e.src=r,a&&(e.crossOrigin=a),n&&(e.srcset=n),l&&(e.sizes=l),t&&(e.loading=t),e.onload=e=>{m(),d("loaded"),null==s||s(e)},e.onerror=e=>{m(),d("failed"),null==i||i(e)},p.current=e},[r,a,n,l,s,i,t]),m=()=>{p.current&&(p.current.onload=null,p.current.onerror=null,p.current=null)};return(0,u.U)(()=>{if(!o)return"loading"===c&&x(),()=>{m()}},[c,x,o]),o?"loaded":c}({...e,crossOrigin:j,ignoreFallback:y}),g),b={ref:t,objectFit:o,objectPosition:l,...y?w:function(e,t=[]){let r=Object.assign({},e);for(let e of t)e in r&&delete r[e];return r}(w,["onError","onLoad"])};return v?s||(0,n.jsx)(x.B.img,{as:d,className:"chakra-image__placeholder",src:r,...b}):(0,n.jsx)(x.B.img,{as:d,src:i,srcSet:a,crossOrigin:j,loading:c,referrerPolicy:f,className:"chakra-image",...b})});m.displayName="Image";var j=r(3285),g=r(1703);let f=e=>{let{children:t}=e;return(0,n.jsxs)(a.az,{children:[(0,n.jsx)(l.N,{as:i(),href:"/works",children:"Works"}),(0,n.jsxs)("span",{children:[" ",(0,n.jsx)(g.v,{})," "]}),(0,n.jsx)(o.D,{display:"inline-block",as:"h3",fontSize:20,mb:4,children:t})]})},w=e=>{let{src:t,alt:r}=e;return(0,n.jsx)(m,{borderRadius:"lg",w:"full",src:t,alt:r,mb:4})},k=e=>{let{children:t}=e;return(0,n.jsx)(j.E,{colorScheme:"green",mr:2,children:t})}},5702:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m});var n=r(4848),s=r(6272),i=r(3285),a=r(981),l=r(874),o=r(8340),c=r(1238),d=r(5319),u=r(5372),h=r(3384),p=r(5302),x=r(9296);let m=()=>(0,n.jsx)(u.A,{title:"walknote",children:(0,n.jsxs)(s.m,{children:[(0,n.jsxs)(p.hE,{children:["walknote ",(0,n.jsx)(i.E,{children:"2011-2016"})]}),(0,n.jsx)(x.A,{children:"walknote recommends new music you may like based on your music preferences by recognizing your favorite songs stored in your device. You can listen to recommended music just like a radio!"}),(0,n.jsx)(x.A,{children:"This service has been closed. Thank you for over 130,000 registered users!"}),(0,n.jsxs)(a.B8,{ml:4,my:4,children:[(0,n.jsxs)(a.ck,{children:[(0,n.jsx)(p.W8,{children:"Platform"}),(0,n.jsx)("span",{children:"iOS"})]}),(0,n.jsxs)(a.ck,{children:[(0,n.jsx)(p.W8,{children:"Blogpost"}),(0,n.jsxs)(l.N,{href:"https://archive.craftz.dog/blog.odoruinu.net/2016/09/06/farewell-from-walknote/",children:["音楽発掘アプリwalknoteクローズのお知らせ"," ",(0,n.jsx)(h.p,{mx:"2px"})]})]}),(0,n.jsxs)(a.ck,{children:[(0,n.jsx)(p.W8,{children:"Stack"}),(0,n.jsx)("span",{children:"Objective-C, PHP, MongoDB"})]})]}),(0,n.jsx)(o.D,{as:"h4",fontSize:16,my:6,children:(0,n.jsx)(c.o,{children:"Media coverage"})}),(0,n.jsxs)(a.Xy,{my:4,children:[(0,n.jsx)(a.ck,{children:(0,n.jsxs)(l.N,{href:"http://renewal49.hateblo.jp/entry/20120710/1341925681",children:[(0,n.jsx)(i.E,{mr:2,children:"リニューアル式"}),"強力すぎて紹介しそびれていた音楽好きのための神アプリ『walknote』",(0,n.jsx)(h.p,{mx:"2px"})]})}),(0,n.jsx)(a.ck,{children:(0,n.jsxs)(l.N,{href:"http://www.appbank.net/2011/10/15/iphone-application/309349.php",children:[(0,n.jsx)(i.E,{mr:2,children:"appbank"}),"walknote: CD屋の試聴機が、自分向けになって手元に到着。そんな曲探しアプリ。無料。",(0,n.jsx)(h.p,{mx:"2px"})]})}),(0,n.jsxs)(a.ck,{children:[(0,n.jsxs)(l.N,{href:"http://www.danshihack.com/2012/07/18/junp/iphoneapp-walknote.html",children:[(0,n.jsx)(i.E,{mr:2,children:"男子ハック"}),"[おすすめの音楽をレコメンド！ストリーミング再生してくれるiPhoneアプリ「walknote」が素敵。"]}),(0,n.jsx)(h.p,{mx:"2px"})]}),(0,n.jsxs)(a.ck,{children:[(0,n.jsx)(i.E,{mr:2,children:"タブロイド"}),(0,n.jsx)(l.N,{href:"http://www.tabroid.jp/app/multimedia/2013/05/app.walknote.html",children:"「YOU、これ聴いちゃいなよ」自分好みの曲が勝手に集まる音楽プレーヤー『walknote』"}),(0,n.jsx)(h.p,{mx:"2px"})]})]}),(0,n.jsxs)(d.r,{columns:2,gap:2,children:[(0,n.jsx)(p.f7,{src:"/images/works/walknote_01.png",alt:"walknote"}),(0,n.jsx)(p.f7,{src:"/images/works/walknote_02.png",alt:"walknote"})]}),(0,n.jsx)(p.f7,{src:"/images/works/walknote_03.png",alt:"walknote"}),(0,n.jsx)(p.f7,{src:"/images/works/walknote_04.png",alt:"walknote"}),(0,n.jsx)(p.f7,{src:"/images/works/walknote_05.png",alt:"walknote"})]})})},1703:(e,t,r)=>{"use strict";r.d(t,{v:()=>n});var n=(0,r(3153).w)({d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z",displayName:"ChevronRightIcon"})},3384:(e,t,r)=>{"use strict";r.d(t,{p:()=>i});var n=r(3153),s=r(4848),i=(0,n.w)({displayName:"ExternalLinkIcon",path:(0,s.jsxs)("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"2",children:[(0,s.jsx)("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),(0,s.jsx)("path",{d:"M15 3h6v6"}),(0,s.jsx)("path",{d:"M10 14L21 3"})]})})},981:(e,t,r)=>{"use strict";r.d(t,{B8:()=>p,Xy:()=>x,ck:()=>m});var n=r(4393),s=r(61),i=r(1117),a=r(8855),l=r(3352),o=r(4515),c=r(4934),d=r(4848),[u,h]=(0,s.q)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),p=(0,a.R)(function(e,t){let r=(0,l.o5)("List",e),{children:n,styleType:s="none",stylePosition:a,spacing:h,...p}=(0,o.MN)(e),x=(0,i.a)(n);return(0,d.jsx)(u,{value:r,children:(0,d.jsx)(c.B.ul,{ref:t,listStyleType:s,listStylePosition:a,role:"list",__css:{...r.container,...h?{"& > *:not(style) ~ *:not(style)":{mt:h}}:{}},...p,children:x})})});p.displayName="List",(0,a.R)((e,t)=>{let{as:r,...n}=e;return(0,d.jsx)(p,{ref:t,as:"ol",styleType:"decimal",marginStart:"1em",...n})}).displayName="OrderedList";var x=(0,a.R)(function(e,t){let{as:r,...n}=e;return(0,d.jsx)(p,{ref:t,as:"ul",styleType:"initial",marginStart:"1em",...n})});x.displayName="UnorderedList";var m=(0,a.R)(function(e,t){let r=h();return(0,d.jsx)(c.B.li,{ref:t,...e,__css:r.item})});m.displayName="ListItem",(0,a.R)(function(e,t){let r=h();return(0,d.jsx)(n.I,{ref:t,role:"presentation",...e,__css:r.icon})}).displayName="ListIcon"},1238:(e,t,r)=>{"use strict";r.d(t,{o:()=>a});var n=r(4934),s=r(8855),i=r(4848),a=(0,n.B)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});a.displayName="Center";var l={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}};(0,s.R)(function(e,t){let{axis:r="both",...s}=e;return(0,i.jsx)(n.B.div,{ref:t,__css:l[r],...s,position:"absolute"})})},5319:(e,t,r)=>{"use strict";r.d(t,{r:()=>d});var n=r(8855),s=r(4934),i=r(4848),a=(0,n.R)(function(e,t){let{templateAreas:r,gap:n,rowGap:a,columnGap:l,column:o,row:c,autoFlow:d,autoRows:u,templateRows:h,autoColumns:p,templateColumns:x,...m}=e;return(0,i.jsx)(s.B.div,{ref:t,__css:{display:"grid",gridTemplateAreas:r,gridGap:n,gridRowGap:a,gridColumnGap:l,gridAutoColumns:p,gridColumn:o,gridRow:c,gridAutoFlow:d,gridAutoRows:u,gridTemplateRows:h,gridTemplateColumns:x},...m})});a.displayName="Grid";var l=r(4940),o=r(3008),c=r(1235),d=(0,n.R)(function(e,t){let{columns:r,spacingX:n,spacingY:s,spacing:d,minChildWidth:u,...h}=e,p=(0,l.D)(),x=u?(0,c.bk)(u,e=>{let t=(0,o.gf)("sizes",e,"number"==typeof e?`${e}px`:e)(p);return null===e?null:`repeat(auto-fit, minmax(${t}, 1fr))`}):(0,c.bk)(r,e=>null===e?null:`repeat(${e}, minmax(0, 1fr))`);return(0,i.jsx)(a,{ref:t,gap:d,columnGap:n,rowGap:s,templateColumns:x,...h})});d.displayName="SimpleGrid"},3285:(e,t,r)=>{"use strict";r.d(t,{E:()=>c});var n=r(8855),s=r(3352),i=r(4515),a=r(4934),l=r(9857),o=r(4848),c=(0,n.R)(function(e,t){let r=(0,s.Vl)("Badge",e),{className:n,...c}=(0,i.MN)(e);return(0,o.jsx)(a.B.span,{ref:t,className:(0,l.cx)("chakra-badge",e.className),...c,__css:{display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle",...r}})});c.displayName="Badge"}},e=>{var t=t=>e(e.s=t);e.O(0,[339,636,593,792],()=>t(2706)),_N_E=e.O()}]);