(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{326:function(t,e,a){},327:function(t,e,a){},331:function(t,e,a){"use strict";a(326)},332:function(t,e,a){"use strict";a(327)},336:function(t,e,a){"use strict";a.r(e);var o=a(335),n=a(333),i=a(334),s=a(337),r=a(328),c={name:"DiscordChatWidget"},h=(a(331),a(10)),u=Object(h.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"https://discord.gg/ThSJxNEHhZ",target:"_blank"}},[e("button",[e("font-awesome-icon",{attrs:{icon:["fab","discord"]}})],1)])}),[],!1,null,"28c13c9f",null).exports,d=a(62),b={name:"Layout",components:{Home:o.a,Page:i.a,Sidebar:s.a,Navbar:n.a,Footer:r.a,DiscordChatWidget:u},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(d.n)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,a=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(a)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},l=(a(332),Object(h.a)(b,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?a("Navbar",{attrs:{isSidebarOpen:t.isSidebarOpen},on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),a("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),a("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?a("Home"):a("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)}),t._v(" "),a("Footer"),t._v(" "),a("DiscordChatWidget",{staticClass:"chat-widget"})],1)}),[],!1,null,"63485741",null));e.default=l.exports}}]);