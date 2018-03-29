webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: "<demo></demo>"
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__demo_demo_module__ = __webpack_require__("./src/demo/demo.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__demo_demo_module__["a" /* DemoModule */]],
            providers: [],
            exports: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/components/children/pagination-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitPaginationButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cloukit_theme__ = __webpack_require__("./node_modules/@cloukit/theme/theme.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pagination_model__ = __webpack_require__("./src/components/pagination.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_util__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */





var CloukitPaginationButtonComponent = /** @class */ (function () {
    function CloukitPaginationButtonComponent(themeService) {
        this.themeService = themeService;
        this.onClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.isMouseStillOver = false;
    }
    CloukitPaginationButtonComponent_1 = CloukitPaginationButtonComponent;
    CloukitPaginationButtonComponent.prototype.updateStyle = function () {
        var style = this.themeSelected.getUiStyle(this.ui);
        if (style !== null) {
            this.style = this.themeService.prefixStyle(style.style);
        }
    };
    CloukitPaginationButtonComponent.prototype.ngOnChanges = function () {
        // retain mouseEnter and mouseLeave modifier changes!
        var modifier = null;
        if (this.ui !== null && this.ui !== undefined) {
            modifier = this.ui.modifier;
        }
        this.ui = CloukitPaginationButtonComponent_1.transform(this.paginationItem);
        if (modifier !== null && this.isMouseStillOver) {
            this.ui.modifier = modifier;
        }
        if (this.disabled === true) {
            this.ui.state = __WEBPACK_IMPORTED_MODULE_2__pagination_model__["d" /* Ui */].states.disabled;
            this.ui.modifier = __WEBPACK_IMPORTED_MODULE_2__pagination_model__["d" /* Ui */].modifier.base;
        }
        this.updateStyle();
    };
    CloukitPaginationButtonComponent.prototype.mouseEnter = function () {
        this.ui.modifier = __WEBPACK_IMPORTED_MODULE_2__pagination_model__["d" /* Ui */].modifier.hover;
        this.isMouseStillOver = true;
        this.updateStyle();
    };
    CloukitPaginationButtonComponent.prototype.mouseLeave = function () {
        this.ui.modifier = __WEBPACK_IMPORTED_MODULE_2__pagination_model__["d" /* Ui */].modifier.base;
        this.isMouseStillOver = false;
        this.updateStyle();
    };
    CloukitPaginationButtonComponent.prototype.doClick = function () {
        if (!this.paginationItem.isFiller) {
            this.onClick.emit(new __WEBPACK_IMPORTED_MODULE_2__pagination_model__["a" /* PaginationButtonClickEvent */](this.type, this.paginationItem.page));
        }
    };
    CloukitPaginationButtonComponent.transform = function (pageItem) {
        if (Object(__WEBPACK_IMPORTED_MODULE_3_util__["isNullOrUndefined"])(pageItem)) {
            return new __WEBPACK_IMPORTED_MODULE_1__cloukit_theme__["d" /* UiElement */](__WEBPACK_IMPORTED_MODULE_2__pagination_model__["d" /* Ui */].elements.filler, __WEBPACK_IMPORTED_MODULE_2__pagination_model__["d" /* Ui */].states.disabled, __WEBPACK_IMPORTED_MODULE_2__pagination_model__["d" /* Ui */].modifier.base);
        }
        var uiElement = pageItem.isFiller ? __WEBPACK_IMPORTED_MODULE_2__pagination_model__["d" /* Ui */].elements.filler : __WEBPACK_IMPORTED_MODULE_2__pagination_model__["d" /* Ui */].elements.button;
        var uiState = pageItem.isActive ? __WEBPACK_IMPORTED_MODULE_2__pagination_model__["d" /* Ui */].states.active : __WEBPACK_IMPORTED_MODULE_2__pagination_model__["d" /* Ui */].states.normal;
        return new __WEBPACK_IMPORTED_MODULE_1__cloukit_theme__["d" /* UiElement */](uiElement, uiState, __WEBPACK_IMPORTED_MODULE_2__pagination_model__["d" /* Ui */].modifier.base);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Boolean)
    ], CloukitPaginationButtonComponent.prototype, "disabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Number)
    ], CloukitPaginationButtonComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__pagination_model__["c" /* PaginationItem */])
    ], CloukitPaginationButtonComponent.prototype, "paginationItem", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__cloukit_theme__["a" /* CloukitComponentTheme */])
    ], CloukitPaginationButtonComponent.prototype, "themeSelected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], CloukitPaginationButtonComponent.prototype, "onClick", void 0);
    CloukitPaginationButtonComponent = CloukitPaginationButtonComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'cloukit-pagination-button',
            template: "\n    <button\n      type=\"button\"\n      [disabled]=\"disabled\"\n      [ngStyle]=\"style\"\n      (click)=\"doClick()\"\n      (mouseenter)=\"mouseEnter()\"\n      (mouseleave)=\"mouseLeave()\"\n    >\n      {{paginationItem.label}}\n    </button>",
            styles: [],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__cloukit_theme__["c" /* CloukitThemeService */]])
    ], CloukitPaginationButtonComponent);
    return CloukitPaginationButtonComponent;
    var CloukitPaginationButtonComponent_1;
}());



/***/ }),

/***/ "./src/components/pagination.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitPaginationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cloukit_theme__ = __webpack_require__("./node_modules/@cloukit/theme/theme.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logic_pagination_helper__ = __webpack_require__("./src/logic/pagination-helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pagination_model__ = __webpack_require__("./src/components/pagination.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */




/**
 * Pagination Component.
 *
 * Just use this inside your templates:
 *
 * ```html
 * <cloukit-pagination ...></cloukit-pagination>
 * ```
 */
var CloukitPaginationComponent = /** @class */ (function () {
    function CloukitPaginationComponent(themeService) {
        this.themeService = themeService;
        /**
         * External way to disable the whole pagination e.g.
         * during loading external data
         */
        this.disabled = false;
        /**
         * Event emitted, when page is clicked.
         */
        this.onPageSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.PaginationButtonType = __WEBPACK_IMPORTED_MODULE_3__pagination_model__["b" /* PaginationButtonType */];
        this.state = {
            pages: []
        };
        this.themeSelected = this.themeService.getComponentTheme('pagination');
    }
    CloukitPaginationComponent.prototype.getStyle = function (element) {
        var style = this.themeSelected.getStyle(element, 'normal', 'base');
        return this.themeService.prefixStyle(style);
    };
    /**
     * @overrides OnChanges
     * @hidden
     */
    CloukitPaginationComponent.prototype.ngOnChanges = function () {
        if (this.theme !== undefined && this.theme !== null) {
            this.themeSelected = this.themeService.getComponentTheme(this.theme);
            if (this.themeSelected === null) {
                console.log("WARN: requested theme " + this.theme + " does not exist. Falling back to default theme for pagination.");
                this.themeSelected = this.themeService.getComponentTheme('pagination');
            }
        }
        this.state.pages = Object(__WEBPACK_IMPORTED_MODULE_2__logic_pagination_helper__["a" /* calculatePaginationItems */])(this.total, this.current);
    };
    CloukitPaginationComponent.prototype.selectPage = function (event) {
        if (event.type === __WEBPACK_IMPORTED_MODULE_3__pagination_model__["b" /* PaginationButtonType */]['previous'] &&
            this.isPreviousPossible()) {
            this.onPageSelect.emit(this.current - 1);
        }
        else if (event.type === __WEBPACK_IMPORTED_MODULE_3__pagination_model__["b" /* PaginationButtonType */]['next'] &&
            this.isNextPossible()) {
            this.onPageSelect.emit(this.current + 1);
        }
        else if (event.type === __WEBPACK_IMPORTED_MODULE_3__pagination_model__["b" /* PaginationButtonType */]['normal']) {
            this.onPageSelect.emit(event.page);
        }
    };
    CloukitPaginationComponent.prototype.previousDummyPaginationItem = function () {
        var label = 'Prev';
        if (this.labelPrev !== undefined && this.labelPrev !== null) {
            label = this.labelPrev;
        }
        return new __WEBPACK_IMPORTED_MODULE_3__pagination_model__["c" /* PaginationItem */](-1, false, false, label);
    };
    CloukitPaginationComponent.prototype.nextDummyPaginationItem = function () {
        var label = 'Next';
        if (this.labelNext !== undefined && this.labelNext !== null) {
            label = this.labelNext;
        }
        return new __WEBPACK_IMPORTED_MODULE_3__pagination_model__["c" /* PaginationItem */](-1, false, false, label);
    };
    CloukitPaginationComponent.prototype.isPreviousPossible = function () {
        return this.current > 1;
    };
    CloukitPaginationComponent.prototype.isNextPossible = function () {
        return this.current < this.total;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], CloukitPaginationComponent.prototype, "theme", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Number)
    ], CloukitPaginationComponent.prototype, "total", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Number)
    ], CloukitPaginationComponent.prototype, "current", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Boolean)
    ], CloukitPaginationComponent.prototype, "disabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], CloukitPaginationComponent.prototype, "labelNext", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], CloukitPaginationComponent.prototype, "labelPrev", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], CloukitPaginationComponent.prototype, "onPageSelect", void 0);
    CloukitPaginationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'cloukit-pagination',
            template: "\n  <div [ngStyle]=\"getStyle('wrapper').style\">\n    <cloukit-pagination-button\n      [disabled]=\"!isPreviousPossible() || disabled\"\n      [paginationItem]=\"previousDummyPaginationItem()\"\n      [themeSelected]=\"themeSelected\"\n      [type]=\"PaginationButtonType['previous']\"\n      (onClick)=\"selectPage($event)\"\n    ></cloukit-pagination-button>\n    <cloukit-pagination-button\n      *ngFor=\"let page of state.pages\"\n      [disabled]=\"disabled\"\n      [paginationItem]=\"page\"\n      [themeSelected]=\"themeSelected\"\n      [type]=\"PaginationButtonType['normal']\"\n      (onClick)=\"selectPage($event)\"\n    ></cloukit-pagination-button>\n    <cloukit-pagination-button\n      [disabled]=\"!isNextPossible() || disabled\"\n      [paginationItem]=\"nextDummyPaginationItem()\"\n      [themeSelected]=\"themeSelected\"\n      [type]=\"PaginationButtonType['next']\"\n      (onClick)=\"selectPage($event)\"\n    ></cloukit-pagination-button>\n  </div>",
            styles: [],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__cloukit_theme__["c" /* CloukitThemeService */]])
    ], CloukitPaginationComponent);
    return CloukitPaginationComponent;
}());



/***/ }),

/***/ "./src/components/pagination.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationButtonClickEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PaginationButtonType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PaginationItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Ui; });
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
var PaginationButtonClickEvent = /** @class */ (function () {
    function PaginationButtonClickEvent(type, page) {
        this.type = type;
        this.page = page;
    }
    return PaginationButtonClickEvent;
}());

var PaginationButtonType;
(function (PaginationButtonType) {
    PaginationButtonType[PaginationButtonType["normal"] = 1] = "normal";
    PaginationButtonType[PaginationButtonType["previous"] = 2] = "previous";
    PaginationButtonType[PaginationButtonType["next"] = 3] = "next";
})(PaginationButtonType || (PaginationButtonType = {}));
var PaginationItem = /** @class */ (function () {
    function PaginationItem(page, isActive, isFiller, label) {
        this.page = page;
        this.isActive = isActive;
        this.isFiller = isFiller;
        this.label = label;
    }
    return PaginationItem;
}());

var Ui = /** @class */ (function () {
    function Ui() {
    }
    Ui.elements = {
        filler: 'filler',
        button: 'button',
        wrapper: 'wrapper',
    };
    Ui.states = {
        normal: 'normal',
        active: 'active',
        disabled: 'disabled',
    };
    Ui.modifier = {
        base: 'base',
        hover: 'hover',
    };
    return Ui;
}());



/***/ }),

/***/ "./src/components/pagination.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitPaginationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pagination_component__ = __webpack_require__("./src/components/pagination.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cloukit_theme__ = __webpack_require__("./node_modules/@cloukit/theme/theme.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pagination_theme__ = __webpack_require__("./src/components/pagination.theme.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__children_pagination_button_component__ = __webpack_require__("./src/components/children/pagination-button.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */






var CloukitPaginationModule = /** @class */ (function () {
    function CloukitPaginationModule(themeService) {
        this.themeService = themeService;
        if (this.themeService.getComponentTheme('pagination') === null) {
            this.themeService.registerComponentTheme('pagination', new __WEBPACK_IMPORTED_MODULE_4__pagination_theme__["a" /* CloukitPaginationComponentThemeDefault */]());
        }
    }
    CloukitPaginationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__pagination_component__["a" /* CloukitPaginationComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__pagination_component__["a" /* CloukitPaginationComponent */], __WEBPACK_IMPORTED_MODULE_5__children_pagination_button_component__["a" /* CloukitPaginationButtonComponent */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__cloukit_theme__["c" /* CloukitThemeService */]])
    ], CloukitPaginationModule);
    return CloukitPaginationModule;
}());



/***/ }),

/***/ "./src/components/pagination.theme.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitPaginationComponentThemeDefault; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cloukit_theme__ = __webpack_require__("./node_modules/@cloukit/theme/theme.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pagination_model__ = __webpack_require__("./src/components/pagination.model.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */


var CloukitPaginationComponentThemeDefault = /** @class */ (function (_super) {
    __extends(CloukitPaginationComponentThemeDefault, _super);
    function CloukitPaginationComponentThemeDefault() {
        var _this = _super.call(this) || this;
        //
        // WRAPPER
        //
        _this.createStyle(__WEBPACK_IMPORTED_MODULE_1__pagination_model__["d" /* Ui */].elements.wrapper, __WEBPACK_IMPORTED_MODULE_1__pagination_model__["d" /* Ui */].states.normal, __WEBPACK_IMPORTED_MODULE_1__pagination_model__["d" /* Ui */].modifier.base, {
            style: {
                display: 'flex',
            },
        });
        //
        // BUTTON
        //
        _this.createStyle(__WEBPACK_IMPORTED_MODULE_1__pagination_model__["d" /* Ui */].elements.button, __WEBPACK_IMPORTED_MODULE_1__pagination_model__["d" /* Ui */].states.normal, __WEBPACK_IMPORTED_MODULE_1__pagination_model__["d" /* Ui */].modifier.base, {
            style: {
                alignSelf: 'center',
                display: 'inline-flex',
                flexWrap: 'nowrap',
                maxWidth: '100%',
                color: '#0052cc',
                textDecoration: 'none',
                fontStyle: 'normal',
                fontSize: 'inherit',
                margin: 0,
                outline: 'none',
                textAlign: 'center',
                userSelect: 'none',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                boxSizing: 'border-box',
                padding: '2px 6px 3px',
                border: 0,
                backgroundColor: 'transparent',
                cursor: 'pointer',
            },
        });
        _this.createStyle(__WEBPACK_IMPORTED_MODULE_1__pagination_model__["d" /* Ui */].elements.button, __WEBPACK_IMPORTED_MODULE_1__pagination_model__["d" /* Ui */].states.active, __WEBPACK_IMPORTED_MODULE_1__pagination_model__["d" /* Ui */].modifier.base, _this.merge(_this.getStyle(__WEBPACK_IMPORTED_MODULE_1__pagination_model__["d" /* Ui */].elements.button, __WEBPACK_IMPORTED_MODULE_1__pagination_model__["d" /* Ui */].states.normal, __WEBPACK_IMPORTED_MODULE_1__pagination_model__["d" /* Ui */].modifier.base), {
            style: {
                backgroundColor: '#0052cc',
                color: '#ffffff',
                cursor: 'default',
            },
        }));
        _this.createStyle(__WEBPACK_IMPORTED_MODULE_1__pagination_model__["d" /* Ui */].elements.button, __WEBPACK_IMPORTED_MODULE_1__pagination_model__["d" /* Ui */].states.normal, __WEBPACK_IMPORTED_MODULE_1__pagination_model__["d" /* Ui */].modifier.hover, _this.merge(_this.getStyle(__WEBPACK_IMPORTED_MODULE_1__pagination_model__["d" /* Ui */].elements.button, __WEBPACK_IMPORTED_MODULE_1__pagination_model__["d" /* Ui */].states.normal, __WEBPACK_IMPORTED_MODULE_1__pagination_model__["d" /* Ui */].modifier.base), {
            style: {
                textDecoration: 'underline',
            },
        }));
        _this.createStyle(__WEBPACK_IMPORTED_MODULE_1__pagination_model__["d" /* Ui */].elements.button, __WEBPACK_IMPORTED_MODULE_1__pagination_model__["d" /* Ui */].states.disabled, __WEBPACK_IMPORTED_MODULE_1__pagination_model__["d" /* Ui */].modifier.base, _this.merge(_this.getStyle(__WEBPACK_IMPORTED_MODULE_1__pagination_model__["d" /* Ui */].elements.button, __WEBPACK_IMPORTED_MODULE_1__pagination_model__["d" /* Ui */].states.normal, __WEBPACK_IMPORTED_MODULE_1__pagination_model__["d" /* Ui */].modifier.base), {
            style: {
                color: '#777',
                cursor: 'not-allowed',
            },
        }));
        //
        // FILLER
        //
        _this.createStyle(__WEBPACK_IMPORTED_MODULE_1__pagination_model__["d" /* Ui */].elements.filler, __WEBPACK_IMPORTED_MODULE_1__pagination_model__["d" /* Ui */].states.normal, __WEBPACK_IMPORTED_MODULE_1__pagination_model__["d" /* Ui */].modifier.base, _this.merge(_this.getStyle(__WEBPACK_IMPORTED_MODULE_1__pagination_model__["d" /* Ui */].elements.button, __WEBPACK_IMPORTED_MODULE_1__pagination_model__["d" /* Ui */].states.normal, __WEBPACK_IMPORTED_MODULE_1__pagination_model__["d" /* Ui */].modifier.base), {
            style: {
                color: '#555',
                cursor: 'default',
            },
        }));
        _this.createStyle(__WEBPACK_IMPORTED_MODULE_1__pagination_model__["d" /* Ui */].elements.filler, __WEBPACK_IMPORTED_MODULE_1__pagination_model__["d" /* Ui */].states.disabled, __WEBPACK_IMPORTED_MODULE_1__pagination_model__["d" /* Ui */].modifier.base, _this.merge(_this.getStyle(__WEBPACK_IMPORTED_MODULE_1__pagination_model__["d" /* Ui */].elements.filler, __WEBPACK_IMPORTED_MODULE_1__pagination_model__["d" /* Ui */].states.normal, __WEBPACK_IMPORTED_MODULE_1__pagination_model__["d" /* Ui */].modifier.base), {
            style: {
                color: '#efefef',
                cursor: 'not-allowed',
            },
        }));
        return _this;
    }
    return CloukitPaginationComponentThemeDefault;
}(__WEBPACK_IMPORTED_MODULE_0__cloukit_theme__["a" /* CloukitComponentTheme */]));



/***/ }),

/***/ "./src/demo/demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"padding:10px;\">\n\n  <cloukit-story title=\"Many pages\" story=\"story-00-basic\">\n    <story-00-basic></story-00-basic>\n  </cloukit-story>\n\n  <br><br>\n\n  <cloukit-story title=\"Many pages but disabled\" story=\"story-01-disabled\">\n    <story-01-disabled></story-01-disabled>\n  </cloukit-story>\n\n  <br><br>\n\n  <cloukit-story title=\"Only three pages\" story=\"story-02-small\">\n    <story-02-small></story-02-small>\n  </cloukit-story>\n\n  <br><br>\n\n</div>\n"

/***/ }),

/***/ "./src/demo/demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DemoComponent = /** @class */ (function () {
    function DemoComponent() {
    }
    DemoComponent.sharedStyles = [
        '.demo { font-family: sans-serif; }',
        '.superButton, .superButtonSecondary { border:2px solid #710ECC; outline:0; background-color:#710ECC; color:#fff; border-radius:0px; padding:4px 8px 4px 8px; color:#fff; cursor:pointer; font-size:1rem; }',
        '.superButton:hover, .superButtonSecondary:hover { border:2px solid #710ECC; background-color:#fff; color:#710ECC;  }',
    ];
    DemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'demo',
            template: __webpack_require__("./src/demo/demo.component.html"),
            styles: [],
        })
    ], DemoComponent);
    return DemoComponent;
}());



/***/ }),

/***/ "./src/demo/demo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cloukit_theme__ = __webpack_require__("./node_modules/@cloukit/theme/theme.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cloukit_story__ = __webpack_require__("./node_modules/@cloukit/story/story.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__demo_component__ = __webpack_require__("./src/demo/demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__index__ = __webpack_require__("./src/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stories_story_00_basic__ = __webpack_require__("./src/demo/stories/story-00-basic.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stories_story_01_disabled__ = __webpack_require__("./src/demo/stories/story-01-disabled.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stories_story_02_small__ = __webpack_require__("./src/demo/stories/story-02-small.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DemoModule = /** @class */ (function () {
    function DemoModule(cloukitStoryService) {
        this.cloukitStoryService = cloukitStoryService;
        //
        // INITIALIZE STORY SOURCES
        //
        var baseUrl = document.getElementsByTagName('base')[0].href;
        var storySourceJsonUrl = baseUrl + "assets/demoStoriesSource.json"; // File is auto generated by build chain!
        this.cloukitStoryService.loadStoryJson(storySourceJsonUrl);
    }
    DemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__demo_component__["a" /* DemoComponent */],
                __WEBPACK_IMPORTED_MODULE_6__stories_story_00_basic__["a" /* Story00Component */],
                __WEBPACK_IMPORTED_MODULE_7__stories_story_01_disabled__["a" /* Story01Component */],
                __WEBPACK_IMPORTED_MODULE_8__stories_story_02_small__["a" /* Story02Component */],
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_4__demo_component__["a" /* DemoComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__cloukit_theme__["b" /* CloukitThemeModule */],
                __WEBPACK_IMPORTED_MODULE_5__index__["a" /* CloukitPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_3__cloukit_story__["a" /* CloukitStoryModule */],
            ],
            providers: [],
            bootstrap: [],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__cloukit_story__["b" /* CloukitStoryService */]])
    ], DemoModule);
    return DemoModule;
}());



/***/ }),

/***/ "./src/demo/stories/story-00-basic.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"demo\">\n\n  <cloukit-pagination\n    [total]=\"totalPages\"\n    [current]=\"currentPage\"\n    (onPageSelect)=\"selectPage($event)\"\n  >\n  </cloukit-pagination>\n\n</div>\n"

/***/ }),

/***/ "./src/demo/stories/story-00-basic.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Story00Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__demo_component__ = __webpack_require__("./src/demo/demo.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Story00Component = /** @class */ (function () {
    function Story00Component() {
        this.totalPages = 50;
        this.currentPage = 1;
    }
    Story00Component.prototype.selectPage = function (page) {
        console.log("selected page is " + page);
        this.currentPage = page;
    };
    Story00Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'story-00-basic',
            template: __webpack_require__("./src/demo/stories/story-00-basic.html"),
            styles: [].concat(__WEBPACK_IMPORTED_MODULE_1__demo_component__["a" /* DemoComponent */].sharedStyles),
        })
    ], Story00Component);
    return Story00Component;
}());



/***/ }),

/***/ "./src/demo/stories/story-01-disabled.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"demo\">\n\n  <cloukit-pagination\n    [disabled]=\"true\"\n    [total]=\"totalPages\"\n    [current]=\"currentPage\"\n    (onPageSelect)=\"selectPage($event)\"\n  >\n  </cloukit-pagination>\n\n</div>\n"

/***/ }),

/***/ "./src/demo/stories/story-01-disabled.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Story01Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__demo_component__ = __webpack_require__("./src/demo/demo.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Story01Component = /** @class */ (function () {
    function Story01Component() {
        this.totalPages = 50;
        this.currentPage = 1;
    }
    Story01Component.prototype.selectPage = function (page) {
        console.log("selected page is " + page);
        this.currentPage = page;
    };
    Story01Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'story-01-disabled',
            template: __webpack_require__("./src/demo/stories/story-01-disabled.html"),
            styles: [].concat(__WEBPACK_IMPORTED_MODULE_1__demo_component__["a" /* DemoComponent */].sharedStyles),
        })
    ], Story01Component);
    return Story01Component;
}());



/***/ }),

/***/ "./src/demo/stories/story-02-small.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"demo\">\n\n  <cloukit-pagination\n    [total]=\"totalPages\"\n    [current]=\"currentPage\"\n    (onPageSelect)=\"selectPage($event)\"\n  >\n  </cloukit-pagination>\n\n</div>\n"

/***/ }),

/***/ "./src/demo/stories/story-02-small.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Story02Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__demo_component__ = __webpack_require__("./src/demo/demo.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Story02Component = /** @class */ (function () {
    function Story02Component() {
        this.totalPages = 3;
        this.currentPage = 1;
    }
    Story02Component.prototype.selectPage = function (page) {
        console.log("selected page is " + page);
        this.currentPage = page;
    };
    Story02Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'story-02-small',
            template: __webpack_require__("./src/demo/stories/story-02-small.html"),
            styles: [].concat(__WEBPACK_IMPORTED_MODULE_1__demo_component__["a" /* DemoComponent */].sharedStyles),
        })
    ], Story02Component);
    return Story02Component;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_pagination_module__ = __webpack_require__("./src/components/pagination.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__components_pagination_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_pagination_theme__ = __webpack_require__("./src/components/pagination.theme.ts");
/* unused harmony namespace reexport */




/***/ }),

/***/ "./src/logic/pagination-helper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return calculatePaginationItems; });
/* unused harmony export createFiller */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_pagination_model__ = __webpack_require__("./src/components/pagination.model.ts");
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */


//
// HELPER FUNCTIONS
//
var createFiller = function () { return new __WEBPACK_IMPORTED_MODULE_1__components_pagination_model__["c" /* PaginationItem */](-1, false, true, '...'); };
var createAnItem = function (page, active) { return new __WEBPACK_IMPORTED_MODULE_1__components_pagination_model__["c" /* PaginationItem */](page, active, false, "" + page); };
/**
 * Provides the pages with a total of seven. See Unit Test.
 * Examples:
 *   CASE 1:  1   2   3   *4*   5   6   7
 *            1   2   3   *4*   5
 *   CASE 2:  1   2   3   *4*   5   ..  50
 *   CASE 3:  1   ..  46  *47*  48  49  50
 *   CASE 4:  1   ..  49  *50*  51  ..  90
 */
var calculatePaginationItems = function (total, current) {
    var paginationItems = [];
    if (Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(total) || Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(current)) {
        return paginationItems;
    }
    //
    // CASE 1: Total is smaller or equal seven
    //
    if (total <= 7) {
        for (var i = 1; i <= total; i++) {
            paginationItems.push(new __WEBPACK_IMPORTED_MODULE_1__components_pagination_model__["c" /* PaginationItem */](i, current === i, false, "" + i));
        }
    }
    else 
    //
    // CASE 2: Total is greater than seven AND page is in range of [1-4]
    //
    if (total > 7 && current <= 4) {
        for (var i = 1; i <= 5; i++) {
            paginationItems.push(createAnItem(i, current === i));
        }
        paginationItems.push(createFiller());
        paginationItems.push(createAnItem(total, false));
    }
    else 
    //
    // CASE 3: Total is greater than seven AND page is greater than four AND page is near total
    //
    if (total > 7 && current > 4 && current + 3 >= total) {
        paginationItems.push(createAnItem(1, false));
        paginationItems.push(createFiller());
        for (var i = total - 4; i <= total; i++) {
            paginationItems.push(createAnItem(i, current === i));
        }
    }
    else 
    //
    // CASE 4: Total is greater than seven AND page is greater than four
    //
    if (total > 7 && current > 4) {
        paginationItems.push(createAnItem(1, false));
        paginationItems.push(createFiller());
        paginationItems.push(createAnItem(current - 1, false));
        paginationItems.push(createAnItem(current, true));
        paginationItems.push(createAnItem(current + 1, false));
        paginationItems.push(createFiller());
        paginationItems.push(createAnItem(total, false));
    }
    //
    // END
    //
    return paginationItems;
};



/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map