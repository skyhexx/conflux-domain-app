(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-55a4"],{"/Z9z":function(t,e,n){"use strict";n.r(e);var i=n("X5Gd"),a=n("kGjL");for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);var r=n("KHd+"),o=Object(r.a)(a.default,i.a,i.b,!1,null,null,null);o.options.__file="vue-count-down.vue",e.default=o.exports},"3Ci3":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MAX_UINT256=e.ZERO_BYTES32=e.ZERO_ADDRESS=void 0;var i=n("W6Pm");e.ZERO_ADDRESS="0x0000000000000000000000000000000000000000",e.ZERO_BYTES32="0x0000000000000000000000000000000000000000000000000000000000000000",e.MAX_UINT256=new i.BN("2").pow(new i.BN("256")).sub(new i.BN("1"))},"7i+C":function(t,e,n){"use strict";var i=n("zXSo");n.n(i).a},"9d2b":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=p(n("14Xm")),a=p(n("D3Ub")),s=p(n("0dc3")),r=n("kB5k"),o=p(n("/Z9z")),u=p(n("7E63")),c=p(n("rfZM")),d=n("Iawr"),l=n("3Ci3");function p(t){return t&&t.__esModule?t:{default:t}}var h,f,m,y,v,b,g,_,x=n("LAvi"),T=(n("zGU6").toChecksumAddress,n("ewEw"));e.default={components:{"count-down":o.default},data:function(){return{status:9,bidAmount:"",countDown:0,endTime:"1603967637",tokenId:"---",highbidder:"---",price:"---",tokenURI:"",confluxAuction:null,web3AuctionService:null,usdt:null,trustUsdt:null,usdtBalance:0,approveUSDTValue:0,isOwner:!1,isHighBidder:!1,isClosing:!1,isEnding:!1,isBidding:!1,isApproving:!1,isApproved:!1,isShouldPay:!1,isShouldClose:!1,disableApproveButton:!0,confluxUsdtInstance:null,web3UsdtInstance:null,domain:{}}},created:(_=(0,a.default)(i.default.mark((function t(){var e;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=this.$route.path,this.tokenURI=e.split("/")[2],this.init();case 3:case"end":return t.stop()}}),t,this)}))),function(){return _.apply(this,arguments)}),computed:{web3Account:function(){return this.$store.state.web3.account},isConflux:function(){return this.$store.state.web3.walletType==s.default.CONFLUXPORTAL},chainType:function(){return this.$store.state.web3.chainType},isApprovedState:function(){return this.isApproved},chainChanged:function(){return this.$store.state.web3.chainType},chainId:function(){return this.$store.state.web3.chainId}},watch:{chainChanged:function(){console.log("chain changed"),this.$nextTick((function(){this.init()}))}},methods:{init:(g=(0,a.default)(i.default.mark((function t(){var e;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=this,this.$nextTick((0,a.default)(i.default.mark((function t(){return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.confluxAuction=new u.default(e.chainType,e.chainId),e.confluxUsdtInstance=new c.default(e.chainType,e.chainId),e.getApproveUSDT(),e.loadAuctionInfo();case 4:case"end":return t.stop()}}),t,this)}))));case 2:case"end":return t.stop()}}),t,this)}))),function(){return g.apply(this,arguments)}),appendTokenIdTo64Length:function(t){for(var e=new r.BigNumber(t).toString(16),n=e.length;n<64;n++)e="0"+e;return"0x"+e},loadAuctionInfo:(b=(0,a.default)(i.default.mark((function t(){var e,n,a,s,r,o,u;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.confluxAuction.getAuctionIndex(T[this.chainType][this.chainId].registry,this.tokenURI);case 2:if(e=t.sent,console.log(this.tokenURI),"maozedong.cfx"!=this.tokenURI&&"dengxiaoping.cfx"!=this.tokenURI){t.next=6;break}return t.abrupt("return");case 6:return n=x.hash(this.tokenURI),t.next=9,this.confluxAuction.getAuctionByIndex(T[this.chainType][this.chainId].registry,e);case 9:if(a=t.sent,s=this.appendTokenIdTo64Length(a.tokenId),n==s){t.next=13;break}return t.abrupt("return");case 13:return a.id,this.status=a.status/1,this.web3Account==a.seller&&(this.isOwner=!0),this.web3Account==a.bidder&&(this.isHighBidder=!0),r=a.tokenId,this.tokenId=r.toString(),"0x0000000000000000000000000000000000000000"==a.bidder?this.highbidder=a.seller:this.highbidder=a.bidder,o=a.price/Math.pow(10,18),this.price=o.toFixed(2),this.countDown=a.expiresAt/1-(new Date).getTime()/1e3,this.countDown<0&&(this.countDown=0,0==this.status&&("0x0000000000000000000000000000000000000000"!=a.bidder?this.isShouldPay=!0:this.isShouldClose=!0)),this.status>0&&(this.countDown=0),t.next=28,this.confluxUsdtInstance.balanceOf(this.web3Account);case 28:u=t.sent,this.usdtBalance=u.toFixed(2);case 30:case"end":return t.stop()}}),t,this)}))),function(){return b.apply(this,arguments)}),closeAuction:(v=(0,a.default)(i.default.mark((function t(){return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("maozedong.cfx"!=this.tokenURI&&"dengxiaoping.cfx"!=this.tokenURI){t.next=2;break}return t.abrupt("return");case 2:return this.isClosing=!0,d.Notification.info(this,this.$t("auction.close"),this.$t("notify.sureWallet"),5e3),t.prev=4,t.next=7,this.confluxAuction.closeAuction(T[this.chainType][this.chainId].registry,this.tokenURI);case 7:d.Notification.success(this,this.$t("notify.success"),this.$t("auction.closeSuccess"),3e3),this.$store.dispatch("updateCFXAuctionPage",0),this.loadAuctionInfo(),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(4),4001==t.t0.code?d.Notification.error(this,this.$t("app.error"),this.$t("notify.userDenied"),5e3):d.Notification.error(this,this.$t("app.error"),this.$t("notify.closeAuctionError"),5e3);case 15:this.isClosing=!1;case 16:case"end":return t.stop()}}),t,this,[[4,12]])}))),function(){return v.apply(this,arguments)}),bidAuction:(y=(0,a.default)(i.default.mark((function t(){var e;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.isOwner){t.next=3;break}return d.Notification.error(this,this.$t("app.error"),this.$t("auction.youCanBidYours"),3e3),t.abrupt("return");case 3:if(0!=this.countDown){t.next=6;break}return d.Notification.error(this,this.$t("app.error"),this.$t("auction.auctionIsOver"),3e3),t.abrupt("return");case 6:if(e=Number(this.bidAmount),!(this.approveUSDTValue<e)){t.next=10;break}return d.Notification.error(this,this.$t("app.error"),this.$t("auction.shouldApproveUSDT"),3e3),t.abrupt("return");case 10:if(!(this.usdtBalance<e)){t.next=13;break}return d.Notification.error(this,this.$t("app.error"),this.$t("auction.shouldHaveEngouhUSDT"),3e3),t.abrupt("return");case 13:if(!(e>=parseInt(this.price,10)+10)){t.next=29;break}return this.isBidding=!0,d.Notification.info(this,this.$t("auction.bid"),this.$t("notify.sureWallet"),5e3),t.prev=16,t.next=19,this.confluxAuction.bidAuction(T[this.chainType][this.chainId].registry,this.tokenURI,e*Math.pow(10,18));case 19:d.Notification.success(this,this.$t("notify.success"),this.$t("auction.bidSuccess"),3e3),this.loadAuctionInfo(),t.next=26;break;case 23:t.prev=23,t.t0=t.catch(16),4001==t.t0.code?d.Notification.error(this,this.$t("app.error"),this.$t("notify.userDenied"),5e3):d.Notification.error(this,this.$t("app.error"),this.$t("notify.bidError"),5e3);case 26:this.isBidding=!1,t.next=30;break;case 29:d.Notification.error(this,this.$t("app.error"),this.$t("app.bidTip"),3e3);case 30:case"end":return t.stop()}}),t,this,[[16,23]])}))),function(){return y.apply(this,arguments)}),endAuction:(m=(0,a.default)(i.default.mark((function t(){return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("maozedong.cfx"!=this.tokenURI&&"dengxiaoping.cfx"!=this.tokenURI){t.next=2;break}return t.abrupt("return");case 2:if(!(this.countDown>0)){t.next=5;break}return d.Notification.error(this,this.$t("app.error"),this.$t("auction.auctionIsNotOver"),3e3),t.abrupt("return");case 5:return d.Notification.info(this,this.$t("auction.endAuction"),this.$t("notify.sureWallet"),5e3),this.isEnding=!0,t.prev=7,t.next=10,this.confluxAuction.finishAuction(T[this.chainType][this.chainId].registry,this.tokenURI);case 10:d.Notification.success(this,this.$t("notify.success"),this.$t("auction.endAuctionSuccess"),3e3),this.$store.dispatch("updateCFXDomainPage",0),this.loadAuctionInfo(),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(7),4001==t.t0.code?d.Notification.error(this,this.$t("app.error"),this.$t("notify.userDenied"),5e3):d.Notification.error(this,this.$t("app.error"),this.$t("notify.endAuctionError"),5e3);case 18:this.isEnding=!1;case 19:case"end":return t.stop()}}),t,this,[[7,15]])}))),function(){return m.apply(this,arguments)}),getApproveUSDT:(f=(0,a.default)(i.default.mark((function t(){var e;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.confluxUsdtInstance.allowance(this.web3Account,T[this.chainType][this.chainId].auction);case 2:e=t.sent,this.approveUSDTValue=e/Math.pow(10,18),this.approveUSDTValue>Math.pow(10,18)?this.isApproved=!0:(this.disableApproveButton=!1,this.isApproved=!1);case 5:case"end":return t.stop()}}),t,this)}))),function(){return f.apply(this,arguments)}),approveUSDT:(h=(0,a.default)(i.default.mark((function t(){var e;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!=this.web3Account){t.next=2;break}return t.abrupt("return");case 2:return d.Notification.info(this,this.$t("search.approve"),this.$t("notify.sureWallet"),5e3),this.isApproving=!0,e=l.MAX_UINT256,t.prev=5,t.next=8,this.confluxUsdtInstance.approve(T[this.chainType][this.chainId].auction,e);case 8:this.getApproveUSDT(),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(5),4001==t.t0.code?d.Notification.error(this,this.$t("app.error"),this.$t("notify.userDenied"),5e3):d.Notification.error(this,this.$t("app.error"),this.$t("notify.approveError"),5e3);case 14:console.log("close approving"),this.isApproving=!1;case 16:case"end":return t.stop()}}),t,this,[[5,11]])}))),function(){return h.apply(this,arguments)}),subTokenUri:function(t){return t.slice(0,10)+"..."+t.slice(-6)},back:function(){console.log("back"),this.$router.back(-1)}}}},Iawr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Notification=void 0;var i=s(n("iCc5")),a=s(n("V7oC"));function s(t){return t&&t.__esModule?t:{default:t}}var r=e.Notification=function(){function t(){(0,i.default)(this,t)}return(0,a.default)(t,null,[{key:"notify",value:function(t,e,n,i,a){t.$notify({title:e,message:n,type:i,duration:a})}},{key:"info",value:function(t,e,n,i){t.$notify.info({title:e,message:n,duration:i})}},{key:"success",value:function(t,e,n,i){t.$notify({title:e,message:n,type:"success",duration:i})}},{key:"error",value:function(t,e,n,i){t.$notify.error({title:e,message:n,duration:i})}}]),t}();e.default=r},KCoV:function(t){t.exports=[{inputs:[{internalType:"address",name:"factory",type:"address"},{internalType:"uint256",name:"totalSupply",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{constant:!0,inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}]},X5Gd:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._t("default",[["timer"===t.model?[t._v(t._s(t.time.day)+t._s(t.$t("time.day"))+" "+t._s(t.time.hour)+t._s(t.$t("time.hour"))+" "+t._s(t.time.minute)+t._s(t.$t("time.minute"))+" "+t._s(t.time.second)+t._s(t.$t("time.second")))]:[t._v(t._s(t.restCount))]]],{day:t.time.day,hour:t.time.hour,minute:t.time.minute,second:t.time.second,restCount:t.restCount})],2)},a=[];n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return a}))},YEpA:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,a=n("EJiy"),s=(i=a)&&i.__esModule?i:{default:i};e.default={data:function(){return{endTimestamp:0,timer:null,restCount:0,time:{day:0,hour:0,minute:0,second:0}}},props:{endTime:{type:[Number,Date,String]},count:{type:Number,default:0},step:{type:Number,default:1},model:{type:String,default:"timer"}},beforeDestroy:function(){this.clearTimer()},watch:{endTime:{immediate:!0,handler:function(t){t&&this.restart()}},count:{immediate:!0,handler:function(t){t>0&&this.restart(t)}}},computed:{stepTime:function(){return"timer"===this.model?1e3:1e3*Math.max(this.step,1)}},methods:{parseDate:function(t){return"number"==typeof t||"string"==typeof t&&-1===t.indexOf("-")?parseInt(10===t.toString().length?1e3*t:t):"string"==typeof t?new Date(t).getTime():"object"===(0,s.default)(void 0===t?"undefined":(0,s.default)(t))&&t.getTime()},clearTimer:function(){this.timer&&clearTimeout(this.timer)},triggerTimer:function(){var t=this,e=this;this.render(),this.timer=setTimeout((function(){("timer"===e.model?t.getRestTime():--t.restCount)<0?(e.$emit("ended"),e.$emit("update:count",0)):e.triggerTimer()}),this.stepTime)},render:function(){var t=this,e={};if("timer"===this.model){var n=this.getRestTime();this.time.day=this.formatNumber(Math.floor(n/86400)),this.time.hour=this.formatNumber(Math.floor(n%86400/3600)),this.time.minute=this.formatNumber(Math.floor(n%3600/60)),this.time.second=this.formatNumber(Math.floor(n%60)),this.restCount=n,e={day:this.time.day,hour:this.time.hour,minute:this.time.minute,second:this.time.second}}else e={restCount:this.restCount};this.$nextTick((function(){t.$emit("update",e)}))},formatNumber:function(t,e){return t<10?(t=Math.max(t,0),e?"0"+t:t.toString()):t.toString()},getRestTime:function(){return Math.round((this.endTimestamp-Date.now())/1e3)},restart:function(t){this.clearTimer(),"timer"===this.model?t>0?(this.endTimestamp=Date.now()+1e3*t,this.triggerTimer()):this.count>0?(this.endTimestamp=Date.now()+1e3*this.count,this.triggerTimer()):this.endTime&&(this.endTimestamp=this.parseDate(this.endTime),this.endTimestamp&&this.triggerTimer()):t>0?(this.restCount=t,this.triggerTimer()):this.count>0&&(this.restCount=this.count,this.triggerTimer())}}}},Z6jU:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"auction_detail"},[n("div",{staticClass:"left"},[n("div",{staticClass:"back-icon",on:{click:function(e){t.back()}}},[n("svg-icon",{attrs:{"icon-class":"back"}})],1)]),t._v(" "),n("div",{staticClass:"center"},[n("div",{staticClass:"title"}),t._v(" "),n("div",{staticClass:"token-uri"},[t._v(t._s(t.tokenURI))])]),t._v(" "),n("div",{staticClass:"right"})]),t._v(" "),n("div",{staticClass:"auction_operation"},[n("div",{staticClass:"price"},[0==t.status?n("div",{staticClass:"status atAuction"},[t._v("• "+t._s(t.isShouldClose?t.$t("auction.shouldClose"):t.isShouldPay?t.$t("auction.shouldPay"):t.$t("app.atAuction")))]):t._e(),t._v(" "),1==t.status?n("div",{staticClass:"status sold"},[t._v("• "+t._s(t.$t("app.sold")))]):t._e(),t._v(" "),2==t.status?n("div",{staticClass:"status closed"},[t._v("• "+t._s(t.$t("app.closed")))]):t._e(),t._v(" "),9==t.status?n("div",{staticClass:"status closed"},[t._v("---")]):t._e(),t._v(" "),n("div",{staticClass:"current-title"},[t._v(t._s(t.$t("app.currentPrice")))]),t._v(" "),n("div",{staticClass:"current-price"},[t._v(t._s(t.price)+" $")]),t._v(" "),n("div",{staticClass:"box"},[n("div",{staticClass:"tokenid"},[n("div",{staticClass:"title"},[t._v(t._s(t.$t("auction.domain"))+" ID")]),t._v(" "),n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.tokenId,placement:"top"}},[n("div",{staticClass:"sub-title"},[t._v(t._s(t.subTokenUri(t.tokenId)))])])],1),t._v(" "),n("div",{staticClass:"high-bidder"},[n("div",{staticClass:"title"},[t._v(t._s(t.$t("app.highBidder")))]),t._v(" "),n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.highbidder,placement:"top"}},[n("div",{staticClass:"sub-title"},[t._v(t._s(t.subTokenUri(t.highbidder)))])])],1)]),t._v(" "),t.isOwner?n("div",{staticStyle:{"text-align":"center","margin-bottom":"20px"}},[n("el-button",{staticStyle:{width:"60%"},attrs:{loading:t.isClosing,disabled:2==t.status,type:"primary"},on:{click:function(e){t.closeAuction()}}},[t._v(t._s(t.$t("auction.close")))])],1):t._e(),t._v(" "),t.isHighBidder?n("div",{staticStyle:{"text-align":"center","margin-bottom":"20px"}},[n("div",{staticStyle:{margin:"30px auto","font-size":"14px",width:"60%",padding:"5px","text-align":"left",background:"#F5F6FA","border-radius":"5px"}},[t._v("\n        "+t._s(t.$t("auction.yourAreTheHighestBidder"))+"\n      ")]),t._v(" "),n("el-button",{staticStyle:{width:"60%"},attrs:{loading:t.isEnding,disabled:t.countDown>0||1==t.status||2==t.status,type:"success"},on:{click:function(e){t.endAuction()}}},[t._v(t._s(t.$t("auction.endAuction")))])],1):t._e()]),t._v(" "),n("div",{staticClass:"bid"},[n("div",{staticClass:"title"},[t._v(t._s(t.$t("app.joinTheAuction")))]),t._v(" "),n("div",{staticClass:"timer"},[n("count-down",{attrs:{model:"timer",count:t.countDown,endTime:t.endTime}})],1),t._v(" "),n("div",{staticClass:"input"},[n("span",[t._v(t._s(t.$t("app.balance"))+" "),n("span",[t._v(t._s(t.usdtBalance)+" \n        "),"CFX"==t.chainType?n("span",[t._v("cUSDT")]):t._e(),t._v(" "),"BNB"==t.chainType?n("span",[t._v("BUSDT")]):t._e(),t._v(" "),"ETH"==t.chainType?n("span",[t._v("USDT")]):t._e(),t._v(" "),"HT"==t.chainType?n("span",[t._v("HUSDT")]):t._e()])]),t._v(" "),n("el-input",{attrs:{placeholder:t.$t("app.bidAmount"),oninput:"value=value.replace(/[^0-9.]/g,'')",type:"number",step:"10"},model:{value:t.bidAmount,callback:function(e){t.bidAmount=e},expression:"bidAmount"}}),t._v(" "),n("span",{staticClass:"tip"},[t._v(t._s(t.$t("app.bidTip")))])],1),t._v(" "),t.isApprovedState?t._e():n("div",{staticClass:"bid-button"},[n("el-button",{attrs:{type:"primary",disabled:2==t.status||1==t.status||t.disableApproveButton,plain:"",loading:t.isApproving},on:{click:function(e){t.approveUSDT()}}},[t._v(t._s(t.$t("auction.approve")))])],1),t._v(" "),t.isApprovedState?n("div",{staticClass:"bid-button"},[n("el-button",{attrs:{type:"primary",disabled:2==t.status||1==t.status,loading:t.isBidding},on:{click:function(e){t.bidAuction()}}},[t._v(t._s(t.$t("app.bid")))])],1):t._e()])])])},a=[];n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return a}))},hJIv:function(t,e,n){"use strict";n.r(e);var i=n("Z6jU"),a=n("nk6e");for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("7i+C");var r=n("KHd+"),o=Object(r.a)(a.default,i.a,i.b,!1,null,"8f51cc34",null);o.options.__file="auction_detail.vue",e.default=o.exports},kGjL:function(t,e,n){"use strict";n.r(e);var i=n("YEpA"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e.default=a.a},nk6e:function(t,e,n){"use strict";n.r(e);var i=n("9d2b"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e.default=a.a},rfZM:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ConfluxERC20=void 0;var i=u(n("14Xm")),a=u(n("D3Ub")),s=u(n("iCc5")),r=u(n("V7oC")),o=n("kB5k");function u(t){return t&&t.__esModule?t:{default:t}}var c=n("ewEw"),d=n("jzF0"),l=d.Conflux,p=d.format,h=n("KCoV"),f=e.ConfluxERC20=function(){function t(e,n){(0,s.default)(this,t),this.conflux=window.confluxJS,this.confluxReader=new l({url:c[e][n].provider,defaultGasPrice:100,defaultGas:1e6}),this.contractReader=this.confluxReader.Contract({abi:h,address:c[e][n].trustUSDT}),this.contract=this.conflux.Contract({abi:h,address:c[e][n].trustUSDT})}var e,n,u,d,f,m,y,v;return(0,r.default)(t,[{key:"symbol",value:(v=(0,a.default)(i.default.mark((function t(){return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractReader.symbol.call();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)}))),function(){return v.apply(this,arguments)})},{key:"decimals",value:(y=(0,a.default)(i.default.mark((function t(){var e;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractReader.decimals.call();case 2:return e=t.sent,t.abrupt("return",(0,o.BigNumber)(e)/1);case 4:case"end":return t.stop()}}),t,this)}))),function(){return y.apply(this,arguments)})},{key:"getPrecision",value:(m=(0,a.default)(i.default.mark((function t(){var e;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractReader.decimals().call();case 2:return e=t.sent,t.abrupt("return",(0,o.BigNumber)(10).pow((0,o.BigNumber)(e)));case 4:case"end":return t.stop()}}),t,this)}))),function(){return m.apply(this,arguments)})},{key:"balanceOf",value:(f=(0,a.default)(i.default.mark((function t(e){var n;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractReader.balanceOf(e).call();case 2:return n=t.sent,t.t0=new o.BigNumber(parseInt(n.toString(),10)),t.next=6,this.getPrecision();case 6:return t.t1=t.sent,t.abrupt("return",t.t0.div.call(t.t0,t.t1));case 8:case"end":return t.stop()}}),t,this)}))),function(t){return f.apply(this,arguments)})},{key:"approve",value:(d=(0,a.default)(i.default.mark((function t(e,n){var a,s;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=this.contract.approve(e,n),t.next=3,a.estimateGasAndCollateral({from:this.conflux.defaultAccount});case 3:return s=t.sent,t.next=6,a.sendTransaction({from:this.conflux.defaultAccount,value:0,gas:p.big(s.gasUsed).times(1.1).toFixed(0),gasPrice:1,storageLimit:s.storageCollateralized}).executed();case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t,this)}))),function(t,e){return d.apply(this,arguments)})},{key:"totalSupply",value:(u=(0,a.default)(i.default.mark((function t(){var e;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractReader.totalSupply().call();case 2:return e=t.sent,t.t0=new o.BigNumber(parseInt(e.toString(),10)),t.next=6,this.getPrecision();case 6:return t.t1=t.sent,t.abrupt("return",t.t0.div.call(t.t0,t.t1));case 8:case"end":return t.stop()}}),t,this)}))),function(){return u.apply(this,arguments)})},{key:"totalSupply2",value:(n=(0,a.default)(i.default.mark((function t(){var e;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contract.totalSupply().call();case 2:return e=t.sent,t.t0=new o.BigNumber(parseInt(e.toString(),10)),t.next=6,this.getPrecision();case 6:return t.t1=t.sent,t.abrupt("return",t.t0.div.call(t.t0,t.t1));case 8:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"allowance",value:(e=(0,a.default)(i.default.mark((function t(e,n){var a,s;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractReader.allowance(e,n).call();case 2:return a=t.sent,t.next=5,this.getPrecision();case 5:return s=t.sent,t.abrupt("return",(0,o.BigNumber)(a).div(s));case 7:case"end":return t.stop()}}),t,this)}))),function(t,n){return e.apply(this,arguments)})}]),t}();e.default=f},zXSo:function(t,e,n){}}]);