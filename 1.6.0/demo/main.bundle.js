webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: "\n    <div class=\"demo\">\n      <demo></demo>\n    </div>\n  "
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__demo_demo_module__ = __webpack_require__("../../../../../src/demo/demo.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__demo_demo_module__["a" /* DemoModule */]],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/components/children/pagination-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitPaginationButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cloukit_theme__ = __webpack_require__("../../../../@cloukit/theme/theme.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pagination_model__ = __webpack_require__("../../../../../src/components/pagination.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util__ = __webpack_require__("../../../../util/util.js");
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





var CloukitPaginationButtonComponent = CloukitPaginationButtonComponent_1 = (function () {
    function CloukitPaginationButtonComponent(themeService) {
        this.themeService = themeService;
        this.onClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.isMouseStillOver = false;
    }
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
    return CloukitPaginationButtonComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], CloukitPaginationButtonComponent.prototype, "disabled", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__pagination_model__["b" /* PaginationButtonType */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__pagination_model__["b" /* PaginationButtonType */]) === "function" && _a || Object)
], CloukitPaginationButtonComponent.prototype, "type", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__pagination_model__["c" /* PaginationItem */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__pagination_model__["c" /* PaginationItem */]) === "function" && _b || Object)
], CloukitPaginationButtonComponent.prototype, "paginationItem", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__cloukit_theme__["a" /* CloukitComponentTheme */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__cloukit_theme__["a" /* CloukitComponentTheme */]) === "function" && _c || Object)
], CloukitPaginationButtonComponent.prototype, "themeSelected", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]) === "function" && _d || Object)
], CloukitPaginationButtonComponent.prototype, "onClick", void 0);
CloukitPaginationButtonComponent = CloukitPaginationButtonComponent_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'cloukit-pagination-button',
        template: "\n    <button\n      type=\"button\"\n      [disabled]=\"disabled\"\n      [ngStyle]=\"style\"\n      (click)=\"doClick()\"\n      (mouseenter)=\"mouseEnter()\"\n      (mouseleave)=\"mouseLeave()\"\n    >\n      {{paginationItem.label}}\n    </button>",
        styles: [],
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__cloukit_theme__["c" /* CloukitThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__cloukit_theme__["c" /* CloukitThemeService */]) === "function" && _e || Object])
], CloukitPaginationButtonComponent);

var CloukitPaginationButtonComponent_1, _a, _b, _c, _d, _e;
//# sourceMappingURL=pagination-button.component.js.map

/***/ }),

/***/ "../../../../../src/components/pagination.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitPaginationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cloukit_theme__ = __webpack_require__("../../../../@cloukit/theme/theme.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logic_pagination_helper__ = __webpack_require__("../../../../../src/logic/pagination-helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pagination_model__ = __webpack_require__("../../../../../src/components/pagination.model.ts");
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
var CloukitPaginationComponent = (function () {
    function CloukitPaginationComponent(themeService) {
        this.themeService = themeService;
        /**
         * External way to disable the whole pagination e.g.
         * during loading external data
         */
        this.disabled = false;
        /**
         * Event emitted, when page is clicked.
         * @type {EventEmitter<any>}
         */
        this.onPageSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
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
    return CloukitPaginationComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], CloukitPaginationComponent.prototype, "theme", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], CloukitPaginationComponent.prototype, "total", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], CloukitPaginationComponent.prototype, "current", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], CloukitPaginationComponent.prototype, "disabled", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], CloukitPaginationComponent.prototype, "labelNext", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], CloukitPaginationComponent.prototype, "labelPrev", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]) === "function" && _a || Object)
], CloukitPaginationComponent.prototype, "onPageSelect", void 0);
CloukitPaginationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'cloukit-pagination',
        template: "\n  <div [ngStyle]=\"getStyle('wrapper').style\">\n    <cloukit-pagination-button\n      [disabled]=\"!isPreviousPossible() || disabled\"\n      [paginationItem]=\"previousDummyPaginationItem()\"\n      [themeSelected]=\"themeSelected\"\n      [type]=\"PaginationButtonType['previous']\"\n      (onClick)=\"selectPage($event)\"      \n    ></cloukit-pagination-button>\n    <cloukit-pagination-button\n      *ngFor=\"let page of state.pages\"\n      [disabled]=\"disabled\"\n      [paginationItem]=\"page\"\n      [themeSelected]=\"themeSelected\"\n      [type]=\"PaginationButtonType['normal']\"\n      (onClick)=\"selectPage($event)\"\n    ></cloukit-pagination-button>\n    <cloukit-pagination-button\n      [disabled]=\"!isNextPossible() || disabled\"\n      [paginationItem]=\"nextDummyPaginationItem()\"\n      [themeSelected]=\"themeSelected\"\n      [type]=\"PaginationButtonType['next']\"\n      (onClick)=\"selectPage($event)\"\n    ></cloukit-pagination-button>\n  </div>",
        styles: [],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__cloukit_theme__["c" /* CloukitThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__cloukit_theme__["c" /* CloukitThemeService */]) === "function" && _b || Object])
], CloukitPaginationComponent);

var _a, _b;
//# sourceMappingURL=pagination.component.js.map

/***/ }),

/***/ "../../../../../src/components/pagination.model.ts":
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
var PaginationButtonClickEvent = (function () {
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
var PaginationItem = (function () {
    function PaginationItem(page, isActive, isFiller, label) {
        this.page = page;
        this.isActive = isActive;
        this.isFiller = isFiller;
        this.label = label;
    }
    return PaginationItem;
}());

var Ui = (function () {
    function Ui() {
    }
    return Ui;
}());

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
//# sourceMappingURL=pagination.model.js.map

/***/ }),

/***/ "../../../../../src/components/pagination.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitPaginationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pagination_component__ = __webpack_require__("../../../../../src/components/pagination.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cloukit_theme__ = __webpack_require__("../../../../@cloukit/theme/theme.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pagination_theme__ = __webpack_require__("../../../../../src/components/pagination.theme.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__children_pagination_button_component__ = __webpack_require__("../../../../../src/components/children/pagination-button.component.ts");
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






var CloukitPaginationModule = (function () {
    function CloukitPaginationModule(themeService) {
        this.themeService = themeService;
        if (this.themeService.getComponentTheme('pagination') === null) {
            this.themeService.registerComponentTheme('pagination', new __WEBPACK_IMPORTED_MODULE_4__pagination_theme__["a" /* CloukitPaginationComponentThemeDefault */]());
        }
    }
    return CloukitPaginationModule;
}());
CloukitPaginationModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__pagination_component__["a" /* CloukitPaginationComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__pagination_component__["a" /* CloukitPaginationComponent */], __WEBPACK_IMPORTED_MODULE_5__children_pagination_button_component__["a" /* CloukitPaginationButtonComponent */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__cloukit_theme__["c" /* CloukitThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__cloukit_theme__["c" /* CloukitThemeService */]) === "function" && _a || Object])
], CloukitPaginationModule);

var _a;
//# sourceMappingURL=pagination.module.js.map

/***/ }),

/***/ "../../../../../src/components/pagination.theme.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitPaginationComponentThemeDefault; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cloukit_theme__ = __webpack_require__("../../../../@cloukit/theme/theme.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pagination_model__ = __webpack_require__("../../../../../src/components/pagination.model.ts");
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


var CloukitPaginationComponentThemeDefault = (function (_super) {
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

//# sourceMappingURL=pagination.theme.js.map

/***/ }),

/***/ "../../../../../src/demo/demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"demo\">\n  <h3>Pagination</h3>\n\n  <cloukit-pagination\n    [total]=\"totalPages\"\n    [current]=\"currentPage\"\n    (onPageSelect)=\"selectPage($event)\"\n  >\n  </cloukit-pagination>\n\n  <br><br>\n\n  <h3>Pagination disabled externally</h3>\n\n  <cloukit-pagination\n    [disabled]=\"true\"\n    [total]=\"totalPages\"\n    [current]=\"currentPage\"\n    (onPageSelect)=\"selectPage($event)\"\n  >\n  </cloukit-pagination>\n\n  <br><br>\n\n  <h3>Pagination with just three items</h3>\n\n  <cloukit-pagination\n    [total]=\"totalPagesDemo2\"\n    [current]=\"currentPageDemo2\"\n    (onPageSelect)=\"selectPageDemo2($event)\"\n  >\n  </cloukit-pagination>\n</div>\n"

/***/ }),

/***/ "../../../../../src/demo/demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DemoComponent = (function () {
    function DemoComponent() {
        this.totalPages = 50;
        this.currentPage = 1;
        this.totalPagesDemo2 = 3;
        this.currentPageDemo2 = 1;
    }
    DemoComponent.prototype.selectPage = function (page) {
        console.log("selected page is " + page);
        this.currentPage = page;
    };
    DemoComponent.prototype.selectPageDemo2 = function (page) {
        this.currentPageDemo2 = page;
    };
    return DemoComponent;
}());
DemoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'demo',
        template: __webpack_require__("../../../../../src/demo/demo.component.html"),
        styles: ['.demo { font-family: sans-serif; }'],
    })
], DemoComponent);

//# sourceMappingURL=demo.component.js.map

/***/ }),

/***/ "../../../../../src/demo/demo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cloukit_theme__ = __webpack_require__("../../../../@cloukit/theme/theme.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__demo_component__ = __webpack_require__("../../../../../src/demo/demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index__ = __webpack_require__("../../../../../src/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DemoModule = (function () {
    function DemoModule() {
    }
    return DemoModule;
}());
DemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_3__demo_component__["a" /* DemoComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__demo_component__["a" /* DemoComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__cloukit_theme__["b" /* CloukitThemeModule */], __WEBPACK_IMPORTED_MODULE_4__index__["a" /* CloukitPaginationModule */]],
        providers: [],
        bootstrap: []
    })
], DemoModule);

//# sourceMappingURL=demo.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_pagination_module__ = __webpack_require__("../../../../../src/components/pagination.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__components_pagination_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_pagination_theme__ = __webpack_require__("../../../../../src/components/pagination.theme.ts");
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/logic/pagination-helper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return calculatePaginationItems; });
/* unused harmony export createFiller */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_pagination_model__ = __webpack_require__("../../../../../src/components/pagination.model.ts");
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

//# sourceMappingURL=pagination-helper.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map