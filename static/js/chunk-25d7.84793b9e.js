(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-25d7"],{46:function(e,t){},"7E63":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ConfluxAuction=void 0;var a=s(n("14Xm")),i=s(n("D3Ub")),r=s(n("iCc5")),u=s(n("V7oC"));n("kB5k");function s(e){return e&&e.__esModule?e:{default:e}}var d=n("ewEw"),p=n("jzF0"),y=p.Conflux,o=p.format,l=n("LAvi"),c=n("FHO2"),m=t.ConfluxAuction=function(){function e(t,n){(0,r.default)(this,e),this.conflux=window.confluxJS,this.confluxReader=new y({url:d[t][n].provider,defaultGasPrice:100,defaultGas:2e6}),this.auctionReader=this.confluxReader.Contract({abi:c,address:d[t][n].auction}),this.auctionWriter=this.conflux.Contract({abi:c,address:d[t][n].auction})}var t,n,s,p,m,f,T,A,h,x,b,w,v,k,g,_;return(0,u.default)(e,[{key:"getUserCreateAuctionCount",value:(_=(0,i.default)(a.default.mark((function e(t,n){return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.awaitWraper(this.auctionReader.getUserCreateAuctionCount(t,n).call());case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(e,t){return _.apply(this,arguments)})},{key:"getUserCreateAuctionById",value:(g=(0,i.default)(a.default.mark((function e(t,n,i){return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.awaitWraper(this.auctionReader.getUserCreateAuctionById(t,n,i).call());case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(e,t,n){return g.apply(this,arguments)})},{key:"getUserCreateAuctionByPage",value:(k=(0,i.default)(a.default.mark((function e(t,n,i,r){return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.awaitWraper(this.auctionReader.getUserCreateAuctionByPage(t,n,i,r).call());case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(e,t,n,a){return k.apply(this,arguments)})},{key:"getUserBiddedAuctionCount",value:(v=(0,i.default)(a.default.mark((function e(t,n){return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.awaitWraper(this.auctionReader.getUserBiddedAuctionCount(t,n).call());case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(e,t){return v.apply(this,arguments)})},{key:"getUserBiddedAuctionById",value:(w=(0,i.default)(a.default.mark((function e(t,n,i){return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.awaitWraper(this.auctionReader.getUserBiddedAuctionById(t,n,i).call());case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(e,t,n){return w.apply(this,arguments)})},{key:"getUserBiddedAuctionByPage",value:(b=(0,i.default)(a.default.mark((function e(t,n,i,r){return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.awaitWraper(this.auctionReader.getUserBiddedAuctionByPage(t,n,i,r).call());case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(e,t,n,a){return b.apply(this,arguments)})},{key:"getAuctionIdForTokenURI",value:(x=(0,i.default)(a.default.mark((function e(t,n){var i;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.hash(n),e.next=3,this.awaitWraper(this.auctionReader.auctionId(t,i).call());case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)}))),function(e,t){return x.apply(this,arguments)})},{key:"getAuctionIndex",value:(h=(0,i.default)(a.default.mark((function e(t,n){var i;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.hash(n),e.next=3,this.awaitWraper(this.auctionReader.getAuctionIndex(t,i).call());case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)}))),function(e,t){return h.apply(this,arguments)})},{key:"getAuctionCount",value:(A=(0,i.default)(a.default.mark((function e(t){return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.awaitWraper(this.auctionReader.getAuctionCount(t).call());case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(e){return A.apply(this,arguments)})},{key:"getAuctionByPage",value:(T=(0,i.default)(a.default.mark((function e(t,n,i){return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.awaitWraper(this.auctionReader.getAuctionByPage(t,n,i).call());case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(e,t,n){return T.apply(this,arguments)})},{key:"getAuctionByIndex",value:(f=(0,i.default)(a.default.mark((function e(t,n){return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.awaitWraper(this.auctionReader.getAuctionByIndex(t,n).call());case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(e,t){return f.apply(this,arguments)})},{key:"getAuctionByDomain",value:(m=(0,i.default)(a.default.mark((function e(t,n){var i;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.hash(n),e.next=3,this.auctionReader.getAuctionByTokenId(t,i).call();case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)}))),function(e,t){return m.apply(this,arguments)})},{key:"createAuction",value:(p=(0,i.default)(a.default.mark((function e(t,n,i,r){var u,s,d;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=l.hash(n),s=this.auctionWriter.createAuction(t,u,i,r),e.next=4,s.estimateGasAndCollateral({from:this.conflux.defaultAccount});case 4:return d=e.sent,e.next=7,s.sendTransaction({from:this.conflux.defaultAccount,value:0,gas:o.big(d.gasUsed).times(1.1).toFixed(0),gasPrice:1,storageLimit:d.storageCollateralized}).executed();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e,this)}))),function(e,t,n,a){return p.apply(this,arguments)})},{key:"bidAuction",value:(s=(0,i.default)(a.default.mark((function e(t,n,i){var r,u,s;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=l.hash(n),u=this.auctionWriter.bidAuction(t,r,i),e.next=4,u.estimateGasAndCollateral({from:this.conflux.defaultAccount});case 4:return s=e.sent,e.next=7,u.sendTransaction({from:this.conflux.defaultAccount,value:0,gas:o.big(s.gasUsed).times(1.1).toFixed(0),gasPrice:1,storageLimit:s.storageCollateralized}).executed();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e,this)}))),function(e,t,n){return s.apply(this,arguments)})},{key:"finishAuction",value:(n=(0,i.default)(a.default.mark((function e(t,n){var i,r,u;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.hash(n),r=this.auctionWriter.finishAuction(t,i),e.next=4,r.estimateGasAndCollateral({from:this.conflux.defaultAccount});case 4:return u=e.sent,e.next=7,r.sendTransaction({from:this.conflux.defaultAccount,value:0,gas:o.big(u.gasUsed).times(1.1).toFixed(0),gasPrice:1,storageLimit:u.storageCollateralized}).executed();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e,this)}))),function(e,t){return n.apply(this,arguments)})},{key:"closeAuction",value:(t=(0,i.default)(a.default.mark((function e(t,n){var i,r,u;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.hash(n),r=this.auctionWriter.closeAuction(t,i),e.next=4,r.estimateGasAndCollateral({from:this.conflux.defaultAccount});case 4:return u=e.sent,e.next=7,r.sendTransaction({from:this.conflux.defaultAccount,value:0,gas:o.big(u.gasUsed).times(1.1).toFixed(0),gasPrice:1,storageLimit:u.storageCollateralized}).executed();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e,this)}))),function(e,n){return t.apply(this,arguments)})},{key:"awaitWraper",value:function(e){return e.then((function(e){return e})).catch((function(e){return e}))}}]),e}();t.default=m},FHO2:function(e){e.exports=[{inputs:[{internalType:"address",name:"_usdtToken",type:"address"}],stateMutability:"nonpayable",type:"constructor",name:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"id",type:"uint256"},{indexed:!1,internalType:"address",name:"seller",type:"address"},{indexed:!0,internalType:"address",name:"bidder",type:"address"},{indexed:!0,internalType:"address",name:"tokenAddress",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"price",type:"uint256"},{indexed:!1,internalType:"uint256",name:"expiresAt",type:"uint256"}],name:"AuctionBidded",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"id",type:"uint256"},{indexed:!0,internalType:"address",name:"seller",type:"address"},{indexed:!0,internalType:"address",name:"tokenAddress",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"price",type:"uint256"},{indexed:!1,internalType:"uint256",name:"expiresAt",type:"uint256"},{indexed:!1,internalType:"bytes",name:"fingerprint",type:"bytes"}],name:"AuctionClosed",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"id",type:"uint256"},{indexed:!0,internalType:"address",name:"seller",type:"address"},{indexed:!0,internalType:"address",name:"tokenAddress",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"price",type:"uint256"},{indexed:!1,internalType:"uint256",name:"expiresAt",type:"uint256"},{indexed:!1,internalType:"bytes",name:"fingerprint",type:"bytes"}],name:"AuctionCreated",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"id",type:"uint256"},{indexed:!1,internalType:"address",name:"seller",type:"address"},{indexed:!0,internalType:"address",name:"bidder",type:"address"},{indexed:!0,internalType:"address",name:"tokenAddress",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"price",type:"uint256"},{indexed:!1,internalType:"uint256",name:"expiresAt",type:"uint256"}],name:"AuctionFilled",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"_ownerCutPerMillion",type:"uint256"}],name:"ChangedOwnerCutPerMillion",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"}],name:"Paused",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"}],name:"Unpaused",type:"event"},{inputs:[],name:"ERC721Composable_ValidateFingerprint",outputs:[{internalType:"bytes4",name:"",type:"bytes4"}],stateMutability:"view",type:"function"},{inputs:[],name:"ERC721_Interface",outputs:[{internalType:"bytes4",name:"",type:"bytes4"}],stateMutability:"view",type:"function"},{inputs:[],name:"ERC721_Received",outputs:[{internalType:"bytes4",name:"",type:"bytes4"}],stateMutability:"view",type:"function"},{inputs:[],name:"MAX_BID_DURATION",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"MIN_BID_DURATION",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"ONE_MILLION",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"},{internalType:"uint256",name:"",type:"uint256"}],name:"auctionId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"globalAuctionId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"ownerCutPerMillion",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"paused",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"usdtToken",outputs:[{internalType:"contract ERC20Interface",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"addPrivilege",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"removePrivilege",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"_tokenAddress",type:"address"},{internalType:"address",name:"_who",type:"address"}],name:"getUserCreateAuctionCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_tokenAddress",type:"address"},{internalType:"address",name:"_who",type:"address"},{internalType:"uint256",name:"_pageIndex",type:"uint256"},{internalType:"uint256",name:"_pageSize",type:"uint256"}],name:"getUserCreateAuctionByPage",outputs:[{components:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"address",name:"seller",type:"address"},{internalType:"address",name:"bidder",type:"address"},{internalType:"address",name:"tokenAddress",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"price",type:"uint256"},{internalType:"uint256",name:"expiresAt",type:"uint256"},{internalType:"enum TrustAuction.AuctionStatus",name:"status",type:"uint8"},{internalType:"bytes",name:"fingerprint",type:"bytes"}],internalType:"struct TrustAuction.Auction[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_tokenAddress",type:"address"},{internalType:"address",name:"_who",type:"address"}],name:"getUserBiddedAuctionCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_tokenAddress",type:"address"},{internalType:"address",name:"_who",type:"address"},{internalType:"uint256",name:"_pageIndex",type:"uint256"},{internalType:"uint256",name:"_pageSize",type:"uint256"}],name:"getUserBiddedAuctionByPage",outputs:[{components:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"address",name:"seller",type:"address"},{internalType:"address",name:"bidder",type:"address"},{internalType:"address",name:"tokenAddress",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"price",type:"uint256"},{internalType:"uint256",name:"expiresAt",type:"uint256"},{internalType:"enum TrustAuction.AuctionStatus",name:"status",type:"uint8"},{internalType:"bytes",name:"fingerprint",type:"bytes"}],internalType:"struct TrustAuction.Auction[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_tokenAddress",type:"address"},{internalType:"uint256",name:"_tokenId",type:"uint256"},{internalType:"uint256",name:"_price",type:"uint256"},{internalType:"uint256",name:"_duration",type:"uint256"}],name:"createAuction",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_tokenAddress",type:"address"},{internalType:"uint256",name:"_tokenId",type:"uint256"}],name:"getAuctionIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_tokenAddress",type:"address"}],name:"getAuctionCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_tokenAddress",type:"address"},{internalType:"uint256",name:"_pageIndex",type:"uint256"},{internalType:"uint256",name:"_pageSize",type:"uint256"}],name:"getAuctionByPage",outputs:[{components:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"address",name:"seller",type:"address"},{internalType:"address",name:"bidder",type:"address"},{internalType:"address",name:"tokenAddress",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"price",type:"uint256"},{internalType:"uint256",name:"expiresAt",type:"uint256"},{internalType:"enum TrustAuction.AuctionStatus",name:"status",type:"uint8"},{internalType:"bytes",name:"fingerprint",type:"bytes"}],internalType:"struct TrustAuction.Auction[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_tokenAddress",type:"address"},{internalType:"uint256",name:"_index",type:"uint256"}],name:"getAuctionByIndex",outputs:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"address",name:"seller",type:"address"},{internalType:"address",name:"bidder",type:"address"},{internalType:"address",name:"tokenAddress",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"price",type:"uint256"},{internalType:"enum TrustAuction.AuctionStatus",name:"status",type:"uint8"},{internalType:"uint256",name:"expiresAt",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_tokenAddress",type:"address"},{internalType:"uint256",name:"_tokenId",type:"uint256"}],name:"getAuctionByTokenId",outputs:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"address",name:"seller",type:"address"},{internalType:"address",name:"bidder",type:"address"},{internalType:"address",name:"tokenAddress",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"price",type:"uint256"},{internalType:"enum TrustAuction.AuctionStatus",name:"status",type:"uint8"},{internalType:"uint256",name:"expiresAt",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_tokenAddress",type:"address"},{internalType:"uint256",name:"_auctionId",type:"uint256"}],name:"getAuctionByAuctionId",outputs:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"address",name:"seller",type:"address"},{internalType:"address",name:"bidder",type:"address"},{internalType:"address",name:"tokenAddress",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"price",type:"uint256"},{internalType:"uint256",name:"expiresAt",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_tokenAddress",type:"address"},{internalType:"uint256",name:"_tokenId",type:"uint256"},{internalType:"uint256",name:"_price",type:"uint256"}],name:"bidAuction",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_tokenAddress",type:"address"},{internalType:"uint256",name:"_tokenId",type:"uint256"}],name:"finishAuction",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_tokenAddress",type:"address"},{internalType:"uint256",name:"_tokenId",type:"uint256"}],name:"closeAuction",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_ownerCutPerMillion",type:"uint256"}],name:"setOwnerCutPerMillion",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_tokenAddress",type:"address"},{internalType:"uint256",name:"_tokenId",type:"uint256"}],name:"getOwnerByTokenId",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"pause",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"unpause",outputs:[],stateMutability:"nonpayable",type:"function"}]}}]);