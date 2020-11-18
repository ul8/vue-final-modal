!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("vue")):"function"==typeof define&&define.amd?define(["vue"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).VueFinalModal=t(e.Vue)}(this,(function(e){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var u=function(e){return function(e,t){return l(e.querySelectorAll(t)||[])}(e,'button:not([disabled]), select:not([disabled]), a[href]:not([disabled]), area[href]:not([disabled]), [contentEditable=""]:not([disabled]), [contentEditable="true"]:not([disabled]), [contentEditable="TRUE"]:not([disabled]), textarea:not([disabled]), iframe:not([disabled]), input:not([disabled]), summary:not([disabled]), [tabindex]:not([tabindex="-1"])')},c=function(e){return e==document.activeElement},d=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.root=null,this.elements=[],this.onKeyDown=this.onKeyDown.bind(this),this.enable=this.enable.bind(this),this.disable=this.disable.bind(this),this.firstElement=this.firstElement.bind(this),this.lastElement=this.lastElement.bind(this)}var t,o,a;return t=e,(o=[{key:"lastElement",value:function(){return this.elements[this.elements.length-1]||null}},{key:"firstElement",value:function(){return this.elements[0]||null}},{key:"onKeyDown",value:function(e){if(function(e){return"Tab"===e.key||9===e.keyCode}(e)){if(!e.shiftKey)return!document.activeElement||c(this.lastElement())?(this.firstElement().focus(),void e.preventDefault()):void 0;c(this.firstElement())&&(this.lastElement().focus(),e.preventDefault())}}},{key:"enabled",value:function(){return!!this.root}},{key:"enable",value:function(e){e&&(this.root=e,this.elements=u(this.root),this.root.addEventListener("keydown",this.onKeyDown))}},{key:"disable",value:function(){this.root.removeEventListener("keydown",this.onKeyDown),this.root=null}}])&&n(t.prototype,o),a&&n(t,a),e}(),s=function(e){return!(!e||e.nodeType!==Node.ELEMENT_NODE)},f=function(e,t){t&&s(e)&&(e.style[t]="")},v="enter",m="entering",p="leave",y="leavng",b={props:{name:{type:String,default:null},modelValue:{type:Boolean,default:!1},ssr:{type:Boolean,default:!0},classes:{type:[String,Object,Array],default:""},overlayClass:{type:[String,Object,Array],default:""},contentClass:{type:[String,Object,Array],default:""},styles:{type:[String,Object,Array],default:""},overlayStyle:{type:[String,Object,Array],default:""},contentStyle:{type:[String,Object,Array],default:""},lockScroll:{type:Boolean,default:!0},hideOverlay:{type:Boolean,default:!1},clickToClose:{type:Boolean,default:!0},escToClose:{type:Boolean,default:!1},preventClick:{type:Boolean,default:!1},attach:{type:null,default:!1,validator:function(e){var n=t(e);return"boolean"===n||"string"===n||e.nodeType===Node.ELEMENT_NODE}},transition:{type:String,default:"vfm"},overlayTransition:{type:String,default:"vfm"},zIndexBase:{type:[String,Number],default:1e3},zIndex:{type:[Boolean,String,Number],default:!1},focusRetain:{type:Boolean,default:!0},focusTrap:{type:Boolean,default:!1}},emits:["update:modelValue","click-outside","before-open","opened","before-close","closed"],setup:function(t,n){var o=n.emit,a=Symbol("vfm"),r=e.ref(null),l=e.ref(null),i=e.ref(null),u=e.inject(t._options.key),c=e.ref(null),b=new d,h=e.ref(!1),g=e.reactive({modal:!1,overlay:!1}),k=e.ref(null),O=e.ref(null),w=e.computed((function(){return(t.hideOverlay||k.value===p)&&O.value===p})),S=e.computed((function(){return"boolean"==typeof t.zIndex?t.attach?"unset":t.zIndexBase+2*(c.value||0):t.zIndex}));function C(){return{uid:a,name:t.name,modelValue:t.modelValue,emit:o,vfmContainer:i,vfmContent:l,getAttachElement:j,modalStackIndex:c,visibility:g,handleLockScroll:B,hideOverlay:t.hideOverlay,focusRetain:t.focusRetain,focusTrap:t.focusTrap,$focusTrap:b}}function E(){if(t.modelValue){var n=j();if(n||!1===t.attach){!1!==t.attach&&n.appendChild(r.value);var o=u.openedModals.findIndex((function(e){return e.uid===a}));-1!==o&&u.openedModals.splice(o,1),u.openedModals.push(C()),c.value=u.openedModals.length-1,B(),u.openedModals.filter((function(e){return e.uid!==a})).forEach((function(e,t){e.getAttachElement()===n&&(e.modalStackIndex.value=t,e.visibility.overlay=!1)})),h.value=!0,e.nextTick((function(){g.overlay=!0,g.modal=!0}))}else!1!==n&&console.warn("Unable to locate target ".concat(t.attach))}}function M(){var e=u.openedModals.findIndex((function(e){return e.uid===a}));if(-1!==e&&u.openedModals.splice(e,1),u.openedModals.length>0){var t,n=u.openedModals[u.openedModals.length-1];n.handleLockScroll(),n.focusTrap&&(null===(t=n.$focusTrap.firstElement())||void 0===t||t.focus()),(n.focusRetain||n.focusTrap)&&n.vfmContainer.value.focus(),!n.hideOverlay&&(n.visibility.overlay=!0)}g.overlay=!1,g.modal=!1}function B(){var e,n,o;t.modelValue&&(t.lockScroll?(e=document.body,o="hidden",(n="overflow")&&s(e)&&(e.style[n]=o)):f(document.body,"overflow"))}function j(){return!1!==t.attach&&("string"==typeof t.attach?!!window&&window.document.querySelector(t.attach):t.attach)}return e.watch((function(){return t.modelValue}),(function(e){E(),e||M()})),e.watch((function(){return t.lockScroll}),B),e.watch((function(){return t.hideOverlay}),(function(e){t.modelValue&&!e&&(g.overlay=!0)})),e.watch((function(){return t.attach}),E),e.watch(w,(function(e){e&&(h.value=!1)}),{flush:"post"}),u.modals.push(C()),e.onMounted((function(){E()})),e.onBeforeUnmount((function(){M(),r.value.remove();var e=u.modals.findIndex((function(e){return e.uid===a}));u.modals.splice(e,1)})),{root:r,vfmContent:l,vfmContainer:i,visible:h,visibility:g,calculateZIndex:S,beforeOverlayEnter:function(){k.value=m},afterOverlayEnter:function(){k.value=v},beforeOverlayLeave:function(){k.value=y},afterOverlayLeave:function(){k.value=p},beforeModalEnter:function(){o("before-open"),O.value=m},afterModalEnter:function(){O.value=v,(t.focusRetain||t.focusTrap)&&i.value.focus(),t.focusTrap&&b.enable(i.value),o("opened")},beforeModalLeave:function(){o("before-close"),O.value=y,b.enabled()&&b.disable()},afterModalLeave:function(){O.value=p,c.value=null,0===u.openedModals.length&&t.lockScroll&&f(document.body,"overflow"),o("closed")},onClickContainer:function(){o("click-outside"),t.clickToClose&&o("update:modelValue",!1)},onEsc:function(e){27===e.keyCode&&h.value&&t.escToClose&&o("update:modelValue",!1)}}}};const h=e.withScopeId("data-v-2836fdb5"),g=h((function(t,n,o,a,r,l){return o.ssr||a.visible?e.withDirectives((e.openBlock(),e.createBlock("div",{key:0,ref:"root",style:{zIndex:a.calculateZIndex},class:["vfm vfm--inset",[!1===o.attach?"vfm--fixed":"vfm--absolute",{"vfm--prevent-none":o.preventClick}]],onKeydown:n[3]||(n[3]=(...e)=>a.onEsc(...e))},[e.createVNode(e.Transition,{name:o.overlayTransition,"onBefore-enter":a.beforeOverlayEnter,"onAfter-enter":a.afterOverlayEnter,"onBefore-leave":a.beforeOverlayLeave,"onAfter-leave":a.afterOverlayLeave},{default:h((()=>[e.withDirectives(e.createVNode("div",{class:["vfm__overlay vfm--overlay vfm--absolute vfm--inset",o.overlayClass],style:o.overlayStyle},null,6),[[e.vShow,!o.hideOverlay&&a.visibility.overlay]])])),_:1},8,["name","onBefore-enter","onAfter-enter","onBefore-leave","onAfter-leave"]),e.createVNode(e.Transition,{name:o.transition,"onBefore-enter":a.beforeModalEnter,"onAfter-enter":a.afterModalEnter,"onBefore-leave":a.beforeModalLeave,"onAfter-leave":a.afterModalLeave},{default:h((()=>[e.withDirectives(e.createVNode("div",{ref:"vfmContainer",class:["vfm__container vfm--absolute vfm--inset vfm--outline-none",o.classes],style:o.styles,"aria-expanded":a.visibility.modal.toString(),role:"dialog","aria-modal":"true",tabindex:"-1",onClick:n[2]||(n[2]=(...e)=>a.onClickContainer(...e))},[e.createVNode("div",{ref:"vfmContent",class:["vfm__content",[o.contentClass,{"vfm--prevent-auto":o.preventClick}]],style:o.contentStyle,onClick:n[1]||(n[1]=e.withModifiers((()=>{}),["stop"]))},[e.renderSlot(t.$slots,"default")],6)],14,["aria-expanded"]),[[e.vShow,a.visibility.modal]])])),_:3},8,["name","onBefore-enter","onAfter-enter","onBefore-leave","onAfter-leave"])],38)),[[e.vShow,!o.ssr||a.visible]]):e.createCommentVNode("v-if",!0)}));!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&o.firstChild?o.insertBefore(a,o.firstChild):o.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}("\n.vfm--fixed[data-v-2836fdb5] {\n  position: fixed;\n}\n.vfm--absolute[data-v-2836fdb5] {\n  position: absolute;\n}\n.vfm--inset[data-v-2836fdb5] {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.vfm--overlay[data-v-2836fdb5] {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.vfm--prevent-none[data-v-2836fdb5] {\n  pointer-events: none;\n}\n.vfm--prevent-auto[data-v-2836fdb5] {\n  pointer-events: auto;\n}\n.vfm--outline-none[data-v-2836fdb5]:focus {\n  outline: none;\n}\n.vfm-enter-active[data-v-2836fdb5],\n.vfm-leave-active[data-v-2836fdb5] {\n  transition: opacity 0.2s;\n}\n.vfm-enter-from[data-v-2836fdb5],\n.vfm-leave-to[data-v-2836fdb5] {\n  opacity: 0;\n}\n"),b.render=g,b.__scopeId="data-v-2836fdb5",b.__file="lib/VueFinalModal.vue";var k={props:{},setup:function(t){var n=e.inject(t._options.key);return{dynamicModals:n.dynamicModals,slice:function(e){n.dynamicModals.splice(e,1)}}}};const O={class:"modals-container"};function w(e,t){return Object.assign(e.props,{_options:{default:function(){return t}}}),e}function S(n,o){var a=function(n){var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(){return(e++).toString()}}();return function(){return{openedModals:[],modals:[],dynamicModals:e.reactive([]),show:function(a){switch(t(a)){case"string":this.toggle(a,!0);break;case"object":var l={component:n.componentName,props:{},slots:{},events:{}};a=Object.assign(l,a);var i=o(),u=a.bind.name||"_dynamic_modal_"+i;this.dynamicModals.push(r(r({value:e.ref(!0),id:i},a),{},{component:e.shallowRef(a.component),slots:e.shallowRef(a.slots),bind:r(r({},a.bind),{},{name:u})}))}},hide:function(e){this.toggle(e,!1)},hideAll:function(){for(var e=this.openedModals.length-1;e>=0;e--)this.openedModals[e].emit("update:modelValue",!1)},toggle:function(e,t){var n=function(e,t){for(var n=e.length-1;n>=0;n--)if(t(e[n],n))return e[n]}(this.modals,(function(t){return t.name===e}));void 0!==n&&n.emit("update:modelValue",void 0===t?!n.modelValue:t)}}}}(o)();Object.defineProperty(n.config.globalProperties,o.key,{get:function(){return a}}),n.provide(o.key,a)}k.render=function(t,n,o,a,r,l){return e.openBlock(),e.createBlock("div",O,[(e.openBlock(!0),e.createBlock(e.Fragment,null,e.renderList(a.dynamicModals,((t,n)=>(e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.component),e.mergeProps({key:t.id,modelValue:t.value,"onUpdate:modelValue":e=>t.value=e},t.bind,e.toHandlers(t.on),{onClosed:e=>a.slice(n)}),e.createSlots({_:2},[e.renderList(t.slots,((t,n)=>({name:n,fn:e.withCtx((()=>[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.component),t.bind,null,16))]))})))]),1040,["modelValue","onUpdate:modelValue","onClosed"])))),128))])},k.__file="lib/ModalsContainer.vue";var C={componentName:"VueFinalModal",key:"$vfm",dynamicContainerName:"ModalsContainer"};return function(){return{install:function(e,t){var n=Object.assign({},C,t),o=e.config.globalProperties[n.key],a=e._context.components[n.componentName],r=e._context.components[n.dynamicContainerName];a||r?(o&&console.error("[vue-final-modal] Duplicate registration API key and componentName of VueFinalModal."),a&&console.error("[vue-final-modal] Duplicate registration componentName of VueFinalModal."),r&&console.error("[vue-final-modal] Duplicate registration dynamicContainerName of ModalsContainer.")):(o||S(e,n),function(e,t){e.component(t.componentName,w(b,t))}(e,n),function(e,t){e.component(t.dynamicContainerName,w(k,t))}(e,n))}}}}));
//# sourceMappingURL=VueFinalModal.umd.js.map
