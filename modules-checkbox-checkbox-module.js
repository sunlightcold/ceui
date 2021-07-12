(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-checkbox-checkbox-module"],{

/***/ "7es8":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/checkbox/components/color/color.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ceui-checkbox [checked]=\"true\" color=\"primary\">primary</ceui-checkbox>\r\n<ceui-checkbox [checked]=\"true\" color=\"error\">error</ceui-checkbox>\r\n<ceui-checkbox [checked]=\"true\" color=\"success\">success</ceui-checkbox>\r\n<ceui-checkbox [checked]=\"true\" color=\"warning\">warning</ceui-checkbox>\r\n<ceui-checkbox [checked]=\"true\" [disabled]=\"true\">disabled</ceui-checkbox>\r\n");

/***/ }),

/***/ "9zIm":
/*!**********************************************************************!*\
  !*** ./src/app/modules/checkbox/components/basic/basic.component.ts ***!
  \**********************************************************************/
/*! exports provided: BasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicComponent", function() { return BasicComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _projects_core_components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../projects/core/components/checkbox/checkbox.component */ "ysE6");
/* harmony import */ var _projects_core_components_button_button_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../projects/core/components/button/button.directive */ "EiXb");





class BasicComponent {
    constructor() {
        this.selected = true;
        this.disabled = false;
        this.indeterminate = false;
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](false);
    }
    ngOnInit() {
    }
    onChange(event) {
        console.log('change', event);
    }
    onNgModelChange(value) {
        console.log('ngModelChange', value);
    }
    onGet() {
        console.log(this.selected);
        console.log(this.control.value);
    }
    onSet() {
        this.selected = !this.selected;
        this.control.setValue(!this.control.value);
    }
    onDisabled() {
        this.disabled = true;
        this.control.disable();
    }
    onEnabled() {
        this.disabled = false;
        this.control.enable();
    }
    onIndeterminate() {
        this.indeterminate = true;
    }
}
BasicComponent.ɵfac = function BasicComponent_Factory(t) { return new (t || BasicComponent)(); };
BasicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BasicComponent, selectors: [["app-basic"]], decls: 21, vars: 7, consts: [[3, "checked", "change"], [3, "indeterminate", "change"], [3, "disabled", "checked", "change"], [3, "ngModel", "checked", "ngModelChange"], [3, "formControl", "ngModelChange"], ["ceui-full-button", "", 3, "click"]], template: function BasicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ceui-checkbox", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function BasicComponent_Template_ceui_checkbox_change_0_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u590D\u9009\u6846");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ceui-checkbox", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function BasicComponent_Template_ceui_checkbox_change_2_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u672A\u51B3\u72B6\u6001");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ceui-checkbox", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function BasicComponent_Template_ceui_checkbox_change_4_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u7981\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ceui-checkbox", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BasicComponent_Template_ceui_checkbox_ngModelChange_6_listener($event) { return ctx.selected = $event; })("ngModelChange", function BasicComponent_Template_ceui_checkbox_ngModelChange_6_listener($event) { return ctx.onNgModelChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "ngModel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ceui-checkbox", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BasicComponent_Template_ceui_checkbox_ngModelChange_8_listener($event) { return ctx.onNgModelChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "formControl");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BasicComponent_Template_button_click_11_listener() { return ctx.onGet(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "get");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BasicComponent_Template_button_click_13_listener() { return ctx.onSet(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "set");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BasicComponent_Template_button_click_15_listener() { return ctx.onDisabled(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BasicComponent_Template_button_click_17_listener() { return ctx.onEnabled(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "enabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BasicComponent_Template_button_click_19_listener() { return ctx.onIndeterminate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "indeterminate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("indeterminate", ctx.indeterminate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.disabled)("checked", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selected)("checked", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.control);
    } }, directives: [_projects_core_components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_2__["CeuiCheckboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _projects_core_components_button_button_directive__WEBPACK_IMPORTED_MODULE_3__["CeuiButton"]], styles: ["ceui-checkbox[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGJhc2ljLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGIiwiZmlsZSI6ImJhc2ljLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiY2V1aS1jaGVja2JveCwgYnV0dG9uIHtcclxuICBtYXJnaW46IDEwcHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "JQK5":
/*!*************************************************************!*\
  !*** ./src/app/modules/checkbox/checkbox-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: CheckboxRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxRoutingModule", function() { return CheckboxRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_demo_demo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/demo/demo.component */ "iO9k");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: 'demo',
        component: _pages_demo_demo_component__WEBPACK_IMPORTED_MODULE_1__["DemoComponent"],
    },
    {
        path: '',
        redirectTo: 'demo',
        pathMatch: 'full',
    }
];
class CheckboxRoutingModule {
}
CheckboxRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CheckboxRoutingModule });
CheckboxRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function CheckboxRoutingModule_Factory(t) { return new (t || CheckboxRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CheckboxRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "acEo":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/checkbox/components/basic/basic.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ceui-checkbox [checked]=\"true\" (change)=\"onChange($event)\">复选框</ceui-checkbox>\r\n<ceui-checkbox [indeterminate]=\"indeterminate\" (change)=\"onChange($event)\">未决状态</ceui-checkbox>\r\n<ceui-checkbox [disabled]=\"disabled\" [checked]=\"true\" (change)=\"onChange($event)\">禁用</ceui-checkbox>\r\n<ceui-checkbox [(ngModel)]=\"selected\" [checked]=\"true\" (ngModelChange)=\"onNgModelChange($event)\">ngModel</ceui-checkbox>\r\n<ceui-checkbox [formControl]=\"control\" (ngModelChange)=\"onNgModelChange($event)\">formControl</ceui-checkbox>\r\n<div>\r\n  <button ceui-full-button (click)=\"onGet()\">get</button>\r\n  <button ceui-full-button (click)=\"onSet()\">set</button>\r\n  <button ceui-full-button (click)=\"onDisabled()\">disabled</button>\r\n  <button ceui-full-button (click)=\"onEnabled()\">enabled</button>\r\n  <button ceui-full-button (click)=\"onIndeterminate()\">indeterminate</button>\r\n</div>");

/***/ }),

/***/ "iNel":
/*!**********************************************************************!*\
  !*** ./src/app/modules/checkbox/components/color/color.component.ts ***!
  \**********************************************************************/
/*! exports provided: ColorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorComponent", function() { return ColorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _projects_core_components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../projects/core/components/checkbox/checkbox.component */ "ysE6");


class ColorComponent {
    constructor() { }
    ngOnInit() {
    }
}
ColorComponent.ɵfac = function ColorComponent_Factory(t) { return new (t || ColorComponent)(); };
ColorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ColorComponent, selectors: [["app-color"]], decls: 10, vars: 6, consts: [["color", "primary", 3, "checked"], ["color", "error", 3, "checked"], ["color", "success", 3, "checked"], ["color", "warning", 3, "checked"], [3, "checked", "disabled"]], template: function ColorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ceui-checkbox", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ceui-checkbox", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ceui-checkbox", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ceui-checkbox", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ceui-checkbox", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", true)("disabled", true);
    } }, directives: [_projects_core_components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_1__["CeuiCheckboxComponent"]], styles: ["ceui-checkbox[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNvbG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGIiwiZmlsZSI6ImNvbG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiY2V1aS1jaGVja2JveCB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ "iO9k":
/*!***************************************************************!*\
  !*** ./src/app/modules/checkbox/pages/demo/demo.component.ts ***!
  \***************************************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _code_components_code_container_code_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../code/components/code-container/code-container.component */ "Tdso");
/* harmony import */ var _components_basic_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/basic/basic.component */ "9zIm");
/* harmony import */ var _components_color_color_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/color/color.component */ "iNel");




class DemoComponent {
    constructor() {
        this.basicSources = [
            { title: 'html', language: 'xml', code: __webpack_require__(/*! !raw-loader!../../components/basic/basic.component.html */ "acEo") },
            { title: 'typescript', language: 'typescript', code: __webpack_require__(/*! !raw-loader!../../components/basic/basic.component.ts */ "rFxN") },
            { title: 'scss', language: 'scss', code: __webpack_require__(/*! !raw-loader!../../components/basic/basic.component.scss */ "m7zB") },
        ];
        this.colorSources = [
            { title: 'html', language: 'xml', code: __webpack_require__(/*! !raw-loader!../../components/color/color.component.html */ "7es8") },
            { title: 'typescript', language: 'typescript', code: __webpack_require__(/*! !raw-loader!../../components/color/color.component.ts */ "zfra") },
            { title: 'scss', language: 'scss', code: __webpack_require__(/*! !raw-loader!../../components/color/color.component.scss */ "rFIH") },
        ];
    }
    ngOnInit() {
    }
}
DemoComponent.ɵfac = function DemoComponent_Factory(t) { return new (t || DemoComponent)(); };
DemoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DemoComponent, selectors: [["app-demo"]], decls: 13, vars: 2, consts: [[1, "demo-container"], [1, "demo-example"], [1, "demo-title"], [1, "demo-text"], [3, "sources"]], template: function DemoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u57FA\u7840\u7528\u6CD5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-code-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u4E3B\u9898");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-code-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sources", ctx.basicSources);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sources", ctx.colorSources);
    } }, directives: [_code_components_code_container_code_container_component__WEBPACK_IMPORTED_MODULE_1__["CodeContainerComponent"], _components_basic_basic_component__WEBPACK_IMPORTED_MODULE_2__["BasicComponent"], _components_color_color_component__WEBPACK_IMPORTED_MODULE_3__["ColorComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZW1vLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "jeMh":
/*!*****************************************************!*\
  !*** ./src/app/modules/checkbox/checkbox.module.ts ***!
  \*****************************************************/
/*! exports provided: CheckboxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxModule", function() { return CheckboxModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _checkbox_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkbox-routing.module */ "JQK5");
/* harmony import */ var _components_basic_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/basic/basic.component */ "9zIm");
/* harmony import */ var _pages_demo_demo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/demo/demo.component */ "iO9k");
/* harmony import */ var _app_code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/code */ "N8HG");
/* harmony import */ var _ceui_core_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ceui/core/components */ "8t1I");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_color_color_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/color/color.component */ "iNel");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class CheckboxModule {
}
CheckboxModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: CheckboxModule });
CheckboxModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ factory: function CheckboxModule_Factory(t) { return new (t || CheckboxModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _checkbox_routing_module__WEBPACK_IMPORTED_MODULE_1__["CheckboxRoutingModule"],
            _app_code__WEBPACK_IMPORTED_MODULE_4__["CodeModule"],
            _ceui_core_components__WEBPACK_IMPORTED_MODULE_5__["CeuiCheckboxModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _ceui_core_components__WEBPACK_IMPORTED_MODULE_5__["CeuiButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](CheckboxModule, { declarations: [_components_basic_basic_component__WEBPACK_IMPORTED_MODULE_2__["BasicComponent"], _pages_demo_demo_component__WEBPACK_IMPORTED_MODULE_3__["DemoComponent"], _components_color_color_component__WEBPACK_IMPORTED_MODULE_7__["ColorComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _checkbox_routing_module__WEBPACK_IMPORTED_MODULE_1__["CheckboxRoutingModule"],
        _app_code__WEBPACK_IMPORTED_MODULE_4__["CodeModule"],
        _ceui_core_components__WEBPACK_IMPORTED_MODULE_5__["CeuiCheckboxModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _ceui_core_components__WEBPACK_IMPORTED_MODULE_5__["CeuiButtonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "m7zB":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/checkbox/components/basic/basic.component.scss ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ceui-checkbox, button {\r\n  margin: 10px;\r\n}");

/***/ }),

/***/ "rFIH":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/checkbox/components/color/color.component.scss ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ceui-checkbox {\r\n  margin: 10px;\r\n}");

/***/ }),

/***/ "rFxN":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/checkbox/components/basic/basic.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, OnInit } from '@angular/core';\r\nimport { CeuiCheckboxChange } from '@ceui/core/components';\r\nimport { FormControl } from '@angular/forms';\r\n\r\n@Component({\r\n  selector: 'app-basic',\r\n  templateUrl: './basic.component.html',\r\n  styleUrls: ['./basic.component.scss']\r\n})\r\nexport class BasicComponent implements OnInit {\r\n  selected = true;\r\n\r\n  disabled = false;\r\n\r\n  indeterminate = false;\r\n\r\n  control = new FormControl(false);\r\n\r\n  constructor() { }\r\n\r\n  ngOnInit(): void {\r\n  }\r\n\r\n  onChange(event: CeuiCheckboxChange) {\r\n    console.log('change', event);\r\n  }\r\n\r\n  onNgModelChange(value: boolean) {\r\n    console.log('ngModelChange', value);\r\n  }\r\n\r\n  onGet() {\r\n    console.log(this.selected);\r\n    console.log(this.control.value);\r\n  }\r\n\r\n  onSet() {\r\n    this.selected = !this.selected;\r\n    this.control.setValue(!this.control.value);\r\n  }\r\n\r\n  onDisabled() {\r\n    this.disabled = true;\r\n    this.control.disable();\r\n  }\r\n\r\n  onEnabled() {\r\n    this.disabled = false;\r\n    this.control.enable();\r\n  }\r\n\r\n  onIndeterminate() {\r\n    this.indeterminate = true;\r\n  }\r\n}\r\n");

/***/ }),

/***/ "zfra":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/checkbox/components/color/color.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, OnInit } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'app-color',\r\n  templateUrl: './color.component.html',\r\n  styleUrls: ['./color.component.scss']\r\n})\r\nexport class ColorComponent implements OnInit {\r\n\r\n  constructor() { }\r\n\r\n  ngOnInit(): void {\r\n  }\r\n\r\n}\r\n");

/***/ })

}]);
//# sourceMappingURL=modules-checkbox-checkbox-module.js.map