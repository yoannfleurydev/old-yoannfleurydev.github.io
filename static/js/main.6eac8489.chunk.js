(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{178:function(e,t,n){e.exports=n(469)},183:function(e,t,n){},463:function(e,t,n){},469:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(28),i=n.n(r),c=(n(183),n(14)),s=n(15),l=n(17),u=n(16),m=n(18),h=n(36),d=n.n(h),p=n(37),g=n.n(p),f=n(29),v=n.n(f),y=n(472),w=n(470),b=n(471),j=n(473),E=n(80),k=n.n(E),O=n(12),C=n(10),x=(n(185),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={loading:!1,markdown:""},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match;this.setState({loading:!0},function(){fetch("./posts/".concat(t.params.id,".md")).then(function(e){return e.text()}).then(function(t){e.setState({markdown:k()(t,{highlight:function(e){return n(187).highlightAuto(e).value}}),loading:!1})}).catch(function(t){e.setState({loading:!1})})})}},{key:"render",value:function(){var e=this.state,t=e.markdown,n=e.loading,a=this.props.classes;return n?o.a.createElement(O.c,null):o.a.createElement(O.b,{container:!0},o.a.createElement(O.b,{item:!0,xs:!1,sm:1,md:2,lg:3,xl:4}),o.a.createElement(O.b,{item:!0,xs:12,sm:10,md:8,lg:6,xl:4},o.a.createElement(O.g,{className:a.paper},o.a.createElement("article",{dangerouslySetInnerHTML:{__html:t}}))))}}]),t}(a.Component)),S=Object(C.withStyles)(function(e){return{paper:{margin:2*e.spacing.unit,padding:2*e.spacing.unit}}})(Object(j.a)(x)),N=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={loading:!1,posts:[]},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0},function(){fetch("./metadata.json").then(function(e){return e.json()}).then(function(t){e.setState({loading:!1,posts:t.posts})}).catch(function(t){e.setState({loading:!1})})})}},{key:"render",value:function(){var e=this.props.classes,t=this.state,n=t.loading,a=t.posts;return n?o.a.createElement(O.c,null):o.a.createElement(O.d,null,a.map(function(t){return o.a.createElement(w.a,{key:t.path,to:"/post/".concat(t.path),className:e.link},o.a.createElement(O.e,null,o.a.createElement(O.f,{primary:t.title,secondary:t.path})))}))}}]),t}(a.Component),A=Object(C.withStyles)({link:{textDecoration:"none"}})(N),I=n(51),R=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).randomNumber=function(e){return Math.floor(Math.random()*e)+1},n.generateClassName=function(){var e=n.props.classes;return"".concat(e.item," ").concat(e["h"+n.randomNumber(4)]," ").concat(e["v"+n.randomNumber(4)])},n.handleOnClick=function(e,t){var a=e.currentTarget,o=a.naturalWidth,r=a.naturalHeight,i=Object.assign({margin:"auto"},o>r?{maxWidth:"100%",maxHeight:"auto",overflow:"hidden"}:{maxHeight:window.innerHeight});n.setState({overlay:!0,currentImage:t,overlayImageStyle:i})},n.handleClose=function(){n.setState({overlay:!1,currentImage:{}})},n.state={overlay:!1,currentImage:{},overlayImageStyle:{},images:[]},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(I.photos,"/metadata.json")).then(function(e){return e.json()}).then(function(t){return t.photos.map(function(t){return t.src="".concat(I.photos,"/").concat(t.src),t.className=e.generateClassName(),t})}).then(function(t){e.setState({images:t})})}},{key:"render",value:function(){var e=this,t=this.props.classes,n=this.state,r=n.overlay,i=n.currentImage,c=n.overlayImageStyle,s=n.images;return o.a.createElement(a.Fragment,null,o.a.createElement("div",{className:t.gallery},s.map(function(n){return o.a.createElement("div",{className:n.className,key:n.src},o.a.createElement("img",{src:n.src,alt:n.alt,className:t.img,onClick:function(t){return e.handleOnClick(t,n)}}))})),r&&o.a.createElement("div",{className:t.overlay,onClick:this.handleClose},o.a.createElement("img",{src:i.src,alt:i.alt,style:c})))}}]),t}(a.Component),T=Object(C.withStyles)({gallery:{display:"grid",gridTemplateColumns:"repeat(auto-fill, 100px)",gridAutoRows:"100px",gridAutoFlow:"dense"},item:{overflow:"hidden",display:"grid",gridTemplateColumns:1,gridTemplateRows:1},v1:{gridRow:"span 1"},v2:{gridRow:"span 2"},v3:{gridRow:"span 3"},v4:{gridRow:"span 4"},h1:{gridColumn:"span 1"},h2:{gridColumn:"span 2"},h3:{gridColumn:"span 3"},h4:{gridColumn:"span 4"},img:{gridColumn:"1 / -1",gridRow:"1 / -1",width:"100%",height:"100%",objectFit:"cover",cursor:"zoom-in"},overlay:{position:"fixed",background:"rgba(0, 0, 0, 0.7)",top:"0",right:"0",bottom:"0",left:"0",zIndex:"2",display:"flex",justifyItems:"center",alignItems:"center",cursor:"zoom-out"}})(R),W=(n(463),Object(C.createMuiTheme)({palette:{primary:{main:"#081D22"},secondary:{main:"#F1322A"}}})),M=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(C.MuiThemeProvider,{theme:W},o.a.createElement(y.a,null,o.a.createElement("div",null,o.a.createElement(d.a,{position:"sticky"},o.a.createElement(g.a,null,o.a.createElement(v.a,{variant:"h6",color:"inherit",style:{flexGrow:1}},"YoannFleuryDev"),o.a.createElement(O.a,{component:w.a,to:"/",color:"inherit"},"Accueil"),o.a.createElement(O.a,{component:w.a,to:"/photos",color:"inherit"},"Photos"))),o.a.createElement(b.a,{path:"/",component:A,exact:!0}),o.a.createElement(b.a,{path:"/post/:id",component:S}),o.a.createElement(b.a,{path:"/photos",component:T}))))}}]),t}(a.Component),D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function F(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}n(467);i.a.render(o.a.createElement(M,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");D?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):F(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):F(t,e)})}}()},51:function(e){e.exports={posts:"https://github.com/",photos:"https://raw.githubusercontent.com/yoannfleurydev/yoannfleurydev.github.io-photos/master"}}},[[178,2,1]]]);
//# sourceMappingURL=main.6eac8489.chunk.js.map