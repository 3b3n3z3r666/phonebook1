(this["webpackJsonpproject_2.6"]=this["webpackJsonpproject_2.6"]||[]).push([[0],{22:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var a=t(2),c=t(16),o=t.n(c),r=(t(22),t(17)),u=t(3),i=t(0),l=function(e){return Object(i.jsxs)("div",{children:["Search: ",Object(i.jsx)("input",{onChange:e.handleChange}),Object(i.jsxs)("h3",{children:["Searching for: ",e.searchName]})]})},s=function(e){return Object(i.jsx)("div",{children:Object(i.jsxs)("p",{children:[e.searchResult.name," ",e.searchResult.number]})})},d=function(e){return Object(i.jsxs)("div",{children:["Name: ",Object(i.jsx)("input",{onChange:e.handleChange,value:e.value})]})},j=function(e){return Object(i.jsxs)("div",{children:["Number: ",Object(i.jsx)("input",{onChange:e.handleChange,value:e.value})]})},b=function(e){return Object(i.jsx)("div",{children:Object(i.jsxs)("form",{onSubmit:e.handleContactSubmit,children:[Object(i.jsx)(d,{handleChange:e.handleNameFieldChange,value:e.nameValue}),Object(i.jsx)(j,{handleChange:e.handleNumberFieldChange,value:e.numberValue}),Object(i.jsx)("button",{type:"submit",children:"add"})]})})},m=function(e){var n={};return Object(i.jsx)("div",{children:e.contacts.map((function(t){return Object(i.jsxs)("div",{children:[" ",Object(i.jsxs)("p",{children:["ID: ",t.id," ",t.name," ",t.number,Object(i.jsxs)("button",{style:n,onClick:function(){return n=t.id,console.log("ContactList handleDelete called on ID: ",n),void e.handleDelete(n);var n},children:["Delete",Object(i.jsx)("br",{}),t.name.split(" ")[0],"?"]})]},t.id)]})}))})},h=t(5),f=t.n(h),O="/api/persons",g=function(){return f.a.get(O).then((function(e){return e.data}))},v=function(e){return f.a.post(O,e).then((function(e){return e.data}))},x=function(e,n){return console.log("UPDATE:\nParams are: ID: ",e," object: ",n),f.a.put("".concat(O,"/").concat(e),n).then((function(e){return e.data}))},p=function(e){return f.a.delete("".concat(O,"/").concat(e)).then((function(e){return e.data}))},C=function(e){return Object(i.jsx)("div",{children:Object(i.jsxs)("h3",{children:[" Notification: ",e.msg]})})},w=!1,N=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(""),d=Object(u.a)(o,2),j=d[0],h=d[1],f=Object(a.useState)(""),O=Object(u.a)(f,2),N=O[0],S=O[1],D=Object(a.useState)(!0),y=Object(u.a)(D,2),I=y[0],k=y[1],L=Object(a.useState)(""),P=Object(u.a)(L,2),T=P[0],F=P[1],E=Object(a.useState)([]),R=Object(u.a)(E,2),V=R[0],M=R[1],U=Object(a.useState)(null),A=Object(u.a)(U,2),H=A[0],J=A[1];Object(a.useEffect)((function(){console.log("service useEffect called"),g().then((function(e){console.log("initial contacts: ",e),c(e)}))}),[]);var _=function(e,n){console.log("-UpdatePhoneNumberProps-",e,"peops name",e.name,"props number",n.number);var a=t.filter((function(n){return n.name===String(e.name)}));if(a[0]){console.log("Found a contactToUpdate: ",a[0],a[0].name,a[0].number,a[0].id);var o={name:e.name,number:n.number};x(a[0].id,o).then((function(e){var n=t.filter((function(n){return n.id!==e.id}));c(n.concat(e)),h(""),S("")}))}};return Object(i.jsxs)("div",{children:[null!=H?Object(i.jsx)(C,{msg:H}):Object(i.jsx)("h3",{}),Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(l,{handleChange:function(e){console.log("searching for: ",e.target.value),t.map((function(e){return console.log("persons:",e.name)}));var n=t.filter((function(n){return n.name.includes(e.target.value)}));if(console.log("search match is: ",n),""===e.target.value)w=!1,F(""),console.log("search is empty");else{console.log("searchName update: ",e.target.value),F(e.target.value);var a=t.filter((function(e){return e.name.toLowerCase().includes(T.toLowerCase())}));0===a.length?M([{name:"No matches",number:""}]):(M(a),w=!0)}},searchName:T}),Object(i.jsx)(b,{handleContactSubmit:function(e){e.preventDefault();var n,a={name:j},o={number:N};if(console.log("-Submission-  newNameObject: ",a," newNumberObject",o),""===j||10!==N.length)alert("Please enter a valid name and number first"),h(""),S("");else{if(function(e){console.log("checking for ",e.name);for(var n=!1,a=0;a<t.length;a++)if(console.log("contact ",t[a].name,"newName",e.name),t[a].name.toLowerCase()===e.name.toLowerCase()){n=!0;break}return n}(a))window.confirm("".concat(a.name.toLowerCase()," already exists! Do you want to update ").concat(a.name.toLowerCase(),"'s phone number?"))?_(a,o):(n=a,console.log(n.name," rejected"),J("".concat(n.name.toLowerCase(),"'s entry was left alone")),setTimeout((function(){J(null)}),3e3),h(""));else{var u=t.map((function(e){return parseInt(e.id)})),i=Math.max.apply(Math,Object(r.a)(u)),l=String(i+1),s={name:j,number:N,id:l};console.log("Submit registered","newName: ",a,"newNumber: ",N,"maxIdNum: ",i,"MaxIdNum+1",i+1),console.log("Person built: ",s," ID: ",s.id," Name: ",s.name," Number: ",s.number),v(s).then((function(e){c(t.concat(e)),J("".concat(j," added!")),setTimeout((function(){J(null)}),3e3),h(""),S("")}))}}},handleNameFieldChange:function(e){h(e.target.value)},nameValue:j,handleNumberFieldChange:function(e){S(e.target.value)},numberValue:N}),Object(i.jsxs)("div",{children:["newName is currently: ",j]}),Object(i.jsx)("h2",{children:"Contacts"}),Object(i.jsx)("button",{onClick:function(){return k(!I)},children:"Show/Hide Phonebook"}),!0===I?Object(i.jsx)(m,{contacts:t,handleDelete:function(e){console.log("Delete called on id: ",e),console.log("ID",e,"'s name is: ",t.filter((function(n){return n.id===e}))[0].name);var n=t.filter((function(n){return n.id===e}))[0];console.log("personToDelete: ",n),window.confirm("Are you sure you want to delete ".concat(n.name))?(p(e),c(t.filter((function(n){return n.id!==e}))),M([]),J("".concat(n.name," removed!")),setTimeout((function(){J(null)}),3e3)):window.alert("OK. No contacts deleted.")}}):Object(i.jsxs)("div",{children:[" ",Object(i.jsx)("h3",{children:"Contacts Hidden"})," "]}),Object(i.jsx)("h2",{children:"Search Results"}),!0===w?V.map((function(e){return Object(i.jsx)(s,{searchResult:e})})):Object(i.jsx)("div",{})]})};o.a.render(Object(i.jsx)("div",{children:Object(i.jsx)(N,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.41105199.chunk.js.map