(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3f13"],{"0tVQ":function(t,n,e){e("FlQf"),e("VJsP"),t.exports=e("WEpk").Array.from},"1ZMK":function(t,n,e){"use strict";var a=e("FHVc");e.n(a).a},FHVc:function(t,n,e){},IP1Z:function(t,n,e){"use strict";var a=e("2faE"),i=e("rr1i");t.exports=function(t,n,e){n in t?a.f(t,n,i(0,e)):t[n]=e}},VJsP:function(t,n,e){"use strict";var a=e("2GTP"),i=e("Y7ZC"),s=e("JB68"),o=e("sNwI"),r=e("NwJ3"),c=e("tEej"),u=e("IP1Z"),l=e("fNZA");i(i.S+i.F*!e("TuGD")((function(t){Array.from(t)})),"Array",{from:function(t){var n,e,i,d,f=s(t),p="function"==typeof this?this:Array,h=arguments.length,m=h>1?arguments[1]:void 0,g=void 0!==m,v=0,w=l(f);if(g&&(m=a(m,h>2?arguments[2]:void 0,2)),null==w||p==Array&&r(w))for(e=new p(n=c(f.length));n>v;v++)u(e,v,g?m(f[v],v):f[v]);else for(d=w.call(f),e=new p;!(i=d.next()).done;v++)u(e,v,g?o(d,m,[i.value,v],!0):i.value);return e.length=v,e}})},m1cH:function(t,n,e){"use strict";n.__esModule=!0;var a,i=e("rfXi"),s=(a=i)&&a.__esModule?a:{default:a};n.default=function(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n];return e}return(0,s.default)(t)}},oSe1:function(t,n,e){"use strict";e.r(n);var a=e("rEp+"),i=e("ppSp");for(var s in i)"default"!==s&&function(t){e.d(n,t,(function(){return i[t]}))}(s);e("1ZMK");var o=e("KHd+"),r=Object(o.a)(i.default,a.a,a.b,!1,null,"1cd0f1cd",null);r.options.__file="domains.vue",n.default=r.exports},ppSp:function(t,n,e){"use strict";e.r(n);var a=e("rWN6"),i=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(n,t,(function(){return a[t]}))}(s);n.default=i.a},"rEp+":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"app-container"},[t.web3Account?e("el-tabs",{model:{value:t.activeName,callback:function(n){t.activeName=n},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:t.$t("app.myDomains"),name:"first"}},[t.hasDomain?e("div",[e("div",{staticClass:"title-row"},[e("div",{staticClass:"left"},[e("div",{staticClass:"token-uri"},[t._v(t._s(t.$t("auction.domain")))]),t._v(" "),e("div",{staticClass:"token-id"},[t._v(t._s(t.$t("auction.domain"))+" ID")])])]),t._v(" "),t._l(t.domainsData,(function(n,a){return e("div",{staticClass:"domains-row"},[e("div",{staticClass:"left"},[e("div",{staticClass:"token-uri"},[t._v(t._s(n.uri))]),t._v(" "),e("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:n.tokenId,placement:"top"}},[e("div",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:n.tokenId,expression:"domain.tokenId",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"}],staticClass:"token-id"},[t._v(t._s(t.subTokenUri(n.tokenId))+" ")])])],1),t._v(" "),e("div",{staticClass:"right"},[e("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){t.manageDomain(n.uri)}}},[t._v(t._s(t.$t("app.managerDomain")))])],1)])})),t._v(" "),e("el-pagination",{attrs:{"hide-on-single-page":!0,background:"",layout:"prev, pager, next","page-size":t.pageSize,total:t.domainBalance},on:{"current-change":t.handleCurrentChange}})],2):t._e(),t._v(" "),!t.hasDomain&&t.web3Account?e("div",{staticClass:"error-domains-row"},[e("span",[t._v(t._s(t.$t("app.noDomainYet")))])]):t._e()]),t._v(" "),e("el-tab-pane",{attrs:{label:t.$t("app.unClaimed"),name:"second"}},[e("div",{staticClass:"unclaimed"},[t._v("\n        "+t._s(t.$t("app.noUnClaimedDomains"))+"\n      ")])])],1):t._e(),t._v(" "),t.web3Account?t._e():e("div",{staticClass:"error-domains-row"},[e("span",[e("svg-icon",{attrs:{"icon-class":"information"}})],1),t._v(" "),e("span",[t._v(t._s(t.$t("app.errorNoConnect")))])])],1)},i=[];e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return i}))},rWN6:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a,i,s,o,r,c,u=h(e("m1cH")),l=h(e("4d7F")),d=h(e("14Xm")),f=h(e("D3Ub")),p=(h(e("0dc3")),h(e("YgiN")));function h(t){return t&&t.__esModule?t:{default:t}}n.default={data:function(){return{cns:null,bnb:null,eth:null,pageSize:10,defaultPage:1,domains:[],subDomains:[],noDomain:!1,loading:null,domainBalance:0,activeName:"first"}},created:function(){console.log("domains")},mounted:(c=(0,f.default)(d.default.mark((function t(){return d.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.init();case 1:case"end":return t.stop()}}),t,this)}))),function(){return c.apply(this,arguments)}),computed:{hasDomain:function(){return this.domainsData.length>0},web3Account:function(){return this.$store.state.web3.account},chainType:function(){return this.$store.state.web3.chainType},chainId:function(){return this.$store.state.web3.chainId},currentCFXPage:function(){return this.$store.state.data.currentCFXDomainPage},currentBNBPage:function(){return this.$store.state.data.currentBNBDomainPage},domainsData:function(){return this.$store.state.data.domainsData},chainChanged:function(){return this.$store.state.web3.chainType},walletChanged:function(){return this.$store.state.web3.walletType}},watch:{domainsData:function(){this.closeLoading()},domainBalance:function(){this.handleCurrentChange(this.defaultPage)},chainChanged:function(){console.log("chain changed"),this.$store.dispatch("updateCFXDomainPage",0),this.$store.dispatch("updateBNBDomainPage",0),this.init()},walletChanged:function(){console.log("wallet changed"),this.$store.dispatch("updateCFXDomainPage",0),this.$store.dispatch("updateBNBDomainPage",0),this.init()}},methods:{init:function(){var t=this;this.$nextTick((0,f.default)(d.default.mark((function n(){return d.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.cns=new p.default(t.chainType,t.chainId),n.next=3,t.loadConfluxDomainCount();case 3:case"end":return n.stop()}}),n,this)}))))},load:(r=(0,f.default)(d.default.mark((function t(){return d.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.cns=new p.default(this.chainType,this.chainId),t.next=3,this.loadConfluxDomainCount();case 3:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)}),handleCurrentChange:(o=(0,f.default)(d.default.mark((function t(n){var e,a;return d.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log(this.currentCFXPage),console.log(n),this.currentCFXPage!=n){t.next=4;break}return t.abrupt("return");case 4:e=this.domainBalance-(n-1)*this.pageSize-1,(a=this.domainBalance-n*this.pageSize)<0&&(a=0),this.loadConfluxTokenURIByIndex(n,e,a);case 8:case"end":return t.stop()}}),t,this)}))),function(t){return o.apply(this,arguments)}),PromiseAll:(s=(0,f.default)(d.default.mark((function t(n){var e,a,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return d.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=[];case 1:if(!(n.length>0)){t.next=8;break}return t.next=4,l.default.all(n.splice(0,i));case 4:a=t.sent,e.push.apply(e,(0,u.default)(a)),t.next=1;break;case 8:return t.abrupt("return",e);case 9:case"end":return t.stop()}}),t,this)}))),function(t){return s.apply(this,arguments)}),loadConfluxDomainCount:(i=(0,f.default)(d.default.mark((function t(){var n;return d.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.cns||this.load(),t.next=3,this.cns.balanceOf(this.web3Account);case 3:n=t.sent,this.domainBalance=n/1,this.domainBalance>0?this.noDomain=!0:this.noDomain=!1;case 6:case"end":return t.stop()}}),t,this)}))),function(){return i.apply(this,arguments)}),loadConfluxTokenURIByIndex:(a=(0,f.default)(d.default.mark((function t(n,e,a){var i,s,o,r,c,u,l,p=this;return d.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.cns||this.load(),""!=this.web3Account){t.next=6;break}return i=this.$t("app.error"),s=this.$t("app.errorNoConnect"),this.$notify.error({title:i,message:s,duration:2e3,position:"bottom-right"}),t.abrupt("return");case 6:for(o=[],r=e;r>=a;r--)o.push(r);return console.log(o),this.openLoading(),c=this,u=o.map(function(){var t=(0,f.default)(d.default.mark((function t(n){var e,a,i,s,o;return d.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.cns.tokenOfOwnerByIndex(p.web3Account,n);case 2:return e=t.sent,t.next=5,c.cns.tokenURI(e);case 5:return a=t.sent,i={},s=a.split("/")[4],2==(o=s.split(".")).length?(i.type=o[1].toUpperCase(),i.uri=o[0]+"."+o[1],i.tokenId=e.toString(),i.isSubDomain=!1,i.parent=o[1]):3==o.length&&(i.type=o[2].toUpperCase(),i.uri=o[0]+"."+o[1]+"."+o[2],i.tokenId=e.toString(),i.isSubDomain=!0,i.parent=o[1]+"."+o[2]),t.abrupt("return",i);case 11:case"end":return t.stop()}}),t,p)})));return function(n){return t.apply(this,arguments)}}()),t.next=14,this.PromiseAll(u);case 14:l=t.sent,this.$store.dispatch("updateCFXDomainPage",n),this.$store.dispatch("updateDomainData",l),this.closeLoading();case 18:case"end":return t.stop()}}),t,this)}))),function(t,n,e){return a.apply(this,arguments)}),manageDomain:function(t){console.log(t),this.$router.push({path:"/domain/"+t})},openLoading:function(){var t=this.$t("app.loading");this.loading=this.$loading({lock:!0,text:t,spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});var n=this;setTimeout((function(){n.closeLoading()}),1e4)},closeLoading:function(){this.loading.close()},remove:function(t){console.log(t)},subTokenUri:function(t){return t.slice(0,10)+"..."+t.slice(-6)},doCopy:function(t){var n=this.$t("app.copySuccess");this.$copyText(t).then((function(t){this.$message({message:n,type:"success"})}),(function(t){console.log(t)}))},onCopy:function(){var t=this.$t("app.copySuccess");this.$message({message:t,type:"success"})},onSubmit:function(){this.$message("submit!")},onCancel:function(){this.$message({message:"cancel!",type:"warning"})}}}},rfXi:function(t,n,e){t.exports={default:e("0tVQ"),__esModule:!0}}}]);