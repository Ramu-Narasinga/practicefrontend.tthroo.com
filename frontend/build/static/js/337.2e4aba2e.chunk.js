"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[337],{84:(e,t,n)=>{n.d(t,{S:()=>o});var i=n(504),o=function(){function e(e,t,n){void 0===n&&(n={}),this.status="idle",this.options=n,this.sandboxSetup=t,this.iframeSelector=e}return e.prototype.updateOptions=function(e){(0,i.J)(this.options,e)||(this.options=e,this.updateSandbox())},e.prototype.updateSandbox=function(e,t){throw void 0===e&&(e=this.sandboxSetup),Error("Method not implemented")},e.prototype.destroy=function(){throw Error("Method not implemented")},e.prototype.dispatch=function(e){throw Error("Method not implemented")},e.prototype.listen=function(e){throw Error("Method not implemented")},e}()},337:(e,t,n)=>{n.r(t),n.d(t,{SandpackRuntime:()=>u});var i,o=n(652),s=n(504),r=n(84),a=(n(888),function(){function e(e,t,n){var i=this;this.type=e,this.handleMessage=t,this.protocol=n,this._disposeMessageListener=this.protocol.channelListen((function(e){return(0,o._)(i,void 0,void 0,(function(){var t,n,i,s;return(0,o.a)(this,(function(o){switch(o.label){case 0:if(e.type!==this.getTypeId()||!e.method)return[3,4];t=e,o.label=1;case 1:return o.trys.push([1,3,,4]),[4,this.handleMessage(t)];case 2:return n=o.sent(),s={type:this.getTypeId(),msgId:t.msgId,result:n},this.protocol.dispatch(s),[3,4];case 3:return i=o.sent(),s={type:this.getTypeId(),msgId:t.msgId,error:{message:i.message}},this.protocol.dispatch(s),[3,4];case 4:return[2]}}))}))}))}return e.prototype.getTypeId=function(){return"protocol-"+this.type},e.prototype.dispose=function(){this._disposeMessageListener()},e}()),d=function(){function e(e,t){this.globalListeners={},this.globalListenersCount=0,this.channelListeners={},this.channelListenersCount=0,this.channelId=Math.floor(1e6*Math.random()),this.frameWindow=e.contentWindow,this.origin=t,this.globalListeners=[],this.channelListeners=[],this.eventListener=this.eventListener.bind(this),"undefined"!==typeof window&&window.addEventListener("message",this.eventListener)}return e.prototype.cleanup=function(){window.removeEventListener("message",this.eventListener),this.globalListeners={},this.channelListeners={},this.globalListenersCount=0,this.channelListenersCount=0},e.prototype.register=function(){this.frameWindow&&this.frameWindow.postMessage({type:"register-frame",origin:document.location.origin,id:this.channelId},this.origin)},e.prototype.dispatch=function(e){this.frameWindow&&this.frameWindow.postMessage((0,o.h)({$id:this.channelId,codesandbox:!0},e),this.origin)},e.prototype.globalListen=function(e){var t=this;if("function"!==typeof e)return function(){};var n=this.globalListenersCount;return this.globalListeners[n]=e,this.globalListenersCount++,function(){delete t.globalListeners[n]}},e.prototype.channelListen=function(e){var t=this;if("function"!==typeof e)return function(){};var n=this.channelListenersCount;return this.channelListeners[n]=e,this.channelListenersCount++,function(){delete t.channelListeners[n]}},e.prototype.eventListener=function(e){if(e.source===this.frameWindow){var t=e.data;t.codesandbox&&(Object.values(this.globalListeners).forEach((function(e){return e(t)})),t.$id===this.channelId&&Object.values(this.channelListeners).forEach((function(e){return e(t)})))}},e}();function c(e,t){if(!e)return"static";var n=e.dependencies,i=void 0===n?{}:n,s=e.devDependencies,r=void 0===s?{}:s,a=(0,o.i)((0,o.i)([],Object.keys(i),!0),Object.keys(r),!0),d=Object.keys(t),c=["@adonisjs/framework","@adonisjs/core"];if(a.some((function(e){return c.indexOf(e)>-1})))return"adonis";var l=["nuxt","nuxt-edge","nuxt-ts","nuxt-ts-edge","nuxt3"];if(a.some((function(e){return l.indexOf(e)>-1})))return"nuxt";if(a.indexOf("next")>-1)return"next";var u=["apollo-server","apollo-server-express","apollo-server-hapi","apollo-server-koa","apollo-server-lambda","apollo-server-micro"];if(a.some((function(e){return u.indexOf(e)>-1})))return"apollo";if(a.indexOf("mdx-deck")>-1)return"mdx-deck";if(a.indexOf("gridsome")>-1)return"gridsome";if(a.indexOf("vuepress")>-1)return"vuepress";if(a.indexOf("ember-cli")>-1)return"ember";if(a.indexOf("sapper")>-1)return"sapper";if(a.indexOf("gatsby")>-1)return"gatsby";if(a.indexOf("quasar")>-1)return"quasar";if(a.indexOf("@docusaurus/core")>-1)return"docusaurus";if(a.indexOf("remix")>-1)return"remix";if(a.indexOf("astro")>-1)return"node";if(d.some((function(e){return e.endsWith(".re")})))return"reason";var p=["parcel-bundler","parcel"];if(a.some((function(e){return p.indexOf(e)>-1})))return"parcel";var h=["@dojo/core","@dojo/framework"];if(a.some((function(e){return h.indexOf(e)>-1})))return"@dojo/cli-create-app";if(a.indexOf("@nestjs/core")>-1||a.indexOf("@nestjs/common")>-1)return"nest";if(a.indexOf("react-styleguidist")>-1)return"styleguidist";if(a.indexOf("react-scripts")>-1)return"create-react-app";if(a.indexOf("react-scripts-ts")>-1)return"create-react-app-typescript";if(a.indexOf("@angular/core")>-1)return"angular-cli";if(a.indexOf("preact-cli")>-1)return"preact-cli";if(a.indexOf("@sveltech/routify")>-1||a.indexOf("@roxi/routify")>-1)return"node";if(a.indexOf("vite")>-1)return"node";if(a.indexOf("@frontity/core")>-1)return"node";if(a.indexOf("svelte")>-1)return"svelte";if(a.indexOf("vue")>-1)return"vue-cli";if(a.indexOf("cx")>-1)return"cxjs";var f=["express","koa","nodemon","ts-node","@tensorflow/tfjs-node","webpack-dev-server","snowpack"];return a.some((function(e){return f.indexOf(e)>-1}))||Object.keys(i).length>=50?"node":void 0}var l="https://"+(null===(i="2.9.0")?void 0:i.replace(/\./g,"-"))+"-sandpack.codesandbox.io/",u=function(e){function t(t,n,i){void 0===i&&(i={});var s=e.call(this,t,n,i)||this;if(s.getTranspilerContext=function(){return new Promise((function(e){var t=s.listen((function(n){"transpiler-context"===n.type&&(e(n.data),t())}));s.dispatch({type:"get-transpiler-context"})}))},s.bundlerURL=i.bundlerURL||l,i.teamId&&(s.bundlerURL=s.bundlerURL.replace("https://","https://"+i.teamId+"-")+"?cache="+Date.now()),s.bundlerState=void 0,s.errors=[],s.status="initializing","string"===typeof t){s.selector=t;var r=document.querySelector(t);(0,o.n)(r,"The element '"+t+"' was not found"),s.element=r,s.iframe=document.createElement("iframe"),s.initializeElement()}else s.element=t,s.iframe=t;return s.iframe.getAttribute("sandbox")||(s.iframe.setAttribute("sandbox","allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"),s.iframe.setAttribute("allow","accelerometer; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; clipboard-write;")),s.setLocationURLIntoIFrame(),s.iframeProtocol=new d(s.iframe,s.bundlerURL),s.unsubscribeGlobalListener=s.iframeProtocol.globalListen((function(e){"initialized"===e.type&&s.iframe.contentWindow&&(s.iframeProtocol.register(),s.options.fileResolver&&(s.fileResolverProtocol=new a("fs",(function(e){return(0,o._)(s,void 0,void 0,(function(){return(0,o.a)(this,(function(t){if("isFile"===e.method)return[2,this.options.fileResolver.isFile(e.params[0])];if("readFile"===e.method)return[2,this.options.fileResolver.readFile(e.params[0])];throw new Error("Method not supported")}))}))}),s.iframeProtocol)),s.updateSandbox(s.sandboxSetup,!0))})),s.unsubscribeChannelListener=s.iframeProtocol.channelListen((function(e){switch(e.type){case"start":s.errors=[];break;case"status":s.status=e.status;break;case"action":"show-error"===e.action&&(s.errors=(0,o.i)((0,o.i)([],s.errors,!0),[(0,o.e)(e)],!1));break;case"done":s.status="done";break;case"state":s.bundlerState=e.state}})),s}return(0,o.g)(t,e),t.prototype.setLocationURLIntoIFrame=function(){var e,t=this.options.startRoute?new URL(this.options.startRoute,this.bundlerURL).toString():this.bundlerURL;null===(e=this.iframe.contentWindow)||void 0===e||e.location.replace(t),this.iframe.src=t},t.prototype.destroy=function(){this.unsubscribeChannelListener(),this.unsubscribeGlobalListener(),this.iframeProtocol.cleanup()},t.prototype.updateOptions=function(e){(0,s.J)(this.options,e)||(this.options=e,this.updateSandbox())},t.prototype.updateSandbox=function(e,t){var n,i,s,r;void 0===e&&(e=this.sandboxSetup),this.sandboxSetup=(0,o.h)((0,o.h)({},this.sandboxSetup),e);var a=this.getFiles(),d=Object.keys(a).reduce((function(e,t){var n;return(0,o.h)((0,o.h)({},e),((n={})[t]={code:a[t].code,path:t},n))}),{}),l=JSON.parse((0,o.b)(this.sandboxSetup.dependencies,this.sandboxSetup.devDependencies,this.sandboxSetup.entry));try{l=JSON.parse(a["/package.json"].code)}catch(p){console.error((0,o.c)("could not parse package.json file: "+p.message))}var u=Object.keys(a).reduce((function(e,t){var n;return(0,o.h)((0,o.h)({},e),((n={})[t]={content:a[t].code,path:t},n))}),{});this.dispatch({type:"compile",codesandbox:!0,version:3,isInitializationCompile:t,modules:d,reactDevTools:this.options.reactDevTools,externalResources:this.options.externalResources||[],hasFileResolver:Boolean(this.options.fileResolver),disableDependencyPreprocessing:this.sandboxSetup.disableDependencyPreprocessing,template:this.sandboxSetup.template||c(l,u),showOpenInCodeSandbox:null===(n=this.options.showOpenInCodeSandbox)||void 0===n||n,showErrorScreen:null===(i=this.options.showErrorScreen)||void 0===i||i,showLoadingScreen:null!==(s=this.options.showLoadingScreen)&&void 0!==s&&s,skipEval:this.options.skipEval||!1,clearConsoleDisabled:!this.options.clearConsoleOnFirstCompile,logLevel:null!==(r=this.options.logLevel)&&void 0!==r?r:o.S.Info,customNpmRegistries:this.options.customNpmRegistries,teamId:this.options.teamId,sandboxId:this.options.sandboxId})},t.prototype.dispatch=function(e){"refresh"===e.type&&this.setLocationURLIntoIFrame(),this.iframeProtocol.dispatch(e)},t.prototype.listen=function(e){return this.iframeProtocol.channelListen(e)},t.prototype.getCodeSandboxURL=function(){var e=this.getFiles(),t=Object.keys(e).reduce((function(t,n){var i;return(0,o.h)((0,o.h)({},t),((i={})[n.replace("/","")]={content:e[n].code,isBinary:!1},i))}),{});return fetch("https://codesandbox.io/api/v1/sandboxes/define?json=1",{method:"POST",body:JSON.stringify({files:t}),headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return{sandboxId:e.sandbox_id,editorUrl:"https://codesandbox.io/s/"+e.sandbox_id,embedUrl:"https://codesandbox.io/embed/"+e.sandbox_id}}))},t.prototype.getFiles=function(){var e=this.sandboxSetup;return void 0===e.files["/package.json"]?(0,o.d)(e.files,e.dependencies,e.devDependencies,e.entry):this.sandboxSetup.files},t.prototype.initializeElement=function(){this.iframe.style.border="0",this.iframe.style.width=this.options.width||"100%",this.iframe.style.height=this.options.height||"100%",this.iframe.style.overflow="hidden",(0,o.n)(this.element.parentNode,"The given iframe does not have a parent."),this.element.parentNode.replaceChild(this.iframe,this.element)},t}(r.S)}}]);
//# sourceMappingURL=337.2e4aba2e.chunk.js.map