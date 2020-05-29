(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{368:function(a,t,s){"use strict";s.r(t);var e=s(43),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"immudb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#immudb"}},[a._v("#")]),a._v(" immudb")]),a._v(" "),s("h2",{attrs:{id:"contents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[a._v("#")]),a._v(" Contents")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#latest-binaries"}},[a._v("Latest binaries")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#build"}},[a._v("Build")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#docker"}},[a._v("Docker")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#run-immudb"}},[a._v("Run immudb")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#configuration"}},[a._v("Configuration")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#immuadmin"}},[a._v("immuadmin")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#immudb-service"}},[a._v("immudb service")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#authentication"}},[a._v("Authentication")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#backup-and-restore"}},[a._v("Backup and Restore")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#clients"}},[a._v("Clients")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#auditors"}},[a._v("Auditors")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#architecture"}},[a._v("Architecture")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#consistency-checker"}},[a._v("Consistency Checker")])])]),a._v(" "),s("h2",{attrs:{id:"latest-binaries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#latest-binaries"}},[a._v("#")]),a._v(" Latest binaries")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/codenotary/immudb/releases/latest",target:"_blank",rel:"noopener noreferrer"}},[a._v("Get the latest builds"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("If you run macOS you can also use Homebrew:")]),a._v(" "),s("p",[s("code",[a._v("brew install immudb")])]),a._v(" "),s("h2",{attrs:{id:"build"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build"}},[a._v("#")]),a._v(" Build")]),a._v(" "),s("p",[a._v("clone the immudb repository locally")]),a._v(" "),s("p",[a._v("'git clone https://github.com/codenotary/immudb.git'")]),a._v(" "),s("h3",{attrs:{id:"linux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[a._v("#")]),a._v(" Linux")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GOOS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("linux "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GOARCH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("amd64 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" immudb-static\n")])])]),s("h3",{attrs:{id:"macos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[a._v("#")]),a._v(" MacOS")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GOOS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("darwin "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GOARCH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("amd64 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" immudb-static\n")])])]),s("h3",{attrs:{id:"windows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[a._v("#")]),a._v(" Windows")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GOOS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("windows "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GOARCH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("amd64 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" immudb-static\n")])])]),s("h2",{attrs:{id:"docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[a._v("#")]),a._v(" Docker")]),a._v(" "),s("h3",{attrs:{id:"build-your-own-docker-container-image"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-your-own-docker-container-image"}},[a._v("#")]),a._v(" build your own Docker container image")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("docker build -t myown/immudb:latest -f Dockerfile "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n")])])]),s("h3",{attrs:{id:"run-immugw-in-a-container"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-immugw-in-a-container"}},[a._v("#")]),a._v(" run immugw in a container")]),a._v(" "),s("p",[a._v("Make sure to point to the immudb system using the environment variable IMMUGW_IMMUDB-ADDRESS")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("docker run -it -d -p "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3322")]),a._v(":3322 -p "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("9497")]),a._v(":9497 --name immudb codenotary/immugw:latest\n")])])]),s("p",[a._v("or listen on all interfaces")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("docker run -it -d -p "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3322")]),a._v(":3322 -p "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("9497")]),a._v(":9497 --name immudb -e "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IMMUDB_ADDRESS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0.0.0.0"')]),a._v(" codenotary/immudb\n")])])]),s("h2",{attrs:{id:"run-immudb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-immudb"}},[a._v("#")]),a._v(" Run immudb")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# run immudb in the foreground")]),a._v("\n./immudb\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# run immudb in the background")]),a._v("\n./immudb -d\n")])])]),s("h2",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[a._v("#")]),a._v(" Configuration")]),a._v(" "),s("p",[a._v("work in progress")]),a._v(" "),s("h2",{attrs:{id:"immuadmin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#immuadmin"}},[a._v("#")]),a._v(" immuadmin")]),a._v(" "),s("p",[a._v("immuadmin can be used to install and manage the immudb service for Windows and Linux")]),a._v(" "),s("h3",{attrs:{id:"linux-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-2"}},[a._v("#")]),a._v(" Linux")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GOOS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("linux "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GOARCH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("amd64 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" immuadmin-static \n")])])]),s("h3",{attrs:{id:"windows-by-component"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows-by-component"}},[a._v("#")]),a._v(" Windows (by component)")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GOOS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("windows "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GOARCH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("amd64 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" immuadmin-static\n")])])]),s("h2",{attrs:{id:"immudb-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#immudb-service"}},[a._v("#")]),a._v(" immudb service")]),a._v(" "),s("p",[a._v("Please make sure to build or download the immudb and immuadmin component and save them in the same work directory when installing the service.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# install immudb service")]),a._v("\n./immuadmin "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" immudb "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# check current immudb service status")]),a._v("\n./immuadmin "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" immudb status\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# stop immudb service")]),a._v("\n./immuadmin "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" immudb stop\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# start immudb service")]),a._v("\n./immuadmin "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" immudb start\n")])])]),s("p",[a._v("The linux service is using the following defaults:")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("File or configuration")]),a._v(" "),s("th",[a._v("location")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("all configuration files")]),a._v(" "),s("td",[a._v("/etc/immudb")])]),a._v(" "),s("tr",[s("td",[a._v("all data files")]),a._v(" "),s("td",[a._v("/var/lib/immudb")])]),a._v(" "),s("tr",[s("td",[a._v("pid file")]),a._v(" "),s("td",[a._v("/var/lib/immudb/immudb.pid")])]),a._v(" "),s("tr",[s("td",[a._v("log files")]),a._v(" "),s("td",[a._v("/var/log/immudb")])])])]),a._v(" "),s("h2",{attrs:{id:"authentication"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#authentication"}},[a._v("#")]),a._v(" Authentication")]),a._v(" "),s("p",[a._v("immudb supports multiple user accounts that can have admin, read-only or read-write permission.\nAll permissions are stored in a different database and each gRPC call has an associated minimum permissions.")]),a._v(" "),s("p",[a._v("To enable authentication you need to change the configuration file "),s("code",[a._v("/etc/immudb/immudb.toml")])]),a._v(" "),s("p",[a._v("Example:")]),a._v(" "),s("div",{staticClass:"language-toml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-toml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key property"}},[a._v("dir")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/var/lib/immudb"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[a._v("network")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"tcp"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[a._v("address")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0.0.0.0"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[a._v("port")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3322")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[a._v("dbname")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"data"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[a._v("pidfile")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/var/lib/immudb/immudb.pid"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[a._v("logfile")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/var/log/immudb/immudb.log"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[a._v("mtls")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[a._v("detached")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[a._v("auth")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[a._v("pkey")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/etc/immudb/mtls/3_application/private/localhost.key.pem"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[a._v("certificate")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/etc/immudb/mtls/3_application/certs/localhost.cert.pem"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[a._v("clientcas")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/etc/immudb/mtls/2_intermediate/certs/ca-chain.cert.pem"')]),a._v("\n")])])]),s("p",[a._v("The important lines to change are "),s("code",[a._v("auth = true")]),a._v(" and "),s("code",[a._v('address = "0.0.0.0"')]),a._v(" to enable authentication and listening on all interfaces.")]),a._v(" "),s("p",[a._v("Then restart/start immudb.")]),a._v(" "),s("h3",{attrs:{id:"receive-the-admin-credentials"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#receive-the-admin-credentials"}},[a._v("#")]),a._v(" Receive the admin credentials")]),a._v(" "),s("p",[a._v("You need to run "),s("code",[a._v("immuadmin")]),a._v(" locally on the same system as immudb (for security reasons) and connect to immudb:")]),a._v(" "),s("p",[s("code",[a._v("immuadmin login immu")])]),a._v(" "),s("p",[a._v("You^ll receive the following message:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("Using config file: /etc/immudb/immudb.toml\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("\nThis looks like the very first admin login attempt, hence the following credentials have been generated:\n---\nusername: immu\npassword: yourpassword\n---\nIMPORTANT: This is the only "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("time")]),a._v(" they are shown, so "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" sure you remember them.\nNOTE: You have not been automatically logged in. To login please run the "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("command")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'immuadmin login immu'")]),a._v(" with the above-mentioned password. You can change your password at any "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("time")]),a._v(" with one of your liking using the "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("command")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'immuadmin user change-password immu'")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("\n")])])]),s("p",[s("strong",[a._v("make sure to note that the password for the immu user as its your master password")])]),a._v(" "),s("h3",{attrs:{id:"user-management"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#user-management"}},[a._v("#")]),a._v(" User management")]),a._v(" "),s("p",[a._v("To manage user, run "),s("code",[a._v("immuadmin user")]),a._v(" after you logged in "),s("code",[a._v("immuadmin login immu")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("Please specify a user action.\nUsage: immuadmin user list"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("create"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("change-password"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("set-permission"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("deactivate "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("username"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("read"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("readwrite"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\nHelp "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" immuadmin user -h\n")])])]),s("h4",{attrs:{id:"list-user"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#list-user"}},[a._v("#")]),a._v(" List user")]),a._v(" "),s("p",[a._v("To get a list of all existing user including their permissions, run "),s("code",[a._v("immuadmin user list")])]),a._v(" "),s("h4",{attrs:{id:"add-user"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-user"}},[a._v("#")]),a._v(" Add user")]),a._v(" "),s("p",[a._v("Let's create a read-only user, called ro "),s("code",[a._v("immuadmin user create <username> read")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("immuadmin user create ro "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("read")]),a._v("\nNOTE: password must have between "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),a._v(" and "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("32")]),a._v(" letters, digits and special characters of "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("which")]),a._v(" at least "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" uppercase letter, "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" digit and "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" special character.\nChoose a password "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" ro:\nConfirm password:\nUser ro created\n")])])]),s("p",[a._v("and a read-write user, called rw "),s("code",[a._v("immuadmin user create rw readwrite")])]),a._v(" "),s("h4",{attrs:{id:"change-user-permission"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#change-user-permission"}},[a._v("#")]),a._v(" Change user permission")]),a._v(" "),s("p",[a._v("To change the ro user permission from read-only to read-write, run "),s("code",[a._v("immuadmin user set-permission ro readwrite")]),a._v("\nCheck the change, using "),s("code",[a._v("immuadmin user list")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("immuadmin user list\nUsing config file: /etc/immudb/immudb.toml\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(":\n-  --------  ----    -----------\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#  Username  Role    Permissions")]),a._v("\n-  --------  ----    -----------\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("  immu      admin   admin\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("  ro        client  readwrite\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("  rw        client  readwrite\n-  --------  ----    -----------\n")])])]),s("h4",{attrs:{id:"deactivate-user"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deactivate-user"}},[a._v("#")]),a._v(" Deactivate user")]),a._v(" "),s("p",[a._v("To deactivate an existing user, run "),s("code",[a._v("immuadmin user deactivate ro")])]),a._v(" "),s("h2",{attrs:{id:"backup-and-restore"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#backup-and-restore"}},[a._v("#")]),a._v(" Backup and Restore")]),a._v(" "),s("p",[a._v("work in progress")]),a._v(" "),s("h2",{attrs:{id:"clients"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clients"}},[a._v("#")]),a._v(" Clients")]),a._v(" "),s("p",[a._v("work in progress")]),a._v(" "),s("h2",{attrs:{id:"auditors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#auditors"}},[a._v("#")]),a._v(" Auditors")]),a._v(" "),s("p",[a._v("work in progress")]),a._v(" "),s("h2",{attrs:{id:"architecture"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#architecture"}},[a._v("#")]),a._v(" Architecture")]),a._v(" "),s("p",[a._v("work in progress")]),a._v(" "),s("h2",{attrs:{id:"consistency-checker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#consistency-checker"}},[a._v("#")]),a._v(" Consistency checker")]),a._v(" "),s("h3",{attrs:{id:"how-do-you-run-it"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-do-you-run-it"}},[a._v("#")]),a._v(" How do you run it?")]),a._v(" "),s("p",[a._v("It is part of immudb, enabled by default and runs as a thread of immudb.\nThe routine can be disabled as follows:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("./immudb --consistency-check"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("false\n")])])]),s("h3",{attrs:{id:"what-does-it-check"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-does-it-check"}},[a._v("#")]),a._v(" What does it check?")]),a._v(" "),s("p",[a._v("Consistency checker runs in a loop and continuously checks if the elements stored inside the immudb Merkle-tree are also physically stored correctly on the disk (the digest of the disk elements is the same digest stored in the related Merkle-tree leaf)")]),a._v(" "),s("h3",{attrs:{id:"how-does-it-run-its-check"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-does-it-run-its-check"}},[a._v("#")]),a._v(" How does it run its check?")]),a._v(" "),s("p",[s("strong",[a._v("Steps:")])]),a._v(" "),s("ol",[s("li",[a._v("reading the last root and last index stored in immudb")]),a._v(" "),s("li",[a._v("generate a range between 0 and the length of the Merkle-tree level 0 (total number of elements stored)")]),a._v(" "),s("li",[a._v("shuffles the range to get a random scan list (to be unpredictable)")]),a._v(" "),s("li",[a._v("check if every element is correctly inserted in the Merkle-tree and if the Merkle-tree leaves correctly represent the elements stored on hard disk")]),a._v(" "),s("li",[a._v("after completing the loop, the process sleeps ten seconds and restarts from scratch with a new root and index")]),a._v(" "),s("li",[a._v("in case an element does not pass the check correctly, immudb is immediately stopped and prints out a log message")])]),a._v(" "),s("p",[a._v("In order to produce a corrupted entry that is only on disk and not in the Merkle-tree, stop the immudb process and use the "),s("a",{attrs:{href:"https://github.com/codenotary/immudb/blob/master/tools/nimmu/nimmu.go",target:"_blank",rel:"noopener noreferrer"}},[a._v("nimmu"),s("OutboundLink")],1),a._v(" command:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("go build tools/nimmu/nimmu.go \n./nimmu rawset key1 tamper\n")])])]),s("p",[a._v("Then restart immudb and should see the consistency check printing an error.")])])}),[],!1,null,null,null);t.default=r.exports}}]);