(this.webpackJsonparmy=this.webpackJsonparmy||[]).push([[0],{436:function(e,t,c){},438:function(e,t,c){},449:function(e,t,c){"use strict";c.r(t);c(132),c(142),c(143),c(144),c(145),c(146),c(147),c(148),c(149),c(150),c(151),c(152),c(153),c(154),c(155),c(191),c(193),c(194),c(195),c(196),c(197),c(199),c(157),c(202),c(203),c(100),c(207),c(208),c(210),c(211),c(212),c(213),c(214),c(215),c(219),c(220),c(221),c(222),c(223),c(224),c(225),c(162),c(226),c(228),c(230),c(231),c(232),c(233),c(234),c(235),c(236),c(237),c(238),c(239),c(240),c(241),c(242),c(243),c(244),c(164),c(245),c(246),c(247),c(248),c(249),c(250),c(251),c(252),c(253),c(255),c(257),c(259),c(261),c(262),c(263),c(265),c(266),c(267),c(268),c(269),c(270),c(271),c(273),c(274),c(275),c(276),c(277),c(278),c(279),c(280),c(281),c(167),c(282),c(283),c(284),c(285),c(291),c(292),c(293),c(294),c(295),c(296),c(298),c(299),c(300),c(301),c(302),c(303),c(304),c(305),c(170),c(308),c(309),c(310),c(311),c(312),c(313),c(314),c(123),c(315),c(316),c(319),c(320),c(321),c(322),c(323),c(324),c(325),c(326),c(327),c(328),c(329),c(330),c(331),c(332),c(333),c(334),c(335),c(336),c(337),c(338),c(339),c(340),c(341),c(342),c(348),c(349),c(350),c(351),c(352),c(353),c(354),c(355),c(356),c(357),c(358),c(359),c(360),c(361),c(362),c(363),c(364),c(365),c(366),c(367),c(368),c(369),c(370),c(371),c(372),c(373),c(374),c(375),c(376),c(377),c(378),c(379),c(380),c(381),c(383),c(384),c(387),c(388),c(389),c(390),c(392),c(178);var s=c(82),n=(c(179),c(419),c(427),c(7)),a=c.n(n),l=c(395),r=c.n(l),i=c(43),j=c(26),h=c(1),d=c.n(h),b=c(4),o=c(2),O=c(3),u=c(9),x=c(10),m=c(0),p=a.a.createContext(),v=function(e){Object(u.a)(c,e);var t=Object(x.a)(c);function c(){var e;Object(o.a)(this,c);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={url:"/",filter:null,army:null,user:null,data:null},e.setTheme=function(){var t=Object(b.a)(d.a.mark((function t(c){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({theme:c?"dark":"light"});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.setFilter=function(t){e.setState((function(e){return{filter:t}}))},e.setUser=function(t){e.setState((function(e){return{user:t}}))},e.setArmy=function(t){e.setState((function(e){return{army:t}}))},e}return Object(O.a)(c,[{key:"render",value:function(){var e=this.props.children,t=this.state,c=t.url,s=t.theme,n=t.filter,a=t.user,l=t.army,r=this.setTheme,i=this.setFilter,j=this.setUser,h=this.setArmy;return Object(m.jsx)(p.Provider,{value:{theme:s,url:c,filter:n,user:a,army:l,setTheme:r,setFilter:i,setUser:j,setArmy:h},children:e})}}]),c}(n.Component),f=p,N=(c(436),c(84)),g=(c(438),c.p+"static/media/logo.94ba7c75.svg"),y=function(e){var t=Object(n.useContext)(f),c=Object(j.e)(),s=t.user,a=function(){alert("\uc2dc\ud5d8\ubc84\uc804\uc5d0\uc120 \uc81c\uacf5\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4")};return Object(m.jsx)("header",{className:"head",children:Object(m.jsxs)("nav",{className:"nav sub",children:["/main"===e.path?Object(m.jsxs)("div",{className:"headTitle",children:[Object(m.jsx)("img",{src:g,alt:"MND"}),"\uad70 \uc18c\uc694\ubb3c\uc790 \uc2e0\uccad"]}):"admin"===s?Object(m.jsxs)("div",{className:"headTitle",children:[Object(m.jsx)("img",{src:g,alt:"MND"}),"\uad70 \uc18c\uc694\ubb3c\uc790 \uc2e0\uccad\uad00\ub9ac"]}):Object(m.jsx)("button",{className:"navButton",onClick:function(){c.push("/main")},children:Object(m.jsx)("i",{className:"ri-arrow-left-s-line"})}),"/main"!==e.path?"admin"===s?Object(m.jsxs)("div",{className:"navRes",children:[Object(m.jsxs)(i.c,{className:"navButton",exact:!0,to:"/result",children:[Object(m.jsx)("i",{className:"ri-pie-chart-2-fill"}),"\ud604\ud669"]}),Object(m.jsxs)("button",{className:"navButton",onClick:a,children:[Object(m.jsx)("i",{className:"ri-user-add-line"}),"\uad8c\ud55c"]}),Object(m.jsxs)("button",{className:"navButton",onClick:a,children:[Object(m.jsx)("i",{className:"ri-history-line"}),"\ub85c\uadf8"]}),Object(m.jsxs)("button",{className:"navButton",onClick:a,children:[Object(m.jsx)("i",{className:"ri-function-line"}),"\uba54\ub274"]}),Object(m.jsxs)("button",{className:"navButton",onClick:a,children:[Object(m.jsx)("i",{className:"ri-database-2-line"}),"DB"]})]}):Object(m.jsx)("span",{children:"\ud654\uc0dd\ubc29 \ubb3c\uc790"}):null,N.isMobile?Object(m.jsx)("button",{className:"navButton menu",onClick:a,children:Object(m.jsx)("i",{className:"ri-menu-line"})}):Object(m.jsx)("span",{className:"spaceButton",style:{width:"admin"===s?"206px":"48px"}})]})})},C=function(e){return Object(m.jsx)("footer",{className:"fix"===e.position?"foot active":"foot",children:"ministry of national defense."})};C.defaultProps={topNum:null,type:"list"};var k=C,S=c(18),F=c.p+"static/media/mnd.ed52b0e7.png",w=function(e){var t=Object(n.useState)(null),c=Object(S.a)(t,2),s=c[0],a=c[1],l=Object(n.useState)(null),r=Object(S.a)(l,2),i=r[0],h=r[1],o=Object(n.useContext)(f),O=o.army,u=o.setArmy,x=o.setUser,p=Object(n.useState)(!1),v=Object(S.a)(p,2),N=v[0],g=v[1],y=Object(j.e)(),C=/^[0-9]{6,10}$/,k=function(){var e=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C.test(s)?!C.test(i)&&h("fail"):a("fail"),"admin"===s&&"admin"===i?(x(s),y.push("/result")):C.test(s)&&"fail"!==i&&s===i?(x(s),y.push("/main")):s&&i&&s!==i&&h("same");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){a(null),h(null),u(null),x(null)}),[]),Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"login",children:[Object(m.jsx)("div",{className:"visual",children:Object(m.jsxs)("div",{className:"visualText",children:[Object(m.jsxs)("div",{className:"textGroup",children:[Object(m.jsx)("span",{children:"\uad70"}),Object(m.jsx)("span",{children:"\uc18c"}),Object(m.jsx)("span",{children:"\uc694"}),Object(m.jsx)("span",{children:"\ubb3c"}),Object(m.jsx)("span",{children:"\uc790"}),Object(m.jsx)("span",{children:"\uc2e0"}),Object(m.jsx)("span",{children:"\uccad"})]}),Object(m.jsx)("img",{className:"visualLogo",src:F,alt:"logo"})]})}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"armyWrap",children:[!O&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"armyComment",children:[Object(m.jsx)("i",{className:"ri-arrow-down-s-line"}),"\uc18c\uc18d\uad70\uc744 \uc120\ud0dd\ud558\uc138\uc694"]}),Object(m.jsxs)("div",{className:"armySelect",children:[Object(m.jsx)("input",{type:"radio",name:"type",id:"type0",value:"\uc721\uad70",onChange:function(e){var t=e.target.value;return u(t)}}),Object(m.jsx)("label",{htmlFor:"type0",className:"armyLeft",children:"\uc721\uad70"}),Object(m.jsx)("input",{type:"radio",name:"type",id:"type1",value:"\uacf5\uad70",onChange:function(e){var t=e.target.value;return u(t)}}),Object(m.jsx)("label",{htmlFor:"type1",className:"armyCenter",children:"\uacf5\uad70"}),Object(m.jsx)("input",{type:"radio",name:"type",id:"type2",value:"\ud574\uad70",onChange:function(e){var t=e.target.value;return u(t)}}),Object(m.jsx)("label",{htmlFor:"type2",className:"armyRight",children:"\ud574\uad70"})]})]}),O&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("button",{className:"back",onClick:function(){u(null),a(null),h(null),g(!1)},children:[Object(m.jsx)("i",{className:"ri-arrow-left-line"}),Object(m.jsx)("span",{children:"\uc774\uc804"})]}),Object(m.jsx)("div",{className:"input",children:Object(m.jsx)("input",{className:"id",type:"text",maxLength:10,placeholder:"\uc544\uc774\ub514",onChange:function(e){var t=e.target.value;a(t)}})}),Object(m.jsxs)("div",{className:"input",children:[Object(m.jsx)("input",{className:"pw",type:N?"text":"password",maxLength:10,placeholder:"\ube44\ubc00\ubc88\ud638",onChange:function(e){var t=e.target.value;h(t)}}),Object(m.jsx)("button",{className:"passView",onClick:function(){g(!N)},children:Object(m.jsx)("i",{className:N?"ri-eye-off-line":"ri-eye-line"})}),Object(m.jsx)("span",{className:"vali",children:null===s&&null===i?'\uc544\uc774\ub514\uc640 \ube44\ubc88\uc740 \uad70\ubc88\uc774\uba70 "-"\ub97c \uc81c\uc678\ud558\uace0 \uc785\ub825\ud558\uc138\uc694':"fail"===s?"\uc62c\ubc14\ub978 \uc544\uc774\ub514\uac00 \uc544\ub2d9\ub2c8\ub2e4":"fail"===i?"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694":"same"===i&&"\ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4"})]})]})]}),Object(m.jsx)("div",{className:"controll",children:O&&Object(m.jsx)("button",{className:"button",onClick:function(){k(s)},children:"\ud655\uc778"})})]})]})})};w.defaultProps={};var B=w,T=c.p+"static/media/clo.e05ec780.svg",H=c.p+"static/media/bio.7711ee86.svg",I=c.p+"static/media/com.047c5a0a.svg",P=c.p+"static/media/bul.97028968.svg",E=function(e){var t=Object(j.e)(),c=Object(n.useContext)(f).user;return Object(n.useEffect)((function(){!c&&t.push("/")}),[]),Object(m.jsxs)("div",{className:"mainContainer",children:[Object(m.jsxs)("div",{className:"notice",children:[Object(m.jsx)("i",{className:"ri-information-fill"}),Object(m.jsxs)("div",{className:"noticeText",children:[Object(m.jsx)("span",{children:"\ud654\uc0dd\ubc29 \ubb3c\uc790 \uc2e0\uccad \uae30\uac04\uc785\ub2c8\ub2e4"}),Object(m.jsx)("span",{className:"noticeTextSub",children:"(2021. 11. 01 ~ 03\uc77c \ubd80\ud130)"})]})]}),Object(m.jsxs)("div",{className:"buttonWrap",children:[Object(m.jsxs)(i.b,{disabled:!0,className:"button",to:"/",children:[Object(m.jsx)("img",{src:T,alt:"\ud53c\ubcf5\ub958"}),Object(m.jsx)("span",{children:"\ud53c\ubcf5\ub958"})]}),Object(m.jsxs)(i.b,{className:"button",to:"./form",children:[Object(m.jsx)("img",{src:H,alt:"\ud654\uc0dd\ubc29\ubb3c\uc790"}),Object(m.jsx)("span",{children:"\ud654\uc0dd\ubc29\ubb3c\uc790"})]}),Object(m.jsxs)(i.b,{disabled:!0,className:"button",to:"/",children:[Object(m.jsx)("img",{src:I,alt:"\ud1b5\uc2e0\ubb3c\uc790"}),Object(m.jsx)("span",{children:"\ud1b5\uc2e0\ubb3c\uc790"})]}),Object(m.jsxs)(i.b,{disabled:!0,className:"button",to:"/",children:[Object(m.jsx)("img",{src:P,alt:"\uacf5\ubcd1\ubb3c\uc790"}),Object(m.jsx)("span",{children:"\uacf5\ubcd1\ubb3c\uc790"})]})]}),Object(m.jsxs)("div",{className:"mainComment",children:[Object(m.jsx)("span",{children:"\ud544\uc694\ud55c"}),Object(m.jsx)("span",{children:"\ubb3c\uc790\ub97c"})," ",Object(m.jsx)("span",{children:"\uc120\ud0dd\ud558\uc138\uc694"})]})]})};E.defaultProps={};var A=E,G=c(48),L=function(e){var t=Object(j.e)(),c=Object(n.useContext)(f),a=c.army,l=c.setArmy,r=c.user,i=c.setUser,h=Object(n.useState)(null),o=Object(S.a)(h,2),O=o[0],u=o[1],x=Object(n.useState)(!1),p=Object(S.a)(x,2),v=p[0],N=p[1],g=Object(n.useState)(0),y=Object(S.a)(g,2),C=y[0],k=y[1],F=Object(n.useState)(null),w=Object(S.a)(F,2),B=w[0],T=w[1],H=Object(n.useState)(null),I=Object(S.a)(H,2),P=I[0],E=I[1],A=Object(n.useState)(null),L=Object(S.a)(A,2),M=L[0],U=L[1],D=Object(n.useState)(null),R=Object(S.a)(D,2),J=R[0],K=R[1],Q=Object(n.useState)(!0),V=Object(S.a)(Q,2),W=V[0],X=V[1],Y=function(){var t=Object(b.a)(d.a.mark((function t(c){var n,a,l;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=[],a=Object(G.b)(e.users,r),t.next=4,Object(G.c)(a);case 4:(l=t.sent).data()&&n.push(Object(s.a)({id:r},l.data()),u(n)),N(c),X(!1);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),z=function(){var t=Object(b.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(G.g)(Object(G.b)(e.users,r),{type:a,armor:B,gloves:P,shoes:M,mask:J},Y(!0));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.useMemo)((function(){k(B||M||P||J?C+1:0)}),[B,M,P,J]),Object(n.useEffect)((function(){r?Y(!1):t.push("/")}),[r]),Object(m.jsx)(m.Fragment,{children:O&&O.length>0?Object(m.jsxs)("div",{className:"user",children:[Object(m.jsxs)("h2",{className:"title",children:[Object(m.jsx)("div",{className:"subIcon",children:c?Object(m.jsx)("i",{className:"ri-user-add-line"}):Object(m.jsx)("i",{className:"ri-user-follow-line"})}),Object(m.jsxs)("span",{className:"subTitle",children:[Object(m.jsx)("b",{children:"\uc2e0\uccad"}),v?"\uc644\ub8cc \ub418\uc5c8\uc2b5\ub2c8\ub2e4":"\ud558\uc2e0 \ub0b4\uc5ed\uc774 \uc788\uc2b5\ub2c8\ub2e4"]})]}),Object(m.jsx)("div",{className:"comment",children:v?"\uc218\uace0\ud558\uc168\uc2b5\ub2c8\ub2e4":"\uc0ac\uc774\uc988\ub97c \ubcc0\uacbd\uc740 \uc7ac\uc2e0\uccad\uc744 \ub204\ub974\uc138\uc694"}),Object(m.jsxs)("div",{className:"controll",children:[Object(m.jsx)("button",{className:"buttonLeft",onClick:function(){T(null),U(null),E(null),K(null),u(null)},children:"\uc7ac\uc2e0\uccad"}),Object(m.jsx)("button",{className:"buttonRight",onClick:function(){u(null),T(null),U(null),E(null),K(null),l(null),i(null)},children:"\ub85c\uadf8\uc544\uc6c3"})]})]}):!W&&Object(m.jsxs)("div",{className:"order",children:[Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"accordion",children:[Object(m.jsxs)("div",{className:"accordionItem",children:[Object(m.jsxs)("h3",{className:0===C?"accordionHead active":"accordionHead",onClick:function(){k(0===C?null:0)},children:[Object(m.jsx)("span",{className:"accordionNum",children:"STEP 1"}),"\ubcf4\ud638\uc758",B?' "'+B+'" \ub97c \uc120\ud0dd\ud558\uc600\uc2b5\ub2c8\ub2e4':"\ub97c \uc120\ud0dd\ud558\uc138\uc694"]}),Object(m.jsxs)("div",{className:0===C?"accordionBody active":"accordionBody",style:{height:0===C&&336},children:[Object(m.jsx)("input",{type:"radio",name:"armor",id:"armor0",value:"\ud2b91\ud638",onChange:function(e){var t=e.target.value;return T(t)}}),Object(m.jsxs)("label",{htmlFor:"armor0",className:"label",children:[Object(m.jsx)("span",{children:"\ud2b91\ud638"}),Object(m.jsx)("span",{children:"\uc2e0\uc7a5 191cm\uc774\uc0c1"})]}),Object(m.jsx)("input",{type:"radio",name:"armor",id:"armor1",value:"1\ud638",onChange:function(e){var t=e.target.value;return T(t)}}),Object(m.jsxs)("label",{htmlFor:"armor1",className:"label",children:[Object(m.jsx)("span",{children:"1\ud638"}),Object(m.jsx)("span",{children:"\uc2e0\uc7a5 185cm - 190cm"})]}),Object(m.jsx)("input",{type:"radio",name:"armor",id:"armor2",value:"2\ud638",onChange:function(e){var t=e.target.value;return T(t)}}),Object(m.jsxs)("label",{htmlFor:"armor2",className:"label",children:[Object(m.jsx)("span",{children:"2\ud638"}),Object(m.jsx)("span",{children:"\uc2e0\uc7a5 180cm - 184cm"})]}),Object(m.jsx)("input",{type:"radio",name:"armor",id:"armor3",value:"3\ud638",onChange:function(e){var t=e.target.value;return T(t)}}),Object(m.jsxs)("label",{htmlFor:"armor3",className:"label",children:[Object(m.jsx)("span",{children:"3\ud638"}),Object(m.jsx)("span",{children:"\uc2e0\uc7a5 175cm - 179cm"})]}),Object(m.jsx)("input",{type:"radio",name:"armor",id:"armor4",value:"4\ud638",onChange:function(e){var t=e.target.value;return T(t)}}),Object(m.jsxs)("label",{htmlFor:"armor4",className:"label",children:[Object(m.jsx)("span",{children:"4\ud638"}),Object(m.jsx)("span",{children:"\uc2e0\uc7a5 170cm - 174cm"})]}),Object(m.jsx)("input",{type:"radio",name:"armor",id:"armor5",value:"5\ud638",onChange:function(e){var t=e.target.value;return T(t)}}),Object(m.jsxs)("label",{htmlFor:"armor5",className:"label",children:[Object(m.jsx)("span",{children:"5\ud638"}),Object(m.jsx)("span",{children:"\uc2e0\uc7a5 165cm - 169cm"})]}),Object(m.jsx)("input",{type:"radio",name:"armor",id:"armor6",value:"6\ud638",onChange:function(e){var t=e.target.value;return T(t)}}),Object(m.jsxs)("label",{htmlFor:"armor6",className:"label",children:[Object(m.jsx)("span",{children:"6\ud638"}),Object(m.jsx)("span",{children:"\uc2e0\uc7a5 165cm\ubbf8\ub9cc"})]})]})]}),Object(m.jsxs)("div",{className:"accordionItem",children:[Object(m.jsxs)("h3",{className:1===C?"accordionHead active":"accordionHead",onClick:function(){k(1===C?null:1)},children:[Object(m.jsx)("span",{className:"accordionNum",children:"STEP 2"}),"\ub367\uc2e0",M?' "'+M+'" \ub97c \uc120\ud0dd\ud558\uc600\uc2b5\ub2c8\ub2e4':"\uc744 \uc120\ud0dd\ud558\uc138\uc694"]}),Object(m.jsxs)("div",{className:1===C?"accordionBody active":"accordionBody",style:{height:1===C&&96},children:[Object(m.jsx)("input",{type:"radio",name:"shoes",id:"shoes0",value:"\ub300",onChange:function(e){var t=e.target.value;return U(t)}}),Object(m.jsxs)("label",{htmlFor:"shoes0",className:"label",children:[Object(m.jsx)("span",{children:"\ub300"}),Object(m.jsx)("span",{children:"\ubc1c 270mm\uc774\uc0c1"})]}),Object(m.jsx)("input",{type:"radio",name:"shoes",id:"shoes2",value:"\uc18c",onChange:function(e){var t=e.target.value;return U(t)}}),Object(m.jsxs)("label",{htmlFor:"shoes2",className:"label",children:[Object(m.jsx)("span",{children:"\uc18c"}),Object(m.jsx)("span",{children:"\ubc1c 270mm\ubbf8\ub9cc"})]})]})]}),Object(m.jsxs)("div",{className:"accordionItem",children:[Object(m.jsxs)("h3",{className:2===C?"accordionHead active":"accordionHead",onClick:function(){k(2===C?null:2)},children:[Object(m.jsx)("span",{className:"accordionNum",children:"STEP 3"}),"\uc7a5\uac11",P?' "'+P+'" \ub97c \uc120\ud0dd\ud558\uc600\uc2b5\ub2c8\ub2e4':"\uc744 \uc120\ud0dd\ud558\uc138\uc694"]}),Object(m.jsxs)("div",{className:2===C?"accordionBody active":"accordionBody",style:{height:2===C&&144},children:[Object(m.jsx)("input",{type:"radio",name:"gloves",id:"gloves0",value:"\ub300",onChange:function(e){var t=e.target.value;return E(t)}}),Object(m.jsxs)("label",{htmlFor:"gloves0",className:"label",children:[Object(m.jsx)("span",{children:"\ub300"}),Object(m.jsx)("span",{children:"\uae38\uc774 23cm\uc774\uc0c1"})]}),Object(m.jsx)("input",{type:"radio",name:"gloves",id:"gloves1",value:"\uc911",onChange:function(e){var t=e.target.value;return E(t)}}),Object(m.jsxs)("label",{htmlFor:"gloves1",className:"label",children:[Object(m.jsx)("span",{children:"\uc911"}),Object(m.jsx)("span",{children:"\uae38\uc774 20 - 22cm"})]}),Object(m.jsx)("input",{type:"radio",name:"gloves",id:"gloves2",value:"\uc18c",onChange:function(e){var t=e.target.value;return E(t)}}),Object(m.jsxs)("label",{htmlFor:"gloves2",className:"label",children:[Object(m.jsx)("span",{children:"\uc18c"}),Object(m.jsx)("span",{children:"\uae38\uc774 19cm\uc774\ud558"})]})]})]}),Object(m.jsxs)("div",{className:"accordionItem",children:[Object(m.jsxs)("h3",{className:3===C?"accordionHead active":"accordionHead",onClick:function(){k(3===C?null:3)},children:[Object(m.jsx)("span",{className:"accordionNum",children:"STEP 4"}),"\ubc29\ub3c5\uba74",J?' "'+J+'" \ub97c \uc120\ud0dd\ud558\uc600\uc2b5\ub2c8\ub2e4':"\uc744 \uc120\ud0dd\ud558\uc138\uc694"]}),Object(m.jsxs)("div",{className:3===C?"accordionBody active":"accordionBody",style:{height:3===C&&192},children:[Object(m.jsx)("input",{type:"radio",name:"mask",id:"mask0",value:"\ud2b9\ub300",onChange:function(e){var t=e.target.value;return K(t)}}),Object(m.jsxs)("label",{htmlFor:"mask0",className:"label",children:[Object(m.jsx)("span",{children:"\ud2b9\ub300"}),Object(m.jsx)("span",{children:"XL"})]}),Object(m.jsx)("input",{type:"radio",name:"mask",id:"mask1",value:"\ub300",onChange:function(e){var t=e.target.value;return K(t)}}),Object(m.jsxs)("label",{htmlFor:"mask1",className:"label",children:[Object(m.jsx)("span",{children:"\ub300"}),Object(m.jsx)("span",{children:"L"})]}),Object(m.jsx)("input",{type:"radio",name:"mask",id:"mask2",value:"\uc911",onChange:function(e){var t=e.target.value;return K(t)}}),Object(m.jsxs)("label",{htmlFor:"mask2",className:"label",children:[Object(m.jsx)("span",{children:"\uc911"}),Object(m.jsx)("span",{children:"M"})]}),Object(m.jsx)("input",{type:"radio",name:"mask",id:"mask3",value:"\uc18c",onChange:function(e){var t=e.target.value;return K(t)}}),Object(m.jsxs)("label",{htmlFor:"mask3",className:"label",children:[Object(m.jsx)("span",{children:"\uc18c"}),Object(m.jsx)("span",{children:"S"})]})]})]})]})}),Object(m.jsxs)("div",{className:"controll",children:[Object(m.jsx)("p",{children:B&&M&&P&&J?"\uc120\ud0dd\ud558\uc2e0 \uc0ac\uc774\uc988\ub85c \uc2e0\uccad\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c":r+"\ub2d8 \uc0ac\uc774\uc988\uc5d0 \ub9de\uac8c \uc120\ud0dd\ud574\uc8fc\uc138\uc694"}),Object(m.jsx)("button",{className:"button",disabled:!B||!M||!P||!J,onClick:function(){z()},children:"\uc2e0\uccad"})]})]})})};L.defaultProps={};var M=L,U=c(14),D=c.n(U),R=(c(448),function(e){var t=Object(j.e)(),c=Object(n.useContext)(f).user,a=Object(n.useState)(null),l=Object(S.a)(a,2),r=l[0],i=l[1],h=Object(n.useState)({"\uc721\uad70":{armor:{"\ud2b91\ud638":[],"1\ud638":[],"2\ud638":[],"3\ud638":[],"4\ud638":[],"5\ud638":[],"6\ud638":[],"\uc18c\uacc4":[""]},shoes:{"\ub300":[],"\uc18c":[],"\uc18c\uacc4":[""]},gloves:{"\ub300":[],"\uc911":[],"\uc18c":[],"\uc18c\uacc4":[""]},mask:{"\ud2b9\ub300":[],"\ub300":[],"\uc911":[],"\uc18c":[],"\uc18c\uacc4":[""]}},"\uacf5\uad70":{armor:{"\ud2b91\ud638":[],"1\ud638":[],"2\ud638":[],"3\ud638":[],"4\ud638":[],"5\ud638":[],"6\ud638":[],"\uc18c\uacc4":[""]},shoes:{"\ub300":[],"\uc18c":[],"\uc18c\uacc4":[""]},gloves:{"\ub300":[],"\uc911":[],"\uc18c":[],"\uc18c\uacc4":[""]},mask:{"\ud2b9\ub300":[],"\ub300":[],"\uc911":[],"\uc18c":[],"\uc18c\uacc4":[""]}},"\ud574\uad70":{armor:{"\ud2b91\ud638":[],"1\ud638":[],"2\ud638":[],"3\ud638":[],"4\ud638":[],"5\ud638":[],"6\ud638":[],"\uc18c\uacc4":[""]},shoes:{"\ub300":[],"\uc18c":[],"\uc18c\uacc4":[""]},gloves:{"\ub300":[],"\uc911":[],"\uc18c":[],"\uc18c\uacc4":[""]},mask:{"\ud2b9\ub300":[],"\ub300":[],"\uc911":[],"\uc18c":[],"\uc18c\uacc4":[""]}}}),o=Object(S.a)(h,2),O=o[0],u=o[1],x=function(){alert("\uc2dc\ud5d8\ubc84\uc804\uc5d0\uc120 \uc81c\uacf5\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4")},p=function(e,t,c){return e.reduce((function(s,n){var a=n[t];return void 0===s[a]&&(s[a]=[]),s[a].push(n),c&&(s["\uc18c\uacc4"]=[e.length]),s}),{})},v=function(){var t=Object(b.a)(d.a.mark((function t(){var c,n,a,l,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=[],n=Object(G.f)(e.users,Object(G.h)("type","!=","")),t.next=4,Object(G.d)(n);case 4:t.sent.forEach((function(e){c.push(Object(s.a)({id:e.id},e.data()))})),a=p(c,"type"),l={},D.a.map(a,(function(e,t){var c=l[t]={};c.armor=p(e,"armor",!0),c.shoes=p(e,"shoes",!0),c.gloves=p(e,"gloves",!0),c.mask=p(e,"mask",!0)})),r=D.a.merge({},O,l),u(r),i(c);case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){"admin"!==c?t.push("/"):v()}),[]),Object(m.jsxs)("div",{className:"resultContainer",children:[N.isMobile?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"total",children:[Object(m.jsxs)("div",{className:"resultHead",children:[Object(m.jsx)("h2",{className:"title",children:"\uc885\ud569\ud604\ud669 - \ud654\uc0dd\ubc29 \ubb3c\uc790(\ubcf4\ud638\uc758)"}),Object(m.jsx)("div",{className:"buttonGroup",children:Object(m.jsx)("button",{onClick:v,children:Object(m.jsx)("i",{className:"ri-refresh-line"})})})]}),Object(m.jsx)("div",{className:"tableContents",children:Object(m.jsxs)("table",{className:"table",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"\uad70"}),Object(m.jsx)("th",{children:"\uc18c\uc18d"}),Object(m.jsx)("th",{children:"\ud2b91\ud638"}),Object(m.jsx)("th",{children:"1\ud638"}),Object(m.jsx)("th",{children:"2\ud638"}),Object(m.jsx)("th",{children:"3\ud638"}),Object(m.jsx)("th",{children:"4\ud638"}),Object(m.jsx)("th",{children:"5\ud638"}),Object(m.jsx)("th",{children:"6\ud638"}),Object(m.jsx)("th",{className:"sum",children:"\uc18c\uacc4"})]})}),Object(m.jsx)("tbody",{children:Object.entries(O).map((function(e){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e[0]}),Object(m.jsx)("td",{children:"-"}),Object.entries(e[1]).map((function(e){return"armor"===e[0]&&Object.entries(e[1]).map((function(e,t){return Object(m.jsx)("td",{className:"\uc18c\uacc4"===e[0]?"sum":null,children:"\uc18c\uacc4"===e[0]?e[1]:e[1].length>0?e[1].length:null},e[0]+e[1])}))}))]},e[0]+e[1])}))}),Object(m.jsx)("tfoot",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{colSpan:"2",children:"\uacc4"}),Object(m.jsx)("th",{children:r&&D.a.filter(r,{armor:"\ud2b91\ud638"}).length}),Object(m.jsx)("th",{children:r&&D.a.filter(r,{armor:"1\ud638"}).length}),Object(m.jsx)("th",{children:r&&D.a.filter(r,{armor:"2\ud638"}).length}),Object(m.jsx)("th",{children:r&&D.a.filter(r,{armor:"3\ud638"}).length}),Object(m.jsx)("th",{children:r&&D.a.filter(r,{armor:"4\ud638"}).length}),Object(m.jsx)("th",{children:r&&D.a.filter(r,{armor:"5\ud638"}).length}),Object(m.jsx)("th",{children:r&&D.a.filter(r,{armor:"6\ud638"}).length}),Object(m.jsx)("th",{children:r&&r.length})]})})]})})]}),Object(m.jsxs)("div",{className:"total",children:[Object(m.jsxs)("div",{className:"resultHead",children:[Object(m.jsx)("h2",{className:"title",children:"\uc885\ud569\ud604\ud669 - \ud654\uc0dd\ubc29 \ubb3c\uc790(\ub367\uc2e0)"}),Object(m.jsx)("div",{className:"buttonGroup",children:Object(m.jsx)("button",{onClick:v,children:Object(m.jsx)("i",{className:"ri-refresh-line"})})})]}),Object(m.jsx)("div",{className:"tableContents",children:Object(m.jsxs)("table",{className:"table",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"\uad70"}),Object(m.jsx)("th",{children:"\uc18c\uc18d"}),Object(m.jsx)("th",{children:"\ub300"}),Object(m.jsx)("th",{children:"\uc18c"}),Object(m.jsx)("th",{className:"sum",children:"\uc18c\uacc4"})]})}),Object(m.jsx)("tbody",{children:Object.entries(O).map((function(e){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e[0]}),Object(m.jsx)("td",{children:"-"}),Object.entries(e[1]).map((function(e){return"shoes"===e[0]&&Object.entries(e[1]).map((function(e,t){return Object(m.jsx)("td",{className:"\uc18c\uacc4"===e[0]?"sum":null,children:"\uc18c\uacc4"===e[0]?e[1]:e[1].length>0?e[1].length:null},e[0]+e[1])}))}))]},e[0]+e[1])}))}),Object(m.jsx)("tfoot",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{colSpan:"2",children:"\uacc4"}),Object(m.jsx)("th",{children:r&&D.a.filter(r,{shoes:"\ub300"}).length}),Object(m.jsx)("th",{children:r&&D.a.filter(r,{shoes:"\uc18c"}).length}),Object(m.jsx)("th",{children:r&&r.length})]})})]})})]}),Object(m.jsxs)("div",{className:"total",children:[Object(m.jsxs)("div",{className:"resultHead",children:[Object(m.jsx)("h2",{className:"title",children:"\uc885\ud569\ud604\ud669 - \ud654\uc0dd\ubc29 \ubb3c\uc790(\uc7a5\uac11)"}),Object(m.jsx)("div",{className:"buttonGroup",children:Object(m.jsx)("button",{onClick:v,children:Object(m.jsx)("i",{className:"ri-refresh-line"})})})]}),Object(m.jsx)("div",{className:"tableContents",children:Object(m.jsxs)("table",{className:"table",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"\uad70"}),Object(m.jsx)("th",{children:"\uc18c\uc18d"}),Object(m.jsx)("th",{children:"\ub300"}),Object(m.jsx)("th",{children:"\uc911"}),Object(m.jsx)("th",{children:"\uc18c"}),Object(m.jsx)("th",{className:"sum",children:"\uc18c\uacc4"})]})}),Object(m.jsx)("tbody",{children:Object.entries(O).map((function(e){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e[0]}),Object(m.jsx)("td",{children:"-"}),Object.entries(e[1]).map((function(e){return"gloves"===e[0]&&Object.entries(e[1]).map((function(e,t){return Object(m.jsx)("td",{className:"\uc18c\uacc4"===e[0]?"sum":null,children:"\uc18c\uacc4"===e[0]?e[1]:e[1].length>0?e[1].length:null},e[0]+e[1])}))}))]},e[0]+e[1])}))}),Object(m.jsx)("tfoot",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{colSpan:"2",children:"\uacc4"}),Object(m.jsx)("th",{children:r&&D.a.filter(r,{gloves:"\ub300"}).length}),Object(m.jsx)("th",{children:r&&D.a.filter(r,{gloves:"\uc911"}).length}),Object(m.jsx)("th",{children:r&&D.a.filter(r,{gloves:"\uc18c"}).length}),Object(m.jsx)("th",{children:r&&r.length})]})})]})})]}),Object(m.jsxs)("div",{className:"total",children:[Object(m.jsxs)("div",{className:"resultHead",children:[Object(m.jsx)("h2",{className:"title",children:"\uc885\ud569\ud604\ud669 - \ud654\uc0dd\ubc29 \ubb3c\uc790(\ubc29\ub3c5\uba74)"}),Object(m.jsx)("div",{className:"buttonGroup",children:Object(m.jsx)("button",{onClick:v,children:Object(m.jsx)("i",{className:"ri-refresh-line"})})})]}),Object(m.jsx)("div",{className:"tableContents",children:Object(m.jsxs)("table",{className:"table",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"\uad70"}),Object(m.jsx)("th",{children:"\uc18c\uc18d"}),Object(m.jsx)("th",{children:"\ud2b9\ub300"}),Object(m.jsx)("th",{children:"\ub300"}),Object(m.jsx)("th",{children:"\uc911"}),Object(m.jsx)("th",{children:"\uc18c"}),Object(m.jsx)("th",{className:"sum",children:"\uc18c\uacc4"})]})}),Object(m.jsx)("tbody",{children:Object.entries(O).map((function(e){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e[0]}),Object(m.jsx)("td",{children:"-"}),Object.entries(e[1]).map((function(e){return"mask"===e[0]&&Object.entries(e[1]).map((function(e,t){return Object(m.jsx)("td",{className:"\uc18c\uacc4"===e[0]?"sum":null,children:"\uc18c\uacc4"===e[0]?e[1]:e[1].length>0?e[1].length:null},e[0]+e[1])}))}))]},e[0]+e[1])}))}),Object(m.jsx)("tfoot",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{colSpan:"2",children:"\uacc4"}),Object(m.jsx)("th",{children:r&&D.a.filter(r,{mask:"\ud2b9\ub300"}).length}),Object(m.jsx)("th",{children:r&&D.a.filter(r,{mask:"\ub300"}).length}),Object(m.jsx)("th",{children:r&&D.a.filter(r,{mask:"\uc911"}).length}),Object(m.jsx)("th",{children:r&&D.a.filter(r,{mask:"\uc18c"}).length}),Object(m.jsx)("th",{children:r&&r.length})]})})]})})]})]}):Object(m.jsxs)("div",{className:"total",children:[Object(m.jsxs)("div",{className:"resultHead",children:[Object(m.jsx)("h2",{className:"title",children:"\uc885\ud569\uc18c\uc694 \ud604\ud669 - \ud654\uc0dd\ubc29 \ubb3c\uc790"}),Object(m.jsxs)("div",{className:"buttonGroup",children:[Object(m.jsxs)("button",{onClick:v,children:[Object(m.jsx)("i",{className:"ri-refresh-line"}),"\uc7ac\uc870\ud68c"]}),Object(m.jsxs)("div",{className:"wrap",children:[Object(m.jsxs)("button",{disabled:!0,onClick:x,children:[Object(m.jsx)("i",{className:"ri-folder-upload-line"}),"\uc18c\uc694\ud604\ud669 \uc5c5\ub85c\ub4dc"]}),Object(m.jsxs)("button",{disabled:!0,onClick:x,children:[Object(m.jsx)("i",{className:"ri-folder-download-line"}),"\ubd80\ub300\ubcc4 \ud604\ud669 \ub2e4\uc6b4\ub85c\ub4dc"]}),Object(m.jsxs)("button",{disabled:!0,onClick:x,children:[Object(m.jsx)("i",{className:"ri-printer-line"}),"\uc778\uc1c4"]})]})]})]}),Object(m.jsx)("div",{className:"tableContents",children:Object(m.jsxs)("table",{className:"table",children:[Object(m.jsxs)("thead",{children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{rowSpan:"2",children:"\uad70"}),Object(m.jsx)("th",{rowSpan:"2",children:"\uc18c\uc18d"}),Object(m.jsx)("th",{colSpan:"8",children:"\ubcf4\ud638\uc758"}),Object(m.jsx)("th",{colSpan:"3",children:"\ub367\uc2e0"}),Object(m.jsx)("th",{colSpan:"4",children:"\uc7a5\uac11"}),Object(m.jsx)("th",{colSpan:"5",children:"\ubc29\ub3c5\uba74"})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"\ud2b91\ud638"}),Object(m.jsx)("th",{children:"1\ud638"}),Object(m.jsx)("th",{children:"2\ud638"}),Object(m.jsx)("th",{children:"3\ud638"}),Object(m.jsx)("th",{children:"4\ud638"}),Object(m.jsx)("th",{children:"5\ud638"}),Object(m.jsx)("th",{children:"6\ud638"}),Object(m.jsx)("th",{className:"sum",children:"\uc18c\uacc4"}),Object(m.jsx)("th",{children:"\ub300"}),Object(m.jsx)("th",{children:"\uc18c"}),Object(m.jsx)("th",{className:"sum",children:"\uc18c\uacc4"}),Object(m.jsx)("th",{children:"\ub300"}),Object(m.jsx)("th",{children:"\uc911"}),Object(m.jsx)("th",{children:"\uc18c"}),Object(m.jsx)("th",{className:"sum",children:"\uc18c\uacc4"}),Object(m.jsx)("th",{children:"\ud2b9\ub300"}),Object(m.jsx)("th",{children:"\ub300"}),Object(m.jsx)("th",{children:"\uc911"}),Object(m.jsx)("th",{children:"\uc18c"}),Object(m.jsx)("th",{className:"sum",children:"\uc18c\uacc4"})]})]}),Object(m.jsx)("tbody",{children:Object.entries(O).map((function(e){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e[0]}),Object(m.jsx)("td",{children:"-"}),Object.entries(e[1]).map((function(e){return""!==e[0]&&Object.entries(e[1]).map((function(e,t){return Object(m.jsx)("td",{className:"\uc18c\uacc4"===e[0]?"sum":null,children:"\uc18c\uacc4"===e[0]?e[1]:e[1].length>0?e[1].length:null},e[0]+e[1])}))}))]},e[0]+e[1])}))}),Object(m.jsx)("tfoot",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{colSpan:"2",children:"\uacc4"}),Object(m.jsx)("th",{children:r&&D.a.filter(r,{armor:"\ud2b91\ud638"}).length}),Object(m.jsx)("th",{children:r&&D.a.filter(r,{armor:"1\ud638"}).length}),Object(m.jsx)("th",{children:r&&D.a.filter(r,{armor:"2\ud638"}).length}),Object(m.jsx)("th",{children:r&&D.a.filter(r,{armor:"3\ud638"}).length}),Object(m.jsx)("th",{children:r&&D.a.filter(r,{armor:"4\ud638"}).length}),Object(m.jsx)("th",{children:r&&D.a.filter(r,{armor:"5\ud638"}).length}),Object(m.jsx)("th",{children:r&&D.a.filter(r,{armor:"6\ud638"}).length}),Object(m.jsx)("th",{children:r&&r.length}),Object(m.jsx)("th",{children:r&&D.a.filter(r,{shoes:"\ub300"}).length}),Object(m.jsx)("th",{children:r&&D.a.filter(r,{shoes:"\uc18c"}).length}),Object(m.jsx)("th",{children:r&&r.length}),Object(m.jsx)("th",{children:r&&D.a.filter(r,{gloves:"\ub300"}).length}),Object(m.jsx)("th",{children:r&&D.a.filter(r,{gloves:"\uc911"}).length}),Object(m.jsx)("th",{children:r&&D.a.filter(r,{gloves:"\uc18c"}).length}),Object(m.jsx)("th",{children:r&&r.length}),Object(m.jsx)("th",{children:r&&D.a.filter(r,{mask:"\ud2b9\ub300"}).length}),Object(m.jsx)("th",{children:r&&D.a.filter(r,{mask:"\ub300"}).length}),Object(m.jsx)("th",{children:r&&D.a.filter(r,{mask:"\uc911"}).length}),Object(m.jsx)("th",{children:r&&D.a.filter(r,{mask:"\uc18c"}).length}),Object(m.jsx)("th",{children:r&&r.length})]})})]})})]}),Object(m.jsxs)("div",{className:"users",children:[Object(m.jsxs)("div",{className:"resultHead",children:[Object(m.jsx)("h2",{className:"title",children:"\uc2e0\uccad\uc790 \ud604\ud669"}),Object(m.jsx)("div",{className:"buttonGroup",style:{display:"none"},children:Object(m.jsxs)("div",{className:"wrap",children:[Object(m.jsxs)("button",{disabled:!0,onClick:x,children:[Object(m.jsx)("i",{className:"ri-user-voice-line"}),"\ubbf8\uc2e0\uccad\uc790 \uc790\ub3d9\uc548\ub0b4"]}),Object(m.jsxs)("button",{disabled:!0,onClick:x,children:[Object(m.jsx)("i",{className:"ri-user-search-line"}),"\ubbf8\uc2e0\uccad\ud604\ud669 \ub2e4\uc6b4\ub85c\ub4dc"]}),Object(m.jsxs)("button",{disabled:!0,onClick:x,children:[Object(m.jsx)("i",{className:"ri-shield-check-line"}),"\ubd80\ub300\ubcc4 \uacfc\ubd80\uc871\uc18c\uc694\ud655\uc778"]}),Object(m.jsxs)("button",{disabled:!0,onClick:x,children:[Object(m.jsx)("i",{className:"ri-file-shield-2-line"}),"\ubd80\ub300\ubcc4 \uc18c\uc694\uc774\uad00"]})]})})]}),Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:"tableContents",children:Object(m.jsxs)("table",{className:"table",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{className:"hide",children:"\uc21c\ubc88"}),Object(m.jsx)("th",{children:"\uc18c\uc18d"}),Object(m.jsx)("th",{children:"\uad70\ubc88"}),Object(m.jsx)("th",{children:"\ubcf4\ud638\uc758"}),Object(m.jsx)("th",{children:"\ub367\uc2e0"}),Object(m.jsx)("th",{children:"\uc7a5\uac11"}),Object(m.jsx)("th",{children:"\ubc29\ub3c5\uba74"}),Object(m.jsx)("th",{className:"hide",children:"\ubcc0\uacbd"})]})}),Object(m.jsx)("tbody",{children:r&&Object.entries(r).map((function(e,t){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{className:"hide",children:e[0]}),Object(m.jsx)("td",{children:e[1].type}),Object(m.jsx)("td",{children:e[1].id}),Object(m.jsx)("td",{children:e[1].armor}),Object(m.jsx)("td",{children:e[1].shoes}),Object(m.jsx)("td",{children:e[1].gloves}),Object(m.jsx)("td",{children:e[1].mask}),Object(m.jsx)("td",{className:"hide",children:Object(m.jsx)("i",{className:"ri-edit-fill"})})]},e[0]+e[1])}))}),Object(m.jsx)("tfoot",{})]})})})]})]})});R.defaultProps={};var J=R,K=c(398),Q=Object(K.a)({apiKey:"AIzaSyD4lFYlGsKryHvQUF5CT3wUdhnU_uQBVUA",authDomain:"army-c3fb4.firebaseapp.com",projectId:"army-c3fb4",storageBucket:"army-c3fb4.appspot.com",messagingSenderId:"806478232160",appId:"1:806478232160:web:893774803a8773caa12105",measurementId:"G-SX7YFMRCJZ"}),V=Object(G.e)(Q),W=Object(G.a)(V,"users"),X=function(e){var t=Object(n.useContext)(f).user;return Object(n.useEffect)((function(){}),[]),Object(m.jsxs)("div",{className:N.isMobile?"App mobile":"App",style:{height:"/"===e.location.pathname&&"100%",backgroundColor:"/main"===e.location.pathname&&"#0078D7"},children:[t&&Object(m.jsx)(y,{path:e.location.pathname}),Object(m.jsxs)("main",{className:"main",children:[Object(m.jsx)(j.a,{exact:!0,path:"/",render:function(){return Object(m.jsx)(B,{users:W})}}),Object(m.jsx)(j.a,{path:"/main",render:function(){return Object(m.jsx)(A,{users:W})}}),Object(m.jsx)(j.a,{path:"/form",render:function(){return Object(m.jsx)(M,{users:W})}}),Object(m.jsx)(j.a,{path:"/result",render:function(){return Object(m.jsx)(J,{users:W})}})]}),Object(m.jsx)(k,{})]})},Y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,450)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,l=t.getTTFB;c(e),s(e),n(e),a(e),l(e)}))};r.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(v,{children:Object(m.jsx)(i.a,{children:Object(m.jsx)(j.a,{path:"/:uid?",render:function(e){return Object(m.jsx)(X,Object(s.a)({},e))}})})})}),document.getElementById("root")),Y()}},[[449,1,2]]]);
//# sourceMappingURL=main.3bfe7020.chunk.js.map