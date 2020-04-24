(this["webpackJsonptest-3d"]=this["webpackJsonptest-3d"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(7),o=n.n(i),c=(n(13),n(2)),l=n(3),u=n(5),s=n(4),d=(n(14),n(1)),f=function(t){Object(u.a)(n,t);var e=Object(s.a)(n);function n(t){var a;return Object(c.a)(this,n),(a=e.call(this,t)).state={d3Data:""},a.ref=r.a.createRef(),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.createGraph(this.props.dataUrl)}},{key:"componentDidUpdate",value:function(t){t.dataUrl!==this.props.dataUrl&&(console.log("url changed"),this.createGraph(this.props.dataUrl))}},{key:"createGraph",value:function(t){var e=window.innerWidth,n=window.innerHeight,a=Math.min(e,n)/2-5,r=(d.format(",d"),d.scaleLinear().range([0,2*Math.PI]).clamp(!0)),i=d.scaleSqrt().range([.1*a,a]),o=[["#F2DA57","#F6B656","#E25A42","#DCBDCF","#B396AD","#B0CBDB","#33B6D0","#7ABFCC","#C8D7A1","#A0B700"],["#E3BA22","#E58429","#BD2D28","#D15A86","#8E6C8A","#6B99A1","#42A5B3","#0F8C79","#6BBBA1","#5C8100"],["#B08B12","#BA5F06","#8C3B00","#6D191B","#842854","#5F7186","#193556","#137B80","#144847","#254E00"]].map((function(t){return t.reverse()})).reduce((function(t,e){return t.concat(e)})),c=d.scaleOrdinal(o),l=d.partition(),u=d.arc().startAngle((function(t){return r(t.x0)})).endAngle((function(t){return r(t.x1)})).innerRadius((function(t){return Math.max(0,i(t.y0))})).outerRadius((function(t){return Math.max(0,i(t.y1))})),s=function(t){var e=Math.PI/2,n=[r(t.x0)-e,r(t.x1)-e],a=Math.max(0,(i(t.y0)+i(t.y1))/2),o=(n[1]+n[0])/2,c=o>0&&o<Math.PI;c&&n.reverse();var l=d.path();return l.arc(0,0,a,n[0],n[1],c),l.toString()},f=function(t){var e=r(t.x1)-r(t.x0),n=Math.max(0,(i(t.y0)+i(t.y1))/2)*e;return 4*t.data.name.length<n},h=d.select(this.ref.current).append("svg").style("width","99vw").style("height","95vh").attr("viewBox","".concat(-e/2," ").concat(-n/2," ").concat(e," ").concat(n)).on("click",(function(){return m()}));function m(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{x0:0,x1:1,y0:0,y1:1},e=h.transition().duration(750).tween("scale",(function(){var e=d.interpolate(r.domain(),[t.x0,t.x1]),n=d.interpolate(i.domain(),[t.y0,1]);return function(t){r.domain(e(t)),i.domain(n(t))}}));function n(t){h.selectAll(".slice").filter((function(e){return e===t})).each((function(t){this.parentNode.appendChild(this),t.parent&&n(t.parent)}))}e.selectAll("path.main-arc").attrTween("d",(function(t){return function(){return u(t)}})),e.selectAll("path.hidden-arc").attrTween("d",(function(t){return function(){return s(t)}})),e.selectAll("text").attrTween("display",(function(t){return function(){return f(t)?null:"none"}})),n(t)}d.json(t,(function(t,e){if(t)throw t;(e=d.hierarchy(e)).sum((function(t){return t.size}));var n=h.selectAll("g.slice").data(l(e).descendants());n.exit().remove();var a=n.enter().append("g").attr("class","slice").on("click",(function(t){d.event.stopPropagation(),m(t)}));a.append("title").attr("class","email").text((function(t){return t.data.mail})),a.append("path").attr("class","main-arc").style("fill",(function(t){return c((t.children?t:t.parent).data.name)})).attr("d",u),a.append("path").attr("class","hidden-arc").attr("id",(function(t,e){return"hiddenArc".concat(e)})).attr("d",s);var r=a.append("text").attr("display",(function(t){return f(t)?null:"none"})).attr("email",(function(t){return t.data.mail}));r.append("textPath").attr("startOffset","50%").attr("xlink:href",(function(t,e){return"#hiddenArc".concat(e)})).text((function(t){return t.data.name})).style("fill","none").style("stroke","#E5E2E0").style("stroke-width",12).style("stroke-linejoin","round"),r.append("textPath").attr("startOffset","50%").attr("xlink:href",(function(t,e){return"#hiddenArc".concat(e)})).text((function(t){return t.data.name}))})),this.setState()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{ref:this.ref,id:"d3node"}))}}]),n}(a.Component),h=function(t){Object(u.a)(n,t);var e=Object(s.a)(n);function n(t){var a;return Object(c.a)(this,n),(a=e.call(this,t)).changeUrl=function(){document.getElementById("d3node").innerHTML="",a.setState({dataUrl:"https://gist.githubusercontent.com/mbostock/4348373/raw/85f18ac90409caa5529b32156aa6e71cf985263f/flare.json"})},a.clearBox=function(){document.getElementById("d3node").innerHTML="",a.setState({dataUrl:"https://gist.githubusercontent.com/gubiithefish/b1c5f9046dfe9f91f65c4f126bf35645/raw/2fd925105dc46ec000dab28f2b181e763b6856cb/lol.json"})},a.lol=function(){console.log(document.getElementsByClassName("email")[0].innerHTML)},a.visibleMailsToConsole=function(){var t=document.querySelectorAll('text[email][display]:not([display="none"])'),e="";[].forEach.call(t,(function(t){var n="<p>"+t.attributes[1].value;e+=n+="</p>"})),document.getElementById("mainz").innerHTML+=e},a.clearMailBox=function(){document.getElementById("mainz").innerHTML=""},a.mikkuelsprogram=function(){for(var t=0;t<2737;t++)console.log("n\xe6")},a.state={dataUrl:"https://gist.githubusercontent.com/gubiithefish/b1c5f9046dfe9f91f65c4f126bf35645/raw/2fd925105dc46ec000dab28f2b181e763b6856cb/lol.json"},a}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return t.changeUrl()}},"Example1"),r.a.createElement("button",{onClick:function(){return t.clearBox()}},"Example2"),r.a.createElement("button",{onClick:function(){return t.lol()}},"count"),r.a.createElement("button",{onClick:function(){return t.mikkuelsprogram()}},"Done"),r.a.createElement("button",{onClick:function(){return t.visibleMailsToConsole()}},"Log visible emails"),r.a.createElement("button",{onClick:function(){return t.clearMailBox()}},"Clear mails"),r.a.createElement(f,{dataUrl:this.state.dataUrl}),r.a.createElement("main",{id:"mainz"}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},8:function(t,e,n){t.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.5c5dda38.chunk.js.map