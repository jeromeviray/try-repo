(this["webpackJsonp@project/inventory-management-system"]=this["webpackJsonp@project/inventory-management-system"]||[]).push([[71],{1147:function(e,t,s){"use strict";s.r(t),s.d(t,"Footer",(function(){return o}));var n=s(0),c=s(428),r=s(55),a=s(25),i=s(129),l=s(8);class o extends n.Component{constructor(...e){super(...e),this.state={storeInfo:[]},this.manageStoreInformationResponse=(e,t)=>{if(e.storeInformationResponse!==this.props.storeInformationResponse){const{action:e,status:t,data:s}=this.props.storeInformationResponse;"GET_STORE_INFORMATION"===e&&200===t&&this.setState({storeInfo:s.storeInfo})}}}componentDidUpdate(e,t){this.manageStoreInformationResponse(e,t)}render(){const{storeInfo:e}=this.state,t={marginBottom:"5px"};return Object(l.jsxs)("div",{className:"bg-dark p-3 border-red text-white position-relative ",style:{zIndex:"2"},children:[Object(l.jsx)(c.s,{className:"",children:Object(l.jsxs)(c.bb,{className:"align-items-center justify-content-center mb-3 text-center",children:[Object(l.jsxs)(c.q,{sm:"12",lg:"6",children:[Object(l.jsx)("h5",{children:"Contact Us: "}),Object(l.jsxs)("div",{className:"font-style d-flex text-light justify-content-center  mt-3",children:[Object(l.jsxs)("div",{className:"font-style d-flex flex-column align-items-start ",children:[Object(l.jsx)("h6",{className:"m-0 pe-3 mb-2",children:"Contact #:"}),Object(l.jsx)("h6",{className:"m-0 pe-3 mb-2",children:"Email:"}),Object(l.jsx)("h6",{className:"m-0 pe-3 mb-2",children:"Location:"})]}),Object(l.jsxs)("div",{className:"font-style d-flex flex-column align-items-start ",children:[Object(l.jsx)("strong",{style:{...t},children:e.contactNumber?Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("span",{children:e.contactNumber})}):Object(l.jsx)("span",{children:"09458144695"})}),Object(l.jsx)("strong",{style:{...t},children:e.email?Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("span",{children:e.email})}):Object(l.jsx)("span",{children:"jeromeviray4@gmail.com"})}),Object(l.jsx)("strong",{style:{...t},children:e.location?Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("span",{children:e.location})}):Object(l.jsx)("span",{children:"San Agustin Concepcion Tarlac"})})]})]})]}),Object(l.jsxs)(c.q,{sm:"12",lg:"6",className:" mt-3 mb-3",children:[Object(l.jsx)("h5",{children:"Terms and Condition "}),Object(l.jsx)(i.b,{className:"nav-link text-light",to:a.a.api.private.prefixFrontendUrl+"#",style:{cursor:"pointer"},children:"Terms and Conditions"})]}),Object(l.jsxs)(c.q,{sm:"12",lg:"6",children:[Object(l.jsx)("h5",{children:"Contact Us: "}),Object(l.jsxs)("div",{className:"font-style d-flex text-light justify-content-center mt-3",children:[Object(l.jsxs)("div",{className:"font-style d-flex flex-column align-items-start ",children:[Object(l.jsx)("h6",{className:"m-0 pe-3 mb-2",children:"Contact #:"}),Object(l.jsx)("h6",{className:"m-0 pe-3 mb-2",children:"Email:"}),Object(l.jsx)("h6",{className:"m-0 pe-3 mb-2",children:"Location:"})]}),Object(l.jsxs)("div",{className:"font-style d-flex flex-column align-items-start ",children:[Object(l.jsx)("strong",{style:{...t},children:e.contactNumber?Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("span",{children:e.contactNumber})}):Object(l.jsx)("span",{children:"09458144695"})}),Object(l.jsx)("strong",{style:{...t},children:e.email?Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("span",{children:e.email})}):Object(l.jsx)("span",{children:"jeromeviray4@gmail.com"})}),Object(l.jsx)("strong",{style:{...t},children:e.location?Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("span",{children:e.location})}):Object(l.jsx)("span",{children:"San Agustin Concepcion Tarlac"})})]})]})]})]})}),Object(l.jsx)(c.s,{className:"text-center",children:Object(l.jsx)(c.o,{children:Object(l.jsx)(i.b,{className:"nav-link text-white",to:a.a.api.private.prefixFrontendUrl+"/home",style:{cursor:"pointer"},children:e.storeName?Object(l.jsx)("strong",{style:{...t},children:e.storeName.toUpperCase()}):Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("strong",{style:{...t},children:"Inventory Management System"})})})})})]})}}t.default=Object(r.b)((e=>({storeInformationResponse:e.storeInformationResponse})),{})(o)}}]);
//# sourceMappingURL=71.66d4b22c.chunk.js.map