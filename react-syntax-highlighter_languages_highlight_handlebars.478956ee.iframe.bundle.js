(self.webpackChunk_perxhealth_react_ui=self.webpackChunk_perxhealth_react_ui||[]).push([[7719],{"./node_modules/.pnpm/highlight.js@9.18.5/node_modules/highlight.js/lib/languages/handlebars.js":module=>{module.exports=function(hljs){var BUILT_INS={"builtin-name":"each in with if else unless bindattr action collection debugger log outlet template unbound view yield lookup"},IDENTIFIER_PLAIN_OR_QUOTED={begin:/".*?"|'.*?'|\[.*?\]|\w+/},EXPRESSION_OR_HELPER_CALL=hljs.inherit(IDENTIFIER_PLAIN_OR_QUOTED,{keywords:BUILT_INS,starts:{endsWithParent:!0,relevance:0,contains:[hljs.inherit(IDENTIFIER_PLAIN_OR_QUOTED,{relevance:0})]}}),BLOCK_MUSTACHE_CONTENTS=hljs.inherit(EXPRESSION_OR_HELPER_CALL,{className:"name"}),BASIC_MUSTACHE_CONTENTS=hljs.inherit(EXPRESSION_OR_HELPER_CALL,{relevance:0});return{aliases:["hbs","html.hbs","html.handlebars"],case_insensitive:!0,subLanguage:"xml",contains:[{begin:/\\\{\{/,skip:!0},{begin:/\\\\(?=\{\{)/,skip:!0},hljs.COMMENT(/\{\{!--/,/--\}\}/),hljs.COMMENT(/\{\{!/,/\}\}/),{className:"template-tag",begin:/\{\{\{\{(?!\/)/,end:/\}\}\}\}/,contains:[BLOCK_MUSTACHE_CONTENTS],starts:{end:/\{\{\{\{\//,returnEnd:!0,subLanguage:"xml"}},{className:"template-tag",begin:/\{\{\{\{\//,end:/\}\}\}\}/,contains:[BLOCK_MUSTACHE_CONTENTS]},{className:"template-tag",begin:/\{\{[#\/]/,end:/\}\}/,contains:[BLOCK_MUSTACHE_CONTENTS]},{className:"template-variable",begin:/\{\{\{/,end:/\}\}\}/,keywords:BUILT_INS,contains:[BASIC_MUSTACHE_CONTENTS]},{className:"template-variable",begin:/\{\{/,end:/\}\}/,keywords:BUILT_INS,contains:[BASIC_MUSTACHE_CONTENTS]}]}}}}]);