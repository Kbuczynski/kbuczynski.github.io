(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"9eSz":function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.default=void 0;var a,i=r(n("PJYZ")),o=r(n("VbXa")),s=r(n("8OQS")),l=r(n("pVnL")),d=r(n("q1tI")),c=r(n("17x9")),u=function(e){var t=(0,l.default)({},e),n=t.resolutions,r=t.sizes,a=t.critical;return n&&(t.fixed=n,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,n=e.fixed,r=p(t||n||[]);return r&&r.src},p=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var n=e.findIndex((function(e){return void 0===e.media}));if(-1!==n)return e[n]}return e[0]},h=Object.create({}),g=function(e){var t=u(e),n=m(t);return h[n]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,w=new WeakMap;function x(e){return e.map((function(e){var t=e.src,n=e.srcSet,r=e.srcSetWebp,a=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:a,srcSet:r,sizes:i}),n&&d.default.createElement("source",{media:a,srcSet:n,sizes:i}))}))}function E(e){var t=[],n=[];return e.forEach((function(e){return(e.media?t:n).push(e)})),[].concat(t,n)}function S(e){return e.map((function(e){var t=e.src,n=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:n,srcSet:r})}))}function k(e){return e.map((function(e){var t=e.src,n=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:n,srcSet:r})}))}function z(e,t){var n=e.srcSet,r=e.srcSetWebp,a=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?r:n)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var O=function(e,t){var n=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return n&&(n.observe(e),w.set(e,t)),function(){n.unobserve(e),w.delete(e)}},j=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?z(e,!0):"")+z(e)})).join("")+"<img "+d+o+s+n+r+t+i+a+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=d.default.forwardRef((function(e,t){var n=e.src,r=e.imageVariants,a=e.generateSources,i=e.spreadProps,o=e.ariaHidden,s=d.default.createElement(L,(0,l.default)({ref:t,src:n},i,{ariaHidden:o}));return r.length>1?d.default.createElement("picture",null,a(r),s):s})),L=d.default.forwardRef((function(e,t){var n=e.sizes,r=e.srcSet,a=e.src,i=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,l.default)({"aria-hidden":m,sizes:n,srcSet:r,src:a},p,{onLoad:o,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));L.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var R=function(e){function t(t){var n;(n=e.call(this,t)||this).seenBefore=v&&g(t),n.isCritical="eager"===t.loading||t.critical,n.addNoScript=!(n.isCritical&&!t.fadeIn),n.useIOSupport=!b&&y&&!n.isCritical&&!n.seenBefore;var r=n.isCritical||v&&(b||!n.useIOSupport);return n.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!n.seenBefore&&t.fadeIn,isHydrated:!1},n.imageRef=d.default.createRef(),n.placeholderRef=t.placeholderRef||d.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,i.default)(n)),n.handleRef=n.handleRef.bind((0,i.default)(n)),n}(0,o.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},n.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},n.handleImageLoaded=function(){var e,t,n;e=this.props,t=u(e),(n=m(t))&&(h[n]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e=u(this.props),t=e.title,n=e.alt,r=e.className,a=e.style,i=void 0===a?{}:a,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,h=e.fluid,g=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,w=e.itemProp,E=e.loading,z=e.draggable,O=h||g;if(!O)return null;var R=!1===this.state.fadeIn||this.state.imgLoaded,V=!0===this.state.fadeIn&&!this.state.imgCached,H=(0,l.default)({opacity:R?1:0,transition:V?"opacity "+v+"ms":"none"},s),C="boolean"==typeof b?"lightgray":b,M={transitionDelay:v+"ms"},T=(0,l.default)({opacity:this.state.imgLoaded?0:1},V&&M,s,f),P={title:t,alt:this.state.isVisible?"":n,style:T,className:m,itemProp:w},q=this.state.isHydrated?p(O):O[0];if(h)return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:q.maxWidth?q.maxWidth+"px":null,maxHeight:q.maxHeight?q.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},d.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),C&&d.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},V&&M)}),q.base64&&d.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:P,imageVariants:O,generateSources:k}),q.tracedSVG&&d.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:P,imageVariants:O,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,x(O),d.default.createElement(L,{alt:n,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:H,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:E,draggable:z})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,l.default)({alt:n,title:t,loading:E},q,{imageVariants:O}))}}));if(g){var N=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},i);return"inherit"===i.display&&delete N.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:N,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},C&&d.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:C,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},V&&M)}),q.base64&&d.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:P,imageVariants:O,generateSources:k}),q.tracedSVG&&d.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:P,imageVariants:O,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,x(O),d.default.createElement(L,{alt:n,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:H,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:E,draggable:z})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,l.default)({alt:n,title:t,loading:E},q,{imageVariants:O}))}}))}return null},t}(d.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var V=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),H=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function C(e){return function(t,n,r){var a;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((a={})[n]=e,a),t,"prop",r)}}R.propTypes={resolutions:V,sizes:H,fixed:C(c.default.oneOfType([V,c.default.arrayOf(V)])),fluid:C(c.default.oneOfType([H,c.default.arrayOf(H)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var M=R;t.default=M},BTbK:function(e,t,n){e.exports=n.p+"static/Kamil_Buczyński_CV-6ad3cad7e90bda557c16df0cdb91d28c.pdf"},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("Zttt"),o=n("wtQ5"),s=n("69d5"),l=n("Wbzz"),d=n("9eSz"),c=n.n(d),u=n("sya1"),f=n("jVqx"),m=function(){var e,t,n=Object(l.useStaticQuery)("681956628"),r=Object(f.a)().isMobile;return(null==n||null===(e=n.placeholderImage)||void 0===e||null===(t=e.childImageSharp)||void 0===t?void 0:t.fluid)?a.a.createElement(c.a,{fluid:n.placeholderImage.childImageSharp.fluid,objectFit:"cover",style:{width:r?314:500},alt:"This is a picture of my face."}):a.a.createElement(u.a,{text:"Picture not found 🤔"})},p=n("MUpH"),h=n("vOnD");function g(){var e=Object(p.a)(["\n  position: relative;\n  margin: 10rem 0;\n\n  & > * {\n    margin: 2rem 0;\n  }\n"]);return g=function(){return e},e}var b=h.d.section(g()),v=function(e){var t=e.children;return a.a.createElement(b,null,t)};function y(){var e=Object(p.a)(["\n  position: relative;\n  color: ",";\n  text-shadow: -1px 0 ",",\n    0 1px ",",\n    1px 0 ",",\n    0 -1px ",";\n  transition: text-shadow, color 0.1s ease;\n\n  "," {\n    &:hover {\n      text-shadow: none;\n      color: ",";\n    }\n  }\n"]);return y=function(){return e},e}function w(){var e=Object(p.a)(["\n  filter: grayscale(1);\n\n  "," {\n    position: fixed;\n    left: 10%;\n    top: 10%;\n    z-index: -1;\n    transition: transform 0.1s ease;\n    transform: scale(0);\n\n    ","\n  }\n"]);return w=function(){return e},e}function x(){var e=Object(p.a)(["\n  font-size: 4rem;\n  margin: 0;\n  color: ",";\n\n  "," {\n    font-size: 3rem;\n  }\n\n  "," {\n    font-size: 2rem;\n  }\n"]);return x=function(){return e},e}var E=h.d.p(x(),(function(e){return e.theme.colors.text}),(function(e){return e.theme.media.medium}),(function(e){return e.theme.media.small})),S=h.d.div(w(),(function(e){return e.theme.media.onlyDesktop}),(function(e){var t=e.show,n=e.photoX,r=e.photoY;return t&&"transform: translate("+n/2+"px, "+r/2+"px) scale(1)"})),k=h.d.span(y(),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.text}),(function(e){return e.theme.media.onlyDesktop}),(function(e){return e.theme.colors.text})),z=function(){var e=Object(r.useState)(!1),t=e[0],n=e[1],i=Object(r.useState)(0),o=i[0],l=i[1],d=Object(r.useState)(0),c=d[0],u=d[1],p=Object(f.a)().isMobile;return a.a.createElement(v,null,a.a.createElement(s.a,{title:"001/ About me"}),a.a.createElement(S,{show:t,photoX:o,photoY:c,"data-aos":p?"fade-up":""},a.a.createElement(m,{src:"me.jpg"})),a.a.createElement(E,{"data-aos":"fade-up"},"Hello, my name is"," ",a.a.createElement(k,{"data-interactive":!0,onMouseMove:function(e){if(!p){var t=e.nativeEvent.offsetX,n=e.nativeEvent.offsetY;l(t),u(n)}},onMouseEnter:function(){return n(!0)},onMouseLeave:function(){return n(!1)}},"Kamil Buczyński")," ","and I am a beginner front-end developer and UX/UI designer. I focus on creating beautiful and useful layouts and analyzing user behavior on the websites. This two things play a crucial role in the process of creating your brand."))};function O(){var e=Object(p.a)(["\n  color: ",";\n  font-size: 4rem;\n  text-decoration: none;\n  transition: text-shadow, color 0.1s ease;\n  text-shadow: -1px 0 ",",\n    0 1px ",",\n    1px 0 ",",\n    0 -1px ",";\n  position: relative;\n\n  grid-column: ",";\n  grid-row: ",";\n\n  "," {\n    font-size: 3rem;\n  }\n\n  "," {\n    font-size: 2rem;\n    margin: 1rem 0;\n  }\n\n  "," {\n    &:hover {\n      text-shadow: none;\n      color: ",";\n    }\n  }\n"]);return O=function(){return e},e}var j=h.d.a(O(),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.text}),(function(e){return e.col}),(function(e){return e.row}),(function(e){return e.theme.media.medium}),(function(e){return e.theme.media.small}),(function(e){return e.theme.media.onlyDesktop}),(function(e){return e.theme.colors.text})),I=function(e){var t=e.address,n=e.title,r=e.row,i=e.col;return a.a.createElement(j,{rel:"noopener",href:t,title:n,target:"_blank","data-aos":"fade-up",row:r,col:i,"data-interactive":!0},n)};I.defaultProps={row:0,col:0};var L=I;var R=function(e){return a.a.createElement(l.StaticQuery,{query:"1845441104",render:function(t){var n,r=t.images;return void 0!==(n=r.edges.find((function(t){return t.node.relativePath===e.src})))&&a.a.createElement(c.a,{fluid:n.node.childImageSharp.fluid})}})};function V(){var e=Object(p.a)(["\n  width: 60%;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  z-index: -1;\n  transition: transform 1s ease, filter 0.1s ease;\n  transform: translate(-60%, -50%);\n  filter: opacity(0);\n\n  ","\n"]);return V=function(){return e},e}function H(){var e=Object(p.a)(["\n  "," {\n    &:hover > a {\n      text-shadow: none;\n      color: ",";\n    }\n\n    &:hover > span {\n      color: ",";\n      text-shadow: -1px 0 ",",\n        0 1px ",",\n        1px 0 ",",\n        0 -1px ",";\n    }\n  }\n"]);return H=function(){return e},e}function C(){var e=Object(p.a)(["\n  margin-top: 1rem;\n"]);return C=function(){return e},e}function M(){var e=Object(p.a)(["\n  color: ",";\n  margin-left: 0.5rem;\n  transition: text-shadow, color 0.1s ease;\n"]);return M=function(){return e},e}function T(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n\n  & > * {\n    margin: 3rem 0;\n\n    "," {\n      margin: 1.5rem 0;\n    }\n\n    &:first-child {\n      margin-top: 0;\n    }\n\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n"]);return T=function(){return e},e}var P=h.d.div(T(),(function(e){return e.theme.media.small})),q=h.d.span(M(),(function(e){return e.theme.colors.text})),N=h.d.div(C()),W=h.d.div(H(),(function(e){return e.theme.media.onlyDesktop}),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.text})),D=h.d.div(V(),(function(e){return e.show&&"transform: translate(-50%, -50%); filter: opacity(1)"})),F=[{address:"https://kuchnianaobcasach.com.pl/",title:"Kuchnia na obcasach",src:"kuchnianaobcasach.jpg"},{address:"https://www.dziwnow.pl/4fun/",title:"Dziwnów4Fun",src:"dziwnow4fun.jpg"},{address:"https://www.apartamentszczecin.eu/",title:"Apartament Szczecin",src:"apartamentszczecin.jpg"},{address:"http://dev.lokando.pl/",title:"Lokando",src:"lokando.jpg"},{address:"https://kbuczynski.github.io/photo-search-app/",title:"Photo search engine",src:"photosearchengine.png"},{address:"https://kbuczynski.github.io/grinchs-code/",title:"Grinch's Code",src:"grinchscode.jpg"},{address:"https://kbuczynski.github.io/lc-pokoje-i-apartamenty/dist/",title:"LC | pokoje & apartamenty",src:"lcpokojeapartamenty.jpg"},{address:"https://www.youtube.com/watch?v=IpjO-MXOHNI",title:"Uwaga Dzik",src:"uwagadzik.png"}],_=function(){var e=Object(r.useState)(""),t=e[0],n=e[1],i=Object(r.useState)(!1),o=i[0],l=i[1],d=Object(f.a)().isMobile,c=function(e){if(!d){var t=e.target;t.getAttribute("data-image")?n(t.getAttribute("data-image")):n(t.parentNode.getAttribute("data-image")),l(!0)}},u=function(){d||(n(""),l(!1))};return a.a.createElement(v,null,a.a.createElement(s.a,{title:"002/ Selected works"}),a.a.createElement(P,null,F.length>0&&F.map((function(e,t){var n=e.address,r=e.title,i=e.src;return a.a.createElement(W,{key:r,"data-aos":"fade-up",onMouseEnter:c,onMouseLeave:u,"data-image":i,"data-interactive":!0,onClick:function(){return function(e){window.open(e,"_blank").focus()}(n)}},a.a.createElement(L,{address:n,title:r}),a.a.createElement(q,{"data-aos":"fade-up","data-interactive":!0},"00",t+1),d&&a.a.createElement(N,null,a.a.createElement(R,{src:i})))}))),!d&&a.a.createElement(D,{show:o},a.a.createElement(R,{src:t})))};function B(){var e=Object(p.a)(["\n  color: ",";\n  font-size: 4rem;\n  margin: 0;\n  grid-column: ",";\n  grid-row: ",";\n\n  "," {\n    font-size: 3rem;\n  }\n\n  "," {\n    font-size: 2rem;\n    margin: 1rem 0;\n  }\n"]);return B=function(){return e},e}function G(){var e=Object(p.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(6, 1fr);\n\n  "," {\n    display: flex;\n    flex-direction: column;\n  }\n"]);return G=function(){return e},e}function U(){var e=Object(p.a)(["\n  display: flex;\n"]);return U=function(){return e},e}var A=h.d.div(U()),K=h.d.div(G(),(function(e){return e.theme.media.small})),X=h.d.p(B(),(function(e){return e.theme.colors.text}),(function(e){return e.col}),(function(e){return e.row}),(function(e){return e.theme.media.medium}),(function(e){return e.theme.media.small})),J=n("BTbK"),Q=[{address:"https://github.com/Kbuczynski",title:"Github"},{address:"https://dribbble.com/Kbuczynski",title:"Dribbble"},{address:"https://www.linkedin.com/in/kbuczynski/",title:"LinkedIn"},{address:"https://www.facebook.com/kamil.buczynski.00",title:"Facebook"},{address:n.n(J).a,title:"Download as PDF"},{address:"mailto:kamil.buczynski00@interia.pl",title:"kamil.buczynski00\n@interia.pl"}],Y=function(){return a.a.createElement(v,null,a.a.createElement(s.a,{title:"003/ contact"}),a.a.createElement(A,null,a.a.createElement(K,null,a.a.createElement(X,{row:1,col:1,"data-aos":"fade-up"},"Social"),Q.length>0&&Q.map((function(e,t){var n=e.address,i=e.title;return a.a.createElement(r.Fragment,{key:i},a.a.createElement(L,{address:n,title:i,row:t+1,col:2}),3===t&&a.a.createElement(X,{row:5,col:1,"data-aos":"fade-up"},"CV"),4===t&&a.a.createElement(X,{row:6,col:1,"data-aos":"fade-up"},"E-mail"))})))))};t.default=function(){return a.a.createElement(i.a,null,a.a.createElement(o.a,{title:"Home"}),a.a.createElement(z,null),a.a.createElement(_,null),a.a.createElement(Y,null))}},sya1:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("MUpH");function o(){var e=Object(i.a)(["\n  width: 100%;\n  height: 100px;\n  color: ",";\n  background-color: ",";\n  font-size: 2rem;\n  ","\n  box-shadow: 5px 5px ",";\n  padding: 1rem;\n  z-index: -1;\n  filter: grayscale(1);\n"]);return o=function(){return e},e}var s=n("vOnD").d.div(o(),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.background}),(function(e){return e.theme.mixins.center}),(function(e){return e.theme.colors.text}));t.a=function(e){var t=e.text;return a.a.createElement(s,null,t)}}}]);
//# sourceMappingURL=component---src-pages-index-js-27b2d296d27e92203a10.js.map