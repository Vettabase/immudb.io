(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{507:function(t,a,e){"use strict";e.r(a);var s=e(10),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"quickstart"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#quickstart"}},[t._v("#")]),t._v(" Quickstart")]),t._v(" "),e("p",[t._v("To get started extremely quick using Docker:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("docker network create immudbnet\ndocker run -d --net immudbnet -it --rm --name immudb -p "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3322")]),t._v(":3322 codenotary/immudb:latest\ndocker run -it --rm --net immudbnet --name immuclient codenotary/immuclient:latest -a immudb\n")])])]),e("h2",{attrs:{id:"download-the-binaries"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#download-the-binaries"}},[t._v("#")]),t._v(" Download the binaries")]),t._v(" "),e("h3",{attrs:{id:"general"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#general"}},[t._v("#")]),t._v(" General")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/codenotary/immudb/releases/latest",target:"_blank",rel:"noopener noreferrer"}},[t._v("Get the latest builds"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"macos-specific"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#macos-specific"}},[t._v("#")]),t._v(" macOS specific")]),t._v(" "),e("p",[t._v("The community already added immudb to "),e("a",{attrs:{href:"https://formulae.brew.sh/formula/immudb",target:"_blank",rel:"noopener noreferrer"}},[t._v("HomeBrew"),e("OutboundLink")],1),t._v(", therefore you can simply run")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("brew "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" immudb\n")])])]),e("p",[t._v("In case you want to run immudb as a service, please check the following "),e("a",{attrs:{href:"https://medium.com/swlh/how-to-use-launchd-to-run-services-in-macos-b972ed1e352",target:"_blank",rel:"noopener noreferrer"}},[t._v("guideline"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"build-the-binaries"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#build-the-binaries"}},[t._v("#")]),t._v(" Build the binaries")]),t._v(" "),e("p",[t._v("To build the binaries yourself, simply clone this repo and run")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" all\n")])])]),e("h3",{attrs:{id:"linux-by-component"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux-by-component"}},[t._v("#")]),t._v(" Linux (by component)")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GOOS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("linux "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GOARCH")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("amd64 "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" immuclient-static immuadmin-static immudb-static\n")])])]),e("h3",{attrs:{id:"macos-by-component"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#macos-by-component"}},[t._v("#")]),t._v(" MacOS (by component)")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GOOS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("darwin "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GOARCH")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("amd64 "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" immuclient-static immuadmin-static immudb-static\n")])])]),e("h3",{attrs:{id:"windows-by-component"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows-by-component"}},[t._v("#")]),t._v(" Windows (by component)")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GOOS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("windows "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GOARCH")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("amd64 "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" immuclient-static immuadmin-static immudb-static\n")])])]),e("h2",{attrs:{id:"first-start"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#first-start"}},[t._v("#")]),t._v(" First start")]),t._v(" "),e("h3",{attrs:{id:"run-immudb-binary"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#run-immudb-binary"}},[t._v("#")]),t._v(" Run immudb binary")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# run immudb in the foreground")]),t._v("\n./immudb\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# run immudb in the background")]),t._v("\n./immudb -d\n")])])]),e("h3",{attrs:{id:"run-immudb-as-a-service"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#run-immudb-as-a-service"}},[t._v("#")]),t._v(" Run immudb as a service")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install immudb service")]),t._v("\n./immudb "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# check current immudb service status")]),t._v("\n./immudb "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" status\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# stop immudb service")]),t._v("\n./immudb "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" stop\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# start immudb service")]),t._v("\n./immudb "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" start\n")])])]),e("p",[t._v("The linux service is using the following defaults:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("File or configuration")]),t._v(" "),e("th",[t._v("location")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("all configuration files")]),t._v(" "),e("td",[t._v("/etc/immudb")])]),t._v(" "),e("tr",[e("td",[t._v("all data files")]),t._v(" "),e("td",[t._v("/var/lib/immudb")])]),t._v(" "),e("tr",[e("td",[t._v("pid file")]),t._v(" "),e("td",[t._v("/var/run/immudb.pid")])]),t._v(" "),e("tr",[e("td",[t._v("log files")]),t._v(" "),e("td",[t._v("/var/log/immudb")])])])]),t._v(" "),e("h3",{attrs:{id:"run-immugw-as-a-service"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#run-immugw-as-a-service"}},[t._v("#")]),t._v(" Run immugw as a service")]),t._v(" "),e("p",[t._v("immugw can be found in a different "),e("a",{attrs:{href:"https://github.com/codenotary/immugw",target:"_blank",rel:"noopener noreferrer"}},[t._v("repository"),e("OutboundLink")],1),t._v(". You can find a build guideline in the Readme of the repository.")]),t._v(" "),e("p",[t._v("Please make sure to build or download the immugw and immuadmin component and save them in the same work directory when installing the service.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install immugw service")]),t._v("\n./immugw "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# check current immugw service status")]),t._v("\n./immugw "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" status\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# stop immugw service")]),t._v("\n./immugw "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" stop\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# start immugw service")]),t._v("\n./immugw "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" start\n")])])]),e("p",[t._v("The linux service is using the following defaults:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("File or configuration")]),t._v(" "),e("th",[t._v("location")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("all configuration files")]),t._v(" "),e("td",[t._v("/etc/immudb")])]),t._v(" "),e("tr",[e("td",[t._v("pid file")]),t._v(" "),e("td",[t._v("/var/run/immugw.pid")])]),t._v(" "),e("tr",[e("td",[t._v("log files")]),t._v(" "),e("td",[t._v("/var/log/immudb")])])])]),t._v(" "),e("h2",{attrs:{id:"docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[t._v("#")]),t._v(" Docker")]),t._v(" "),e("p",[t._v("If you just want to run immudb and connect using "),e("code",[t._v("immuclient")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("docker network create immudbnet\ndocker run -d --net immudbnet -it --rm --name immudb -p "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3322")]),t._v(":3322 codenotary/immudb:latest\ndocker run -it --rm --net immudbnet --name immuclient codenotary/immuclient:latest -a immudb\n")])])]),e("p",[t._v("All services and CLI components are also available as Docker images on "),e("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("dockerhub"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Component")]),t._v(" "),e("th",[t._v("Container image")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("immudb")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://hub.docker.com/r/codenotary/immudb",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://hub.docker.com/r/codenotary/immudb"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("immugw")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://hub.docker.com/r/codenotary/immugw",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://hub.docker.com/r/codenotary/immugw"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("immuadmin")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://hub.docker.com/r/codenotary/immuadmin",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://hub.docker.com/r/codenotary/immuadmin"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("immuclient")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://hub.docker.com/r/codenotary/immuclient",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://hub.docker.com/r/codenotary/immuclient"),e("OutboundLink")],1)])])])]),t._v(" "),e("h3",{attrs:{id:"run-immudb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#run-immudb"}},[t._v("#")]),t._v(" Run immudb")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("docker run -it -d -p "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3322")]),t._v(":3322 -p "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9497")]),t._v(":9497 --name immudb codenotary/immudb:latest\n")])])]),e("p",[t._v("run it with persistent data and listening to all interfaces:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("docker run -it -d -p "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3322")]),t._v(":3322 -p "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9497")]),t._v(":9497 -v immudb:/var/lib/immudb --env "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("IMMUDB_ADDRESS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0 --name immudb codenotary/immudb:latest\n")])])]),e("h3",{attrs:{id:"run-immugw"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#run-immugw"}},[t._v("#")]),t._v(" Run immugw")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("docker run -it -d -p "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3323")]),t._v(":3323 --name immugw --env "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("IMMUGW_IMMUDB_ADDRESS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("immudb codenotary/immugw:latest\n")])])]),e("h3",{attrs:{id:"run-immuadmin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#run-immuadmin"}},[t._v("#")]),t._v(" Run immuadmin")]),t._v(" "),e("p",[t._v("You can either find immuadmin in the immudb container (/usr/local/bin/immuadmin) or run the Docker container to connect to the local immudb.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("docker run -it --rm --name immuadmin codenotary/immuadmin:latest status\n")])])]),e("h3",{attrs:{id:"run-immuclient"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#run-immuclient"}},[t._v("#")]),t._v(" Run immuclient")]),t._v(" "),e("p",[t._v("You can either find immuclient in the immudb container (/usr/local/bin/immuclient) or run the Docker container to connect to the local or remote immudb.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("docker run -it --rm --name immuclient codenotary/immuclient:latest -a "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("immudb-host"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),e("h3",{attrs:{id:"build-the-container-images-yourself"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#build-the-container-images-yourself"}},[t._v("#")]),t._v(" Build the container images yourself")]),t._v(" "),e("p",[t._v("If you want to build the container images yourself, simply clone this repo and run:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("docker build -t myown/immudb:latest -f Dockerfile "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\ndocker build -t myown/immuadmin:latest -f Dockerfile.immuadmin "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\ndocker build -t myown/immuclient:latest -f Dockerfile.immuclient "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);