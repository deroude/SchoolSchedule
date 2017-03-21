var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Router, ActivatedRoute } from '@angular/router';
import { Component, HostListener } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export var AppComponent = (function () {
    function AppComponent(route, router, sanitizer) {
        this.route = route;
        this.router = router;
        this.sanitizer = sanitizer;
    }
    AppComponent.prototype.beforeUnloadHander = function () {
        // return confirm("noo");
    };
    AppComponent.prototype.doSearch = function () {
        this.router.navigate(["/landing"], { queryParams: { 'search': this.search } });
    };
    AppComponent.prototype.fileChanged = function ($event) {
        var _this = this;
        //get file
        //need to cast html tag
        //reference： http://stackoverflow.com/questions/12989741/the-property-value-does-not-exist-on-value-of-type-htmlelement
        var file = document.getElementById("file").files[0];
        //new fileReader
        var fileReader = new FileReader();
        fileReader.readAsText(file);
        //try to read file, this part does not work at all, need a solution
        fileReader.onloadend = function (e) {
            console.log(fileReader.result);
            _this.configDownload = _this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(new Blob([fileReader.result], { "type": "text/plain;charset=utf-8" })));
        };
    };
    __decorate([
        HostListener('window:beforeunload'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], AppComponent.prototype, "beforeUnloadHander", null);
    AppComponent = __decorate([
        Component({
            selector: 'ld-app',
            templateUrl: '../templates/app.component.html',
        }), 
        __metadata('design:paramtypes', [ActivatedRoute, Router, DomSanitizer])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map