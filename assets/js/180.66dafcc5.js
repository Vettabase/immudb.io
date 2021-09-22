(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{750:function(s,a,t){"use strict";t.r(a);var e=t(14),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"immudb-specs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#immudb-specs"}},[s._v("#")]),s._v(" immudb specs")]),s._v(" "),t("WrappedSection",[t("p",[s._v("immudb is an append-only, tamperproof database with key/value and SQL (Structured Query Language) application programming interfaces.")]),s._v(" "),t("p",[s._v("The immudb core persistence layer consists of a cryptographically-immutable log. Transactions are sequentially stored and uniquely identified by unsigned 64-bit integer values, thus setting a theoretical limit of 18446744073709551615 transactions (1^64 - 1).")]),s._v(" "),t("p",[s._v("In order to provide manageable limits, immudb is designed to set an upper bound to the number of key-value pairs included in a single transaction. The default value being 1024, so using default settings, the theoretical number of key-value pairs that can be stored in immudb is: 1024 * (1^64 - 1).")]),s._v(" "),t("p",[s._v("We designed immudb to require stable resources but not imposing strong limitations as most of the settings can be adjusted based on the use-case requirements.")]),s._v(" "),t("p",[s._v("While key-value pairs consist of arbitrary byte arrays, a maximum length may be set at database creation time. Both parameters can be increased as needed, considering:")]),s._v(" "),t("ul",[t("li",[s._v("long keys may degrade performance (when querying data through the index)")]),s._v(" "),t("li",[s._v("longer values requires more memory at runtime")])]),s._v(" "),t("p",[s._v("Note: The cryptographic linking does not impose a practical restriction.")]),s._v(" "),t("p",[s._v("immudb relies on a file abstraction layer and does not directly interact with the underlying file-system, if any. But default storage layer implementation writes data into fixed-size files, default size being 512MB. The current theoretical maximum number of files is 100 millions.")]),s._v(" "),t("h3",{attrs:{id:"summary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[s._v("#")]),s._v(" Summary")]),s._v(" "),t("p",[s._v("Theoretical limits may be determined by a couple of elements:")]),s._v(" "),t("ul",[t("li",[s._v("max number transactions: 2^64-1 (uint64)")]),s._v(" "),t("li",[s._v("max number of files: 2^63-1 (max file size 2^56-1)")]),s._v(" "),t("li",[s._v("max value length: 32 MB (max size: 2^56-1 bytes)")]),s._v(" "),t("li",[s._v("max key length: 1024 Bytes (max length: 2^31-1 bytes)")])]),s._v(" "),t("h3",{attrs:{id:"running-platforms"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#running-platforms"}},[s._v("#")]),s._v(" Running platforms")]),s._v(" "),t("p",[s._v("immudb server runs in most operating systems: BSD, Linux, OS X, Solaris, Windows, IBM z/OS")]),s._v(" "),t("h3",{attrs:{id:"key-value-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#key-value-api"}},[s._v("#")]),s._v(" Key/Value API")]),s._v(" "),t("p",[s._v("immudb includes a basic yet complete set of operations you would expect from a key-value store:")]),s._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SetRequest")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" returns "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TxMetadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("KeyRequest")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" returns "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Entry")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SetReference")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ReferenceRequest")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" returns "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TxMetadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Scan")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ScanRequest")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" returns "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Entries")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("History")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HistoryRequest")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" returns "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Entries")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// grouping and sorting keys based on assgined scores")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ZAdd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ZAddRequest")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" returns "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TxMetadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ZScan")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ZScanRequest")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" returns "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ZEntries")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("p",[s._v("Additionally, immudb exposes direct access to transactions based on its unique identifier:")]),s._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TxById")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TxRequest")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" returns "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Tx")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TxScan")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TxScanRequest")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" returns "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TxList")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("p",[s._v("But more importantly, immudb is able to generate cryptographic-proofs whenever is needed:")]),s._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("VerifiableSet")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("VerifiableSetRequest")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" returns "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("VerifiableTx")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("VerifiableGet")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("VerifiableGetRequest")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" returns "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("VerifiableEntry")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("VerifiableTxById")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("VerifiableTxRequest")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" returns "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("VerifiableTx")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("VerifiableSetReference")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("VerifiableReferenceRequest")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" returns "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("VerifiableTx")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("VerifiableZAdd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("VerifiableZAddRequest")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" returns "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("VerifiableTx")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("p",[s._v("Check official SDKs documentation at "),t("a",{attrs:{href:"../develop/connection"}},[s._v("develop with immudb")]),s._v(".")]),s._v(" "),t("h3",{attrs:{id:"sql-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sql-api"}},[s._v("#")]),s._v(" SQL API")]),s._v(" "),t("p",[s._v("Based on the key-value storage layer, immudb includes a simplified SQL engine which is able to interprete most common features you\nwould expect from a relational database but with the possibility to verify rows has not been tampered with.")]),s._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SQLExec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SQLExecRequest")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" returns "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SQLExecResult")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SQLQuery")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SQLQueryRequest")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" returns "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SQLQueryResult")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n​\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("VerifiableSQLGet")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("VerifiableSQLGetRequest")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" returns "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("VerifiableSQLEntry")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("p",[s._v("Check "),t("a",{attrs:{href:"../reference/sql"}},[s._v("SQL reference")]),s._v(" for a comprehensive description of SQL statements.")]),s._v(" "),t("h3",{attrs:{id:"s3-storage-backend"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#s3-storage-backend"}},[s._v("#")]),s._v(" S3 Storage Backend")]),s._v(" "),t("p",[s._v("immudb can store its data in the Amazon S3 service (or a compatible alternative). The following example shows how to run immudb with the S3 storage enabled:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IMMUDB_S3_STORAGE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IMMUDB_S3_ACCESS_KEY_ID")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("S3 ACCESS KEY ID"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IMMUDB_S3_SECRET_KEY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("SECRET KEY"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IMMUDB_S3_BUCKET_NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("BUCKET NAME"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IMMUDB_S3_PATH_PREFIX")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("testing-001\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IMMUDB_S3_ENDPOINT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${IMMUDB_S3_BUCKET_NAME}")]),s._v('.s3.amazonaws.com"')]),s._v("\n\n./immudb\n")])])])])],1)}),[],!1,null,null,null);a.default=n.exports}}]);