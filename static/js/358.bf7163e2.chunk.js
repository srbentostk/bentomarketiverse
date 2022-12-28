"use strict";(self.webpackChunkmydao=self.webpackChunkmydao||[]).push([[358],{60358:function(t,r,e){e.r(r),e.d(r,{NFTDrop:function(){return h}});var n=e(74165),a=e(15861),c=e(15671),u=e(43144),o=e(97326),i=e(60136),s=e(92572),p=e(30619),l=e(23581),f=e(2257),v=e(68624),h=(e(80518),e(25025),e(70332),e(8455),e(59189),e(97143),e(84255),e(62555),e(26219),e(61303),e(49242),e(94317),e(13670),e(79120),e(97604),e(8187),e(19362),e(71497),e(54730),e(36250),e(85725),e(38730),e(2090),e(237),e(65609),e(86841),e(49561),e(54253),e(40553),e(26),e(69392),e(31583),e(82037),e(20737),e(78262),e(34161),e(50266),e(98839),e(51375),e(43320),e(65815),e(18281),e(24601),e(46878),e(20583),e(92355),e(84194),e(51121),e(32484),e(78435),function(t){(0,i.Z)(e,t);var r=(0,s.Z)(e);function e(t,n,a){var u;(0,c.Z)(this,e);var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=arguments.length>4?arguments[4]:void 0,f=arguments.length>5?arguments[5]:void 0,v=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new l.co(t,n,s,i);return u=r.call(this,v,a,f),(0,p._)((0,o.Z)(u),"abi",void 0),(0,p._)((0,o.Z)(u),"encoder",void 0),(0,p._)((0,o.Z)(u),"estimator",void 0),(0,p._)((0,o.Z)(u),"metadata",void 0),(0,p._)((0,o.Z)(u),"sales",void 0),(0,p._)((0,o.Z)(u),"platformFees",void 0),(0,p._)((0,o.Z)(u),"events",void 0),(0,p._)((0,o.Z)(u),"roles",void 0),(0,p._)((0,o.Z)(u),"interceptor",void 0),(0,p._)((0,o.Z)(u),"royalties",void 0),(0,p._)((0,o.Z)(u),"claimConditions",void 0),(0,p._)((0,o.Z)(u),"revealer",void 0),(0,p._)((0,o.Z)(u),"checkout",void 0),(0,p._)((0,o.Z)(u),"erc721",void 0),(0,p._)((0,o.Z)(u),"owner",void 0),u.abi=s,u.metadata=new l.ai(u.contractWrapper,l.cB,u.storage),u.roles=new l.aj(u.contractWrapper,e.contractRoles),u.royalties=new l.ak(u.contractWrapper,u.metadata),u.sales=new l.al(u.contractWrapper),u.claimConditions=new l.an(u.contractWrapper,u.metadata,u.storage),u.encoder=new l.ah(u.contractWrapper),u.estimator=new l.aS(u.contractWrapper),u.events=new l.aT(u.contractWrapper),u.platformFees=new l.aV(u.contractWrapper),u.erc721=new l.ax(u.contractWrapper,u.storage,f),u.revealer=new l.am(u.contractWrapper,u.storage,l.cC.name,(function(){return u.erc721.nextTokenIdToMint()})),u.interceptor=new l.aU(u.contractWrapper),u.owner=new l.aX(u.contractWrapper),u.checkout=new l.cn(u.contractWrapper),u}return(0,u.Z)(e,[{key:"onNetworkUpdated",value:function(t){this.contractWrapper.updateSignerOrProvider(t)}},{key:"getAddress",value:function(){return this.contractWrapper.readContract.address}},{key:"totalSupply",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(){var r,e;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.totalClaimedSupply();case 2:return r=t.sent,t.next=5,this.totalUnclaimedSupply();case 5:return e=t.sent,t.abrupt("return",r.add(e));case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getAllClaimed",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){var e,a,c,u=this;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=f.O$.from((null===r||void 0===r?void 0:r.start)||0).toNumber(),a=f.O$.from((null===r||void 0===r?void 0:r.count)||p.D).toNumber(),t.t0=Math,t.next=5,this.contractWrapper.readContract.nextTokenIdToClaim();case 5:return t.t1=t.sent.toNumber(),t.t2=e+a,c=t.t0.min.call(t.t0,t.t1,t.t2),t.next=10,Promise.all(Array.from(Array(c).keys()).map((function(t){return u.get(t.toString())})));case 10:return t.abrupt("return",t.sent);case 11:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"getAllUnclaimed",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){var e,a,c,u,o=this;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=f.O$.from((null===r||void 0===r?void 0:r.start)||0).toNumber(),a=f.O$.from((null===r||void 0===r?void 0:r.count)||p.D).toNumber(),t.t0=f.O$,t.t1=Math,t.next=6,this.contractWrapper.readContract.nextTokenIdToClaim();case 6:return t.t2=t.sent.toNumber(),t.t3=e,t.t4=t.t1.max.call(t.t1,t.t2,t.t3),c=t.t0.from.call(t.t0,t.t4),t.t5=f.O$,t.t6=Math,t.next=14,this.contractWrapper.readContract.nextTokenIdToMint();case 14:return t.t7=t.sent.toNumber(),t.t8=c.toNumber()+a,t.t9=t.t6.min.call(t.t6,t.t7,t.t8),u=t.t5.from.call(t.t5,t.t9),t.next=20,Promise.all(Array.from(Array(u.sub(c).toNumber()).keys()).map((function(t){return o.erc721.getTokenMetadata(c.add(t).toString())})));case 20:return t.abrupt("return",t.sent);case 21:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"totalClaimedSupply",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.erc721.totalClaimedSupply());case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"totalUnclaimedSupply",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.erc721.totalUnclaimedSupply());case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"isTransferRestricted",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(){var r;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractWrapper.readContract.hasRole((0,l.bs)("transfer"),v.d);case 2:return r=t.sent,t.abrupt("return",!r);case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"createBatch",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r,e){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.erc721.lazyMint(r,e));case 1:case"end":return t.stop()}}),t,this)})));return function(r,e){return t.apply(this,arguments)}}()},{key:"getClaimTransaction",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r,e){var a,c=arguments;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=!(c.length>2&&void 0!==c[2])||c[2],t.abrupt("return",this.erc721.getClaimTransaction(r,e,{checkERC20Allowance:a}));case 2:case"end":return t.stop()}}),t,this)})));return function(r,e){return t.apply(this,arguments)}}()},{key:"claimTo",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r,e){var a,c=arguments;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=!(c.length>2&&void 0!==c[2])||c[2],t.abrupt("return",this.erc721.claimTo(r,e,{checkERC20Allowance:a}));case 2:case"end":return t.stop()}}),t,this)})));return function(r,e){return t.apply(this,arguments)}}()},{key:"claim",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){var e,a=arguments;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=!(a.length>1&&void 0!==a[1])||a[1],t.t0=this,t.next=4,this.contractWrapper.getSignerAddress();case 4:return t.t1=t.sent,t.t2=r,t.t3=e,t.abrupt("return",t.t0.claimTo.call(t.t0,t.t1,t.t2,t.t3));case 8:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"burn",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.erc721.burn(r));case 1:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"get",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.erc721.get(r));case 1:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"ownerOf",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.erc721.ownerOf(r));case 1:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"balanceOf",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.erc721.balanceOf(r));case 1:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"balance",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.erc721.balance());case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"isApproved",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r,e){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.erc721.isApproved(r,e));case 1:case"end":return t.stop()}}),t,this)})));return function(r,e){return t.apply(this,arguments)}}()},{key:"transfer",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r,e){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.erc721.transfer(r,e));case 1:case"end":return t.stop()}}),t,this)})));return function(r,e){return t.apply(this,arguments)}}()},{key:"setApprovalForAll",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r,e){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.erc721.setApprovalForAll(r,e));case 1:case"end":return t.stop()}}),t,this)})));return function(r,e){return t.apply(this,arguments)}}()},{key:"setApprovalForToken",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r,e){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractWrapper.sendTransaction("approve",[r,e]);case 2:return t.t0=t.sent,t.abrupt("return",{receipt:t.t0});case 4:case"end":return t.stop()}}),t,this)})));return function(r,e){return t.apply(this,arguments)}}()},{key:"call",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){var e,a,c,u,o=arguments;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(a=o.length,c=new Array(a>1?a-1:0),u=1;u<a;u++)c[u-1]=o[u];return t.abrupt("return",(e=this.contractWrapper).call.apply(e,[r].concat(c)));case 2:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()}]),e}(l.aG));(0,p._)(h,"contractRoles",["admin","minter","transfer"])}}]);
//# sourceMappingURL=358.bf7163e2.chunk.js.map