(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-718e"],{"+kG1":function(t,e,s){"use strict";s.r(e);var i=s("JH0Y"),a=s("ys1c");for(var n in a)"default"!==n&&function(t){s.d(e,t,(function(){return a[t]}))}(n);s("qGMk");var r=s("KHd+"),o=Object(r.a)(a.default,i.a,i.b,!1,null,"41b3fb57",null);o.options.__file="domain_detail.vue",e.default=o.exports},43:function(t,e){},44:function(t,e){},Ddmz:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=e.supportTld=["cfx","bnb","defi","ht"];e.default={supportTld:i}},EIFw:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var i=c(s("EJiy")),a=c(s("14Xm")),n=c(s("D3Ub")),r=c(s("Kw5r")),o=(c(s("0dc3")),s("Ddmz")),l=c(s("YgiN")),d=s("Iawr");function c(t){return t&&t.__esModule?t:{default:t}}var u=s("gBkH"),p=s("LAvi"),h=s("lOTI"),f=s("G3SR");s("vDqi");r.default.directive("Alphabet",{inserted:function(t){var e=t.querySelector(".el-input__inner");e.onkeyup=function(t){e.value=e.value.replace(/[^a-z0-9]/g,"")},e.onblur=function(t){e.value=e.value.replace(/[^a-z0-9]/g,"")}}});var v,w,m,b,_,g,$,y,I,k,x,C,S,D,A,N,F,T={path:"",service:"ipfs",host:"ipfs.infura.io",port:5001,protocol:"https",timeout:3e4,verbose:!0};e.default={components:{FileUpload:u},data:function(){return{activeName:"first",walletAddressInput:[{name:"BTC",address:""},{name:"ETH",address:""},{name:"CFX",address:""},{name:"ZEC",address:""},{name:"NEO",address:""},{name:"BNB",address:""},{name:"HT",address:""},{name:"OKT",address:""}],parserDomain:"",isSubDomain:!1,owner:"",resolver:"",newResolver:"",ipfsHash:"",newResolverInputShow:!1,newOwner:"",newOwnerInputShow:!1,newIPFSHash:"",newIPFSInputShow:!1,subLabel:"",parent:"",detail:"",domainsData:[],isInvalidDomain:!1,isInvalidTld:!1,isExist:!1,isNotExit:!1,isSaveAddress:!1,isSaveResolver:!1,isSaveOwner:!1,isSaveIPFSCID:!1,isAddSubDomain:!1,deleteingUri:"",tld:"",files:[],fileList:[],buffer:"",ipfs:null,pinata:null,fileDatas:[],isUploaing:!1,cidHash:"",cns:null,tns:null,node:null,ipfsMini:null}},mounted:(F=(0,n.default)(a.default.mark((function t(){var e;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=this.$route.path,this.parserDomain=e.split("/")[2],console.log(this.parserDomain.split(".")),3==this.parserDomain.split(".").length&&(this.isSubDomain=!0),this.checkDomainIsSupport(this.parserDomain),console.log(this.parserDomain),this.init();case 8:case"end":return t.stop()}}),t,this)}))),function(){return F.apply(this,arguments)}),computed:{chainID:function(){return parseInt(this.$store.state.wallet.chainId)},web3Account:function(){return this.$store.state.web3.account},chainType:function(){return this.$store.state.web3.chainType},chainId:function(){return this.$store.state.web3.chainId},chainChanged:function(){return this.$store.state.web3.chainType}},watch:{chainChanged:function(){console.log("chain changed"),this.$nextTick((function(){this.init()}))}},methods:{init:function(){if("cfx:aamnjkpct6th2bmx8j525h5e24m2hkf6ypyr9hr5n8"!=this.web3Account&&"cfx:aar4fz2ybdrs58w5svzvp7revmprfsz0t2swf6v5u3"!=this.web3Account&&"cfx:aarwpre23pk9c8t8mfc0hhx90jjhymhv5y93h162m7"!=this.web3Account){var t=this;this.$nextTick((0,n.default)(a.default.mark((function e(){return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.cns=new l.default(t.chainType,t.chainId),t.getConfluxDomainInfo(t.parserDomain),t.ipfs=h(T);case 3:case"end":return e.stop()}}),e,this)}))))}},openWebsite:function(){window.open("https://ipfs.infura.io/ipfs/"+this.cidHash,"_blank")},clearUpload:(N=(0,n.default)(a.default.mark((function t(){return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.files=[],this.cidHash="";case 2:case"end":return t.stop()}}),t,this)}))),function(){return N.apply(this,arguments)}),uploadWebsite:(A=(0,n.default)(a.default.mark((function t(){var e,s,i=this;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.cidHash="",0!=this.files.length){t.next=4;break}return d.Notification.error(this,this.$t("app.error"),this.$t("notify.selectFiles"),6e3),t.abrupt("return");case 4:for(this.isUploaing=!0,e=function(){var t=i.files[s].file,e=i.files[s].name,a=new window.FileReader;a.readAsArrayBuffer(t),a.onloadend=function(){return i.convertToBuffer(e,a)}},s=0;s<this.files.length;s++)e();case 8:case"end":return t.stop()}}),t,this)}))),function(){return A.apply(this,arguments)}),convertToBuffer:(D=(0,n.default)(a.default.mark((function e(s,i){var n,r;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.from(i.result);case 2:if(n=e.sent,this.buffer=n,r={path:s,content:n},this.fileDatas.push(r),this.fileDatas.length!=this.files.length){e.next=9;break}return e.next=9,this.addFile(this.fileDatas);case 9:case"end":return e.stop()}}),e,this)}))),function(t,e){return D.apply(this,arguments)}),addFile:(S=(0,n.default)(a.default.mark((function t(e){var s,i,n=this;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s={pin:!0,wrapWithDirectory:!1,progress:function(t){return console.log("received: "+t)}},i=this,this.ipfs.add(e,s).then((function(t){console.log(t.cid.string),i.cidHash=t.cid.string,i.isUploaing=!1,d.Notification.success(i,i.$t("notify.success"),i.$t("notify.uploadSuccess"),3e3),n.fileDatas=[]})).catch((function(t){n.isUploaing=!1,d.Notification.error(n,n.$t("app.error"),n.$t("app.errorUploading"),6e3),n.fileDatas=[]}));case 3:case"end":return t.stop()}}),t,this)}))),function(t){return S.apply(this,arguments)}),checkDomainIsSupport:function(t){var e=t.split(".").reverse();if(!(e.length>3))return 3==e.length?(this.parent=e[1]+"."+e[0],this.isSubDomain=!0):2==e.length?this.parent=e[0]:1==e.length&&(this.parent="cfx",this.parserDomain=e[0]+".cfx"),e.length>1&&-1==o.supportTld.indexOf(e[0])?(this.isInvalidTld=!0,void(this.tld=e[0].toUpperCase())):void 0;this.isInvalidDomain=!0},getConfluxDomainInfo:(C=(0,n.default)(a.default.mark((function t(e){var s;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p.hash(e),t.next=3,this.cns.exists(e);case 3:if(s=t.sent,this.isExist=s,this.isNotExit=!s,!s){t.next=23;break}return t.next=9,this.cns.owner(e);case 9:return this.owner=t.sent,t.next=12,this.cns.resolver(e);case 12:if(this.resolver=t.sent,(0,i.default)(this.resolver)==(0,i.default)("string")){t.next=17;break}this.resolver="",t.next=19;break;case 17:return t.next=19,this.getConfluxIPFSHash(e);case 19:console.log(this.owner),console.log(this.resolver),this.getAddresses(e),this.getSubTokenURI(e);case 23:case"end":return t.stop()}}),t,this)}))),function(t){return C.apply(this,arguments)}),getResolver:(x=(0,n.default)(a.default.mark((function t(e){return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p.hash(e),t.next=3,this.cns.resolver(e);case 3:this.resolver=t.sent;case 4:case"end":return t.stop()}}),t,this)}))),function(t){return x.apply(this,arguments)}),getOwner:(k=(0,n.default)(a.default.mark((function t(e){return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p.hash(e),t.next=3,this.cns.owner(e);case 3:this.owner=t.sent;case 4:case"end":return t.stop()}}),t,this)}))),function(t){return k.apply(this,arguments)}),getSubTokenURI:(I=(0,n.default)(a.default.mark((function t(e){var s,i,n,r,o,l;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.cns.getSubTokenURI(this.parserDomain);case 2:for(s=t.sent,i=[],console.log(s),n=0;n<s.length;n++)console.log(s[n]),r=s[n].split("/").reverse(),o=p.hash(r[0]),(l={}).uri=r[0],l.tokenId=o,i.push(l);this.domainsData=i,console.log(s);case 8:case"end":return t.stop()}}),t,this)}))),function(t){return I.apply(this,arguments)}),getConfluxIPFSHash:(y=(0,n.default)(a.default.mark((function t(e){var s;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.resolver){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,this.cns.get(e,"ipfs.value");case 4:(s=t.sent).data||"object"!=(void 0===s?"undefined":(0,i.default)(s))&&(this.ipfsHash=s);case 6:case"end":return t.stop()}}),t,this)}))),function(t){return y.apply(this,arguments)}),getAddresses:($=(0,n.default)(a.default.mark((function t(e){var s,n,r,o,l,d,c,u;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.resolver){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,this.cns.get(e,"wallet.BTC.address");case 4:return s=t.sent,console.log("------------------"),console.log(s),s.data||("object"!=(void 0===s?"undefined":(0,i.default)(s))&&(this.walletAddressInput[0].address=s),console.log(void 0===s?"undefined":(0,i.default)(s))),t.next=10,this.cns.get(e,"wallet.ETH.address");case 10:return(n=t.sent).data||"object"!=(void 0===n?"undefined":(0,i.default)(n))&&(this.walletAddressInput[1].address=n),t.next=14,this.cns.get(e,"wallet.CFX.address");case 14:return(r=t.sent).data||"object"!=(void 0===r?"undefined":(0,i.default)(r))&&(this.walletAddressInput[2].address=r),t.next=18,this.cns.get(e,"wallet.ZEC.address");case 18:return(o=t.sent).data||"object"!=(void 0===o?"undefined":(0,i.default)(o))&&(this.walletAddressInput[3].address=o),t.next=22,this.cns.get(e,"wallet.NEO.address");case 22:return(l=t.sent).data||"object"!=(void 0===l?"undefined":(0,i.default)(l))&&(this.walletAddressInput[4].address=l),t.next=26,this.cns.get(e,"wallet.BNB.address");case 26:return(d=t.sent).data||"object"!=(void 0===d?"undefined":(0,i.default)(d))&&(this.walletAddressInput[5].address=d),t.next=30,this.cns.get(e,"wallet.HT.address");case 30:return(c=t.sent).data||"object"!=(void 0===c?"undefined":(0,i.default)(c))&&(this.walletAddressInput[6].address=c),t.next=34,this.cns.get(e,"wallet.OKT.address");case 34:(u=t.sent).data||"object"!=(void 0===u?"undefined":(0,i.default)(u))&&(this.walletAddressInput[7].address=u);case 36:case"end":return t.stop()}}),t,this)}))),function(t){return $.apply(this,arguments)}),echo:function(){var t=this.$route.path;console.log(t);var e=t.split("/");console.log(e),console.log(this.parserDomain),console.log(this.isSubDomain);this.parserDomain.split(".")[1];console.log(o.supportTld)},isLikeBase32Address:function(t){return/^(cfx(test)?|net\d+):(type\.(null|user|contract|builtin):)?[0123456789abcdefghjkmnprstuvwxyz]{42}$/i.test(t)},changeNewResolver:(g=(0,n.default)(a.default.mark((function t(){return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!=this.newResolver){t.next=3;break}return d.Notification.error(this,this.$t("app.error"),this.$t("app.inputRightResolver"),6e3),t.abrupt("return");case 3:if(console.log(this.newResolver),this.isLikeBase32Address(this.newResolver)){t.next=8;break}return d.Notification.error(this,this.$t("app.resolverAddressError"),this.$t("app.checkResolverAddress"),3e3),t.abrupt("return");case 8:return this.isSaveResolver=!0,d.Notification.info(this,this.$t("notify.setResolver"),this.$t("notify.sureWallet"),5e3),t.prev=10,t.next=13,this.cns.setResolver(this.parserDomain,this.newResolver);case 13:this.getResolver(this.parserDomain),d.Notification.success(this,this.$t("notify.success"),this.$t("notify.setResolverSuccess"),6e3),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(10),4001==t.t0.code?d.Notification.error(this,this.$t("app.error"),this.$t("notify.userDenied"),5e3):d.Notification.error(this,this.$t("app.error"),this.$t("notify.setReolverError"),5e3);case 20:this.isSaveResolver=!1;case 21:case"end":return t.stop()}}),t,this,[[10,17]])}))),function(){return g.apply(this,arguments)}),saveChange:(_=(0,n.default)(a.default.mark((function t(){var e,s,i,n,r,o,l;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=this.walletAddressInput.length,s=0;case 2:if(!(s<e)){t.next=12;break}if(""==this.walletAddressInput[s].address){t.next=9;break}if(i=null,"CFX"==this.walletAddressInput[s].name?i=this.isLikeBase32Address(this.walletAddressInput[s].address):"BNB"==this.walletAddressInput[s].name||"HT"==this.walletAddressInput[s].name?i=f.validate(this.walletAddressInput[s].address,"ETH"):"OKT"==this.walletAddressInput[s].name?(n=this.walletAddressInput[s].address,i=48==n.length&&"okex"==n.substring(0,4)):i=f.validate(this.walletAddressInput[s].address,this.walletAddressInput[s].name),i){t.next=9;break}return"CFX"==this.walletAddressInput[s].name?d.Notification.error(this,"CFX"+this.$t("app.addressError"),this.$t("app.checkAddress"),3e3):d.Notification.error(this,this.walletAddressInput[s].name+this.$t("app.addressError"),this.$t("app.checkAddress"),3e3),t.abrupt("return");case 9:s++,t.next=2;break;case 12:if(this.resolver){t.next=15;break}return d.Notification.error(this,this.$t("app.error"),this.$t("notify.setResolverFirst"),6e3),t.abrupt("return");case 15:for(r=[],o=[],l=!1,s=0;s<this.walletAddressInput.length;s++)"BTC"==this.walletAddressInput[s].name&&this.walletAddressInput[s].address&&(r.push("wallet.BTC.address"),o.push(this.walletAddressInput[s].address)),"ETH"==this.walletAddressInput[s].name&&this.walletAddressInput[s].address&&(r.push("wallet.ETH.address"),o.push(this.walletAddressInput[s].address)),"CFX"==this.walletAddressInput[s].name&&this.walletAddressInput[s].address&&(r.push("wallet.CFX.address"),o.push(this.walletAddressInput[s].address)),"ZEC"==this.walletAddressInput[s].name&&this.walletAddressInput[s].address&&(r.push("wallet.ZEC.address"),o.push(this.walletAddressInput[s].address)),"NEO"==this.walletAddressInput[s].name&&this.walletAddressInput[s].address&&(r.push("wallet.NEO.address"),o.push(this.walletAddressInput[s].address)),"BNB"==this.walletAddressInput[s].name&&this.walletAddressInput[s].address&&(r.push("wallet.BNB.address"),o.push(this.walletAddressInput[s].address)),"HT"==this.walletAddressInput[s].name&&this.walletAddressInput[s].address&&(r.push("wallet.HT.address"),o.push(this.walletAddressInput[s].address)),"OKT"==this.walletAddressInput[s].name&&this.walletAddressInput[s].address&&(r.push("wallet.OKT.address"),o.push(this.walletAddressInput[s].address)),l=l||""!=this.walletAddressInput[s].address;if(l){t.next=22;break}return d.Notification.error(this,this.$t("app.error"),this.$t("app.inputRightAddress"),6e3),t.abrupt("return");case 22:return this.isSaveAddress=!0,console.log(r),console.log(o),d.Notification.info(this,this.$t("notify.addWalletAddress"),this.$t("notify.sureWallet"),5e3),t.prev=27,t.next=30,this.cns.setMulti(this.parserDomain,r,o);case 30:this.getAddresses(this.parserDomain),d.Notification.success(this,this.$t("notify.success"),this.$t("notify.addWalletAddressSuccess"),5e3),t.next=37;break;case 34:t.prev=34,t.t0=t.catch(27),4001==t.t0.code?d.Notification.error(this,this.$t("app.error"),this.$t("notify.userDenied"),5e3):d.Notification.error(this,this.$t("app.error"),this.$t("notify.setAddressError"),5e3);case 37:this.isSaveAddress=!1;case 38:case"end":return t.stop()}}),t,this,[[27,34]])}))),function(){return _.apply(this,arguments)}),changeNewOwner:(b=(0,n.default)(a.default.mark((function t(){return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!=this.newOwner){t.next=3;break}return d.Notification.error(this,this.$t("app.error"),this.$t("app.inputRightOwner"),6e3),t.abrupt("return");case 3:return console.log(this.newOwner),this.isLikeBase32Address(this.newOwner),this.isSaveOwner=!0,d.Notification.info(this,this.$t("notify.setOwner"),this.$t("notify.sureWallet"),5e3),t.prev=7,t.next=10,this.cns.setOwner(this.newOwner,this.parserDomain);case 10:this.getOwner(this.parserDomain),this.$store.dispatch("updateCFXDomainPage",0),d.Notification.success(this,this.$t("notify.success"),this.$t("notify.setOwnerSuccess"),6e3),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(7),4001==t.t0.code?d.Notification.error(this,this.$t("app.error"),this.$t("notify.userDenied"),5e3):d.Notification.error(this,this.$t("app.error"),this.$t("notify.setOwnerError"),5e3);case 18:this.isSaveOwner=!1;case 19:case"end":return t.stop()}}),t,this,[[7,15]])}))),function(){return b.apply(this,arguments)}),changeNewIPFS:(m=(0,n.default)(a.default.mark((function t(){return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.resolver){t.next=3;break}return d.Notification.error(this,this.$t("app.error"),this.$t("notify.setResolverFirst"),6e3),t.abrupt("return");case 3:if(""!=this.newIPFSHash){t.next=6;break}return d.Notification.error(this,this.$t("app.error"),this.$t("app.typeNewIpfsHash"),6e3),t.abrupt("return");case 6:if(46===this.newIPFSHash.length&&this.newIPFSHash.startsWith("Qm")){t.next=9;break}return d.Notification.error(this,this.$t("app.error"),this.$t("app.ipfsHashInvalid"),6e3),t.abrupt("return");case 9:return console.log(this.newIPFSHash),this.isSaveIPFSCID=!0,d.Notification.info(this,this.$t("notify.setIPFSHash"),this.$t("notify.sureWallet"),5e3),t.prev=12,t.next=15,this.cns.set(this.parserDomain,"ipfs.value",this.newIPFSHash);case 15:this.getConfluxIPFSHash(this.parserDomain),d.Notification.success(this,this.$t("notify.success"),this.$t("notify.setIPFSHashSuccess"),6e3),t.next=22;break;case 19:t.prev=19,t.t0=t.catch(12),4001==t.t0.code?d.Notification.error(this,this.$t("app.error"),this.$t("notify.userDenied"),5e3):d.Notification.error(this,this.$t("app.error"),this.$t("notify.setIPFSError"),5e3);case 22:this.isSaveIPFSCID=!1;case 23:case"end":return t.stop()}}),t,this,[[12,19]])}))),function(){return m.apply(this,arguments)}),addSubDomain:(w=(0,n.default)(a.default.mark((function t(){var e,s,i;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!=this.subLabel){t.next=3;break}return d.Notification.error(this,this.$t("app.error"),this.$t("app.typeANewName"),6e3),t.abrupt("return");case 3:return e=/[^0-9a-z]/gi,s=(s=this.subLabel.toLowerCase()).replace(e,""),console.log(s),i=s+"."+this.parserDomain,console.log(i),this.isAddSubDomain=!0,t.next=12,this.cns.exists(i);case 12:if(!t.sent){t.next=17;break}return d.Notification.info(this,this.$t("app.error"),this.$t("app.domainExist"),5e3),this.isAddSubDomain=!1,t.abrupt("return");case 17:return d.Notification.info(this,this.$t("notify.addSubDomain"),this.$t("notify.sureWallet"),5e3),t.prev=18,t.next=21,this.cns.mintSubURI(this.owner,this.parserDomain,s);case 21:this.getSubTokenURI(this.parserDomain),this.$store.dispatch("updateCFXDomainPage",0),d.Notification.success(this,this.$t("notify.success"),this.$t("notify.addSubDomainSuccess"),6e3),t.next=29;break;case 26:t.prev=26,t.t0=t.catch(18),4001==t.t0.code?d.Notification.error(this,this.$t("app.error"),this.$t("notify.userDenied"),5e3):d.Notification.error(this,this.$t("app.error"),this.$t("notify.setSubdomainError"),5e3);case 29:this.isAddSubDomain=!1;case 30:case"end":return t.stop()}}),t,this,[[18,26]])}))),function(){return w.apply(this,arguments)}),manageDomain:function(t){console.log(t);var e=this.$router.resolve({path:"/domain/"+t});window.open(e.href,"_blank")},deleteDomain:(v=(0,n.default)(a.default.mark((function t(e){var s,i,n,r;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d.Notification.info(this,this.$t("notify.deleteSubdomain"),this.$t("notify.sureWallet"),5e3),this.deleteingUri=e,s=e.split("."),i=s[0],n=s[1]+"."+s[2],r=p.hash(n),t.prev=6,t.next=9,this.cns.burnSubToken(r,i);case 9:this.$store.dispatch("updateCFXDomainPage",0),this.getSubTokenURI(this.parserDomain),d.Notification.success(this,this.$t("notify.success"),this.$t("notify.deleteSubDomainSuccess"),6e3),this.deleteingUri="",t.next=19;break;case 15:t.prev=15,t.t0=t.catch(6),4001==t.t0.code?d.Notification.error(this,this.$t("app.error"),this.$t("notify.userDenied"),5e3):d.Notification.error(this,this.$t("app.error"),this.$t("notify.deleteSubdomainError"),5e3),this.deleteingUri="";case 19:case"end":return t.stop()}}),t,this,[[6,15]])}))),function(t){return v.apply(this,arguments)}),subTokenUri:function(t){return t.slice(0,10)+"..."+t.slice(-6)}}}}).call(this,s("tjlA").Buffer)},Iawr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Notification=void 0;var i=n(s("iCc5")),a=n(s("V7oC"));function n(t){return t&&t.__esModule?t:{default:t}}var r=e.Notification=function(){function t(){(0,i.default)(this,t)}return(0,a.default)(t,null,[{key:"notify",value:function(t,e,s,i,a){t.$notify({title:e,message:s,type:i,duration:a})}},{key:"info",value:function(t,e,s,i){t.$notify.info({title:e,message:s,duration:i})}},{key:"success",value:function(t,e,s,i){t.$notify({title:e,message:s,type:"success",duration:i})}},{key:"error",value:function(t,e,s,i){t.$notify.error({title:e,message:s,duration:i})}}]),t}();e.default=r},JH0Y:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app-container"},[t.isExist?s("div",{staticClass:"my-domains"},[s("div",{staticClass:"left"},[s("div",{staticClass:"title",on:{click:function(e){t.echo()}}},[t._v(t._s(t.parserDomain))]),t._v(" "),s("div",{staticClass:"total"})]),t._v(" "),s("div",{staticClass:"right"})]):t._e(),t._v(" "),t.isExist?s("div",[s("div",{staticClass:"domains-tabbar"},[s("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[s("el-tab-pane",{attrs:{label:t.$t("app.resolver"),name:"first"}},[s("div",{staticClass:"resolver"},[s("div",{staticClass:"title"},[t._v("Resolver")]),t._v(" "),s("div",{staticClass:"address",on:{click:function(e){t.newResolverInputShow=!t.newResolverInputShow}}},[t.resolver?t._e():s("span",[t._v(t._s(t.$t("app.resolverIsNotSet")))]),t._v(" "),t.resolver?s("span",[t._v(t._s(t.resolver))]):t._e()]),t._v(" "),s("div",{staticStyle:{"margin-top":"20px"}},[s("el-input",{attrs:{placeholder:t.$t("app.inputNewResolerAddress")},model:{value:t.newResolver,callback:function(e){t.newResolver=e},expression:"newResolver"}},[s("el-button",{attrs:{slot:"append",loading:t.isSaveResolver,disabled:t.isSaveResolver,type:"primary"},on:{click:function(e){t.changeNewResolver()}},slot:"append"},[t._v(t._s(t.$t("button.sure")))])],1)],1)]),t._v(" "),s("div",{staticClass:"add-address"},[s("div",{staticClass:"title"},[t._v(t._s(t.$t("app.addCryptoAddress")))]),t._v(" "),s("div",{staticClass:"subtitle"},[t._v(t._s(t.$t("app.addYourCryptoAddressToDomain")))]),t._v(" "),s("div",{staticClass:"input-address"},[s("div",{staticClass:"row"},[s("div",{staticClass:"left"},[t._v(t._s(t.$t("app.currency")))]),t._v(" "),s("div",{staticClass:"right"},[t._v(t._s(t.$t("app.address")))])]),t._v(" "),t._l(t.walletAddressInput,(function(e){return s("div",{staticClass:"row"},[s("div",{staticClass:"left"},[t._v(t._s(e.name))]),t._v(" "),s("div",{staticClass:"right"},[s("el-input",{attrs:{placeholder:t.$t("app.enterYourWalletAddress")},model:{value:e.address,callback:function(s){t.$set(e,"address",s)},expression:"item.address"}})],1)])})),t._v(" "),s("div",{staticClass:"center"},[s("el-button",{attrs:{type:"primary",loading:t.isSaveAddress,disabled:t.isSaveAddress},on:{click:function(e){t.saveChange()}}},[t._v(t._s(t.$t("app.saveChange")))])],1)],2)])]),t._v(" "),s("el-tab-pane",{attrs:{label:t.$t("app.manage"),name:"second"}},[s("div",{staticClass:"resolver"},[s("div",{staticClass:"title"},[t._v("Owner")]),t._v(" "),s("div",{staticClass:"address",on:{click:function(e){t.newOwnerInputShow=!t.newOwnerInputShow}}},[t._v(t._s(t.owner)+" ")]),t._v(" "),s("div",{staticStyle:{"margin-top":"20px"}},[s("el-input",{attrs:{placeholder:t.$t("app.inputRightOwner")},model:{value:t.newOwner,callback:function(e){t.newOwner=e},expression:"newOwner"}},[s("el-button",{attrs:{slot:"append",loading:t.isSaveOwner,disabled:t.isSaveOwner,type:"primary"},on:{click:function(e){t.changeNewOwner()}},slot:"append"},[t._v(t._s(t.$t("button.sure")))])],1),t._v(" "),s("div",{staticClass:"warning"},[t._v(t._s(t.$t("app.warnChangeOwner")))])],1)]),t._v(" "),s("div",{staticClass:"mint-subdomain"},[s("div",{staticClass:"title"},[t._v(t._s(t.$t("app.addSubDomain")))]),t._v(" "),s("div",{staticClass:"subtitle"},[t._v(t._s(t.$t("app.addSubDomainInfo")))]),t._v(" "),s("div",{staticClass:"subtitle"},[s("div",{staticClass:"row"},[s("div",{staticClass:"tips"},[t._v(t._s(t.$t("app.subLabelTips")))])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"left"},[t._v(t._s(t.$t("app.subdomainName")))]),t._v(" "),s("div",{staticClass:"right"},[s("el-input",{attrs:{disabled:t.isSubDomain,placeholder:t.$t("app.typeANewName"),onkeyup:"this.value = this.value.replace(/[^a-z0-9]/g,'')"},model:{value:t.subLabel,callback:function(e){t.subLabel=e},expression:"subLabel"}})],1)]),t._v(" "),s("div",{staticClass:"center"},[s("el-button",{attrs:{disabled:t.isSubDomain||t.isAddSubDomain,loading:t.isAddSubDomain,type:"primary"},on:{click:function(e){t.addSubDomain()}}},[t._v(t._s(t.$t("app.addSubDomain")))])],1)]),t._v(" "),t.domainsData.length>0?s("div",{staticClass:"subdomain-list"},[s("div",{staticClass:"title-row"},[s("div",{staticClass:"left"},[s("div",{staticClass:"token-uri"},[t._v(t._s(t.$t("app.subDomain")))]),t._v(" "),s("div",{staticClass:"token-id"},[t._v(t._s(t.$t("app.subTokenId")))])])]),t._v(" "),t._l(t.domainsData,(function(e,i){return s("div",{staticClass:"domains-row"},[s("div",{staticClass:"left"},[s("div",{staticClass:"token-uri"},[t._v(t._s(e.uri))]),t._v(" "),s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.tokenId,placement:"top"}},[s("div",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.tokenId,expression:"domain.tokenId",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"}],staticClass:"token-id"},[t._v(t._s(t.subTokenUri(e.tokenId))+" ")])])],1),t._v(" "),s("div",{staticClass:"right"},[s("el-button",{attrs:{type:"danger",loading:t.deleteingUri==e.uri,plain:""},on:{click:function(s){t.deleteDomain(e.uri)}}},[t._v(t._s(t.$t("app.deleteDomain")))]),t._v(" "),s("el-button",{attrs:{type:"primary",plain:""},on:{click:function(s){t.manageDomain(e.uri)}}},[t._v(t._s(t.$t("app.managerDomain")))])],1)])}))],2):t._e()])]),t._v(" "),s("el-tab-pane",{attrs:{label:t.$t("app.website"),name:"third"}},[s("div",{staticClass:"resolver"},[s("div",{staticClass:"title"},[t._v("IPFS CID")]),t._v(" "),s("div",{staticClass:"address",on:{click:function(e){t.newIPFSInputShow=!t.newIPFSInputShow}}},[t.ipfsHash?t._e():s("span",[t._v(t._s(t.$t("app.ipfsHashIsNotSet")))]),t._v(" "),t.ipfsHash?s("span",[t._v(t._s(t.ipfsHash))]):t._e()]),t._v(" "),s("div",{staticStyle:{"margin-top":"20px"}},[s("el-input",{attrs:{placeholder:t.$t("app.typeNewIpfsHash")},model:{value:t.newIPFSHash,callback:function(e){t.newIPFSHash=e},expression:"newIPFSHash"}},[s("el-button",{attrs:{slot:"append",loading:t.isSaveIPFSCID,disabled:t.isSaveIPFSCID,type:"primary"},on:{click:function(e){t.changeNewIPFS()}},slot:"append"},[t._v(t._s(t.$t("button.sure")))])],1)],1)]),t._v(" "),s("div",{staticClass:"upload",attrs:{id:"select_frame"}},[s("div",{staticClass:"title"},[t._v(t._s(t.$t("app.uploadFileToIPFS")))]),t._v(" "),s("div",{staticClass:"ipfs-upload-drag select-container"},[s("div",{staticClass:"upload"},[t.files.length?s("ul",t._l(t.files,(function(e,i){return s("li",{key:e.id},[s("span",[t._v(t._s(e.name))]),t._v(" -\n                      "),s("span",[t._v(t._s(e.size)+" bytes")]),t._v(" -\n                      "),e.error?s("span",[t._v(t._s(e.error))]):e.success?s("span",[t._v("success")]):e.active?s("span",[t._v("active")]):s("span")])}))):s("div",[s("div",[s("div",{staticClass:"text-center"},[s("h4",[t._v(t._s(t.$t("app.dragFileHere"))),s("br"),s("br"),t._v(t._s(t.$t("app.or")))]),t._v(" "),s("label",{staticClass:"btn btn-lg btn-primary",staticStyle:{cursor:"pointer"},attrs:{for:"file"}},[t._v(t._s(t.$t("app.selectFile")))])])])]),t._v(" "),s("div",{staticClass:"ipfs-upload-btn"},[s("file-upload",{ref:"upload",staticClass:"btn btn-primary",attrs:{"post-action":"/upload/post",multiple:!0,drop:!0,"drop-directory":!0,multiple:"",webkitdirectory:"",mozdirectory:"true",directory:""},model:{value:t.files,callback:function(e){t.files=e},expression:"files"}},[s("i",{staticClass:"fa fa-plus"})])],1)])]),t._v(" "),s("div",{staticClass:"center"},[s("br"),t._v(" "),s("el-button",{attrs:{type:"primary",plain:"",disabled:t.isUploaing},on:{click:function(e){t.clearUpload()}}},[t._v(t._s(t.$t("app.clearUpload")))]),t._v(" "),s("el-button",{staticStyle:{"margin-left":"70px"},attrs:{type:"primary",loading:t.isUploaing},on:{click:function(e){t.uploadWebsite()}}},[t._v(t._s(t.$t("app.confirmUpload")))]),t._v(" "),s("br"),s("br")],1),t._v(" "),""!=t.cidHash?s("div",{staticClass:"center"},[s("br"),t._v(" "),s("div",{staticClass:"cid-hash"},[t._v(t._s(t.$t("app.yourIPFSCid"))+": "),s("span",{staticStyle:{color:"#2CD370"}},[t._v(t._s(t.cidHash))])]),t._v(" "),s("a",{on:{click:function(e){t.openWebsite()}}},[s("div",{staticClass:"cid-preview"},[t._v(t._s(t.$t("app.clickAndView")))])]),t._v(" "),s("br"),s("br")]):t._e()])])],1)],1)]):t._e(),t._v(" "),t.isInvalidDomain?s("div",{staticClass:"error-domains-row"},[s("span",[s("svg-icon",{attrs:{"icon-class":"error"}})],1),t._v(" "),s("span",[t._v(t._s(t.$t("app.formatError")))])]):t._e(),t._v(" "),t.isInvalidTld?s("div",{staticClass:"error-domains-row"},[s("span",[s("svg-icon",{attrs:{"icon-class":"error"}})],1),t._v(" "),s("span",[t._v(t._s(t.tld)+" "+t._s(t.$t("app.isNotSupportTLD"))+" ")])]):t._e(),t._v(" "),!t.isNotExit||t.isInvalidTld||t.isInvalidDomain?t._e():s("div",{staticClass:"error-domains-row"},[s("span",[s("svg-icon",{attrs:{"icon-class":"error"}})],1),t._v(" "),s("span",[t._v(t._s(t.$t("app.theDomainIsNotRegistor")))])])])},a=[];s.d(e,"a",(function(){return i})),s.d(e,"b",(function(){return a}))},oKJp:function(t,e,s){},qGMk:function(t,e,s){"use strict";var i=s("oKJp");s.n(i).a},ys1c:function(t,e,s){"use strict";s.r(e);var i=s("EIFw"),a=s.n(i);for(var n in i)"default"!==n&&function(t){s.d(e,t,(function(){return i[t]}))}(n);e.default=a.a}}]);