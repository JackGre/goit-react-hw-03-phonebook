(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={Form:"ContactForm_Form__LlsUJ"}},12:function(t,e,n){t.exports={Filter:"ContactFilter_Filter__3U-mu"}},13:function(t,e,n){t.exports={ContactItem:"ContactItem_ContactItem__2XNZL"}},14:function(t,e,n){t.exports={ContactList:"ContactList_ContactList__30RLM"}},15:function(t,e,n){t.exports={Container:"App_Container__sGwND"}},21:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(8),o=n.n(r),i=(n(21),n(16)),s=n(3),u=n(4),l=n(6),m=n(5),b=n(9),d=n(10),j=n.n(d),h=n(11),C=n.n(h),f=n(0),p=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.onChange=function(e){t.setState(Object(b.a)({},e.currentTarget.name,e.currentTarget.value))},t.addContact=function(e){e.preventDefault();var n={name:t.state.name,number:t.state.number,id:j.a.generate()};t.props.onSubmit(n),t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{className:C.a.Form,onSubmit:this.addContact,children:[Object(f.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.onChange}),Object(f.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.onChange}),Object(f.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component),O=n(12),v=n.n(O),x=function(t){var e=t.value,n=t.onChange;return Object(f.jsx)("div",{className:v.a.Filter,children:Object(f.jsxs)("label",{children:["Find contacts by name",Object(f.jsx)("input",{type:"text",value:e,onChange:n})]})})},g=n(13),_=n.n(g),y=function(t){var e=t.contacts,n=t.onClick;return e.map((function(t){var e=t.name,a=t.number,c=t.id;return Object(f.jsxs)("li",{className:_.a.ContactItem,children:[Object(f.jsxs)("p",{children:[Object(f.jsx)("span",{children:e}),Object(f.jsx)("span",{children:a})]}),Object(f.jsx)("button",{onClick:function(){return n(c)},children:"Delete"})]},c)}))},k=n(14),S=n.n(k),F=function(t){var e=t.contacts,n=t.onClick;return Object(f.jsx)("ul",{className:S.a.ContactList,children:Object(f.jsx)(y,{contacts:e,onClick:n})})},A=n(15),w=n.n(A),L=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.onSubmit=function(e){var n=t.state.contacts.find((function(t){return t.name===e.name}));console.log(n),void 0===n?t.setState((function(t){return{contacts:[e].concat(Object(i.a)(t.contacts))}})):alert("".concat(e.name," is already in contacts"))},t.removeContact=function(e){var n=t.state.contacts.filter((function(t){return t.id!==e}));t.setState({contacts:n})},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.state.filter.toLowerCase(),n=this.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e)}));return Object(f.jsxs)("div",{className:w.a.Container,children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(p,{onSubmit:this.onSubmit}),Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(x,{value:t,onChange:this.changeFilter}),Object(f.jsx)(F,{contacts:n,onClick:this.removeContact})]})}}]),n}(a.Component);o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(L,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.2acbfe40.chunk.js.map