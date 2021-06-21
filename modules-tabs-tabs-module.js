(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-tabs-tabs-module"],{

/***/ "082W":
/*!*********************************************!*\
  !*** ./src/app/modules/tabs/tabs.module.ts ***!
  \*********************************************/
/*! exports provided: TabsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsModule", function() { return TabsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_basic_basic_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/basic/basic.component */ "dQvZ");
/* harmony import */ var _ceui_core_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ceui/core/components */ "8t1I");
/* harmony import */ var _pages_demo_demo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/demo/demo.component */ "CtBM");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs-routing.module */ "dQrB");
/* harmony import */ var _app_code__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/code */ "N8HG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








class TabsModule {
}
TabsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: TabsModule });
TabsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function TabsModule_Factory(t) { return new (t || TabsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _ceui_core_components__WEBPACK_IMPORTED_MODULE_2__["CeuiTabsModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_4__["TabsRoutingModule"],
            _app_code__WEBPACK_IMPORTED_MODULE_5__["CodeModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](TabsModule, { declarations: [_components_basic_basic_component__WEBPACK_IMPORTED_MODULE_1__["BasicComponent"],
        _pages_demo_demo_component__WEBPACK_IMPORTED_MODULE_3__["DemoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _ceui_core_components__WEBPACK_IMPORTED_MODULE_2__["CeuiTabsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _app_code__WEBPACK_IMPORTED_MODULE_5__["CodeModule"]] }); })();


/***/ }),

/***/ "CtBM":
/*!***********************************************************!*\
  !*** ./src/app/modules/tabs/pages/demo/demo.component.ts ***!
  \***********************************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _code_components_code_container_code_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../code/components/code-container/code-container.component */ "Tdso");
/* harmony import */ var _components_basic_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/basic/basic.component */ "dQvZ");



class DemoComponent {
    constructor() {
        this.basicSources = [
            { title: 'html', language: 'xml', code: __webpack_require__(/*! !raw-loader!../../components/basic/basic.component.html */ "dfD7") },
            { title: 'typescript', language: 'typescript', code: __webpack_require__(/*! !raw-loader!../../components/basic/basic.component.ts */ "atg7") },
        ];
    }
    ngOnInit() {
        console.log(this.basicSources);
    }
}
DemoComponent.ɵfac = function DemoComponent_Factory(t) { return new (t || DemoComponent)(); };
DemoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DemoComponent, selectors: [["app-demo"]], decls: 7, vars: 1, consts: [[1, "demo-container"], [1, "demo-example"], [1, "demo-title"], [1, "demo-text"], [3, "sources"]], template: function DemoComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sources", ctx.basicSources);
    } }, directives: [_code_components_code_container_code_container_component__WEBPACK_IMPORTED_MODULE_1__["CodeContainerComponent"], _components_basic_basic_component__WEBPACK_IMPORTED_MODULE_2__["BasicComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZW1vLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "atg7":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tabs/components/basic/basic.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'app-basic',\r\n  templateUrl: './basic.component.html',\r\n  styleUrls: ['./basic.component.scss'],\r\n})\r\nexport class BasicComponent {}\r\n");

/***/ }),

/***/ "dQrB":
/*!*****************************************************!*\
  !*** ./src/app/modules/tabs/tabs-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: TabsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsRoutingModule", function() { return TabsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_demo_demo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/demo/demo.component */ "CtBM");


const routes = [
    {
        path: 'demo',
        component: _pages_demo_demo_component__WEBPACK_IMPORTED_MODULE_1__["DemoComponent"],
    },
    {
        path: '',
        redirectTo: 'demo',
        pathMatch: 'full'
    },
];
const TabsRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "dQvZ":
/*!******************************************************************!*\
  !*** ./src/app/modules/tabs/components/basic/basic.component.ts ***!
  \******************************************************************/
/*! exports provided: BasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicComponent", function() { return BasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _projects_core_components_tabs_tab_group_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../projects/core/components/tabs/tab-group.component */ "7pT3");
/* harmony import */ var _projects_core_components_tabs_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../projects/core/components/tabs/tab.component */ "XQYf");



class BasicComponent {
}
BasicComponent.ɵfac = function BasicComponent_Factory(t) { return new (t || BasicComponent)(); };
BasicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BasicComponent, selectors: [["app-basic"]], decls: 7, vars: 0, consts: [["label", "\u6D4B\u8BD51"], ["label", "\u6D4B\u8BD52"], ["label", "\u6D4B\u8BD53"]], template: function BasicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ceui-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ceui-tab", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " content 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ceui-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " content 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ceui-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " content 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_projects_core_components_tabs_tab_group_component__WEBPACK_IMPORTED_MODULE_1__["CeuiTabGroupComponent"], _projects_core_components_tabs_tab_component__WEBPACK_IMPORTED_MODULE_2__["CeuiTabComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNpYy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "dfD7":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tabs/components/basic/basic.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ceui-tab-group>\r\n  <ceui-tab label=\"测试1\">\r\n    content 1\r\n  </ceui-tab>\r\n  <ceui-tab label=\"测试2\">\r\n    content 2\r\n  </ceui-tab>\r\n  <ceui-tab label=\"测试3\">\r\n    content 3\r\n  </ceui-tab>\r\n</ceui-tab-group>");

/***/ })

}]);
//# sourceMappingURL=modules-tabs-tabs-module.js.map