(self.webpackChunk_perxhealth_react_ui=self.webpackChunk_perxhealth_react_ui||[]).push([[7609],{"./node_modules/.pnpm/highlight.js@9.18.5/node_modules/highlight.js/lib/languages/gcode.js":module=>{module.exports=function(hljs){var GCODE_CODE=[hljs.C_LINE_COMMENT_MODE,hljs.C_BLOCK_COMMENT_MODE,hljs.COMMENT(/\(/,/\)/),hljs.inherit(hljs.C_NUMBER_MODE,{begin:"([-+]?([0-9]*\\.?[0-9]+\\.?))|"+hljs.C_NUMBER_RE}),hljs.inherit(hljs.APOS_STRING_MODE,{illegal:null}),hljs.inherit(hljs.QUOTE_STRING_MODE,{illegal:null}),{className:"name",begin:"([G])([0-9]+\\.?[0-9]?)"},{className:"name",begin:"([M])([0-9]+\\.?[0-9]?)"},{className:"attr",begin:"(VC|VS|#)",end:"(\\d+)"},{className:"attr",begin:"(VZOFX|VZOFY|VZOFZ)"},{className:"built_in",begin:"(ATAN|ABS|ACOS|ASIN|SIN|COS|EXP|FIX|FUP|ROUND|LN|TAN)(\\[)",end:"([-+]?([0-9]*\\.?[0-9]+\\.?))(\\])"},{className:"symbol",variants:[{begin:"N",end:"\\d+",illegal:"\\W"}]}];return{aliases:["nc"],case_insensitive:!0,lexemes:"[A-Z_][A-Z0-9_.]*",keywords:"IF DO WHILE ENDWHILE CALL ENDIF SUB ENDSUB GOTO REPEAT ENDREPEAT EQ LT GT NE GE LE OR XOR",contains:[{className:"meta",begin:"\\%"},{className:"meta",begin:"([O])([0-9]+)"}].concat(GCODE_CODE)}}}}]);