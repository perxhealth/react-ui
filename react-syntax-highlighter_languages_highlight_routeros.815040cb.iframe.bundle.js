(self.webpackChunk_perxhealth_react_ui=self.webpackChunk_perxhealth_react_ui||[]).push([[9068],{"./node_modules/.pnpm/highlight.js@9.18.5/node_modules/highlight.js/lib/languages/routeros.js":module=>{module.exports=function(hljs){var STATEMENTS="foreach do while for if from to step else on-error and or not in",LITERALS="true false yes no nothing nil null",VAR={className:"variable",variants:[{begin:/\$[\w\d#@][\w\d_]*/},{begin:/\$\{(.*?)}/}]},QUOTE_STRING={className:"string",begin:/"/,end:/"/,contains:[hljs.BACKSLASH_ESCAPE,VAR,{className:"variable",begin:/\$\(/,end:/\)/,contains:[hljs.BACKSLASH_ESCAPE]}]},APOS_STRING={className:"string",begin:/'/,end:/'/};return{aliases:["routeros","mikrotik"],case_insensitive:!0,lexemes:/:?[\w-]+/,keywords:{literal:LITERALS,keyword:STATEMENTS+" :"+STATEMENTS.split(" ").join(" :")+" :"+"global local beep delay put len typeof pick log time set find environment terminal error execute parse resolve toarray tobool toid toip toip6 tonum tostr totime".split(" ").join(" :")},contains:[{variants:[{begin:/^@/,end:/$/},{begin:/\/\*/,end:/\*\//},{begin:/%%/,end:/$/},{begin:/^'/,end:/$/},{begin:/^\s*\/[\w-]+=/,end:/$/},{begin:/\/\//,end:/$/},{begin:/^\[\</,end:/\>\]$/},{begin:/<\//,end:/>/},{begin:/^facet /,end:/\}/},{begin:"^1\\.\\.(\\d+)$",end:/$/}],illegal:/./},hljs.COMMENT("^#","$"),QUOTE_STRING,APOS_STRING,VAR,{begin:/[\w-]+\=([^\s\{\}\[\]\(\)]+)/,relevance:0,returnBegin:!0,contains:[{className:"attribute",begin:/[^=]+/},{begin:/=/,endsWithParent:!0,relevance:0,contains:[QUOTE_STRING,APOS_STRING,VAR,{className:"literal",begin:"\\b("+LITERALS.split(" ").join("|")+")\\b"},{begin:/("[^"]*"|[^\s\{\}\[\]]+)/}]}]},{className:"number",begin:/\*[0-9a-fA-F]+/},{begin:"\\b("+"add remove enable disable set get print export edit find run debug error info warning".split(" ").join("|")+")([\\s[(]|])",returnBegin:!0,contains:[{className:"builtin-name",begin:/\w+/}]},{className:"built_in",variants:[{begin:"(\\.\\./|/|\\s)(("+"traffic-flow traffic-generator firewall scheduler aaa accounting address-list address align area bandwidth-server bfd bgp bridge client clock community config connection console customer default dhcp-client dhcp-server discovery dns e-mail ethernet filter firewall firmware gps graphing group hardware health hotspot identity igmp-proxy incoming instance interface ip ipsec ipv6 irq l2tp-server lcd ldp logging mac-server mac-winbox mangle manual mirror mme mpls nat nd neighbor network note ntp ospf ospf-v3 ovpn-server page peer pim ping policy pool port ppp pppoe-client pptp-server prefix profile proposal proxy queue radius resource rip ripng route routing screen script security-profiles server service service-port settings shares smb sms sniffer snmp snooper socks sstp-server system tool tracking type upgrade upnp user-manager users user vlan secret vrrp watchdog web-access wireless pptp pppoe lan wan layer7-protocol lease simple raw".split(" ").join("|")+");?\\s)+",relevance:10},{begin:/\.\./}]}]}}}}]);