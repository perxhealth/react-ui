(self.webpackChunk_perxhealth_react_ui=self.webpackChunk_perxhealth_react_ui||[]).push([[7892],{"./node_modules/.pnpm/highlight.js@9.18.5/node_modules/highlight.js/lib/languages/properties.js":module=>{module.exports=function(hljs){var WS0="[ \\t\\f]*",DELIM="("+WS0+"[:=]"+WS0+"|[ \\t\\f]+)",KEY_OTHER="([^\\\\:= \\t\\f\\n]|\\\\.)+",DELIM_AND_VALUE={end:DELIM,relevance:0,starts:{className:"string",end:/$/,relevance:0,contains:[{begin:"\\\\\\n"}]}};return{case_insensitive:!0,illegal:/\S/,contains:[hljs.COMMENT("^\\s*[!#]","$"),{begin:"([^\\\\\\W:= \\t\\f\\n]|\\\\.)+"+DELIM,returnBegin:!0,contains:[{className:"attr",begin:"([^\\\\\\W:= \\t\\f\\n]|\\\\.)+",endsParent:!0,relevance:0}],starts:DELIM_AND_VALUE},{begin:KEY_OTHER+DELIM,returnBegin:!0,relevance:0,contains:[{className:"meta",begin:KEY_OTHER,endsParent:!0,relevance:0}],starts:DELIM_AND_VALUE},{className:"attr",relevance:0,begin:KEY_OTHER+WS0+"$"}]}}}}]);