$(document).ready(()=>{const e=$("#back-to-top"),t=$("footer.footer"),o=$(".column-main"),s=$(".column-left"),n=$(".column-right");let i=0;const l=20,a=20;let c=null;const d={base:{classname:"card has-text-centered",left:"",width:64,bottom:a}};function r(t){if(null===c||(o=c,s=t,[].concat(Object.keys(o),Object.keys(s)).some(e=>!Object.prototype.hasOwnProperty.call(o,e)||!Object.prototype.hasOwnProperty.call(s,e)||s[e]!==o[e]))){var o,s;e.attr("class",t.classname);for(const o in t)"classname"!==o&&e.css(o,t[o]);c=t}}function h(){return window.innerWidth>=1078}function p(){return n.length>0}function b(){return $(window).scrollTop()+$(window).height()}function m(){return e.outerHeight(!0)}function w(){if(h()||window.innerWidth>=768&&!h()&&!(s.length>0)&&p()){let s;const i=(o.outerWidth()-o.width())/2,c=$(window).width()-e.outerWidth(!0)-l,h=t.offset().top+m()/2+a;s=0===$(window).scrollTop()||b()<(p()?Math.max.apply(null,n.find(".widget").map(function(){return $(this).offset().top+$(this).outerHeight(!0)})):0)+i+m()?d["desktop-hidden"]:b()<h?d["desktop-visible"]:Object.assign({},d["desktop-dock"],{bottom:b()-h+a});const w=o.offset().left+o.outerWidth()+i;r(s=Object.assign({},s,{left:Math.min(w,c)}))}else $(window).scrollTop()<i&&$(window).scrollTop()>0?r(d["mobile-visible"]):r(d["mobile-hidden"]),i=$(window).scrollTop()}d["desktop-hidden"]=Object.assign({},d.base,{classname:d.base.classname+" rise-up"}),d["desktop-visible"]=Object.assign({},d["desktop-hidden"],{classname:d["desktop-hidden"].classname+" fade-in"}),d["desktop-dock"]=Object.assign({},d["desktop-visible"],{classname:d["desktop-visible"].classname+" fade-in is-rounded",width:40}),d["mobile-hidden"]=Object.assign({},d.base,{classname:d.base.classname+" fade-in",right:l}),d["mobile-visible"]=Object.assign({},d["mobile-hidden"],{classname:d["mobile-hidden"].classname+" rise-up"}),w(),$(window).resize(w),$(window).scroll(w),$("#back-to-top").on("click",()=>{CSS&&CSS.supports&&CSS.supports("(scroll-behavior: smooth)")?window.scroll({top:0,behavior:"smooth"}):$("body, html").animate({scrollTop:0},400)})});