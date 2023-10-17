"use strict";(self.webpackChunk_perxhealth_react_ui=self.webpackChunk_perxhealth_react_ui||[]).push([[806],{"./node_modules/.pnpm/@chakra-ui+button@2.1.0_@chakra-ui+system@2.6.0_react@18.2.0/node_modules/@chakra-ui/button/dist/chunk-UVUR7MCU.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});var react=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var dist=__webpack_require__("./node_modules/.pnpm/@chakra-ui+react-context@2.1.0_react@18.2.0/node_modules/@chakra-ui/react-context/dist/index.mjs"),[ButtonGroupProvider,useButtonGroup]=(0,dist.k)({strict:!1,name:"ButtonGroupContext"}),chunk_ZHQNHOQS=__webpack_require__("./node_modules/.pnpm/@chakra-ui+system@2.6.0_@emotion+react@11.11.1_@emotion+styled@11.11.0_react@18.2.0/node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),shared_utils_dist=__webpack_require__("./node_modules/.pnpm/@chakra-ui+shared-utils@2.0.5/node_modules/@chakra-ui/shared-utils/dist/index.mjs"),jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function ButtonIcon(props){const{children,className,...rest}=props,_children=(0,react.isValidElement)(children)?(0,react.cloneElement)(children,{"aria-hidden":!0,focusable:!1}):children,_className=(0,shared_utils_dist.cx)("chakra-button__icon",className);return(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...rest,className:_className,children:_children})}ButtonIcon.displayName="ButtonIcon";var chunk_5PH6ULNP=__webpack_require__("./node_modules/.pnpm/@chakra-ui+spinner@2.1.0_@chakra-ui+system@2.6.0_react@18.2.0/node_modules/@chakra-ui/spinner/dist/chunk-5PH6ULNP.mjs");function ButtonSpinner(props){const{label,placement,spacing="0.5rem",children=(0,jsx_runtime.jsx)(chunk_5PH6ULNP.$,{color:"currentColor",width:"1em",height:"1em"}),className,__css,...rest}=props,_className=(0,shared_utils_dist.cx)("chakra-button__spinner",className),marginProp="start"===placement?"marginEnd":"marginStart",spinnerStyles=(0,react.useMemo)((()=>({display:"flex",alignItems:"center",position:label?"relative":"absolute",[marginProp]:label?spacing:0,fontSize:"1em",lineHeight:"normal",...__css})),[__css,label,marginProp,spacing]);return(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.div,{className:_className,...rest,__css:spinnerStyles,children})}ButtonSpinner.displayName="ButtonSpinner";var react_use_merge_refs_dist=__webpack_require__("./node_modules/.pnpm/@chakra-ui+react-use-merge-refs@2.1.0_react@18.2.0/node_modules/@chakra-ui/react-use-merge-refs/dist/index.mjs"),chunk_ZJJGQIVY=__webpack_require__("./node_modules/.pnpm/@chakra-ui+system@2.6.0_@emotion+react@11.11.1_@emotion+styled@11.11.0_react@18.2.0/node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),chunk_TKWR62NH=__webpack_require__("./node_modules/.pnpm/@chakra-ui+system@2.6.0_@emotion+react@11.11.1_@emotion+styled@11.11.0_react@18.2.0/node_modules/@chakra-ui/system/dist/chunk-TKWR62NH.mjs"),styled_system_dist=__webpack_require__("./node_modules/.pnpm/@chakra-ui+styled-system@2.9.1/node_modules/@chakra-ui/styled-system/dist/index.mjs"),Button=(0,chunk_ZJJGQIVY.G)(((props,ref)=>{const group=useButtonGroup(),styles=(0,chunk_TKWR62NH.mq)("Button",{...group,...props}),{isDisabled=null==group?void 0:group.isDisabled,isLoading,isActive,children,leftIcon,rightIcon,loadingText,iconSpacing="0.5rem",type,spinner,spinnerPlacement="start",className,as,...rest}=(0,styled_system_dist.Lr)(props),buttonStyles=(0,react.useMemo)((()=>{const _focus={...null==styles?void 0:styles._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...styles,...!!group&&{_focus}}}),[styles,group]),{ref:_ref,type:defaultType}=function useButtonType(value){const[isButton,setIsButton]=(0,react.useState)(!value);return{ref:(0,react.useCallback)((node=>{node&&setIsButton("BUTTON"===node.tagName)}),[]),type:isButton?"button":void 0}}(as),contentProps={rightIcon,leftIcon,iconSpacing,children};return(0,jsx_runtime.jsxs)(chunk_ZHQNHOQS.m.button,{ref:(0,react_use_merge_refs_dist.qq)(ref,_ref),as,type:null!=type?type:defaultType,"data-active":(0,shared_utils_dist.PB)(isActive),"data-loading":(0,shared_utils_dist.PB)(isLoading),__css:buttonStyles,className:(0,shared_utils_dist.cx)("chakra-button",className),...rest,disabled:isDisabled||isLoading,children:[isLoading&&"start"===spinnerPlacement&&(0,jsx_runtime.jsx)(ButtonSpinner,{className:"chakra-button__spinner--start",label:loadingText,placement:"start",spacing:iconSpacing,children:spinner}),isLoading?loadingText||(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.span,{opacity:0,children:(0,jsx_runtime.jsx)(ButtonContent,{...contentProps})}):(0,jsx_runtime.jsx)(ButtonContent,{...contentProps}),isLoading&&"end"===spinnerPlacement&&(0,jsx_runtime.jsx)(ButtonSpinner,{className:"chakra-button__spinner--end",label:loadingText,placement:"end",spacing:iconSpacing,children:spinner})]})}));function ButtonContent(props){const{leftIcon,rightIcon,children,iconSpacing}=props;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[leftIcon&&(0,jsx_runtime.jsx)(ButtonIcon,{marginEnd:iconSpacing,children:leftIcon}),children,rightIcon&&(0,jsx_runtime.jsx)(ButtonIcon,{marginStart:iconSpacing,children:rightIcon})]})}Button.displayName="Button"},"./node_modules/.pnpm/@chakra-ui+layout@2.3.0_@chakra-ui+system@2.6.0_react@18.2.0/node_modules/@chakra-ui/layout/dist/chunk-FAWTVNS3.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>Center});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@chakra-ui+system@2.6.0_@emotion+react@11.11.1_@emotion+styled@11.11.0_react@18.2.0/node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@chakra-ui+system@2.6.0_@emotion+react@11.11.1_@emotion+styled@11.11.0_react@18.2.0/node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),Center=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});Center.displayName="Center";var centerStyles={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}};(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)((function AbsoluteCenter2(props,ref){const{axis="both",...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.m.div,{ref,__css:centerStyles[axis],...rest,position:"absolute"})}))},"./node_modules/.pnpm/@chakra-ui+react-use-merge-refs@2.1.0_react@18.2.0/node_modules/@chakra-ui/react-use-merge-refs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{lq:()=>mergeRefs,qq:()=>useMergeRefs});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function mergeRefs(...refs){return node=>{refs.forEach((ref=>{!function assignRef(ref,value){if(null!=ref)if("function"!=typeof ref)try{ref.current=value}catch(error){throw new Error(`Cannot assign value '${value}' to ref '${ref}'`)}else ref(value)}(ref,node)}))}}function useMergeRefs(...refs){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>mergeRefs(...refs)),refs)}},"./stories/components/display/Pagination.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,OnFirstPage:()=>OnFirstPage,OnLastPage:()=>OnLastPage,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Pagination_stories});var react=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),chunk_FAWTVNS3=__webpack_require__("./node_modules/.pnpm/@chakra-ui+layout@2.3.0_@chakra-ui+system@2.6.0_react@18.2.0/node_modules/@chakra-ui/layout/dist/chunk-FAWTVNS3.mjs"),chunk_UVUR7MCU=__webpack_require__("./node_modules/.pnpm/@chakra-ui+button@2.1.0_@chakra-ui+system@2.6.0_react@18.2.0/node_modules/@chakra-ui/button/dist/chunk-UVUR7MCU.mjs"),chunk_ZJJGQIVY=__webpack_require__("./node_modules/.pnpm/@chakra-ui+system@2.6.0_@emotion+react@11.11.1_@emotion+styled@11.11.0_react@18.2.0/node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),IconButton=(0,chunk_ZJJGQIVY.G)(((props,ref)=>{const{icon,children,isRound,"aria-label":ariaLabel,...rest}=props,element=icon||children,_children=(0,react.isValidElement)(element)?(0,react.cloneElement)(element,{"aria-hidden":!0,focusable:!1}):null;return(0,jsx_runtime.jsx)(chunk_UVUR7MCU.z,{padding:"0",borderRadius:isRound?"full":void 0,ref,"aria-label":ariaLabel,...rest,children:_children})}));IconButton.displayName="IconButton";var createLucideIcon=__webpack_require__("./node_modules/.pnpm/lucide-react@0.274.0_react@18.2.0/node_modules/lucide-react/dist/esm/createLucideIcon.js");const ChevronLeft=(0,createLucideIcon.Z)("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),ChevronRight=(0,createLucideIcon.Z)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),Pagination=props=>{const{currentPage,totalPages,onPreviousClick,onNextClick,onPageNumberClick}=props,isPreviousPageDisabled=react.useMemo((()=>currentPage<=1),[currentPage]),isNextPageDisabled=react.useMemo((()=>currentPage>=totalPages),[totalPages,currentPage]);return(0,jsx_runtime.jsxs)(chunk_FAWTVNS3.M,{mt:"6",gap:"3",children:[(0,jsx_runtime.jsx)(IconButton,{"aria-label":"Previous Page",icon:(0,jsx_runtime.jsx)(ChevronLeft,{}),variant:"ghost",onClick:onPreviousClick,isDisabled:isPreviousPageDisabled}),[...Array(totalPages)].map(((_,index)=>{const pageNumber=index+1,isSelectedPage=currentPage===pageNumber;return(0,jsx_runtime.jsx)(chunk_UVUR7MCU.z,{isDisabled:isSelectedPage,variant:isSelectedPage?"solid":"outline",onClick:()=>onPageNumberClick(pageNumber),children:pageNumber},pageNumber)})),(0,jsx_runtime.jsx)(IconButton,{"aria-label":"Next Page",icon:(0,jsx_runtime.jsx)(ChevronRight,{}),variant:"ghost",onClick:onNextClick,isDisabled:isNextPageDisabled})]})};Pagination.displayName="Pagination";try{Pagination.displayName="Pagination",Pagination.__docgenInfo={description:"",displayName:"Pagination",props:{currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},totalPages:{defaultValue:null,description:"",name:"totalPages",required:!0,type:{name:"number"}},onPreviousClick:{defaultValue:null,description:"",name:"onPreviousClick",required:!0,type:{name:"(event: ButtonMouseEvent) => void"}},onNextClick:{defaultValue:null,description:"",name:"onNextClick",required:!0,type:{name:"(event: ButtonMouseEvent) => void"}},onPageNumberClick:{defaultValue:null,description:"",name:"onPageNumberClick",required:!0,type:{name:"(event: number) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/display/Pagination.tsx#Pagination"]={docgenInfo:Pagination.__docgenInfo,name:"Pagination",path:"src/components/display/Pagination.tsx#Pagination"})}catch(__react_docgen_typescript_loader_error){}const Pagination_stories={title:"Components/Display/Pagination",component:Pagination,argTypes:{},parameters:{controls:{expanded:!0}}},Template=args=>(0,jsx_runtime.jsx)(Pagination,{...args});Template.displayName="Template";const Default=Template.bind({}),OnFirstPage=Template.bind({}),OnLastPage=Template.bind({});Default.args={totalPages:8,currentPage:4},OnFirstPage.args={totalPages:8,currentPage:1},OnLastPage.args={totalPages:8,currentPage:8},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Pagination {...args} />",...Default.parameters?.docs?.source}}},OnFirstPage.parameters={...OnFirstPage.parameters,docs:{...OnFirstPage.parameters?.docs,source:{originalSource:"args => <Pagination {...args} />",...OnFirstPage.parameters?.docs?.source}}},OnLastPage.parameters={...OnLastPage.parameters,docs:{...OnLastPage.parameters?.docs,source:{originalSource:"args => <Pagination {...args} />",...OnLastPage.parameters?.docs?.source}}};const __namedExportsOrder=["Default","OnFirstPage","OnLastPage"]},"./node_modules/.pnpm/lucide-react@0.274.0_react@18.2.0/node_modules/lucide-react/dist/esm/createLucideIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>createLucideIcon});var react=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),defaultAttributes={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const createLucideIcon=(iconName,iconNode)=>{const Component=(0,react.forwardRef)((({color="currentColor",size=24,strokeWidth=2,absoluteStrokeWidth,children,...rest},ref)=>{return(0,react.createElement)("svg",{ref,...defaultAttributes,width:size,height:size,stroke:color,strokeWidth:absoluteStrokeWidth?24*Number(strokeWidth)/Number(size):strokeWidth,className:`lucide lucide-${string=iconName,string.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,...rest},[...iconNode.map((([tag,attrs])=>(0,react.createElement)(tag,attrs))),...(Array.isArray(children)?children:[children])||[]]);var string}));return Component.displayName=`${iconName}`,Component}}}]);