(self.webpackChunkautobi=self.webpackChunkautobi||[]).push([[826],{654:function(e,t,n){"use strict";n.d(t,{O2:function(){return o},df:function(){return c},re:function(){return s},N1:function(){return a}});const o="http://hi1.xyz/scmss";function c(){$("#navbar-header").length&&$("#navbar-header").load("components/navbar.html",null,l),$("#footer").length&&$("#footer").load("components/footer.html"),$("#menu-content").length&&$("#menu-content").load("components/menu.html",null,r),$(".menu-trigger").click((()=>{$("html, body").css("overflow","hidden"),$("#menu-content").addClass("active")}))}function l(){$(".menu-trigger").click((()=>{$("html, body").css("overflow","hidden"),$("#menu-content").addClass("active")}))}function r(){$(".menu-trigger-close").click((()=>{$("html, body").removeAttr("style"),$("#menu-content").removeClass("active")}))}function s(e){var t,n,o=window.location.search.substring(1).split("&");for(n=0;n<o.length;n++)if((t=o[n].split("="))[0]===e)return void 0===t[1]||decodeURIComponent(t[1])}function a(e){e?($("html, body").css("overflow","hidden"),$("#loader-webpage").addClass("active")):($("html, body").removeAttr("style"),$("#loader-webpage").removeClass("active"))}},138:function(e,t,n){"use strict";var o=n(654);$(document).ready((()=>{$("#carouselId").carousel({interval:!1}),$(".scroll-down-btn").click((()=>{$([document.documentElement,document.body]).animate({scrollTop:$("#about-us").offset().top},500)})),(0,o.df)()}))}},0,[[138,666]]]);