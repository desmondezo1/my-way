(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[532],{99385:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/vendor",function(){return t(95622)}])},95622:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return q}});var n=t(34051),s=t.n(n),i=t(85893),a=t(82175),o=t(67294),l=t(45697),c=t.n(l),d=t(17872),u=t.n(d);function m(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e){var r=e.items,t=e.ariaLabel,n=void 0===t?"select dropdown":t,s=e.firstOption,a=void 0===s?"":s,o=e.getFieldProps;return(0,i.jsxs)("select",function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){m(e,r,t[r])}))}return e}({"aria-label":n,className:u().dropdown},o,{children:[(0,i.jsx)("option",{className:"fs-5",value:a,children:a}),r.map((function(e,r){return(0,i.jsx)("option",{className:"fs-5",value:e,children:e},r)}))]}))}p.propTypes={items:c().any,ariaLabel:c().string,firstOption:c().string,getFieldProps:c().any};var h=t(74096),f={src:"/_next/static/media/walletconnect.2e107c25.svg",height:81,width:81},x={src:"/_next/static/media/MetaMask_Fox.92971b76.svg",height:67,width:67},g=t(14632);function v(e){var r=e.showModal,t=void 0!==r&&r,n=e.title,s=void 0===n?"Wallet":n,a=(0,o.useState)(t),l=a[0],c=a[1],d=(0,h.o)((function(e){return e.setDisplayModalFalse}));return(0,i.jsx)(i.Fragment,{children:l?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",children:(0,i.jsx)("div",{className:"relative w-full my-6 mx-auto max-w-md",children:(0,i.jsxs)("div",{className:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",children:[(0,i.jsxs)("div",{className:"flex justify-between p-5",children:[(0,i.jsx)("h3",{className:"text-xl font-semibold",children:s}),(0,i.jsx)("button",{onClick:function(){c(!1),d()},children:"x"})]}),(0,i.jsxs)("div",{className:"wallet-options",children:[(0,i.jsxs)("button",{onClick:function(){g.u.connectWithWalletConnect()},children:[(0,i.jsx)("img",{src:f,alt:"wallet",width:40,height:40,className:"align-straight pr-3"}),(0,i.jsx)("span",{className:"align-straight",children:"Mobile Wallet"})]}),(0,i.jsxs)("button",{onClick:function(){g.u.connectWallet()},children:[(0,i.jsx)("img",{src:x,alt:"metamask",width:40,height:40,className:"align-straight pr-3"}),(0,i.jsx)("span",{className:"align-straight",children:"Metamask"})]})]})]})})}),(0,i.jsx)("div",{className:"opacity-25 fixed inset-0 z-40 bg-black"})]}):null})}v.propTypes={showModal:c().bool,title:c().string};var b=t(74231),_=b.Ry().shape({destinationFrom:b.Z_().required("What location are you sending this item from?"),destinationTo:b.Z_().required("What location are you sending this item to?"),senderBusinessName:b.Z_().required("Sender business name is required"),senderFirstname:b.Z_().required("Firstname is required"),senderLastname:b.Z_().required("Lastname is required"),senderPhoneNumber:b.Z_().required("Phone number is required"),senderEmail:b.Z_().required("Email is required"),receiverPhoneNumber:b.Z_().required("Phone number is required"),receiverEmail:b.Z_().required("Email is required"),receiverFirstname:b.Z_().required("Firstname is required"),receiverLastname:b.Z_().required("Lastname is required"),fairPrice:b.Z_().required("Enter your fair price")}),j={src:"/_next/static/media/arrow-right.9b17e134.svg",height:24,width:77},w=t(25675),P=t.n(w);function N(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function y(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){N(e,r,t[r])}))}return e}function F(e){var r=e.text,t=e.type,n=void 0===t?"text":t,s=e.extraProps,a=void 0===s?{}:s,o=e.getFieldProps,l=e.errorMsg,c=e.touched;return(0,i.jsxs)("div",{className:"form-group ".concat(u().inputItem),children:[(0,i.jsx)("span",{className:u().inputLabel,children:r}),(0,i.jsx)("input",y({type:n},a,o,{className:"form-control"})),c&&(0,i.jsx)("small",{className:"error",children:l})]})}F.propTypes={text:c().string,type:c().string,onChange:c().func,extraProps:c().object,errorMsg:c().string,touched:c().bool,getFieldProps:c().any};var O=t(41199),E=t.n(O),M=["Abia","Adamawa","Akwa Ibom","Anambra","Bauchi","Bayelsa","Benue","Borno","Cross River","Delta","Ebonyi","Edo","Ekiti","Enugu","FCT - Abuja","Gombe","Imo","Jigawa","Kaduna","Kano","Katsina","Kebbi","Kogi","Kwara","Lagos","Nasarawa","Niger","Ogun","Ondo","Osun","Oyo","Plateau","Rivers","Sokoto","Taraba","Yobe","Zamfara"];function k(e,r,t,n,s,i,a){try{var o=e[i](a),l=o.value}catch(c){return void t(c)}o.done?r(l):Promise.resolve(l).then(n,s)}function q(){var e=(0,o.useState)(!1),r=(e[0],e[1],(0,o.useState)("")),t=(r[0],r[1],(0,o.useState)([])),n=(t[0],t[1],(0,o.useState)(!1)),l=(n[0],n[1],(0,h.o)((function(e){return e.displayModal})));(0,o.useEffect)((function(){}),[]);var c=(0,a.TA)({initialValues:{destinationFrom:"",destinationTo:"",senderBusinessName:"",senderFirstname:"",senderLastname:"",senderPhoneNumber:"",senderEmail:"",receiverPhoneNumber:"",receiverEmail:"",receiverFirstname:"",receiverLastname:"",fairPrice:"",numberOfItems:0},validationSchema:_,onSubmit:function(){var e,r=(e=s().mark((function e(r){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log({values:r}),e.next=3,g.u.connectWithWalletConnect();case 3:e.sent;case 5:case"end":return e.stop()}}),e)})),function(){var r=this,t=arguments;return new Promise((function(n,s){var i=e.apply(r,t);function a(e){k(i,n,s,a,o,"next",e)}function o(e){k(i,n,s,a,o,"throw",e)}a(void 0)}))});return function(e){return r.apply(this,arguments)}}()}),d=c.errors,m=c.touched,f=c.isSubmitting,x=c.handleSubmit,b=c.getFieldProps;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"send-package__details",children:[l&&(0,i.jsx)(v,{showModal:!0,title:"Connect Wallet"}),(0,i.jsx)(a.Hy,{value:c,children:(0,i.jsxs)("form",{className:"form inner-content",onSubmit:x,children:[(0,i.jsxs)("div",{className:"container ".concat(u().dropdown_wrapper),children:[(0,i.jsx)("h1",{className:u().dropdown_title,children:"Send packages"}),(0,i.jsxs)("div",{className:"container ".concat(u().dropdown_select_wrapper),id:"logistics",children:[(0,i.jsx)(p,{items:M,ariaLabel:"deliver package from",firstOption:"From",getFieldProps:b("destinationFrom")}),(0,i.jsx)("span",{className:"md:inline-block align-middle hidden ".concat(u().arrow),children:(0,i.jsx)(P(),{src:j,alt:"arrow right"})}),(0,i.jsx)(p,{items:M,ariaLabel:"deliver package to",firstOption:"To",getFieldProps:b("destinationTo")})]})]}),(0,i.jsxs)("div",{className:"bg-info-light p-8 rounded-md mx-auto ".concat(u().fromWrapper),children:[(0,i.jsx)("div",{className:"form-row",children:(0,i.jsx)(F,{text:"Your Business name",type:"text",extraProps:{placeholder:"My way services..."},touched:m.senderBusinessName,errorMsg:d.senderBusinessName,getFieldProps:b("senderBusinessName")})}),(0,i.jsxs)("div",{className:u().formInputGroup,children:[(0,i.jsx)(F,{text:"Your first name",extraProps:{placeholder:"John"},touched:m.senderFirstname,errorMsg:d.senderFirstname,getFieldProps:b("senderFirstname")}),(0,i.jsx)(F,{text:"Your last name",extraProps:{placeholder:"Doe"},touched:m.senderLastname,errorMsg:d.senderLastname,getFieldProps:b("senderLastname")})]}),(0,i.jsxs)("div",{className:u().formInputGroup,children:[(0,i.jsx)(F,{text:"Phone number",extraProps:{placeholder:"+234xxxxxx"},touched:m.senderPhoneNumber,errorMsg:d.senderPhoneNumber,getFieldProps:b("senderPhoneNumber")}),(0,i.jsx)(F,{text:"Email",type:"email",extraProps:{placeholder:"johndoe@dgf.com"},touched:m.senderEmail,errorMsg:d.senderEmail,getFieldProps:b("senderEmail")})]}),(0,i.jsx)("h3",{className:u().segmentTitle,children:"Receiver's"}),(0,i.jsxs)("div",{className:u().formInputGroup,children:[(0,i.jsx)(F,{text:"Phone number",extraProps:{placeholder:"+234xxxxxx"},touched:m.receiverPhoneNumber,errorMsg:d.receiverPhoneNumber,getFieldProps:b("receiverPhoneNumber")}),(0,i.jsx)(F,{text:"Email",type:"email",extraProps:{placeholder:"johndoe@dgf.com"},touched:m.receiverEmail,errorMsg:d.receiverEmail,getFieldProps:b("receiverEmail")})]}),(0,i.jsxs)("div",{className:u().formInputGroup,children:[(0,i.jsx)(F,{text:"First name",extraProps:{placeholder:"John"},touched:m.receiverFirstname,errorMsg:d.receiverFirstname,getFieldProps:b("receiverFirstname")}),(0,i.jsx)(F,{text:"Last name",extraProps:{placeholder:"Doe"},touched:m.receiverLastname,errorMsg:d.receiverLastname,getFieldProps:b("receiverLastname")})]}),(0,i.jsx)("h3",{className:u().segmentTitle,children:"Set your fair price"}),(0,i.jsxs)("div",{className:u().formInputGroup,"data-toggle":"tooltip","data-html":"true",title:"<em>Tooltip</em> <u>with</u> <b>HTML</b>",children:[(0,i.jsx)(F,{text:"Price",touched:m.fairPrice,errorMsg:d.fairPrice,getFieldProps:b("fairPrice")}),(0,i.jsx)(F,{text:"Number of items",touched:m.numberOfItems,errorMsg:d.numberOfItems,getFieldProps:b("numberOfItems")})]}),(0,i.jsx)("button",{className:"mx-auto ".concat(E().submit),type:"submit",disabled:f,children:"Send Package"})]})]})})]})})}},17872:function(e){e.exports={dropdown_white_green_outline:"form_dropdown_white_green_outline__VVv1l",dropdown:"form_dropdown__m8_OX",dropdown_wrapper:"form_dropdown_wrapper__Uk1OS",dropdown_title:"form_dropdown_title__gaGoO",dropdown_select_wrapper:"form_dropdown_select_wrapper__hBXFo",arrow:"form_arrow__tMy_c",fromWrapper:"form_fromWrapper__uOxui",formInputGroup:"form_formInputGroup__dvVWe",inputLabel:"form_inputLabel__MTHRI",inputItem:"form_inputItem__uKoj0",segmentTitle:"form_segmentTitle__eVaqn"}}},function(e){e.O(0,[141,774,888,179],(function(){return r=99385,e(e.s=r);var r}));var r=e.O();_N_E=r}]);