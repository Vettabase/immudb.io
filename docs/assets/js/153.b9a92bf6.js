(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{574:function(e,s,t){"use strict";t.r(s);var a=t(10),i=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"running-as-a-service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#running-as-a-service"}},[e._v("#")]),e._v(" Running as a service")]),e._v(" "),t("p",[e._v("Every operating system has different ways of running services. Immudb provides a facility called "),t("code",[e._v("immudb service")]),e._v(" to hide this complexity.")]),e._v(" "),t("p",[e._v("To install the service run:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("immudb service install\n")])])]),t("p",[e._v("This will for example, on Linux, install "),t("code",[e._v("/etc/systemd/system/immudb.service")]),e._v(" and create the appropriate user to run the service. On other operating systems, the native method would be used.")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("immudb service")]),e._v(" command also allows to control the lifecycle of the service:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("immudb service start\nimmudb service stop\nimmudb service status\n")])])]),t("p",[e._v("On Linux, "),t("code",[e._v("immudb service status")]),e._v(" is equivalent to "),t("code",[e._v("systemctl status immudb.service")]),e._v(", and is what it does under the hoods.")])])}),[],!1,null,null,null);s.default=i.exports}}]);