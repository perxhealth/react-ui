"use strict";(self.webpackChunk_perxhealth_react_ui=self.webpackChunk_perxhealth_react_ui||[]).push([[852],{"./node_modules/.pnpm/@chakra-ui+layout@2.3.0_@chakra-ui+system@2.6.0_react@18.2.0/node_modules/@chakra-ui/layout/dist/chunk-ZHMYA64R.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>Stack});var chunk_ZHQNHOQS=__webpack_require__("./node_modules/.pnpm/@chakra-ui+system@2.6.0_@emotion+react@11.10.4_@emotion+styled@11.10.4_react@18.2.0/node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),StackItem=props=>(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.div,{className:"chakra-stack__item",...props,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...props.__css}});StackItem.displayName="StackItem";var dist=__webpack_require__("./node_modules/.pnpm/@chakra-ui+shared-utils@2.0.5/node_modules/@chakra-ui/shared-utils/dist/index.mjs");Object.freeze(["base","sm","md","lg","xl","2xl"]);var react_children_utils_dist=__webpack_require__("./node_modules/.pnpm/@chakra-ui+react-children-utils@2.0.6_react@18.2.0/node_modules/@chakra-ui/react-children-utils/dist/index.mjs"),chunk_ZJJGQIVY=__webpack_require__("./node_modules/.pnpm/@chakra-ui+system@2.6.0_@emotion+react@11.10.4_@emotion+styled@11.10.4_react@18.2.0/node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),react=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),Stack=(0,chunk_ZJJGQIVY.G)(((props,ref)=>{const{isInline,direction:directionProp,align,justify,spacing="0.5rem",wrap,children,divider,className,shouldWrapChildren,...rest}=props,direction=isInline?"row":null!=directionProp?directionProp:"column",dividerStyle=(0,react.useMemo)((()=>function getDividerStyles(options){const{spacing,direction}=options,dividerStyles={column:{my:spacing,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:spacing,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:spacing,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:spacing,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(prop=direction,mapper=value=>dividerStyles[value],Array.isArray(prop)?prop.map((item=>null===item?null:mapper(item))):(0,dist.Kn)(prop)?Object.keys(prop).reduce(((result,key)=>(result[key]=mapper(prop[key]),result)),{}):null!=prop?mapper(prop):null)};var prop,mapper}({spacing,direction})),[spacing,direction]),hasDivider=!!divider,shouldUseChildren=!shouldWrapChildren&&!hasDivider,clones=(0,react.useMemo)((()=>{const validChildren=(0,react_children_utils_dist.W)(children);return shouldUseChildren?validChildren:validChildren.map(((child,index)=>{const key=void 0!==child.key?child.key:index,isLast=index+1===validChildren.length,_child=shouldWrapChildren?(0,jsx_runtime.jsx)(StackItem,{children:child},key):child;if(!hasDivider)return _child;const clonedDivider=(0,react.cloneElement)(divider,{__css:dividerStyle}),_divider=isLast?null:clonedDivider;return(0,jsx_runtime.jsxs)(react.Fragment,{children:[_child,_divider]},key)}))}),[divider,dividerStyle,hasDivider,shouldUseChildren,shouldWrapChildren,children]),_className=(0,dist.cx)("chakra-stack",className);return(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.div,{ref,display:"flex",alignItems:align,justifyContent:justify,flexDirection:direction,flexWrap:wrap,gap:hasDivider?void 0:spacing,className:_className,...rest,children:clones})}));Stack.displayName="Stack"},"./node_modules/.pnpm/@chakra-ui+react-children-utils@2.0.6_react@18.2.0/node_modules/@chakra-ui/react-children-utils/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>getValidChildren});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function getValidChildren(children){return react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter((child=>(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)))}},"./node_modules/.pnpm/@chakra-ui+table@2.1.0_@chakra-ui+system@2.6.0_react@18.2.0/node_modules/@chakra-ui/table/dist/chunk-GEJVU65N.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>Table,p:()=>useTableStyles});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@chakra-ui+system@2.6.0_@emotion+react@11.10.4_@emotion+styled@11.10.4_react@18.2.0/node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/@chakra-ui+system@2.6.0_@emotion+react@11.10.4_@emotion+styled@11.10.4_react@18.2.0/node_modules/@chakra-ui/system/dist/chunk-TKWR62NH.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/@chakra-ui+styled-system@2.9.1/node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/@chakra-ui+system@2.6.0_@emotion+react@11.10.4_@emotion+styled@11.10.4_react@18.2.0/node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/.pnpm/@chakra-ui+shared-utils@2.0.5/node_modules/@chakra-ui/shared-utils/dist/index.mjs"),_chakra_ui_react_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@chakra-ui+react-context@2.1.0_react@18.2.0/node_modules/@chakra-ui/react-context/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),[TableStylesProvider,useTableStyles]=(0,_chakra_ui_react_context__WEBPACK_IMPORTED_MODULE_1__.k)({name:"TableStylesContext",errorMessage:"useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Table />\" "}),Table=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)(((props,ref)=>{const styles=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.jC)("Table",props),{className,layout,...tableProps}=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__.Lr)(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TableStylesProvider,{value:styles,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__.m.table,{ref,__css:{tableLayout:layout,...styles.table},className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_6__.cx)("chakra-table",className),...tableProps})})}));Table.displayName="Table"},"./node_modules/.pnpm/@chakra-ui+table@2.1.0_@chakra-ui+system@2.6.0_react@18.2.0/node_modules/@chakra-ui/table/dist/chunk-GIQFRSD6.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Tr:()=>Tr});var _chunk_GEJVU65N_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@chakra-ui+table@2.1.0_@chakra-ui+system@2.6.0_react@18.2.0/node_modules/@chakra-ui/table/dist/chunk-GEJVU65N.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@chakra-ui+system@2.6.0_@emotion+react@11.10.4_@emotion+styled@11.10.4_react@18.2.0/node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/@chakra-ui+system@2.6.0_@emotion+react@11.10.4_@emotion+styled@11.10.4_react@18.2.0/node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),Tr=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)(((props,ref)=>{const styles=(0,_chunk_GEJVU65N_mjs__WEBPACK_IMPORTED_MODULE_2__.p)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.m.tr,{...props,ref,__css:styles.tr})}))},"./node_modules/.pnpm/@chakra-ui+table@2.1.0_@chakra-ui+system@2.6.0_react@18.2.0/node_modules/@chakra-ui/table/dist/chunk-J4QO5GAJ.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>Tbody});var _chunk_GEJVU65N_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@chakra-ui+table@2.1.0_@chakra-ui+system@2.6.0_react@18.2.0/node_modules/@chakra-ui/table/dist/chunk-GEJVU65N.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@chakra-ui+system@2.6.0_@emotion+react@11.10.4_@emotion+styled@11.10.4_react@18.2.0/node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/@chakra-ui+system@2.6.0_@emotion+react@11.10.4_@emotion+styled@11.10.4_react@18.2.0/node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),Tbody=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)(((props,ref)=>{const styles=(0,_chunk_GEJVU65N_mjs__WEBPACK_IMPORTED_MODULE_2__.p)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.m.tbody,{...props,ref,__css:styles.tbody})}))},"./node_modules/.pnpm/@chakra-ui+table@2.1.0_@chakra-ui+system@2.6.0_react@18.2.0/node_modules/@chakra-ui/table/dist/chunk-T2WCTPDH.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Td:()=>Td});var _chunk_GEJVU65N_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@chakra-ui+table@2.1.0_@chakra-ui+system@2.6.0_react@18.2.0/node_modules/@chakra-ui/table/dist/chunk-GEJVU65N.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@chakra-ui+system@2.6.0_@emotion+react@11.10.4_@emotion+styled@11.10.4_react@18.2.0/node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/@chakra-ui+system@2.6.0_@emotion+react@11.10.4_@emotion+styled@11.10.4_react@18.2.0/node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),Td=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((({isNumeric,...rest},ref)=>{const styles=(0,_chunk_GEJVU65N_mjs__WEBPACK_IMPORTED_MODULE_2__.p)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.m.td,{...rest,ref,__css:styles.td,"data-is-numeric":isNumeric})}))},"./stories/components/display/SkeletonTableRow.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/@chakra-ui+table@2.1.0_@chakra-ui+system@2.6.0_react@18.2.0/node_modules/@chakra-ui/table/dist/chunk-GEJVU65N.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/@chakra-ui+table@2.1.0_@chakra-ui+system@2.6.0_react@18.2.0/node_modules/@chakra-ui/table/dist/chunk-J4QO5GAJ.mjs"),_src_components_display_SkeletonTableRow__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/display/SkeletonTableRow.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Display/SkeletonTableRow",component:_src_components_display_SkeletonTableRow__WEBPACK_IMPORTED_MODULE_1__.p,argTypes:{},parameters:{controls:{expanded:!0}}},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.i,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src_components_display_SkeletonTableRow__WEBPACK_IMPORTED_MODULE_1__.p,{...args})})});Template.displayName="Template";const Default=Template.bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Table>\n    <Tbody>\n      <SkeletonTableRow {...args} />\n    </Tbody>\n  </Table>",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/components/display/SkeletonTableRow.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>SkeletonTableRow});var react=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var dist=__webpack_require__("./node_modules/.pnpm/@chakra-ui+shared-utils@2.0.5/node_modules/@chakra-ui/shared-utils/dist/index.mjs"),chunk_ZHQNHOQS=__webpack_require__("./node_modules/.pnpm/@chakra-ui+system@2.6.0_@emotion+react@11.10.4_@emotion+styled@11.10.4_react@18.2.0/node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),styled_system_dist=__webpack_require__("./node_modules/.pnpm/@chakra-ui+styled-system@2.9.1/node_modules/@chakra-ui/styled-system/dist/index.mjs"),emotion_react_browser_esm=__webpack_require__("./node_modules/.pnpm/@emotion+react@11.10.4_@babel+core@7.22.11_@types+react@18.0.23_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),chunk_ZJJGQIVY=__webpack_require__("./node_modules/.pnpm/@chakra-ui+system@2.6.0_@emotion+react@11.10.4_@emotion+styled@11.10.4_react@18.2.0/node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),chunk_TKWR62NH=__webpack_require__("./node_modules/.pnpm/@chakra-ui+system@2.6.0_@emotion+react@11.10.4_@emotion+styled@11.10.4_react@18.2.0/node_modules/@chakra-ui/system/dist/chunk-TKWR62NH.mjs"),chunk_WNDUHNHH=__webpack_require__("./node_modules/.pnpm/@chakra-ui+system@2.6.0_@emotion+react@11.10.4_@emotion+styled@11.10.4_react@18.2.0/node_modules/@chakra-ui/system/dist/chunk-WNDUHNHH.mjs"),jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),StyledSkeleton=(0,chunk_ZHQNHOQS.m)("div",{baseStyle:{boxShadow:"none",backgroundClip:"padding-box",cursor:"default",color:"transparent",pointerEvents:"none",userSelect:"none","&::before, &::after, *":{visibility:"hidden"}}}),$startColor=(0,styled_system_dist.gJ)("skeleton-start-color"),$endColor=(0,styled_system_dist.gJ)("skeleton-end-color"),fade=(0,emotion_react_browser_esm.F4)({from:{opacity:0},to:{opacity:1}}),bgFade=(0,emotion_react_browser_esm.F4)({from:{borderColor:$startColor.reference,background:$startColor.reference},to:{borderColor:$endColor.reference,background:$endColor.reference}}),Skeleton=(0,chunk_ZJJGQIVY.G)(((props,ref)=>{const skeletonProps={...props,fadeDuration:"number"==typeof props.fadeDuration?props.fadeDuration:.4,speed:"number"==typeof props.speed?props.speed:.8},styles=(0,chunk_TKWR62NH.mq)("Skeleton",skeletonProps),isFirstRender=function useIsFirstRender(){const isFirstRender=(0,react.useRef)(!0);return(0,react.useEffect)((()=>{isFirstRender.current=!1}),[]),isFirstRender.current}(),{startColor="",endColor="",isLoaded,fadeDuration,speed,className,fitContent,...rest}=(0,styled_system_dist.Lr)(skeletonProps),[startColorVar,endColorVar]=(0,chunk_WNDUHNHH.dQ)("colors",[startColor,endColor]),wasPreviouslyLoaded=function usePrevious(value){const ref=(0,react.useRef)();return(0,react.useEffect)((()=>{ref.current=value}),[value]),ref.current}(isLoaded),_className=(0,dist.cx)("chakra-skeleton",className),cssVarStyles={...startColorVar&&{[$startColor.variable]:startColorVar},...endColorVar&&{[$endColor.variable]:endColorVar}};if(isLoaded){const animation=isFirstRender||wasPreviouslyLoaded?"none":`${fade} ${fadeDuration}s`;return(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.div,{ref,className:_className,__css:{animation},...rest})}return(0,jsx_runtime.jsx)(StyledSkeleton,{ref,className:_className,...rest,__css:{width:fitContent?"fit-content":void 0,...styles,...cssVarStyles,_dark:{...styles._dark,...cssVarStyles},animation:`${speed}s linear infinite alternate ${bgFade}`}})}));Skeleton.displayName="Skeleton";var chunk_GIQFRSD6=__webpack_require__("./node_modules/.pnpm/@chakra-ui+table@2.1.0_@chakra-ui+system@2.6.0_react@18.2.0/node_modules/@chakra-ui/table/dist/chunk-GIQFRSD6.mjs"),chunk_T2WCTPDH=__webpack_require__("./node_modules/.pnpm/@chakra-ui+table@2.1.0_@chakra-ui+system@2.6.0_react@18.2.0/node_modules/@chakra-ui/table/dist/chunk-T2WCTPDH.mjs"),chunk_ZHMYA64R=__webpack_require__("./node_modules/.pnpm/@chakra-ui+layout@2.3.0_@chakra-ui+system@2.6.0_react@18.2.0/node_modules/@chakra-ui/layout/dist/chunk-ZHMYA64R.mjs");const SkeletonTableRow=props=>{const{columnCount=6}=props,columnWidth=`calc(100% / ${columnCount})`,columns=react.useMemo((()=>{let iterator=0;return Array.from(new Array(columnCount),(()=>(0,jsx_runtime.jsx)(Skeleton,{width:columnWidth,endColor:"gray.300",height:"14px"},++iterator)))}),[columnCount,columnWidth]);return(0,jsx_runtime.jsx)(chunk_GIQFRSD6.Tr,{children:(0,jsx_runtime.jsx)(chunk_T2WCTPDH.Td,{colSpan:100,children:(0,jsx_runtime.jsx)(chunk_ZHMYA64R.K,{direction:"row",w:"100%",children:columns})})})};SkeletonTableRow.displayName="SkeletonTableRow";try{SkeletonTableRow.displayName="SkeletonTableRow",SkeletonTableRow.__docgenInfo={description:"",displayName:"SkeletonTableRow",props:{columnCount:{defaultValue:null,description:"",name:"columnCount",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/display/SkeletonTableRow.tsx#SkeletonTableRow"]={docgenInfo:SkeletonTableRow.__docgenInfo,name:"SkeletonTableRow",path:"src/components/display/SkeletonTableRow.tsx#SkeletonTableRow"})}catch(__react_docgen_typescript_loader_error){}}}]);