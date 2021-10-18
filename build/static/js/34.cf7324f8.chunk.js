(this["webpackJsonp@project/inventory-management-system"]=this["webpackJsonp@project/inventory-management-system"]||[]).push([[34],{429:function(e,t,s){"use strict";s.d(t,"k",(function(){return n})),s.d(t,"j",(function(){return i})),s.d(t,"e",(function(){return r})),s.d(t,"h",(function(){return o})),s.d(t,"g",(function(){return d})),s.d(t,"n",(function(){return c})),s.d(t,"b",(function(){return l})),s.d(t,"c",(function(){return p})),s.d(t,"a",(function(){return h})),s.d(t,"d",(function(){return g})),s.d(t,"i",(function(){return m})),s.d(t,"f",(function(){return b})),s.d(t,"o",(function(){return u})),s.d(t,"p",(function(){return j})),s.d(t,"m",(function(){return y})),s.d(t,"l",(function(){return v})),s.d(t,"q",(function(){return O}));var a=s(2);const n=(e,t,s)=>async n=>{n({type:a.SET_PRODUCTEDITMODAL_VISIBILIT,payload:{status:200,data:{visible:e,action:t,icon:s}}})},i=(e,t,s)=>async n=>{n({type:a.SET_PRODUCT_DETAILS_MODAL,payload:{status:200,data:{visible:e,action:t,product:s}}})},r=(e,t,s,n)=>async i=>{i({type:a.EDIT_PRODUCT_MODAL,payload:{status:200,data:{visible:e,action:t,product:s,icon:n}}})},o=(e,t,s,n)=>async i=>{i({type:a.ALERT_MODAL,payload:{action:t,module:s,alert:e,data:{id:n}}})},d=(e,t,s,n)=>async i=>{i({type:a.ALERT_BAN_MODAL,payload:{action:t,module:s,alert:e,data:{id:n}}})},c=(e,t,s,n)=>async i=>{i({type:a.UDPATE_STORE_INFORMATION,payload:{status:200,data:{visible:e,action:t,storeInfo:s,icon:n}}})},l=(e,t,s,n)=>async i=>{i({type:a.ADD_BRAND_MODAL,payload:{status:200,data:{visible:e,action:t,brand:s,icon:n}}})},p=(e,t,s,n)=>async i=>{i({type:a.ADD_CATEGORY_MODAL,payload:{status:200,data:{visible:e,action:t,category:s,icon:n}}})},h=(e,t,s,n)=>async i=>{i({type:a.ADD_EMPLOYEE_MODAL,payload:{status:200,data:{visible:e,action:t,employee:s,icon:n}}})},g=(e,t,s,n)=>async i=>{i({type:a.CHANGE_PASSWORD_MODAL,payload:{status:200,data:{visible:e,action:t,employee:s,icon:n}}})},m=(e,t)=>async s=>{s({type:a.LOGIN_MODAL,payload:{data:{visible:e,action:t}}})},b=(e,t,s,n)=>async i=>{i({type:a.SET_ADDRESS_MODAL,payload:{data:{visible:e,action:t,address:s,icon:n}}})},u=(e,t,s,n)=>async i=>{i({type:a.SET_SUPPLIER_MODAL,payload:{action:t,data:{visible:e,icon:n,supplier:s}}})},j=(e,t,s,n)=>async i=>{i({type:a.SET_SUPPLY_MODAL,payload:{action:t,data:{visible:e,icon:n,supply:s}}})},y=(e,t)=>async s=>{s({type:a.SET_SCAN_MODAL,payload:{action:t,data:{visible:e}}})},v=(e,t,s,n)=>async i=>{i({type:a.SET_PROMO_MODAL,payload:{action:t,data:{visible:e,icon:n,promo:s}}})},O=(e,t,s,n)=>async i=>{i({type:a.SET_TERMS_AND_CONDITION_MODAL,payload:{status:200,data:{visible:e,action:t,termsAndCondition:s,icon:n}}})}},564:function(e,t,s){"use strict";s.d(t,"a",(function(){return d})),s.d(t,"b",(function(){return c}));var a=s(14),n=s(2),i=s(128),r=s(56);var o=new class{getAddresses(){return r.a.get("/addresses",{headers:Object(i.a)()})}updateAddress(e,t){return r.a.update("/addresses/update/"+e,{address:t},{headers:Object(i.a)()})}saveAddress(e){return r.a.post("/addresses/save",{firstName:e.firstName,lastName:e.lastName,phoneNumber:e.phoneNumber,region:e.region,city:e.city,province:e.province,barangay:e.barangay,street:e.street,postalCode:e.postalCode},{headers:Object(i.a)()})}};const d=()=>async e=>o.getAddresses().then((t=>(e({type:n.GET_ADDRESSES,payload:{status:200,action:"GET_ADDRESSES",data:{addresses:t.data}}}),Promise.resolve())),(t=>{const s=t.response&&t.response.data&&t.response.data.message||t.message||t.toString(),n=t.response&&t.response.data&&t.response.data.code||t.toString();return e({type:a.g,payload:{status:n,data:{message:s}}}),Promise.reject()})),c=e=>async t=>(console.log(e),o.saveAddress(e).then((e=>(t({type:n.SAVE_ADDRESS,payload:{status:200,action:"SAVE_ADDRESS",data:{}}}),t({type:a.g,payload:{status:200,data:{message:"Address Successfully Saved"}}}),Promise.resolve())),(e=>{const s=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),n=e.response&&e.response.data&&e.response.data.code||e.toString();return t({type:a.g,payload:{status:n,data:{message:s}}}),Promise.reject()})))},677:function(e,t,s){"use strict";s.r(t),s.d(t,"CustomerAddressController",(function(){return m}));var a=s(0),n=s(428),i=s(13),r=s(564),o=s(431),d=s(429),c=s(678),l=s(55),p=s(430),h=s(25),g=s(8);class m extends a.Component{constructor(...e){super(...e),this.state={message:"",action:"",addresses:[],addressId:"",visible:!1,isCart:!1},this.retreiveAddressResponse=()=>{this.props.getAdress()},this.manageAddressResponse=(e,t)=>{if(e.addressResponse!==this.props.addressResponse){let{action:e,status:t,data:s}=this.props.addressResponse;"GET_ADDRESSES"===e&&200===t&&this.setState({addresses:s.addresses})}},this.manageModalVisible=(e,t)=>{if(e.modalVisible!==this.props.modalVisible){let{action:e}=this.props.modalVisible;"close"===e&&this.retreiveAddressResponse()}}}componentDidMount(){this.props.userResponse.isLoggedIn?this.retreiveAddressResponse():this.props.history.push(h.a.api.private.prefixFrontendUrl+"/login")}componentDidUpdate(e,t){this.manageAddressResponse(e,t),this.manageModalVisible(e,t)}render(){let{message:e,addresses:t,visible:s,isCart:a}=this.state;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(c.a,{}),Object(g.jsxs)(n.f,{shape:"rounded-pill",color:"primary",variant:"ghost",className:"d-flex justify-content-center align-items-center mb-3",onClick:()=>this.props.setAddressModal(!s,"Add","",Object(g.jsx)(p.r,{size:20,className:"me-2"})),children:[Object(g.jsx)(p.r,{size:20}),Object(g.jsx)("span",{style:{marginLeft:"10px"},children:"Add Address"})]}),Object(g.jsxs)(n.bb,{children:[t.map(((e,t)=>{const{firstName:s,lastName:a,phoneNumber:i,street:r,barangay:o,province:d,region:c,city:l,postalCode:p}=e;let h=this.props.getValue==e.id;return Object(g.jsx)(n.q,{md:12,className:"mb-3",children:Object(g.jsx)(n.i,{className:h?"border-envelope shadow":"border-envelope",children:Object(g.jsxs)(n.j,{className:"p-3 ",children:[Object(g.jsx)("div",{className:"d-flex align-items-center justify-content-start",children:Object(g.jsx)(n.o,{children:e.firstName+" "+e.lastName})}),Object(g.jsxs)("div",{className:"ps-2",children:["Mobile #: ",i]}),Object(g.jsxs)("div",{className:"ps-2",children:["Address: ",r+", "+o+", "+l+", "+d+", "+c]})]})})},t)})),a&&Object(g.jsx)(n.q,{className:"m-3 text-center",style:{fontStyle:"italic"},children:Object(g.jsx)(n.a,{color:"warning",children:"To Proceed to the next step Select or Add your Address Information"})})]}),e&&Object(g.jsx)("div",{className:"form-group d-flex justify-content-center align-items-center",children:Object(g.jsx)("div",{className:"alert alert-danger",role:"alert",children:e})})]})}}t.default=Object(l.b)((e=>({addressResponse:e.addressResponse,userResponse:e.userResponse,messageResponse:e.messageResponse,modalVisible:e.modalVisibleResponse})),{getAdress:r.a,clearMessage:o.a,setAddressModal:d.f})(Object(i.h)(m))},678:function(e,t,s){"use strict";var a=s(0),n=s(428),i=s(55),r=s(429),o=s(564),d=s(431),c=s(679),l=s(8);class p extends a.Component{constructor(...e){super(...e),this.state={visible:!1,icon:"",address:this.addressStates,loading:!1,action:"",regionsData:[],provincesData:[],citiesData:[],baranggaysData:[],baranggayId:"",cityId:"",provinceId:"",regionId:""},this.addressStates={firstName:"",lastName:"",phoneNumber:"",region:"",city:"",province:"",barangay:"",street:"",postalCode:""},this.manageModalVisible=(e,t)=>{if(e.modalVisible!==this.props.modalVisible){let{visible:e,action:t,address:s,icon:a}=this.props.modalVisible;"Add"===t||"Edit"===t?this.setState({visible:e,icon:a,action:t}):this.setState({visible:e,icon:"",action:""})}},this.handleOnChange=e=>{this.setState({[e.target.name]:e.target.value})},this.handleOnSubmit=e=>{!1===e.currentTarget.checkValidity()&&(e.preventDefault(),e.stopPropagation()),this.setState({loading:!0});let{action:t,firstName:s,lastName:a,phoneNumber:n,region:i,city:r,province:o,barangay:d,street:c,postalCode:l}=this.state,p={firstName:s,lastName:a,phoneNumber:n,region:i,city:r,province:o,barangay:d,street:c,postalCode:l};"Add"===t&&this.handleSaveAddress(p)},this.onResetValue=()=>{this.setState((()=>this.addressStates))},this.handleSaveAddress=e=>{this.props.saveAddress(e).then((()=>{let{status:e}=this.props.messageResponse;200===e&&(this.setState({loading:!1}),this.onResetValue())})).catch((()=>{let{status:e,data:t}=this.props.messageResponse;this.setState({loading:!1})}))},this.onRegionChanged=e=>{const t=this.state.regionsData;if(""==e.target.value)return;const s=t[e.target.value];this.setState({regionId:e.target.value,region:s.name}),Object(c.provinces)(s.code).then((e=>{let t=[];e.map(((e,s)=>{t[s]={name:e.province_name,code:e.province_code}})),this.setState({provincesData:t})}))},this.onProvinceChanged=e=>{const t=this.state.provincesData;if(""==e.target.value)return;const s=t[e.target.value];this.setState({provinceId:e.target.value,province:s.name}),Object(c.cities)(s.code).then((e=>{let t=[];e.map(((e,s)=>{t[s]={name:e.city_name,code:e.city_code}})),this.setState({citiesData:t})}))},this.onCityChanged=e=>{const t=this.state.citiesData;if(""==e.target.value)return;const s=t[e.target.value];this.setState({cityId:e.target.value,city:s.name}),Object(c.barangays)(s.code).then((e=>{let t=[];e.map(((e,s)=>{t[s]={name:e.brgy_name,code:e.brgy_code}})),this.setState({baranggaysData:t})}))},this.onBaranggayChanged=e=>{const t=this.state.baranggaysData;if(""==e.target.value)return;const s=t[e.target.value];this.setState({baranggayId:e.target.value,barangay:s.name})}}componentDidMount(){Object(c.regions)().then((e=>{let t=[];e.map((e=>{t[e.id]={name:e.region_name,code:e.region_code}})),this.setState({regionsData:t})}))}componentDidUpdate(e,t){this.manageModalVisible(e,t)}render(){let{visible:e,firstName:t,lastName:s,phoneNumber:a,region:i,city:r,province:o,barangay:d,street:c,postalCode:p,loading:h,action:g,regionsData:m,provincesData:b,citiesData:u,baranggaysData:j,baranggayId:y,cityId:v,regionId:O,provinceId:x}=this.state;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(n.P,{size:"lg",visible:e,children:[Object(l.jsx)(n.S,{onDismiss:()=>this.props.setAddressModal(!1,"close","",""),children:Object(l.jsx)(n.T,{children:"Customer Address"})}),Object(l.jsx)(n.Q,{children:Object(l.jsxs)(n.B,{className:"row g-3 needs-validation",id:"address-form",onSubmit:this.handleOnSubmit,children:[Object(l.jsx)(n.q,{md:6,children:Object(l.jsxs)(n.F,{className:"mb-3",children:[Object(l.jsx)(n.D,{name:"firstName",type:"text",id:"floatingFirstName",placeholder:"First name",value:t,onChange:this.handleOnChange,required:!0}),Object(l.jsx)(n.G,{htmlFor:"floatingFirstName",children:"First name"})]})}),Object(l.jsx)(n.q,{md:6,children:Object(l.jsxs)(n.F,{children:[Object(l.jsx)(n.D,{name:"lastName",type:"text",id:"floatingLastName",placeholder:"Last name",value:s,onChange:this.handleOnChange,required:!0}),Object(l.jsx)(n.G,{htmlFor:"floatingLastName",children:"Last name"})]})}),Object(l.jsx)(n.q,{md:6,children:Object(l.jsxs)(n.F,{children:[Object(l.jsx)(n.D,{name:"phoneNumber",type:"tel",required:!0,pattern:"^(09|\\+639)\\d{9}$",id:"floatingPhoneNumber",placeholder:"Last name",value:a,onChange:this.handleOnChange}),Object(l.jsx)(n.G,{htmlFor:"floatingPhoneNumber",children:"Phone number"})]})}),Object(l.jsx)(n.q,{md:6}),Object(l.jsx)(n.q,{md:12,children:Object(l.jsxs)(n.F,{children:[Object(l.jsx)(n.D,{name:"street",type:"text",id:"floatingStreet",placeholder:"Street",value:c,onChange:this.handleOnChange,required:!0}),Object(l.jsx)(n.G,{htmlFor:"floatingStreet",children:"Street"})]})}),Object(l.jsx)(n.q,{md:6,children:Object(l.jsxs)(n.F,{className:"mb-3",children:[Object(l.jsxs)(n.H,{name:"region",type:"text",id:"floatingRegion",placeholder:"Region",value:O,onChange:this.onRegionChanged,required:!0,children:[Object(l.jsx)("option",{value:"",disabled:!0,children:"-- Choose Region --"}),m.map(((e,t)=>Object(l.jsx)("option",{value:t,children:e.name},t)))]}),Object(l.jsx)(n.G,{htmlFor:"floatingRegion",children:"Region"})]})}),Object(l.jsx)(n.q,{md:6,children:Object(l.jsxs)(n.F,{children:[Object(l.jsxs)(n.H,{name:"province",type:"text",id:"floatingProvince",placeholder:"Province",value:x,onChange:this.onProvinceChanged,required:!0,children:[Object(l.jsx)("option",{value:"",disabled:!0,children:"-- Choose Province --"}),b.map(((e,t)=>Object(l.jsx)("option",{value:t,children:e.name},e.name)))]}),Object(l.jsx)(n.G,{htmlFor:"floatingProvince",children:"Province"})]})}),Object(l.jsx)(n.q,{md:6,children:Object(l.jsxs)(n.F,{children:[Object(l.jsxs)(n.H,{name:"city",type:"text",id:"floatingCity",placeholder:"City",value:v,onChange:this.onCityChanged,required:!0,children:[Object(l.jsx)("option",{value:"",disabled:!0,children:"-- Choose City --"}),u.map(((e,t)=>Object(l.jsx)("option",{value:t,children:e.name},t)))]}),Object(l.jsx)(n.G,{htmlFor:"floatingCity",children:"City"})]})}),Object(l.jsx)(n.q,{md:6,children:Object(l.jsxs)(n.F,{children:[Object(l.jsxs)(n.H,{name:"barangay",type:"text",id:"floatingBarangay",placeholder:"Barangay",value:y,onChange:this.onBaranggayChanged,required:!0,children:[Object(l.jsx)("option",{value:"",disabled:!0,children:"-- Choose Barangay --"}),j.map(((e,t)=>Object(l.jsx)("option",{value:t,children:e.name},t)))]}),Object(l.jsx)(n.G,{htmlFor:"floatingBarangay",children:"Barangay"})]})})]})}),Object(l.jsxs)(n.R,{children:[Object(l.jsx)(n.f,{color:"dark",variant:"ghost",onClick:()=>{this.props.setAddressModal(!1,"close","","")},children:"Close"}),Object(l.jsxs)(n.f,{color:"info",disabled:h,type:"submit",form:"address-form",children:[h&&Object(l.jsx)(n.gb,{size:"sm",className:"ms-1"}),"Save ","Edit"===g?"Changes":"Address"]})]})]})})}}t.a=Object(i.b)((e=>({modalVisible:e.modalVisibleResponse,messageResponse:e.messageResponse})),{setAddressModal:r.f,saveAddress:o.b,clearMessage:d.a})(p)},679:function(e,t,s){const a=s(137);e.exports={regions:async()=>{try{return(await a.get("https://isaacdarcilla.github.io/philippine-addresses/region.json")).data.map((e=>({id:e.id,psgc_code:e.psgc_code,region_name:e.region_name,region_code:e.region_code})))}catch(e){return e.message}},provinces:async e=>{try{return(await a.get("https://isaacdarcilla.github.io/philippine-addresses/province.json")).data.filter((t=>t.region_code===e)).map((e=>({psgc_code:e.psgc_code,province_name:e.province_name,province_code:e.province_code,region_code:e.region_code})))}catch(t){return t.message}},cities:async e=>{try{return(await a.get("https://isaacdarcilla.github.io/philippine-addresses/city.json")).data.filter((t=>t.province_code===e)).map((e=>({city_name:e.city_name,city_code:e.city_code,province_code:e.province_code,region_desc:e.region_desc})))}catch(t){return t.message}},barangays:async e=>{try{return(await a.get("https://isaacdarcilla.github.io/philippine-addresses/barangay.json")).data.filter((t=>t.city_code===e)).map((e=>({brgy_name:e.brgy_name,brgy_code:e.brgy_code,province_code:e.province_code,region_code:e.region_code})))}catch(t){return t.message}}}}}]);
//# sourceMappingURL=34.cf7324f8.chunk.js.map