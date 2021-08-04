(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={Form:"ContactForm_Form__LlsUJ"}},12:function(t,e,n){t.exports={Filter:"ContactFilter_Filter__3U-mu"}},13:function(t,e,n){t.exports={ContactItem:"ContactItem_ContactItem__2XNZL"}},14:function(t,e,n){t.exports={ContactList:"ContactList_ContactList__30RLM"}},15:function(t,e,n){t.exports={Container:"App_Container__sGwND"}},21:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(8),r=n.n(o),s=(n(21),n(16)),i=n(3),u=n(4),l=n(6),b=n(5),h=n(9),m=n(10),j=n.n(m),d=n(11),f=n.n(d),p=n(0),C=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.onChange=function(e){t.setState(Object(h.a)({},e.currentTarget.name,e.currentTarget.value))},t.addContact=function(e){e.preventDefault();var n={name:t.state.name,number:t.state.number,id:j.a.generate()};t.props.onSubmit(n),t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("form",{className:f.a.Form,onSubmit:this.addContact,children:[Object(p.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.onChange}),Object(p.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.onChange}),Object(p.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component),O=n(12),v=n.n(O),x=function(t){var e=t.value,n=t.onChange;return Object(p.jsx)("div",{className:v.a.Filter,children:Object(p.jsxs)("label",{children:["Find contacts by name",Object(p.jsx)("input",{type:"text",value:e,onChange:n})]})})},g=n(13),y=n.n(g),S=function(t){var e=t.contacts,n=t.onClick;return e.map((function(t){var e=t.name,a=t.number,c=t.id;return Object(p.jsxs)("li",{className:y.a.ContactItem,children:[Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{children:e}),Object(p.jsx)("span",{children:a})]}),Object(p.jsx)("button",{onClick:function(){return n(c)},children:"Delete"})]},c)}))},_=n(14),k=n.n(_),F=function(t){var e=t.contacts,n=t.onClick;return Object(p.jsx)("ul",{className:k.a.ContactList,children:Object(p.jsx)(S,{contacts:e,onClick:n})})},w=n(15),A=n.n(w),L=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.onSubmit=function(e){var n=t.state.contacts.find((function(t){return t.name===e.name}));console.log(n),void 0===n?t.setState((function(t){return{contacts:[e].concat(Object(s.a)(t.contacts))}})):alert("".concat(e.name," is already in contacts"))},t.removeContact=function(e){var n=t.state.contacts.filter((function(t){return t.id!==e}));t.setState({contacts:n})},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter,e=this.state.filter.toLowerCase(),n=this.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e)}));return Object(p.jsxs)("div",{className:A.a.Container,children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsx)(C,{onSubmit:this.onSubmit}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(x,{value:t,onChange:this.changeFilter}),Object(p.jsx)(F,{contacts:n,onClick:this.removeContact})]})}}]),n}(a.Component);r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(L,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.0d20b41b.chunk.js.map