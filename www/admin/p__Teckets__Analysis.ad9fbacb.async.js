(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"/yfR":function(T,F,u){T.exports={field:"field___3d5SQ",label:"label___1PiKH",number:"number___wSITI"}},"26vb":function(T,F,u){T.exports={timelineChart:"timelineChart___e1_9Q"}},"5m+9":function(T,F,u){T.exports={pie:"pie___2FHxA",chart:"chart___1V0pS",hasLegend:"hasLegend___BKZEf",legend:"legend___2redd",dot:"dot___r_2tr",line:"line___3e0v_",legendTitle:"legendTitle___2TQNG",percent:"percent___2nP2d",value:"value___Rrle2",title:"title___OXOya",total:"total___WNr_v",legendBlock:"legendBlock___2ruAL"}},"8gpn":function(T,F,u){T.exports={chartCard:"chartCard___1W40O",chartTop:"chartTop___1K49p",chartTopMargin:"chartTopMargin___fV-YY",chartTopHasMargin:"chartTopHasMargin___1ZOT3",metaWrap:"metaWrap___1kn95",avatar:"avatar___1d2c8",meta:"meta___Ji2AK",action:"action___3NaPX",total:"total___3bw3b",content:"content___LKr5z",contentFixed:"contentFixed___3ZiDb",footer:"footer___R9qp0",footerMargin:"footerMargin___b-qJ5"}},"92CX":function(T,F,u){T.exports={iconGroup:"iconGroup___1mrAO",anticon:"anticon___1w4qY",rankingList:"rankingList___39eMK",rankingItemNumber:"rankingItemNumber___2EHhK",active:"active___2OQ0W",rankingItemTitle:"rankingItemTitle___VG5w0",salesExtra:"salesExtra___1iemV",currentDate:"currentDate___3jduv",salesCard:"salesCard___3BPfw",salesBar:"salesBar___2LvY0",salesRank:"salesRank___3sFSH",salesCardExtra:"salesCardExtra___262xf",salesTypeRadio:"salesTypeRadio___38RWG",offlineCard:"offlineCard___2fKW1",trendText:"trendText___GM6-d",rankingTitle:"rankingTitle___2k4RL",salesExtraWrap:"salesExtraWrap___2EVVP"}},"9ADO":function(T,F,u){T.exports={trendItem:"trendItem___2JvE8",up:"up___1PIfi",down:"down___1h_yi",trendItemGrey:"trendItemGrey___3Cqjv",reverseColor:"reverseColor___3ZEpQ"}},HtmM:function(T,F,u){T.exports={miniProgress:"miniProgress___3oGw9",progressWrap:"progressWrap___2OdOG",progress:"progress___qXoUg",target:"target___wgwa5"}},J9u7:function(T,F,u){"use strict";u.r(F);var qa=u("14J3"),ce=u("BMrR"),et=u("jCWc"),X=u("kPKH"),H=u("fWQN"),z=u("mtLc"),B=u("yKVA"),G=u("879j"),W=u("q1tI"),a=u.n(W),Ve=u("FRQA"),M=u("9kvl"),at=u("T2oS"),Ye=u("W9HT"),Ue=function(){return a.a.createElement("div",{style:{paddingTop:100,textAlign:"center"}},a.a.createElement(Ye.a,{size:"large"}))},Ke=u("wd/R"),N=u.n(Ke);function Ae(v){return v*1<10?"0".concat(v):v}function de(v){var t=new Date,l=1e3*60*60*24;if(v==="today")return t.setHours(0),t.setMinutes(0),t.setSeconds(0),[N()(t),N()(t.getTime()+(l-1e3))];if(v==="week"){var e=t.getDay();t.setHours(0),t.setMinutes(0),t.setSeconds(0),e===0?e=6:e-=1;var r=t.getTime()-e*l;return[N()(r),N()(r+(7*l-1e3))]}var c=t.getFullYear();if(v==="month"){var i=t.getMonth(),n=N()(t).add(1,"months"),o=n.year(),d=n.month();return[N()("".concat(c,"-").concat(Ae(i+1),"-01 00:00:00")),N()(N()("".concat(o,"-").concat(Ae(d+1),"-01 00:00:00")).valueOf()-1e3)]}return[N()("".concat(c,"-01-01 00:00:00")),N()("".concat(c,"-12-31 23:59:59"))]}var Xe=u("92CX"),j=u.n(Xe),Qe=u("ZhIB"),ne=u.n(Qe),p=u("yP6+"),Je=u("9/5/"),ge=u.n(Je),_=u("0Owb");function ke(v){var t=v.style;t.height="100%";var l=parseInt("".concat(getComputedStyle(v).height),10),e=parseInt("".concat(getComputedStyle(v).paddingTop),10)+parseInt("".concat(getComputedStyle(v).paddingBottom),10);return l-e}function Fe(v){if(!v)return 0;var t=v,l=ke(t),e=t.parentNode;return e&&(l=ke(e)),l}function Ze(){return function(v){var t=function(l){Object(B.a)(r,l);var e=Object(G.a)(r);function r(){var c;Object(H.a)(this,r);for(var i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return c=e.call.apply(e,[this].concat(n)),c.state={computedHeight:0},c.root=void 0,c.handleRoot=function(d){c.root=d},c}return Object(z.a)(r,[{key:"componentDidMount",value:function(){var i=this.props.height;if(!i){var n=Fe(this.root);this.setState({computedHeight:n}),n<1&&(n=Fe(this.root),this.setState({computedHeight:n}))}}},{key:"render",value:function(){var i=this.props.height,n=this.state.computedHeight,o=i||n;return a.a.createElement("div",{ref:this.handleRoot},o>0&&a.a.createElement(v,Object(_.a)({},this.props,{height:o})))}}]),r}(a.a.Component);return t}}var I=Ze,_e=u("TirX"),re=u.n(_e),qe=function(v){Object(B.a)(l,v);var t=Object(G.a)(l);function l(){var e;Object(H.a)(this,l);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return e=t.call.apply(t,[this].concat(c)),e.state={autoHideXLabels:!1},e.root=void 0,e.node=void 0,e.resize=ge()(function(){if(!(!e.node||!e.node.parentNode)){var n=e.node.parentNode.clientWidth,o=e.props,d=o.data,m=d===void 0?[]:d,h=o.autoLabel,s=h===void 0?!0:h;if(!!s){var y=m.length*30,f=e.state.autoHideXLabels;n<=y?f||e.setState({autoHideXLabels:!0}):f&&e.setState({autoHideXLabels:!1})}}},500),e.handleRoot=function(n){e.root=n},e.handleRef=function(n){e.node=n},e}return Object(z.a)(l,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resize,{passive:!0})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize)}},{key:"render",value:function(){var r=this.props,c=r.height,i=c===void 0?1:c,n=r.title,o=r.forceFit,d=o===void 0?!0:o,m=r.data,h=r.color,s=h===void 0?"rgba(24, 144, 255, 0.85)":h,y=r.padding,f=this.state.autoHideXLabels,g={x:{type:"cat"},y:{min:0}},x=["x*y",function(D,b){return{name:D,value:b}}];return a.a.createElement("div",{className:re.a.chart,style:{height:i},ref:this.handleRoot},a.a.createElement("div",{ref:this.handleRef},n&&a.a.createElement("h4",{style:{marginBottom:20}},n),a.a.createElement(p.Chart,{scale:g,height:n?i-41:i,forceFit:d,data:m,padding:y||"auto"},a.a.createElement(p.Axis,{name:"x",title:!1,label:f?void 0:{},tickLine:f?void 0:{}}),a.a.createElement(p.Axis,{name:"y",min:0}),a.a.createElement(p.Tooltip,{showTitle:!1,crosshairs:!1}),a.a.createElement(p.Geom,{type:"interval",position:"x*y",color:s,tooltip:x}))))}}]),l}(W.Component),ye=I()(qe),tt=u("IzEo"),Ee=u("bx4M"),Ce=u("PpiC"),q=u("jrin"),ea=u("TSYQ"),ie=u.n(ea),aa=u("8gpn"),A=u.n(aa),ta=function(t){if(!t&&t!==0)return null;var l;switch(typeof t){case"undefined":l=null;break;case"function":l=a.a.createElement("div",{className:A.a.total},t());break;default:l=a.a.createElement("div",{className:A.a.total},t)}return l},na=function(v){Object(B.a)(l,v);var t=Object(G.a)(l);function l(){var e;Object(H.a)(this,l);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return e=t.call.apply(t,[this].concat(c)),e.renderContent=function(){var n=e.props,o=n.contentHeight,d=n.title,m=n.avatar,h=n.action,s=n.total,y=n.footer,f=n.children,g=n.loading;return g?!1:a.a.createElement("div",{className:A.a.chartCard},a.a.createElement("div",{className:ie()(A.a.chartTop,Object(q.a)({},A.a.chartTopMargin,!f&&!y))},a.a.createElement("div",{className:A.a.avatar},m),a.a.createElement("div",{className:A.a.metaWrap},a.a.createElement("div",{className:A.a.meta},a.a.createElement("span",{className:A.a.title},d),a.a.createElement("span",{className:A.a.action},h)),ta(s))),f&&a.a.createElement("div",{className:A.a.content,style:{height:o||"auto"}},a.a.createElement("div",{className:o&&A.a.contentFixed},f)),y&&a.a.createElement("div",{className:ie()(A.a.footer,Object(q.a)({},A.a.footerMargin,!f))},y))},e}return Object(z.a)(l,[{key:"render",value:function(){var r=this.props,c=r.loading,i=c===void 0?!1:c,n=r.contentHeight,o=r.title,d=r.avatar,m=r.action,h=r.total,s=r.footer,y=r.children,f=Object(Ce.a)(r,["loading","contentHeight","title","avatar","action","total","footer","children"]);return a.a.createElement(Ee.a,Object(_.a)({loading:i,bodyStyle:{padding:"20px 24px 8px 24px"}},f),this.renderContent())}}]),l}(a.a.Component),ue=na,ra=u("/yfR"),xe=u.n(ra),ia=function(t){var l=t.label,e=t.value,r=Object(Ce.a)(t,["label","value"]);return a.a.createElement("div",Object(_.a)({className:xe.a.field},r),a.a.createElement("span",{className:xe.a.label},l),a.a.createElement("span",{className:xe.a.number},e))},he=ia,Oe=p.Guide.Arc,oa=p.Guide.Html,be=p.Guide.Line,la=function(t){switch(t){case"2":return"\u5DEE";case"4":return"\u4E2D";case"6":return"\u826F";case"8":return"\u4F18";default:return""}};p.Shape.registerShape&&p.Shape.registerShape("point","pointer",{drawShape:function(t,l){var e=t.points[0];e=this.parsePoint(e);var r=this.parsePoint({x:0,y:0});return l.addShape("line",{attrs:{x1:r.x,y1:r.y,x2:e.x,y2:e.y,stroke:t.color,lineWidth:2,lineCap:"round"}}),l.addShape("circle",{attrs:{x:r.x,y:r.y,r:6,stroke:t.color,lineWidth:3,fill:"#fff"}})}});for(var sa=function(t){var l=t.title,e=t.height,r=e===void 0?1:e,c=t.percent,i=t.forceFit,n=i===void 0?!0:i,o=t.formatter,d=o===void 0?la:o,m=t.color,h=m===void 0?"#2F9CFF":m,s=t.bgColor,y=s===void 0?"#F0F2F5":s,f={value:{type:"linear",min:0,max:10,tickCount:6,nice:!0}},g=[{value:c/10}],x=function(){return`
    <div style="width: 300px;text-align: center;font-size: 12px!important;">
      <div style="font-size: 14px; color: rgba(0,0,0,0.43);margin: 0;">`.concat(l,`</div>
      <div style="font-size: 24px;color: rgba(0,0,0,0.85);margin: 0;">
        `).concat((g[0].value*10).toFixed(2),`%
      </div>
    </div>`)},D={fontSize:12,fill:"rgba(0, 0, 0, 0.65)",textAlign:"center"};return a.a.createElement(p.Chart,{height:r,data:g,scale:f,padding:[-16,0,16,0],forceFit:n},a.a.createElement(p.Coord,{type:"polar",startAngle:-1.25*Math.PI,endAngle:.25*Math.PI,radius:.8}),a.a.createElement(p.Axis,{name:"1",line:void 0}),a.a.createElement(p.Axis,{line:void 0,tickLine:void 0,subTickLine:void 0,name:"value",zIndex:2,label:{offset:-12,formatter:d,textStyle:D}}),a.a.createElement(p.Guide,null,a.a.createElement(be,{start:[3,.905],end:[3,.85],lineStyle:{stroke:h,lineDash:void 0,lineWidth:2}}),a.a.createElement(be,{start:[5,.905],end:[5,.85],lineStyle:{stroke:h,lineDash:void 0,lineWidth:3}}),a.a.createElement(be,{start:[7,.905],end:[7,.85],lineStyle:{stroke:h,lineDash:void 0,lineWidth:3}}),a.a.createElement(Oe,{start:[0,.965],end:[10,.965],style:{stroke:y,lineWidth:10}}),a.a.createElement(Oe,{start:[0,.965],end:[g[0].value,.965],style:{stroke:h,lineWidth:10}}),a.a.createElement(oa,{position:["50%","95%"],html:x()})),a.a.createElement(p.Geom,{line:!1,type:"point",position:"value*1",shape:"pointer",color:h,active:!1}))},ca=I()(sa),Q=u("k1fw"),da=function(t){var l=t.height,e=l===void 0?1:l,r=t.data,c=r===void 0?[]:r,i=t.forceFit,n=i===void 0?!0:i,o=t.color,d=o===void 0?"rgba(24, 144, 255, 0.2)":o,m=t.borderColor,h=m===void 0?"#1089ff":m,s=t.scale,y=s===void 0?{x:{},y:{}}:s,f=t.borderWidth,g=f===void 0?2:f,x=t.line,D=t.xAxis,b=t.yAxis,S=t.animate,E=S===void 0?!0:S,C=[36,5,30,5],k={x:Object(Q.a)({type:"cat",range:[0,1]},y.x),y:Object(Q.a)({min:0},y.y)},V=["x*y",function(J,L){return{name:J,value:L}}],$=e+54;return a.a.createElement("div",{className:re.a.miniChart,style:{height:e}},a.a.createElement("div",{className:re.a.chartContent},e>0&&a.a.createElement(p.Chart,{animate:E,scale:k,height:$,forceFit:n,data:c,padding:C},a.a.createElement(p.Axis,Object(_.a)({key:"axis-x",name:"x",label:null,line:null,tickLine:null,grid:null},D)),a.a.createElement(p.Axis,Object(_.a)({key:"axis-y",name:"y",label:null,line:null,tickLine:null,grid:null},b)),a.a.createElement(p.Tooltip,{showTitle:!1,crosshairs:!1}),a.a.createElement(p.Geom,{type:"area",position:"x*y",color:d,tooltip:V,shape:"smooth",style:{fillOpacity:1}}),x?a.a.createElement(p.Geom,{type:"line",position:"x*y",shape:"smooth",color:h,size:g,tooltip:!1}):a.a.createElement("span",{style:{display:"none"}}))))},We=I()(da),ua=function(t){var l=t.height,e=l===void 0?0:l,r=t.forceFit,c=r===void 0?!0:r,i=t.color,n=i===void 0?"#1890FF":i,o=t.data,d=o===void 0?[]:o,m={x:{type:"cat"},y:{min:0}},h=[36,5,30,5],s=["x*y",function(f,g){return{name:f,value:g}}],y=e+54;return a.a.createElement("div",{className:re.a.miniChart,style:{height:e}},a.a.createElement("div",{className:re.a.chartContent},a.a.createElement(p.Chart,{scale:m,height:y,forceFit:c,data:d,padding:h},a.a.createElement(p.Tooltip,{showTitle:!1,crosshairs:!1}),a.a.createElement(p.Geom,{type:"interval",position:"x*y",color:n,tooltip:s}))))},Pe=I()(ua),nt=u("5Dmo"),ha=u("3S7+"),ma=u("HtmM"),me=u.n(ma),va=function(t){var l=t.targetLabel,e=t.target,r=t.color,c=r===void 0?"rgb(19, 194, 194)":r,i=t.strokeWidth,n=t.percent;return a.a.createElement("div",{className:me.a.miniProgress},a.a.createElement(ha.a,{title:l},a.a.createElement("div",{className:me.a.target,style:{left:e?"".concat(e,"%"):void 0}},a.a.createElement("span",{style:{backgroundColor:c||void 0}}),a.a.createElement("span",{style:{backgroundColor:c||void 0}}))),a.a.createElement("div",{className:me.a.progressWrap},a.a.createElement("div",{className:me.a.progress,style:{backgroundColor:c||void 0,width:n?"".concat(n,"%"):void 0,height:i||void 0}})))},pa=va,rt=u("/zsF"),fa=u("PArb"),je=u("cQSq"),$e=u.n(je),ga=u("Jssm"),ya=u.n(ga),Ea=u("5m+9"),P=u.n(Ea),Ca=function(v){Object(B.a)(l,v);var t=Object(G.a)(l);function l(){var e;Object(H.a)(this,l);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return e=t.call.apply(t,[this].concat(c)),e.state={legendData:[],legendBlock:!1},e.requestRef=void 0,e.root=void 0,e.chart=void 0,e.resize=ge()(function(){var n=e.props.hasLegend,o=e.state.legendBlock;if(!n||!e.root){window.removeEventListener("resize",e.resize);return}e.root&&e.root.parentNode&&e.root.parentNode.clientWidth<=380?o||e.setState({legendBlock:!0}):o&&e.setState({legendBlock:!1})},400),e.getG2Instance=function(n){e.chart=n,requestAnimationFrame(function(){e.getLegendData(),e.resize()})},e.getLegendData=function(){if(!!e.chart){var n=e.chart.getAllGeoms()[0];if(!!n){var o=n.get("dataArray")||[],d=o.map(function(m){var h=m[0]._origin;return h.color=m[0].color,h.checked=!0,h});e.setState({legendData:d})}}},e.handleRoot=function(n){e.root=n},e.handleLegendClick=function(n,o){var d=n;d.checked=!d.checked;var m=e.state.legendData;m[o]=d;var h=m.filter(function(s){return s.checked}).map(function(s){return s.x});e.chart&&e.chart.filter("x",function(s){return h.indexOf("".concat(s))>-1}),e.setState({legendData:m})},e}return Object(z.a)(l,[{key:"componentDidMount",value:function(){var r=this;window.addEventListener("resize",function(){r.requestRef=requestAnimationFrame(function(){return r.resize()})},{passive:!0})}},{key:"componentDidUpdate",value:function(r){var c=this.props.data;c!==r.data&&this.getLegendData()}},{key:"componentWillUnmount",value:function(){this.requestRef&&window.cancelAnimationFrame(this.requestRef),window.removeEventListener("resize",this.resize),this.resize&&this.resize.cancel()}},{key:"render",value:function(){var r,c=this,i=this.props,n=i.valueFormat,o=i.subTitle,d=i.total,m=i.hasLegend,h=m===void 0?!1:m,s=i.className,y=i.style,f=i.height,g=f===void 0?0:f,x=i.forceFit,D=x===void 0?!0:x,b=i.percent,S=i.color,E=i.inner,C=E===void 0?.75:E,k=i.animate,V=k===void 0?!0:k,$=i.colors,J=i.lineWidth,L=J===void 0?1:J,ee=this.state,ve=ee.legendData,pe=ee.legendBlock,ae=ie()(P.a.pie,s,(r={},Object(q.a)(r,P.a.hasLegend,!!h),Object(q.a)(r,P.a.legendBlock,pe),r)),Y=this.props,Ne=Y.data,oe=Y.selected,Z=oe===void 0?!0:oe,w=Y.tooltip,le=w===void 0?!0:w,U=Ne||[],R=Z,K=le,fe=$;U=U||[],R=R||!0,K=K||!0;var te,Ja={x:{type:"cat",range:[0,1]},y:{min:0}};(b||b===0)&&(R=!1,K=!1,te=function(se){return se==="\u5360\u6BD4"?S||"rgba(24, 144, 255, 0.85)":"#F0F2F5"},U=[{x:"\u5360\u6BD4",y:parseFloat("".concat(b))},{x:"\u53CD\u6BD4",y:100-parseFloat("".concat(b))}]);var Za=["x*percent",function(O,se){return{name:O,value:"".concat((se*100).toFixed(2),"%")}}],_a=[12,0,12,0],Ie=new je.DataView;return Ie.source(U).transform({type:"percent",field:"y",dimension:"x",as:"percent"}),a.a.createElement("div",{ref:this.handleRoot,className:ae,style:y},a.a.createElement(ya.a,{maxFontSize:25},a.a.createElement("div",{className:P.a.chart},a.a.createElement(p.Chart,{scale:Ja,height:g,forceFit:D,data:Ie,padding:_a,animate:V,onGetG2Instance:this.getG2Instance},!!K&&a.a.createElement(p.Tooltip,{showTitle:!1}),a.a.createElement(p.Coord,{type:"theta",innerRadius:C}),a.a.createElement(p.Geom,{style:{lineWidth:L,stroke:"#fff"},tooltip:K?Za:void 0,type:"intervalStack",position:"percent",color:["x",b||b===0?te:fe],selected:R})),(o||d)&&a.a.createElement("div",{className:P.a.total},o&&a.a.createElement("h4",{className:"pie-sub-title"},o),d&&a.a.createElement("div",{className:"pie-stat"},typeof d=="function"?d():d)))),h&&a.a.createElement("ul",{className:P.a.legend},ve.map(function(O,se){return a.a.createElement("li",{key:O.x,onClick:function(){return c.handleLegendClick(O,se)}},a.a.createElement("span",{className:P.a.dot,style:{backgroundColor:O.checked?O.color:"#aaa"}}),a.a.createElement("span",{className:P.a.legendTitle},O.x),a.a.createElement(fa.a,{type:"vertical"}),a.a.createElement("span",{className:P.a.percent},"".concat((Number.isNaN(O.percent)?0:O.percent*100).toFixed(2),"%")),a.a.createElement("span",{className:P.a.value},n?n(O.y):O.y))})))}}]),l}(W.Component),Le=I()(Ca),xa=u("tJVT"),ba=u("Kd4N"),Ta=u.n(ba),Sa="https://gw.alipayobjects.com/zos/rmsportal/gWyeGLCdFFRavBGIDzWk.png",Da=function(v){Object(B.a)(l,v);var t=Object(G.a)(l);function l(){var e;Object(H.a)(this,l);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return e=t.call.apply(t,[this].concat(c)),e.state={dv:null,height:0,width:0},e.isUnmount=!1,e.requestRef=0,e.root=void 0,e.imageMask=void 0,e.resize=function(){e.requestRef=requestAnimationFrame(function(){e.renderChart(e.props)})},e.saveRootRef=function(n){e.root=n},e.initTagCloud=function(){function n(o){return Object(Q.a)(Object(Q.a)({},o.style),{},{fillOpacity:o.opacity,fontSize:o.origin._origin.size,rotate:o.origin._origin.rotate,text:o.origin._origin.text,textAlign:"center",fontFamily:o.origin._origin.font,fill:o.color,textBaseline:"Alphabetic"})}p.Shape.registerShape("point","cloud",{drawShape:function(d,m){var h=n(d);return m.addShape("text",{attrs:Object(Q.a)(Object(Q.a)({},h),{},{x:d.x,y:d.y})})}})},e.renderChart=ge()(function(n){var o=n||e.props,d=o.data,m=o.height;if(!(d.length<1||!e.root)){var h=m,s=e.root.offsetWidth,y=function(){var g=new $e.a.View().source(d),x=g.range("value"),D=Object(xa.a)(x,2),b=D[0],S=D[1];g.transform({type:"tag-cloud",fields:["name","value"],imageMask:e.imageMask,font:"Verdana",size:[s,h],padding:0,timeInterval:5e3,rotate:function(){return 0},fontSize:function(C){var k=Math.pow((C.value-b)/(S-b),2);return k*(17.5-5)+5}}),!e.isUnmount&&e.setState({dv:g,width:s,height:h})};e.imageMask?y():(e.imageMask=new Image,e.imageMask.crossOrigin="",e.imageMask.src=Sa,e.imageMask.onload=y)}},500),e}return Object(z.a)(l,[{key:"componentDidMount",value:function(){var r=this;requestAnimationFrame(function(){r.initTagCloud(),r.renderChart(r.props)}),window.addEventListener("resize",this.resize,{passive:!0})}},{key:"componentDidUpdate",value:function(r){var c=this.props.data;r&&JSON.stringify(r.data)!==JSON.stringify(c)&&this.renderChart(this.props)}},{key:"componentWillUnmount",value:function(){this.isUnmount=!0,window.cancelAnimationFrame(this.requestRef),window.removeEventListener("resize",this.resize)}},{key:"render",value:function(){var r=this.props,c=r.className,i=r.height,n=this.state,o=n.dv,d=n.width,m=n.height;return a.a.createElement("div",{className:ie()(Ta.a.tagCloud,c),style:{width:"100%",height:i},ref:this.saveRootRef},o&&a.a.createElement(p.Chart,{width:d,height:m,data:o,padding:0,scale:{x:{nice:!1},y:{nice:!1}}},a.a.createElement(p.Tooltip,{showTitle:!1}),a.a.createElement(p.Coord,{reflect:"y"}),a.a.createElement(p.Geom,{type:"point",position:"x*y",color:"text",shape:"cloud",tooltip:["text*value",function(s,y){return{name:s,value:y}}]})))}}]),l}(W.Component),Ma=I()(Da),we=u("oBTY"),Na=u("1Gbu"),Aa=u.n(Na),ka=u("26vb"),Fa=u.n(ka),Oa=function(t){var l=t.title,e=t.height,r=e===void 0?400:e,c=t.padding,i=c===void 0?[60,20,40,40]:c,n=t.titleMap,o=n===void 0?{y1:"y1",y2:"y2"}:n,d=t.borderWidth,m=d===void 0?2:d,h=t.data,s=Array.isArray(h)?h:[{x:0,y1:0,y2:0}];s.sort(function(S,E){return S.x-E.x});var y;s[0]&&s[0].y1&&s[0].y2&&(y=Math.max(Object(we.a)(s).sort(function(S,E){return E.y1-S.y1})[0].y1,Object(we.a)(s).sort(function(S,E){return E.y2-S.y2})[0].y2));var f=new $e.a({state:{start:s[0].x,end:s[s.length-1].x}}),g=f.createView();g.source(s).transform({type:"filter",callback:function(E){var C=E.x;return C<=f.state.end&&C>=f.state.start}}).transform({type:"map",callback:function(E){var C=Object(Q.a)({},E);return C[o.y1]=E.y1,C[o.y2]=E.y2,C}}).transform({type:"fold",fields:[o.y1,o.y2],key:"key",value:"value"});var x={type:"time",tickInterval:60*60*1e3,mask:"HH:mm",range:[0,1]},D={x,value:{max:y,min:0}},b=function(){return a.a.createElement(Aa.a,{padding:[0,i[1]+20,0,i[3]],width:"auto",height:26,xAxis:"x",yAxis:"y1",scales:{x},data:s,start:f.state.start,end:f.state.end,backgroundChart:{type:"line"},onChange:function(C){var k=C.startValue,V=C.endValue;f.setState("start",k),f.setState("end",V)}})};return a.a.createElement("div",{className:Fa.a.timelineChart,style:{height:r+30}},a.a.createElement("div",null,l&&a.a.createElement("h4",null,l),a.a.createElement(p.Chart,{height:r,padding:i,data:g,scale:D,forceFit:!0},a.a.createElement(p.Axis,{name:"x"}),a.a.createElement(p.Tooltip,null),a.a.createElement(p.Legend,{name:"key",position:"top"}),a.a.createElement(p.Geom,{type:"line",position:"x*value",size:m,color:"key"})),a.a.createElement("div",{style:{marginRight:-20}},a.a.createElement(b,null))))},Wa=I()(Oa),Pa=u("OVKi"),Te=u.n(Pa),ja=function(v){Object(B.a)(l,v);var t=Object(G.a)(l);function l(){var e;Object(H.a)(this,l);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return e=t.call.apply(t,[this].concat(c)),e.state={radio:1},e.timer=0,e.root=null,e.node=null,e.resize=function(){if(e.root){var n=e.props.height,o=n===void 0?1:n,d=e.root.parentNode,m=d.offsetWidth;e.setState({radio:m<o?m/o:1})}},e}return Object(z.a)(l,[{key:"componentDidMount",value:function(){var r=this;this.renderChart(),this.resize(),window.addEventListener("resize",function(){requestAnimationFrame(function(){return r.resize()})},{passive:!0})}},{key:"componentDidUpdate",value:function(r){var c=this.props.percent;r.percent!==c&&this.renderChart("update")}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.timer),this.node&&(this.node.innerHTML=""),window.removeEventListener("resize",this.resize)}},{key:"renderChart",value:function(r){var c=this.props,i=c.percent,n=c.color,o=n===void 0?"#1890FF":n,d=i/100,m=this;if(cancelAnimationFrame(this.timer),!this.node||d!==0&&!d)return;var h=this.node,s=h.getContext("2d");if(!s)return;var y=h.width,f=h.height,g=y/2,x=2,D=g-x;s.beginPath(),s.lineWidth=x*2;for(var b=y-x,S=b/8,E=.2,C=E,k=x,V=0,$=0,J=.005,L=[],ee=g-x,ve=-(Math.PI/2),pe=!0,ae=ve;ae<ve+2*Math.PI;ae+=1/(8*Math.PI))L.push([g+ee*Math.cos(ae),g+ee*Math.sin(ae)]);var Y=L.shift();s.strokeStyle=o,s.moveTo(Y[0],Y[1]);function Ne(){if(!!s){s.beginPath(),s.save();for(var Z=[],w=k;w<=k+b;w+=20/b){var le=V+(k+w)/S,U=Math.sin(le)*C,R=w,K=2*D*(1-$)+(g-D)-S*U;s.lineTo(R,K),Z.push([R,K])}var fe=Z.shift();s.lineTo(k+b,f),s.lineTo(k,f),s.lineTo(fe[0],fe[1]);var te=s.createLinearGradient(0,0,0,f);te.addColorStop(0,"#ffffff"),te.addColorStop(1,o),s.fillStyle=te,s.fill(),s.restore()}}function oe(){if(!!s){if(s.clearRect(0,0,y,f),pe&&r!=="update")if(L.length){var Z=L.shift();s.lineTo(Z[0],Z[1]),s.stroke()}else pe=!1,s.lineTo(Y[0],Y[1]),s.stroke(),L=[],s.globalCompositeOperation="destination-over",s.beginPath(),s.lineWidth=x,s.arc(g,g,ee,0,2*Math.PI,!0),s.beginPath(),s.save(),s.arc(g,g,g-3*x,0,2*Math.PI,!0),s.restore(),s.clip(),s.fillStyle=o;else{if(d>=.85){if(C>E/4){var w=E*.01;C-=w}}else if(d<=.1){if(C<E*1.5){var le=E*.01;C+=le}}else{if(C<=E){var U=E*.01;C+=U}if(C>=E){var R=E*.01;C-=R}}d-$>0&&($+=J),d-$<0&&($-=J),V+=.07,Ne()}m.timer=requestAnimationFrame(oe)}}oe()}},{key:"render",value:function(){var r=this,c=this.state.radio,i=this.props,n=i.percent,o=i.title,d=i.height,m=d===void 0?1:d;return a.a.createElement("div",{className:Te.a.waterWave,ref:function(s){return r.root=s},style:{transform:"scale(".concat(c,")")}},a.a.createElement("div",{style:{width:m,height:m,overflow:"hidden"}},a.a.createElement("canvas",{className:Te.a.waterWaveCanvasWrapper,ref:function(s){return r.node=s},width:m*2,height:m*2})),a.a.createElement("div",{className:Te.a.text,style:{width:m}},o&&a.a.createElement("span",null,o),a.a.createElement("h4",null,n,"%")))}}]),l}(W.Component),$a=I()(ja),Re=function(t){return"\xA5 ".concat(ne()(t).format("0,0"))},it={yuan:Re,Bar:ye,Pie:Le,Gauge:ca,MiniBar:Pe,MiniArea:We,MiniProgress:pa,ChartCard:ue,Field:he,WaterWave:$a,TagCloud:Ma,TimelineChart:Wa},La=u("9ADO"),Se=u.n(La),wa=function(t){var l,e=t.colorful,r=e===void 0?!0:e,c=t.reverseColor,i=c===void 0?!1:c,n=t.children,o=t.className,d=Object(Ce.a)(t,["colorful","reverseColor","children","className"]),m=ie()(Se.a.trendItem,(l={},Object(q.a)(l,Se.a.trendItemGrey,!r),Object(q.a)(l,Se.a.reverseColor,i&&r),l),o);return a.a.createElement("div",Object(_.a)({},d,{className:m,title:typeof n=="string"?n:""}),a.a.createElement("span",null,n))},He=wa,Ra=function(v){Object(B.a)(l,v);var t=Object(G.a)(l);function l(){var e;Object(H.a)(this,l);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return e=t.call.apply(t,[this].concat(c)),e.main=null,e.renderToHtml=function(){var n=e.props.children;e.main&&(e.main.innerHTML=Re(n))},e}return Object(z.a)(l,[{key:"componentDidMount",value:function(){this.renderToHtml()}},{key:"componentDidUpdate",value:function(){this.renderToHtml()}},{key:"render",value:function(){var r=this;return a.a.createElement("span",{ref:function(i){r.main=i}})}}]),l}(a.a.Component),De={xs:24,sm:24,md:24,lg:8,xl:8,style:{marginBottom:24}},Ha=function(t){for(var l=[],e=0;e<t.length;e+=1)l.push({x:"".concat(Number(t[e].time),"\u6708"),y:t[e].num});return l},za=function(t){for(var l=[],e=0;e<t.length;e+=1)l.push({x:"".concat(Number(t[e].time),"\u6708"),y:t[e].pay});return l},Ba=function(t){var l=t.loading,e=t.visitData;return a.a.createElement(ce.a,{gutter:24,type:"flex"},a.a.createElement(X.a,De,a.a.createElement(ue,{bordered:!1,title:"\u5E74\u603B\u9500\u552E\u989D",loading:l,total:function(){return a.a.createElement(Ra,null,e&&e.total&&e.total.yearPrice?e.total.yearPrice:0)},footer:a.a.createElement(he,{label:"\u65E5\u5747\u9500\u552E\u989D",value:"\uFFE5".concat(ne()(e&&e.total&&e.total.yearPrice?e.total.yearPrice/365:0).format("0,0"))}),contentHeight:46},a.a.createElement(He,{style:{marginRight:16}},a.a.createElement(M.a,{id:"dashboardandanalysis.analysis.week",defaultMessage:"Weekly Changes"}),a.a.createElement("span",{className:j.a.trendText},e&&e.total&&e.total.weekTb?e.total.weekTb:0,"%")),a.a.createElement(He,null,a.a.createElement(M.a,{id:"dashboardandanalysis.analysis.day",defaultMessage:"Daily Changes"}),a.a.createElement("span",{className:j.a.trendText},e&&e.total&&e.total.todayTb?e.total.todayTb:0,"%")))),a.a.createElement(X.a,De,a.a.createElement(ue,{bordered:!1,loading:l,title:a.a.createElement(M.a,{id:"dashboardandanalysis.analysis.visits",defaultMessage:"Visits"}),total:ne()(e&&e.sales&&e.sales.total?e.sales.total:0).format("0,0"),footer:a.a.createElement(he,{label:"\u65E5\u9500\u552E\u91CF",value:ne()(e&&e.sales&&e.sales.total?e.sales.total/365:0).format("0,0")}),contentHeight:46},a.a.createElement(We,{color:"#975FE4",data:Ha(e.monthSales||[])}))),a.a.createElement(X.a,De,a.a.createElement(ue,{bordered:!1,loading:l,title:a.a.createElement(M.a,{id:"dashboardandanalysis.analysis.payments",defaultMessage:"Payments"}),total:ne()(e&&e.pay&&e.pay.total?e.pay.total:0).format("0,0"),footer:a.a.createElement(he,{label:a.a.createElement(M.a,{id:"dashboardandanalysis.analysis.conversion-rate",defaultMessage:"Conversion Rate"}),value:"".concat(e&&e.pay&&e.pay.conversion?e.pay.conversion:0,"%")}),contentHeight:46},a.a.createElement(Pe,{data:za(e.monthSales||[])}))))},Ga=Ba,ot=u("Znn+"),ze=u("ZTPi"),lt=u("iQDF"),Ia=u("+eQT"),Va=Ia.a.RangePicker,Be=ze.a.TabPane,Ya=[],Me=0;Me<7;Me+=1)Ya.push({title:Object(M.c)({id:"dashboardandanalysis.analysis.test"},{no:Me}),total:323234});var Ua=function(t){var l=t.rangePickerValue,e=t.salesData,r=t.numData,c=t.isActive,i=t.handleRangePickerChange,n=t.loading,o=t.selectDate;return a.a.createElement(Ee.a,{loading:n,bordered:!1,bodyStyle:{padding:0}},a.a.createElement("div",{className:j.a.salesCard},a.a.createElement(ze.a,{tabBarExtraContent:a.a.createElement("div",{className:j.a.salesExtraWrap},a.a.createElement("div",{className:j.a.salesExtra},a.a.createElement("a",{className:c("week"),onClick:function(){return o("week")}},a.a.createElement(M.a,{id:"dashboardandanalysis.analysis.all-week",defaultMessage:"All Week"})),a.a.createElement("a",{className:c("month"),onClick:function(){return o("month")}},a.a.createElement(M.a,{id:"dashboardandanalysis.analysis.all-month",defaultMessage:"All Month"})),a.a.createElement("a",{className:c("year"),onClick:function(){return o("year")}},a.a.createElement(M.a,{id:"dashboardandanalysis.analysis.all-year",defaultMessage:"All Year"}))),a.a.createElement(Va,{value:l,onChange:i,style:{width:256}})),size:"large",tabBarStyle:{marginBottom:24}},a.a.createElement(Be,{tab:a.a.createElement(M.a,{id:"dashboardandanalysis.analysis.sales",defaultMessage:"Sales"}),key:"sales"},a.a.createElement(ce.a,null,a.a.createElement(X.a,{xl:24,lg:24,md:24,sm:24,xs:24},a.a.createElement("div",{className:j.a.salesBar},a.a.createElement(ye,{height:295,title:a.a.createElement(M.a,{id:"dashboardandanalysis.analysis.sales-trend",defaultMessage:"Sales Trend"}),data:e}))))),a.a.createElement(Be,{tab:a.a.createElement(M.a,{id:"dashboardandanalysis.analysis.visits",defaultMessage:"Visits"}),key:"views"},a.a.createElement(ce.a,null,a.a.createElement(X.a,{xl:24,lg:24,md:24,sm:24,xs:24},a.a.createElement("div",{className:j.a.salesBar},a.a.createElement(ye,{height:292,title:a.a.createElement(M.a,{id:"dashboardandanalysis.analysis.sales-trend",defaultMessage:"Sales Trend"}),data:r}))))))))},Ka=Ua,Xa=function(t){var l=t.dropdownGroup,e=t.loading,r=t.salesPieData,c=t.title,i=t.handleChangeSalesType;return a.a.createElement(Ee.a,{loading:e,className:j.a.salesCard,bordered:!1,title:c,style:{height:"100%"}},a.a.createElement("div",null,a.a.createElement(Le,{hasLegend:!0,data:r,valueFormat:function(o){return o},height:248,lineWidth:4})))},Ge=Xa,Qa=function(v){Object(B.a)(l,v);var t=Object(G.a)(l);function l(){var e;Object(H.a)(this,l);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return e=t.call.apply(t,[this].concat(c)),e.state={salesType:"all",currentTabKey:"",rangePickerValue:de("year"),currentTime:"year"},e.reqRef=0,e.timeoutId=0,e.handleChangeSalesType=function(n){e.setState({salesType:n.target.value})},e.handleTabChange=function(n){e.setState({currentTabKey:n})},e.handleRangePickerChange=function(n){var o=e.props.dispatch;e.setState({rangePickerValue:n,currentTime:"other"}),o({type:"dashboardAndanalysis/fetch",payload:{startTime:N()(n[0]).format("YYYY-MM-DD"),endTime:N()(n[1]).format("YYYY-MM-DD")}})},e.selectDate=function(n){var o=e.props.dispatch,d=de(n);e.setState({rangePickerValue:de(n)}),n==="year"?e.setState({currentTime:"year"}):e.setState({currentTime:"other"}),o({type:"dashboardAndanalysis/fetch",payload:{startTime:N()(d[0]).format("YYYY-MM-DD"),endTime:N()(d[1]).format("YYYY-MM-DD")}})},e.isActive=function(n){var o=e.state.rangePickerValue;if(!o)return"";var d=de(n);return!d||!o[0]||!o[1]?"":o[0].isSame(d[0],"day")&&o[1].isSame(d[1],"day")?j.a.currentDate:""},e.salesData=function(n,o,d){var m=[];if(o==="year")for(var h=0;h<n.monthSales.length;h+=1)d==="price"&&m.push({x:"".concat(Number(n.monthSales[h].time),"\u6708"),y:n.monthSales[h].price}),d==="num"&&m.push({x:"".concat(Number(n.monthSales[h].time),"\u6708"),y:n.monthSales[h].num});else if(n.salesPrice&&n.salesNum)for(var s=0;s<n.salesPrice.length;s+=1)d==="price"&&m.push({x:n.salesPrice[s].name,y:n.salesPrice[s].value}),d==="num"&&m.push({x:n.salesNum[s].name,y:n.salesNum[s].value});return m},e.pieData=function(n,o){for(var d=[],m=0;m<n.length;m+=1)if(o==="from"){var h="";switch(n[m].type){case 1:h="\u6563\u5BA2";break;case 2:h="\u643A\u7A0B";break;case 3:h="\u98DE\u732A";break;case 4:h="\u7F8E\u56E2";break;case 5:h="\u53BB\u54EA\u513F";break;case 6:h="\u540C\u7A0B";break;case 7:h="\u65C5\u884C\u793E";break;case 8:h="\u5176\u5B83";break;default:break}d.push({x:h,y:n[m].num})}else d.push({x:n[m].name,y:n[m].value});return d},e}return Object(z.a)(l,[{key:"componentDidMount",value:function(){var r=this.props.dispatch;r({type:"dashboardAndanalysis/fetch"})}},{key:"render",value:function(){var r=this.state,c=r.rangePickerValue,i=r.currentTime,n=this.props,o=n.dashboardAndanalysis,d=n.loading;return a.a.createElement(Ve.a,null,a.a.createElement(a.a.Fragment,null,a.a.createElement(W.Suspense,{fallback:a.a.createElement(Ue,null)},a.a.createElement(Ga,{loading:d,visitData:o})),a.a.createElement(W.Suspense,{fallback:null},a.a.createElement(Ka,{rangePickerValue:c,salesData:this.salesData(o,i,"price"),numData:this.salesData(o,i,"num"),isActive:this.isActive,handleRangePickerChange:this.handleRangePickerChange,loading:d,selectDate:this.selectDate})),a.a.createElement(ce.a,{gutter:24,style:{marginTop:24}},a.a.createElement(X.a,{xl:12,lg:24,md:24,sm:24,xs:24},a.a.createElement(W.Suspense,{fallback:null},a.a.createElement(Ge,{dropdownGroup:a.a.createElement("div",null),loading:d,salesPieData:this.pieData(o.fromTypes||[],"from"),handleChangeSalesType:this.handleChangeSalesType,title:"\u6765\u6E90\u7C7B\u522B\u5360\u6BD4"}))),a.a.createElement(X.a,{xl:12,lg:24,md:24,sm:24,xs:24},a.a.createElement(W.Suspense,{fallback:null},a.a.createElement(Ge,{dropdownGroup:a.a.createElement("div",null),loading:d,salesPieData:this.pieData(o.ticketType||[],"ticket"),handleChangeSalesType:this.handleChangeSalesType,title:"\u95E8\u7968\u7C7B\u522B\u5360\u6BD4"}))))))}}]),l}(W.Component),st=F.default=Object(M.b)(function(v){var t=v.dashboardAndanalysis,l=v.loading;return{dashboardAndanalysis:t,loading:l.effects["dashboardAndanalysis/fetch"]}})(Qa)},Kd4N:function(T,F,u){T.exports={tagCloud:"tagCloud___yRb7B"}},OVKi:function(T,F,u){T.exports={waterWave:"waterWave___3x8ad",text:"text___1YQmM",waterWaveCanvasWrapper:"waterWaveCanvasWrapper___22oba"}},TirX:function(T,F,u){T.exports={miniChart:"miniChart___3lrLk",chartContent:"chartContent___1zSyi",chartLoading:"chartLoading___2Zz5S"}}}]);