(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),o=a.n(r),s=(a(15),a(4)),c=a(5),i=a(7),h=a(6),u=a(1),d=a(8),m=(a(16),a(17),function(e){var t=e.words;return l.a.createElement("div",{className:"words",dangerouslySetInnerHTML:{__html:t}})}),g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(h.a)(t).call(this,e))).state={},a.handleChangeWords=a.handleChangeWords.bind(Object(u.a)(a)),a.handleChangeSector=a.handleChangeSector.bind(Object(u.a)(a)),a.handleChangeJob=a.handleChangeJob.bind(Object(u.a)(a)),a.handleChangeAge=a.handleChangeAge.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleChangeWords",value:function(e){var t=e.target.value,a=t.replace(/\r?\n/g,"<br>");this.setState({words:t,words_html:a}),console.log(this.state)}},{key:"handleChangeSector",value:function(e){var t=e.target.value;this.setState({sector:t})}},{key:"handleChangeJob",value:function(e){var t=e.target.value;this.setState({job:t})}},{key:"handleChangeAge",value:function(e){var t=e.target.value;this.setState({age:t})}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"\u8a00\u8449\u305f\u3061\u30e1\u30fc\u30ab\u30fc"),l.a.createElement("div",{className:"input-field"},l.a.createElement("label",null,"\u8a00\u8449"),l.a.createElement("textarea",{name:"words",value:this.state.words,onChange:function(t){return e.handleChangeWords(t)},placeholder:"here"}),l.a.createElement("br",null),l.a.createElement("label",null,"\u696d\u7a2e"),l.a.createElement("input",{type:"text",value:this.state.sector,onChange:function(t){return e.handleChangeSector(t)},placeholder:"sector"}),l.a.createElement("br",null),l.a.createElement("label",null,"\u8077\u7a2e"),l.a.createElement("input",{type:"text",value:this.state.job,onChange:function(t){return e.handleChangeJob(t)},placeholder:"job"}),l.a.createElement("br",null),l.a.createElement("label",null,"\u5e74\u9f62"),l.a.createElement("select",{value:this.state.age,onChange:function(t){return e.handleChangeAge(t)}},l.a.createElement("option",{value:""}),l.a.createElement("option",{value:"10"},"10\u4ee3"),l.a.createElement("option",{value:"20"},"20\u4ee3"),l.a.createElement("option",{value:"30"},"30\u4ee3"),l.a.createElement("option",{value:"40"},"40\u4ee3"))),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"title"},"\u30ac\u30c1\u30cb\u30fc\u30c8\u306e\u8a00\u8449\u305f\u3061"),l.a.createElement("div",{id:"capture"},l.a.createElement(m,{words:this.state.words_html}),l.a.createElement("div",{className:"user-info"},l.a.createElement("span",{className:"sector"},this.state.sector),this.state.sector&&this.state.job&&l.a.createElement("span",null,"\uff0f"),l.a.createElement("span",{className:"job"},this.state.job),this.state.job&&this.state.age&&l.a.createElement("span",null,"\u30fb"),this.state.age&&l.a.createElement("span",{className:"age"},l.a.createElement("span",{className:"text-combine"},this.state.age),"\u4ee3")))))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.13268f81.chunk.js.map