(this["webpackJsonp@project/inventory-management-system"]=this["webpackJsonp@project/inventory-management-system"]||[]).push([[62],{582:function(e,a,t){(function(a){var s;e.exports=(s=t(0),function(e){var a={};function t(s){if(a[s])return a[s].exports;var n=a[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=e,t.c=a,t.d=function(e,a,s){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:s})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(t.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)t.d(s,n,function(a){return e[a]}.bind(null,n));return s},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=4)}([function(e,a,t){e.exports=t(2)()},function(e,a){e.exports=s},function(e,a,t){"use strict";var s=t(3);function n(){}function r(){}r.resetWarningCache=n,e.exports=function(){function e(e,a,t,n,r,i){if(i!==s){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function a(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:r,resetWarningCache:n};return t.PropTypes=t,t}},function(e,a,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,a,t){"use strict";t.r(a);var s=t(1),n=t.n(s),r=t(0),i=t.n(r);function l(){return(l=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e}).apply(this,arguments)}var o=function(e){var a=e.pageClassName,t=e.pageLinkClassName,s=e.page,r=e.selected,i=e.activeClassName,o=e.activeLinkClassName,c=e.getEventListener,d=e.pageSelectedHandler,p=e.href,u=e.extraAriaContext,b=e.pageLabelBuilder,h=e.ariaLabel||"Page "+s+(u?" "+u:""),g=null;return r&&(g="page",h=e.ariaLabel||"Page "+s+" is your current page",a=void 0!==a?a+" "+i:i,void 0!==t?void 0!==o&&(t=t+" "+o):t=o),n.a.createElement("li",{className:a},n.a.createElement("a",l({role:"button",className:t,href:p,tabIndex:"0","aria-label":h,"aria-current":g,onKeyPress:d},c(d)),b(s)))};o.propTypes={pageSelectedHandler:i.a.func.isRequired,selected:i.a.bool.isRequired,pageClassName:i.a.string,pageLinkClassName:i.a.string,activeClassName:i.a.string,activeLinkClassName:i.a.string,extraAriaContext:i.a.string,href:i.a.string,ariaLabel:i.a.string,page:i.a.number.isRequired,getEventListener:i.a.func.isRequired,pageLabelBuilder:i.a.func.isRequired};var c=o;function d(){return(d=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e}).apply(this,arguments)}var p=function(e){var a=e.breakLabel,t=e.breakClassName,s=e.breakLinkClassName,r=e.breakHandler,i=e.getEventListener,l=t||"break";return n.a.createElement("li",{className:l},n.a.createElement("a",d({className:s,role:"button",tabIndex:"0",onKeyPress:r},i(r)),a))};p.propTypes={breakLabel:i.a.oneOfType([i.a.string,i.a.node]),breakClassName:i.a.string,breakLinkClassName:i.a.string,breakHandler:i.a.func.isRequired,getEventListener:i.a.func.isRequired};var u=p;function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(){return(h=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e}).apply(this,arguments)}function g(e,a){for(var t=0;t<a.length;t++){var s=a[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function m(e,a){return(m=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function f(e){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,s=x(e);if(a){var n=x(this).constructor;t=Reflect.construct(s,arguments,n)}else t=s.apply(this,arguments);return v(this,t)}}function v(e,a){return!a||"object"!==b(a)&&"function"!=typeof a?j(e):a}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var C=function(e){!function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&m(e,a)}(i,e);var a,t,s,r=f(i);function i(e){var a,t;return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,i),y(j(a=r.call(this,e)),"handlePreviousPage",(function(e){var t=a.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,t>0&&a.handlePageSelected(t-1,e)})),y(j(a),"handleNextPage",(function(e){var t=a.state.selected,s=a.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,t<s-1&&a.handlePageSelected(t+1,e)})),y(j(a),"handlePageSelected",(function(e,t){t.preventDefault?t.preventDefault():t.returnValue=!1,a.state.selected!==e?(a.setState({selected:e}),a.callCallback(e)):a.callActiveCallback(e)})),y(j(a),"getEventListener",(function(e){return y({},a.props.eventListener,e)})),y(j(a),"handleBreakClick",(function(e,t){t.preventDefault?t.preventDefault():t.returnValue=!1;var s=a.state.selected;a.handlePageSelected(s<e?a.getForwardJump():a.getBackwardJump(),t)})),y(j(a),"callCallback",(function(e){void 0!==a.props.onPageChange&&"function"==typeof a.props.onPageChange&&a.props.onPageChange({selected:e})})),y(j(a),"callActiveCallback",(function(e){void 0!==a.props.onPageActive&&"function"==typeof a.props.onPageActive&&a.props.onPageActive({selected:e})})),y(j(a),"pagination",(function(){var e=[],t=a.props,s=t.pageRangeDisplayed,r=t.pageCount,i=t.marginPagesDisplayed,l=t.breakLabel,o=t.breakClassName,c=t.breakLinkClassName,d=a.state.selected;if(r<=s)for(var p=0;p<r;p++)e.push(a.getPageElement(p));else{var b,h,g,m=s/2,f=s-m;d>r-s/2?m=s-(f=r-d):d<s/2&&(f=s-(m=d));var v=function(e){return a.getPageElement(e)};for(b=0;b<r;b++)(h=b+1)<=i||h>r-i||b>=d-m&&b<=d+f?e.push(v(b)):l&&e[e.length-1]!==g&&(g=n.a.createElement(u,{key:b,breakLabel:l,breakClassName:o,breakLinkClassName:c,breakHandler:a.handleBreakClick.bind(null,b),getEventListener:a.getEventListener}),e.push(g))}return e})),t=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,a.state={selected:t},a}return a=i,(t=[{key:"componentDidMount",value:function(){var e=this.props,a=e.initialPage,t=e.disableInitialCallback,s=e.extraAriaContext;void 0===a||t||this.callCallback(a),s&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,a=this.props,t=a.pageCount,s=e+a.pageRangeDisplayed;return s>=t?t-1:s}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var a=this.props,t=a.hrefBuilder,s=a.pageCount;if(t&&e!==this.state.selected&&e>=0&&e<s)return t(e+1)}},{key:"ariaLabelBuilder",value:function(e){var a=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var t=this.props.ariaLabelBuilder(e+1,a);return this.props.extraAriaContext&&!a&&(t=t+" "+this.props.extraAriaContext),t}}},{key:"getPageElement",value:function(e){var a=this.state.selected,t=this.props,s=t.pageClassName,r=t.pageLinkClassName,i=t.activeClassName,l=t.activeLinkClassName,o=t.extraAriaContext,d=t.pageLabelBuilder;return n.a.createElement(c,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:a===e,pageClassName:s,pageLinkClassName:r,activeClassName:i,activeLinkClassName:l,extraAriaContext:o,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,pageLabelBuilder:d,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props,a=e.disabledClassName,t=e.pageCount,s=e.containerClassName,r=e.previousLabel,i=e.previousClassName,l=e.previousLinkClassName,o=e.previousAriaLabel,c=e.prevRel,d=e.nextLabel,p=e.nextClassName,u=e.nextLinkClassName,b=e.nextAriaLabel,g=e.nextRel,m=this.state.selected,f=i+(0===m?" ".concat(a):""),v=p+(m===t-1?" ".concat(a):""),j=0===m?"true":"false",x=m===t-1?"true":"false";return n.a.createElement("ul",{className:s},n.a.createElement("li",{className:f},n.a.createElement("a",h({className:l,href:this.hrefBuilder(m-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":j,"aria-label":o,rel:c},this.getEventListener(this.handlePreviousPage)),r)),this.pagination(),n.a.createElement("li",{className:v},n.a.createElement("a",h({className:u,href:this.hrefBuilder(m+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":x,"aria-label":b,rel:g},this.getEventListener(this.handleNextPage)),d)))}}])&&g(a.prototype,t),s&&g(a,s),i}(s.Component);y(C,"propTypes",{pageCount:i.a.number.isRequired,pageRangeDisplayed:i.a.number.isRequired,marginPagesDisplayed:i.a.number.isRequired,previousLabel:i.a.node,previousAriaLabel:i.a.string,prevRel:i.a.string,nextLabel:i.a.node,nextAriaLabel:i.a.string,nextRel:i.a.string,breakLabel:i.a.oneOfType([i.a.string,i.a.node]),hrefBuilder:i.a.func,onPageChange:i.a.func,onPageActive:i.a.func,initialPage:i.a.number,forcePage:i.a.number,disableInitialCallback:i.a.bool,containerClassName:i.a.string,pageClassName:i.a.string,pageLinkClassName:i.a.string,pageLabelBuilder:i.a.func,activeClassName:i.a.string,activeLinkClassName:i.a.string,previousClassName:i.a.string,nextClassName:i.a.string,previousLinkClassName:i.a.string,nextLinkClassName:i.a.string,disabledClassName:i.a.string,breakClassName:i.a.string,breakLinkClassName:i.a.string,extraAriaContext:i.a.string,ariaLabelBuilder:i.a.func,eventListener:i.a.string}),y(C,"defaultProps",{pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextRel:"next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(e){return e},eventListener:"onClick"}),a.default=C}]))}).call(this,t(14))},841:function(e,a,t){"use strict";t.r(a),t.d(a,"Brand",(function(){return f}));var s=t(0),n=t(568),r=t(592),i=t(570),l=t(48),o=t(573),c=t(569),d=t(669),p=t(629),u=t(7);class b extends s.Component{constructor(...e){super(...e),this.state={visible:!1,icon:"",action:"",loading:!1,brandName:"",brandId:""},this.manageBrandModal=(e,a)=>{if(e.modalVisible!==this.props.modalVisible){let{visible:e,action:a,brand:t,icon:s}=this.props.modalVisible;console.log(t),"Add"===a?this.setState({visible:e,action:a,icon:s}):"Edit"===a?this.setState({visible:e,action:a,icon:s,brandName:t.brandName,brandId:t.id}):this.setState({visible:e,action:"",icon:"",brandName:"",brandId:""})}},this.handleOnChange=e=>{let a=e.target.name;this.setState({[a]:e.target.value})},this.handleOnSubmit=e=>{e.preventDefault(),this.setState({loading:!0});let{brandName:a,brandId:t,action:s}=this.state,{accessToken:n,type:r}=this.props.userResponse.credentials,i=r+n;a&&a.length>0?"Add"===s?this.handleSaveBrand(a,i):"Edit"===s&&this.handleUpdateBrand(t,a,i):this.setState({loading:!1})},this.handleUpdateBrand=(e,a,t)=>{this.props.updateBrand(e,a,t).then((()=>{let{status:e,data:a}=this.props.messageResponse;200===e&&this.setState({brandName:"",message:a.message,loading:!1}),setInterval((()=>{this.props.clearMessage(),window.location.reload()}),1e3)})).catch((()=>{let{status:e,data:a}=this.props.messageResponse;this.setState({successFully:!1,loading:!1})}))}}componentDidUpdate(e,a){this.manageBrandModal(e,a)}handleSaveBrand(e,a){this.props.savingBrand(e,a).then((()=>{let{status:e,data:a}=this.props.messageResponse;200===e&&this.setState({brandName:"",message:a.message,loading:!1}),setInterval((()=>{this.props.clearMessage(),window.location.reload()}),1e3)})).catch((()=>{this.setState({successFully:!1,loading:!1})}))}render(){let{visible:e,icon:a,action:t,brandName:s,loading:r}=this.state;return Object(u.jsx)("div",{children:Object(u.jsxs)(n.P,{visible:e,children:[Object(u.jsx)(n.S,{onDismiss:()=>{this.props.addBrandModal(!1,"close","",""),this.props.clearMessage()},children:Object(u.jsx)(n.T,{children:Object(u.jsxs)("div",{className:"d-flex align-items-center",children:[a,t+" Brand"]})})}),Object(u.jsx)(n.Q,{children:Object(u.jsx)(n.B,{id:"brand-form",onSubmit:this.handleOnSubmit,children:Object(u.jsx)("div",{className:"mb-3",children:Object(u.jsxs)(n.F,{className:"mb-3",children:[Object(u.jsx)(n.D,{name:"brandName",value:s,onChange:this.handleOnChange,type:"text",id:"floatingBrandInput",placeholder:"Enter Brand Name"}),Object(u.jsx)(n.G,{htmlFor:"floatingBrandInput",children:"Enter Brand Name"})]})})})}),Object(u.jsxs)(n.R,{children:[Object(u.jsx)(n.f,{color:"dark",variant:"ghost",onClick:()=>{this.props.addBrandModal(!1,"close","",""),this.props.clearMessage()},children:"Close"}),Object(u.jsxs)(n.f,{type:"submit",color:"primary",disabled:r,form:"brand-form",children:[r&&Object(u.jsx)(n.gb,{size:"sm",className:"ms-1"}),"Save ","Edit"===t?"Changes":"Brand"]})]})]})})}}var h=Object(l.b)((e=>({modalVisible:e.modalVisibleResponse,brandResponse:e.brandResponse,userResponse:e.userResponse,messageResponse:e.messageResponse})),{addBrandModal:c.b,savingBrand:d.c,updateBrand:d.d,clearMessage:o.a})(b),g=(t(154),t(582)),m=t.n(g);class f extends s.Component{constructor(...e){super(...e),this.state={visible:!1,brands:{data:[],totalPages:0},message:"",status:"",permission:"",page:0,limit:10,query:""},this.getBrands=(e,a,t)=>{this.props.getBrands(e,a,t)},this.manageBrandsResponse=(e,a)=>{if(e.brandResponse!==this.props.brandResponse){let{status:e,action:a,data:t}=this.props.brandResponse;200===e&&"GETBRANDS"===a&&this.setState({brands:t.brands})}},this.handleSearch=e=>{const{page:a,limit:t}=this.state;this.props.getBrands(e.target.value,a,t),this.setState({query:e.target.value})},this.handlePageClick=e=>{let a=e.selected;this.setState({page:a});const{limit:t,query:s}=this.state;this.props.getBrands(s,a,t)}}componentDidMount(){let{roles:e}=this.props.userResponse.credentials,{page:a,query:t,limit:s}=this.state;this.setState({permission:e&&e.roleName}),this.getBrands(t,a,s)}componentDidUpdate(e,a){this.manageBrandsResponse(e,a),this.manageModalResponse(e,a)}componentWillUnmount(){this.setState({visible:!1,brands:[],message:"",status:"",permission:""}),this.props.addBrandModal(null,null,null,null)}manageModalResponse(e,a){if(e.modalVisibleResponse!==this.props.modalVisibleResponse){let{action:e,visible:a}=this.props.modalVisibleResponse;if(this.setState({visible:a}),"close"===e){const{page:e,limit:a,query:t}=this.state;this.getBrands(e,a,t)}}}renderAlertModal(){return Object(u.jsx)(p.a,{})}renderBrandModal(){return Object(u.jsx)(h,{})}render(){const{visible:e,brands:a,message:t,permission:s,query:l,limit:o,page:c}=this.state;return Object(u.jsxs)("div",{children:[this.renderBrandModal(),this.renderAlertModal(),Object(u.jsxs)("div",{className:"d-flex justify-content-between mb-2",children:[Object(u.jsxs)(n.f,{shape:"rounded-pill",color:"primary",variant:"ghost",className:"d-flex justify-content-center align-items-center mb-3",onClick:()=>this.props.addBrandModal(!e,"Add","",Object(u.jsx)(i.r,{size:20,className:"me-2"})),children:[Object(u.jsx)(i.r,{size:20}),Object(u.jsx)("span",{style:{marginLeft:"10px"},children:"Add Brand"})]}),Object(u.jsx)(n.B,{className:"w-50",children:Object(u.jsxs)(n.N,{children:[Object(u.jsx)(n.D,{type:"text",id:"floatingInput",placeholder:"Search",className:"p-2",value:l,onChange:this.handleSearch}),Object(u.jsx)(n.f,{type:"button",color:"info",variant:"outline",id:"button-addon2",className:"",children:Object(u.jsx)(i.v,{})})]})})]}),Object(u.jsxs)(n.jb,{striped:!0,hover:!0,className:"shadow-sm ",responsive:"md",bordered:!0,align:"middle",children:[Object(u.jsxs)(n.lb,{children:["List of Brand: ",Object(u.jsx)("b",{children:a.totalItems})]}),Object(u.jsx)(n.nb,{color:"dark",children:Object(u.jsxs)(n.pb,{className:"text-center",children:[Object(u.jsx)(n.ob,{scope:"col",children:"Brand Name"}),Object(u.jsx)(n.ob,{scope:"col",children:"Products"}),Object(u.jsx)(n.ob,{scope:"col",children:"Created Date"}),Object(u.jsx)(n.ob,{scope:"col",children:"Action"})]})}),Object(u.jsxs)(n.kb,{className:"text-center",color:"light",children:[a.data.length>0?a.data.map(((a,t)=>Object(u.jsxs)(n.pb,{className:"text-center",children:[Object(u.jsx)(n.mb,{children:a.brandName}),Object(u.jsx)(n.mb,{children:a.totalProducts}),Object(u.jsx)(n.mb,{children:a.createdAt}),Object(u.jsxs)(n.mb,{className:"text-center w-25",colSpan:"1",children:[Object(u.jsx)(n.qb,{content:"Edit Brand",children:Object(u.jsx)(n.f,{color:"info",className:"me-2",variant:"ghost",size:"sm",onClick:()=>this.props.addBrandModal(!e,"Edit",a,Object(u.jsx)(r.d,{size:"20",className:"me-2"})),children:Object(u.jsx)(r.d,{size:"20"})})}),Object(u.jsx)(n.qb,{content:"Delete Brand",children:Object(u.jsx)(n.f,{color:"danger",className:"ms-2",variant:"ghost",onClick:()=>this.props.setAlertModal(!e,"DELETEBRAND","BRAND",a.id),size:"sm",children:Object(u.jsx)(r.b,{size:"20"})})})]})]},t))):Object(u.jsx)(n.pb,{children:Object(u.jsx)(n.mb,{colSpan:"4",children:"No data"})}),t&&Object(u.jsx)(n.pb,{className:"text-center",children:Object(u.jsx)(n.mb,{colSpan:"4",children:Object(u.jsx)("div",{className:"alert alert-danger",role:"alert",children:t})})})]})]}),Object(u.jsx)(m.a,{previousLabel:"previous",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:a.totalPages,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:this.handlePageClick,containerClassName:"pagination",activeClassName:"active"})]})}}a.default=Object(l.b)((e=>({modelVisible:e.modelVisibleResponse,brandResponse:e.brandResponse,userResponse:e.userResponse,messageResponse:e.messageResponse})),{setAlertModal:c.h,addBrandModal:c.b,getBrands:d.b,clearMessage:o.a})(f)}}]);
//# sourceMappingURL=62.45367edb.chunk.js.map