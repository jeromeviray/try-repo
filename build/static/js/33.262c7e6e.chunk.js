(this["webpackJsonp@project/inventory-management-system"]=this["webpackJsonp@project/inventory-management-system"]||[]).push([[33],{429:function(e,t,a){"use strict";a.d(t,"l",(function(){return n})),a.d(t,"k",(function(){return i})),a.d(t,"e",(function(){return r})),a.d(t,"h",(function(){return o})),a.d(t,"g",(function(){return c})),a.d(t,"o",(function(){return l})),a.d(t,"b",(function(){return d})),a.d(t,"c",(function(){return u})),a.d(t,"a",(function(){return m})),a.d(t,"d",(function(){return h})),a.d(t,"j",(function(){return p})),a.d(t,"f",(function(){return b})),a.d(t,"p",(function(){return g})),a.d(t,"q",(function(){return j})),a.d(t,"n",(function(){return f})),a.d(t,"m",(function(){return O})),a.d(t,"r",(function(){return v})),a.d(t,"i",(function(){return x}));var s=a(2);const n=(e,t,a)=>async n=>{n({type:s.SET_PRODUCTEDITMODAL_VISIBILIT,payload:{status:200,data:{visible:e,action:t,icon:a}}})},i=(e,t,a)=>async n=>{n({type:s.SET_PRODUCT_DETAILS_MODAL,payload:{status:200,data:{visible:e,action:t,product:a}}})},r=(e,t,a,n)=>async i=>{i({type:s.EDIT_PRODUCT_MODAL,payload:{status:200,data:{visible:e,action:t,product:a,icon:n}}})},o=(e,t,a,n)=>async i=>{i({type:s.ALERT_MODAL,payload:{action:t,module:a,alert:e,data:{id:n}}})},c=(e,t,a,n)=>async i=>{i({type:s.ALERT_BAN_MODAL,payload:{action:t,module:a,alert:e,data:{id:n}}})},l=(e,t,a,n)=>async i=>{i({type:s.UDPATE_STORE_INFORMATION,payload:{status:200,data:{visible:e,action:t,storeInfo:a,icon:n}}})},d=(e,t,a,n)=>async i=>{i({type:s.ADD_BRAND_MODAL,payload:{status:200,data:{visible:e,action:t,brand:a,icon:n}}})},u=(e,t,a,n)=>async i=>{i({type:s.ADD_CATEGORY_MODAL,payload:{status:200,data:{visible:e,action:t,category:a,icon:n}}})},m=(e,t,a,n)=>async i=>{i({type:s.ADD_EMPLOYEE_MODAL,payload:{status:200,data:{visible:e,action:t,employee:a,icon:n}}})},h=(e,t,a,n)=>async i=>{i({type:s.CHANGE_PASSWORD_MODAL,payload:{status:200,data:{visible:e,action:t,employee:a,icon:n}}})},p=(e,t)=>async a=>{a({type:s.LOGIN_MODAL,payload:{data:{visible:e,action:t}}})},b=(e,t,a,n)=>async i=>{i({type:s.SET_ADDRESS_MODAL,payload:{data:{visible:e,action:t,address:a,icon:n}}})},g=(e,t,a,n)=>async i=>{i({type:s.SET_SUPPLIER_MODAL,payload:{action:t,data:{visible:e,icon:n,supplier:a}}})},j=(e,t,a,n)=>async i=>{i({type:s.SET_SUPPLY_MODAL,payload:{action:t,data:{visible:e,icon:n,supply:a}}})},f=(e,t)=>async a=>{a({type:s.SET_SCAN_MODAL,payload:{action:t,data:{visible:e}}})},O=(e,t,a,n)=>async i=>{i({type:s.SET_PROMO_MODAL,payload:{action:t,data:{visible:e,icon:n,promo:a}}})},v=(e,t,a,n)=>async i=>{i({type:s.SET_TERMS_AND_CONDITION_MODAL,payload:{status:200,data:{visible:e,action:t,termsAndCondition:a,icon:n}}})},x=(e,t,a,n)=>async i=>{i({type:s.SET_CAROULSE_MDOAL,payload:{status:200,data:{visible:e,action:t,carousel:a,icon:n}}})}},563:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getListFiles=t.getImage=t.getBase64=t.getAcceptTypeString=t.openFileDialog=void 0,t.openFileDialog=function(e){e.current&&e.current.click()},t.getAcceptTypeString=function(e){return e&&e.length>0?e.map((function(e){return"."+e})).join(", "):"image/*"},t.getBase64=function(e){var t=new FileReader;return new Promise((function(a){t.addEventListener("load",(function(){return a(String(t.result))})),t.readAsDataURL(e)}))},t.getImage=function(e){var t=new Image;return new Promise((function(a){t.addEventListener("load",(function(){return a(t)})),t.src=URL.createObjectURL(e)}))},t.getListFiles=function(e,a){for(var s=[],n=0;n<e.length;n+=1)s.push(t.getBase64(e[n]));return Promise.all(s).then((function(t){return t.map((function(t,s){var n;return(n={})[a]=t,n.file=e[s],n}))}))}},564:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_DATA_URL_KEY=t.INIT_MAX_NUMBER=t.DEFAULT_NULL_INDEX=void 0,t.DEFAULT_NULL_INDEX=-1,t.INIT_MAX_NUMBER=1e3,t.DEFAULT_DATA_URL_KEY="dataURL"},607:function(e,t,a){"use strict";var s=a(56),n=a(128);t.a=new class{getCarouselImages(){return s.a.get("/carousel",{headers:Object(n.a)()})}saveCarouselImages(e){return s.a.post("/carousel/save",e,{headers:Object(n.a)()})}getImages(e){return s.a.get("/carousel/getImages/bytesArrays/"+e,{headers:Object(n.a)()})}}},684:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var s=a(14),n=a(2),i=a(607);const r=()=>async e=>i.a.getCarouselImages().then((t=>(e({type:n.GET_CAROUSEL_IMAGES,payload:{status:200,data:{carouselImages:t.data}}}),Promise.resolve())),(t=>{const a=t.response&&t.response.data&&t.response.data.message||t.message||t.error_message||t.toString(),n=t.response&&t.response.data&&t.response.data.code||t.toString();return e({type:s.g,payload:{status:n,data:{message:a}}}),Promise.reject()}))},685:function(e,t,a){"use strict";var s=this&&this.__assign||function(){return s=Object.assign||function(e){for(var t,a=1,s=arguments.length;a<s;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},s.apply(this,arguments)},n=this&&this.__createBinding||(Object.create?function(e,t,a,s){void 0===s&&(s=a),Object.defineProperty(e,s,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,s){void 0===s&&(s=a),e[s]=t[a]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&n(t,e,a);return i(t,e),t},o=this&&this.__awaiter||function(e,t,a,s){return new(a||(a=Promise))((function(n,i){function r(e){try{c(s.next(e))}catch(t){i(t)}}function o(e){try{c(s.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(r,o)}c((s=s.apply(e,t||[])).next())}))},c=this&&this.__generator||function(e,t){var a,s,n,i,r={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(i){return function(o){return function(i){if(a)throw new TypeError("Generator is already executing.");for(;r;)try{if(a=1,s&&(n=2&i[0]?s.return:i[0]?s.throw||((n=s.return)&&n.call(s),0):s.next)&&!(n=n.call(s,i[1])).done)return n;switch(s=0,n&&(i=[2&i[0],n.value]),i[0]){case 0:case 1:n=i;break;case 4:return r.label++,{value:i[1],done:!1};case 5:r.label++,s=i[1],i=[0];continue;case 7:i=r.ops.pop(),r.trys.pop();continue;default:if(!(n=(n=r.trys).length>0&&n[n.length-1])&&(6===i[0]||2===i[0])){r=0;continue}if(3===i[0]&&(!n||i[1]>n[0]&&i[1]<n[3])){r.label=i[1];break}if(6===i[0]&&r.label<n[1]){r.label=n[1],n=i;break}if(n&&r.label<n[2]){r.label=n[2],r.ops.push(i);break}n[2]&&r.ops.pop(),r.trys.pop();continue}i=t.call(e,r)}catch(o){i=[6,o],s=0}finally{a=n=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}},l=this&&this.__spreadArrays||function(){for(var e=0,t=0,a=arguments.length;t<a;t++)e+=arguments[t].length;var s=Array(e),n=0;for(t=0;t<a;t++)for(var i=arguments[t],r=0,o=i.length;r<o;r++,n++)s[n]=i[r];return s};Object.defineProperty(t,"__esModule",{value:!0});var d=r(a(0)),u=a(563),m=a(686),h=a(564);t.default=function(e){var t=e.value,a=void 0===t?[]:t,n=e.onChange,i=e.onError,r=e.children,p=e.dataURLKey,b=void 0===p?h.DEFAULT_DATA_URL_KEY:p,g=e.multiple,j=void 0!==g&&g,f=e.maxNumber,O=void 0===f?h.INIT_MAX_NUMBER:f,v=e.acceptType,x=e.maxFileSize,y=e.resolutionWidth,N=e.resolutionHeight,I=e.resolutionType,S=e.inputProps,_=void 0===S?{}:S,E=a||[],D=d.useRef(null),A=d.useState(h.DEFAULT_NULL_INDEX),L=A[0],C=A[1],T=d.useState(null),w=T[0],R=T[1],M=d.useState(!1),F=M[0],U=M[1],k=d.useCallback((function(){return u.openFileDialog(D)}),[D]),P=d.useCallback((function(){C(h.DEFAULT_NULL_INDEX),k()}),[k]),V=d.useCallback((function(){null===n||void 0===n||n([])}),[n]),z=function(e){return o(void 0,void 0,void 0,(function(){var t;return c(this,(function(a){switch(a.label){case 0:return[4,m.getErrorValidation({fileList:e,maxFileSize:x,maxNumber:O,acceptType:v,keyUpdate:L,resolutionType:I,resolutionWidth:y,resolutionHeight:N,value:E})];case 1:return(t=a.sent())?(R(t),null===i||void 0===i||i(t,e),[2,!1]):(w&&R(null),[2,!0])}}))}))},q=function(e){return o(void 0,void 0,void 0,(function(){var t,a,s,i,r;return c(this,(function(o){switch(o.label){case 0:return e?[4,u.getListFiles(e,b)]:[2];case 1:return(t=o.sent()).length?[4,z(t)]:[2];case 2:if(!o.sent())return[2];if(s=[],L>h.DEFAULT_NULL_INDEX)i=t[0],(a=l(E))[L]=i,s.push(L);else if(j)for(a=l(E,t),r=E.length;r<a.length;r+=1)s.push(r);else a=[t[0]],s.push(0);return null===n||void 0===n||n(a,s),[2]}}))}))},B=d.useMemo((function(){return u.getAcceptTypeString(v)}),[v]);return d.default.createElement(d.default.Fragment,null,d.default.createElement("input",s({type:"file",accept:B,ref:D,multiple:j&&L===h.DEFAULT_NULL_INDEX,onChange:function(e){return o(void 0,void 0,void 0,(function(){return c(this,(function(t){switch(t.label){case 0:return[4,q(e.target.files)];case 1:return t.sent(),L>h.DEFAULT_NULL_INDEX&&C(h.DEFAULT_NULL_INDEX),D.current&&(D.current.value=""),[2]}}))}))},style:{display:"none"}},_)),null===r||void 0===r?void 0:r({imageList:E,onImageUpload:P,onImageRemoveAll:V,onImageUpdate:function(e){C(e),k()},onImageRemove:function(e){var t=l(E);Array.isArray(e)?e.forEach((function(e){t.splice(e,1)})):t.splice(e,1),null===n||void 0===n||n(t)},errors:w,dragProps:{onDrop:function(e){e.preventDefault(),e.stopPropagation(),U(!1),e.dataTransfer.files&&e.dataTransfer.files.length>0&&q(e.dataTransfer.files)},onDragEnter:function(e){e.preventDefault(),e.stopPropagation(),e.dataTransfer.items&&e.dataTransfer.items.length>0&&U(!0)},onDragLeave:function(e){e.preventDefault(),e.stopPropagation(),U(!1)},onDragOver:function(e){e.preventDefault(),e.stopPropagation()},onDragStart:function(e){e.preventDefault(),e.stopPropagation(),e.dataTransfer.clearData()}},isDragging:F}))}},686:function(e,t,a){"use strict";var s=this&&this.__awaiter||function(e,t,a,s){return new(a||(a=Promise))((function(n,i){function r(e){try{c(s.next(e))}catch(t){i(t)}}function o(e){try{c(s.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(r,o)}c((s=s.apply(e,t||[])).next())}))},n=this&&this.__generator||function(e,t){var a,s,n,i,r={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(i){return function(o){return function(i){if(a)throw new TypeError("Generator is already executing.");for(;r;)try{if(a=1,s&&(n=2&i[0]?s.return:i[0]?s.throw||((n=s.return)&&n.call(s),0):s.next)&&!(n=n.call(s,i[1])).done)return n;switch(s=0,n&&(i=[2&i[0],n.value]),i[0]){case 0:case 1:n=i;break;case 4:return r.label++,{value:i[1],done:!1};case 5:r.label++,s=i[1],i=[0];continue;case 7:i=r.ops.pop(),r.trys.pop();continue;default:if(!(n=(n=r.trys).length>0&&n[n.length-1])&&(6===i[0]||2===i[0])){r=0;continue}if(3===i[0]&&(!n||i[1]>n[0]&&i[1]<n[3])){r.label=i[1];break}if(6===i[0]&&r.label<n[1]){r.label=n[1],n=i;break}if(n&&r.label<n[2]){r.label=n[2],r.ops.push(i);break}n[2]&&r.ops.pop(),r.trys.pop();continue}i=t.call(e,r)}catch(o){i=[6,o],s=0}finally{a=n=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.getErrorValidation=t.isMaxNumberValid=t.isAcceptTypeValid=t.isMaxFileSizeValid=t.isImageValid=t.isResolutionValid=void 0;var i=a(564),r=a(563);t.isResolutionValid=function(e,t,a,s){if(void 0===a&&(a=0),void 0===s&&(s=1),!a||!s||!e.width||!e.height)return!0;switch(t){case"absolute":if(e.width===a&&e.height===s)return!0;break;case"ratio":var n=a/s;if(e.width/e.height===n)return!0;break;case"less":if(e.width<=a&&e.height<=s)return!0;break;case"more":if(e.width>=a&&e.height>=s)return!0}return!1},t.isImageValid=function(e){return!!e.includes("image")},t.isMaxFileSizeValid=function(e,t){return!t||e<=t},t.isAcceptTypeValid=function(e,t){if(e&&e.length>0){var a=t.split(".").pop()||"";if(e.findIndex((function(e){return e.toLowerCase()===a.toLowerCase()}))<0)return!1}return!0},t.isMaxNumberValid=function(e,t,a){if(0!==t&&!t)return!0;if(a===i.DEFAULT_NULL_INDEX){if(e<=t)return!0}else if(e<=t+1)return!0;return!1},t.getErrorValidation=function(e){var a=e.fileList,i=e.value,o=e.maxNumber,c=e.keyUpdate,l=e.acceptType,d=e.maxFileSize,u=e.resolutionType,m=e.resolutionWidth,h=e.resolutionHeight;return s(void 0,void 0,void 0,(function(){var e,s,p,b;return n(this,(function(n){switch(n.label){case 0:return e={},t.isMaxNumberValid(a.length+i.length,o,c)?[3,1]:(e.maxNumber=!0,[3,5]);case 1:s=0,n.label=2;case 2:return s<a.length?(p=a[s].file)?t.isImageValid(p.type)&&t.isAcceptTypeValid(l,p.name)?t.isMaxFileSizeValid(p.size,d)?u?[4,r.getImage(p)]:[3,4]:(e.maxFileSize=!0,[3,5]):(e.acceptType=!0,[3,5]):[3,4]:[3,5];case 3:if(b=n.sent(),!t.isResolutionValid(b,u,m,h))return e.resolution=!0,[3,5];n.label=4;case 4:return s+=1,[3,2];case 5:return Object.values(e).find(Boolean)?[2,e]:[2,null]}}))}))}},692:function(e,t,a){"use strict";a.r(t),a.d(t,"StoreInformation",(function(){return L}));var s=a(0),n=a(55),i=a(684),r=a(471),o=a(461),c=a(430),l=a(429),d=a(428),u=a(685),m=a.n(u),h=a(451),p=a(607),b=a(8);class g extends s.Component{constructor(...e){super(...e),this.state={icon:"",visible:!1,loading:!1,action:"",carouselImages:[],removedImages:[],alert:!0},this.manageBrandModal=(e,t)=>{if(e.modalVisible!==this.props.modalVisible){let{visible:e,action:t,carousel:a,icon:s}=this.props.modalVisible;"Add Carousel"===t?this.setState({visible:e,action:t,icon:s}):"Edit Carousel"===t?(this.setState({visible:e,action:t,icon:s}),this.getImages(a)):"close"===t&&this.setState({visible:e,action:"",icon:"",carouselImages:[]})}},this.loadImage=(e,t)=>{let{carouselImages:a}=this.state;if(!e)return;let s=new FileReader;s.onloadend=()=>{a.push({data_url:s.result,file:null,image_created:!0,filename:t}),this.setState({carouselImages:a})},e&&s.readAsDataURL(e)},this.handleImageOnchange=(e,t)=>{this.setState({carouselImages:e})}}componentDidUpdate(e,t){this.manageBrandModal(e,t)}async getImages(e){for(let t=0;t<e.length;t++)p.a.getImages(e[t].imageName).then((a=>{this.loadImage(a.data,e[t].imageName)})).catch((e=>{const t=e.response&&e.response.data&&e.response.data.message||e.message||e.error_message||e.toString(),a=e.response&&e.response.data&&e.response.data.code||e.status||e.toString();this.setState({status:a,message:t})}))}removeImage(e){let{carouselImages:t,removedImages:a}=this.state;t[e].filename&&a.push(t[e].filename)}render(){let{visible:e,icon:t,action:a,loading:s,carouselImages:n,alert:i}=this.state;return console.log(n),Object(b.jsx)("div",{children:Object(b.jsxs)(d.P,{size:"xl",visible:e,fullscreen:"lg",scrollable:!0,children:[Object(b.jsx)(d.S,{onDismiss:()=>{this.props.setCarouselModal(!1,"close","","")},children:Object(b.jsx)(d.T,{children:Object(b.jsxs)("div",{className:"d-flex align-items-center",children:[t,a+" Carousel"]})})}),Object(b.jsxs)(d.Q,{children:[Object(b.jsx)(d.a,{color:"warning",dismissible:!0,visible:i,children:Object(b.jsx)("strong",{children:"Maximum 10 images"})}),Object(b.jsx)(m.a,{multiple:!0,value:n,onChange:this.handleImageOnchange,maxNumber:10,dataURLKey:"data_url",onError:()=>this.setState({toastVisible:!1}),acceptType:["jpg","gif","png"],children:({imageList:e,onImageUpload:t,onImageRemove:a,isDragging:s,dragProps:n})=>Object(b.jsxs)("div",{className:"upload__image-wrapper",children:[Object(b.jsx)(d.s,{className:"upload-container",children:Object(b.jsx)(d.f,{color:"secondary",className:"upload-btn",style:s?{backgroundColor:"#8E9293",border:"4px dashed #ffffff"}:void 0,onClick:t,...n,children:"Select Image or Drag Here"})}),Object(b.jsx)(d.bb,{className:" images-contianer shadow ",children:e.map(((e,t)=>Object(b.jsx)(d.q,{sm:"4",md:"2",lg:"3",children:Object(b.jsxs)("div",{className:"image-item d-flex ",children:[Object(b.jsx)("img",{src:e.data_url,alt:"",width:"100"}),Object(b.jsx)("div",{className:"image-item__btn-wrapper",children:Object(b.jsx)(h.b,{size:30,color:"#FF0000",onClick:()=>{this.removeImage(t),a(t)}})})]})},t)))})]})})]}),Object(b.jsxs)(d.R,{children:[Object(b.jsx)(d.f,{color:"dark",variant:"ghost",onClick:()=>{this.props.setCarouselModal(!1,"close","","")},children:"Close"}),Object(b.jsxs)(d.f,{type:"submit",color:"primary",disabled:s,form:"brand-form",children:[s&&Object(b.jsx)(d.gb,{size:"sm",className:"ms-1"}),"Save ","Edit"===a?"Changes":"Brand"]})]})]})})}}var j=Object(n.b)((e=>({modalVisible:e.modalVisibleResponse,messageResponse:e.messageResponse})),{setCarouselModal:l.i})(g),f=a(462),O=a(475),v=a.n(O),x=a(476),y=a.n(x),N=a(431),I=a(683),S=a(134);class _ extends s.Component{constructor(...e){super(...e),this.state={visible:!1,icon:"",loading:!1,message:"",action:"",status:"",successFully:"",storeInfoState:this.storeState,editorState:f.EditorState.createEmpty(),validated:!1},this.storeState={storeId:"",storeName:"",acronym:"",email:"",location:"",contactNumber:0},this.manageStoreInfo=(e,t)=>{if(e.modalVisible!==this.props.modalVisible){let{visible:e,action:t,storeInfo:a,icon:s}=this.props.modalVisible;"Edit"===t?this.setState({visible:e,storeId:a.id,storeName:a.storeName,acronym:a.acronym,email:a.email,location:a.location,contactNumber:a.contactNumber,icon:s,action:t,editorState:a.description?f.EditorState.createWithContent(Object(f.convertFromRaw)(JSON.parse(a.description))):f.EditorState.createEmpty()}):"close"===t&&this.setState({visible:e,branchId:"",branchName:"",icon:"",action:"",loading:!1})}},this.handleOnChange=e=>{let t=e.target.name;this.setState({[t]:e.target.value})},this.onEditorStateChange=e=>{this.setState({editorState:e})},this.handleOnSubmit=e=>{e.preventDefault();!1===e.currentTarget.checkValidity()&&e.stopPropagation(),this.setState({validated:!0,loading:!0});const{storeName:t,acronym:a,location:s,email:n,editorState:i,contactNumber:r,storeId:o}=this.state,c=JSON.stringify(Object(f.convertToRaw)(i.getCurrentContent()));this.props.updateStoreInformation(o,t,a,s,c,r,n).then((()=>{this.setState({loading:!0}),this.props.setStoreModal(!1,"close","","")})).catch((()=>{this.setState({loading:!0}),this.props.setStoreModal(!1,"close","","")}))},this.validateEmail=e=>/^[\w.+\-]+@gmail\.com$/.test(e)}componentDidUpdate(e,t){this.manageStoreInfo(e,t)}render(){let{visible:e,action:t,icon:a,loading:s,successFully:n,message:i,storeId:r,storeName:o,acronym:c,email:l,location:u,contactNumber:m,editorState:h,validated:p}=this.state;return Object(b.jsx)("div",{children:Object(b.jsxs)(d.P,{visible:e,size:"xl",scrollable:!0,children:[Object(b.jsx)(d.S,{onDismiss:()=>{this.props.setStoreModal(!1,"close","",""),this.props.clearMessage()},children:Object(b.jsx)(d.T,{children:Object(b.jsxs)("div",{className:"d-flex align-items-center",children:[a,t+" Store Information"]})})}),Object(b.jsxs)(d.Q,{children:[i&&Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("div",{className:n?"alert alert-success":"alert alert-danger",role:"alert",children:i})}),Object(b.jsx)(d.B,{onSubmit:this.handleOnSubmit,id:"branch-form",noValidate:!0,validated:p,children:Object(b.jsx)("div",{className:"mb-3",children:Object(b.jsxs)(d.bb,{children:[Object(b.jsx)(d.q,{sm:"12",md:"6",lg:"6",children:Object(b.jsxs)(d.F,{className:"mb-3",children:[Object(b.jsx)(d.D,{name:"storeName",value:o,onChange:this.handleOnChange,type:"text",id:"floatingStoreNameInput",placeholder:"Enter Store Name",required:!0}),Object(b.jsx)(d.G,{htmlFor:"floatingStoreNameInput",children:"Store name"}),Object(b.jsx)(d.E,{valid:!0,children:"Looks good!"}),Object(b.jsx)(d.E,{invalid:!0,children:"Acronym is Store name"})]})}),Object(b.jsx)(d.q,{sm:"12",md:"6",lg:"6",children:Object(b.jsxs)(d.F,{className:"mb-3",children:[Object(b.jsx)(d.D,{name:"acronym",value:c,onChange:this.handleOnChange,type:"text",id:"floatingAcronymInput",placeholder:"Enter Acronym Name",required:!0}),Object(b.jsx)(d.G,{htmlFor:"floatingAcronymInput",children:"Acronym"}),Object(b.jsx)(d.E,{valid:!0,children:"Looks good!"}),Object(b.jsx)(d.E,{invalid:!0,children:"Acronym is Required"})]})}),Object(b.jsx)(d.q,{sm:"12",md:"6",lg:"6",children:Object(b.jsxs)(d.F,{className:"mb-3",children:[Object(b.jsx)(d.D,{name:"contactNumber",value:m,onChange:this.handleOnChange,type:"text",id:"floatingContactNumberInput",placeholder:"Enter Contact Number",required:!0}),Object(b.jsx)(d.G,{htmlFor:"floatingContactNumberInput",children:"Contact Number"}),Object(b.jsx)(d.E,{valid:!0,children:"Looks good!"}),Object(b.jsx)(d.E,{invalid:!0,children:"Contact Number is Required"})]})}),Object(b.jsx)(d.q,{sm:"12",md:"6",lg:"6",children:Object(b.jsxs)(d.F,{className:"mb-3",children:[Object(b.jsx)(d.D,{name:"email",value:l,onChange:this.handleOnChange,type:"email",id:"floatingEmailInput",placeholder:"Enter Email",required:!0}),Object(b.jsx)(d.G,{htmlFor:"floatingEmailInput",children:"Email Address"}),Object(b.jsx)(d.E,{valid:!0,children:"Looks good!"}),Object(b.jsx)(d.E,{invalid:!0,children:"Email Address is Required"})]})}),Object(b.jsx)(d.q,{sm:"12",children:Object(b.jsxs)(d.F,{className:"mb-3",children:[Object(b.jsx)(d.D,{name:"location",value:u,onChange:this.handleOnChange,type:"text",id:"floatingLocationInput",placeholder:"Enter Location",required:!0}),Object(b.jsx)(d.G,{htmlFor:"floatingLocationInput",children:"Location Address"}),Object(b.jsx)(d.E,{valid:!0,children:"Looks good!"}),Object(b.jsx)(d.E,{invalid:!0,children:"Location Address is Required"})]})}),Object(b.jsx)(d.q,{sm:"12",md:"12",lg:"12",className:"mt-4",children:Object(b.jsx)(I.Editor,{editorState:h,wrapperClassName:"editor-wrapper",editorClassName:"editor",onEditorStateChange:this.onEditorStateChange,placeholder:"Inser Description about your Store",toolbar:{options:["inline","blockType","fontSize","fontFamily","list","textAlign","colorPicker","emoji","remove","history"]},required:!0})})]})})})]}),Object(b.jsxs)(d.R,{children:[Object(b.jsx)(d.f,{color:"dark",variant:"ghost",onClick:()=>{this.props.setStoreModal(!1,"close","",""),this.props.clearMessage()},children:"Close"}),Object(b.jsxs)(d.f,{color:"primary",disabled:s,type:"submit",form:"branch-form",children:[s&&Object(b.jsx)(d.gb,{size:"sm",className:"ms-1"}),"Save ","Edit"===t?"Changes":"Branch"]})]})]})})}}var E=Object(n.b)((e=>({modalVisible:e.modalVisibleResponse,messageResponse:e.messageResponse})),{setStoreModal:l.o,clearMessage:N.a,updateStoreInformation:S.b})(_),D=a(2),A=a(25);class L extends s.Component{constructor(...e){super(...e),this.state={carouselImages:[],storeInfo:[],visible:!1},this.componentDidUpdate=(e,t)=>{this.getResponseCarouselImages(e,t),this.manageStoreInformationResponse(e,t),this.manageStoreInfo(e,t)},this.getResponseCarouselImages=(e,t)=>{if(e.carouselResponser!==this.props.carouselResponser){let e=this.props.carouselResponser;"RETRIEVE"===e.action&&(e.status>=200&&e.status<=300?this.setState({carouselImages:e.carouselData}):e.status<400&&console.log("ERROR"))}},this.manageStoreInformationResponse=(e,t)=>{if(e.storeInformationResponse!==this.props.storeInformationResponse){const{action:e,status:t,data:a}=this.props.storeInformationResponse;"GET_STORE_INFORMATION"===e&&200===t&&this.setState({storeInfo:a.storeInfo})}},this.manageStoreInfo=(e,t)=>{if(e.modalVisible!==this.props.modalVisible){let{action:e}=this.props.modalVisible;"close"===e&&this.props.getStoreInformation()}},this.createMarkup=e=>({__html:v.a.sanitize(e)})}componentDidMount(){this.props.getCarouselImages()}render(){let{carouselImages:e,storeInfo:t,visible:a}=this.state,s=t.description&&JSON.parse(t.description);const n={position:"absolute",zIndex:"2",top:"calc(4% - 16px)",height:"100%",cursor:"pointer",border:"none"},i={marginBottom:"12px"};let l="",u=Object(b.jsx)(b.Fragment,{});if(s){l=Object(f.convertFromRaw)(s);const e=f.EditorState.createWithContent(l);u=y()(Object(f.convertToRaw)(e.getCurrentContent()))}return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(E,{}),Object(b.jsx)(j,{}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"mb-2 text-end",children:e.length>0?Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(d.f,{color:"info",variant:"ghost",size:"sm",onClick:()=>this.props.setCarouselModal(!a,"Edit Carousel",e,Object(b.jsx)(c.r,{size:20})),children:Object(b.jsx)(h.d,{size:"20"})})}):Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(d.f,{variant:"ghost",size:"sm",onClick:()=>this.props.setCarouselModal(!a,"Add Carousel","",Object(b.jsx)(c.r,{size:20})),children:[Object(b.jsx)(c.r,{size:20}),","]})})}),Object(b.jsx)(r.Carousel,{showArrows:!0,autoPlay:!0,showThumbs:!1,infiniteLoop:!0,dynamicHeight:!1,renderArrowPrev:(e,t,a)=>t&&Object(b.jsx)("button",{type:"button",onClick:e,title:a,className:"arrow-style",style:{...n,left:0},children:Object(b.jsx)(o.a,{size:"40",style:{color:"white"}})}),renderArrowNext:(e,t,a)=>t&&Object(b.jsx)("button",{type:"button",onClick:e,title:a,className:"arrow-style",style:{...n,right:0},children:Object(b.jsx)(o.b,{size:"40",style:{color:"white"}})}),children:e.length>0?e.map(((e,t)=>Object(b.jsx)("div",{children:Object(b.jsx)("img",{className:"d-block ",height:"400",src:A.a.api.private.baseUrl+"/api/v1/carousel/getImages/bytesArrays/"+e.imageName,alt:e.imageName})},t))):Object(b.jsx)("img",{className:"d-block ",height:"400",src:D.NO_IMAGE_BASE64,alt:"unavailable"})})]}),Object(b.jsxs)(d.s,{className:"mt-3 ",children:[Object(b.jsxs)(d.i,{className:" p-3",children:[t.acronym?Object(b.jsx)(d.b,{color:"warning",size:"xl",children:t.acronym}):Object(b.jsx)(d.b,{color:"warning",size:"xl",children:"IMS"}),Object(b.jsxs)(d.o,{className:"d-flex justify-content-between mt-3",children:[Object(b.jsxs)("div",{className:"font-style d-flex ",children:[Object(b.jsxs)("div",{className:"font-style d-flex flex-column align-items-start ",children:[Object(b.jsx)("h6",{className:"m-0 pe-3 mb-2",children:"Store name:"}),Object(b.jsx)("h6",{className:"m-0 pe-3 mb-2",children:"Acronym name:"}),Object(b.jsx)("h6",{className:"m-0 pe-3 mb-2",children:"Contact #:"}),Object(b.jsx)("h6",{className:"m-0 pe-3 mb-2",children:"Email:"}),Object(b.jsx)("h6",{className:"m-0 pe-3 mb-2",children:"Location:"})]}),Object(b.jsxs)("div",{className:"font-style d-flex flex-column align-items-start text-black-50",children:[Object(b.jsx)("strong",{style:{...i},children:t.storeName?Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("span",{children:t.storeName})}):Object(b.jsx)("span",{className:"text-warning",children:"--"})}),Object(b.jsx)("strong",{style:{...i},children:t.acronym?Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("span",{children:t.acronym})}):Object(b.jsx)("span",{className:"text-warning",children:"--"})}),Object(b.jsx)("strong",{style:{...i},children:t.contactNumber?Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("span",{children:t.contactNumber})}):Object(b.jsx)("span",{className:"text-warning",children:"--"})}),Object(b.jsx)("strong",{style:{...i},children:t.email?Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("span",{children:t.email})}):Object(b.jsx)("span",{className:"text-warning",children:"--"})}),Object(b.jsx)("strong",{style:{...i},children:t.location?Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("span",{children:t.location})}):Object(b.jsx)("span",{className:"text-warning",children:"--"})})]})]}),Object(b.jsx)("div",{className:"d-flex justify-content-end align-items-start mb-3",children:Object(b.jsx)(d.f,{color:"info",variant:"ghost",size:"sm",onClick:()=>this.props.setStoreModal(!a,"Edit",t,Object(b.jsx)(h.d,{size:"20",className:"me-2"})),children:Object(b.jsx)(h.d,{size:"20"})})})]})]}),Object(b.jsx)(d.i,{className:"mt-3 p-3",children:Object(b.jsx)(d.j,{children:s?Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"preview ps-4",dangerouslySetInnerHTML:this.createMarkup(u)})}):Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"preview ps-4 text-warning",children:"No Description"})})})})]})]})}}t.default=Object(n.b)((e=>({carouselResponser:e.carouselResponser,storeInformationResponse:e.storeInformationResponse,modalVisible:e.modalVisibleResponse})),{getCarouselImages:i.a,getStoreInformation:S.a,setStoreModal:l.o,setCarouselModal:l.i})(L)}}]);
//# sourceMappingURL=33.262c7e6e.chunk.js.map