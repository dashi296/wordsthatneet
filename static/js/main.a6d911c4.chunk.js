(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(19)},16:function(e,t,a){},17:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),o=a.n(r),c=(a(16),a(4)),s=a(5),i=a(8),u=a(6),h=a(1),d=a(9),m=(a(17),a(18),a(7)),g=a.n(m),v=function(e){var t=e.words;return l.a.createElement("div",{className:"words",dangerouslySetInnerHTML:{__html:t}})},E=function(e){function t(e){var a;Object(c.a)(this,t),a=Object(i.a)(this,Object(u.a)(t).call(this,e));var n=new Date,l=n.getFullYear(),r=("0"+(n.getMonth()+1)).slice(-2),o=("0"+n.getDay()).slice(-2);return a.state={year:l,month:r,day:o,image:""},a.handleChangeWords=a.handleChangeWords.bind(Object(h.a)(a)),a.handleChangeSector=a.handleChangeSector.bind(Object(h.a)(a)),a.handleChangeJob=a.handleChangeJob.bind(Object(h.a)(a)),a.handleChangeAge=a.handleChangeAge.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handleChangeWords",value:function(e){var t=e.target.value,a=t.replace(/\r?\n/g,"<br>");this.setState({words:t,words_html:a})}},{key:"handleChangeSector",value:function(e){var t=e.target.value;this.setState({sector:t})}},{key:"handleChangeJob",value:function(e){var t=e.target.value;this.setState({job:t})}},{key:"handleChangeAge",value:function(e){var t=e.target.value;this.setState({age:t})}},{key:"downloadImage",value:function(){window.scrollTo(0,0),g()(document.querySelector("#container")).then(function(e){var t=document.createElement("a");t.href=e.toDataURL("image/png"),t.download="words.png",t.click()})}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"heading"},"\u50cd\u304b\u306a\u3044\u8a00\u8449\u305f\u3061\u30e1\u30fc\u30ab\u30fc"),l.a.createElement("div",{className:"input-field"},l.a.createElement("label",null,"\u8a00\u8449"),l.a.createElement("textarea",{name:"words",value:this.state.words,onChange:function(t){return e.handleChangeWords(t)},placeholder:"\u3053\u3068\u3070"}),l.a.createElement("br",null),l.a.createElement("label",null,"\u696d\u7a2e"),l.a.createElement("input",{type:"text",value:this.state.sector,onChange:function(t){return e.handleChangeSector(t)},placeholder:"\u696d\u7a2e"}),l.a.createElement("br",null),l.a.createElement("label",null,"\u8077\u7a2e"),l.a.createElement("input",{type:"text",value:this.state.job,onChange:function(t){return e.handleChangeJob(t)},placeholder:"\u8077\u7a2e"}),l.a.createElement("br",null),l.a.createElement("label",null,"\u5e74\u9f62"),l.a.createElement("select",{value:this.state.age,onChange:function(t){return e.handleChangeAge(t)}},l.a.createElement("option",{value:""}),l.a.createElement("option",{value:"10"},"10\u4ee3"),l.a.createElement("option",{value:"20"},"20\u4ee3"),l.a.createElement("option",{value:"30"},"30\u4ee3"),l.a.createElement("option",{value:"40"},"40\u4ee3"),l.a.createElement("option",{value:"50"},"50\u4ee3"),l.a.createElement("option",{value:"60"},"60\u4ee3"),l.a.createElement("option",{value:"70"},"70\u4ee3"),l.a.createElement("option",{value:"80"},"80\u4ee3"),l.a.createElement("option",{value:"90"},"90\u4ee3")),l.a.createElement("input",{type:"submit",value:"Download",onClick:function(){return e.downloadImage()}})),l.a.createElement("div",{id:"container"},l.a.createElement("div",{className:"title"},"\u50cd\u304b\u306a\u3044\u8a00\u8449\u305f\u3061"),l.a.createElement("div",{id:"canvas-container"},l.a.createElement("div",{id:"canvas"},l.a.createElement(v,{words:this.state.words_html}),l.a.createElement("div",{className:"user-info"},l.a.createElement("span",{className:"sector"},this.state.sector),this.state.sector&&this.state.job&&l.a.createElement("span",null,"\uff0f"),l.a.createElement("span",{className:"job"},this.state.job),this.state.job&&this.state.age&&l.a.createElement("span",null,"\u30fb"),this.state.age&&l.a.createElement("span",{className:"age"},l.a.createElement("span",{className:"text-combine"},this.state.age),"\u4ee3"))),l.a.createElement("div",{className:"date"},this.state.year,". ",this.state.month,". ",this.state.day))))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.a6d911c4.chunk.js.map