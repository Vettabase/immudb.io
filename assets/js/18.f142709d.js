(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{369:function(t,a,s){"use strict";s.r(a);var e=s(43),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"immugw"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#immugw"}},[t._v("#")]),t._v(" immugw")]),t._v(" "),s("h2",{attrs:{id:"table-of-contents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[t._v("#")]),t._v(" Table of Contents")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#write-transactions-without-verification"}},[t._v("Write transactions without verification")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#write-transactions-with-verification"}},[t._v("Write transactions with verification")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#add-reference-to-existing-entries"}},[t._v("Add reference to existing entries")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#Add-secondary-index"}},[t._v("Add secondary index")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#read-entries-without-verification"}},[t._v("Read entries without verification")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#read-entries-with-verification"}},[t._v("Read entries with verification")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#scan-entries"}},[t._v("Scan entries")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#count-entries"}},[t._v("Count entries")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#get-current-root"}},[t._v("Get current root")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#check-consistency"}},[t._v("Check consistency")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#check-inclusion"}},[t._v("Check inclusion")])])]),t._v(" "),s("p",[t._v("The following code snippets explain how to work with 'immugw' (REST proxy for immudb) using 'curl'.\nimmugw HTTP API key/value are base64 encoded.")]),t._v(" "),s("h2",{attrs:{id:"write-transactions-without-verification"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#write-transactions-without-verification"}},[t._v("#")]),t._v(" Write transactions without verification")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --location --request POST "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://immugw:3323/v1/immurestproxy/item'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--header "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--header "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer {{token}}'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-raw "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n    "key": "\'')]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" -n client:Ms. Noelia Jaskolski "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" base64"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'",\n    "value": "\'')]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" -n Visa "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1514284849020756")]),t._v(" 09/21 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" base64"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\"\n    }\n}'")]),t._v("\n")])])]),s("h2",{attrs:{id:"write-transactions-with-verification"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#write-transactions-with-verification"}},[t._v("#")]),t._v(" Write transactions with verification")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --location --request POST "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://immugw:3323/v1/immurestproxy/item/safe'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--header "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--header "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer {{token}}'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-raw "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n    "kv": {\n         "key": "\'')]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" -n client:Ms. Maci Schuppe "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" base64"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'",\n    "value": "\'')]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" -n MasterCard "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2232703813463070")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v("/19 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" base64"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\"\n         }\n}'")]),t._v("\n")])])]),s("h2",{attrs:{id:"add-reference-to-existing-entries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-reference-to-existing-entries"}},[t._v("#")]),t._v(" Add reference to existing entries")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --location --request POST "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://immugw:3323/v1/immurestproxy/safe/reference'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--header "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--header "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer {{token}}'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-raw "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n    "ro": {\n        "reference":  "\'')]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" -n reference:Ms. Maci Schuppe "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" base64"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'",\n         "key": "\'')]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" -n client:Ms. Maci Schuppe "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" base64"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\"\n    }\n}'")]),t._v("\n")])])]),s("h2",{attrs:{id:"add-secondary-index"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-secondary-index"}},[t._v("#")]),t._v(" Add secondary index")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --location --request POST "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://immugw:3323/v1/immurestproxy/safe/zadd'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--header "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--header "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer {{token}}'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-raw "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n    "zopts": {\n        "set":  "\'')]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" -n SetOfClientsThatAreWomen "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" base64"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'",\n        "score": 1.0,\n        "key": "\'')]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" -n client:Ms. Noelia Jaskolski "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" base64"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\"\n    }\n}'")]),t._v("\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --location --request POST "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://immugw:3323/v1/immurestproxy/safe/zadd'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--header "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--header "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer {{token}}'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-raw "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n    "zopts": {\n        "set":  "\'')]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" -n SetOfClientsThatAreWomen "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" base64"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'",\n        "score": 3.0,\n        "key": "\'')]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" -n client:Ms. Maci Schuppe "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" base64"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\"\n    }\n}'")]),t._v("\n")])])]),s("h2",{attrs:{id:"read-entries-without-verification"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#read-entries-without-verification"}},[t._v("#")]),t._v(" Read entries without verification")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --location --request GET "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://immugw:3323/v1/immurestproxy/item/index/1'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--header "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer {{token}}'")]),t._v("\n")])])]),s("h2",{attrs:{id:"read-entries-with-verification"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#read-entries-with-verification"}},[t._v("#")]),t._v(" Read entries with verification")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --location --request POST "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://immugw:3323/v1/immurestproxy/item/safe/get'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--header "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--header "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer {{token}}'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-raw "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n         "key": "\'')]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" -n client:Ms. Noelia Jaskolski "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" base64"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\"\n}'")]),t._v("\n")])])]),s("h2",{attrs:{id:"scan-entries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scan-entries"}},[t._v("#")]),t._v(" Scan entries")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --request POST "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --url http://immugw:3323/v1/immurestproxy/item/scan "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer {{token}}'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'content-type: application/json'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --data "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n  "prefix": "\'')]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" -n client:Ms. Noelia Jaskolski "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" base64"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'",\n  "offset": "\'')]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" -n client:Ms. Maci Schuppe "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" base64"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'",\n  "limit": "2",\n  "reverse": true,\n  "deep": true\n}\'')]),t._v("\n")])])]),s("h2",{attrs:{id:"count-entries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#count-entries"}},[t._v("#")]),t._v(" Count  entries")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --request GET "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --url http://immugw:3323/v1/immurestproxy/item/count/Y2xpZW50Mg"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer {{token}}'")]),t._v("\n")])])]),s("h2",{attrs:{id:"get-current-root"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-current-root"}},[t._v("#")]),t._v(" Get current root")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --location --request GET "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://immugw:3323/v1/immurestproxy/root'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer {{token}}'")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"add-a-new-entry-after-getting-current-root"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-a-new-entry-after-getting-current-root"}},[t._v("#")]),t._v(" Add a new entry after getting current root")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --location --request POST "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://immugw:3323/v1/immurestproxy/item'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--header "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--header "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer {{token}}'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-raw "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n    "key": "\'')]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" -n client:Mr. Valentin Padurean "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" base64"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'",\n    "value": "\'')]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" -n MasterCard "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2232703813463070")]),t._v(" 01/24 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" base64"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\"\n}'")]),t._v("\n")])])]),s("h2",{attrs:{id:"check-consistency"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#check-consistency"}},[t._v("#")]),t._v(" Check consistency")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --request GET "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --url http://immuwg:3323/v1/immurestproxy/consistencyproof/33\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer {{token}}'")]),t._v("\n")])])]),s("h2",{attrs:{id:"check-inclusion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#check-inclusion"}},[t._v("#")]),t._v(" Check inclusion")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --request GET "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --url http://immugw:3323/v1/immurestproxy/inclusionproof/33 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer {{token}}'")]),t._v("\n")])])]),s("h2",{attrs:{id:"license"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[t._v("#")]),t._v(" License")]),t._v(" "),s("p",[t._v("immugw is "),s("a",{attrs:{href:"LICENSE"}},[t._v("Apache v2.0 License")]),t._v(".")])])}),[],!1,null,null,null);a.default=n.exports}}]);