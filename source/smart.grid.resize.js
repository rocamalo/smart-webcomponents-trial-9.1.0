
/* Smart UI v9.1.0 (2020-Dec) 
Copyright (c) 2011-2021 jQWidgets. 
License: https://htmlelements.com/license/ */ //

!function(e){var t={};function o(i){if(t[i])return t[i].exports;var l=t[i]={i:i,l:!1,exports:{}};return e[i].call(l.exports,l,l.exports,o),l.l=!0,l.exports}o.m=e,o.c=t,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)o.d(i,l,function(t){return e[t]}.bind(null,l));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=62)}({62:function(e,t){Smart.Utilities.Assign("Grid.Resize",class{autoSizeRows(e){const t=this,o=e||t._recyclingRows;t.rows.canNotify=!1;for(let e=0;e<o.length;e++){const i=o[e];i.element=t._rowElements[1],i.grid=t;const l=i._autoSize(i);i.cellHeight!==l&&(i.cellHeight=l),i.height=l}t.rows.canNotify=!0,t.refresh()}autoSizeColumns(e,t){const o=this,i=t||o.columns;let l=[];if(!e){const e=o._recyclingRows;for(let t=0;t<e.length;t++){const o=e[t];for(let e=0;e<i.length;e++){const t=i[e],s=o.getCell(t.dataField);l[t.dataField]||(l[t.dataField]=t.label),s.value&&s.value.toString().length>l[t.dataField].length&&(l[t.dataField]=s.value)}}}const s=[];for(let e=0;e<i.length;e++){const t=i[e],o=l[t.dataField]?l[t.dataField]:t.label;s.push(o)}const n=i[0]._measureSize(s);o.columns.canNotify=!1;for(let e=0;e<i.length;e++){i[e].width=n[e]}o.columns.canNotify=!0,o.refresh()}_doubleClickHandler(e){const t=this;if("none"!==t.behavior.rowResizeMode||"none"!==t.behavior.columnResizeMode){if(!!t._downTime&&new Date-t._downTime<300){const o=(t.enableShadowDOM?t.shadowRoot:t.getRootNode()).elementsFromPoint(e.clientX,e.clientY);let i=null,l=null,s=null,n=null;for(let e=0;e<o.length;e++){const t=o[e];if(t.getAttribute("data-field")){i=t.getAttribute("data-field"),l=t;break}if(t.getAttribute("data-id")){s=t.getAttribute("data-id"),n=t;break}}const r=t.columnByDataField[i],c=t.rowById[s];if(t.appearance.allowColumnAutoSizeOnDoubleClick&&r&&r.allowResize&&"none"!==t.behavior.columnResizeMode){const t=l.getBoundingClientRect().right,o=10;t-o<=e.clientX&&e.clientX<=t+o&&r.autoSize()}if(t.appearance.allowRowAutoSizeOnDoubleClick&&c&&c.allowResize&&"none"!==t.behavior.rowResizeMode){const t=n.getBoundingClientRect().bottom,o=10;t-o<=e.clientY&&e.clientY<=t+o&&(c.computedHeight=null,c.autoSize())}}t._downTime=new Date}}_endResize(){const e=this;e._overlay&&(e._overlay.parentNode.removeChild(e._overlay),e._overlay=null);const t=e.getBoundingRect(e);if(e.classList.remove("smart-grid-resize-mode"),e.$.root.classList.remove("smart-grid-resize-mode"),e.classList.remove("smart-grid-row-resize-mode"),e.classList.remove("smart-grid-column-resize-mode"),e._rowToResize&&e._rowResizeStartLine&&e._rowResizeLine){const t=e.rowById[e._rowToResizeId],o=t.cellHeight+parseFloat(e._rowResizeLine.style.top)-parseFloat(e._rowResizeStartLine.style.top),i=t.cellHeight;if(e.rows.canNotify=!1,t.height=null,"split"===e.behavior.rowResizeMode){const i=e._nextRow(t),l=parseInt(t.height-o+t.cellHeight);t.computedHeight=o,i.computedHeight=parseInt(i.height)+l,i.height=null}else t.computedHeight=o;return e.rows.canNotify=!0,e._rowResizeStartLine.parentNode.removeChild(e._rowResizeStartLine),e._rowResizeLine.parentNode.removeChild(e._rowResizeLine),e.appearance.showResizeTooltips&&e._rowResizeTooltip.parentNode.removeChild(e._rowResizeTooltip),e._rowToResize.header&&(e._rowToResize.header.style.cursor=""),e._rowResizeLine=null,e._rowToResize=null,e._rowToResizeId=null,e.refresh(),void e.$.fireEvent("rowResize",{row:t,oldHeight:i,height:o})}if(!e._columnToResizeElement||!e._columnResizeLine)return;const o=e.columnByDataField[e._columnToResizeDataField],i=e._columnToResizeRect;let l=t.left+parseInt(e._columnResizeLine.style.left)-i.left+e.scrollLeft;const s=o.width;if(e.rightToLeft&&(l=t.left-parseFloat(e._columnResizeLine.style.left)+i.right-e.scrollLeft-e._scrollView.vScrollBar.offsetWidth),l<o.minWidth&&(l=o.minWidth),e.columns.canNotify=!1,"split"===e.behavior.columnResizeMode){const t=e._nextColumn(o);if(t){const e=parseInt(o.computedWidth-l);o.width=l,t.width=parseInt(t.computedWidth)+e}}else o.width=l;e.columns.canNotify=!0,e._columnResizeLine.parentNode.removeChild(e._columnResizeLine),e._columnResizeLine=null,e._columnResizeStartLine.parentNode.removeChild(e._columnResizeStartLine),e._columnResizeTooltip.parentNode&&e._columnResizeTooltip.parentNode.removeChild(e._columnResizeTooltip),e._columnResizeStartLine=null,e._columnToResizeElement.style.cursor="",e._columnToResizeElement.sortButton.style.cursor="",e._columnToResizeElement.filterButton.style.cursor="",e._columnToResizeElement=null,e._columnToResizeRect=null,e._columnToResizeDataField=null,e._columnResizeTooltip=null,e.refresh(),e.$.fireEvent("columnResize",{column:o,oldWidth:s,width:l})}_columnDownResizeHandler(){const e=this,t=e._columnToResizeRect,o=e.getBoundingRect(e.$.columnHeader);if(e._dragDetails)return;const i=function(){const i=document.createElement("div");return i.classList.add("smart-grid-resize-line"),e.rightToLeft?i.style.left=-o.left+t.left+"px":i.style.left=-o.left+t.right+"px",i.style.top=-o.top+t.top+"px",i.style.height="calc(100% - "+i.style.top+")",i.style.cursor="col-resize",i},l=document.createElement("div");l.classList.add("smart-grid-resize-tooltip"),e._columnResizeTooltip=l,e._columnResizeTooltip.style.left=-o.left+t.right+"px",e.rightToLeft&&(e._columnResizeTooltip.style.left=-o.left+t.left+"px"),e._columnResizeTooltip.innerHTML=e.localize("columnResizeTooltip",{value:t.width}),e._columnResizeLine=i(),e._columnResizeStartLine=i(),"growAndShrink"===e.behavior.columnResizeMode&&(e.classList.add("smart-grid-resize-mode"),e.classList.add("smart-grid-column-resize-mode"),e.$.root.classList.add("smart-grid-resize-mode")),e.appearance.showResizeTooltips&&e.$.root.appendChild(e._columnResizeTooltip),e.$.root.appendChild(e._columnResizeLine),e.$.root.appendChild(e._columnResizeStartLine),e._overlay=document.createElement("div"),e._overlay.classList.add("smart-grid-overlay"),e._overlay.style.cursor="col-resize",e.$.root.appendChild(e._overlay)}_columnMoveResizeHandler(e){const t=this;if(t._dragDetails)return;const o=function(e){const o=t._columnToResizeRect;let i=e.left+parseFloat(t._columnResizeLine.style.left)-o.left+t.scrollLeft;t.rightToLeft&&(i=e.left-parseFloat(t._columnResizeLine.style.left)+o.right-t.scrollLeft-t._scrollView.vScrollBar.offsetWidth);const l=t.columnByDataField[t._columnToResizeDataField];i<l.minWidth&&(i=l.minWidth),t.appearance.showResizeTooltips&&(t._columnResizeTooltip.innerHTML=t.localize("columnResizeTooltip",{value:parseInt(i)}))};if(t._columnResizeLine){const i=t.columnByDataField[t._columnToResizeDataField],l=t._columnToResizeRect,s=i.minWidth,n=i.maxWidth,r=t._nextColumn(i),c=t.getBoundingRect(t);if(t.rightToLeft){if(e.pageX>c.right)return;if("split"===t.behavior.columnResizeMode&&r&&e.pageX<=t.offsetWidth-t.scrollLeft-r.left-r.computedWidth+r.minWidth)return t._columnResizeLine.style.left=t.offsetWidth-t.scrollLeft-r.left-r.computedWidth+r.minWidth+"px",void o(c);if(l.right-s-t.scrollLeft<=e.pageX)return t._columnResizeLine.style.left=-c.left+l.right-s-t.scrollLeft+"px",void o(c);if(l.left+n-t.scrollLeft>=e.pageX)return t._columnResizeLine.style.left=-c.left+l.right-n-t.scrollLeft+"px",void o(c);t._columnResizeLine.style.left=-c.left+e.pageX+"px",o(c)}else{if(e.pageX<c.left)return;if("split"===t.behavior.columnResizeMode&&r&&e.pageX>=c.left+r.left+r.computedWidth-r.minWidth-t.scrollLeft)return t._columnResizeLine.style.left=-c.left+c.left+r.computedWidth+r.left-r.minWidth-t.scrollLeft+"px",void o(c);if(l.left+s-t.scrollLeft>=e.pageX)return t._columnResizeLine.style.left=-c.left+l.left+s-t.scrollLeft+"px",void o(c);if(l.left+n-t.scrollLeft<=e.pageX)return t._columnResizeLine.style.left=-c.left+l.left+n-t.scrollLeft+"px",void o(c);t._columnResizeLine.style.left=-c.left+e.pageX+"px",o(c)}}else{const t=this;if(e.composedPath&&-1===e.composedPath().indexOf(this))return;const o=(t.enableShadowDOM?t.shadowRoot:t.getRootNode()).elementsFromPoint(e.clientX,e.clientY);let i=null,l=null;if(t._columnResizeLine)return;for(let e=0;e<o.length;e++){const t=o[e];if(t.hasAttribute("data-field")&&t.hasAttribute("header")){i=t.getAttribute("data-field"),l=t;break}}if(t._columnToResizeElement&&(t._columnToResizeElement.style.cursor="",t._columnToResizeElement.sortButton.style.cursor="",t._columnToResizeElement.filterButton.style.cursor="",t._columnToResizeElement=null),i){const o=t.rightToLeft?l.getBoundingClientRect().left:l.getBoundingClientRect().right;if(l.style.cursor="",l.sortButton.style.cursor="",l.filterButton.style.cursor="",o-5<=e.clientX&&e.clientX<=o+5){const e=t.columnByDataField[i];if(!e||e&&!e.allowResize)return;const o=t._isLastVisibleColumn(e);if("split"===t.behavior.columnResizeMode&&o)return;l.style.cursor="col-resize",l.sortButton.style.cursor="col-resize",l.filterButton.style.cursor="col-resize",t._columnToResizeRect=t.getBoundingRect(l),t._columnToResizeElement=l,t._columnToResizeDataField=i}}}}_rowMoveResizeHandler(e){const t=this,o=(t.enableShadowDOM?t.shadowRoot:t.getRootNode()).elementsFromPoint(e.clientX,e.clientY);let i=null,l=null;if(t._rowResizeLine){const o=t._offsetTop(t.$.scrollView),i={top:o,bottom:t.$.scrollView.offsetHeight+o};if(e.pageY<=i.top)return;if(e.pageY>=i.bottom)return;const l=function(){const e=s.cellHeight+parseFloat(t._rowResizeLine.style.top)-parseFloat(t._rowResizeStartLine.style.top);t.appearance.showResizeTooltips&&(t._rowResizeTooltip.innerHTML=t.localize("rowResizeTooltip",{value:parseInt(e)}))},s=t.rowById[t._rowToResizeId],n=t._nextRow(s),r=t._rowToResizeBounds,c=s.minHeight,a=s.maxHeight;return"split"===t.behavior.rowResizeMode&&n&&r.bottom+n.height-n.minHeight<=e.pageY?(t._rowResizeLine.style.top=r.bottom+n.height-n.minHeight-o+"px",void l()):r.top+c+5>=e.pageY?(t._rowResizeLine.style.top=r.top+c+5-o+"px",void l()):r.top+a>=e.pageY-o?(t._rowResizeLine.style.top=r.top+a+5-o+"px",void l()):(t._rowResizeLine.style.top=-o+e.pageY-1+"px",void l())}for(let e=0;e<o.length;e++){const t=o[e];if(t.hasAttribute("data-id")&&t.hasAttribute("header")){l=t,i=t.getAttribute("data-id");break}}if(t._rowToResize&&(t._rowToResize.style.cursor="",t._rowToResize=null),null!==i){const o=t._offsetTop(l)+l.offsetHeight;if(l.style.cursor="",o-5<=e.clientY&&e.clientY<=o+5){const e=t.rowById[i];if(!e||e&&!e.allowResize)return;e.header&&(e.header.style.cursor="row-resize");const o=t._offsetTop(l);t._rowToResizeBounds={top:o,bottom:l.offsetHeight+o,height:l.offsetHeight},t._rowToResize=l,t._rowToResizeId=i}}}_rowDownResizeHandler(){const e=this,t=e._rowToResizeBounds,o=function(){const o=document.createElement("div");return o.classList.add("smart-grid-resize-line","row"),o.style.width=e.$.scrollView.offsetWidth-e._rowToResize.offsetLeft+"px",o.style.left="0px",o.style.top=-e._offsetTop(e.$.scrollView)+t.bottom+"px",o.style.cursor="row-resize",o},i=document.createElement("div");i.classList.add("smart-grid-resize-tooltip"),e._rowResizeTooltip=i,e._rowResizeTooltip.style.top=-e._offsetTop(e.$.scrollView)+t.bottom+"px",e._rowResizeTooltip.innerHTML=e.localize("rowResizeTooltip",{value:t.height}),e._rowResizeTooltip.style.right="20px",e._rowResizeTooltip.style.bottom="initial","growAndShrink"===e.behavior.rowResizeMode&&(e.classList.add("smart-grid-resize-mode"),e.classList.add("smart-grid-row-resize-mode"),e.$.root.classList.add("smart-grid-resize-mode")),e._rowResizeLine=o(),e._rowResizeStartLine=o(),e._overlay=document.createElement("div"),e._overlay.classList.add("smart-grid-overlay"),e._overlay.style.cursor="row-resize",e.$.root.appendChild(e._overlay),e.$.scrollView.appendChild(e._rowResizeLine),e.$.scrollView.appendChild(e._rowResizeStartLine),e.appearance.showResizeTooltips&&e.$.scrollView.appendChild(e._rowResizeTooltip)}_rowResizeHandler(e){const t=this;let o=e.clientX,i=e.clientY;void 0!==o&&void 0!==i||(o=e.touches[0].clientX,i=e.touches[0].clientY);const l=(t.enableShadowDOM?t.shadowRoot:t.getRootNode()).elementsFromPoint(o,i);let s=null;for(let e=0;e<l.length;e++){const t=l[e];t.getAttribute("data-id")&&(s=t.getAttribute("data-id"))}null===s||!t._rowToResize||t._rowResizeLine||t._rowDownResizeHandler(e)}})}});