(function framework7ComponentLoader(o,e){void 0===e&&(e=!0);document,window;var m=o.$,v=(o.Template7,o.utils),t=(o.device,o.support,o.Class,o.Modal),r=(o.ConstructorMethods,o.ModalMethods),n=function(d){function o(o,e){var t=v.extend({on:{}},o.params.popover,e);d.call(this,o,t);var r,a=this;if(a.params=t,(r=a.params.el?m(a.params.el):m(a.params.content))&&0<r.length&&r[0].f7Modal)return r[0].f7Modal;var p,n,s=m(a.params.targetEl).eq(0);if(0===r.length)return a.destroy();a.params.backdrop&&0===(p=o.root.children(".popover-backdrop")).length&&(p=m('<div class="popover-backdrop"></div>'),o.root.append(p)),0===r.find(".popover-angle").length?(n=m('<div class="popover-angle"></div>'),r.prepend(n)):n=r.find(".popover-angle");var l=a.open;function i(){a.resize()}function c(o){var e=o.target;0===m(e).closest(a.el).length&&(a.params.closeByBackdropClick&&a.params.backdrop&&a.backdropEl&&a.backdropEl===e?a.close():a.params.closeByOutsideClick&&a.close())}return v.extend(a,{app:o,$el:r,el:r[0],$targetEl:s,targetEl:s[0],$angleEl:n,angleEl:n[0],$backdropEl:p,backdropEl:p&&p[0],type:"popover",open:function(){for(var o,e=[],t=arguments.length;t--;)e[t]=arguments[t];var r=e[0],p=e[1];return"boolean"==typeof e[0]&&(p=(o=e)[0],r=o[1]),r&&(a.$targetEl=m(r),a.targetEl=a.$targetEl[0]),l.call(a,p)}}),a.on("popoverOpen",function(){a.resize(),o.on("resize",i),a.on("popoverClose popoverBeforeDestroy",function(){o.off("resize",i)})}),a.on("popoverOpened",function(){(a.params.closeByOutsideClick||a.params.closeByBackdropClick)&&o.on("click",c)}),a.on("popoverClose",function(){(a.params.closeByOutsideClick||a.params.closeByBackdropClick)&&o.off("click",c)}),r[0].f7Modal=a}return d&&(o.__proto__=d),((o.prototype=Object.create(d&&d.prototype)).constructor=o).prototype.resize=function(){var o=this,e=o.app,t=o.$el,r=o.$targetEl,p=o.$angleEl,a=o.params,n=a.targetX,s=a.targetY;t.css({left:"",top:""});var l,i,c,d,m,v,h=[t.width(),t.height()],f=h[0],u=h[1],g=0;if("ios"===e.theme?(p.removeClass("on-left on-right on-top on-bottom").css({left:"",top:""}),g=p.width()/2):t.removeClass("popover-on-left popover-on-right popover-on-top popover-on-bottom").css({left:"",top:""}),r&&0<r.length){c=r.outerWidth(),d=r.outerHeight();var k=r.offset();m=k.left-e.left,v=k.top-e.top;var b=r.parents(".page");0<b.length&&(v-=b[0].scrollTop)}else void 0!==n&&"undefined"!==s&&(m=n,v=s,c=o.params.targetWidth||0,d=o.params.targetHeight||0);var C=[0,0,0],y=C[0],E=C[1],M=C[2],B="md"===e.theme?"bottom":"top";"md"===e.theme?(u<e.height-v-d?(B="bottom",E=v):u<v?(E=v-u+d,B="top"):(B="bottom",E=v),E<=0?E=8:E+u>=e.height&&(E=e.height-u-8),(y=m+c-f-8)+f>=e.width-8&&(y=m+c-f-8),y<8&&(y=8),"top"===B&&t.addClass("popover-on-top"),"bottom"===B&&t.addClass("popover-on-bottom")):(u+g<v?E=v-u-g:u+g<e.height-v-d?(B="bottom",E=v+d+g):(B="middle",(M=E=d/2+v-u/2)<=0?E=5:E+u>=e.height&&(E=e.height-u-5),M-=E),"top"===B||"bottom"===B?((M=y=c/2+m-f/2)<5&&(y=5),y+f>e.width&&(y=e.width-f-5),y<0&&(y=0),"top"===B&&p.addClass("on-bottom"),"bottom"===B&&p.addClass("on-top"),l=f/2-g+(M-=y),l=Math.max(Math.min(l,f-2*g-13),13),p.css({left:l+"px"})):"middle"===B&&(y=m-f-g,p.addClass("on-right"),(y<5||y+f>e.width)&&(y<5&&(y=m+c+g),y+f>e.width&&(y=e.width-f-5),p.removeClass("on-right").addClass("on-left")),i=u/2-g+M,i=Math.max(Math.min(i,u-2*g-13),13),p.css({top:i+"px"}))),t.css({top:E+"px",left:y+"px"})},o}(t),p={name:"popover",params:{popover:{closeByBackdropClick:!0,closeByOutsideClick:!1,backdrop:!0}},static:{Popover:n},create:function(){var a=this;a.popover=v.extend(r({app:a,constructor:n,defaultSelector:".popover.modal-in"}),{open:function(o,e,t){var r=m(o),p=r[0].f7Modal;return p||(p=new n(a,{el:r,targetEl:e})),p.open(e,t)}})},clicks:{".popover-open":function(o,e){void 0===e&&(e={});this.popover.open(e.popover,o,e.animate)},".popover-close":function(o,e){void 0===e&&(e={});this.popover.close(e.popover,e.animate)}}};if(e){if(o.prototype.modules&&o.prototype.modules[p.name])return;o.use(p),o.instance&&(o.instance.useModuleParams(p,o.instance.params),o.instance.useModule(p))}return p}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))