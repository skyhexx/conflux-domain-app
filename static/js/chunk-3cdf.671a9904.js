(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3cdf"],{"3Ci3":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MAX_UINT256=e.ZERO_BYTES32=e.ZERO_ADDRESS=void 0;var a=n("W6Pm");e.ZERO_ADDRESS="0x0000000000000000000000000000000000000000",e.ZERO_BYTES32="0x0000000000000000000000000000000000000000000000000000000000000000",e.MAX_UINT256=new a.BN("2").pow(new a.BN("256")).sub(new a.BN("1"))},D1ES:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,i,r,s,c=l(n("14Xm")),o=l(n("D3Ub")),u=n("Iawr"),d=l(n("zcYx"));function l(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{receiver:"",domain:"",info:"",web3Minter:null,isSending:!1,hasRole:null}},mounted:(s=(0,o.default)(c.default.mark((function t(){return c.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.init();case 1:case"end":return t.stop()}}),t,this)}))),function(){return s.apply(this,arguments)}),computed:{web3Account:function(){return this.$store.state.web3.account},chainType:function(){return this.$store.state.web3.chainType},chainId:function(){return this.$store.state.web3.chainId}},watch:{chainType:(r=(0,o.default)(c.default.mark((function t(){return c.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.web3Minter=new d.default(this.web3Account,this.chainType,this.chainId),t.next=3,this.loadRole();case 3:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},methods:{send:function(){var t=this;if(""!=this.receiver&&""!=this.domain){var e,n=this.domain,a=this.receiver;this.info=n+"\n\n"+a,this.web3Minter=new d.default(this.web3Account,this.chainType,this.chainId),this.isSending=!0,this.web3Minter.minter(n,a,(function(t,e){})).then((e=(0,o.default)(c.default.mark((function e(a){return c.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u.Notification.success(t,"Mined!",n+" Mined!",3e3),t.isSending=!1;case 2:case"end":return e.stop()}}),e,t)}))),function(t){return e.apply(this,arguments)})).catch((function(e){4001==e.code?u.Notification.error(t,t.$t("app.error"),t.$t("notify.userDenied"),5e3):u.Notification.error(t,t.$t("app.error"),t.$t("notify.payError"),5e3),t.isSending=!1}))}},init:(i=(0,o.default)(c.default.mark((function t(){return c.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:"0xb2fb14fcc984b4d0e68c13ecf821623356c10169"==this.web3Account&&"0x1e3d5ce267d4def12fc14fc6ee0cf29650d8a8f0"==this.web3Account&&"0x6f7673a6823fabec37897e90c70a667f60d003d3"==this.web3Account&&this.$router.push({path:"/search"});case 1:case"end":return t.stop()}}),t,this)}))),function(){return i.apply(this,arguments)}),loadRole:(a=(0,o.default)(c.default.mark((function t(){return c.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.web3Minter=new d.default(this.web3Account,this.chainType,this.chainId),t.next=3,this.web3Minter.hasMinterRole();case 3:this.hasRole=t.sent;case 4:case"end":return t.stop()}}),t,this)}))),function(){return a.apply(this,arguments)}),remove:function(t){console.log(t)},subTokenUri:function(t){return t.slice(0,10)+"..."+t.slice(-6)}}}},Iawr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Notification=void 0;var a=r(n("iCc5")),i=r(n("V7oC"));function r(t){return t&&t.__esModule?t:{default:t}}var s=e.Notification=function(){function t(){(0,a.default)(this,t)}return(0,i.default)(t,null,[{key:"notify",value:function(t,e,n,a,i){t.$notify({title:e,message:n,type:a,duration:i})}},{key:"info",value:function(t,e,n,a){t.$notify.info({title:e,message:n,duration:a})}},{key:"success",value:function(t,e,n,a){t.$notify({title:e,message:n,type:"success",duration:a})}},{key:"error",value:function(t,e,n,a){t.$notify.error({title:e,message:n,duration:a})}}]),t}();e.default=s},RJ1J:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"admin"},[n("div",{staticClass:"left"},[n("div",{staticClass:"title"},[t._v("address")]),t._v(" "),n("div",{staticClass:"total"},[t._v(t._s(t.web3Account))])]),t._v(" "),n("div",{staticClass:"right"})]),t._v(" "),n("div",{staticClass:"admin"},[n("div",{staticClass:"left"},[n("div",{staticClass:"title"},[t._v("BuyMinter has Minter role: ")]),t._v(" "),n("div",{staticClass:"total"},[t._v(t._s(t.hasRole))])]),t._v(" "),n("div",{staticClass:"right"},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.loadRole()}}},[t._v("Role")])],1)]),t._v(" "),n("div",[n("div",{staticClass:"cart-row"},[n("div",{staticClass:"left"},[n("div",{staticStyle:{"margin-top":"15px"}},[n("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"receiver"},model:{value:t.receiver,callback:function(e){t.receiver=e},expression:"receiver"}})],1)])]),t._v(" "),n("div",{staticClass:"cart-row"},[n("div",{staticClass:"left"},[n("div",{staticStyle:{"margin-top":"15px"}},[n("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"domain"},model:{value:t.domain,callback:function(e){t.domain=e},expression:"domain"}})],1),t._v("\t\t\n            No SubFix \n        ")])]),t._v(" "),n("div",{staticClass:"cart-row"},[n("div",{staticClass:"left"},[n("div",{staticStyle:{"margin-top":"15px"}},[t._v("\n \t\t\t "+t._s(t.info)+"\n\t\t\t")])])]),t._v(" "),n("div",{staticClass:"cart-row"},[n("div",{staticClass:"left"},[n("el-button",{attrs:{type:"primary",loading:t.isSending},on:{click:function(e){t.send()}}},[t._v("Send")])],1)])])])},i=[];n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i}))},bK8E:function(t,e,n){"use strict";var a=n("zX0M");n.n(a).a},ewEw:function(t,e,n){"use strict";t.exports={ETH:{1:{registry:"0xdef10006363548e9c181fad2976142b7947d9070",resolver:"0xdA5f50D64Ca89936aF472c421Be7E645789c9916",minterController:"0x156622044BDB1d2e4a27bDae5C40bBe996c3f031",auction:"0x337b222d08bf2cfc3761f3b90059dc59bf238e2d",buyMinter:"0xdac17f958d2ee523a2206206994597c13d831ec7",trustUSDT:"0xdac17f958d2ee523a2206206994597c13d831ec7",provider:"https://mainnet.infura.io/v3/undefined"},42:{registry:"0xDeF10006363548e9c181fad2976142b7947d9070",resolver:"0xdA5f50D64Ca89936aF472c421Be7E645789c9916",minterController:"0x156622044BDB1d2e4a27bDae5C40bBe996c3f031",auction:"0x337B222D08bF2cFc3761f3b90059dC59bf238e2D",buyMinter:"0xe53682314D250fd8300b56756Cb4711Be2c9c6cF",trustUSDT:"0x5c66Afd369c4443e559D490cc2d9557377391B30",provider:"https://kovan.infura.io/v3/undefined"}},BNB:{56:{registry:"0x0000F22FfE0866FFB8834600DAd9259cF4956853",resolver:"0xFA98282DD3511144758B9D550E31fb5a4428B5cE",minterController:"0xA5dDdAb24F9eCa0c8Ba01377582add29A23FdCcA",auction:"0x1B265dC3241718abbD627B64443bF15b0B108F89",trustUSDT:"0x55d398326f99059ff775485246999027b3197955",provider:"https://bsc-dataseed1.binance.org:443"},97:{registry:"0x0000F22FfE0866FFB8834600DAd9259cF4956853",resolver:"0xFA98282DD3511144758B9D550E31fb5a4428B5cE",minterController:"0xA5dDdAb24F9eCa0c8Ba01377582add29A23FdCcA",auction:"0xD46D328DE190C7FD010279aDA114A7a348983FCf",buyMinter:"0xcAb3177816e6604fA561Ccc55967d35fe6dd6790",trustUSDT:"0x0bbcedf679c6d1aa6a692fa5ee885b6d6c2490c2",provider:"https://data-seed-prebsc-2-s1.binance.org:8545"}},CFX:{1:{registry:"0x875abd038da229e2b8aadf8ff29c70f47821d220",resolver:"0x88fb20bd7e08d8d7333be177d584ca8779ae0a3a",minterController:"0x8e8087ba37bdd838099222d20069994cc4bb6ddd",auction:"0x8fdd684b3e92707e1d13bd2d1438dccd4683ab8d",buyMinter:"0x8a9761bbad09b10de54563ae99684464bacf554a",trustUSDT:"0x820888d646c580361e0d515888cb02b7204e7bfe",provider:"https://test.confluxrpc.org"},1029:{registry:"0x875abd038da229e2b8aadf8ff29c70f47821d220",resolver:"0x88fb20bd7e08d8d7333be177d584ca8779ae0a3a",minterController:"0x8e8087ba37bdd838099222d20069994cc4bb6ddd",auction:"0x81f17b475c510d261e7e581e946676884f3a7528",buyMinter:"0x8acbf9dc7d0ff9f214c1976bba351af1c81803aa",trustUSDT:"0x8b8689c7f3014a4d86e4d1d0daaf74a47f5e0f27",provider:"https://wallet-main.confluxrpc.org"}},HT:{128:{registry:"0x0000F22FfE0866FFB8834600DAd9259cF4956853",resolver:"0xFA98282DD3511144758B9D550E31fb5a4428B5cE",minterController:"0xA5dDdAb24F9eCa0c8Ba01377582add29A23FdCcA",auction:"0x1B265dC3241718abbD627B64443bF15b0B108F89",trustUSDT:"0xa71edc38d189767582c38a3145b5873052c3e47a",provider:"https://http-mainnet.hecochain.com"},256:{registry:"0x0000F22FfE0866FFB8834600DAd9259cF4956853",resolver:"0xFA98282DD3511144758B9D550E31fb5a4428B5cE",minterController:"0xA5dDdAb24F9eCa0c8Ba01377582add29A23FdCcA",auction:"0x6aB1f6442c37887702f5758ad516b4542d4EbFbB",buyMinter:"0xcAb3177816e6604fA561Ccc55967d35fe6dd6790",trustUSDT:"0x60365f8c887EEE1536683437850faC0648f10101",provider:"https://http-testnet.hecochain.com"}}}},gMwZ:function(t,e,n){"use strict";n.r(e);var a=n("D1ES"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e.default=i.a},tqWo:function(t,e,n){"use strict";n.r(e);var a=n("RJ1J"),i=n("gMwZ");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("bK8E");var s=n("KHd+"),c=Object(s.a)(i.default,a.a,a.b,!1,null,"61da7956",null);c.options.__file="admin.vue",e.default=c.exports},wj7O:function(t){t.exports=[{inputs:[{internalType:"contract Registry",name:"registry",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"grantMinterRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"hasRole",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"revokeMinterRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"baseURI",type:"string"}],name:"setBaseURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"string",name:"label",type:"string"}],name:"mintURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"string",name:"label",type:"string"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeMintURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"string",name:"label",type:"string"},{internalType:"address",name:"resolver",type:"address"}],name:"mintURIWithResolver",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"label",type:"string"}],name:"mintSubURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"label",type:"string"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeMintSubURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"label",type:"string"},{internalType:"address",name:"resolver",type:"address"}],name:"mintSubURIWithResolver",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"label",type:"string"}],name:"burnSubURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"address",name:"resolver",type:"address"}],name:"setResolver",outputs:[],stateMutability:"nonpayable",type:"function"}]},zX0M:function(t,e,n){},zcYx:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Web3Minter=void 0;var a=o(n("14Xm")),i=o(n("D3Ub")),r=o(n("iCc5")),s=o(n("V7oC")),c=o(n("meUc"));n("kB5k"),n("3Ci3");function o(t){return t&&t.__esModule?t:{default:t}}var u=n("ewEw"),d=n("wj7O"),l=e.Web3Minter=function(){function t(e,n,a){(0,r.default)(this,t),this.web3=new c.default(window.detectProvider),this.minterController=u[n][a].minterController,this.buyMinter=u[n][a].buyMinter,this.account=e,this.contract=new this.web3.eth.Contract(d,u[n][a].minterController);var i=this;this.web3.eth.getGasPrice().then((function(t){i.defaultGasPrice=t}))}var e,n,o,l,f;return(0,s.default)(t,[{key:"price",value:(f=(0,i.default)(a.default.mark((function t(e){return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t,this)}))),function(t){return f.apply(this,arguments)})},{key:"hasMinterRole",value:(l=(0,i.default)(a.default.mark((function t(){return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contract.methods.hasRole(this.buyMinter).call();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)}))),function(){return l.apply(this,arguments)})},{key:"minter",value:(o=(0,i.default)(a.default.mark((function t(e,n,i){var r,s,c;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=this.defaultGasPrice,s=this.contract.methods.mintURI(n,e),t.next=4,s.estimateGas({value:0,from:this.account,to:this.minterController});case 4:return c=t.sent,t.abrupt("return",s.send({from:this.account,gasPrice:r,gas:Math.round(1.1*c)},i));case 6:case"end":return t.stop()}}),t,this)}))),function(t,e,n){return o.apply(this,arguments)})},{key:"addMinerRole",value:(n=(0,i.default)(a.default.mark((function t(e,n){var i,r,s;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=this.defaultGasPrice,r=this.contract.methods.grantMinterRole(to,label),t.next=4,r.estimateGas({value:0,from:this.account,to:this.minterController});case 4:return s=t.sent,t.abrupt("return",r.send({from:this.account,gasPrice:i,gas:Math.round(1.1*s)},n));case 6:case"end":return t.stop()}}),t,this)}))),function(t,e){return n.apply(this,arguments)})},{key:"delMinerRole",value:(e=(0,i.default)(a.default.mark((function t(e,n){var i,r,s;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=this.defaultGasPrice,r=this.contract.methods.revokeMinterRole(to,label),t.next=4,r.estimateGas({value:0,from:this.account,to:this.minterController});case 4:return s=t.sent,t.abrupt("return",r.send({from:this.account,gasPrice:i,gas:Math.round(1.1*s)},n));case 6:case"end":return t.stop()}}),t,this)}))),function(t,n){return e.apply(this,arguments)})}]),t}();e.default=l}}]);