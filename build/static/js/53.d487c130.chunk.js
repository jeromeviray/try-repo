(this["webpackJsonp@project/inventory-management-system"]=this["webpackJsonp@project/inventory-management-system"]||[]).push([[53],{571:function(e,t,s){"use strict";s.d(t,"a",(function(){return c})),s.d(t,"b",(function(){return d})),s.d(t,"d",(function(){return p})),s.d(t,"c",(function(){return l})),s.d(t,"e",(function(){return h}));var a=s(16),n=s(1),r=s(152),i=s(62);var o=new class{addToCart(e){return i.a.post("/cart/item/add/"+e,{},{headers:Object(r.a)()})}getCart(){return i.a.get("/cart",{headers:Object(r.a)()})}removeItem(e){return i.a.delete("/cart/item/remove/"+e,{headers:Object(r.a)()})}quantityAction(e,t){return i.a.put("/cart/item/"+e+"/quantity/"+t,{},{headers:Object(r.a)()})}};const c=e=>async t=>o.addToCart(e).then((e=>(t({type:n.ADD_TO_CART,payload:{status:200,action:"ADDTOCART",data:{}}}),t({type:a.g,payload:{status:200,data:{message:"Added Successfully"}}}),Promise.resolve())),(e=>{const s=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),n=e.response&&e.response.data&&e.response.data.code||e.toString();return t({type:a.g,payload:{status:n,data:{message:s}}}),Promise.reject()})),d=()=>async e=>o.getCart().then((t=>(e({type:n.GET_CART_ITEMS,payload:{status:200,action:"CARTITEMS",data:{cart:t.data}}}),Promise.resolve())),(t=>{const s=t.response&&t.response.data&&t.response.data.message||t.message||t.toString(),n=t.response&&t.response.data&&t.response.data.code||t.toString();return e({type:a.g,payload:{status:n,data:{message:s}}}),Promise.reject()})),p=e=>async t=>o.removeItem(e).then((e=>(t({type:n.REMOVE_ITEM,payload:{status:200,action:"REMOVE",data:{}}}),t({type:a.g,payload:{status:200,data:{message:"Remove Item Successfully"}}}),Promise.resolve())),(e=>{console.log(e);const s=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),n=e.response&&e.response.data&&e.response.data.code||e.toString();return t({type:a.g,payload:{status:n,data:{message:s}}}),Promise.reject()})),l=(e,t)=>async s=>o.quantityAction(e,t).then((e=>{s({type:n.QUANTITY_ACTION,payload:{status:200,action:n.QUANTITY_ACTION,data:{}}})}),(e=>{const t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),n=e.response&&e.response.data&&e.response.data.code||e.toString();return s({type:a.g,payload:{status:n,data:{message:t}}}),Promise.reject()})),h=e=>async t=>{t({type:n.GET_CART_ITEMS,payload:{status:200,action:"CARTITEMS",data:{cart:e}}})}},638:function(e,t,s){"use strict";s.d(t,"c",(function(){return d})),s.d(t,"b",(function(){return p})),s.d(t,"e",(function(){return l})),s.d(t,"a",(function(){return h})),s.d(t,"g",(function(){return u})),s.d(t,"f",(function(){return m})),s.d(t,"d",(function(){return g})),s.d(t,"h",(function(){return j}));var a=s(1),n=s(16),r=s(152),i=s(62);var o=new class{getOrders(e,t,s,a){return i.a.get("/orders/status/"+e,{headers:Object(r.a)(),params:{query:t,page:s,limit:a}})}getPaymentTransactions(e,t,s){return i.a.get("/orders/payments",{headers:Object(r.a)(),params:{query:e,page:t,limit:s}})}updateOrderPaymentStatus(e,t){return i.a.put("/orders/"+e+"/paid/"+t,{},{headers:Object(r.a)()})}placeOrderDetails(e){return i.a.post("/orders/checkout",{customerAddressId:e.addressId,paymentId:e.paymentMethodId,cartItems:e.items,shippingFeeId:e.shippingFee},{headers:Object(r.a)()})}getOrderByOrderId(e){return i.a.get("/orders/"+e,{headers:Object(r.a)()})}updateOrderStatus(e,t,s,a){return i.a.put("/orders/"+e+"/status/"+t,{},{headers:Object(r.a)(),params:{trackingNumber:s,trackingUrl:a}})}validateCart(e){return i.a.post("/orders/validate",e,{headers:Object(r.a)()})}};const c=(e,t)=>{const s=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),a=e.response&&e.response.data&&e.response.data.code||e.toString();t({type:n.g,payload:{status:a,data:{message:s}}})},d=(e,t,s,n)=>async r=>o.getOrders(e,t,s,n).then((e=>(r({type:a.GET_ORDERS,payload:{status:200,action:"GET_ORDERS",data:{orders:e.data,orderStatusCount:e.data.orderCounts}}}),Promise.resolve())),(e=>(c(e,r),Promise.reject()))),p=e=>async t=>{t({type:a.ORDER_ITEMS,payload:{status:200,action:"ORDERITEMS",data:{items:e}}})},l=e=>async t=>o.placeOrderDetails(e).then((e=>(t({type:a.PLACE_ORDER,payload:{status:200,action:"PLACE_ORDER",data:{}}}),t({type:n.g,payload:{status:200,data:{message:"Successfully Place your Order",order:e.data}}}),Promise.resolve())),(e=>(c(e,t),Promise.reject()))),h=e=>async t=>o.getOrderByOrderId(e).then((e=>(t({type:a.GET_ORDER_BY_ID,payload:{status:200,action:"GETORDERBYID",data:{order:e.data}}}),Promise.resolve())),(e=>(c(e,t),Promise.reject()))),u=(e,t,s,r)=>async i=>o.updateOrderStatus(e,t,s,r).then((s=>(i({type:a.UPDATE_ORDER_STATUS,payload:{status:200,action:a.UPDATE_ORDER_STATUS,data:{order:s.data}}}),i({type:n.g,payload:{status:200,data:{message:"Successfully updated order "+e+" status to "+t.toUpperCase(),order:s.data}}}),Promise.resolve())),(e=>(c(e,i),Promise.reject()))),m=(e,t)=>async s=>o.updateOrderPaymentStatus(e,t).then((e=>(s({type:a.UPDATE_PAYMENT_STATUS,payload:{status:200,action:a.UPDATE_PAYMENT_STATUS,data:{order:e.data}}}),s({type:n.g,payload:{status:200,data:{}}}),Promise.resolve())),(e=>(c(e,s),Promise.reject()))),g=(e,t,s)=>async n=>o.getPaymentTransactions(e,t,s).then((e=>(n({type:a.GET_PAYMENT_TRANSACTIONS,payload:{status:200,action:"GET_PAYMENT_TRANSACTIONS",data:{payments:e.data}}}),Promise.resolve())),(e=>(c(e,n),Promise.reject()))),j=e=>async t=>o.validateCart(e).then((e=>(t({type:a.VALIDATE_CART,payload:{status:200,action:a.VALIDATE_CART,data:e.data}}),e.data.error_messages.length>0&&t({type:n.g,payload:{status:400,data:{message:e.data.error_messages.join("\n")}}}),Promise.resolve())),(e=>(c(e,t),Promise.reject())))},834:function(e,t,s){"use strict";s.r(t),s.d(t,"Cart",(function(){return T}));var a=s(0),n=s.n(a),r=s(568),i=s(156),o=s(48),c=s(573),d=s(638),p=s(571),l=s(26),h=s(580),u=s(15),m=s(154),g=s(16),j=s(1),y=s(152),O=s(62);var b=new class{getShippingFees(){return O.a.get("/shipping/fees",{headers:Object(y.a)()})}};var x=s(7);const f=n.a.lazy((()=>s.e(72).then(s.bind(null,1310)))),S=n.a.lazy((()=>Promise.all([s.e(4),s.e(50)]).then(s.bind(null,1311)))),I=n.a.lazy((()=>s.e(73).then(s.bind(null,1314)))),R=n.a.lazy((()=>s.e(71).then(s.bind(null,1312))));class T extends a.Component{constructor(...e){super(...e),this.state={step:1,items:[],Tquantity:0,Tamount:0,isLoggedIn:!1,permission:"",addressId:void 0,paymentMethodId:void 0,successfull:!1,loading:!1,redirectUrl:"",clientRef:null,checkout:!1,shippingFee:[]},this.manageCartItemsResponse=(e,t)=>{if(e.cartResponse!==this.props.cartResponse){let{action:e,status:t,data:s}=this.props.cartResponse;"CARTITEMS"===e&&200===t&&this.setState({cart:s.cart,items:[],Tamount:0,Tquantity:0})}},this.redirectUser=()=>{const e=this.props.userResponse.isLoggedIn;if(e){let t=this.props.userResponse.credentials.roles.roleName,s=t||this.props.userResponse.credentials.roles;this.setState({isLoggedIn:e,permission:s})}},this.handleCartOnChange=(e,t,s)=>{console.log(s),this.setState({items:e,Tquantity:t,Tamount:s})},this.handleAddressOnChange=e=>{this.setState({addressId:e})},this.handlePaymentMethodOnChange=e=>{this.setState({paymentMethodId:e})},this.handleOnNext=()=>{let{step:e}=this.state;if(1!==e)3!==e&&this.setState({step:++e});else{this.checkoutLock();const{cart:t,items:s}=this.state,a={cartId:t.cartId,accountId:t.accountId,items:s};this.props.validateCart(a).then((t=>{this.props.orderResponse.data.is_invalidate||this.setState({step:++e})}))}},this.sendMessage=(e="checkout",t={})=>{this.state.clientRef.sendMessage("/app/websocket/inventory",JSON.stringify({from:"test",message:t,eventType:e}))},this.checkoutLock=()=>{const{cart:e,items:t}=this.state;this.sendMessage("checkout",{cartId:e.cartId,accountId:e.accountId,items:t})},this.releaseCheckoutLock=()=>{const{cart:e}=this.state;this.sendMessage("release_checkout",{cartId:e.cartId,accountId:e.accountId,items:e.cartItems})},this.handleOnPre=()=>{let{step:e}=this.state;1!==e&&(2===e&&(this.releaseCheckoutLock(),this.setState({items:[]})),this.setState({step:--e}))},this.renderSteps=()=>{let{step:e,addressId:t,paymentMethodId:s}=this.state,a=Object(x.jsx)(f,{paymentDetailsOnChange:this.handleCartOnChange});switch(e){case 1:return a=Object(x.jsx)(f,{paymentDetailsOnChange:this.handleCartOnChange}),a;case 2:return a=Object(x.jsx)(S,{checkValueOnChange:this.handleAddressOnChange,getValue:t}),a;case 3:return a=Object(x.jsx)(I,{paymentMethodOnChange:this.handlePaymentMethodOnChange,getValue:s}),a;default:return a}},this.renderHeader=()=>{let{step:e}=this.state,t="Shopping Cart";switch(e){case 1:return"Shopping Cart";case 2:return"Customer Address";case 3:return"Payment Method";case 4:return"";default:return t}},this.handleOnPlaceOrder=e=>{let{addressId:t,paymentMethodId:s,items:a,shippingFee:n,cartId:r}=this.state,i={addressId:t,paymentMethodId:s,items:a,shippingFee:n.id,cartId:r};this.setState({loading:!0}),this.props.placeOrder(i).then((()=>{let{data:e}=this.props.messageResponse;this.setState({successfull:!0,loading:!1,step:4,redirectUrl:e.order.redirectUrl})})).catch((()=>{this.setState({successfull:!1,loading:!1})}))}}componentDidMount(){if(window.addEventListener("beforeunload",this.releaseCheckoutLock),this.props.userResponse.isLoggedIn?this.redirectUser():h.a.push(l.a.api.private.prefixFrontendUrl+"/login"),this.props.websocketResponse&&this.setState({clientRef:this.props.websocketResponse.data.clientRef}),this.props.userResponse.isLoggedIn){const{orderId:e,paymentStatus:t}=this.props.match.params;"success"!=t&&"failed"!=t||this.props.updateOrderPaymentStatus(e,t),this.setState({successfull:"success"==t})}this.props.getShippingFees()}componentWillUnmount(){this.releaseCheckoutLock()}componentDidUpdate(e,t){if(this.manageShippingFeeResponse(e,t),this.props.websocketResponse!==e.websocketResponse)if("WEBSOCKET_REF"==this.props.websocketResponse.action){let e=this.props.websocketResponse.data.clientRef;this.setState({clientRef:e})}else if("WEBSOCKET_EVENT"==this.props.websocketResponse.action){let{cart:e}=this.state;const t=this.props.websocketResponse.data.message;if(console.log(t),e.accountId!=t.accountId){let s=e.cartItems;s.forEach(((e,a)=>{let n=t.items.findIndex((t=>t.product.id==e.product.product.id));s[a].product.inventory=t.items[n].inventory})),e.cartItems=s,this.props.setCart(e)}}this.manageCartItemsResponse(e,t)}manageShippingFeeResponse(e,t){if(e.cartResponse!==this.props.cartResponse){let{action:e,status:t,data:s}=this.props.shippingFeeResponse;"GET_SHIPPING_FEES"===e&&200===t&&this.setState({shippingFee:s.shippingFees[0]})}}render(){let{step:e,items:t,Tamount:s,Tquantity:n,isLoggedIn:o,permission:c,addressId:d,paymentMethodId:p,successfull:h,loading:g,redirectUrl:j,shippingFee:y}=this.state;var O=y.shippingAmount;const b={fontWeight:"800"};if(o){if(c===m.a.SUPER_ADMIN||c===m.a.ADMIN)return Object(x.jsx)(u.a,{to:l.a.api.private.prefixFrontendUrl+"/app"})}else if(!this.props.userResponse.isLoggedIn)return Object(x.jsx)(u.a,{to:l.a.api.private.prefixFrontendUrl+"/login"});return h&&""!=j&&j?(window.location.replace(j),Object(x.jsx)(x.Fragment,{})):Object(x.jsx)("div",{children:Object(x.jsxs)(a.Suspense,{fallback:Object(x.jsx)("div",{className:"d-flex justify-content-center align-items-center  position-fixed spinner",children:Object(x.jsx)(i.DotLoader,{color:"#36D7B7",size:100})}),children:[Object(x.jsx)(r.bb,{children:Object(x.jsx)("h3",{className:"mt-2 mb-4",children:this.renderHeader()})}),h?Object(x.jsx)(R,{}):Object(x.jsxs)(r.bb,{children:[Object(x.jsx)(r.q,{sm:"12",lg:"8",children:this.renderSteps()}),Object(x.jsx)(r.q,{sm:"12",lg:"4",className:"mb-5",children:Object(x.jsxs)(r.i,{children:[Object(x.jsx)(r.m,{children:Object(x.jsx)("span",{className:"",style:{fontSize:"18px",...b},children:"Summary Payment"})}),Object(x.jsxs)(r.j,{className:"border-bottom",children:[Object(x.jsxs)("div",{className:"d-flex justify-content-between bg-light p-2",children:[Object(x.jsx)("div",{children:Object(x.jsx)("span",{style:{...b},children:"Item"})}),Object(x.jsx)("div",{children:Object(x.jsx)("span",{style:{...b},children:"Quantity"})}),Object(x.jsx)("div",{children:Object(x.jsx)("span",{style:{...b},children:"Amount"})}),Object(x.jsx)("div",{children:Object(x.jsx)("span",{style:{...b},children:"Sub Amount"})})]}),t.length>0?t.map(((e,t)=>{const{promo:s,product:a}=e.product,n=s&&s.status,r=s&&s.percentage;let i=a.productPrice*r/100,o=a.productPrice-i;return O+="ONGOING"===n?o:a.productPrice,Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"p-2 d-flex justify-content-between align-items-center",children:[Object(x.jsx)("span",{className:"text-truncate d-inline-block",style:{maxWidth:"150px"},children:a.productName}),Object(x.jsx)("span",{children:e.quantity}),Object(x.jsxs)("span",{children:["\u20b1","ONGOING"===n?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("span",{className:"text-muted text-decoration-line-through me-2",style:{fontSize:"16px"},children:a.productPrice.toFixed(2)}),Object(x.jsx)("span",{children:o.toFixed(2)})]}):a.productPrice.toFixed(2)]}),Object(x.jsxs)("span",{children:["\u20b1",(a.productPrice*e.quantity).toFixed(2)]})]},e.id)})})):Object(x.jsx)(r.q,{style:{fontStyle:"italic",textAlign:"center"},className:"p-2",children:"No Item"})]}),Object(x.jsxs)("div",{className:"p-3 ",children:[Object(x.jsxs)("div",{className:"d-flex justify-content-between align-items-center pb-2",children:[Object(x.jsx)("span",{className:"text-muted font-style me-2",children:"Total Quantity"}),Object(x.jsx)("span",{style:{fontWeight:"500"},children:n})]}),Object(x.jsxs)("div",{className:"d-flex justify-content-between align-items-center pb-2",children:[Object(x.jsx)("span",{className:"text-muted font-style me-2",children:"Shipping Fee (Metro Manila 3 to 5 Days, Provincial 7 to 10 Days)"}),Object(x.jsxs)("span",{style:{fontWeight:"500"},children:["  \u20b1",y.shippingAmount&&y.shippingAmount.toFixed(2)]})]}),Object(x.jsxs)("div",{className:"d-flex justify-content-between align-items-center pb-2",children:[Object(x.jsx)("span",{className:"text-muted font-style me-2",children:"Total Amount"}),Object(x.jsxs)("span",{style:{fontWeight:"500"},children:["\u20b1",s>0?O.toFixed(2):s.toFixed(2)]})]})]}),Object(x.jsx)(r.k,{children:Object(x.jsx)("div",{className:"d-grid gap-2 mx-auto",children:e>1?Object(x.jsxs)("div",{className:"d-grid gap-2 d-md-flex justify-content-md-end",children:[Object(x.jsx)(r.f,{variant:"ghost",color:"dark",onClick:this.handleOnPre,className:"w-100",children:"Back"}),3===e?Object(x.jsxs)(r.f,{className:"w-100",color:"info",disabled:void 0===p,onClick:this.handleOnPlaceOrder,children:[g&&Object(x.jsx)(r.gb,{size:"sm",className:"ms-1"}),"Place Order"]}):Object(x.jsx)(r.f,{className:"w-100",color:"info",onClick:this.handleOnNext,disabled:void 0===d,children:"Next"})]}):Object(x.jsx)(r.f,{type:"submit",color:"info",disabled:t.length<=0,className:"d-flex justify-content-center align-items-center",onClick:this.handleOnNext,children:Object(x.jsx)("span",{className:"ms-2",children:"Checkout"})})})})]})})]})]})})}}t.default=Object(o.b)((e=>({userResponse:e.userResponse,messageResponse:e.messageResponse,websocketResponse:e.websocketResponse,cartResponse:e.cartResponse,orderResponse:e.orderResponse,shippingFeeResponse:e.shippingFeeResponse})),{clearMessage:c.a,placeOrder:d.e,updateOrderPaymentStatus:d.f,validateCart:d.h,setCart:p.e,getShippingFees:()=>async e=>b.getShippingFees().then((t=>(e({type:j.GET_SHIPPING_FEES,payload:{status:200,action:j.GET_SHIPPING_FEES,data:{shippingFees:t.data}}}),Promise.resolve())),(t=>{const s=t.response&&t.response.data&&t.response.data.message||t.message||t.error_message||t.toString(),a=t.response&&t.response.data&&t.response.data.code||t.status||t.toString();return e({type:g.g,payload:{status:a,data:{message:s}}}),Promise.reject()}))})(T)}}]);
//# sourceMappingURL=53.d487c130.chunk.js.map