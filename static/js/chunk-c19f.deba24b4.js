(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-c19f"],{"0tVQ":function(t,e,n){n("FlQf"),n("VJsP"),t.exports=n("WEpk").Array.from},A0Vb:function(t,e,n){"use strict";n.r(e);var i=n("sMoi"),s=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e.default=s.a},An3H:function(t,e,n){"use strict";n.r(e);var i=n("E+Ba"),s=n("A0Vb");for(var r in s)"default"!==r&&function(t){n.d(e,t,(function(){return s[t]}))}(r);n("GoWK");var a=n("KHd+"),u=Object(a.a)(s.default,i.a,i.b,!1,null,"0c6c5aeb",null);u.options.__file="my_auction.vue",e.default=u.exports},"E+Ba":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"my-auction"},[n("div",{staticClass:"left"},[n("div",{staticClass:"title"},[t._v(t._s(t.$t("app.myAuction")))]),t._v(" "),n("div",{staticClass:"total"})]),t._v(" "),n("div",{staticClass:"right"})]),t._v(" "),n("div",[n("div",{staticClass:"auction-container"},[n("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:t.$t("auction.mySelling"),name:"first"}},[n("div",{staticClass:"header"},[n("div",{staticClass:"uri"},[t._v(t._s(t.$t("auction.domain")))]),t._v(" "),n("div",{staticClass:"bidder"},[t._v(t._s(t.$t("auction.bidder")))]),t._v(" "),n("div",{staticClass:"price"},[t._v(t._s(t.$t("auction.currentPrice")))]),t._v(" "),n("div",{staticClass:"expires"},[t._v(t._s(t.$t("auction.endTime")))]),t._v(" "),n("div",{staticClass:"status"},[t._v(t._s(t.$t("auction.status")))]),t._v(" "),n("div",{staticClass:"operate"},[t._v(t._s(t.$t("auction.operate")))])]),t._v(" "),t._l(t.createdAuctions,(function(e){return t.createdAuctionCount>0?n("div",{key:e.id,staticClass:"row"},[n("div",{staticClass:"uri"},[t._v(t._s(e.tokenURI))]),t._v(" "),n("div",{staticClass:"bidder"},[t._v(t._s("0x0000000000000000000000000000000000000000"==e.bidder?"------":t.subAddress(e.bidder)))]),t._v(" "),n("div",{staticClass:"price"},[t._v(t._s(e.price)+" $")]),t._v(" "),n("div",{staticClass:"expires",class:{endClass:e.isEnd&&0==e.status}},[t._v(t._s(t.timeToDate(e.expires)))]),t._v(" "),n("div",{staticClass:"status"},[0==e.status&&"0x0000000000000000000000000000000000000000"!=e.bidder?n("span",{staticClass:"atAuction"},[e.isEnd||e.isWinner?t._e():n("span",[t._v(t._s(t.$t("app.atAuction")))]),t._v(" "),e.isEnd?n("span",[t._v(t._s(t.$t("auction.shouldPay")))]):t._e()]):t._e(),t._v(" "),0==e.status&&"0x0000000000000000000000000000000000000000"==e.bidder?n("span",{staticClass:"atAuction"},[e.isEnd?n("span",[t._v(t._s(t.$t("auction.shouldClose")))]):t._e(),t._v(" "),e.isEnd?t._e():n("span",[t._v(t._s(t.$t("app.atAuction")))])]):t._e(),t._v(" "),1==e.status?n("span",{staticClass:"sold"},[t._v(t._s(t.$t("app.sold")))]):t._e(),t._v(" "),2==e.status?n("span",{staticClass:"closed"},[t._v(t._s(t.$t("app.closed")))]):t._e()]),t._v(" "),n("div",{staticClass:"operate",staticStyle:{cursor:"pointer"},on:{click:function(n){t.naviAuction(e.tokenURI)}}},[t._v("\n              "+t._s(t.$t("auction.detail"))+"\n            ")])]):t._e()})),t._v(" "),0==t.createdAuctionCount?n("div",{staticClass:"no-data"},[n("span",[t._v(t._s(t.$t("auction.youDontHaveSelling")))])]):t._e(),t._v(" "),n("el-pagination",{attrs:{"hide-on-single-page":!0,background:"",layout:"prev, pager, next","page-size":t.pageSize,total:t.createdAuctionCount},on:{"current-change":t.handleCreatedAuctionChange}})],2),t._v(" "),n("el-tab-pane",{attrs:{label:t.$t("auction.myBidding"),name:"second"}},[n("div",{staticClass:"header"},[n("div",{staticClass:"uri"},[t._v(t._s(t.$t("auction.domain")))]),t._v(" "),n("div",{staticClass:"bidder"},[t._v(t._s(t.$t("auction.bidder")))]),t._v(" "),n("div",{staticClass:"price"},[t._v(t._s(t.$t("auction.currentPrice")))]),t._v(" "),n("div",{staticClass:"expires"},[t._v(t._s(t.$t("auction.endTime")))]),t._v(" "),n("div",{staticClass:"status"},[t._v(t._s(t.$t("auction.status")))]),t._v(" "),n("div",{staticClass:"operate"},[t._v(t._s(t.$t("auction.operate")))])]),t._v(" "),t._l(t.biddedAuctions,(function(e){return t.biddedAuctionCount>0?n("div",{key:e.id,staticClass:"row"},[n("div",{staticClass:"uri"},[t._v(t._s(e.tokenURI))]),t._v(" "),n("div",{staticClass:"bidder"},[t._v(t._s(t.subAddress(e.bidder))+"\n              "),e.isWinner&&0==e.status&&e.isEnd?n("i",{staticStyle:{width:"20px",height:"20px"}},[n("el-popover",{attrs:{placement:"top-start",width:"200",trigger:"hover",content:t.$t("auction.auctionWinner")}},[n("svg-icon",{staticStyle:{width:"20px",height:"20px"},attrs:{slot:"reference","icon-class":"winner"},slot:"reference"})],1)],1):t._e(),t._v(" "),e.isWinner&&0==e.status&&!e.isEnd?n("i",{staticStyle:{width:"20px",height:"20px"}},[n("el-popover",{attrs:{placement:"top-start",width:"200",trigger:"hover",content:t.$t("auction.auctionHighBidder")}},[n("svg-icon",{staticStyle:{width:"20px",height:"20px"},attrs:{slot:"reference","icon-class":"first"},slot:"reference"})],1)],1):t._e(),t._v(" "),e.isWinner||0!=e.status||e.isEnd?t._e():n("i",{staticStyle:{width:"20px",height:"20px"}},[n("el-popover",{attrs:{placement:"top-start",width:"200",trigger:"hover",content:t.$t("auction.auctionSecond")}},[n("svg-icon",{staticStyle:{width:"20px",height:"20px"},attrs:{slot:"reference","icon-class":"second"},slot:"reference"})],1)],1)]),t._v(" "),n("div",{staticClass:"price"},[t._v(t._s(e.price)+" $")]),t._v(" "),n("div",{staticClass:"expires",class:{endClass:e.isEnd&&0==e.status}},[t._v(t._s(t.timeToDate(e.expires)))]),t._v(" "),n("div",{staticClass:"status"},[0==e.status?n("span",{staticClass:"atAuction"},[e.isEnd?t._e():n("span",[t._v(t._s(t.$t("app.atAuction")))]),t._v(" "),e.isEnd&&e.isWinner?n("span",[t._v(t._s(t.$t("auction.shouldPay")))]):t._e(),t._v(" "),e.isEnd&&!e.isWinner?n("span",[t._v(t._s(t.$t("auction.finished")))]):t._e()]):t._e(),t._v(" "),1==e.status?n("span",{staticClass:"sold"},[t._v(t._s(t.$t("app.sold")))]):t._e(),t._v(" "),2==e.status?n("span",{staticClass:"closed"},[t._v(t._s(t.$t("app.closed")))]):t._e()]),t._v(" "),n("div",{staticClass:"operate",staticStyle:{cursor:"pointer"},on:{click:function(n){t.naviAuction(e.tokenURI)}}},[t._v("\n              "+t._s(t.$t("auction.detail"))+"\n            ")])]):t._e()})),t._v(" "),0==t.biddedAuctionCount?n("div",{staticClass:"no-data"},[n("span",[t._v(t._s(t.$t("auction.youDontHaveBidding")))])]):t._e(),t._v(" "),n("el-pagination",{attrs:{"hide-on-single-page":!0,background:"",layout:"prev, pager, next","page-size":t.pageSize,total:t.biddedAuctionCount},on:{"current-change":t.handleBiddedAuctionChange}})],2)],1)],1)])])},s=[];n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return s}))},GoWK:function(t,e,n){"use strict";var i=n("k2+B");n.n(i).a},IP1Z:function(t,e,n){"use strict";var i=n("2faE"),s=n("rr1i");t.exports=function(t,e,n){e in t?i.f(t,e,s(0,n)):t[e]=n}},VJsP:function(t,e,n){"use strict";var i=n("2GTP"),s=n("Y7ZC"),r=n("JB68"),a=n("sNwI"),u=n("NwJ3"),o=n("tEej"),c=n("IP1Z"),d=n("fNZA");s(s.S+s.F*!n("TuGD")((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,s,l,h=r(t),f="function"==typeof this?this:Array,p=arguments.length,v=p>1?arguments[1]:void 0,_=void 0!==v,g=0,A=d(h);if(_&&(v=i(v,p>2?arguments[2]:void 0,2)),null==A||f==Array&&u(A))for(n=new f(e=o(h.length));e>g;g++)c(n,g,_?v(h[g],g):h[g]);else for(l=A.call(h),n=new f;!(s=l.next()).done;g++)c(n,g,_?a(l,v,[s.value,g],!0):s.value);return n.length=g,n}})},Wgwc:function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",i="hour",s="day",r="week",a="month",u="quarter",o="year",c="date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,l=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},f=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},p={s:f,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+f(i,2,"0")+":"+f(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(i,a),r=n-s<0,u=e.clone().add(i+(r?-1:1),a);return+(-(i+(n-s)/(r?s-u:u-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(d){return{M:a,y:o,w:r,d:s,D:c,h:i,m:n,s:e,ms:t,Q:u}[d]||String(d||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",_={};_[v]=h;var g=function(t){return t instanceof w},A=function(t,e,n){var i;if(!t)return v;if("string"==typeof t)_[t]&&(i=t),e&&(_[t]=e,i=t);else{var s=t.name;_[s]=t,i=s}return!n&&i&&(v=i),i||!n&&v},$=function(t,e){if(g(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new w(n)},x=p;x.l=A,x.i=g,x.w=function(t,e){return $(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var w=function(){function h(t){this.$L=A(t.locale,null,!0),this.parse(t)}var f=h.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(x.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(d);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return x},f.isValid=function(){return!("Invalid Date"===this.$d.toString())},f.isSame=function(t,e){var n=$(t);return this.startOf(e)<=n&&n<=this.endOf(e)},f.isAfter=function(t,e){return $(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<$(t)},f.$g=function(t,e,n){return x.u(t)?this[e]:this.set(n,t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,u){var d=this,l=!!x.u(u)||u,h=x.p(t),f=function(t,e){var n=x.w(d.$u?Date.UTC(d.$y,e,t):new Date(d.$y,e,t),d);return l?n:n.endOf(s)},p=function(t,e){return x.w(d.toDate()[t].apply(d.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),d)},v=this.$W,_=this.$M,g=this.$D,A="set"+(this.$u?"UTC":"");switch(h){case o:return l?f(1,0):f(31,11);case a:return l?f(1,_):f(0,_+1);case r:var $=this.$locale().weekStart||0,w=(v<$?v+7:v)-$;return f(l?g-w:g+(6-w),_);case s:case c:return p(A+"Hours",0);case i:return p(A+"Minutes",1);case n:return p(A+"Seconds",2);case e:return p(A+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(r,u){var d,l=x.p(r),h="set"+(this.$u?"UTC":""),f=(d={},d[s]=h+"Date",d[c]=h+"Date",d[a]=h+"Month",d[o]=h+"FullYear",d[i]=h+"Hours",d[n]=h+"Minutes",d[e]=h+"Seconds",d[t]=h+"Milliseconds",d)[l],p=l===s?this.$D+(u-this.$W):u;if(l===a||l===o){var v=this.clone().set(c,1);v.$d[f](p),v.init(),this.$d=v.set(c,Math.min(this.$D,v.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[x.p(t)]()},f.add=function(t,u){var c,d=this;t=Number(t);var l=x.p(u),h=function(e){var n=$(d);return x.w(n.date(n.date()+Math.round(e*t)),d)};if(l===a)return this.set(a,this.$M+t);if(l===o)return this.set(o,this.$y+t);if(l===s)return h(1);if(l===r)return h(7);var f=(c={},c[n]=6e4,c[i]=36e5,c[e]=1e3,c)[l]||1,p=this.$d.getTime()+t*f;return x.w(p,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=x.z(this),s=this.$locale(),r=this.$H,a=this.$m,u=this.$M,o=s.weekdays,c=s.months,d=function(t,i,s,r){return t&&(t[i]||t(e,n))||s[i].substr(0,r)},h=function(t){return x.s(r%12||12,t,"0")},f=s.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:x.s(u+1,2,"0"),MMM:d(s.monthsShort,u,c,3),MMMM:d(c,u),D:this.$D,DD:x.s(this.$D,2,"0"),d:String(this.$W),dd:d(s.weekdaysMin,this.$W,o,2),ddd:d(s.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(r),HH:x.s(r,2,"0"),h:h(1),hh:h(2),a:f(r,a,!0),A:f(r,a,!1),m:String(a),mm:x.s(a,2,"0"),s:String(this.$s),ss:x.s(this.$s,2,"0"),SSS:x.s(this.$ms,3,"0"),Z:i};return n.replace(l,(function(t,e){return e||p[t]||i.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,c,d){var l,h=x.p(c),f=$(t),p=6e4*(f.utcOffset()-this.utcOffset()),v=this-f,_=x.m(this,f);return _=(l={},l[o]=_/12,l[a]=_,l[u]=_/3,l[r]=(v-p)/6048e5,l[s]=(v-p)/864e5,l[i]=v/36e5,l[n]=v/6e4,l[e]=v/1e3,l)[h]||v,d?_:x.a(_)},f.daysInMonth=function(){return this.endOf(a).$D},f.$locale=function(){return _[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=A(t,e,!0);return i&&(n.$L=i),n},f.clone=function(){return x.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},h}(),C=w.prototype;return $.prototype=C,[["$ms",t],["$s",e],["$m",n],["$H",i],["$W",s],["$M",a],["$y",o],["$D",c]].forEach((function(t){C[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),$.extend=function(t,e){return t(e,w,$),$},$.locale=A,$.isDayjs=g,$.unix=function(t){return $(1e3*t)},$.en=_[v],$.Ls=_,$.p={},$}()},"k2+B":function(t,e,n){},m1cH:function(t,e,n){"use strict";e.__esModule=!0;var i,s=n("rfXi"),r=(i=s)&&i.__esModule?i:{default:i};e.default=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return(0,r.default)(t)}},rfXi:function(t,e,n){t.exports={default:n("0tVQ"),__esModule:!0}},sMoi:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=f(n("m1cH")),s=f(n("4d7F")),r=f(n("14Xm")),a=f(n("D3Ub")),u=f(n("Wgwc")),o=f(n("0dc3")),c=f(n("7E63")),d=f(n("YgiN")),l=f(n("SzfC")),h=f(n("JpVX"));function f(t){return t&&t.__esModule?t:{default:t}}var p,v,_,g,A,$,x,w,C,y,b=n("zGU6").toChecksumAddress,m=n("ewEw");e.default={data:function(){return{activeName:"first",cns:null,confluxAuction:null,tns:null,web3AuctionService:null,createdAuctionCount:0,createdAuctions:[],biddedAuctionCount:0,biddedAuctions:[],pageSize:5,endTime:"1603967637"}},computed:{web3Account:function(){return this.$store.state.web3.account},isConflux:function(){return this.$store.state.web3.walletType==o.default.CONFLUXPORTAL},chainType:function(){return this.$store.state.web3.chainType},chainId:function(){return this.$store.state.web3.chainId},chainChanged:function(){return this.$store.state.web3.chainType}},created:function(){},mounted:(y=(0,a.default)(r.default.mark((function t(){return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.init();case 1:case"end":return t.stop()}}),t,this)}))),function(){return y.apply(this,arguments)}),watch:{createdAuctionCount:function(){this.handleCreatedAuctionChange(1)},biddedAuctionCount:function(){this.handleBiddedAuctionChange(1)},chainChanged:function(){console.log("chain changed"),this.$nextTick((function(){this.init()}))}},methods:{init:(C=(0,a.default)(r.default.mark((function t(){var e;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=this,this.$nextTick((function(){e.isConflux?(e.cns=new d.default(e.chainType,e.chainId),e.confluxAuction=new c.default(e.chainType,e.chainId),e.loadCreatedAuctionCount(),e.loadBiddedAuctionCount()):(e.tns=new h.default(e.web3Account,e.chainType,e.chainId),e.web3AuctionService=new l.default(e.web3Account,e.chainType,e.chainId),e.loadCreatedAuctionCount(),e.loadBiddedAuctionCount())}));case 2:case"end":return t.stop()}}),t,this)}))),function(){return C.apply(this,arguments)}),load:(w=(0,a.default)(r.default.mark((function t(){var e,n,i,s;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.confluxAuction.getAuctionCount("0x8e73ed4603090cd9f000a45805aa7360917d334a");case 2:return e=t.sent,console.log(e),t.next=6,this.confluxAuction.getAuctionByIndex("0x8e73ed4603090cd9f000a45805aa7360917d334a",15);case 6:return n=t.sent,console.log(n),t.next=10,this.cns.tokenURI(n.tokenId);case 10:return i=t.sent,console.log(i),t.abrupt("return");case 19:s=t.sent,console.log(s);case 21:case"end":return t.stop()}}),t,this)}))),function(){return w.apply(this,arguments)}),handleCreatedAuctionChange:function(t){var e=this.createdAuctionCount-(t-1)*this.pageSize,n=this.createdAuctionCount-t*this.pageSize+1;n<1&&(n=1),this.isConflux?this.loadCreatedAuction(e,n):this.loadWeb3CreatedAuction(e,n)},handleBiddedAuctionChange:function(t){var e=this.biddedAuctionCount-(t-1)*this.pageSize,n=this.biddedAuctionCount-t*this.pageSize+1;n<1&&(n=1),this.isConflux?this.loadBiddedAuction(e,n):this.loadWeb3BiddedAuction(e,n)},loadWeb3CreatedAuction:(x=(0,a.default)(r.default.mark((function t(e,n){var i,s,u,o,c,d=this;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(this.openLoading(),i=[],s=e;s>=n;s--)i.push(s);return console.log(i),u=this,o=i.map(function(){var t=(0,a.default)(r.default.mark((function t(e){var n,i,s;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.web3AuctionService.getUserCreateAuctionById(m[d.chainType][d.chainId].registry,d.web3Account,e);case 2:return n=t.sent,(i={}).id=n.id/1,t.next=7,u.tns.tokenURI(n.tokenId);case 7:return i.tokenURI=t.sent,i.bidder=n.bidder,s=n.price/Math.pow(10,18),i.price=s.toFixed(2),i.expires=1e3*n.expiresAt,i.expires<(new Date).getTime()?i.isEnd=!0:i.isEnd=!1,console.log(i.isEnd),i.status=n.status/1,i.expires<0&&(i.expires=0),t.abrupt("return",i);case 17:case"end":return t.stop()}}),t,d)})));return function(e){return t.apply(this,arguments)}}()),t.next=8,this.PromiseAll(o);case 8:c=t.sent,this.createdAuctions=c,this.closeLoading();case 11:case"end":return t.stop()}}),t,this)}))),function(t,e){return x.apply(this,arguments)}),sleep:function(t){for(var e=(new Date).getTime()+parseInt(t,10);(new Date).getTime()<e;);},PromiseAll:($=(0,a.default)(r.default.mark((function t(e){var n,a,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=[];case 1:if(!(e.length>0)){t.next=8;break}return t.next=4,s.default.all(e.splice(0,u));case 4:a=t.sent,n.push.apply(n,(0,i.default)(a)),t.next=1;break;case 8:return t.abrupt("return",n);case 9:case"end":return t.stop()}}),t,this)}))),function(t){return $.apply(this,arguments)}),loadCreatedAuction:(A=(0,a.default)(r.default.mark((function t(e,n){var i,s,u,o,c,d=this;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(this.openLoading(),i=[],s=e;s>=n;s--)i.push(s);return console.log(i),u=this,o=i.map(function(){var t=(0,a.default)(r.default.mark((function t(e){var n,i,s;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.confluxAuction.getUserCreateAuctionById(m[d.chainType][d.chainId].registry,d.web3Account,e);case 2:return n=t.sent,(i={}).id=n.id/1,t.next=7,u.cns.tokenURI(n.tokenId);case 7:return i.tokenURI=t.sent,i.bidder=n.bidder,s=n.price/Math.pow(10,18),i.price=s.toFixed(2),i.expires=1e3*n.expiresAt,i.expires<(new Date).getTime()?i.isEnd=!0:i.isEnd=!1,console.log(i.isEnd),i.status=n.status/1,i.expires<0&&(i.expires=0),t.abrupt("return",i);case 17:case"end":return t.stop()}}),t,d)})));return function(e){return t.apply(this,arguments)}}()),t.next=8,this.PromiseAll(o);case 8:c=t.sent,this.createdAuctions=c,this.closeLoading();case 11:case"end":return t.stop()}}),t,this)}))),function(t,e){return A.apply(this,arguments)}),loadWeb3BiddedAuction:(g=(0,a.default)(r.default.mark((function t(e,n){var i,s,u,o,c,d=this;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(this.openLoading(),i=[],s=e;s>=n;s--)i.push(s);return console.log(e),console.log(n),console.log(i),u=this,o=i.map(function(){var t=(0,a.default)(r.default.mark((function t(e){var n,i,s;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.web3AuctionService.getUserBiddedAuctionById(m[d.chainType][d.chainId].registry,d.web3Account,e);case 2:return n=t.sent,(i={}).id=n.id/1,t.next=7,u.tns.tokenURI(n.tokenId);case 7:return i.tokenURI=t.sent,i.bidder=n.bidder,b(n.bidder)==b(d.web3Account)?i.isWinner=!0:i.isWinner=!1,s=n.price/Math.pow(10,18),i.price=s.toFixed(2),i.expires=1e3*n.expiresAt,i.status=n.status/1,i.expires<(new Date).getTime()?i.isEnd=!0:i.isEnd=!1,i.expires<0&&(i.expires=0),t.abrupt("return",i);case 17:case"end":return t.stop()}}),t,d)})));return function(e){return t.apply(this,arguments)}}()),t.next=10,this.PromiseAll(o);case 10:c=t.sent,this.biddedAuctions=c,this.closeLoading();case 13:case"end":return t.stop()}}),t,this)}))),function(t,e){return g.apply(this,arguments)}),loadBiddedAuction:(_=(0,a.default)(r.default.mark((function t(e,n){var i,s,u,o,c,d=this;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(this.openLoading(),i=[],s=e;s>=n;s--)i.push(s);return console.log(e),console.log(n),console.log(i),u=this,o=i.map(function(){var t=(0,a.default)(r.default.mark((function t(e){var n,i,s;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.confluxAuction.getUserBiddedAuctionById(m[d.chainType][d.chainId].registry,d.web3Account,e);case 2:return n=t.sent,(i={}).id=n.id/1,t.next=7,u.cns.tokenURI(n.tokenId);case 7:return i.tokenURI=t.sent,i.bidder=n.bidder,n.bidder==d.web3Account?i.isWinner=!0:i.isWinner=!1,s=n.price/Math.pow(10,18),i.price=s.toFixed(2),i.expires=1e3*n.expiresAt,i.status=n.status/1,i.expires<(new Date).getTime()?i.isEnd=!0:i.isEnd=!1,i.expires<0&&(i.expires=0),t.abrupt("return",i);case 17:case"end":return t.stop()}}),t,d)})));return function(e){return t.apply(this,arguments)}}()),t.next=10,this.PromiseAll(o);case 10:c=t.sent,this.biddedAuctions=c,this.closeLoading();case 13:case"end":return t.stop()}}),t,this)}))),function(t,e){return _.apply(this,arguments)}),loadCreatedAuctionCount:(v=(0,a.default)(r.default.mark((function t(){var e,n;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.isConflux){t.next=7;break}return t.next=3,this.confluxAuction.getUserCreateAuctionCount(m[this.chainType][this.chainId].registry,this.web3Account);case 3:e=t.sent,this.createdAuctionCount=e/1,t.next=11;break;case 7:return t.next=9,this.web3AuctionService.getUserCreateAuctionCount(m[this.chainType][this.chainId].registry,this.web3Account);case 9:n=t.sent,this.createdAuctionCount=n/1;case 11:case"end":return t.stop()}}),t,this)}))),function(){return v.apply(this,arguments)}),loadBiddedAuctionCount:(p=(0,a.default)(r.default.mark((function t(){var e,n;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.isConflux){t.next=7;break}return t.next=3,this.confluxAuction.getUserBiddedAuctionCount(m[this.chainType][this.chainId].registry,this.web3Account);case 3:e=t.sent,this.biddedAuctionCount=e/1,t.next=11;break;case 7:return t.next=9,this.web3AuctionService.getUserBiddedAuctionCount(m[this.chainType][this.chainId].registry,this.web3Account);case 9:n=t.sent,this.biddedAuctionCount=n/1;case 11:case"end":return t.stop()}}),t,this)}))),function(){return p.apply(this,arguments)}),naviAuction:function(t){this.$router.push({path:"/auction/"+t})},subTokenUri:function(t){return t.slice(0,10)+"..."+t.slice(-6)},subAddress:function(t){return t.slice(0,6)+"..."+t.slice(-4)},timeToDate:function(t){return(0,u.default)(t).format("YYYY-MM-DD hh:mm")},openLoading:function(){var t=this.$t("app.loading");this.loading=this.$loading({lock:!0,text:t,spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});var e=this;setTimeout((function(){e.closeLoading()}),6e3)},closeLoading:function(){this.loading.close()}}}}}]);