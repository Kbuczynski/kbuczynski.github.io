(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"9eSz":function(e,t,n){"use strict";var a=n("TqRt");t.__esModule=!0,t.default=void 0;var r,i=a(n("PJYZ")),o=a(n("VbXa")),s=a(n("8OQS")),d=a(n("pVnL")),l=a(n("q1tI")),c=a(n("17x9")),u=function(e){var t=(0,d.default)({},e),n=t.resolutions,a=t.sizes,r=t.critical;return n&&(t.fixed=n,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,n=e.fixed,a=p(t||n||[]);return a&&a.src},p=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var n=e.findIndex((function(e){return void 0===e.media}));if(-1!==n)return e[n]}return e[0]},h=Object.create({}),g=function(e){var t=u(e),n=m(t);return h[n]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,w=new WeakMap;function E(e){return e.map((function(e){var t=e.src,n=e.srcSet,a=e.srcSetWebp,r=e.media,i=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},a&&l.default.createElement("source",{type:"image/webp",media:r,srcSet:a,sizes:i}),n&&l.default.createElement("source",{media:r,srcSet:n,sizes:i}))}))}function S(e){var t=[],n=[];return e.forEach((function(e){return(e.media?t:n).push(e)})),[].concat(t,n)}function x(e){return e.map((function(e){var t=e.src,n=e.media,a=e.tracedSVG;return l.default.createElement("source",{key:t,media:n,srcSet:a})}))}function k(e){return e.map((function(e){var t=e.src,n=e.media,a=e.base64;return l.default.createElement("source",{key:t,media:n,srcSet:a})}))}function z(e,t){var n=e.srcSet,a=e.srcSetWebp,r=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?a:n)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var O=function(e,t){var n=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return n&&(n.observe(e),w.set(e,t)),function(){n.unobserve(e),w.delete(e)}},j=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?z(e,!0):"")+z(e)})).join("")+"<img "+l+o+s+n+a+t+i+r+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=l.default.forwardRef((function(e,t){var n=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,o=e.ariaHidden,s=l.default.createElement(L,(0,d.default)({ref:t,src:n},i,{ariaHidden:o}));return a.length>1?l.default.createElement("picture",null,r(a),s):s})),L=l.default.forwardRef((function(e,t){var n=e.sizes,a=e.srcSet,r=e.src,i=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":m,sizes:n,srcSet:a,src:r},p,{onLoad:o,onError:c,ref:t,loading:u,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));L.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var R=function(e){function t(t){var n;(n=e.call(this,t)||this).seenBefore=v&&g(t),n.isCritical="eager"===t.loading||t.critical,n.addNoScript=!(n.isCritical&&!t.fadeIn),n.useIOSupport=!b&&y&&!n.isCritical&&!n.seenBefore;var a=n.isCritical||v&&(b||!n.useIOSupport);return n.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!n.seenBefore&&t.fadeIn,isHydrated:!1},n.imageRef=l.default.createRef(),n.placeholderRef=t.placeholderRef||l.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,i.default)(n)),n.handleRef=n.handleRef.bind((0,i.default)(n)),n}(0,o.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},n.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},n.handleImageLoaded=function(){var e,t,n;e=this.props,t=u(e),(n=m(t))&&(h[n]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e=u(this.props),t=e.title,n=e.alt,a=e.className,r=e.style,i=void 0===r?{}:r,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,h=e.fluid,g=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,w=e.itemProp,S=e.loading,z=e.draggable,O=h||g;if(!O)return null;var R=!1===this.state.fadeIn||this.state.imgLoaded,V=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,d.default)({opacity:R?1:0,transition:V?"opacity "+v+"ms":"none"},s),H="boolean"==typeof b?"lightgray":b,T={transitionDelay:v+"ms"},M=(0,d.default)({opacity:this.state.imgLoaded?0:1},V&&T,s,f),P={title:t,alt:this.state.isVisible?"":n,style:M,className:m,itemProp:w},q=this.state.isHydrated?p(O):O[0];if(h)return l.default.createElement(y,{className:(a||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:q.maxWidth?q.maxWidth+"px":null,maxHeight:q.maxHeight?q.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},l.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),H&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:H,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},V&&T)}),q.base64&&l.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:P,imageVariants:O,generateSources:k}),q.tracedSVG&&l.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:P,imageVariants:O,generateSources:x}),this.state.isVisible&&l.default.createElement("picture",null,E(O),l.default.createElement(L,{alt:n,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:z})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,d.default)({alt:n,title:t,loading:S},q,{imageVariants:O}))}}));if(g){var N=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},i);return"inherit"===i.display&&delete N.display,l.default.createElement(y,{className:(a||"")+" gatsby-image-wrapper",style:N,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},H&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:H,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},V&&T)}),q.base64&&l.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:P,imageVariants:O,generateSources:k}),q.tracedSVG&&l.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:P,imageVariants:O,generateSources:x}),this.state.isVisible&&l.default.createElement("picture",null,E(O),l.default.createElement(L,{alt:n,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:z})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,d.default)({alt:n,title:t,loading:S},q,{imageVariants:O}))}}))}return null},t}(l.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var V=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),C=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function H(e){return function(t,n,a){var r;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+a+"`, but their values are both `undefined`.");c.default.checkPropTypes(((r={})[n]=e,r),t,"prop",a)}}R.propTypes={resolutions:V,sizes:C,fixed:H(c.default.oneOfType([V,c.default.arrayOf(V)])),fluid:H(c.default.oneOfType([C,c.default.arrayOf(C)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var T=R;t.default=T},BTbK:function(e,t,n){e.exports=n.p+"static/Kamil_Buczyński_CV-6ad3cad7e90bda557c16df0cdb91d28c.pdf"},RXBc:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),i=n("Zttt"),o=n("wtQ5"),s=n("69d5"),d=n("Wbzz"),l=n("9eSz"),c=n.n(l),u=n("sya1"),f=n("jVqx"),m=function(){var e,t,n=Object(d.useStaticQuery)("681956628"),a=Object(f.a)().isMobile;return(null==n||null===(e=n.placeholderImage)||void 0===e||null===(t=e.childImageSharp)||void 0===t?void 0:t.fluid)?r.a.createElement(c.a,{fluid:n.placeholderImage.childImageSharp.fluid,objectFit:"cover",style:{width:a?314:500},alt:"This is a picture of my face."}):r.a.createElement(u.a,{text:"Picture not found 🤔"})},p=n("MUpH"),h=n("vOnD");function g(){var e=Object(p.a)(["\n  position: relative;\n  margin: 8rem 0;\n\n  & > * {\n    margin: 2rem 0;\n  }\n"]);return g=function(){return e},e}var b=h.d.section(g()),v=function(e){var t=e.children;return r.a.createElement(b,null,t)};function y(){var e=Object(p.a)(["\n  position: relative;\n  color: ",";\n  text-shadow: -1px 0 ",",\n    0 1px ",",\n    1px 0 ",",\n    0 -1px ",";\n  transition: text-shadow, color 0.1s ease;\n\n  "," {\n    &:hover {\n      text-shadow: none;\n      color: ",";\n    }\n  }\n"]);return y=function(){return e},e}function w(){var e=Object(p.a)(["\n  filter: grayscale(1);\n\n  "," {\n    position: fixed;\n    left: 10%;\n    top: 10%;\n    z-index: -1;\n    transition: transform 0.1s ease;\n    transform: scale(0);\n\n    ","\n  }\n"]);return w=function(){return e},e}function E(){var e=Object(p.a)(["\n  font-size: 4rem;\n  margin: 0;\n  color: ",";\n\n  "," {\n    font-size: 3rem;\n  }\n\n  "," {\n    font-size: 2rem;\n  }\n"]);return E=function(){return e},e}var S=h.d.p(E(),(function(e){return e.theme.colors.text}),(function(e){return e.theme.media.medium}),(function(e){return e.theme.media.small})),x=h.d.div(w(),(function(e){return e.theme.media.onlyDesktop}),(function(e){var t=e.show,n=e.photoX,a=e.photoY;return t&&"transform: translate("+n/2+"px, "+a/2+"px) scale(1)"})),k=h.d.span(y(),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.text}),(function(e){return e.theme.media.onlyDesktop}),(function(e){return e.theme.colors.text})),z=function(){var e=Object(a.useState)(!1),t=e[0],n=e[1],i=Object(a.useState)(0),o=i[0],d=i[1],l=Object(a.useState)(0),c=l[0],u=l[1],p=Object(f.a)().isMobile;return r.a.createElement(v,null,r.a.createElement(s.a,{title:"001/ About me"}),r.a.createElement(x,{show:t,photoX:o,photoY:c,"data-aos":p?"fade-up":""},r.a.createElement(m,{src:"me.jpg"})),r.a.createElement(S,{"data-aos":"fade-up"},"Hello, my name is"," ",r.a.createElement(k,{"data-interactive":!0,onMouseMove:function(e){if(!p){var t=e.nativeEvent.offsetX,n=e.nativeEvent.offsetY;d(t),u(n)}},onMouseEnter:function(){return n(!0)},onMouseLeave:function(){return n(!1)}},"Kamil Buczyński")," ","and I am a beginner front-end developer and UX/UI designer. I focus on creating beautiful, useful layouts and analyzing user behavior on the websites. This two things play a crucial role in the process of creating your brand."))},O=n("dntC");var j=function(e){return r.a.createElement(d.StaticQuery,{query:"1845441104",render:function(t){var n,a=t.images;return void 0!==(n=a.edges.find((function(t){return t.node.relativePath===e.src})))&&r.a.createElement(c.a,{fluid:n.node.childImageSharp.fluid})}})};function I(){var e=Object(p.a)(["\n  width: 60%;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  z-index: -1;\n  transition: transform 1s ease, filter 0.1s ease;\n  transform: translate(-60%, -50%);\n  filter: opacity(0);\n\n  ","\n"]);return I=function(){return e},e}function L(){var e=Object(p.a)(["\n  "," {\n    &:hover > a {\n      text-shadow: none;\n      color: ",";\n    }\n\n    &:hover > span {\n      color: ",";\n      text-shadow: -1px 0 ",",\n        0 1px ",",\n        1px 0 ",",\n        0 -1px ",";\n    }\n  }\n"]);return L=function(){return e},e}function R(){var e=Object(p.a)(["\n  margin-top: 1rem;\n"]);return R=function(){return e},e}function V(){var e=Object(p.a)(["\n  color: ",";\n  margin-left: 0.5rem;\n  transition: text-shadow, color 0.1s ease;\n"]);return V=function(){return e},e}function C(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n\n  & > * {\n    margin: 3rem 0;\n\n    "," {\n      margin: 1.5rem 0;\n    }\n\n    &:first-child {\n      margin-top: 0;\n    }\n\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n"]);return C=function(){return e},e}var H=h.d.div(C(),(function(e){return e.theme.media.small})),T=h.d.span(V(),(function(e){return e.theme.colors.text})),M=h.d.div(R()),P=h.d.div(L(),(function(e){return e.theme.media.onlyDesktop}),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.text})),q=h.d.div(I(),(function(e){return e.show&&"transform: translate(-50%, -50%); filter: opacity(1)"})),N=[{address:"https://kuchnianaobcasach.com.pl/",title:"Kuchnia na obcasach",src:"kuchnianaobcasach.jpg"},{address:"https://www.dziwnow.pl/4fun/",title:"Dziwnów4Fun",src:"dziwnow4fun.jpg"},{address:"https://www.apartamentszczecin.eu/",title:"Apartament Szczecin",src:"apartamentszczecin.jpg"},{address:"http://dev.lokando.pl/",title:"Lokando",src:"lokando.jpg"},{address:"https://kbuczynski.github.io/photo-search-app/",title:"Photo search engine",src:"photosearchengine.png"},{address:"https://kbuczynski.github.io/grinchs-code/",title:"Grinch's Code",src:"grinchscode.jpg"},{address:"https://kbuczynski.github.io/lc-pokoje-i-apartamenty/dist/",title:"LC | pokoje & apartamenty",src:"lcpokojeapartamenty.jpg"},{address:"https://www.youtube.com/watch?v=IpjO-MXOHNI",title:"Uwaga Dzik",src:"uwagadzik.png"}],W=function(){var e=Object(a.useState)(""),t=e[0],n=e[1],i=Object(a.useState)(!1),o=i[0],d=i[1],l=Object(f.a)().isMobile,c=function(e){if(!l){var t=e.target;t.getAttribute("data-image")?n(t.getAttribute("data-image")):n(t.parentNode.getAttribute("data-image")),d(!0)}},u=function(){l||(n(""),d(!1))};return r.a.createElement(v,null,r.a.createElement(s.a,{title:"002/ Selected works"}),r.a.createElement(H,null,N.length>0&&N.map((function(e,t){var n=e.address,a=e.title,i=e.src;return r.a.createElement(P,{key:a,"data-aos":"fade-up",onMouseEnter:c,onMouseLeave:u,"data-image":i,"data-interactive":!0,onClick:function(){return function(e){window.open(e,"_blank").focus()}(n)}},r.a.createElement(O.a,{address:n,title:a}),r.a.createElement(T,{"data-aos":"fade-up","data-interactive":!0},"00",t+1),l&&r.a.createElement(M,null,r.a.createElement(j,{src:i})))}))),!l&&r.a.createElement(q,{show:o},r.a.createElement(j,{src:t})))};function D(){var e=Object(p.a)(["\n  color: ",";\n  font-size: 4rem;\n  margin: 0;\n  grid-column: ",";\n  grid-row: ",";\n\n  "," {\n    font-size: 3rem;\n  }\n\n  "," {\n    font-size: 2rem;\n    margin: 1rem 0;\n  }\n"]);return D=function(){return e},e}function F(){var e=Object(p.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(6, 1fr);\n\n  "," {\n    display: flex;\n    flex-direction: column;\n  }\n"]);return F=function(){return e},e}function B(){var e=Object(p.a)(["\n  display: flex;\n"]);return B=function(){return e},e}var G=h.d.div(B()),_=h.d.div(F(),(function(e){return e.theme.media.small})),U=h.d.p(D(),(function(e){return e.theme.colors.text}),(function(e){return e.col}),(function(e){return e.row}),(function(e){return e.theme.media.medium}),(function(e){return e.theme.media.small})),A=n("BTbK"),K=[{address:"https://github.com/Kbuczynski",title:"Github"},{address:"https://dribbble.com/Kbuczynski",title:"Dribbble"},{address:"https://www.linkedin.com/in/kbuczynski/",title:"LinkedIn"},{address:"https://www.facebook.com/kamil.buczynski.00",title:"Facebook"},{address:n.n(A).a,title:"Download as PDF"},{address:"mailto:kamil.buczynski00@interia.pl",title:"kamil.buczynski00\n@interia.pl"}],X=function(){return r.a.createElement(v,null,r.a.createElement(s.a,{title:"003/ contact"}),r.a.createElement(G,null,r.a.createElement(_,null,r.a.createElement(U,{row:1,col:1,"data-aos":"fade-up"},"Social"),K.length>0&&K.map((function(e,t){var n=e.address,i=e.title;return r.a.createElement(a.Fragment,{key:i},r.a.createElement(O.a,{address:n,title:i,row:t+1,col:2}),3===t&&r.a.createElement(U,{row:5,col:1,"data-aos":"fade-up"},"CV"),4===t&&r.a.createElement(U,{row:6,col:1,"data-aos":"fade-up"},"E-mail"))})))))};t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"Home"}),r.a.createElement(z,null),r.a.createElement(W,null),r.a.createElement(X,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-4d444b95877c40f42a0e.js.map