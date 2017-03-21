"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
var app_settings_1 = require('./../app.settings');
require('rxjs/add/operator/toPromise');
var BasicService = (function () {
    function BasicService(http) {
        this.http = http;
    }
    BasicService.prototype.get = function (path) {
        return this.http.get(app_settings_1.AppSettings.API_ENDPOINT + path)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BasicService.prototype.postJson = function (path, body) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(app_settings_1.AppSettings.API_ENDPOINT + path, body, options)
            .toPromise()
            .catch(this.handleError);
    };
    BasicService.prototype.putJson = function (path, body) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.put(app_settings_1.AppSettings.API_ENDPOINT + path, body, options)
            .toPromise()
            .catch(this.handleError);
    };
    BasicService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    BasicService = __decorate([
        __param(0, core_1.Inject(http_1.Http)), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BasicService);
    return BasicService;
}());
exports.BasicService = BasicService;
//# sourceMappingURL=basic.service.js.map