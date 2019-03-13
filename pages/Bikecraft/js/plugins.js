/*! http://responsiveslides.com v1.54 by @viljamis */
(function(c,I,B){c.fn.responsiveSlides=function(l){var a=c.extend({auto:!0,speed:500,timeout:4E3,pager:!1,nav:!1,random:!1,pause:!1,pauseControls:!0,prevText:"Previous",nextText:"Next",maxwidth:"",navContainer:"",manualControls:"",namespace:"rslides",before:c.noop,after:c.noop},l);return this.each(function(){B++;var f=c(this),s,r,t,m,p,q,n=0,e=f.children(),C=e.size(),h=parseFloat(a.speed),D=parseFloat(a.timeout),u=parseFloat(a.maxwidth),g=a.namespace,d=g+B,E=g+"_nav "+d+"_nav",v=g+"_here",j=d+"_on",
w=d+"_s",k=c("<ul class='"+g+"_tabs "+d+"_tabs' />"),x={"float":"left",position:"relative",opacity:1,zIndex:2},y={"float":"none",position:"absolute",opacity:0,zIndex:1},F=function(){var b=(document.body||document.documentElement).style,a="transition";if("string"===typeof b[a])return!0;s=["Moz","Webkit","Khtml","O","ms"];var a=a.charAt(0).toUpperCase()+a.substr(1),c;for(c=0;c<s.length;c++)if("string"===typeof b[s[c]+a])return!0;return!1}(),z=function(b){a.before(b);F?(e.removeClass(j).css(y).eq(b).addClass(j).css(x),
n=b,setTimeout(function(){a.after(b)},h)):e.stop().fadeOut(h,function(){c(this).removeClass(j).css(y).css("opacity",1)}).eq(b).fadeIn(h,function(){c(this).addClass(j).css(x);a.after(b);n=b})};a.random&&(e.sort(function(){return Math.round(Math.random())-0.5}),f.empty().append(e));e.each(function(a){this.id=w+a});f.addClass(g+" "+d);l&&l.maxwidth&&f.css("max-width",u);e.hide().css(y).eq(0).addClass(j).css(x).show();F&&e.show().css({"-webkit-transition":"opacity "+h+"ms ease-in-out","-moz-transition":"opacity "+
h+"ms ease-in-out","-o-transition":"opacity "+h+"ms ease-in-out",transition:"opacity "+h+"ms ease-in-out"});if(1<e.size()){if(D<h+100)return;if(a.pager&&!a.manualControls){var A=[];e.each(function(a){a+=1;A+="<li><a href='#' class='"+w+a+"'>"+a+"</a></li>"});k.append(A);l.navContainer?c(a.navContainer).append(k):f.after(k)}a.manualControls&&(k=c(a.manualControls),k.addClass(g+"_tabs "+d+"_tabs"));(a.pager||a.manualControls)&&k.find("li").each(function(a){c(this).addClass(w+(a+1))});if(a.pager||a.manualControls)q=
k.find("a"),r=function(a){q.closest("li").removeClass(v).eq(a).addClass(v)};a.auto&&(t=function(){p=setInterval(function(){e.stop(!0,!0);var b=n+1<C?n+1:0;(a.pager||a.manualControls)&&r(b);z(b)},D)},t());m=function(){a.auto&&(clearInterval(p),t())};a.pause&&f.hover(function(){clearInterval(p)},function(){m()});if(a.pager||a.manualControls)q.bind("click",function(b){b.preventDefault();a.pauseControls||m();b=q.index(this);n===b||c("."+j).queue("fx").length||(r(b),z(b))}).eq(0).closest("li").addClass(v),
a.pauseControls&&q.hover(function(){clearInterval(p)},function(){m()});if(a.nav){g="<a href='#' class='"+E+" prev'>"+a.prevText+"</a><a href='#' class='"+E+" next'>"+a.nextText+"</a>";l.navContainer?c(a.navContainer).append(g):f.after(g);var d=c("."+d+"_nav"),G=d.filter(".prev");d.bind("click",function(b){b.preventDefault();b=c("."+j);if(!b.queue("fx").length){var d=e.index(b);b=d-1;d=d+1<C?n+1:0;z(c(this)[0]===G[0]?b:d);if(a.pager||a.manualControls)r(c(this)[0]===G[0]?b:d);a.pauseControls||m()}});
a.pauseControls&&d.hover(function(){clearInterval(p)},function(){m()})}}if("undefined"===typeof document.body.style.maxWidth&&l.maxwidth){var H=function(){f.css("width","100%");f.width()>u&&f.css("width",u)};H();c(I).bind("resize",function(){H()})}})}})(jQuery,this,0);


/*Visibiliti*/
!function(e){"use strict";var i=-1,t={onVisible:function(e){var i=t.isSupported();if(!i||!t.hidden())return e(),i;var n=t.change(function(){t.hidden()||(t.unbind(n),e())});return n},change:function(e){if(!t.isSupported())return!1;i+=1;var n=i;return t._callbacks[n]=e,t._listen(),n},unbind:function(e){delete t._callbacks[e]},afterPrerendering:function(e){var i=t.isSupported(),n="prerender";if(!i||n!=t.state())return e(),i;var r=t.change(function(i,d){n!=d&&(t.unbind(r),e())});return r},hidden:function(){return!(!t._doc.hidden&&!t._doc.webkitHidden)},state:function(){return t._doc.visibilityState||t._doc.webkitVisibilityState||"visible"},isSupported:function(){return!(!t._doc.visibilityState&&!t._doc.webkitVisibilityState)},_doc:document||{},_callbacks:{},_change:function(e){var i=t.state();for(var n in t._callbacks)t._callbacks[n].call(t._doc,e,i)},_listen:function(){if(!t._init){var e="visibilitychange";t._doc.webkitVisibilityState&&(e="webkit"+e);var i=function(){t._change.apply(t,arguments)};t._doc.addEventListener?t._doc.addEventListener(e,i):t._doc.attachEvent(e,i),t._init=!0}}};"undefined"!=typeof module&&module.exports?module.exports=t:e.Visibility=t}(this),function(e){"use strict";var i=-1,t=function(t){return t.every=function(e,n,r){t._time(),r||(r=n,n=null),i+=1;var d=i;return t._timers[d]={visible:e,hidden:n,callback:r},t._run(d,!1),t.isSupported()&&t._listen(),d},t.stop=function(e){return t._timers[e]?(t._stop(e),delete t._timers[e],!0):!1},t._timers={},t._time=function(){t._timed||(t._timed=!0,t._wasHidden=t.hidden(),t.change(function(){t._stopRun(),t._wasHidden=t.hidden()}))},t._run=function(i,n){var r,d=t._timers[i];if(t.hidden()){if(null===d.hidden)return;r=d.hidden}else r=d.visible;var a=function(){d.last=new Date,d.callback.call(e)};if(n){var o=new Date,u=o-d.last;r>u?d.delay=setTimeout(function(){a(),d.id=setInterval(a,r)},r-u):(a(),d.id=setInterval(a,r))}else d.id=setInterval(a,r)},t._stop=function(e){var i=t._timers[e];clearInterval(i.id),clearTimeout(i.delay),delete i.id,delete i.delay},t._stopRun=function(){var e=t.hidden(),i=t._wasHidden;if(e&&!i||!e&&i)for(var n in t._timers)t._stop(n),t._run(n,!e)},t};"undefined"!=typeof module&&module.exports?module.exports=t(require("./visibility.core")):t(e.Visibility)}(window);