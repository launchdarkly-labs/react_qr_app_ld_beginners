(this.webpackJsonpreact_node_ff=this.webpackJsonpreact_node_ff||[]).push([[0],{103:function(e,t,s){"use strict";s.r(t);var a=s(6),c=s.n(a),r=s(13),n=s(3),i=s(27),o=s.n(i),A=(s(53),s(47)),l=(s(54),s(4)),u=s(14),j=(s(83),s(46)),d=s(1),b=Object(l.withLDConsumer)()((function(e){var t=e.flags,s=e.ldClient.variation("config-chatbot-personality");function a(e){return n.apply(this,arguments)}function n(){return n=Object(r.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("placeholder"!==s){e.next=4;break}return e.abrupt("return","Error: Bot not found.");case 4:return e.next=6,j.a.get(t);case 6:return a=e.sent,e.abrupt("return",a.data.answer);case 8:case"end":return e.stop()}}),e)}))),n.apply(this,arguments)}var i=function(){var e=Object(r.a)(c.a.mark((function e(t){var s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("New message incoming! ".concat(t)),e.next=3,a("https://fxbft3m9yf.execute-api.us-east-2.amazonaws.com/default/answer?question="+t.trim().replace(/\s/g,"%20"));case 3:s=e.sent,Object(u.addResponseMessage)(s);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return t.showChatbot?Object(d.jsx)("div",{children:Object(d.jsx)(u.Widget,{handleNewUserMessage:i,title:"pirate"===s?"ARRRRobot":"mean"===s?"Stack Overflow Bot":"Answerbot",subtitle:"pirate"===s?"Here there be answers":"mean"===s?"Did you google it first?":"e.g. How big is the Earth?",titleAvatar:"pirate"===s?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAsCAYAAAD8WEF4AAAAAXNSR0IArs4c6QAAAXZJREFUWEftl0ESgyAMRfFg7ryHZ/Me7jwYHZziYIiSH1Jap3TThUAejx9qB/egz2DM6pn1zGqYLeSc40Aju0kdk0UKoGbAFrB3RmkqqupVTaZGvc+5hyEroa55NTGtKhmzGwywAY5+A013W5cDkXQ0e/RCs1cZLtalsEj+2FtPYBW9LQ/GFFYNGo0y+dwjET7cM4B65zQ1m4IZQZ4YpZkVS0hzW2kzkynu9BItZ7LSLnTniTIsAZKMITJYiaULWgRcsg4+v2Qqwm7bBtZybhxHp53HNP1R/79hpVbXdXXTNJ1OLcxtZlYKGgkpcDNYFDQAfxz2vfus6TQN9ZOwcYN0Qx02PXPLGNAsmTaYpomQX5Rq2LSYpomawn4akIlY23cDCiDdcHUMpIUCINd8ivnfM9sze2HAI8eIWOTGNs1sh00MFP8p1NpSzFffBmgtvyzLMWee59s3f3Txkll0vQ4bjVmbRU8CGt9hIV3A4G4WkAUNfZTZF2rl1y2TLCXsAAAAAElFTkSuQmCC":"mean"===s?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAsCAYAAAD8WEF4AAAAAXNSR0IArs4c6QAAAQdJREFUWEftl8ERwiAQRZMavHq0DWpJbdRCGx69WkMcJsHBKLAfF2bQn4uH7C7Pt7BJ5mmgax6IdSJsq27R7BBm7+fLegQ93a5q3VMr5CEJG7Xqf81GEvzeVRXha6sX3IEJ+1Nm3+Zmq4EvOfQls6tzrgPftoQxJnuOCFvbCpqtNVfKUze7F3xZt3QIpTnqsEc7ASQFXLof12sK64t7yPD7qc2SmJDXFLa0B9H7hEWNSeNpVmoKjetqVjpPU3+iG2xqfOXGWmJmJ1+u+NaF7lU+FGqNSfO+PmDShRTjqg8YyrBaa585y7Jkv6nQ4qVpgNYjbDCmbRbtBBRPWEgXEEyzgCwodCizD8YSjy0jRVv4AAAAAElFTkSuQmCC":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAsCAYAAAD8WEF4AAAAAXNSR0IArs4c6QAAAP5JREFUWEftmE0SwiAMRttruPAmXMMtZ2PrNbiJC6+BgxaHqUIIBEbs112nJH19SdOfdZloWydiXQDbq1owO4XZ8/3i9qC301WsemKJPCRgo1Id12wkwfeuqAifWzzhBgzYvzL7MTd7DfySm54y66y1A/hep1BKZe8jwNaWAmZrzVFxxza7Xf1TUs2kyMWLmvXJYsD9fkmZc/GisBRM63HAthpMxcPs1GapqUAdDxc/rA1SQKWgw9+64oEfbHEeHMPMSvQxYCUsfsvRbLYXWCZv8uuF+qzhsjpjzDtGay36bwKwQe2vm+W2DWu9dBuwTs5dDFiusdL1MFtqirvuATbejy3Wg6s7AAAAAElFTkSuQmCC",senderPlaceHolder:"Ask a question"})}):Object(d.jsx)("div",{})})),g=s(45),m=s.n(g),f=Object(l.withLDConsumer)()((function(e){return e.flags.showQrCode?Object(d.jsxs)("div",{children:[Object(d.jsx)("br",{}),Object(d.jsx)("span",{style:{color:"black"},children:Object(d.jsx)("center",{children:"Scan me!"})}),Object(d.jsx)("div",{className:"qr-wrapper",children:Object(d.jsx)(m.a,{value:"https://launchdarkly-labs.github.io/react_qr_app_ld_beginners/"})})]}):Object(d.jsx)("div",{})})),p=s.p+"static/media/ld_logo_white.c7ccd94b.png",h=s.p+"static/media/ld_logo_white_old.a7492e3d.png",O=Object(l.withLDConsumer)()((function(e){return e.flags.releaseHeaderLogo?Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:p,className:"LD-logo",alt:"logo"})}):Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:h,className:"LD-logo",alt:"logo"})})})),x=s.p+"static/media/heart.3d7839e5.svg",v=Object(l.withLDConsumer)()((function(e){return e.flags.releaseHeart?Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:x,className:"heart",alt:"heart"})}):Object(d.jsx)("div",{})})),w=Object(l.withLDConsumer)()((function(e){var t=e.flags,s=e.ldClient.variation("config-customer-logo");return t.showCustomerLogo?Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:s,className:"customer-logo",alt:"customerLogo"})}):Object(d.jsx)("div",{})})),C=s.p+"static/media/astronaut.1d752285.png",N=s.p+"static/media/astronaut_old.09554e17.png",y=Object(l.withLDConsumer)()((function(e){var t=e.flags;e.ldClient;return t.releaseAstronaut?Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:C,className:"astronaut-logo",alt:"logo"})}):Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:N,className:"astronaut-logo",alt:"logo"})})}));var E=function(){var e=Object(n.useState)("gray-app-header"),t=Object(A.a)(e,2),s=t[0],a=t[1],c=Object(l.useFlags)().configBackgroundColor;return Object(n.useEffect)((function(){a("gray-app-header");a(c+"-app-header")}),[c]),Object(n.useEffect)((function(){Object(u.addResponseMessage)("Hi there! Ask me a question!")}),[]),Object(d.jsxs)("div",{className:s,children:[Object(d.jsx)("div",{className:"black-header",children:Object(d.jsx)(O,{})}),Object(d.jsxs)("div",{className:s,children:[Object(d.jsx)(v,{}),Object(d.jsx)(w,{}),Object(d.jsx)(f,{}),Object(d.jsx)("br",{}),Object(d.jsx)(y,{}),Object(d.jsx)("div",{className:"chatbot",children:Object(d.jsx)(b,{})})]})]})},D=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,106)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,n=t.getTTFB;s(e),a(e),c(e),r(e),n(e)}))},L=s(28),R=s(105),F=s(23),S=s.n(F);var k=function(){var e;return S.a.get("LD_User_Key")?e=S.a.get("LD_User_Key"):(e=Object(R.a)(),S.a.set("LD_User_Key",e)),e}();Object(r.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.asyncWithLDProvider)({clientSideID:"63ea528ee871791399779bc8",user:{key:k,custom:{device:L.deviceType,operatingSystem:L.osName}}});case 2:t=e.sent,o.a.render(Object(d.jsx)(t,{children:Object(d.jsx)(E,{})}),document.getElementById("root"));case 4:case"end":return e.stop()}}),e)})))(),D()},53:function(e,t,s){},54:function(e,t,s){}},[[103,1,2]]]);
//# sourceMappingURL=main.664eba21.chunk.js.map