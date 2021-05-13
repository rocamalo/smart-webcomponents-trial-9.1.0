
/* Smart UI v9.1.0 (2020-Dec) 
Copyright (c) 2011-2021 jQWidgets. 
License: https://htmlelements.com/license/ */ //

!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=30)}({30:function(e,t){Smart("smart-date-input",class extends Smart.Input{static get properties(){return{dropDownButtonPosition:{allowedValues:["none","left","right"],value:"right",defaultReflectToAttribute:!0,type:"string"},dropDownHeight:{type:"any",value:"auto"},min:{type:"any",value:new Date(1900,0,1)},max:{type:"any",value:new Date(2100,0,1)},messages:{value:{en:{hours:"Hours",minutes:"Minutes",am:"am",pm:"pm"}},type:"object",extend:!0},placeholder:{value:"MM/dd/yyyy",type:"string"},dateTimeFormat:{type:"any",value:{year:"numeric",month:"numeric",day:"numeric"}},value:{type:"any",value:""}}}template(){return'<div id="inputContainer" role="presentation"><input class="smart-input" id=\'input\' readonly=\'[[readonly]]\' placeholder=\'[[placeholder]]\' type=\'[[type]]\' name=\'[[name]]\' disabled=\'[[disabled]]\' aria-label="[[placeholder]]" /><span class="smart-hidden smart-hint" id="span">[[hint]]</span><div id="dropDownButton" tabindex=-1 class="smart-drop-down-button" role="button" aria-label="Toggle popup"><div id="arrow" class="arrow" aria-hidden="true"></div></div></div>'}static get listeners(){return{"input.change":"_changeHandler","input.focus":"_focusHandler","input.blur":"_blurHandler","input.keydown":"_keyDownHandler","input.keyup":"_keyUpHandler","input.keypress":"_keyPressHandler","dropDownButton.down":"_dropDownButtonDownHandler","inputContainer.down":"_downHandler","document.up":"_documentUpHandler"}}render(){super.render(),this.value&&this.value instanceof Date&&this._setInputValue(this.value)}focus(){this.$.input.focus()}select(){const e=this;e.readonly?e.$.input.focus():e.$.input.select()}_documentUpHandler(e){const t=this,n=t.shadowRoot||t.isInShadowDOM?e.originalEvent.composedPath()[0]:e.originalEvent.target;t.contains(n)?requestAnimationFrame(()=>{}):t.$.scrollView.contains(n.shadowParent||n)?t._isPointerDown&&(t._isPointerDown=!1,t.opened&&(t._preventLookup=!0),t.$.input.focus()):(t.opened&&(t._preventLookup=!0),t._isPointerDown=!1,t.close())}_changeHandler(e){e.stopPropagation(),this._performSelect()}_focusHandler(){const e=this;if(e.setAttribute("focus",""),e.readonly||0!==e.minLength||0!==e.$.input.value.length||e._preventLookup){if(e.$.fireEvent("focus"),e.value){const t=e._getInputValue();e._setInputValue(t)}delete e._preventLookup}}_blurHandler(){const e=this;if(e.opened||e.removeAttribute("focus"),e._popup&&e._popup.isCompleted&&e.opened)e._setInputValue(e._popup.value);else{const t=e._getInputValue();e._setInputValue(t)}e.$.fireEvent("blur"),delete e._preventLookup}_getInputValue(){const e=this,t=e.$.input.value;let n=null;const o=e=>{let t=new Date(Date.parse(e));if("Invalid Date"===t.toString()&&(t=null),!t){let t=(new Smart.Utilities.DateTime).tryparseDate(e,null);if(t)return t}return t};return e.dateTimeFormat.day&&e.dateTimeFormat.month&&e.dateTimeFormat.year?n=o(t):e.dateTimeFormat.day&&e.dateTimeFormat.month&&!e.dateTimeFormat.year?(n=o(t),e._popup.value||(e._popup.value=new Date),e._popup.isCompleted?n.setFullYear(e._popup.value.getFullYear(),n.getMonth(),n.getDate()):n.setFullYear((new Date).getFullYear(),n.getMonth(),n.getDate())):!e.dateTimeFormat.day&&e.dateTimeFormat.month&&e.dateTimeFormat.year&&(e._popup.value||(e._popup.value=new Date),n=o(t),e._popup.isCompleted?n.setFullYear(n.getFullYear(),n.getMonth(),e._popup.value.getDate()):n.setFullYear(n.getFullYear(),n.getMonth(),(new Date).getDate())),n<e.min&&(n=e.min),n>e.max&&(n=e.max),n}getValue(){return this._getInputValue()}setValue(e){this._setInputValue(e)}_setInputValue(e){const t=this;if(!e)return t.$.input.value="",t.removeAttribute("data-value"),void(t.value=null);e<t.min&&(e=t.min),e>t.max&&(e=t.max);let n=new Intl.DateTimeFormat(t.locale,t.dateTimeFormat).format(e);t.hasAttribute("focus")&&(n=new Intl.DateTimeFormat(t.locale,{year:"numeric",day:"numeric",month:"numeric"}).format(e)),t.$.input.value=t.value=n,t.setAttribute("data-value",e)}_performSelect(){}getFormattedValue(e,t){const n=this;return null===t?parseFloat(e):(e||(e=new Date),t||(t=n.dateTimeFormat),new Intl.DateTimeFormat(n.locale,t).format(e))}_open(){const e=this,t=e.getBoundingClientRect(),n=window.scrollX,o=window.scrollY;let r=0,a=0;if(!this.opened){if(e.timer&&clearTimeout(e.timer),document.body.appendChild(e.$.scrollView),e.setAttribute("aria-owns",e.$.scrollView.id),e.readonly||e.$.input.setAttribute("aria-controls",e.$.scrollView.id),e.$.scrollView.enableShadowDOM&&!e._importedStyle&&(e.$.scrollView.importStyle(e._getStyleUrl("smart.textbox.css")),e._importedStyle=!0),"static"!==getComputedStyle(document.body).position){const e=document.body.getBoundingClientRect();r=e.left,a=e.top}e.$.scrollView.style.setProperty("--smart-input-drop-down-menu-width",""),e.$.scrollView.style.left=-3+t.left+n-r+"px",e.$.scrollView.style.top=t.bottom+o-a+1+"px",e.$.scrollView.classList.remove("open"),e.$.scrollView.onpointerdown=function(){e._isPointerDown=!0},e._refreshPopup(),requestAnimationFrame((function(){e.$.scrollView.setAttribute("open",""),e.setAttribute("open",""),e.$.dropDownButton.setAttribute("open",""),e.$.input.setAttribute("open","")})),this.opened=!0}}_refreshPopup(){const e=this,t=e._getInputValue();e._popup.isAttached&&e._popup.select(t)}close(){const e=this;return!!e.opened&&(e.timer&&clearTimeout(e.timer),e.timer=setTimeout((function(){e.$.scrollView.parentNode&&!e.opened&&(document.body.removeChild(e.$.scrollView),e.removeAttribute("aria-owns"),e.readonly||e.$.input.removeAttribute("aria-controls"))}),1e3),e.$.scrollView.removeAttribute("open"),e.$.dropDownButton.removeAttribute("open"),e.$.input.removeAttribute("open"),e.removeAttribute("open"),e.opened=!1,!0)}_lookup(){}_downHandler(e){const t=this;t.readonly&&t._dropDownButtonDownHandler(e)}_dropDownButtonDownHandler(e){return this._toggle(),e.preventDefault(),e.stopPropagation(),e.originalEvent.preventDefault(),e.originalEvent.stopPropagation(),!1}_toggle(){const e=this;e.opened?e.close():e.open()}open(){const e=this;e._process(),e.$.input.focus(),setTimeout((function(){e.$.input.focus()}),25)}_process(){this._performSelect(void 0,!0),this._open()}_matcher(){}_sorter(){}_highlighter(){}_render(){}ensureVisible(){}_next(){}_prev(){}_move(e){e.stopPropagation()}_keyPressHandler(e){this._suppressKeyPressRepeat||e.shiftKey||e.altKey||e.ctrlKey}_insertKey(e,t=1){const n=this.$.input.selectionStart,o=this.$.input.value,r=o.substring(0,n),a=o.substring(n+t);this.$.input.value=r+e.key+a,this.$.input.selectionStart=this.$.input.selectionEnd=n+1}_keyDownHandler(e){const t=this;t._suppressKeyPressRepeat=![40,38,9,13,27,16,17,18].includes(e.keyCode);let n=!1;switch(e.keyCode>=48&&e.keyCode<=57&&(n=!0),e.key){case"/":case"-":case":":case"ArrowLeft":case"ArrowUp":case"ArrowDown":case"ArrowRight":case"Home":case"End":case"Delete":case"Backspace":case"Tab":n=!0}e.ctrlKey&&(n=!0),n||e.preventDefault(),"Tab"===e.key&&t.close(),e.shiftKey||e.altKey||e.ctrlKey}_getMask(){const e=this,t=e.getFormattedValue(new Date(2020,10,10),{year:"numeric",month:"numeric",day:"numeric"});let n="/";-1===t.indexOf(n)&&(n="-");const o=t.split(n);e._mask=[];let r=0;for(let t=0;t<o.length-1;t++)r+=o[t].length,e._mask[r]=n,r++}_appendPreOrPostMatch(e,t){for(var n=0,o=!1,r=0,a=e.length;r<a;r++){var i=e.charAt(r);switch(i){case"'":o?t.push("'"):n++,o=!1;break;case"\\":o&&t.push("\\"),o=!o;break;default:t.push(i),o=!1}}return n}_keyUpHandler(e){const t=this;let n=t.$.input.value.trim();const o=new Date(n);if(e.keyCode>=48&&e.keyCode<=57){if(void 0!==t._mask[n.length]){let e=[...n],o=t._mask.flat().length,r=0;for(let o=0;o<e.length;o++)e[o]===t._mask[n.length]&&r++;r<o&&(n+=t._mask[n.length],t.$.input.value=n)}}else if(" "===e.key||"Enter"===e.key){const e=t._getInputValue();t._setInputValue(e)}else if("/"===e.key||":"===e.key||"-"===e.key){const e=t.$.input.selectionStart,n=t._getInputValue();t._setInputValue(n),t.$.input.selectionStart=e,"/"===t.$.input.value[e]&&t.$.input.selectionStart++}if("Invalid Date"!==o.toString()?t.value=o:t.value=null,t._refreshPopup(),!e.shiftKey)switch(e.keyCode){case 40:case 38:case 16:case 17:case 18:40===e.keyCode&&e.altKey&&t.open(),38===e.keyCode&&e.altKey&&t.close();break;case 27:if(!t.opened)return;t.close(),e.stopPropagation(),e.preventDefault()}}propertyChangedHandler(e,t,n){const o=this;switch(e){case"value":"string"==typeof n?o.$.input.value=n:o._setInputValue(n);break;case"month":case"min":case"max":o.$.calendar[e]=n;break;case"theme":case"rightToLeft":case"animation":case"inverted":o.$.calendar&&(o.$.calendar[e]=n),o.$.scrollView&&(n?o.$.scrollView.setAttribute(Smart.Utilities.Core.toDash(e),"boolean"==typeof n?"":n):o.$.scrollView.removeAttribute(Smart.Utilities.Core.toDash(e)));break;case"locale":o._performSelect(),o.$.calendar.locale=n;break;default:super.propertyChangedHandler(e,t,n)}}_createElement(){const e=this,t=document.createElement("div");if(t.classList.add("smart-input-drop-down-menu","smart-date-input-drop-down-menu"),t.setAttribute("animation",e.animation),t.setAttribute("role","presentation"),e.rightToLeft?t.setAttribute("right-to-left",""):t.removeAttribute("right-to-left"),e.inverted?t.setAttribute("inverted",""):t.removeAttribute("inverted"),t.onclick=function(t){t.stopPropagation(),t.preventDefault();const n=t.target;e.$.input.focus(),n.closest("smart-done-button")&&e.close()},!t.id){const e=t.tagName.toLowerCase();t.id=e.slice(0,1).toLowerCase()+e.slice(1)+Math.floor(65536*(1+Math.random())).toString(16).substring(1)}e.$.scrollView=t,e.classList.add("smart-input");const n=document.createElement("smart-calendar");if(e._popup=n,t.appendChild(n),e.$.input.value=e.value,e.value&&(""+e.value).length>0){const t=e._getInputValue();e._setInputValue(t)}e._getMask()}_refreshMenu(){}_setAriaRelations(){const e=this,t=e.getAttribute("aria-label");e.readonly?(e.setAttribute("role","button"),!t&&e.placeholder&&e.setAttribute("aria-label",e.placeholder),e.removeAttribute("aria-readonly"),e.$.input.setAttribute("aria-hidden",!0),e.$.input.removeAttribute("aria-controls"),e.$.dropDownButton.setAttribute("aria-hidden",!0)):(e.setAttribute("role","presentation"),t&&t===e.placeholder&&e.removeAttribute("aria-label"),e.$.input.removeAttribute("aria-hidden"),e.$.dropDownButton.removeAttribute("aria-hidden")),e.setAttribute("aria-haspopup","dialog"),e.$.scrollView.setAttribute("role","dialog")}_setActiveDescendant(){}_setInputPurpose(){}})}});