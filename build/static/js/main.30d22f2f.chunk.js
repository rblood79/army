/*! For license information please see main.30d22f2f.chunk.js.LICENSE.txt */
(this.webpackJsonparmy=this.webpackJsonparmy||[]).push([[0],{436:function(e,t,c){},438:function(e,t,c){},449:function(e,t,c){"use strict";c.r(t);c(132),c(142),c(143),c(144),c(145),c(146),c(147),c(148),c(149),c(150),c(151),c(152),c(153),c(154),c(155),c(191),c(193),c(194),c(195),c(196),c(197),c(199),c(157),c(202),c(203),c(100),c(207),c(208),c(210),c(211),c(212),c(213),c(214),c(215),c(219),c(220),c(221),c(222),c(223),c(224),c(225),c(162),c(226),c(228),c(230),c(231),c(232),c(233),c(234),c(235),c(236),c(237),c(238),c(239),c(240),c(241),c(242),c(243),c(244),c(164),c(245),c(246),c(247),c(248),c(249),c(250),c(251),c(252),c(253),c(255),c(257),c(259),c(261),c(262),c(263),c(265),c(266),c(267),c(268),c(269),c(270),c(271),c(273),c(274),c(275),c(276),c(277),c(278),c(279),c(280),c(281),c(167),c(282),c(283),c(284),c(285),c(291),c(292),c(293),c(294),c(295),c(296),c(298),c(299),c(300),c(301),c(302),c(303),c(304),c(305),c(170),c(308),c(309),c(310),c(311),c(312),c(313),c(314),c(123),c(315),c(316),c(319),c(320),c(321),c(322),c(323),c(324),c(325),c(326),c(327),c(328),c(329),c(330),c(331),c(332),c(333),c(334),c(335),c(336),c(337),c(338),c(339),c(340),c(341),c(342),c(348),c(349),c(350),c(351),c(352),c(353),c(354),c(355),c(356),c(357),c(358),c(359),c(360),c(361),c(362),c(363),c(364),c(365),c(366),c(367),c(368),c(369),c(370),c(371),c(372),c(373),c(374),c(375),c(376),c(377),c(378),c(379),c(380),c(381),c(383),c(384),c(387),c(388),c(389),c(390),c(392),c(178);var n=c(53),s=(c(179),c(419),c(427),c(6)),a=c.n(s),r=c(395),l=c.n(r),i=c(44),j=c(27),b=c(1),o=c.n(b),d=c(4),h=c(2),u=c(3),O=c(9),m=c(10),x=c(0),p=a.a.createContext(),v=function(e){Object(O.a)(c,e);var t=Object(m.a)(c);function c(){var e;Object(h.a)(this,c);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={url:"/",filter:null,army:null,user:null,data:null},e.setTheme=function(){var t=Object(d.a)(o.a.mark((function t(c){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({theme:c?"dark":"light"});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.setFilter=function(t){e.setState((function(e){return{filter:t}}))},e.setUser=function(t){e.setState((function(e){return{user:t}}))},e.setArmy=function(t){e.setState((function(e){return{army:t}}))},e}return Object(u.a)(c,[{key:"render",value:function(){var e=this.props.children,t=this.state,c=t.url,n=t.theme,s=t.filter,a=t.user,r=t.army,l=this.setTheme,i=this.setFilter,j=this.setUser,b=this.setArmy;return Object(x.jsx)(p.Provider,{value:{theme:n,url:c,filter:s,user:a,army:r,setTheme:l,setFilter:i,setUser:j,setArmy:b},children:e})}}]),c}(s.Component),f=p,g=(c(436),c(84)),N=(c(438),c.p+"static/media/logo.94ba7c75.svg"),y=function(e){var t=Object(s.useContext)(f),c=Object(j.e)(),n=t.user,a=function(){alert("\uc2dc\ud5d8\ubc84\uc804\uc5d0\uc120 \uc81c\uacf5\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4")};return Object(x.jsx)("header",{className:"head",children:Object(x.jsxs)("nav",{className:"nav sub",children:["/main"===e.path?Object(x.jsxs)("div",{className:"headTitle",children:[Object(x.jsx)("img",{src:N,alt:"MND"}),"\uad70 \uc18c\uc694\ubb3c\uc790 \uc2e0\uccad"]}):"admin"===n?Object(x.jsxs)("div",{className:"headTitle",children:[Object(x.jsx)("img",{src:N,alt:"MND"}),"\uad70 \uc18c\uc694\ubb3c\uc790 \uc2e0\uccad\uad00\ub9ac"]}):Object(x.jsx)("button",{className:"navButton back",onClick:function(){c.push("/main")},children:Object(x.jsx)("i",{className:"ri-arrow-left-s-line"})}),"/main"!==e.path?"admin"===n?Object(x.jsxs)("div",{className:"navRes",children:[Object(x.jsxs)(i.c,{className:"navButton",exact:!0,to:"/result",children:[Object(x.jsx)("i",{className:"ri-pie-chart-2-fill"}),"\ud604\ud669"]}),Object(x.jsxs)("button",{className:"navButton",onClick:a,children:[Object(x.jsx)("i",{className:"ri-user-add-line"}),"\uad8c\ud55c"]}),Object(x.jsxs)("button",{className:"navButton",onClick:a,children:[Object(x.jsx)("i",{className:"ri-history-line"}),"\ub85c\uadf8"]}),Object(x.jsxs)("button",{className:"navButton",onClick:a,children:[Object(x.jsx)("i",{className:"ri-function-line"}),"\uba54\ub274"]}),Object(x.jsxs)("button",{className:"navButton",onClick:a,children:[Object(x.jsx)("i",{className:"ri-database-2-line"}),"DB"]})]}):Object(x.jsx)("span",{children:"\ud654\uc0dd\ubc29 \ubb3c\uc790"}):null,g.isMobile?Object(x.jsx)("button",{className:"navButton menu",onClick:a,children:Object(x.jsx)("i",{className:"ri-menu-line"})}):Object(x.jsx)("span",{className:"spaceButton",style:{flex:"admin"!==n&&"none"}})]})})},C=function(e){return Object(x.jsx)("footer",{className:"fix"===e.position?"foot active":"foot",children:"ministry of national defense."})};C.defaultProps={topNum:null,type:"list"};var k=C,S=c(14),F=function(e){var t=Object(s.useState)(null),c=Object(S.a)(t,2),n=c[0],a=c[1],r=Object(s.useState)(null),l=Object(S.a)(r,2),i=l[0],b=l[1],h=Object(s.useContext)(f),u=h.army,O=h.setArmy,m=h.setUser,p=Object(s.useState)(!1),v=Object(S.a)(p,2),g=v[0],y=v[1],C=Object(j.e)(),k=/[^0-9]/g,F=function(){var e=Object(d.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"admin"===n&&"admin"===i?(m(n),C.push("/result")):n&&"fail"!==i&&n===i?(m(n.replace(k,"")),C.push("/main")):n&&i&&n!==i&&b("same");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){a(null),b(null),O(null),m(null)}),[]),Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"login",children:[Object(x.jsx)("div",{className:"visual",children:Object(x.jsxs)("div",{className:"visualText",children:[Object(x.jsxs)("div",{className:"textGroup",children:[Object(x.jsx)("span",{children:"\uad70"}),Object(x.jsx)("span",{children:"\uc18c"}),Object(x.jsx)("span",{children:"\uc694"}),Object(x.jsx)("span",{children:"\ubb3c"}),Object(x.jsx)("span",{children:"\uc790"}),Object(x.jsx)("span",{children:"\uc2e0"}),Object(x.jsx)("span",{children:"\uccad"})]}),Object(x.jsx)("img",{className:"visualLogo",src:N,alt:"logo"})]})}),Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"armyWrap",children:[!u&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"armyComment",children:[Object(x.jsx)("i",{className:"ri-arrow-down-s-line"}),"\uc18c\uc18d\uad70\uc744 \uc120\ud0dd\ud558\uc138\uc694"]}),Object(x.jsxs)("div",{className:"armySelect",children:[Object(x.jsx)("input",{type:"radio",name:"type",id:"type0",value:"\uc721\uad70",onChange:function(e){var t=e.target.value;return O(t)}}),Object(x.jsx)("label",{htmlFor:"type0",className:"armyLeft",children:"\uc721\uad70"}),Object(x.jsx)("input",{type:"radio",name:"type",id:"type1",value:"\uacf5\uad70",onChange:function(e){var t=e.target.value;return O(t)}}),Object(x.jsx)("label",{htmlFor:"type1",className:"armyCenter",children:"\uacf5\uad70"}),Object(x.jsx)("input",{type:"radio",name:"type",id:"type2",value:"\ud574\uad70",onChange:function(e){var t=e.target.value;return O(t)}}),Object(x.jsx)("label",{htmlFor:"type2",className:"armyRight",children:"\ud574\uad70"})]})]}),u&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("button",{className:"back",onClick:function(){O(null),a(null),b(null),y(!1)},children:[Object(x.jsx)("i",{className:"ri-arrow-left-line"}),Object(x.jsx)("span",{children:"\uc774\uc804"})]}),Object(x.jsx)("div",{className:"input",children:Object(x.jsx)("input",{className:"id",type:"text",maxLength:12,placeholder:"\uc544\uc774\ub514",onChange:function(e){var t=e.target.value;a(t)}})}),Object(x.jsxs)("div",{className:"input",children:[Object(x.jsx)("input",{className:"pw",type:g?"text":"password",maxLength:12,placeholder:"\ube44\ubc00\ubc88\ud638",onChange:function(e){var t=e.target.value;b(t)}}),Object(x.jsx)("button",{className:"passView",onClick:function(){y(!g)},children:Object(x.jsx)("i",{className:g?"ri-eye-off-line":"ri-eye-line"})}),Object(x.jsx)("span",{className:"vali",children:null===n&&null===i?"\uc544\uc774\ub514\uc640 \ube44\ubc00\ubc88\ud638\ub294 \uad70\ubc88\uc785\ub2c8\ub2e4":"fail"===n?"\uc62c\ubc14\ub978 \uc544\uc774\ub514\uac00 \uc544\ub2d9\ub2c8\ub2e4":"fail"===i?"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694":"same"===i&&"\ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4"})]})]})]}),Object(x.jsx)("div",{className:"controll",children:u&&Object(x.jsx)("button",{className:"button",onClick:function(){F(n)},children:"\ud655\uc778"})})]})]})})};F.defaultProps={};var w=F,B=c.p+"static/media/clo.e05ec780.svg",T=c.p+"static/media/bio.7711ee86.svg",E=c.p+"static/media/com.047c5a0a.svg",H=c.p+"static/media/bul.97028968.svg",I=function(e){var t=Object(j.e)(),c=Object(s.useContext)(f).user;return Object(s.useEffect)((function(){!c&&t.push("/")}),[]),Object(x.jsxs)("div",{className:"mainContainer",children:[Object(x.jsxs)("div",{className:"notice",children:[Object(x.jsx)("i",{className:"ri-information-fill"}),Object(x.jsxs)("div",{className:"noticeText",children:[Object(x.jsx)("span",{children:"\ud654\uc0dd\ubc29 \ubb3c\uc790 \uc2e0\uccad \uae30\uac04\uc785\ub2c8\ub2e4"}),Object(x.jsx)("span",{className:"noticeTextSub",children:"(2021. 11. 01 ~ 03\uc77c)"})]})]}),Object(x.jsxs)("div",{className:"buttonWrap",children:[Object(x.jsxs)(i.b,{disabled:!0,className:"button",to:"/",children:[Object(x.jsx)("img",{src:B,alt:"\ud53c\ubcf5\ub958"}),Object(x.jsx)("span",{children:"\ud53c\ubcf5\ub958"})]}),Object(x.jsxs)(i.b,{className:"button",to:"./form",children:[Object(x.jsx)("img",{src:T,alt:"\ud654\uc0dd\ubc29\ubb3c\uc790"}),Object(x.jsx)("span",{children:"\ud654\uc0dd\ubc29\ubb3c\uc790"})]}),Object(x.jsxs)(i.b,{disabled:!0,className:"button",to:"/",children:[Object(x.jsx)("img",{src:E,alt:"\ud1b5\uc2e0\ubb3c\uc790"}),Object(x.jsx)("span",{children:"\ud1b5\uc2e0\ubb3c\uc790"})]}),Object(x.jsxs)(i.b,{disabled:!0,className:"button",to:"/",children:[Object(x.jsx)("img",{src:H,alt:"\uacf5\ubcd1\ubb3c\uc790"}),Object(x.jsx)("span",{children:"\uacf5\ubcd1\ubb3c\uc790"})]})]}),Object(x.jsxs)("div",{className:"mainComment",children:[Object(x.jsx)("span",{children:"\ud544\uc694\ud55c"}),Object(x.jsx)("span",{children:"\ubb3c\uc790\ub97c"})," ",Object(x.jsx)("span",{children:"\uc120\ud0dd\ud558\uc138\uc694"})]})]})};I.defaultProps={};var P=I,L=c(24),A=function(e){var t=Object(j.e)(),c=Object(s.useContext)(f),a=c.army,r=c.setArmy,l=c.user,i=c.setUser,b=Object(s.useState)(null),h=Object(S.a)(b,2),u=h[0],O=h[1],m=Object(s.useState)(!1),p=Object(S.a)(m,2),v=p[0],g=p[1],N=Object(s.useState)(0),y=Object(S.a)(N,2),C=y[0],k=y[1],F=Object(s.useState)(null),w=Object(S.a)(F,2),B=w[0],T=w[1],E=Object(s.useState)(null),H=Object(S.a)(E,2),I=H[0],P=H[1],A=Object(s.useState)(null),U=Object(S.a)(A,2),M=U[0],D=U[1],G=Object(s.useState)(null),R=Object(S.a)(G,2),J=R[0],K=R[1],Q=Object(s.useState)(!0),V=Object(S.a)(Q,2),W=V[0],X=V[1],Y=function(){var t=Object(d.a)(o.a.mark((function t(c){var s,a,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=[],a=Object(L.c)(e.users,l),t.next=4,Object(L.d)(a);case 4:(r=t.sent).data()&&s.push(Object(n.a)({id:l},r.data()),O(s)),g(c),X(!1);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),z=function(){var t=Object(d.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(L.h)(Object(L.c)(e.users,l),{type:a,unit:"-",corps:"-",company:"-",group:"-",armor:B,gloves:I,shoes:M,mask:J},Y(!0));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(s.useMemo)((function(){k(B||M||I||J?C+1:0)}),[B,M,I,J]),Object(s.useEffect)((function(){l?Y(!1):t.push("/")}),[l]),Object(x.jsx)(x.Fragment,{children:u&&u.length>0?Object(x.jsxs)("div",{className:"user",children:[Object(x.jsxs)("h2",{className:"title",children:[Object(x.jsx)("div",{className:"subIcon",children:c?Object(x.jsx)("i",{className:"ri-user-add-line"}):Object(x.jsx)("i",{className:"ri-user-follow-line"})}),Object(x.jsxs)("span",{className:"subTitle",children:[Object(x.jsx)("b",{children:"\uc2e0\uccad"}),v?"\uc644\ub8cc \ub418\uc5c8\uc2b5\ub2c8\ub2e4":"\ud558\uc2e0 \ub0b4\uc5ed\uc774 \uc788\uc2b5\ub2c8\ub2e4"]})]}),Object(x.jsx)("div",{className:"comment",children:v?"\uc218\uace0\ud558\uc168\uc2b5\ub2c8\ub2e4":"\uc0ac\uc774\uc988\ub97c \ubcc0\uacbd\uc740 \uc7ac\uc2e0\uccad\uc744 \ub204\ub974\uc138\uc694"}),Object(x.jsxs)("div",{className:"controll",children:[Object(x.jsx)("button",{className:"buttonLeft",onClick:function(){T(null),D(null),P(null),K(null),O(null)},children:"\uc7ac\uc2e0\uccad"}),Object(x.jsx)("button",{className:"buttonRight",onClick:function(){O(null),T(null),D(null),P(null),K(null),r(null),i(null)},children:"\ub85c\uadf8\uc544\uc6c3"})]})]}):!W&&Object(x.jsxs)("div",{className:"order",children:[Object(x.jsx)("div",{children:Object(x.jsxs)("div",{className:"accordion",children:[Object(x.jsxs)("div",{className:"accordionItem",children:[Object(x.jsxs)("h3",{className:0===C?"accordionHead active":"accordionHead",onClick:function(){k(0===C?null:0)},children:[Object(x.jsx)("span",{className:"accordionNum",children:"STEP 1"}),"\ubcf4\ud638\uc758",B?' "'+B+'" \ub97c \uc120\ud0dd\ud558\uc600\uc2b5\ub2c8\ub2e4':"\ub97c \uc120\ud0dd\ud558\uc138\uc694"]}),Object(x.jsxs)("div",{className:0===C?"accordionBody active":"accordionBody",style:{height:0===C&&336},children:[Object(x.jsx)("input",{type:"radio",name:"armor",id:"armor0",value:"\ud2b91\ud638",onChange:function(e){var t=e.target.value;return T(t)}}),Object(x.jsxs)("label",{htmlFor:"armor0",className:"label",children:[Object(x.jsx)("span",{children:"\ud2b91\ud638"}),Object(x.jsx)("span",{children:"\uc2e0\uc7a5 191cm\uc774\uc0c1"})]}),Object(x.jsx)("input",{type:"radio",name:"armor",id:"armor1",value:"1\ud638",onChange:function(e){var t=e.target.value;return T(t)}}),Object(x.jsxs)("label",{htmlFor:"armor1",className:"label",children:[Object(x.jsx)("span",{children:"1\ud638"}),Object(x.jsx)("span",{children:"\uc2e0\uc7a5 185cm - 190cm"})]}),Object(x.jsx)("input",{type:"radio",name:"armor",id:"armor2",value:"2\ud638",onChange:function(e){var t=e.target.value;return T(t)}}),Object(x.jsxs)("label",{htmlFor:"armor2",className:"label",children:[Object(x.jsx)("span",{children:"2\ud638"}),Object(x.jsx)("span",{children:"\uc2e0\uc7a5 180cm - 184cm"})]}),Object(x.jsx)("input",{type:"radio",name:"armor",id:"armor3",value:"3\ud638",onChange:function(e){var t=e.target.value;return T(t)}}),Object(x.jsxs)("label",{htmlFor:"armor3",className:"label",children:[Object(x.jsx)("span",{children:"3\ud638"}),Object(x.jsx)("span",{children:"\uc2e0\uc7a5 175cm - 179cm"})]}),Object(x.jsx)("input",{type:"radio",name:"armor",id:"armor4",value:"4\ud638",onChange:function(e){var t=e.target.value;return T(t)}}),Object(x.jsxs)("label",{htmlFor:"armor4",className:"label",children:[Object(x.jsx)("span",{children:"4\ud638"}),Object(x.jsx)("span",{children:"\uc2e0\uc7a5 170cm - 174cm"})]}),Object(x.jsx)("input",{type:"radio",name:"armor",id:"armor5",value:"5\ud638",onChange:function(e){var t=e.target.value;return T(t)}}),Object(x.jsxs)("label",{htmlFor:"armor5",className:"label",children:[Object(x.jsx)("span",{children:"5\ud638"}),Object(x.jsx)("span",{children:"\uc2e0\uc7a5 165cm - 169cm"})]}),Object(x.jsx)("input",{type:"radio",name:"armor",id:"armor6",value:"6\ud638",onChange:function(e){var t=e.target.value;return T(t)}}),Object(x.jsxs)("label",{htmlFor:"armor6",className:"label",children:[Object(x.jsx)("span",{children:"6\ud638"}),Object(x.jsx)("span",{children:"\uc2e0\uc7a5 165cm\ubbf8\ub9cc"})]})]})]}),Object(x.jsxs)("div",{className:"accordionItem",children:[Object(x.jsxs)("h3",{className:1===C?"accordionHead active":"accordionHead",onClick:function(){k(1===C?null:1)},children:[Object(x.jsx)("span",{className:"accordionNum",children:"STEP 2"}),"\ub367\uc2e0",M?' "'+M+'" \ub97c \uc120\ud0dd\ud558\uc600\uc2b5\ub2c8\ub2e4':"\uc744 \uc120\ud0dd\ud558\uc138\uc694"]}),Object(x.jsxs)("div",{className:1===C?"accordionBody active":"accordionBody",style:{height:1===C&&96},children:[Object(x.jsx)("input",{type:"radio",name:"shoes",id:"shoes0",value:"\ub300",onChange:function(e){var t=e.target.value;return D(t)}}),Object(x.jsxs)("label",{htmlFor:"shoes0",className:"label",children:[Object(x.jsx)("span",{children:"\ub300"}),Object(x.jsx)("span",{children:"\ubc1c 270mm\uc774\uc0c1"})]}),Object(x.jsx)("input",{type:"radio",name:"shoes",id:"shoes2",value:"\uc18c",onChange:function(e){var t=e.target.value;return D(t)}}),Object(x.jsxs)("label",{htmlFor:"shoes2",className:"label",children:[Object(x.jsx)("span",{children:"\uc18c"}),Object(x.jsx)("span",{children:"\ubc1c 270mm\ubbf8\ub9cc"})]})]})]}),Object(x.jsxs)("div",{className:"accordionItem",children:[Object(x.jsxs)("h3",{className:2===C?"accordionHead active":"accordionHead",onClick:function(){k(2===C?null:2)},children:[Object(x.jsx)("span",{className:"accordionNum",children:"STEP 3"}),"\uc7a5\uac11",I?' "'+I+'" \ub97c \uc120\ud0dd\ud558\uc600\uc2b5\ub2c8\ub2e4':"\uc744 \uc120\ud0dd\ud558\uc138\uc694"]}),Object(x.jsxs)("div",{className:2===C?"accordionBody active":"accordionBody",style:{height:2===C&&144},children:[Object(x.jsx)("input",{type:"radio",name:"gloves",id:"gloves0",value:"\ub300",onChange:function(e){var t=e.target.value;return P(t)}}),Object(x.jsxs)("label",{htmlFor:"gloves0",className:"label",children:[Object(x.jsx)("span",{children:"\ub300"}),Object(x.jsx)("span",{children:"\uae38\uc774 23cm\uc774\uc0c1"})]}),Object(x.jsx)("input",{type:"radio",name:"gloves",id:"gloves1",value:"\uc911",onChange:function(e){var t=e.target.value;return P(t)}}),Object(x.jsxs)("label",{htmlFor:"gloves1",className:"label",children:[Object(x.jsx)("span",{children:"\uc911"}),Object(x.jsx)("span",{children:"\uae38\uc774 20 - 22cm"})]}),Object(x.jsx)("input",{type:"radio",name:"gloves",id:"gloves2",value:"\uc18c",onChange:function(e){var t=e.target.value;return P(t)}}),Object(x.jsxs)("label",{htmlFor:"gloves2",className:"label",children:[Object(x.jsx)("span",{children:"\uc18c"}),Object(x.jsx)("span",{children:"\uae38\uc774 19cm\uc774\ud558"})]})]})]}),Object(x.jsxs)("div",{className:"accordionItem",children:[Object(x.jsxs)("h3",{className:3===C?"accordionHead active":"accordionHead",onClick:function(){k(3===C?null:3)},children:[Object(x.jsx)("span",{className:"accordionNum",children:"STEP 4"}),"\ubc29\ub3c5\uba74",J?' "'+J+'" \ub97c \uc120\ud0dd\ud558\uc600\uc2b5\ub2c8\ub2e4':"\uc744 \uc120\ud0dd\ud558\uc138\uc694"]}),Object(x.jsxs)("div",{className:3===C?"accordionBody active":"accordionBody",style:{height:3===C&&192},children:[Object(x.jsx)("input",{type:"radio",name:"mask",id:"mask0",value:"\ud2b9\ub300",onChange:function(e){var t=e.target.value;return K(t)}}),Object(x.jsxs)("label",{htmlFor:"mask0",className:"label",children:[Object(x.jsx)("span",{children:"\ud2b9\ub300"}),Object(x.jsx)("span",{children:"XL"})]}),Object(x.jsx)("input",{type:"radio",name:"mask",id:"mask1",value:"\ub300",onChange:function(e){var t=e.target.value;return K(t)}}),Object(x.jsxs)("label",{htmlFor:"mask1",className:"label",children:[Object(x.jsx)("span",{children:"\ub300"}),Object(x.jsx)("span",{children:"L"})]}),Object(x.jsx)("input",{type:"radio",name:"mask",id:"mask2",value:"\uc911",onChange:function(e){var t=e.target.value;return K(t)}}),Object(x.jsxs)("label",{htmlFor:"mask2",className:"label",children:[Object(x.jsx)("span",{children:"\uc911"}),Object(x.jsx)("span",{children:"M"})]}),Object(x.jsx)("input",{type:"radio",name:"mask",id:"mask3",value:"\uc18c",onChange:function(e){var t=e.target.value;return K(t)}}),Object(x.jsxs)("label",{htmlFor:"mask3",className:"label",children:[Object(x.jsx)("span",{children:"\uc18c"}),Object(x.jsx)("span",{children:"S"})]})]})]})]})}),Object(x.jsxs)("div",{className:"controll",children:[Object(x.jsx)("p",{children:B&&M&&I&&J?"\uc120\ud0dd\ud558\uc2e0 \uc0ac\uc774\uc988\ub85c \uc2e0\uccad\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c":l+"\ub2d8 \uc0ac\uc774\uc988\uc5d0 \ub9de\uac8c \uc120\ud0dd\ud574\uc8fc\uc138\uc694"}),Object(x.jsx)("button",{className:"button",disabled:!B||!M||!I||!J,onClick:function(){z()},children:"\uc2e0\uccad"})]})]})})};A.defaultProps={};var U=A,M=c(21),D=c.n(M),G=(c(448),function(e){var t=Object(j.e)(),c=Object(s.useContext)(f).user,a=Object(s.useState)(null),r=Object(S.a)(a,2),l=r[0],i=r[1],b=Object(s.useState)(null),h=Object(S.a)(b,2),u=h[0],O=h[1],m=Object(s.useState)({}),p=Object(S.a)(m,2),v=p[0],N=p[1],y=Object(s.useState)(null),C=Object(S.a)(y,2),k=C[0],F=C[1],w=Object(s.useState)(null),B=Object(S.a)(w,2),T=B[0],E=B[1],H=Object(s.useState)(null),I=Object(S.a)(H,2),P=I[0],A=I[1],U=Object(s.useState)(null),M=Object(S.a)(U,2),G=M[0],R=M[1],J=Object(s.useState)(null),K=Object(S.a)(J,2),Q=K[0],V=K[1],W=Object(s.useState)(null),X=Object(S.a)(W,2),Y=X[0],z=X[1],Z=function(){var t=Object(d.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(L.h)(Object(L.c)(e.member,Y),{type:k,unit:T,corps:P,company:G,group:Q},te());case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),_=function(){alert("\uc2dc\ud5d8\ubc84\uc804\uc5d0\uc120 \uc81c\uacf5\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4")},q=function(e,t,c){var n={"\ud2b91\ud638":[],"1\ud638":[],"2\ud638":[],"3\ud638":[],"4\ud638":[],"5\ud638":[],"6\ud638":[]},s={"\ub300":[],"\uc18c":[]},a={"\ub300":[],"\uc911":[],"\uc18c":[]},r={"\ud2b9\ub300":[],"\ub300":[],"\uc911":[],"\uc18c":[]};return e.reduce((function(l,i){var j=i[t];return void 0===l[j]&&(l[j]=[]),l[j].push(i),c?(l["\uc18c\uacc4"]=[e.length],D.a.merge({},"armor"===t?n:"shoes"===t?s:"gloves"===t?a:"mask"===t?r:null,l)):l}),{})},$=function(){var t=Object(d.a)(o.a.mark((function t(){var c,n,s,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=Object(L.g)(e.users),n=Object(L.g)(e.member),t.next=4,Object(L.e)(c);case 4:return s=t.sent,t.next=7,Object(L.e)(n);case 7:a=t.sent,s.forEach((function(t){ee(e.users,t.id)})),a.forEach((function(t){ee(e.member,t.id)})),te();case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),ee=function(){var e=Object(d.a)(o.a.mark((function e(t,c){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=Object(L.c)(t,c),Object(L.b)(n);case 2:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),te=function(){var t=Object(d.a)(o.a.mark((function t(){var c,s,a,r,l,j,b,d;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=[],s=Object(L.g)(e.member,Object(L.i)("type","!=","")),t.next=4,Object(L.e)(s);case 4:return(a=t.sent).forEach((function(e){c.push(Object(n.a)({id:e.id},e.data()))})),r=[],l=Object(L.g)(e.users,Object(L.i)("type","!=","")),t.next=10,Object(L.e)(l);case 10:t.sent.forEach((function(e){var t=D.a.find(c,["id",e.id]),s=t?t.type+t.unit+t.corps+t.company+","+t.group:e.data().type+"-";r.push(Object(n.a)(Object(n.a)(Object(n.a)({id:e.id},e.data()),t),{},{test:s}))})),i(r),j=[],a.forEach((function(e){j.push(Object(n.a)(Object(n.a)({id:e.id},e.data()),D.a.find(r,["id",e.id])))})),O(j),b=q(r,"test"),d={},D.a.map(b,(function(e,t){var c=d[t]={},n=q(e,"company");D.a.map(n,(function(e,t){var n=c[t]={},s=q(e,"corps");D.a.map(s,(function(e,t){var c=n[t]={},s=q(e,"unit");D.a.map(s,(function(e,t){var n=c[t]={},s=q(e,"type");D.a.map(s,(function(e,t){var c=n[t]={};c.armor=q(e,"armor",!0),c.shoes=q(e,"shoes",!0),c.gloves=q(e,"gloves",!0),c.mask=q(e,"mask",!0)}))}))}))}))})),N(d);case 20:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(s.useEffect)((function(){"admin"!==c?t.push("/"):te()}),[]),Object(x.jsxs)("div",{className:"resultContainer",children:[Object(x.jsxs)("div",{className:"addUser",style:{display:!g.isMobile&&"flex"},children:[Object(x.jsxs)("div",{className:"select",children:[Object(x.jsx)("input",{type:"radio",name:"type",id:"type0",value:"\uc721\uad70",onChange:function(e){var t=e.target.value;return F(t)}}),Object(x.jsx)("label",{htmlFor:"type0",children:"\uc721\uad70"}),Object(x.jsx)("input",{type:"radio",name:"type",id:"type1",value:"\uacf5\uad70",onChange:function(e){var t=e.target.value;return F(t)}}),Object(x.jsx)("label",{htmlFor:"type1",children:"\uacf5\uad70"}),Object(x.jsx)("input",{type:"radio",name:"type",id:"type2",value:"\ud574\uad70",onChange:function(e){var t=e.target.value;return F(t)}}),Object(x.jsx)("label",{htmlFor:"type2",children:"\ud574\uad70"})]}),Object(x.jsx)("input",{type:"text",onChange:function(e){var t=e.target.value;E(t)},placeholder:"\ubd80\ub300"}),Object(x.jsx)("input",{type:"text",onChange:function(e){var t=e.target.value;A(t)},placeholder:"\ub300\ub300"}),Object(x.jsx)("input",{type:"text",onChange:function(e){var t=e.target.value;R(t)},placeholder:"\uc911\ub300"}),Object(x.jsx)("input",{type:"text",onChange:function(e){var t=e.target.value;V(t)},placeholder:"\uc18c\ub300"}),Object(x.jsx)("input",{type:"text",minLength:6,maxLength:12,onChange:function(e){var t=e.target.value;z(t)},placeholder:"\uad70\ubc88"}),Object(x.jsx)("button",{onClick:Z,children:"\ub4f1\ub85d"})]}),v&&Object(x.jsxs)("div",{className:"total",children:[Object(x.jsxs)("div",{className:"resultHead",children:[Object(x.jsxs)("h2",{className:"title",children:["\uc885\ud569\uc18c\uc694 \ud604\ud669 ",Object(x.jsx)("span",{className:"titleSub",children:"- \ud654\uc0dd\ubc29 \ubb3c\uc790"})]}),Object(x.jsxs)("div",{className:"buttonGroup",children:[Object(x.jsxs)("button",{onClick:te,children:[Object(x.jsx)("i",{className:"ri-refresh-line"}),"\uc7ac\uc870\ud68c"]}),Object(x.jsxs)("button",{onClick:function(){window.confirm("\ub370\uc774\ud130\ub97c \uc0ad\uc81c \ud569\ub2c8\ub2e4 \uc0ad\uc81c\uc2dc \ubcf5\uad6c \ud560\uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \ud55c\ubc88 \ud655\uc778\ud558\uc138\uc694.")&&$()},children:[Object(x.jsx)("i",{className:"ri-delete-bin-2-line"}),"\ucd08\uae30\ud654"]}),Object(x.jsxs)("div",{className:"wrap",children:[Object(x.jsxs)("button",{disabled:!0,onClick:_,children:[Object(x.jsx)("i",{className:"ri-folder-upload-line"}),"\uc18c\uc694\ud604\ud669 \uc5c5\ub85c\ub4dc"]}),Object(x.jsxs)("button",{disabled:!0,onClick:_,children:[Object(x.jsx)("i",{className:"ri-folder-download-line"}),"\ubd80\ub300\ubcc4 \ud604\ud669 \ub2e4\uc6b4\ub85c\ub4dc"]}),Object(x.jsxs)("button",{disabled:!0,onClick:_,children:[Object(x.jsx)("i",{className:"ri-printer-line"}),"\uc778\uc1c4"]})]})]})]}),Object(x.jsx)("div",{className:"tableContents",children:Object(x.jsxs)("table",{className:"table",children:[Object(x.jsxs)("thead",{children:[Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{colSpan:"5",children:"\uc18c\uc18d"}),Object(x.jsx)("th",{colSpan:"8",children:"\ubcf4\ud638\uc758"}),Object(x.jsx)("th",{colSpan:"3",children:"\ub367\uc2e0"}),Object(x.jsx)("th",{colSpan:"4",children:"\uc7a5\uac11"}),Object(x.jsx)("th",{colSpan:"5",children:"\ubc29\ub3c5\uba74"})]}),Object(x.jsxs)("tr",{className:"subHead",children:[Object(x.jsx)("th",{children:"\uad70"}),Object(x.jsx)("th",{children:"\ubd80\ub300"}),Object(x.jsx)("th",{children:"\ub300\ub300"}),Object(x.jsx)("th",{children:"\uc911\ub300"}),Object(x.jsx)("th",{children:"\uc18c\ub300(\ubc18)"}),Object(x.jsx)("th",{children:"\ud2b91\ud638"}),Object(x.jsx)("th",{children:"1\ud638"}),Object(x.jsx)("th",{children:"2\ud638"}),Object(x.jsx)("th",{children:"3\ud638"}),Object(x.jsx)("th",{children:"4\ud638"}),Object(x.jsx)("th",{children:"5\ud638"}),Object(x.jsx)("th",{children:"6\ud638"}),Object(x.jsx)("th",{className:"sum",children:"\uc18c\uacc4"}),Object(x.jsx)("th",{children:"\ub300"}),Object(x.jsx)("th",{children:"\uc18c"}),Object(x.jsx)("th",{className:"sum",children:"\uc18c\uacc4"}),Object(x.jsx)("th",{children:"\ub300"}),Object(x.jsx)("th",{children:"\uc911"}),Object(x.jsx)("th",{children:"\uc18c"}),Object(x.jsx)("th",{className:"sum",children:"\uc18c\uacc4"}),Object(x.jsx)("th",{children:"\ud2b9\ub300"}),Object(x.jsx)("th",{children:"\ub300"}),Object(x.jsx)("th",{children:"\uc911"}),Object(x.jsx)("th",{children:"\uc18c"}),Object(x.jsx)("th",{className:"sum",children:"\uc18c\uacc4"})]})]}),Object(x.jsx)("tbody",{children:Object.entries(v).map((function(e){var t=["undefined"!==e[0]&&e[0].split(",")[1]];return Object.entries(e[1]).map((function(e){t.splice(0,0,"undefined"!==e[0]&&e[0]),Object.entries(e[1]).map((function(e){t.splice(0,0,"undefined"!==e[0]&&e[0]),Object.entries(e[1]).map((function(e){t.splice(0,0,"undefined"!==e[0]&&e[0]),Object.entries(e[1]).map((function(e){t.splice(0,0,"undefined"!==e[0]&&e[0]),Object.entries(e[1]).map((function(e){return Object.entries(e[1]).map((function(e,c){return t.push("\uc18c\uacc4"===e[0]?e[1]:e[1].length>0?e[1].length:null)}))}))}))}))}))})),Object(x.jsx)("tr",{children:Object.entries(t).map((function(e){return Object(x.jsx)("td",{children:e[1]},e[0]+e[1])}))},e[0]+e[1])}))}),Object(x.jsx)("tfoot",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{colSpan:"5",children:"\uacc4"}),Object(x.jsx)("th",{children:l&&D.a.filter(l,{armor:"\ud2b91\ud638"}).length}),Object(x.jsx)("th",{children:l&&D.a.filter(l,{armor:"1\ud638"}).length}),Object(x.jsx)("th",{children:l&&D.a.filter(l,{armor:"2\ud638"}).length}),Object(x.jsx)("th",{children:l&&D.a.filter(l,{armor:"3\ud638"}).length}),Object(x.jsx)("th",{children:l&&D.a.filter(l,{armor:"4\ud638"}).length}),Object(x.jsx)("th",{children:l&&D.a.filter(l,{armor:"5\ud638"}).length}),Object(x.jsx)("th",{children:l&&D.a.filter(l,{armor:"6\ud638"}).length}),Object(x.jsx)("th",{className:"sum",children:l&&l.length}),Object(x.jsx)("th",{children:l&&D.a.filter(l,{shoes:"\ub300"}).length}),Object(x.jsx)("th",{children:l&&D.a.filter(l,{shoes:"\uc18c"}).length}),Object(x.jsx)("th",{className:"sum",children:l&&l.length}),Object(x.jsx)("th",{children:l&&D.a.filter(l,{gloves:"\ub300"}).length}),Object(x.jsx)("th",{children:l&&D.a.filter(l,{gloves:"\uc911"}).length}),Object(x.jsx)("th",{children:l&&D.a.filter(l,{gloves:"\uc18c"}).length}),Object(x.jsx)("th",{className:"sum",children:l&&l.length}),Object(x.jsx)("th",{children:l&&D.a.filter(l,{mask:"\ud2b9\ub300"}).length}),Object(x.jsx)("th",{children:l&&D.a.filter(l,{mask:"\ub300"}).length}),Object(x.jsx)("th",{children:l&&D.a.filter(l,{mask:"\uc911"}).length}),Object(x.jsx)("th",{children:l&&D.a.filter(l,{mask:"\uc18c"}).length}),Object(x.jsx)("th",{className:"sum",children:l&&l.length})]})})]})}),Object(x.jsx)("span",{className:"tableComment",children:"\ub4f1\ub85d\ub418\uc9c0\uc54a\uc740 \uc2e0\uccad\uc790\ud3ec\ud568"})]}),Object(x.jsxs)("div",{className:"users",children:[Object(x.jsxs)("div",{className:"resultHead",children:[Object(x.jsxs)("h2",{className:"title",children:["\uc2e0\uccad\uc790 \ud604\ud669",Object(x.jsxs)("span",{className:"titleSub",children:["- \uc804\uccb4 ",u&&u.length,"\uba85 \uc911 ",u&&D.a.filter(u,"armor").length,"\uba85 \uc2e0\uccad"]})]}),Object(x.jsx)("div",{className:"buttonGroup",style:{display:"none"},children:Object(x.jsxs)("div",{className:"wrap",children:[Object(x.jsxs)("button",{disabled:!0,onClick:_,children:[Object(x.jsx)("i",{className:"ri-user-voice-line"}),"\ubbf8\uc2e0\uccad\uc790 \uc790\ub3d9\uc548\ub0b4"]}),Object(x.jsxs)("button",{disabled:!0,onClick:_,children:[Object(x.jsx)("i",{className:"ri-user-search-line"}),"\ubbf8\uc2e0\uccad\ud604\ud669 \ub2e4\uc6b4\ub85c\ub4dc"]}),Object(x.jsxs)("button",{disabled:!0,onClick:_,children:[Object(x.jsx)("i",{className:"ri-shield-check-line"}),"\ubd80\ub300\ubcc4 \uacfc\ubd80\uc871\uc18c\uc694\ud655\uc778"]}),Object(x.jsxs)("button",{disabled:!0,onClick:_,children:[Object(x.jsx)("i",{className:"ri-file-shield-2-line"}),"\ubd80\ub300\ubcc4 \uc18c\uc694\uc774\uad00"]})]})})]}),Object(x.jsx)("div",{children:Object(x.jsx)("div",{className:"tableContents",children:Object(x.jsxs)("table",{className:"table",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"\uad70"}),Object(x.jsx)("th",{children:"\ubd80\ub300"}),Object(x.jsx)("th",{children:"\ub300\ub300"}),Object(x.jsx)("th",{children:"\uc911\ub300"}),Object(x.jsx)("th",{children:"\uc18c\ub300(\ubc18)"}),Object(x.jsx)("th",{children:"\uad70\ubc88"}),Object(x.jsx)("th",{children:"\ubcf4\ud638\uc758"}),Object(x.jsx)("th",{children:"\ub367\uc2e0"}),Object(x.jsx)("th",{children:"\uc7a5\uac11"}),Object(x.jsx)("th",{children:"\ubc29\ub3c5\uba74"}),Object(x.jsx)("th",{children:"\uc2e0\uccad\uc720\ubb34"})]})}),Object(x.jsx)("tbody",{children:u&&Object.entries(u).map((function(e){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:e[1].type}),Object(x.jsx)("td",{children:e[1].unit}),Object(x.jsx)("td",{children:e[1].corps}),Object(x.jsx)("td",{children:e[1].company}),Object(x.jsx)("td",{children:e[1].group}),Object(x.jsx)("td",{children:e[1].id}),Object(x.jsx)("td",{children:e[1].armor}),Object(x.jsx)("td",{children:e[1].shoes}),Object(x.jsx)("td",{children:e[1].gloves}),Object(x.jsx)("td",{children:e[1].mask}),Object(x.jsx)("td",{children:e[1].armor?Object(x.jsx)("i",{className:"ri-checkbox-circle-line"}):Object(x.jsx)("i",{className:"ri-close-line"})})]},e[0]+e[1])}))}),Object(x.jsx)("tfoot",{})]})})})]})]})});G.defaultProps={};var R=G,J=c(398),K=Object(J.a)({apiKey:"AIzaSyD4lFYlGsKryHvQUF5CT3wUdhnU_uQBVUA",authDomain:"army-c3fb4.firebaseapp.com",projectId:"army-c3fb4",storageBucket:"army-c3fb4.appspot.com",messagingSenderId:"806478232160",appId:"1:806478232160:web:893774803a8773caa12105",measurementId:"G-SX7YFMRCJZ"}),Q=Object(L.f)(K),V=Object(L.a)(Q,"member"),W=Object(L.a)(Q,"users"),X=function(e){var t=Object(s.useContext)(f).user;return Object(s.useEffect)((function(){}),[]),Object(x.jsxs)("div",{className:g.isMobile?"App mobile":"App",style:{height:"/"===e.location.pathname&&"100%",backgroundColor:"/main"===e.location.pathname&&"#0078D7"},children:[t&&Object(x.jsx)(y,{path:e.location.pathname}),Object(x.jsxs)("main",{className:"main",children:[Object(x.jsx)(j.a,{exact:!0,path:"/",render:function(){return Object(x.jsx)(w,{users:W})}}),Object(x.jsx)(j.a,{path:"/main",render:function(){return Object(x.jsx)(P,{users:W})}}),Object(x.jsx)(j.a,{path:"/form",render:function(){return Object(x.jsx)(U,{users:W})}}),Object(x.jsx)(j.a,{path:"/result",render:function(){return Object(x.jsx)(R,{users:W,member:V})}})]}),Object(x.jsx)(k,{})]})},Y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,450)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};l.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(v,{children:Object(x.jsx)(i.a,{children:Object(x.jsx)(j.a,{path:"/:uid?",render:function(e){return Object(x.jsx)(X,Object(n.a)({},e))}})})})}),document.getElementById("root")),Y()}},[[449,1,2]]]);
//# sourceMappingURL=main.30d22f2f.chunk.js.map