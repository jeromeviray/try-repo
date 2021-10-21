(this["webpackJsonp@project/inventory-management-system"]=this["webpackJsonp@project/inventory-management-system"]||[]).push([[14],{128:function(t,a,e){"use strict";function n(){const t=JSON.parse(localStorage.getItem("credentials"));return t&&t.accessToken?{Authorization:t.type+t.accessToken}:{}}e.d(a,"a",(function(){return n}))},130:function(t,a,e){"use strict";var n=e(136);a.a=n.a},132:function(t,a,e){"use strict";e.d(a,"a",(function(){return E})),e.d(a,"b",(function(){return c})),e.d(a,"c",(function(){return u}));var n=e(56);var r=new class{login(t,a){return n.a.post("/account/login",{username:t,password:a})}register(t,a,e,r,s,o){return n.a.post("/users/account/register",{username:t,password:a,email:e,firstName:r,lastName:s,phoneNumber:o})}};var s=new class{login(t,a){return r.login(t,a).then((t=>(t.data&&localStorage.setItem("credentials",JSON.stringify(t.data)),t.data)))}logout(){localStorage.removeItem("credentials")}register(t,a,e,n,s,o){return r.register(t,a,e,n,s,o)}},o=e(14);const E=(t,a)=>async e=>s.login(t,a).then((t=>(e({type:o.c,payload:{credentials:t}}),e({type:o.g,payload:{status:200,data:{message:"Login Successfullys"}}}),Promise.resolve())),(t=>{const a=t.response&&t.response.data&&t.response.data.message||t.message||t.toString();return e({type:o.b}),e({type:o.g,payload:{status:403,data:{message:a}}}),Promise.reject()})),c=(t,a,e,n,r,E)=>async c=>(console.log(t),s.register(t,a,e,n,r,E).then((t=>(c({type:o.f}),c({type:o.g,payload:{status:200,data:{message:"Successfully Register"}}}),Promise.resolve())),(t=>{const a=t.response&&t.response.data&&t.response.data.message||t.message||t.toString();return c({type:o.e}),c({type:o.g,payload:{status:500,data:{message:a}}}),Promise.reject()}))),u=()=>t=>{s.logout(),t({type:o.d})}},134:function(t,a,e){"use strict";e.d(a,"a",(function(){return c})),e.d(a,"b",(function(){return u}));var n=e(14),r=e(2),s=e(128),o=e(56);var E=new class{getStoreInformation(){return o.a.get("/store")}updateStoreInformation(t,a,e,n,r,E,c){return o.a.put("/store/update/"+t,{storeName:a,acronym:e,location:n,description:r,contactNumber:E,email:c},{headers:Object(s.a)()})}};const c=()=>async t=>E.getStoreInformation().then((a=>(t({type:r.GET_STORE_INFORMATION,payload:{status:200,action:r.GET_STORE_INFORMATION,data:{storeInfo:a.data}}}),Promise.resolve())),(a=>{const e=a.response&&a.response.data&&a.response.data.message||a.message||a.toString(),r=a.response&&a.response.data&&a.response.data.code||a.toString();return t({type:n.g,payload:{status:r,data:{message:e}}}),Promise.reject()})),u=(t,a,e,r,s,o,c)=>async u=>E.updateStoreInformation(t,a,e,r,s,o,c).then((t=>(u({type:n.g,payload:{status:200,data:{message:"Successfully Updated"}}}),Promise.resolve())),(t=>{const a=t.response&&t.response.data&&t.response.data.message||t.message||t.toString(),e=t.response&&t.response.data&&t.response.data.code||t.toString();return u({type:n.g,payload:{status:e,data:{message:a}}}),Promise.reject()}))},136:function(t,a,e){"use strict";a.a={SUPER_ADMIN:"SUPER_ADMIN",ADMIN:"ADMIN",CUSTOMER:"CUSTOMER",USER:"USER",ROLE_USER:"ROLE_USER"}},14:function(t,a,e){"use strict";e.d(a,"f",(function(){return n})),e.d(a,"e",(function(){return r})),e.d(a,"c",(function(){return s})),e.d(a,"b",(function(){return o})),e.d(a,"d",(function(){return E})),e.d(a,"g",(function(){return c})),e.d(a,"a",(function(){return u}));const n="REGISTER_SUCCESS",r="REGISTER_FAIL",s="LOGIN_SUCCESS",o="LOGIN_FAIL",E="LOGOUT",c="SET_MESSAGE",u="CLEAR_MESSAGE"},2:function(t,a,e){"use strict";e.r(a),e.d(a,"GET_POPULAR_PRODUCT",(function(){return r})),e.d(a,"GET_PRODUCTS",(function(){return s})),e.d(a,"GET_PRODUCT",(function(){return o})),e.d(a,"DELETE_PRODUCT",(function(){return E})),e.d(a,"UPDATE_PRODUCT",(function(){return c})),e.d(a,"SAVE_PRODUCT",(function(){return u})),e.d(a,"SAVE_FAIL",(function(){return i})),e.d(a,"UPDATE_FAIL",(function(){return _})),e.d(a,"GET_IMAGE",(function(){return d})),e.d(a,"FAIL_GET_IMAGE",(function(){return T})),e.d(a,"GET_PRODUCT_DETAILS",(function(){return S})),e.d(a,"GET_PRODUCT_BY_CATEGORY_NAME",(function(){return O})),e.d(a,"SET_IMAGE_MESSAGE",(function(){return A})),e.d(a,"SET_PRODUCT_MESSAGE",(function(){return R})),e.d(a,"GET_CAROUSEL_IMAGES",(function(){return D})),e.d(a,"CAROUSEL_FOLDER_DIRECTORY",(function(){return p})),e.d(a,"SET_SIDEBAR",(function(){return I})),e.d(a,"SET_SIDEBAR_UNFOLD",(function(){return l})),e.d(a,"SET_PRODUCTEDITMODAL_VISIBILIT",(function(){return P})),e.d(a,"EDIT_PRODUCT_MODAL",(function(){return N})),e.d(a,"ALERT_MODAL",(function(){return C})),e.d(a,"ALERT_BAN_MODAL",(function(){return U})),e.d(a,"ADD_BRANCH_MODAL",(function(){return L})),e.d(a,"ADD_BRAND_MODAL",(function(){return f})),e.d(a,"ADD_CATEGORY_MODAL",(function(){return G})),e.d(a,"ADD_EMPLOYEE_MODAL",(function(){return M})),e.d(a,"SET_PRODUCT_DETAILS_MODAL",(function(){return y})),e.d(a,"LOGIN_MODAL",(function(){return m})),e.d(a,"SET_ADDRESS_MODAL",(function(){return g})),e.d(a,"SET_SUPPLIER_MODAL",(function(){return b})),e.d(a,"SET_SUPPLY_MODAL",(function(){return v})),e.d(a,"SET_SCAN_MODAL",(function(){return h})),e.d(a,"SET_PROMO_MODAL",(function(){return Y})),e.d(a,"CHANGE_PASSWORD_MODAL",(function(){return B})),e.d(a,"SET_TERMS_AND_CONDITION_MODAL",(function(){return j})),e.d(a,"SET_CAROULSE_MDOAL",(function(){return V})),e.d(a,"API_BASE_URL",(function(){return x})),e.d(a,"FRONT_END_BASED_URL",(function(){return F})),e.d(a,"OAUTH2_REDIRECT_URI",(function(){return H})),e.d(a,"ACCESS_TOKEN",(function(){return w})),e.d(a,"REFRESH_TOKEN",(function(){return W})),e.d(a,"USERNAME",(function(){return z})),e.d(a,"GOOGLE_AUTH_URL",(function(){return k})),e.d(a,"GET_BRANCH",(function(){return K})),e.d(a,"GET_BRANCH_TOTAL_PRODUCT",(function(){return J})),e.d(a,"SAVE_BRANCH",(function(){return Q})),e.d(a,"UPDATE_BRANCH",(function(){return X})),e.d(a,"DELETE_BRANCH",(function(){return $})),e.d(a,"GET_DISCOVER_PRODUCT",(function(){return q})),e.d(a,"GET_PUBLIC_PRODUCT",(function(){return Z})),e.d(a,"SEARCH_PRODUCT",(function(){return tt})),e.d(a,"GET_PRODUCTS_BY_STATUS",(function(){return at})),e.d(a,"GET_PRODUCTS_WITH_PROMO",(function(){return et})),e.d(a,"GET_BRANDS",(function(){return nt})),e.d(a,"GET_BRAND",(function(){return rt})),e.d(a,"SAVE_BRAND",(function(){return st})),e.d(a,"UPDATE_BRAND",(function(){return ot})),e.d(a,"DELETE_BRAND",(function(){return Et})),e.d(a,"FAIL_BRAND",(function(){return ct})),e.d(a,"CLEAR_BRAND",(function(){return ut})),e.d(a,"GET_ORDERS",(function(){return it})),e.d(a,"CONFIRM_ORDER",(function(){return _t})),e.d(a,"PLACE_ORDER",(function(){return dt})),e.d(a,"ORDER_ITEMS",(function(){return Tt})),e.d(a,"GET_ORDER_BY_ID",(function(){return St})),e.d(a,"UPDATE_ORDER_STATUS",(function(){return Ot})),e.d(a,"UPDATE_PAYMENT_STATUS",(function(){return At})),e.d(a,"GET_PAYMENT_TRANSACTIONS",(function(){return Rt})),e.d(a,"SAVE_CUSTOMER_ADDRESS",(function(){return Dt})),e.d(a,"UPDATE_CUSTOMER_ADDRESS",(function(){return pt})),e.d(a,"GET_CUSTOMER_ADDRESSES",(function(){return It})),e.d(a,"GET_CUSTOMER_ADDRESS",(function(){return lt})),e.d(a,"DELETE_CUSTOMER_ADDRESS",(function(){return Pt})),e.d(a,"GET_USERS_ACCOUNT",(function(){return Nt})),e.d(a,"SAVE_EMPLOYEE",(function(){return Ct})),e.d(a,"CHANGE_PASSWORD",(function(){return Ut})),e.d(a,"DELETE_ACCOUNT",(function(){return Lt})),e.d(a,"FORGOT_PASSWORD",(function(){return ft})),e.d(a,"VALIDATE_TOKEN",(function(){return Gt})),e.d(a,"RESET_PASSWORD",(function(){return Mt})),e.d(a,"GET_ME",(function(){return yt})),e.d(a,"BAN_ACCOUNT",(function(){return mt})),e.d(a,"UPDATE_USER",(function(){return gt})),e.d(a,"VERIFY_ACCOUNT",(function(){return bt})),e.d(a,"ADD_TO_CART",(function(){return vt})),e.d(a,"GET_CART_ITEMS",(function(){return ht})),e.d(a,"REMOVE_ITEM",(function(){return Yt})),e.d(a,"QUANTITY_ACTION",(function(){return Bt})),e.d(a,"GET_ADDRESSES",(function(){return jt})),e.d(a,"UPDATE_ADDRESS",(function(){return Vt})),e.d(a,"SAVE_ADDRESS",(function(){return xt})),e.d(a,"GET_PAYMENT_METHODS",(function(){return Ft})),e.d(a,"GET_PAYMENT_METHOD",(function(){return Ht})),e.d(a,"GET_INVENTORIES",(function(){return wt})),e.d(a,"GET_INVENTORY",(function(){return Wt})),e.d(a,"CREATE_SUPPLIER",(function(){return zt})),e.d(a,"UPDATE_SUPPLIER",(function(){return kt})),e.d(a,"DELETE_SUPPLIER",(function(){return Kt})),e.d(a,"GET_SUPPLIERS",(function(){return Jt})),e.d(a,"GET_SUPPLIER",(function(){return Qt})),e.d(a,"SAVE_INCOMING_SUPPLY",(function(){return Xt})),e.d(a,"GET_INCOMING_SUPPLIES",(function(){return $t})),e.d(a,"GET_INCOMING_SUPPLIES_BY_PENDING_STATUS",(function(){return qt})),e.d(a,"GET_INCOMING_SUPPLIES_BY_DELIVERED_STATUS",(function(){return Zt})),e.d(a,"GET_INCOMING_SUPPLY",(function(){return ta})),e.d(a,"DELETE_INCOMING_SUPPLY",(function(){return aa})),e.d(a,"UPDATE_INCOMING_SUPPLY",(function(){return ea})),e.d(a,"DELIVERED_INCOMING_SUPPLY",(function(){return na})),e.d(a,"SHIP_INCOMING_SUPPLY",(function(){return ra})),e.d(a,"MARK_INCOMING_SUPPLY_AS_DELIVERED",(function(){return sa})),e.d(a,"NO_IMAGE_BASE64",(function(){return oa})),e.d(a,"SAVE_CATEGORY",(function(){return Ea})),e.d(a,"UPDATE_CATEGORY",(function(){return ca})),e.d(a,"DELETE_CATEGORY",(function(){return ua})),e.d(a,"GET_CATEGORIES",(function(){return ia})),e.d(a,"GET_CATEGORY",(function(){return _a})),e.d(a,"GET_CATEGORIES_LIST",(function(){return da})),e.d(a,"GET_PROMOS",(function(){return Ta})),e.d(a,"GET_PROMO",(function(){return Sa})),e.d(a,"SAVE_PROMO",(function(){return Oa})),e.d(a,"UPDATE_PROMO",(function(){return Aa})),e.d(a,"DELETE_PROMO",(function(){return Ra})),e.d(a,"GET_DECODED_BARCODE",(function(){return Da})),e.d(a,"SEARCH_PRODUCT_TEXT",(function(){return pa})),e.d(a,"GET_WISHLIST",(function(){return Ia})),e.d(a,"DELETE_WISHLIST",(function(){return la})),e.d(a,"ADD_WISHLIST",(function(){return Pa})),e.d(a,"GET_COMMENTS",(function(){return Na})),e.d(a,"DELETE_COMMENT",(function(){return Ca})),e.d(a,"ADD_COMMENT",(function(){return Ua})),e.d(a,"GET_TOTALS",(function(){return La})),e.d(a,"GET_PRODUCTS_COUNT_TOTAL_SOLD",(function(){return fa})),e.d(a,"GET_TOTAL_REVENUES",(function(){return Ga})),e.d(a,"GET_STORE_INFORMATION",(function(){return Ma})),e.d(a,"SAVE_STORE_INFORMATION",(function(){return ya})),e.d(a,"UDPATE_STORE_INFORMATION",(function(){return ma})),e.d(a,"SAVE_TERMS_AND_CONDITION",(function(){return ga})),e.d(a,"UPDATE_TERMS_AND_CONDITION",(function(){return ba})),e.d(a,"GET_TERMS_AND_CONDITION",(function(){return va}));var n=e(25);const r="GET_POPULAR_PRODUCT",s="GET_PRODUCTS",o="GET_PRODUCT",E="DELETE_PRODUCT",c="UPDATE_PRODUCT",u="SAVE_PRODUCT",i="SAVE_PRODUCT_FAIL",_="UPDATE_PRODUCT_FAIL",d="GET_IMAGE",T="FAIL_GET_IMAGE",S="GET_PRODUCT_DETAILS",O="GET_PRODUCT_BY_CATEGORY_NAME",A="SET_IMAGE_MESSAGE",R="SET_PRODUCT_MESSAGE",D="GET_CAROUSEL_IMAGES",p="/carousel/",I="SET_SIDEBAR",l="SET_SIDEBAR_UNFOLD",P="PRODUCT_EDITOR_MODAL",N="EDIT_PRODUCT_MODEL",C="ALERT_MODAL",U="ALERT_BAN_MODAL",L=" ADD_BRANCH_MODAL",f="ADD_BRAND_MODAL",G="ADD_CATEGORY_MODAL",M="ADD_EMPLOYEE_MODAL",y="SET_PRODUCT_DETAILS_MODAL",m="LOGIN_MODAL",g="SET_ADDRESS_MODAL",b="SET_SUPPLIER_MODAL",v="SET_SUPPLY_MODAL",h="SET_SCAN_MODAL",Y="SET_PROMO_MODAL",B="CHANGE_PASSWORD_MODAL",j="SET_TERMS_AND_CONDITION_MODAL",V="SET_CAROUSEL_MODAL",x=n.a.api.private.baseUrl,F=n.a.api.private.baseFrontendUrl,H=F+"/oauth2/redirect",w="accessToken",W="refreshToken",z="username",k=x+"/oauth2/authorize/google?redirect_uri="+H,K="GET_BRANCH",J="GET_BRANCH_TOTAL_PRODUCT",Q="SAVE_BRANCH",X="UPDATE_BRANCH",$="DELETE_BRANCH",q="GET_DISCOVER_PRODUCT",Z="GET_PUBLIC_PRODUCT",tt="SEARCH_PRODUCT",at="GET_PRODUCTS_BY_STATUS",et="GET_PRODUCTS_WITH_PROMO",nt="GET_BRANDS",rt="GET_BRAND",st="SAVE_BRAND",ot="UPDATE_BRAND",Et="DELETE_BRAND",ct="FAIL_BRAND",ut="CLEAR_BRAND",it="GET_ORDERS",_t="CONFIRM_ORDER",dt="PLACE_ORDER",Tt="ORDER_ITEMS",St="GET_ORDER_BY_ID",Ot="UPDATE_ORDER_STATUS",At="UPDATE_PAYMENT_STATUS",Rt="GET_PAYMENT_TRANSACTIONS",Dt="SAVE_CUSTOMER_ADDRESS",pt="UPDATE_CUSTOMER_ADDRESS",It="GET_CUSTOMER_ADDRESSES",lt="GET_CUSTOMER_ADDRESS",Pt="DELETE_CUSTOMER_ADDRESS",Nt="GET_USERS_ACCOUNT",Ct="SAVE_EMPLOYEE",Ut="CHANGE_PASSWORD",Lt="DELETE_ACCOUNT",ft="FORGOT_PASSWORD",Gt="VALIDATE_TOKEN",Mt="RESET_PASSWORD",yt="GET_ME",mt="BAN_ACCOUNT",gt="UPDATE_USER",bt="VERIFY_ACCOUNT",vt="ADD_TO_CART",ht="GET_CART_ITEMS",Yt="REMOVE_ITEM",Bt="QUANTITY_ACTION",jt="GET_ADDRESSES",Vt="UPDATE_ADDRESS",xt="SAVE_ADDRESS",Ft="GET_PAYMENT_METHODS",Ht="GET_PAYMENT_METHOD",wt="GET_INVENTORIES",Wt="GET_INVENTORY",zt="CREATE_SUPPLIER",kt="UPDATE_SUPPLIER",Kt="DELETE_SUPPLIER",Jt="GET_SUPPLIERS",Qt="GET_SUPPLIER",Xt="SAVE_INCOMING_SUPPLY",$t="GET_INCOMING_SUPPLIES",qt="GET_INCOMING_SUPPLIES_BY_PENDING_STATUS",Zt="GET_INCOMING_SUPPLIES_BY_DELIVERED_STATUS",ta="GET_INCOMING_SUPPLY",aa="DELETE_INCOMING_SUPPLY",ea="UPDATE_INCOMING_SUPPLY",na="DELIVERED_INCOMING_SUPPLY",ra="SHIP_INCOMING_SUPPLY",sa="MARK_INCOMING_SUPPLY_AS_DELIVERED",oa="/default/no-image.jpg",Ea="SAVE_CATEGORY",ca="UPDATE_CATEGORY",ua="DELETE_CATEGORY",ia="GET_CATEGORIES",_a="GET_CATEGORY",da="GET_CATEGORIES_LIST",Ta="GET_PROMOS",Sa="GET_PROMO",Oa="SAVE_PROMO",Aa="UPDATE_PROMO",Ra="DELETE_PROMO",Da="GET_DECODED_BARCODE",pa="SEARCH_PRODUCT_TEXT",Ia="GET_WISHLIST",la="DELETE_WISHLIST",Pa="ADD_WISHLIST",Na="GET_COMMENTS",Ca="DELETE_COMMENT",Ua="ADD_COMMENT",La="GET_TOTALS",fa="GET_PRODUCTS_COUNT_TOTAL_SOLD",Ga="GET_TOTAL_REVENUES",Ma="GET_STORE_INFORMATION",ya="SAVE_STORE_INFORMATION",ma="UDPATE_STORE_INFORMATION",ga="SAVE_TERMS_AND_CONDITION",ba="UPDATE_TERMS_AND_CONDITION",va="GET_TERMS_AND_CONDITION"},25:function(t,a,e){"use strict";const n={api:{private:{baseUrl:"http://localhost:4480",baseFrontendUrl:"http://localhost:4000",prefixFrontendUrl:""}}},r={api:{private:{baseUrl:"https://api.inventory-mng-system.com",baseFrontendUrl:"https://inventory-mng-system.com",prefixFrontendUrl:""}}},s=function(){let t="test";return"undefined"===typeof t?n:(t=t.trim(),"dev"===t?n:"test"===t?r:void 0)}();a.a={...s}},394:function(t,a,e){},427:function(t,a,e){"use strict";e.r(a);e(138),e(146),e(147),e(149),e(86),e(154),e(156),e(157),e(158),e(162),e(163),e(164),e(168),e(169),e(170),e(171),e(174),e(175),e(176),e(182),e(117),e(186),e(187),e(191),e(192),e(193),e(194),e(197),e(198),e(199),e(200),e(201),e(202),e(203),e(204),e(205),e(206),e(207),e(251),e(254),e(255),e(256),e(260),e(261),e(263),e(264),e(265),e(266),e(267),e(268),e(269),e(270),e(272),e(273),e(274),e(275),e(276),e(277),e(278),e(279),e(280),e(281),e(282),e(283),e(284),e(287),e(288),e(289),e(290),e(291),e(292),e(293),e(295),e(296),e(297),e(299),e(300),e(302),e(304),e(305),e(306),e(307),e(308),e(310),e(311),e(312),e(313),e(314),e(315),e(316),e(317),e(318),e(319),e(320),e(321),e(322),e(323),e(324),e(325),e(326),e(327),e(328),e(329),e(330),e(331),e(332),e(333),e(334),e(335),e(337),e(339),e(340),e(341),e(342),e(343),e(344),e(345),e(346),e(347),e(348),e(214),e(215),e(216),e(217),e(219),e(125),e(356);var n=e(0),r=e.n(n),s=e(57),o=e.n(s),E=e(129),c=e(13),u=(e(362),e(363),e(55)),i=e(25),_=e(8);var d=({component:t,roles:a,name:e,...n})=>{const r=Object(u.c)((t=>t.userResponse.isLoggedIn));return Object(_.jsx)(c.b,{...n,render:a=>r?Object(_.jsx)(t,{...a}):Object(_.jsx)(c.a,{to:i.a.api.private.prefixFrontendUrl+"/login"})})},T=e(133),S=e(132),O=e(96),A=(e(393),e(394),e(134));const R=Object(_.jsx)("div",{className:"d-flex justify-content-center align-items-center position-fixed spinner",children:Object(_.jsx)(T.DotLoader,{color:"#36D7B7",size:100})}),D=r.a.lazy((()=>Promise.all([e.e(6),e.e(7),e.e(8),e.e(17),e.e(32)]).then(e.bind(null,1170)))),p=r.a.lazy((()=>Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(20)]).then(e.bind(null,1163)))),I=r.a.lazy((()=>Promise.all([e.e(1),e.e(6),e.e(7),e.e(44)]).then(e.bind(null,1164)))),l=r.a.lazy((()=>Promise.all([e.e(6),e.e(7),e.e(8),e.e(39)]).then(e.bind(null,1165)))),P=r.a.lazy((()=>Promise.all([e.e(6),e.e(73)]).then(e.bind(null,612)))),N=r.a.lazy((()=>Promise.all([e.e(6),e.e(79),e.e(75)]).then(e.bind(null,1166)))),C=Object(n.lazy)((()=>e.e(38).then(e.bind(null,1167)))),U=r.a.lazy((()=>Promise.all([e.e(1),e.e(6),e.e(7),e.e(8),e.e(55)]).then(e.bind(null,1168)))),L=r.a.lazy((()=>Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(19)]).then(e.bind(null,1169))));class f extends n.Component{componentDidUpdate(t,a){this.manageResponse(t,a),this.props.getStoreInformation()}manageResponse(t,a){if(this.props.messageResponse!=t.messageResponse){let t=this.props.messageResponse;t.status>400&&t.status<=403&&this.props.isLoggedIn?setTimeout((()=>{Object(O.b)("Session Expired"+t.data.message),this.props.logout(),window.location.reload()}),1e3):t.data&&t.data.message&&Object(O.b)(t.data.message)}}render(){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(E.a,{children:Object(_.jsx)(r.a.Suspense,{fallback:R,children:Object(_.jsxs)(c.d,{children:[Object(_.jsx)(c.b,{exact:!0,path:i.a.api.private.prefixFrontendUrl+"/oauth2/redirect",name:"success handler",render:t=>Object(_.jsx)(C,{...t})}),Object(_.jsx)(c.b,{exact:!0,path:i.a.api.private.prefixFrontendUrl+"/login",name:"Login Page",render:t=>Object(_.jsx)(I,{...t})}),Object(_.jsx)(c.b,{exact:!0,path:i.a.api.private.prefixFrontendUrl+"/password/forgot",name:"Forgot password",render:t=>Object(_.jsx)(U,{...t})}),Object(_.jsx)(c.b,{exact:!0,path:i.a.api.private.prefixFrontendUrl+"/register",name:"Register Page",render:t=>Object(_.jsx)(l,{...t})}),Object(_.jsx)(c.b,{exact:!0,path:i.a.api.private.prefixFrontendUrl+"/500",name:"Page 500",render:t=>Object(_.jsx)(N,{...t})}),Object(_.jsx)(c.b,{exact:!0,path:i.a.api.private.prefixFrontendUrl+"/400",name:"Page 400",render:t=>Object(_.jsx)(P,{...t})}),Object(_.jsx)(d,{path:i.a.api.private.prefixFrontendUrl+"/app",component:D}),Object(_.jsx)(d,{path:i.a.api.private.prefixFrontendUrl+"/user",component:L}),Object(_.jsx)(c.b,{path:"/",name:i.a.api.private.prefixFrontendUrl+"public",render:t=>Object(_.jsx)(p,{...t})})]})})}),Object(_.jsx)(O.a,{})]})}}var G=Object(u.b)((t=>({isLoggedIn:t.userResponse.isLoggedIn,credentials:t.userResponse.credentials,messageResponse:t.messageResponse})),{logout:S.c,getStoreInformation:A.a})(f);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=e(65),y=e(95),m=e(2);var g=(t={},a)=>{let e=200,n="info",r={};void 0!==a.payload&&void 0!==a.payload.status&&(e=a.payload.status,n="success",e>=400&&(n="error"),r=a.payload.data);let s={notificationType:n,type:a.type,status:e,action:"LIST"};switch(a.type){case m.GET_PRODUCTS:s.data=r.products;break;case m.GET_PRODUCT:return{type:a.type,status:a.payload.status,action:"GETBYID",data:{product:a.payload.data.product}};case m.GET_DISCOVER_PRODUCT:return{status:a.payload.status,action:"DISCOVER",data:{products:a.payload.data.products}};case m.GET_POPULAR_PRODUCT:return{status:a.payload.status,action:"GET_POPULAR_PRODUCT",data:{products:a.payload.data.products}};case m.GET_PRODUCT_DETAILS:return{status:a.payload.status,action:"DETAILS",data:{product:a.payload.data.product}};case m.UPDATE_PRODUCT:return{status:a.payload.status,action:a.payload.action,data:{updatedProduct:a.payload.updatedProduct}};case m.DELETE_PRODUCT:return{status:a.payload.status,action:a.payload.actin,data:{}};case m.SEARCH_PRODUCT:case m.GET_PRODUCT_BY_CATEGORY_NAME:case m.GET_PRODUCTS_BY_STATUS:case m.GET_PRODUCTS_WITH_PROMO:return{status:a.payload.status,action:a.payload.action,data:{products:a.payload.data.products}};default:return t}return s};var b=(t={},a)=>{let e=200,n="info",r={};void 0!==a.payload&&void 0!==a.payload.status&&(e=a.payload.status,n="success",e>=400&&(n="error"),r=a.payload.data);let s={statusType:n,type:a.type,status:e,action:"RETRIEVE"};return a.type!==m.GET_CAROUSEL_IMAGES?t:(s.carouselData=r.carouselImages,s)};var v=(t={},a)=>{let e={type:a.type,action:a.type,state:{}};return a.type!==m.SET_SIDEBAR?t:(e.state.sidebarState=a.payload.data.sidebarState,e)};var h=(t={},a)=>{const{type:e,payload:n}=a;switch(e){case m.SET_PRODUCTEDITMODAL_VISIBILIT:return{visible:n.data.visible,action:n.data.action,icon:n.data.icon};case m.EDIT_PRODUCT_MODAL:return{visible:n.data.visible,action:n.data.action,product:n.data.product,icon:n.data.icon};case m.ALERT_MODAL:case m.ALERT_BAN_MODAL:return{alert:n.alert,action:n.action,module:n.module,id:n.data.id};case m.ADD_BRANCH_MODAL:return{visible:n.data.visible,action:n.data.action,branch:n.data.branch,icon:n.data.icon};case m.ADD_BRAND_MODAL:return{visible:n.data.visible,action:n.data.action,brand:n.data.brand,icon:n.data.icon};case m.ADD_CATEGORY_MODAL:return{visible:n.data.visible,action:n.data.action,category:n.data.category,icon:n.data.icon};case m.ADD_EMPLOYEE_MODAL:case m.CHANGE_PASSWORD_MODAL:return{visible:n.data.visible,action:n.data.action,employee:n.data.employee,icon:n.data.icon};case m.SET_PRODUCT_DETAILS_MODAL:return{visible:n.data.visible,action:n.data.action,product:n.data.product};case m.LOGIN_MODAL:return{visible:n.data.visible,action:n.data.action};case m.SET_ADDRESS_MODAL:return{visible:n.data.visible,action:n.data.action,address:n.data.address,icon:n.data.icon};case m.SET_SUPPLIER_MODAL:return{visible:n.data.visible,action:n.action,supplier:n.data.supplier,icon:n.data.icon};case m.SET_SUPPLY_MODAL:return{visible:n.data.visible,action:n.action,supply:n.data.supply,icon:n.data.icon};case m.SET_SCAN_MODAL:return{visible:n.data.visible,action:n.action};case m.SET_PROMO_MODAL:return{visible:n.data.visible,action:n.action,promo:n.data.promo,icon:n.data.icon};case m.UDPATE_STORE_INFORMATION:return{visible:n.data.visible,action:n.data.action,storeInfo:n.data.storeInfo,icon:n.data.icon};case m.SET_TERMS_AND_CONDITION_MODAL:return{visible:n.data.visible,action:n.data.action,termsAndCondition:n.data.termsAndCondition,icon:n.data.icon};case m.SET_CAROULSE_MDOAL:return{visible:n.data.visible,action:n.data.action,carousel:n.data.carousel,icon:n.data.icon};default:return t}},Y=e(14);const B=JSON.parse(localStorage.getItem("credentials")),j=B?{isLoggedIn:!0,credentials:B}:{isLoggedIn:!1,credentials:null};var V=(t=j,a)=>{const{type:e,payload:n}=a;switch(e){case Y.f:case Y.e:return{...t,isLoggedIn:!1};case Y.c:return{...t,isLoggedIn:!0,credentials:n.credentials};case Y.b:case Y.d:return{...t,isLoggedIn:!1,credentials:null};default:return t}};const x={};var F=(t=x,a)=>{const{type:e,payload:n}=a;switch(e){case Y.g:return{action:e,status:n.status,data:{message:n.data.message,order:n.data.order}};case Y.a:return{action:e,status:"",data:{message:""}};case m.SET_PRODUCT_MESSAGE:return{action:e,status:n.status,data:{message:n.data.message}};default:return t}},H=e(130);var w=(t={},a)=>{const{type:e,payload:n}=a;return e===H.a?{routes:n}:t};const{GET_BRANCH:W,GET_BRANCH_TOTAL_PRODUCT:z,SAVE_BRANCH:k,UPDATE_BRANCH:K}=e(2);var J=(t={},a)=>{const{type:e,payload:n}=a;switch(e){case W:return{status:n.status,action:n.action,data:{branch:n.data.branches}};case z:return{status:n.status,action:n.action,data:{branches:n.data.branches}};case k:return{status:n.status,action:n.action};case K:return{status:n.status,action:n.action,data:{}};default:return t}};var Q=(t={},a)=>{const{type:e,payload:n}=a;switch(e){case m.GET_BRANDS:return{status:n.status,action:n.action,data:{brands:n.data.brands}};case m.SAVE_BRAND:case m.UPDATE_BRAND:return{status:n.status,action:n.action,data:{}};default:return t}};var X=(t={},a)=>{const{type:e,payload:n}=a;switch(e){case m.GET_ORDERS:return{status:n.status,action:n.action,data:{orders:n.data.orders,orderStatusCount:n.data.orderStatusCount}};case m.GET_PAYMENT_TRANSACTIONS:return{status:n.status,action:n.action,data:{payments:n.data.payments}};case m.UPDATE_PAYMENT_STATUS:return{status:n.status,action:n.action,data:n.data};case m.ORDER_ITEMS:return{status:n.status,action:n.action,data:{items:n.data.items}};case m.PLACE_ORDER:return{status:n.status,action:n.action,data:{}};case m.GET_ORDER_BY_ID:return{status:n.status,action:n.action,data:{order:n.data.order}};default:return t}};var $=(t={},a)=>{const{type:e,payload:n}=a;switch(e){case m.GET_USERS_ACCOUNT:return{status:n.status,action:n.action,data:{accounts:n.data.accounts}};case m.SAVE_EMPLOYEE:case m.DELETE_ACCOUNT:case m.BAN_ACCOUNT:case m.CHANGE_PASSWORD:case m.FORGOT_PASSWORD:case m.VALIDATE_TOKEN:case m.RESET_PASSWORD:case m.GET_ME:case m.UPDATE_USER:return{status:n.status,action:n.action,data:n.data};default:return t}};const{ADD_TO_CART:q,GET_CART_ITEMS:Z,REMOVE_ITEM:tt,QUANTITY_ACTION:at}=e(2);var et=(t={},a)=>{const{type:e,payload:n}=a;switch(e){case q:return{status:n.status,action:n.action};case Z:return{status:n.status,action:n.action,data:{cart:n.data.cart}};case tt:case at:return{status:n.status,action:n.action,data:{}};default:return t}};var nt=(t={},a)=>{const{type:e,payload:n}=a;switch(e){case m.GET_ADDRESSES:return{status:n.status,action:n.action,data:{addresses:n.data.addresses}};case m.SAVE_ADDRESS:return{status:n.status,action:n.action,data:{}};default:return t}};var rt=(t={},a)=>{const{type:e,payload:n}=a;return e===m.GET_PAYMENT_METHODS?{status:n.status,action:n.action,data:{paymentMethods:n.data.paymentMethods}}:t};var st=(t={},a)=>{const{type:e,payload:n}=a;return e===m.GET_INVENTORIES?{status:n.status,action:n.action,data:{inventories:n.data.inventories}}:t};var ot=(t={},a)=>{const{type:e,payload:n}=a;switch(e){case m.CREATE_SUPPLIER:return{status:n.status,action:n.action,data:{}};case m.UPDATE_SUPPLIER:return{status:n.status,action:n.action,data:{supplier:n.data.supplier}};case m.DELETE_SUPPLIER:return{status:n.status,action:n.action,data:{}};case m.GET_SUPPLIERS:return{status:n.status,action:n.action,data:{suppliers:n.data.suppliers}};case m.GET_SUPPLIER:return{status:n.status,action:n.action,data:{supplier:n.data.supplier}};default:return t}};const{GET_INCOMING_SUPPLIES:Et,GET_INCOMING_SUPPLY:ct,GET_INCOMING_SUPPLIES_BY_DELIVERED_STATUS:ut,GET_INCOMING_SUPPLIES_BY_PENDING_STATUS:it,SAVE_INCOMING_SUPPLY:_t,MARK_INCOMING_SUPPLY_AS_DELIVERED:dt}=e(2);var Tt=(t={},a)=>{let{type:e,payload:n}=a;switch(e){case Et:return{action:n.action,status:n.status,data:{incomingSupplies:n.data.incomingSupplies}};case ct:return{action:n.action,status:n.status,data:{incomingSupply:n.data.incomingSupply}};case _t:case dt:return{action:n.action,status:n.status,data:{}};default:return t}};const{SAVE_CATEGORY:St,GET_CATEGORIES:Ot,GET_CATEGORY:At,UPDATE_CATEGORY:Rt,DELETE_CATEGORY:Dt,GET_CATEGORIES_LIST:pt}=e(2);var It=(t={},a)=>{const{type:e,payload:n}=a;switch(e){case St:case Dt:return{action:n.action,status:n.status,data:{}};case Ot:return{action:n.action,status:n.status,data:{categories:n.data.categories}};case At:return{action:n.action,status:n.status,data:{category:n.data.category}};case Rt:return{action:n.action,status:n.status,data:{updatedCategory:n.data.updatedCategory}};case pt:return{action:n.action,status:n.status,data:{categoriesList:n.data.categoriesList}};default:return t}};var lt=(t={},a)=>{let{type:e,payload:n}=a;switch(e){case m.GET_PROMOS:return{status:n.status,action:n.action,data:{productsWithPromo:n.data.productsWithPromo}};case m.SAVE_PROMO:case m.DELETE_PROMO:return{status:n.status,action:n.action,data:{}};case m.UPDATE_PROMO:return{status:n.status,action:n.action,data:{updatedPromo:n.data.updatedPromo}};default:return t}};const{GET_DECODED_BARCODE:Pt}=e(2);var Nt=(t={},a)=>a.type===Pt?{decoded:a.payload.decoded,action:a.payload.action}:t;var Ct=(t={},a)=>{const{type:e,payload:n}=a;switch(e){case m.GET_WISHLIST:case m.ADD_WISHLIST:case m.DELETE_WISHLIST:return{status:n.status,action:n.action,data:n.data};default:return t}};var Ut=(t={},a)=>{const{type:e,payload:n}=a;switch(e){case m.GET_COMMENTS:case m.ADD_COMMENT:case m.DELETE_COMMENT:return{status:n.status,action:n.action,data:n.data};default:return t}};const{GET_TOTALS:Lt,GET_PRODUCTS_COUNT_TOTAL_SOLD:ft,GET_TOTAL_REVENUES:Gt}=e(2);var Mt=(t={},a)=>{const{type:e,payload:n}=a;switch(e){case Lt:return{status:n.status,action:n.action,data:{summaries:n.data.summaries}};case Gt:return{status:n.status,action:n.action,data:{revenue:n.data.revenue}};case ft:return{status:n.status,action:n.action,data:{products:n.data.products}};default:return t}};var yt=(t={},a)=>{const{type:e,payload:n}=a;switch(e){case m.GET_STORE_INFORMATION:return{status:n.status,action:n.action,data:{storeInfo:n.data.storeInfo}};case m.UDPATE_STORE_INFORMATION:return{status:n.status,action:n.action,data:{}};default:return t}};var mt=Object(M.b)({modalVisibleResponse:h,productResponser:g,changeStateResponse:v,carouselResponser:b,userResponse:V,branchResponse:J,brandResponse:Q,orderResponse:X,accountResponse:$,routesResponse:w,messageResponse:F,browserSize:y.a,cartResponse:et,addressResponse:nt,paymentMethodResponse:rt,inventoryResponse:st,supplierResponse:ot,incomingSupplyResponse:Tt,categoryResponse:It,promoResponse:lt,scannerResponse:Nt,wishlistResponse:Ct,commentResponse:Ut,dashboardResponse:Mt,storeInformationResponse:yt,termsAndConditionResponse:(t={},a)=>{const{type:e,payload:n}=a;switch(e){case m.SAVE_TERMS_AND_CONDITION:return{status:n.status,action:n.action,data:n.data};case m.UPDATE_TERMS_AND_CONDITION:case m.GET_TERMS_AND_CONDITION:return{status:n.status,action:n.action,data:n.data.termsAndCondition};default:return t}}}),gt=e(230),bt=Object(M.d)(mt,Object(M.c)(y.b,Object(M.a)(gt.a)));e(425),e(426);o.a.render(Object(_.jsx)(u.a,{store:bt,children:Object(_.jsx)(G,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((t=>{t.unregister()}))},56:function(t,a,e){"use strict";var n=e(137),r=e.n(n),s=e(2);a.a=r.a.create({baseURL:s.API_BASE_URL+"/api/v1",headers:{"content-type":"application/json"}})}},[[427,15,16]]]);
//# sourceMappingURL=main.5bd368ca.chunk.js.map